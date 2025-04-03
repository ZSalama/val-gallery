import Image from 'next/image'
import styles from './../items-v.module.css'

export default function Gallery() {
    const images = [
        'https://d2oeo8w8j25w98.cloudfront.net/horse_red.jpg',
        'https://d2oeo8w8j25w98.cloudfront.net/tree_2.jpg',
        'https://d2oeo8w8j25w98.cloudfront.net/lizard.jpg',
        'https://d2oeo8w8j25w98.cloudfront.net/flower_green.jpg',
        'https://d2oeo8w8j25w98.cloudfront.net/flower_white.jpg',
        'https://d2oeo8w8j25w98.cloudfront.net/tree_3.jpg',
        'https://d2oeo8w8j25w98.cloudfront.net/horse_gallery.jpg',
        'https://d2oeo8w8j25w98.cloudfront.net/butterfly.jpg',
        'https://d2oeo8w8j25w98.cloudfront.net/egg.jpg',
        'https://d2oeo8w8j25w98.cloudfront.net/humming_bird.jpg',
        'https://d2oeo8w8j25w98.cloudfront.net/bamboo.jpg',
        'https://d2oeo8w8j25w98.cloudfront.net/flower_yellow.jpg',
        'https://d2oeo8w8j25w98.cloudfront.net/wheel.jpg',
        'https://d2oeo8w8j25w98.cloudfront.net/model_2.jpg',
        'https://d2oeo8w8j25w98.cloudfront.net/tree_1.jpg',
        'https://d2oeo8w8j25w98.cloudfront.net/model_1.jpg',
        'https://d2oeo8w8j25w98.cloudfront.net/snake.jpg',
    ]

    return (
        <div>
            <Image
                src={images[0]}
                alt='Lizard'
                width={720}
                height={960}
                className={styles.image}
            />
        </div>
    )
}
