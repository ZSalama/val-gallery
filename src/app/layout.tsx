import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
// import Footer from '@/components/Footer/Footer'
import { CartProvider } from '@/context/CartContext'
import { AuthProvider } from '@/context/AuthContext'
import { getAuthStatus } from '@/lib/auth'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Art Gallery',
    description: 'A place to purchase beautiful art',
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const loggedIn = await getAuthStatus() // Fetch auth state on the server
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <AuthProvider initialLoggedIn={loggedIn}>
                    <CartProvider>
                        <Navbar />
                        {children}
                        {/* <Footer /> */}
                    </CartProvider>
                </AuthProvider>
            </body>
        </html>
    )
}
