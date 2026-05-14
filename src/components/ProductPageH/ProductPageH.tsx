// import React from 'react'
'use client'
import styles from './items-h.module.css'
import Image from 'next/image'
import AddItemToCart from '@/components/ui/AddItemToCard'
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'
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

export default function ProductPageH({ product }: { product: Product }) {
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
            <ScrollReveal className={styles.image_panel}>
                <Image
                    src={product.url_poster}
                    alt={product.id_poster}
                    width={960}
                    height={720}
                    className={styles.image}
                    quality={85}
                    priority
                />
            </ScrollReveal>

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
