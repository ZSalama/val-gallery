import ProductPageV from '@/components/ProductPageH/ProductPageH'

export default function Horse_gallery() {
    return (
        <ProductPageV
            product={{
                name: 'Horse Gallery',
                id_poster: 'Horse Gallery Poster',
                url_poster:
                    'https://d2oeo8w8j25w98.cloudfront.net/horse_gallery.jpg?v=2',
                price_id_poster: 'price_1RBNKVGhmoGg54Mo9TJLy9ED',
                cost_poster: 60,
                id_card: 'Horse Gallery Card',
                url_card:
                    'https://d2oeo8w8j25w98.cloudfront.net/horse_gallery_framed.jpg',
                price_id_card: 'price_1RBNLAGhmoGg54MoYqdbIqTo',
                cost_card: 10,
                blurb: 'Horse Gallery Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta in eum nobis. Dolore veritatis mollitia, voluptas reprehenderit assumenda libero officiis, inventore modi necessitatibus qui aliquid quae, amet laboriosam natus nisi? Quis dolore eius sed ducimus quae minima amet quisquam vitae aperiam officiis earum, distinctio, id, veritatis excepturi ratione doloribus laudantium.',
            }}
        />
    )
}

// // import React from 'react'
// 'use client'
// import styles from './../items-h.module.css'
// import Image from 'next/image'
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from '@/components/ui/carousel'
// import AddItemToCart from '@/components/ui/AddItemToCard'
// import { useState } from 'react'

// const item_poster = {
//     id: 'price_1Qy6BDGhmoGg54MoimANPWwm',
//     name: 'Lizard',
//     cost: 30000,
//     quantity: 1,
//     type: 'Poster',
// }

// const item_card = {
//     id: 'price_1Qy6BDGhmoGg54MoimANPWwm',
//     name: 'Lizard',
//     cost: 30000,
//     quantity: 1,
//     type: 'Card',
// }

// export default function Horse_gallery() {
//     const [selectedType, setSelectedType] = useState('Poster')

//     return (
//         <div className={styles.gallery_wrapper}>
//             <div className={styles.carousel}>
//                 <Carousel>
//                     <CarouselContent>
//                         <CarouselItem>
//                             <div className={styles.image_wrapper}>
//                                 <Image
//                                     src='https://d2oeo8w8j25w98.cloudfront.net/horse_gallery.jpg'
//                                     alt='Lizard'
//                                     width={960}
//                                     height={720}
//                                     className={styles.image}
//                                     quality={75}
//                                 />
//                                 <div className={styles.image_overlay}></div>
//                             </div>
//                         </CarouselItem>
//                         <CarouselItem>
//                             <div className={styles.image_wrapper}>
//                                 <Image
//                                     src='https://d2oeo8w8j25w98.cloudfront.net/horse_gallery.jpg'
//                                     alt='Lizard'
//                                     width={960}
//                                     height={720}
//                                     className={styles.image}
//                                     quality={75}
//                                 />
//                                 <div className={styles.image_overlay}></div>
//                             </div>
//                         </CarouselItem>
//                     </CarouselContent>
//                     <CarouselPrevious />
//                     <CarouselNext />
//                 </Carousel>
//             </div>

//             <div className={styles.description}>
//                 <h1 className={styles.title}>Lizard</h1>
//                 <p className={styles.blurb}>
//                     This is a lizard. The lizard is known for its lizardness.
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
//                     commodi consequuntur, molestias, reiciendis aperiam sit
//                     nostrum laboriosam, architecto dolore corrupti sint. Dolores
//                     accusantium veritatis cumque laborum sapiente nostrum, id
//                     eos vitae nesciunt exercitationem sequi ipsam. Incidunt
//                     voluptatum quidem debitis harum molestias aut delectus vero
//                     dolores sapiente mollitia quam cupiditate magnam nihil,
//                     maiores aliquam sit, veritatis assumenda illum eveniet culpa
//                     nisi aliquid alias quisquam laborum? Ducimus molestias
//                     explicabo deleniti adipisci blanditiis odit commodi expedita
//                     necessitatibus officiis, magnam aliquid veniam sint corporis
//                     corrupti alias asperiores est quaerat ad inventore iusto?
//                     Reprehenderit, architecto. Quisquam temporibus sint
//                     repellat, voluptatum tempora vel ea aliquid et.
//                 </p>
//                 <div className={styles.toggleButtons}>
//                     <button
//                         onClick={() => setSelectedType('Poster')}
//                         className={
//                             selectedType === 'Poster' ? styles.active : ''
//                         }
//                     >
//                         Poster
//                     </button>
//                     <button
//                         onClick={() => setSelectedType('Card')}
//                         className={selectedType === 'Card' ? styles.active : ''}
//                     >
//                         Card
//                     </button>
//                 </div>
//                 {selectedType === 'Poster' ? (
//                     <AddItemToCart item={item_poster} />
//                 ) : (
//                     <AddItemToCart item={item_card} />
//                 )}
//             </div>
//         </div>
//     )
// }
