import ProductPageV from '@/components/ProductPageV/ProductPageV'

export const metadata = {
    title: 'Lizard',
    description:
        'Lizard by Valerie Anne Barber, available as a poster or card set.',
}

export default function Lizard() {
    return (
        <ProductPageV
            product={{
                name: 'Lizard',
                id_poster: 'Lizard Poster',
                url_poster:
                    'https://d2oeo8w8j25w98.cloudfront.net/lizard_fit.webp',
                price_id_poster: 'price_1R9vyEGhmoGg54Mox2VlsV2t',
                cost_poster: 60,
                id_card: 'Lizard Card',
                url_card:
                    'https://d2oeo8w8j25w98.cloudfront.net/lizard_framed.jpg',
                price_id_card: 'price_1R9vz2GhmoGg54MoA1PIOfKd',
                cost_card: 10,
                blurb: 'Lizard adds a distinct natural subject to the gallery collection. It is available as a poster or as a 5 by 7 card set.',
            }}
        />
    )
}
