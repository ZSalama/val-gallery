'use client'

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from 'react'
import { authClient } from '@/lib/auth-client'

// Define the shape of AuthContext
interface AuthContextType {
    session: boolean
    loading: boolean
    login: () => void
    logout: () => void
}

// Create context with a default value matching AuthContextType
const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [session, setSession] = useState(false)
    const [loading, setLoading] = useState(true)

    // Fetch session on mount
    useEffect(() => {
        const fetchSession = async () => {
            try {
                const { data } = await authClient.getSession()
                setSession(!!data) // Set session based on data presence
            } catch (error) {
                console.error('Failed to fetch session:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchSession()
    }, [])

    // Logout function
    const logout = async () => {
        // await authClient.signOut()
        setSession(false)
    }

    const login = async () => {
        setSession(true) // Update session state on successful login
    }

    return (
        <AuthContext.Provider value={{ session, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// Hook to use the auth context
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
