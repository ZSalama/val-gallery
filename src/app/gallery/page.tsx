// import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

export default function Gallery() {
    return (
        <div className={styles.gallery_container}>
            <h1 className={styles.title}>Gallery</h1>

            <div className={styles.wrapper}>
                <div className={styles.grid_wrapper_vertical}>
                    <div className={styles.image_container}>
                        <Image
                            className={styles.image}
                            src='/media/snake.jpg'
                            alt='Picture of the snake'
                            width={720}
                            height={960}
                        />
                    </div>
                    <div className={styles.image_container}>
                        <Image
                            className={styles.image}
                            src='/media/snake.jpg'
                            alt='Picture of the snake'
                            width={720}
                            height={960}
                        />
                    </div>
                    <div className={styles.image_container}>
                        <Image
                            className={styles.image}
                            src='/media/snake.jpg'
                            alt='Picture of the snake'
                            width={720}
                            height={960}
                        />
                    </div>
                </div>
                <div className={styles.grid_wrapper_horizontal}>
                    <div className={styles.image_container}>
                        <Image
                            className={styles.image}
                            src='/media/flower_white.jpg'
                            alt='Picture of a white flower'
                            width={960}
                            height={720}
                        />
                    </div>
                    <div className={styles.image_container}>
                        <Image
                            className={styles.image}
                            src='/media/flower_white.jpg'
                            alt='Picture of a white flower'
                            width={960}
                            height={720}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
