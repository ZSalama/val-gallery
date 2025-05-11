'use client'
import { signIn } from '@/lib/auth-client'

export default function Login() {
    const handleLogin = () => {
        signIn()
    }

    return (
        <div className='flex flex-col items-center min-h-[500vh] text-white'>
            <button
                onClick={handleLogin}
                className='fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-200 text-gray-200 hover:text-gray-800 font-semibold px-4 py-2 rounded-xl border-2'
            >
                Sign in with Google
            </button>
        </div>
    )
}
