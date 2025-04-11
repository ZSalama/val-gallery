'use client'

import { useState } from 'react'
import { CartItem } from '@/hooks/cartHooks'
import { useCartContext } from '@/context/CartContext'
import { Input } from '@/components/ui/input'

export default function AddToCartForm({ item }: { item: CartItem }) {
    const { addItemToCart } = useCartContext()
    const [quantity, setQuantity] = useState(0)
    const [showNotification, setShowNotification] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addItemToCart({
            id: item.id,
            name: item.name,
            cost: item.cost,
            quantity: quantity,
        })
        setQuantity(0) // Reset quantity after adding
        setFadeOut(false)
        setShowNotification(true)
        setTimeout(() => setFadeOut(true), 2000)
        setTimeout(() => setShowNotification(false), 2500)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col items-start gap-4  bg-black/20 rounded-xl shadow-md w-full'
        >
            <div className='w-full'>
                <label
                    htmlFor='quantity'
                    className='block text-white font-medium mb-2'
                >
                    Quantity
                </label>
                <Input
                    type='number'
                    id='quantity'
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min='1'
                    className='w-full bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-300 hover:bg-white hover:text-black'
                />
            </div>
            <button
                type='submit'
                className='w-full bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 hover:bg-white hover:text-black'
            >
                Add {item.type} to Cart
            </button>
            {showNotification && (
                <div
                    className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-black text-white font-semibold text-lg px-12 py-6 rounded-md shadow-lg z-50 
                    ${fadeOut ? 'animate-fade-out' : 'animate-fade-in'}`}
                >
                    Added to cart!
                </div>
            )}
        </form>
    )
}
