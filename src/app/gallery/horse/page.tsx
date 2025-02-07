// import React from 'react'
import styles from './../items.module.css'
import Image from 'next/image'

export default function Horse() {
    return (
        <div className={styles.galleryContainer}>
            <h1 className={styles.title}>Gallery</h1>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src='/media/horse.jpg'
                        alt='Horse'
                        width={500}
                        height={500}
                        className={styles.image}
                    />
                </div>
                <div className={styles.description}>
                    <h2>Horse</h2>
                    <p>
                        This is a beautiful horse. The horse is known for its
                        strength and grace.
                    </p>
                </div>
            </div>
        </div>
    )
}
