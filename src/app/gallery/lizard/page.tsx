// import React from 'react'
// 'use client'
import styles from './../items.module.css'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import AddItemToCard from '@/components/ui/AddItemToCard'

const item = {
    id: 'price_1Qy6BDGhmoGg54MoimANPWwm',
    name: 'Lizard',
    cost: 30000,
    quantity: 1,
}

export default function Lizard() {
    return (
        <div className={styles.gallery_wrapper}>
            <div className={styles.carousel}>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            <div className={styles.image_wrapper}>
                                <Image
                                    src='https://d2oeo8w8j25w98.cloudfront.net/lizard.jpg'
                                    alt='Lizard'
                                    width={720}
                                    height={960}
                                    className={styles.image}
                                />
                                <div className={styles.image_overlay}></div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className={styles.image_wrapper}>
                                <Image
                                    src='https://d2oeo8w8j25w98.cloudfront.net/horse_red.jpg'
                                    alt='Horse'
                                    width={720}
                                    height={960}
                                    className={styles.image}
                                />
                                <div className={styles.image_overlay}></div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            <div className={styles.description}>
                <h1 className={styles.title}>Lizard</h1>
                <p className={styles.blurb}>
                    This is a lizard. The lizard is known for its lizardness.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    commodi consequuntur, molestias, reiciendis aperiam sit
                    nostrum laboriosam, architecto dolore corrupti sint. Dolores
                    accusantium veritatis cumque laborum sapiente nostrum, id
                    eos vitae nesciunt exercitationem sequi ipsam. Incidunt
                    voluptatum quidem debitis harum molestias aut delectus vero
                    dolores sapiente mollitia quam cupiditate magnam nihil,
                    maiores aliquam sit, veritatis assumenda illum eveniet culpa
                    nisi aliquid alias quisquam laborum? Ducimus molestias
                    explicabo deleniti adipisci blanditiis odit commodi expedita
                    necessitatibus officiis, magnam aliquid veniam sint corporis
                    corrupti alias asperiores est quaerat ad inventore iusto?
                    Reprehenderit, architecto. Quisquam temporibus sint
                    repellat, voluptatum tempora vel ea aliquid et.
                </p>
                <AddItemToCard item={item} />
            </div>
        </div>
    )
}
