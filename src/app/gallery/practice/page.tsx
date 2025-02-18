'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Gallery() {
    const [images, setImages] = useState<string[]>([])

    useEffect(() => {
        async function fetchImages() {
            try {
                const res = await fetch('/api/list-images')
                const data = await res.json()
                setImages(data.images)
            } catch (error) {
                console.error('Error fetching images:', error)
            }
        }
        fetchImages()
    }, [])

    const horse_image = images.filter(
        (url) =>
            url ===
            'https://val-gallery.s3.us-east-1.amazonaws.com/horse_red.jpg'
    )

    return (
        <div>
            {/*{images.map((url, index) => ( // display all images
                <div key={index}>
                    <Image
                        src={url}
                        alt={`Image ${index}`}
                        width={500}
                        height={500}
                    />
                    <p>Image {url}</p>
                </div>
            ))} */}
            {horse_image.length > 0 &&
                horse_image[0] && ( //display specific image
                    <Image
                        src={horse_image[0]}
                        alt={`Image ${horse_image[0]}`}
                        width={500}
                        height={500}
                    />
                )}
        </div>
    )
}
