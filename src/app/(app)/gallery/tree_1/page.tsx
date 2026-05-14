import ProductPageV from '@/components/ProductPageH/ProductPageH'

export const metadata = {
    title: 'Light Trees',
    description:
        'Light Trees by Valerie Anne Barber, available as a poster or card set.',
}

export default function Tree_1() {
    return (
        <ProductPageV
            product={{
                name: 'Light Trees',
                id_poster: 'Tree Poster',
                url_poster:
                    'https://d2oeo8w8j25w98.cloudfront.net/tree_1_fit.webp',
                price_id_poster: 'price_1R9xW6GhmoGg54MoLyNh2Pgw',
                cost_poster: 60,
                id_card: 'Tree Card',
                url_card:
                    'https://d2oeo8w8j25w98.cloudfront.net/tree_1_framed.jpg',
                price_id_card: 'price_1R9xayGhmoGg54MozHpTvDxj',
                cost_card: 10,
                blurb: 'Light Trees offers a gentle landscape subject for the collection. Choose the poster for display or the card set for sharing.',
            }}
        />
    )
}
