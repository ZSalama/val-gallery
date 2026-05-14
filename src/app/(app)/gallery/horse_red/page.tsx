import ProductPageV from '@/components/ProductPageV/ProductPageV'

export const metadata = {
    title: 'Red Horse',
    description:
        'Red Horse by Valerie Anne Barber, available as a poster or card set.',
}

export default function Horse_red() {
    return (
        <ProductPageV
            product={{
                name: 'Red Horse',
                id_poster: 'Red Horse Poster',
                url_poster:
                    'https://d2oeo8w8j25w98.cloudfront.net/horse_red_fit.webp',
                price_id_poster: 'price_1R9vWjGhmoGg54MoF2OSxuFl',
                cost_poster: 60,
                id_card: 'Red Horse Card',
                url_card:
                    'https://d2oeo8w8j25w98.cloudfront.net/horse_red_framed.jpg',
                price_id_card: 'price_1R9vXdGhmoGg54MoHVoH9Kjl',
                cost_card: 10,
                blurb: 'Red Horse brings strong color and movement to the gallery collection. It is available as a poster or as a 5 by 7 card set.',
            }}
        />
    )
}
