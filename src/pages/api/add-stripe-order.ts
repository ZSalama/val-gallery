import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import prisma from '@/lib/prisma'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-04-22.dahlia',
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
        const session = await stripe.checkout.sessions.retrieve(
            sessionID,
            {
                expand: ['line_items'],
            }
        )
        if (!session) {
            console.error('Order not found')
            return
        }
        if (session.line_items) {
            console.info(
                `Creating order from checkout session ${session.id}`
            )
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
        console.info(`Order ${order.id} created from checkout session`)
        res.status(200).json({ session })
    } catch (error: any) {
        console.error('Error creating Stripe order:', error)
        res.status(500).json({ error: error.message })
    }
}
