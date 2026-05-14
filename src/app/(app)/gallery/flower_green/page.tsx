import ProductPageV from '@/components/ProductPageH/ProductPageH'

export const metadata = {
    title: 'Green Flowers',
    description:
        'Green Flowers by Valerie Anne Barber, available as a poster or card set.',
}

export default function Flower_green() {
    return (
        <ProductPageV
            product={{
                name: 'Green Flowers',
                id_poster: 'Green Flowers Poster',
                url_poster:
                    'https://d2oeo8w8j25w98.cloudfront.net/flower_green_fit.webp',
                price_id_poster: 'price_1R9tdmGhmoGg54MoEaLvO4RX',
                cost_poster: 60,
                id_card: 'Green Flowers Card',
                url_card:
                    'https://d2oeo8w8j25w98.cloudfront.net/flower_green_framed.jpg',
                price_id_card: 'price_1R9teZGhmoGg54MoZNDB7F7t',
                cost_card: 10,
                blurb: 'Green Flowers pairs a floral subject with a fresh, lively palette. It is available as a poster or as a 5 by 7 card set.',
            }}
        />
    )
}
