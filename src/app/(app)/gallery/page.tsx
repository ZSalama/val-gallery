import GalleryImageLink from '@/components/ui/imageComponent'

export type GalleryImage = { title: string; src: string; url: string }

const layout = [
    { type: 'horizontal', indexes: [0, 1] },
    { type: 'horizontal', indexes: [2, 3] },
    { type: 'vertical', indexes: [4, 5, 6] },
    { type: 'horizontal', indexes: [7, 8] },
    { type: 'horizontal', indexes: [9, 10] },
    { type: 'vertical', indexes: [11, 12, 13] },
    { type: 'horizontal', indexes: [14, 15] },
]

export default function Gallery() {
    const images: GalleryImage[] = [
        {
            title: 'flower_green.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/flower_green_fit.webp',
            url: 'gallery/flower_green',
        },
        {
            title: 'flower_white.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/flower_white_fit.webp',
            url: 'gallery/flower_white',
        },
        {
            title: 'tree_3.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/tree_3_fit.webp',
            url: 'gallery/tree_3',
        },
        {
            title: 'horse_gallery.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/horse_gallery_fit.webp',
            url: 'gallery/horse_gallery',
        },
        {
            title: 'horse_red.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/horse_red_fit.webp',
            url: 'gallery/horse_red',
        },
        {
            title: 'tree_2.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/tree_2_fit.webp',
            url: 'gallery/tree_2',
        },
        {
            title: 'lizard.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/lizard_fit.webp',
            url: 'gallery/lizard',
        },
        {
            title: 'butterfly.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/butterfly_fit.webp',
            url: 'gallery/butterfly',
        },
        {
            title: 'egg.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/egg_fit.webp',
            url: 'gallery/egg',
        },
        {
            title: 'humming_bird.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/humming_bird_fit.webp',
            url: 'gallery/humming_bird',
        },
        {
            title: 'bamboo.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/bamboo_fit.webp',
            url: 'gallery/bamboo',
        },
        {
            title: 'flower_yellow.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/flower_yellow_fit.webp',
            url: 'gallery/flower_yellow',
        },
        {
            title: 'wheel.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/wheel_fit.webp',
            url: 'gallery/wheel',
        },
        {
            title: 'snake.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/snake_fit.webp',
            url: 'gallery/snake',
        },
        {
            title: 'tree_1.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/tree_1_fit.webp',
            url: 'gallery/tree_1',
        },
        {
            title: 'model_1.jpg',
            src: 'https://d2oeo8w8j25w98.cloudfront.net/model_1_fit.webp',
            url: 'gallery/model_1',
        },
    ]

    return (
        <div className='bg-[rgb(32,32,32, 0)] relative z-50'>
            <h1 className='text-4xl md:text-6xl font-bold text-center text-white mt-32 mb-8'>
                Gallery
            </h1>

            <div className='flex flex-col items-center justify-center'>
                {layout.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`mx-auto px-4 mb-16 flex flex-col md:flex-row items-center justify-center ${
                            row.type === 'horizontal'
                                ? 'gap-8 md:gap-32'
                                : 'gap-8 md:gap-20'
                        }`}
                    >
                        {row.indexes.map((i) => (
                            <GalleryImageLink
                                key={i}
                                src={images[i].src}
                                alt={images[i].title}
                                width={row.type === 'horizontal' ? 960 : 720}
                                height={row.type === 'horizontal' ? 720 : 960}
                                loading={i === 0 ? 'eager' : 'lazy'}
                                url={images[i].url}
                                className='w-full h-full object-cover'
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
