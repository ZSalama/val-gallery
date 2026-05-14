import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import { CartProvider } from '@/context/CartContext'
import { AuthProvider } from '@/context/AuthContext'
import { siteDescription, siteName, siteUrl } from '@/lib/site'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    applicationName: siteName,
    title: {
        default: siteName,
        template: `%s | ${siteName}`,
    },
    description: siteDescription,
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        siteName,
        title: siteName,
        description: siteDescription,
        images: [
            {
                url: 'https://d2oeo8w8j25w98.cloudfront.net/horse_gallery_hd.webp',
                width: 1200,
                height: 900,
                alt: 'Artwork from Valerie Anne Barber Gallery',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteName,
        description: siteDescription,
        images: [
            'https://d2oeo8w8j25w98.cloudfront.net/horse_gallery_hd.webp',
        ],
    },
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
                <AuthProvider>
                    <CartProvider>
                        <Navbar />
                        {children}
                    </CartProvider>
                </AuthProvider>
            </body>
        </html>
    )
}
