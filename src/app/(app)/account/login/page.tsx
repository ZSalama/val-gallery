// 'use client'
// import { signIn } from '@/lib/auth-client'
// import { useAuth } from '@/context/AuthContext'

// export default function Login() {
//     const { login } = useAuth()

//     const handleLogin = async () => {
//         login()
//     }

//     return (
//         <div className='flex flex-col items-center justify-center min-h-screen text-white'>
//             <button onClick={() => handleLogin()}>Sign in with Google</button>
//         </div>
//     )
// }

'use client'
import { signIn } from '@/lib/auth-client'
import { useAuth } from '@/context/AuthContext'

export default function Login() {
    const { login } = useAuth()
    const handleLogin = () => {
        signIn()
        login()
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-white'>
            <button onClick={handleLogin}>Sign in with Google</button>
        </div>
    )
}
