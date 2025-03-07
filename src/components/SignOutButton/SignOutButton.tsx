'use client'
import { useRouter } from 'next/navigation'
import { signOut } from '@/lib/auth-client'
import { useAuth } from '@/context/AuthContext'

export default function SignOutButton() {
    const router = useRouter()
    const { setLoggedIn } = useAuth()

    const handleSignOut = async () => {
        await signOut() // Ensure sign-out completes before redirecting
        setLoggedIn(false) // Update auth state
        router.refresh()
        router.push('/') // Redirect to home page
    }

    return <button onClick={handleSignOut}>Sign out</button>
}
