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

    const { cart, removeItemFromCart, clearCart, getTotal } = useCartContext()

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
        if (userSession?.user.email === undefined) {
            redirect('/account/login')
        }
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
        <div className='rounded-lg min-h-full'>
            <div className='mt-32 max-w-xl mx-auto p-4 shadow-lg rounded-lg '>
                <div className='bg-gray-200 shadow rounded-lg p-6'>
                    <h2 className='text-2xl font-bold mb-4'>Shopping Cart</h2>
                    <div> __________________ </div>
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
                                    className='bg-gray-600 hover:bg-gray-800 text-white hover:text-gray-200 px-3 py-1 rounded'
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                    <div> ---------------- </div>
                    <div> Subtotal: ${getTotal()}</div>
                </div>

                <section className='mt-6 flex justify-between'>
                    <button
                        onClick={handleCheckout}
                        className='bg-gray-800 hover:bg-gray-200 text-gray-200 hover:text-gray-800 font-semibold px-4 py-2 rounded border-2'
                    >
                        Checkout
                    </button>
                    <button
                        onClick={() => clearCart()}
                        className='bg-gray-600 hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded border-2'
                    >
                        Clear Cart
                    </button>
                </section>
                <p className='bg-gray-200 my-4 p-4  rounded-lg shadow'>
                    <strong>Note:</strong> Free shipping on orders over $25.00.
                </p>
                <p className='bg-gray-200 my-4 p-4  rounded-lg shadow'>
                    <strong>Note:</strong> Cards come in size 5&quot; by 7&quot;
                    and packs of 4.
                </p>
                <p className='bg-gray-200 my-4 p-4  rounded-lg shadow'>
                    <strong>Note:</strong> This is a test version of the
                    checkout process. You will not be charged. Use the test card
                    number: 4242 4242 4242 4242
                </p>
            </div>
        </div>
    )
}
