'use client'
import { useCart, CartItem } from '@/context/CartContext'
import styles from './page.module.css'

// interface CartItem {
//     id: string
//     unitAmount: number
//     description?: string
//     quantity: number
// }

export default function Store() {
    const { state, dispatch } = useCart()

    const addItemToCart = (item: CartItem) => {
        dispatch({ type: 'add', payload: item })
    }

    const resetCart = () => {
        dispatch({ type: 'clear' })
    }

    return (
        <div>
            <h1 className={styles.title}>Store</h1>
            <div className={styles.content}>
                <button
                    onClick={() =>
                        addItemToCart({
                            price: 'price_1QpGe2GhmoGg54MolMltlBLF',
                            quantity: 1,
                            name: 'Horse',
                            cost: 2000,
                        })
                    }
                >
                    Add Horse to Cart
                </button>
            </div>
            <div className={styles.content}>
                <button onClick={() => resetCart()}>reset cart</button>
            </div>
        </div>
    )
}
