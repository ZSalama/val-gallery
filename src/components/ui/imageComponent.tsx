import Image from 'next/image'
import Link from 'next/link'
import styles from '../../app/(app)/gallery/page.module.css'

type GalleryImageLinkProps = {
    src: string
    alt: string
    width: number
    height: number
    url: string
    loading?: 'eager' | 'lazy'
    className?: string
}

export default function GalleryImageLink({
    src,
    alt,
    width,
    height,
    url,
    loading = 'lazy',
    className,
}: GalleryImageLinkProps) {
    return (
        <div className={styles.image_wrapper}>
            <Image
                className={className}
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading={loading}
                quality={75}
            />
            <Link
                href={url}
                className={styles.image_link}
                aria-label={`link to ${alt} page`}
            >
                <div className={styles.image_overlay}></div>
            </Link>
        </div>
    )
}
