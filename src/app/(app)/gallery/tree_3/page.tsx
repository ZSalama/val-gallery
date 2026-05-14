import ProductPageV from '@/components/ProductPageH/ProductPageH'

export const metadata = {
    title: 'Autumn Tree',
    description:
        'Autumn Tree by Valerie Anne Barber, available as a poster or card set.',
}

export default function Tree_3() {
    return (
        <ProductPageV
            product={{
                name: 'Autumn Tree',
                id_poster: 'Autumn Tree Poster',
                url_poster:
                    'https://d2oeo8w8j25w98.cloudfront.net/tree_3_fit.webp',
                price_id_poster: 'price_1R9x6yGhmoGg54MoPbDVi8Jh',
                cost_poster: 60,
                id_card: 'Autumn Tree Card',
                url_card:
                    'https://d2oeo8w8j25w98.cloudfront.net/tree_3_framed.jpg',
                price_id_card: 'price_1R9x7RGhmoGg54MoweEMjawW',
                cost_card: 10,
                blurb: 'Autumn Tree adds seasonal color and structure to the gallery collection. It is available as a poster or as a card set.',
            }}
        />
    )
}
