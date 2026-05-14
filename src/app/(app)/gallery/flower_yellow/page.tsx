import ProductPageV from '@/components/ProductPageV/ProductPageV'

export const metadata = {
    title: 'Yellow Flowers',
    description:
        'Yellow Flowers by Valerie Anne Barber, available as a poster or card set.',
}

export default function Flower_yellow() {
    return (
        <ProductPageV
            product={{
                name: 'Yellow Flowers',
                id_poster: 'Yellow Flowers Poster',
                url_poster:
                    'https://d2oeo8w8j25w98.cloudfront.net/flower_yellow_fit.webp',
                price_id_poster: 'price_1R9vNuGhmoGg54Moeqi8Ig9f',
                cost_poster: 60,
                id_card: 'Yellow Flowers Card',
                url_card:
                    'https://d2oeo8w8j25w98.cloudfront.net/flower_yellow_framed.jpg',
                price_id_card: 'price_1R9vOXGhmoGg54Mo6CalMgGx',
                cost_card: 10,
                blurb: 'Yellow Flowers brings a warm floral note to the collection. Choose it as a poster or as a card set for everyday notes and gifts.',
            }}
        />
    )
}
