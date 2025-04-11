import { useState, useEffect } from 'react'

export type CartItem = {
    id: string //id
    name: string //product name
    cost: number //cost
    quantity: number
    type?: string //type
}

export default function useCart() {
    // hydration error if attempting to load cart without checking for empty cart
    const [cart, setCart] = useState<CartItem[]>([])

    useEffect(() => {
        const storedCart = sessionStorage.getItem('cart')
        if (storedCart) {
            setCart(JSON.parse(storedCart))
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addItemToCart = (item: CartItem) => {
        const updatedCart = [...cart]
        const existingItemIndex = updatedCart.findIndex(
            (cartItem) => cartItem.id === item.id
        )

        if (existingItemIndex > -1) {
            updatedCart[existingItemIndex].quantity += item.quantity
        } else {
            updatedCart.push(item)
        }

        setCart(updatedCart)
    }

    const removeItemFromCart = (itemId: string) => {
        const updatedCart = cart.filter((item) => item.id !== itemId)
        setCart(updatedCart)
    }

    const clearCart = () => {
        setCart([])
        // localStorage.removeItem('cart')
    }

    const getTotal = () => {
        return cart.reduce(
            (total, item) => total + item.cost * item.quantity,
            0
        )
    }

    return { cart, addItemToCart, removeItemFromCart, clearCart, getTotal }
}
