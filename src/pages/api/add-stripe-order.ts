// import type { NextApiRequest, NextApiResponse } from 'next'

// type ResponseData = {
//   message: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: 'Hello from Next.js!' })
// }

import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import prisma from '@/lib/prisma'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-01-27.acacia',
    timeout: 10000,
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const sessionID = req.query.sessionID as string

    if (!sessionID) {
        return res.status(400).json({ error: 'Missing sessionID parameter' })
    }
    try {
        console.log('testStripe called')
        const session = await stripe.checkout.sessions.retrieve(
            // 'cs_test_a1zz7KyWoLYfy6lUIUYVATdiQWcvx9QYZJhZ8dAEmRyN9ZIRUnaijmT7Fs',
            sessionID,
            {
                expand: ['line_items'],
            }
        )
        console.log('Session:', session)
        if (!session) {
            console.error('Order not found')
            return
        }
        if (session.line_items) {
            console.log('order line items: ', session.line_items)
            console.log('order line items data: ', session.line_items.data)
        } else {
            return console.error('No line items found')
        }
        const user = await prisma.user.findUnique({
            where: { email: session.customer_email ?? undefined },
        })
        if (!user) {
            console.error('User not found')
            return
        }
        // console.log('User:', user.email)
        const address = await prisma.address.create({
            data: {
                line1: session.customer_details?.address?.line1,
                line2: session.customer_details?.address?.line2,
                city: session.customer_details?.address?.city,
                state: session.customer_details?.address?.state,
                zip: session.customer_details?.address?.postal_code,
                country: session.customer_details?.address?.country,
            },
        })
        console.log('Address:', address)

        if (!session.line_items) {
            console.error('Line items not found on checkout session')
            return
        }
        const order = await prisma.order.create({
            data: {
                userId: user.id,
                total: session.amount_total! / 100,
                addressId: address.id,
                items: {
                    create: session.line_items.data.map((item: any) => ({
                        productId: item.price.id,
                        quantity: item.quantity,
                        price: item.price.unit_amount! / 100,
                        productName: item.description,
                        // amount: item.amount / 100,
                    })),
                },
            },
        })
        console.log('Order:', order)
        res.status(200).json({ session })
    } catch (error: any) {
        console.error('Error in testStripe route:', error)
        res.status(500).json({ error: error.message })
    }
}
