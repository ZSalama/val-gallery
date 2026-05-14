import ProductPageV from '@/components/ProductPageV/ProductPageV'

export const metadata = {
    title: 'Tree with Snake',
    description:
        'Tree with Snake by Valerie Anne Barber, available as a poster or card set.',
}

export default function Snake() {
    return (
        <ProductPageV
            product={{
                name: 'Tree with Snake',
                id_poster: 'Tree with Snake Poster',
                url_poster:
                    'https://d2oeo8w8j25w98.cloudfront.net/snake_fit.webp',
                price_id_poster: 'price_1R9wY0GhmoGg54MoKN8KUeKu',
                cost_poster: 60,
                id_card: 'Tree with Snake Card',
                url_card:
                    'https://d2oeo8w8j25w98.cloudfront.net/snake_framed.jpg',
                price_id_card: 'price_1R9wbqGhmoGg54Mo354nHq3K',
                cost_card: 10,
                blurb: 'Tree with Snake pairs a natural setting with a striking focal detail. It is available as a poster or as a 5 by 7 card set.',
            }}
        />
    )
}
