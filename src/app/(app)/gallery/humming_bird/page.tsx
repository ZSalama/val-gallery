import ProductPageV from '@/components/ProductPageH/ProductPageH'

export const metadata = {
    title: 'Hummingbird',
    description:
        'Hummingbird by Valerie Anne Barber, available as a poster or card set.',
}

export default function Humming_Bird() {
    return (
        <ProductPageV
            product={{
                name: 'Hummingbird',
                id_poster: 'Hummingbird Poster',
                url_poster:
                    'https://d2oeo8w8j25w98.cloudfront.net/humming_bird_fit.webp',
                price_id_poster: 'price_1R9xLiGhmoGg54MoUv9hmDGV',
                cost_poster: 60,
                id_card: 'Hummingbird Card',
                url_card:
                    'https://d2oeo8w8j25w98.cloudfront.net/humming_bird_framed.jpg',
                price_id_card: 'price_1R9xNGGhmoGg54Mo6LzpuH9F',
                cost_card: 10,
                blurb: 'Hummingbird captures a small, energetic subject with a delicate presence. Choose it as a poster or a card set.',
            }}
        />
    )
}
