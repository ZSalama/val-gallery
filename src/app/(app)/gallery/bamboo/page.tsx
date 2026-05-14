import ProductPageV from '@/components/ProductPageH/ProductPageH'

export const metadata = {
    title: 'Bamboo',
    description:
        'Bamboo by Valerie Anne Barber, available as a poster or card set.',
}

export default function Bamboo() {
    return (
        <ProductPageV
            product={{
                name: 'Bamboo',
                id_poster: 'Bamboo Poster',
                url_poster:
                    'https://d2oeo8w8j25w98.cloudfront.net/bamboo_fit.webp',
                price_id_poster: 'price_1R9uVFGhmoGg54MojDoTAajG',
                cost_poster: 60,
                id_card: 'Bamboo Card',
                url_card:
                    'https://d2oeo8w8j25w98.cloudfront.net/bamboo_framed.jpg',
                price_id_card: 'price_1R9uVaGhmoGg54MoPt4zScgj',
                cost_card: 10,
                blurb: 'Bamboo brings a calm, natural rhythm to the gallery collection. Choose it as a poster for a quiet wall feature or as a card set for a polished note.',
            }}
        />
    )
}
