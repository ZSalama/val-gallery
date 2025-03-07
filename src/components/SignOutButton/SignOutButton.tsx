'use client'
import { useRouter } from 'next/navigation'
import { signOut } from '@/lib/auth-client'
import { useAuth } from '@/context/AuthContext'

export default function SignOutButton() {
    const router = useRouter()
    const { logout } = useAuth() //  Use the hook at the top level

    const handleSignOut = async () => {
        await signOut() // Ensure sign-out completes before redirecting
        logout() //  Call the logout function from context
        router.refresh()
        router.push('/') // Redirect to home page
    }

    return <button onClick={handleSignOut}>Sign out</button>
}
