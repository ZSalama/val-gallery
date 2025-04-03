// import React from 'react'
'use client'
import styles from './../items-h.module.css'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import AddItemToCart from '@/components/ui/AddItemToCard'
import { useState } from 'react'

const item_poster = {
    id: 'price_1Qy6BDGhmoGg54MoimANPWwm',
    name: 'Lizard',
    cost: 30000,
    quantity: 1,
    type: 'Poster',
}

const item_card = {
    id: 'price_1Qy6BDGhmoGg54MoimANPWwm',
    name: 'Lizard',
    cost: 30000,
    quantity: 1,
    type: 'Card',
}

export default function Flower_green() {
    const [selectedType, setSelectedType] = useState('Poster')

    return (
        <div className={styles.gallery_wrapper}>
            <div className={styles.carousel}>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            <div className={styles.image_wrapper}>
                                <Image
                                    src='https://d2oeo8w8j25w98.cloudfront.net/flower_green.jpg'
                                    alt='Lizard'
                                    width={960}
                                    height={720}
                                    className={styles.image}
                                    quality={75}
                                />
                                <div className={styles.image_overlay}></div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className={styles.image_wrapper}>
                                <Image
                                    src='https://d2oeo8w8j25w98.cloudfront.net/flower_green_card.webp'
                                    alt='Lizard'
                                    width={960}
                                    height={720}
                                    className={styles.image}
                                    quality={75}
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
                <div className={styles.toggleButtons}>
                    <button
                        onClick={() => setSelectedType('Poster')}
                        className={
                            selectedType === 'Poster' ? styles.active : ''
                        }
                    >
                        Poster
                    </button>
                    <button
                        onClick={() => setSelectedType('Card')}
                        className={selectedType === 'Card' ? styles.active : ''}
                    >
                        Card
                    </button>
                </div>
                {selectedType === 'Poster' ? (
                    <AddItemToCart item={item_poster} />
                ) : (
                    <AddItemToCart item={item_card} />
                )}
            </div>
        </div>
    )
}
