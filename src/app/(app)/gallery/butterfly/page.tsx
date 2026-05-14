import ProductPageV from '@/components/ProductPageH/ProductPageH'

export const metadata = {
    title: 'Butterfly',
    description:
        'Butterfly by Valerie Anne Barber, available as a poster or card set.',
}

export default function Butterfly() {
    return (
        <ProductPageV
            product={{
                name: 'Butterfly',
                id_poster: 'Butterfly Poster',
                url_poster:
                    'https://d2oeo8w8j25w98.cloudfront.net/butterfly_fit.webp',
                price_id_poster: 'price_1R9v89GhmoGg54MoZQvhrLYG',
                cost_poster: 60,
                id_card: 'Butterfly Card',
                url_card:
                    'https://d2oeo8w8j25w98.cloudfront.net/butterfly_framed.jpg',
                price_id_card: 'price_1R9v9HGhmoGg54MoL28GS30r',
                cost_card: 10,
                blurb: 'Butterfly adds a light, graceful subject to the collection. It is available as a poster or as a 5 by 7 card set.',
            }}
        />
    )
}
