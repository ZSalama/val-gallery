import Image from 'next/image'
import Link from 'next/link'
import styles from '../../app/gallery/page.module.css'

type GalleryImageLinkProps = {
    src: string
    alt: string
    width: number
    height: number
}

export default function GalleryImageLink({
    src,
    alt,
    width,
    height,
}: GalleryImageLinkProps) {
    return (
        <div className={styles.image_wrapper}>
            <Image
                className={styles.image}
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading='lazy'
            />
            <Link href='gallery/lizard' className={styles.image_link}>
                <div className={styles.image_overlay}></div>
            </Link>
        </div>
    )
}
