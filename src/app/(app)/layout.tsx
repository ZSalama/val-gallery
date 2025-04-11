import '../globals.css'
import BackgroundVideo from '@/components/BackgroundVideo/BackgroundVideo'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className='relative overflow-hidden'>
            <BackgroundVideo />
            {children}
        </div>
        // <>
        //     {/* <div className='backgroundImageContainer'>
        //         <Image
        //             src='https://d2oeo8w8j25w98.cloudfront.net/starry_background.png'
        //             alt='Background'
        //             fill={true}
        //             quality={75}
        //             style={{ zIndex: -1, objectFit: 'cover' }}
        //             loading='eager'
        //         />
        //     </div>
        //     {children} */}
        //     <div className='relative overflow-hidden'>
        //         <video
        //             autoPlay
        //             muted
        //             loop
        //             playsInline
        //             className='fixed top-0 left-0 w-full h-full object-cover z-[-1]'
        //         >
        //             <source
        //                 src='https://d2oeo8w8j25w98.cloudfront.net/Star_Background2.webm'
        //                 type='video/webm'
        //             />
        //             Your browser does not support the video tag.
        //         </video>
        //         {children}
        //     </div>

        //     {/* <Footer /> */}
        // </>
    )
}
