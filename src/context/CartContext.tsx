'use client'

import React, { createContext, useContext, useReducer, ReactNode } from 'react'

export interface CartItem {
    price: string //id
    name?: string //product name
    cost: number
    description?: string
    quantity: number
}

interface CartState {
    items: CartItem[]
}

interface CartAction {
    type: string
    payload?: CartItem
}

const initialState: CartState = {
    items: [],
}

const CartContext = createContext<
    { state: CartState; dispatch: React.Dispatch<CartAction> } | undefined
>(undefined)

function cartReducer(state: CartState, action: CartAction): CartState {
    if (!action.payload && action.type !== 'clear') {
        return state
    }
    switch (action.type) {
        case 'add':
            console.log('added item to cart')
            console.log(state.items)
            return {
                ...state,
                items: [...state.items, action.payload!],
            }
        case 'remove':
            return {
                items: state.items.filter(
                    (item) =>
                        action.payload && item.price !== action.payload.price
                ),
            }
        case 'clear':
            console.log('cart cleared')
            return {
                items: [],
            }
        default:
            return state
    }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}
