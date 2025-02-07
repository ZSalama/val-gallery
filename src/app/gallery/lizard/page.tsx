// import React from 'react'
import styles from './../items.module.css'
import Image from 'next/image'

export default function Lizard() {
    return (
        <div className={styles.galleryContainer}>
            <h1 className={styles.title}>Lizard</h1>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src='/media/lizard.jpg'
                        alt='Lizard'
                        width={500}
                        height={500}
                        className={styles.image}
                    />
                </div>
                <div className={styles.description}>
                    <h2>Lizard</h2>
                    <p>
                        This is a lizard. The horse is known for its lizardness.
                    </p>
                </div>
            </div>
        </div>
    )
}
