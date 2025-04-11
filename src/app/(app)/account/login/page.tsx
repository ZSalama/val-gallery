'use client'
import { signIn } from '@/lib/auth-client'

export default function Login() {
    const handleLogin = () => {
        signIn()
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-white'>
            <button
                onClick={handleLogin}
                className='bg-gray-800 hover:bg-gray-200 text-gray-200 hover:text-gray-800 font-semibold px-4 py-2 rounded-xl border-2'
            >
                Sign in with Google
            </button>
        </div>
    )
}
