import ProductPageV from '@/components/ProductPageH/ProductPageH'

export const metadata = {
    title: 'Model',
    description:
        'Model by Valerie Anne Barber, available as a poster or card set.',
}

export default function Model_1() {
    return (
        <ProductPageV
            product={{
                name: 'Model',
                id_poster: 'Model Poster',
                url_poster:
                    'https://d2oeo8w8j25w98.cloudfront.net/model_1_fit.webp',
                price_id_poster: 'price_1R9xW6GhmoGg54MoLyNh2Pgw',
                cost_poster: 60,
                id_card: 'Model Card',
                url_card:
                    'https://d2oeo8w8j25w98.cloudfront.net/model_1_framed.jpg',
                price_id_card: 'price_1R9xayGhmoGg54MozHpTvDxj',
                cost_card: 10,
                blurb: 'Model is a composed figure study from the gallery collection. Select it as a poster or as a card set.',
            }}
        />
    )
}
