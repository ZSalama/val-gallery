import { useState, useEffect } from 'react'

export type CartItem = {
    id: string //id
    name: string //product name
    cost: number //cost
    quantity: number
}

export default function useCart() {
    // hydration error if attempting to load cart without checking for empty cart
    const [cart, setCart] = useState<CartItem[]>(() => {
        if (typeof window !== 'undefined') {
          const storedCart = sessionStorage.getItem('cart');
          return storedCart ? JSON.parse(storedCart) : [];
        }
        return [];
      });

    // Save the cart to session storage whenever it changes
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

    return { cart, addItemToCart, removeItemFromCart, clearCart }
}
