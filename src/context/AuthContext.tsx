'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

type AuthContextType = {
    loggedIn: boolean
    setLoggedIn: (value: boolean) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({
    children,
    initialLoggedIn,
}: {
    children: React.ReactNode
    initialLoggedIn: boolean
}) => {
    const [loggedIn, setLoggedIn] = useState(initialLoggedIn)

    // useEffect(() => {
    //     const checkAuth = async () => {
    //         const userCookies = await cookies()
    //         const authCookie = userCookies.get(process.env.BETTER_COOKIE_NAME!)
    //         if (authCookie) {
    //             setLoggedIn(true)
    //         }
    //     }

    //     checkAuth()
    // }, [])

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
