// import React from 'react'
'use client'
import styles from './items-v.module.css'
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

type Product = {
    name: string
    id_poster: string
    url_poster: string
    price_id_poster: string
    cost_poster: number
    id_card: string
    url_card: string
    price_id_card: string
    cost_card: number
    blurb: string
}

export default function ProductPageV({ product }: { product: Product }) {
    const item_poster = {
        id: product.price_id_poster,
        name: product.id_poster,
        cost: product.cost_poster,
        quantity: 1,
        type: 'Poster',
    }

    const item_card = {
        id: product.price_id_card,
        name: product.id_card,
        cost: product.cost_card,
        quantity: 1,
        type: 'Card',
    }

    const [selectedType, setSelectedType] = useState('Poster')

    return (
        <div className={styles.gallery_wrapper}>
            <div className={styles.carousel}>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            <div className={styles.image_wrapper}>
                                <Image
                                    src={product.url_poster}
                                    alt={product.id_poster}
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
                                    src={product.url_card}
                                    alt={product.id_card}
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
                <h1 className={styles.title}>{product.name}</h1>
                <p className={styles.blurb}>{product.blurb}</p>
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
