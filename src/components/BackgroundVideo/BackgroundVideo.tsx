// components/BackgroundVideo.tsx
'use client'
import { useEffect, useRef } from 'react'

export default function BackgroundVideo() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7
        }
    }, [])

    return (
        <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className='fixed top-0 left-0 w-full h-full object-cover z-[-1]'
        >
            <source
                src='https://d2oeo8w8j25w98.cloudfront.net/star_background3.mp4'
                type='video/mp4'
            />
        </video>
    )
}
