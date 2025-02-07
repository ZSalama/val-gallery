'use client'
import useCart from '@/hooks/cartHooks'
// import styles from './page.module.css'

export default function Store() {
    const { addItemToCart } = useCart()
    return (
        <section>
            <button
                onClick={() =>
                    addItemToCart({
                        id: 'price_1QpGe2GhmoGg54MolMltlBLF',
                        name: 'Horse',
                        cost: 20000,
                        quantity: 1,
                    })
                }
            >
                Add Horse Item
            </button>
        </section>
    )
}
