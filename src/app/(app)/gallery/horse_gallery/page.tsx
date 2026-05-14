import ProductPageV from '@/components/ProductPageH/ProductPageH'

export const metadata = {
    title: 'Horse Gallery',
    description:
        'Horse Gallery by Valerie Anne Barber, available as a poster or card set.',
}

export default function Horse_gallery() {
    return (
        <ProductPageV
            product={{
                name: 'Horse Gallery',
                id_poster: 'Horse Gallery Poster',
                url_poster:
                    'https://d2oeo8w8j25w98.cloudfront.net/horse_gallery_fit.webp',
                price_id_poster: 'price_1RBNKVGhmoGg54Mo9TJLy9ED',
                cost_poster: 60,
                id_card: 'Horse Gallery Card',
                url_card:
                    'https://d2oeo8w8j25w98.cloudfront.net/horse_gallery_framed.jpg',
                price_id_card: 'price_1RBNLAGhmoGg54MoYqdbIqTo',
                cost_card: 10,
                blurb: 'Horse Gallery is a signature piece in the collection, available as a poster or as a card set. Use the carousel to preview each format.',
            }}
        />
    )
}
