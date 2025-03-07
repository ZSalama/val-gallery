'use client'
import { signIn } from '@/lib/auth-client'

export default function Login() {
    const handleLogin = () => {
        signIn()
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-white'>
            <button onClick={handleLogin}>Sign in with Google</button>
        </div>
    )
}
