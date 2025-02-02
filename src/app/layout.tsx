import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'
import background from '@/media/horse.jpg'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Photo Gallery',
    description: 'A place to purchase beautiful photos',
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
                <Navbar />
                <div className='backgroundImageContainer'>
                    <Image
                        src={background}
                        alt='Background'
                        fill={true}
                        quality={100}
                        style={{ zIndex: -1, objectFit: 'cover' }}
                    />
                </div>
                {children}
                <Footer />
            </body>
        </html>
    )
}
