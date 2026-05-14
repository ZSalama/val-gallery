import ProductPageV from '@/components/ProductPageH/ProductPageH'

export const metadata = {
    title: 'Eggs',
    description:
        'Eggs by Valerie Anne Barber, available as a poster or card set.',
}

export default function Egg() {
    return (
        <ProductPageV
            product={{
                name: 'Eggs',
                id_poster: 'Egg Poster',
                url_poster:
                    'https://d2oeo8w8j25w98.cloudfront.net/egg_fit.webp',
                price_id_poster: 'price_1R9vGPGhmoGg54MoseJF4Scc',
                cost_poster: 60,
                id_card: 'Eggs Card',
                url_card:
                    'https://d2oeo8w8j25w98.cloudfront.net/egg_framed.jpg',
                price_id_card: 'price_1R9vH3GhmoGg54Mofz2in3k1',
                cost_card: 10,
                blurb: 'Eggs is a simple, memorable piece from the gallery collection. Select the poster for display or the card set for correspondence and gifts.',
            }}
        />
    )
}
