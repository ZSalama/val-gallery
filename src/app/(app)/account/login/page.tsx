'use client'
import { signIn } from '@/lib/auth-client'

export default function Login() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-white'>
            <button onClick={() => signIn()}>Sign in with Google</button>
        </div>
    )
}
