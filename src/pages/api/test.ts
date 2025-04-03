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

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-01-27.acacia',
    timeout: 10000,
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        console.log('testStripe called')
        const session = await stripe.checkout.sessions.retrieve(
            'cs_test_a1zz7KyWoLYfy6lUIUYVATdiQWcvx9QYZJhZ8dAEmRyN9ZIRUnaijmT7Fs',
            {
                expand: ['line_items'],
            }
        )
        console.log('Session:', session)
        res.status(200).json({ session })
    } catch (error: any) {
        console.error('Error in testStripe route:', error)
        res.status(500).json({ error: error.message })
    }
}
