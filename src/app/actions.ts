// shipping address now handled by stripe

// 'use server'

// import { PrismaClient } from '@prisma/client'
// import { addressSchema } from '@/lib/types'
// import { auth } from '@/lib/auth'
// import { headers } from 'next/headers'
// import { revalidatePath } from 'next/cache'

// const prisma = new PrismaClient()

// export async function submitForm(formData: addressSchema) {
//     // Get the user's session
//     const session = await auth.api.getSession({
//         headers: await headers(), // you need to pass the headers object.
//     })
//     if (!session) {
//         return 'User session not found'
//     }
//     // Validate input data
//     const result = addressSchema.safeParse(formData)

//     if (!result.success) {
//         return 'Invalid form data' // Ideally, return detailed errors
//     }

//     const { name, street, city, state, zip, country } = result.data

//     try {
//         // Save form data to the database
//         await prisma.address.create({
//             data: {
//                 name,
//                 street,
//                 city,
//                 state,
//                 zip,
//                 country,
//                 createdAt: new Date(),
//                 userId: session.user.id,
//             },
//         })
//         revalidatePath('/account/address')
//         return `Thank you, ${name}! Your message has been saved.`
//     } catch (error) {
//         console.error('Database Error:', error)
//         return 'An error occurred while saving your message.'
//     }
// }

import Stripe from 'stripe'
import prisma from '@/lib/prisma'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function addOrder(eventID: string) {
    const orderResponse = await stripe.checkout.sessions.retrieve(eventID, {
        expand: ['line_items'],
    })
    console.log('order: ', orderResponse)
    if (orderResponse.line_items) {
        console.log('order line items: ', orderResponse.line_items)
        console.log('order line items data: ', orderResponse.line_items.data)
    } else {
        return console.error('No line items found')
    }
    const user = await prisma.user.findUnique({
        where: { email: orderResponse.customer_email ?? undefined },
    })
    if (!user) {
        console.error('User not found')
        return
    }
    // console.log('User:', user.email)
    const address = await prisma.address.create({
        data: {
            line1: orderResponse.customer_details?.address?.line1,
            line2: orderResponse.customer_details?.address?.line2,
            city: orderResponse.customer_details?.address?.city,
            state: orderResponse.customer_details?.address?.state,
            zip: orderResponse.customer_details?.address?.postal_code,
            country: orderResponse.customer_details?.address?.country,
        },
    })
    console.log('Address:', address)

    if (!orderResponse.line_items) {
        console.error('Line items not found on checkout session')
        return
    }
    const order = await prisma.order.create({
        data: {
            userId: user.id,
            total: orderResponse.amount_total! / 100,
            addressId: address.id,
            items: {
                create: orderResponse.line_items.data.map((item: any) => ({
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
}
