'use client'

import { useState } from 'react'
import { CartItem } from '@/hooks/cartHooks'
import { useCartContext } from '@/context/CartContext'
import { Input } from '@/components/ui/input'

export default function AddToCartForm({ item }: { item: CartItem }) {
    const { addItemToCart } = useCartContext()
    const [quantity, setQuantity] = useState(1)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addItemToCart({
            id: item.id,
            name: item.name,
            cost: item.cost,
            quantity: quantity,
        })
        setQuantity(1) // Reset quantity after adding
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='quantity' className='font-semibold'>
                Quantity:
            </label>
            <Input
                type='number'
                id='quantity'
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min='1'
            />
            <button type='submit'>Add to Cart</button>
        </form>
    )
}
