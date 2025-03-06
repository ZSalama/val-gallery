'use client'
import { useCartContext } from "@/context/CartContext";
// import styles from './page.module.css'

export default function Store() {
    const { addItemToCart } = useCartContext()

    const handleAddItem = () => {
        addItemToCart({
            id: 'price_1QpGe2GhmoGg54MolMltlBLF',
            name: 'Horse',
            cost: 20000,
            quantity: 1,
        })
    }

    return (
        <section>
            <button onClick={handleAddItem}>
                Add Horse Item
            </button>
        </section>
    )
}
