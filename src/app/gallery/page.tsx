// import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
// import Link from 'next/link'
import GalleryImageLink from '@/components/ui/imageComponent'

export type GalleryImage = { title: string; src: string }

export default function Gallery() {
    const images: GalleryImage[] = [
        {
            title: 'flower_green.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/flower_green.jpg',
        },
        {
            title: 'flower_white.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/flower_white.jpg',
        },
        {
            title: 'tree_3.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/tree_3.jpg',
        },
        {
            title: 'horse_gallery.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/horse_gallery.jpg',
        },
        {
            title: 'horse_red.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/horse_red.jpg',
        },
        {
            title: 'tree_2.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/tree_2.jpg',
        },
        {
            title: 'lizard.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/lizard.jpg',
        },

        {
            title: 'butterfly.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/butterfly.jpg',
        },
        {
            title: 'egg.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/egg.jpg',
        },
        {
            title: 'humming_bird.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/humming_bird.jpg',
        },
        {
            title: 'bamboo.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/bamboo.jpg',
        },
        {
            title: 'flower_yellow.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/flower_yellow.jpg',
        },
        {
            title: 'wheel.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/wheel.jpg',
        },
        {
            title: 'snake.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/snake.jpg',
        },
        {
            title: 'tree_1.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/tree_1.jpg',
        },
        {
            title: 'model_1.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/model_1.jpg',
        },
    ]

    return (
        <div className={styles.gallery_container}>
            <div className='backgroundImageContainer'>
                <Image
                    src='https://d2oeo8w8j25w98.cloudfront.net/starry_background.png'
                    alt='Background'
                    fill={true}
                    quality={100}
                    style={{ zIndex: -1, objectFit: 'cover' }}
                    loading='eager'
                />
            </div>
            <h1 className={styles.title}>Gallery</h1>

            <div className={styles.wrapper}>
                <div className={styles.grid_wrapper_horizontal}>
                    <GalleryImageLink
                        src={images[0].src}
                        alt={images[0].title}
                        width={960}
                        height={720}
                        loading='eager'
                    />
                    <GalleryImageLink
                        src={images[1].src}
                        alt={images[1].title}
                        width={960}
                        height={720}
                        loading='eager'
                    />
                </div>
                <div className={styles.grid_wrapper_horizontal}>
                    <GalleryImageLink
                        src={images[2].src}
                        alt={images[2].title}
                        width={960}
                        height={720}
                        loading='eager'
                    />
                    <GalleryImageLink
                        src={images[3].src}
                        alt={images[3].title}
                        width={960}
                        height={720}
                        loading='eager'
                    />
                </div>
                <div className={styles.grid_wrapper_vertical}>
                    <GalleryImageLink
                        src={images[4].src}
                        alt={images[4].title}
                        width={720}
                        height={960}
                        loading='lazy'
                    />
                    <GalleryImageLink
                        src={images[5].src}
                        alt={images[5].title}
                        width={720}
                        height={960}
                        loading='lazy'
                    />
                    <GalleryImageLink
                        src={images[6].src}
                        alt={images[6].title}
                        width={720}
                        height={960}
                        loading='lazy'
                    />
                </div>
                <div className={styles.grid_wrapper_horizontal}>
                    <GalleryImageLink
                        src={images[7].src}
                        alt={images[7].title}
                        width={960}
                        height={720}
                        loading='lazy'
                    />
                    <GalleryImageLink
                        src={images[8].src}
                        alt={images[8].title}
                        width={960}
                        height={720}
                        loading='lazy'
                    />
                </div>
                <div className={styles.grid_wrapper_horizontal}>
                    <GalleryImageLink
                        src={images[9].src}
                        alt={images[9].title}
                        width={960}
                        height={720}
                        loading='lazy'
                    />
                    <GalleryImageLink
                        src={images[10].src}
                        alt={images[10].title}
                        width={960}
                        height={720}
                        loading='lazy'
                    />
                </div>
                <div className={styles.grid_wrapper_vertical}>
                    <GalleryImageLink
                        src={images[11].src}
                        alt={images[11].title}
                        width={720}
                        height={960}
                        loading='lazy'
                    />
                    <GalleryImageLink
                        src={images[12].src}
                        alt={images[12].title}
                        width={720}
                        height={960}
                        loading='lazy'
                    />
                    <GalleryImageLink
                        src={images[13].src}
                        alt={images[13].title}
                        width={720}
                        height={960}
                        loading='lazy'
                    />
                </div>
                <div className={styles.grid_wrapper_horizontal}>
                    <GalleryImageLink
                        src={images[14].src}
                        alt={images[14].title}
                        width={960}
                        height={720}
                        loading='lazy'
                    />
                    <GalleryImageLink
                        src={images[15].src}
                        alt={images[15].title}
                        width={960}
                        height={720}
                        loading='lazy'
                    />
                </div>
            </div>
        </div>
    )
}
