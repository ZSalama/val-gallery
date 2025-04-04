'use client'

import { useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { redirect } from 'next/navigation'
import { useCartContext } from '@/context/CartContext'
import { authClient } from '@/lib/auth-client'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error(
        'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set in environment variables'
    )
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Cart() {
    const { data: userSession } = authClient.useSession()
    // console.log('userSession', userSession?.user.email)

    const { cart, removeItemFromCart, clearCart } = useCartContext()

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search)
        if (query.get('success')) {
            console.log('Order placed! You will receive an email confirmation.')
            redirect('/success')
        }

        if (query.get('canceled')) {
            console.log(
                'Order canceled -- continue to shop around and checkout when you are ready.'
            )
            redirect('/canceled')
        }
    }, [])

    const handleCheckout = async (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault()
        const stripe = await stripePromise

        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items: cart,
                email: userSession?.user.email,
            }),
        })

        const session = await response.json()

        if (stripe) {
            await stripe.redirectToCheckout({ sessionId: session.id })
        } else {
            console.error('Stripe or session ID is not available')
        }
    }

    return (
        // <>
        //     <div>
        //         <h2>Cart Items</h2>
        //         {cart.length === 0 ? (
        //             <p>Your cart is empty</p>
        //         ) : (
        //             cart.map((item, index) => (
        //                 <div key={index}>
        //                     <p>
        //                         {item.name} - {item.quantity} x ${item.cost}
        //                     </p>
        //                     <button onClick={() => removeItemFromCart(item.id)}>
        //                         Remove
        //                     </button>
        //                 </div>
        //             ))
        //         )}
        //     </div>
        //     <section>
        //         <button onClick={handleCheckout}>Checkout</button>
        //     </section>
        //     <div>
        //         <button onClick={() => clearCart()}>Clear Cart</button>
        //     </div>
        // </>
        <>
            <div className='mt-32 max-w-5xl mx-auto p-4'>
                <div className='bg-gray-200 shadow rounded-lg p-6'>
                    <h2 className='text-2xl font-bold mb-4'>Cart Items</h2>
                    {cart.length === 0 ? (
                        <p className='text-gray-600'>Your cart is empty</p>
                    ) : (
                        cart.map((item, index) => (
                            <div
                                key={index}
                                className='flex justify-between items-center border-b border-gray-200 py-2 gap-5'
                            >
                                <p className='text-gray-800'>
                                    {item.name} -{' '}
                                    <span className='font-semibold'>
                                        {item.quantity}
                                    </span>{' '}
                                    x ${item.cost}
                                </p>
                                <button
                                    onClick={() => removeItemFromCart(item.id)}
                                    className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded'
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <section className='mt-6 flex justify-between'>
                    <button
                        onClick={handleCheckout}
                        className='bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded'
                    >
                        Checkout
                    </button>
                    <button
                        onClick={() => clearCart()}
                        className='bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded'
                    >
                        Clear Cart
                    </button>
                </section>
            </div>
            <p className='bg-gray-200 max-w-sm mx-auto p-4 mt-4 rounded-lg shadow'>
                <strong>Note:</strong> This is a test version of the checkout
                process. You will not be charged.
            </p>
            <p className='bg-gray-200 max-w-sm mx-auto p-4 m-4 rounded-lg shadow'>
                *Pictures of the card products were generated using AI. Printed
                cards will use original picture shown on the first image of the
                product page.
            </p>
        </>
    )
}
