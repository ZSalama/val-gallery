import ProductPageV from '@/components/ProductPageV/ProductPageV'

export const metadata = {
    title: 'White Trees',
    description:
        'White Trees by Valerie Anne Barber, available as a poster or card set.',
}

export default function Tree_2() {
    return (
        <ProductPageV
            product={{
                name: 'White Trees',
                id_poster: 'White Trees Poster',
                url_poster:
                    'https://d2oeo8w8j25w98.cloudfront.net/tree_2_fit.webp',
                price_id_poster: 'price_1R9vp9GhmoGg54MoWFFi3MVB',
                cost_poster: 60,
                id_card: 'White Trees Card',
                url_card:
                    'https://d2oeo8w8j25w98.cloudfront.net/tree_2_framed.jpg',
                price_id_card: 'price_1R9vpvGhmoGg54MoAJKlHEEw',
                cost_card: 10,
                blurb: 'White Trees brings a clean, quiet tree study to the gallery collection. It is available as a poster or as a 5 by 7 card set.',
            }}
        />
    )
}
