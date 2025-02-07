import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import type { CartItem } from '@/hooks/cartHooks'

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set in environment variables')
}
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { items }: { items: CartItem[] } = req.body

        if (!items || !Array.isArray(items)) {
            return res.status(400).json({ error: 'Invalid items' })
        }
        const lineItems = items.map((item) => ({
            price: item.id,
            quantity: item.quantity,
        }))

        try {
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                line_items: lineItems,
                mode: 'payment',
                payment_method_types: ['card'],
                success_url: `${req.headers.origin}/cart/?success=true`,
                cancel_url: `${req.headers.origin}/cart/?canceled=true`,
            })
            res.status(200).json({ id: session.id })

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            res.status(err.statusCode || 500).json(err.message)
        }
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}
