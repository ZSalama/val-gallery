import ProductPageV from '@/components/ProductPageV/ProductPageV'

export const metadata = {
    title: 'Wheel',
    description:
        'Wheel by Valerie Anne Barber, available as a poster or card set.',
}

export default function Wheel() {
    return (
        <ProductPageV
            product={{
                name: 'Wheel',
                id_poster: 'Wheel Poster',
                url_poster:
                    'https://d2oeo8w8j25w98.cloudfront.net/wheel_fit.webp',
                price_id_poster: 'price_1R9wCJGhmoGg54MoiS2rTuz6',
                cost_poster: 60,
                id_card: 'Wheel Card',
                url_card:
                    'https://d2oeo8w8j25w98.cloudfront.net/wheel_framed.jpg',
                price_id_card: 'price_1R9wVrGhmoGg54MoFKeUZbG9',
                cost_card: 10,
                blurb: 'Wheel is a bold, graphic piece from the gallery collection. Select it as a poster or as a 5 by 7 card set.',
            }}
        />
    )
}
