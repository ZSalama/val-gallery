import Image from 'next/image'
import Link from 'next/link'
import styles from '../../app/(app)/gallery/page.module.css'

type GalleryImageLinkProps = {
    src: string
    alt: string
    width: number
    height: number
    loading?: 'eager' | 'lazy'
}

export default function GalleryImageLink({
    src,
    alt,
    width,
    height,
    loading = 'lazy',
}: GalleryImageLinkProps) {
    return (
        <div className={styles.image_wrapper}>
            <Image
                className={styles.image}
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading={loading}
                quality={75}
            />
            <Link
                href='gallery/lizard'
                className={styles.image_link}
                aria-label={`link to ${alt} page`}
            >
                <div className={styles.image_overlay}></div>
            </Link>
        </div>
    )
}
