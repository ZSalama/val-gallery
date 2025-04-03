import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import prisma from '@/lib/prisma'
import { addOrder } from '@/app/actions'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET

async function getRawBody(req: NextApiRequest): Promise<string> {
    return new Promise((resolve, reject) => {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk
        })
        req.on('end', () => {
            resolve(body)
        })
        req.on('error', (err) => {
            reject(err)
        })
    })
}

export const config = {
    api: {
        bodyParser: false,
    },
    runtime: 'nodejs',
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' })
    }

    let event
    const signature = req.headers['stripe-signature'] as string

    try {
        const rawBody = await getRawBody(req)
        event = stripe.webhooks.constructEvent(
            rawBody,
            signature,
            endpointSecret as string
        )
    } catch (error: any) {
        console.error('Webhook signature verification failed:', error.message)
        return res
            .status(400)
            .json({ error: 'Webhook signature verification failed' })
    }

    // ✅ Ensure the response is always sent
    // console.log(`✅ Received event: ${event.type}`)
    res.status(200).json({ received: true })

    try {
        switch (event.type) {
            case 'payment_intent.succeeded':
                // console.log('✅ Payment succeeded:', event.data.object)
                break
            case 'checkout.session.completed':
                console.log('✅ Checkout session completed:', event.data.object)
                console.log('event id: ', event.data.object.id)

                await addOrder(event.data.object.id)

                // let sessionWithLineItems: Stripe.Checkout.Session | null = null
                // console.log('getting line items')
                // try {
                //     sessionWithLineItems =
                //         await stripe.checkout.sessions.retrieve(
                //             event.data.object.id,
                //             { expand: ['line_items'] }
                //         )
                // } catch (error: any) {
                //     console.error('Error retrieving line items:', error.message)
                // }
                // if (!sessionWithLineItems) {
                //     console.error('Session with line items not found')
                //     return
                // }
                // console.log(
                //     '✅ Checkout session with line items:',
                //     sessionWithLineItems
                // )
                // // if (sessionWithLineItems.line_items) {
                // //     console.log(
                // //         'line items data: ',
                // //         sessionWithLineItems.line_items.data
                // //     )
                // // }
                // const user = await prisma.user.findUnique({
                //     where: { email: event.data.object.customer_email! },
                // })
                // if (!user) {
                //     console.error('User not found')
                //     return
                // }
                // // console.log('User:', user.email)
                // const address = await prisma.address.create({
                //     data: {
                //         line1: event.data.object.customer_details?.address
                //             ?.line1,
                //         line2: event.data.object.customer_details?.address
                //             ?.line2,
                //         city: event.data.object.customer_details?.address?.city,
                //         state: event.data.object.customer_details?.address
                //             ?.state,
                //         zip: event.data.object.customer_details?.address
                //             ?.postal_code,
                //         country:
                //             event.data.object.customer_details?.address
                //                 ?.country,
                //     },
                // })
                // console.log('Address:', address)

                // if (!sessionWithLineItems.line_items) {
                //     console.error('Line items not found on checkout session')
                //     return
                // }
                // const order = await prisma.order.create({
                //     data: {
                //         userId: user.id,
                //         total: event.data.object.amount_total! / 100,
                //         addressId: address.id,
                //         items: {
                //             create: sessionWithLineItems.line_items.data.map(
                //                 (item: any) => ({
                //                     productId: item.price.id,
                //                     quantity: item.quantity,
                //                     price: item.price.unit_amount! / 100,
                //                     productName: item.description,
                //                     // amount: item.amount / 100,
                //                 })
                //             ),
                //         },
                //     },
                // })
                // console.log('Order:', order)

                break
            case 'charge.succeeded':
                // console.log('✅ Charge succeeded:', event.data.object)
                console.log('✅ Charge succeeded:')
                break
            case 'payment_intent.created':
                // console.log('✅ Payment intent created:', event.data.object)
                console.log('✅ Payment intent created:')
                break
            case 'charge.updated':
                // console.log('✅ Charge updated:', event.data.object)
                console.log('✅ Charge updated:')
                break
            case 'product.created':
                // console.log('✅ Product created:', event.data.object)
                console.log('✅ Product created:')
                break
            case 'price.created':
                // console.log('✅ Price created:', event.data.object)
                console.log('✅ Price created:')
                break
            default:
                console.warn(`⚠️ Unhandled event type: ${event.type}`)
                break
        }
    } catch (error: any) {
        console.error('Error processing event:', error.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
