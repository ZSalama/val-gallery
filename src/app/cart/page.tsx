'use client'

import { useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { useCart } from '@/context/CartContext'
import { redirect } from 'next/navigation'
import styles from './page.module.css'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error(
        'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set in environment variables'
    )
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Store() {
    const { state, dispatch } = useCart()
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
            body: JSON.stringify({ items: state.items }),
        })

        const session = await response.json()

        if (stripe) {
            await stripe.redirectToCheckout({ sessionId: session.id })
        } else {
            console.error('Stripe or session ID is not available')
        }
    }

    const clearCart = () => {
        dispatch({ type: 'clear' })
    }

    console.log('on load console log')
    console.log(state.items)
    return (
        <>
            <div className={styles.cart}>
                <h2>Cart Items</h2>
                {state.items.length > 0 ? (
                    <ul>
                        {state.items.map((item) => (
                            <li key={item.price}>
                                <p>{item.name}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: ${(item.cost / 100).toFixed(2)}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>
            <section>
                <button onClick={handleCheckout}>Checkout</button>
            </section>
            <div>
                <button onClick={clearCart}>Clear Cart</button>
            </div>
        </>
    )
}
