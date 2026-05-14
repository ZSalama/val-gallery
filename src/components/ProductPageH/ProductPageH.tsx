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

type ProductType = 'Poster' | 'Card'

const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(value)

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

    const [selectedType, setSelectedType] = useState<ProductType>('Poster')
    const selectedItem = selectedType === 'Poster' ? item_poster : item_card

    return (
        <div className={styles.gallery_wrapper}>
            <ScrollReveal className={styles.image_panel}>
                <Image
                    src={product.url_poster}
                    alt={`${product.name} artwork`}
                    width={960}
                    height={720}
                    className={styles.image}
                    quality={85}
                    priority
                />
            </ScrollReveal>

            <ScrollReveal
                as='section'
                className={styles.description}
                delay={120}
                aria-labelledby='product-title'
            >
                <div className={styles.descriptionHeader}>
                    <p className={styles.kicker}>Gallery print</p>
                    <h1 id='product-title' className={styles.title}>
                        {product.name}
                    </h1>
                </div>
                <p className={styles.blurb}>{product.blurb}</p>

                <div className={styles.purchaseSummary}>
                    <div>
                        <span className={styles.metaLabel}>Selected</span>
                        <strong>{selectedType}</strong>
                    </div>
                    <div>
                        <span className={styles.metaLabel}>Price</span>
                        <strong>{formatCurrency(selectedItem.cost)}</strong>
                    </div>
                </div>

                <div className={styles.toggleButtons}>
                    <button
                        type='button'
                        onClick={() => setSelectedType('Poster')}
                        className={
                            selectedType === 'Poster' ? styles.active : ''
                        }
                        aria-pressed={selectedType === 'Poster'}
                    >
                        Poster
                    </button>
                    <button
                        type='button'
                        onClick={() => setSelectedType('Card')}
                        className={selectedType === 'Card' ? styles.active : ''}
                        aria-pressed={selectedType === 'Card'}
                    >
                        Card
                    </button>
                </div>
                {selectedType === 'Poster' ? (
                    <AddItemToCart item={item_poster} />
                ) : (
                    <AddItemToCart item={item_card} />
                )}
            </ScrollReveal>
        </div>
    )
}
