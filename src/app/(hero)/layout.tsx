import '../globals.css'
import Image from 'next/image'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <div className='backgroundImageContainer'>
                <Image
                    src='https://d2oeo8w8j25w98.cloudfront.net/horse_gallery.jpg'
                    alt='Background'
                    fill={true}
                    quality={75}
                    style={{ zIndex: -1, objectFit: 'cover' }}
                    loading='eager'
                />
            </div>
            {children}
            {/* <Footer /> */}
        </>
    )
}
