// import React from 'react'
'use client'
import styles from './../items.module.css'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { useEffect, useState } from 'react'

export default function Lizard() {
    const [ImageOne, setImageOne] = useState<string | null>(null)
    const [ImageTwo, setImageTwo] = useState<string | null>(null)

    useEffect(() => {
        async function ImageOne() {
            try {
                const res = await fetch('/api/get-signed-url?key=lizard.jpg')
                const data = await res.json()
                setImageOne(data.url)
            } catch (error) {
                console.error('Failed to fetch signed URL', error)
            }
        }

        ImageOne()
    }, [])

    useEffect(() => {
        async function ImageTwo() {
            try {
                const res = await fetch('/api/get-signed-url?key=horse_red.jpg')
                const data = await res.json()
                setImageTwo(data.url)
            } catch (error) {
                console.error('Failed to fetch signed URL', error)
            }
        }
        ImageTwo()
    }, [])

    return (
        <div className={styles.gallery_wrapper}>
            <div className={styles.carousel}>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            {ImageOne && (
                                <Image
                                    src={ImageOne}
                                    alt='Lizard'
                                    width={500}
                                    height={500}
                                    className={styles.image}
                                />
                            )}
                        </CarouselItem>
                        <CarouselItem>
                            {ImageTwo && (
                                <Image
                                    src={ImageTwo}
                                    alt='Horse'
                                    width={500}
                                    height={500}
                                    className={styles.image}
                                />
                            )}
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
            </div>
        </div>
    )
}
