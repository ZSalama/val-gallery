import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
// import Footer from '@/components/Footer/Footer'
import Image from 'next/image'
import { CartProvider } from '@/context/CartContext'

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <CartProvider>
                    <Navbar />
                    <div className='backgroundImageContainer'>
                        <Image
                            src='https://d2oeo8w8j25w98.cloudfront.net/horse_gallery.jpg'
                            alt='Background'
                            fill={true}
                            quality={100}
                            style={{ zIndex: -1, objectFit: 'cover' }}
                        />
                    </div>
                    {children}
                    {/* <Footer /> */}
                </CartProvider>
            </body>
        </html>
    )
}
