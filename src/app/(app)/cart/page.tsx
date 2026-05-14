'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
    ArrowRight,
    PackageCheck,
    ShieldCheck,
    ShoppingBag,
    Trash2,
} from 'lucide-react'
import { useCartContext } from '@/context/CartContext'
import styles from './page.module.css'

const freeShippingMinimum = 25

const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount)

export default function Cart() {
    const router = useRouter()
    const { cart, removeItemFromCart, clearCart, getTotal } = useCartContext()
    const [checkoutError, setCheckoutError] = useState('')
    const [isCheckingOut, setIsCheckingOut] = useState(false)

    const subtotal = getTotal()
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0)
    const amountToFreeShipping = Math.max(freeShippingMinimum - subtotal, 0)
    const hasItems = cart.length > 0

    useEffect(() => {
        const query = new URLSearchParams(window.location.search)
        if (query.get('success')) {
            router.replace('/success')
        }

        if (query.get('canceled')) {
            router.replace('/canceled')
        }
    }, [router])

    const handleCheckout = async (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault()

        if (!hasItems || isCheckingOut) {
            return
        }

        setCheckoutError('')
        setIsCheckingOut(true)

        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: cart,
                }),
            })

            const session = await response.json()

            if (!response.ok) {
                throw new Error(
                    typeof session === 'string'
                        ? session
                        : 'Checkout could not be started.'
                )
            }

            if (session.url) {
                window.location.assign(session.url)
                return
            }

            throw new Error('Checkout URL is not available.')
        } catch (error) {
            setCheckoutError(
                error instanceof Error
                    ? error.message
                    : 'Checkout could not be started.'
            )
            setIsCheckingOut(false)
        }
    }

    return (
        <main className={styles.cartPage}>
            <section className={styles.hero}>
                <p className={styles.eyebrow}>Shopping Cart</p>
                <h1 className={styles.title}>Review your artwork order</h1>
                <p className={styles.intro}>
                    Cards are 5&quot; by 7&quot; and sold in packs of 4. Free
                    shipping is available on orders over $25.
                </p>
            </section>

            <section className={styles.cartShell} aria-label='Shopping cart'>
                <div className={styles.itemsPanel}>
                    <div className={styles.panelHeader}>
                        <div>
                            <h2>Your Cart</h2>
                            <p>
                                {hasItems
                                    ? `${itemCount} ${itemCount === 1 ? 'item' : 'items'} selected`
                                    : 'No items selected yet'}
                            </p>
                        </div>
                        {hasItems && (
                            <button
                                type='button'
                                className={styles.clearButton}
                                onClick={() => clearCart()}
                            >
                                Clear cart
                            </button>
                        )}
                    </div>

                    {hasItems ? (
                        <ul className={styles.itemList}>
                            {cart.map((item) => (
                                <li key={item.id} className={styles.cartItem}>
                                    <div className={styles.itemArt}>
                                        <ShoppingBag
                                            aria-hidden='true'
                                            size={26}
                                            strokeWidth={1.8}
                                        />
                                    </div>
                                    <div className={styles.itemDetails}>
                                        <div>
                                            <h3>{item.name}</h3>
                                            <p>
                                                {formatCurrency(item.cost)} per
                                                pack
                                            </p>
                                        </div>
                                        <div className={styles.itemMeta}>
                                            <span>Qty {item.quantity}</span>
                                            <strong>
                                                {formatCurrency(
                                                    item.cost * item.quantity
                                                )}
                                            </strong>
                                        </div>
                                    </div>
                                    <button
                                        type='button'
                                        className={styles.removeButton}
                                        onClick={() =>
                                            removeItemFromCart(item.id)
                                        }
                                        aria-label={`Remove ${item.name} from cart`}
                                        title={`Remove ${item.name}`}
                                    >
                                        <Trash2
                                            aria-hidden='true'
                                            size={18}
                                            strokeWidth={2}
                                        />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className={styles.emptyState}>
                            <ShoppingBag aria-hidden='true' size={34} />
                            <h2>Your cart is empty</h2>
                            <p>
                                Browse the gallery and add card packs when you
                                find a piece you want to order.
                            </p>
                            <Link href='/gallery' className={styles.secondaryLink}>
                                Browse gallery
                            </Link>
                        </div>
                    )}
                </div>

                <aside className={styles.summaryPanel} aria-label='Order summary'>
                    <div className={styles.summaryHeader}>
                        <h2>Order Summary</h2>
                        <span>{formatCurrency(subtotal)}</span>
                    </div>

                    <div className={styles.summaryRows}>
                        <div className={styles.summaryRow}>
                            <span>Subtotal</span>
                            <strong>{formatCurrency(subtotal)}</strong>
                        </div>
                        <div className={styles.summaryRow}>
                            <span>Shipping</span>
                            <strong>
                                {subtotal >= freeShippingMinimum
                                    ? 'Free'
                                    : 'Calculated at checkout'}
                            </strong>
                        </div>
                    </div>

                    <div className={styles.shippingCallout}>
                        <PackageCheck aria-hidden='true' size={20} />
                        <p>
                            {subtotal >= freeShippingMinimum
                                ? 'Free shipping is ready for this order.'
                                : `${formatCurrency(amountToFreeShipping)} away from free shipping.`}
                        </p>
                    </div>

                    <button
                        type='button'
                        className={styles.checkoutButton}
                        onClick={handleCheckout}
                        disabled={!hasItems || isCheckingOut}
                    >
                        <span>
                            {isCheckingOut
                                ? 'Starting checkout'
                                : 'Checkout securely'}
                        </span>
                        <ArrowRight aria-hidden='true' size={19} />
                    </button>

                    {checkoutError && (
                        <p className={styles.errorMessage} role='alert'>
                            {checkoutError}
                        </p>
                    )}

                    <div className={styles.checkoutNote}>
                        <ShieldCheck aria-hidden='true' size={18} />
                        <p>
                            Test checkout is enabled. You will not be charged;
                            use card number 4242 4242 4242 4242.
                        </p>
                    </div>
                </aside>
            </section>
        </main>
    )
}
