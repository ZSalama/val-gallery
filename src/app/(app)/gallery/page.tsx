import styles from './page.module.css'
import GalleryImageLink from '@/components/ui/imageComponent'

export type GalleryImage = { title: string; src: string; url: string }

export default function Gallery() {
    const images: GalleryImage[] = [
        {
            title: 'flower_green.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/flower_green_fit.webp',
            url: 'gallery/flower_green',
        },
        {
            title: 'flower_white.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/flower_white_fit.webp',
            url: 'gallery/flower_white',
        },
        {
            title: 'tree_3.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/tree_3_fit.webp',
            url: 'gallery/tree_3',
        },
        {
            title: 'horse_gallery.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/horse_gallery_fit.webp',
            url: 'gallery/horse_gallery',
        },
        {
            title: 'horse_red.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/horse_red_fit.webp',
            url: 'gallery/horse_red',
        },
        {
            title: 'tree_2.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/tree_2_fit.webp',
            url: 'gallery/tree_2',
        },
        {
            title: 'lizard.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/lizard_fit.webp',
            url: 'gallery/lizard',
        },

        {
            title: 'butterfly.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/butterfly_fit.webp',
            url: 'gallery/butterfly',
        },
        {
            title: 'egg.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/egg_fit.webp',
            url: 'gallery/egg',
        },
        {
            title: 'humming_bird.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/humming_bird_fit.webp',
            url: 'gallery/humming_bird',
        },
        {
            title: 'bamboo.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/bamboo_fit.webp',
            url: 'gallery/bamboo',
        },
        {
            title: 'flower_yellow.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/flower_yellow_fit.webp',
            url: 'gallery/flower_yellow',
        },
        {
            title: 'wheel.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/wheel_fit.webp',
            url: 'gallery/wheel',
        },
        {
            title: 'snake.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/snake_fit.webp',
            url: 'gallery/snake',
        },
        {
            title: 'tree_1.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/tree_1_fit.webp',
            url: 'gallery/tree_1',
        },
        {
            title: 'model_1.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/model_1_fit.webp',
            url: 'gallery/model_1',
        },
    ]

    return (
        <div className={styles.gallery_container}>
            <h1 className={styles.title}>Gallery</h1>
            <div className={styles.wrapper}>
                <div className={styles.grid_wrapper_horizontal}>
                    <GalleryImageLink
                        src={images[0].src}
                        alt={images[0].title}
                        width={960}
                        height={720}
                        loading='eager'
                        url={images[0].url}
                    />
                    <GalleryImageLink
                        src={images[1].src}
                        alt={images[1].title}
                        width={960}
                        height={720}
                        loading='lazy'
                        url={images[1].url}
                    />
                </div>
                <div className={styles.grid_wrapper_horizontal}>
                    <GalleryImageLink
                        src={images[2].src}
                        alt={images[2].title}
                        width={960}
                        height={720}
                        loading='lazy'
                        url={images[2].url}
                    />
                    <GalleryImageLink
                        src={images[3].src}
                        alt={images[3].title}
                        width={960}
                        height={720}
                        loading='lazy'
                        url={images[3].url}
                    />
                </div>
                <div className={styles.grid_wrapper_vertical}>
                    <GalleryImageLink
                        src={images[4].src}
                        alt={images[4].title}
                        width={720}
                        height={960}
                        loading='lazy'
                        url={images[4].url}
                    />
                    <GalleryImageLink
                        src={images[5].src}
                        alt={images[5].title}
                        width={720}
                        height={960}
                        loading='lazy'
                        url={images[5].url}
                    />
                    <GalleryImageLink
                        src={images[6].src}
                        alt={images[6].title}
                        width={720}
                        height={960}
                        loading='lazy'
                        url={images[6].url}
                    />
                </div>
                <div className={styles.grid_wrapper_horizontal}>
                    <GalleryImageLink
                        src={images[7].src}
                        alt={images[7].title}
                        width={960}
                        height={720}
                        loading='lazy'
                        url={images[7].url}
                    />
                    <GalleryImageLink
                        src={images[8].src}
                        alt={images[8].title}
                        width={960}
                        height={720}
                        loading='lazy'
                        url={images[8].url}
                    />
                </div>
                <div className={styles.grid_wrapper_horizontal}>
                    <GalleryImageLink
                        src={images[9].src}
                        alt={images[9].title}
                        width={960}
                        height={720}
                        loading='lazy'
                        url={images[9].url}
                    />
                    <GalleryImageLink
                        src={images[10].src}
                        alt={images[10].title}
                        width={960}
                        height={720}
                        loading='lazy'
                        url={images[10].url}
                    />
                </div>
                <div className={styles.grid_wrapper_vertical}>
                    <GalleryImageLink
                        src={images[11].src}
                        alt={images[11].title}
                        width={720}
                        height={960}
                        loading='lazy'
                        url={images[11].url}
                    />
                    <GalleryImageLink
                        src={images[12].src}
                        alt={images[12].title}
                        width={720}
                        height={960}
                        loading='lazy'
                        url={images[12].url}
                    />
                    <GalleryImageLink
                        src={images[13].src}
                        alt={images[13].title}
                        width={720}
                        height={960}
                        loading='lazy'
                        url={images[13].url}
                    />
                </div>
                <div className={styles.grid_wrapper_horizontal}>
                    <GalleryImageLink
                        src={images[14].src}
                        alt={images[14].title}
                        width={960}
                        height={720}
                        loading='lazy'
                        url={images[14].url}
                    />
                    <GalleryImageLink
                        src={images[15].src}
                        alt={images[15].title}
                        width={960}
                        height={720}
                        loading='lazy'
                        url={images[15].url}
                    />
                </div>
            </div>
        </div>
    )
}
