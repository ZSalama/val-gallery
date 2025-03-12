import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

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
                console.log('✅ Payment succeeded:', event.data.object)
                break
            case 'checkout.session.completed':
                console.log('✅ Checkout session completed:', event.data.object)
                break
            case 'charge.succeeded':
                console.log('✅ Charge succeeded:', event.data.object)
                break
            case 'payment_intent.created':
                console.log('✅ Payment intent created:', event.data.object)
                break
            case 'charge.updated':
                console.log('✅ Charge updated:', event.data.object)
                break
            case 'product.created':
                console.log('✅ Product created:', event.data.object)
                break
            case 'price.created':
                console.log('✅ Price created:', event.data.object)
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
