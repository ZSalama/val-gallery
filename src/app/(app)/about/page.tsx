import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'
import styles from './page.module.css'

export const metadata = {
    title: 'About',
    description:
        'Learn about Valerie Anne Barber Gallery and browse artwork available as prints and card sets.',
}

export default function About() {
    return (
        <main className={styles.aboutPage}>
            <section className={styles.hero}>
                <ScrollReveal className={styles.heroCopy}>
                    <p className={styles.kicker}>Val Gallery</p>
                    <h1 className={styles.title}>
                        Art for rooms that should feel alive.
                    </h1>
                    <p className={styles.intro}>
                        A collection of luminous prints, natural studies, and
                        quiet surreal moments made to shift with the light,
                        reward a second look, and bring a little wonder into the
                        everyday.
                    </p>
                    <div className={styles.actions}>
                        <Link className={styles.primaryLink} href='/gallery'>
                            View gallery
                        </Link>
                        <Link className={styles.secondaryLink} href='/store'>
                            Shop prints
                        </Link>
                    </div>
                </ScrollReveal>

                <ScrollReveal
                    className={styles.heroArtwork}
                    delay={180}
                    aria-label='Featured works'
                >
                    <div className={styles.largeFrame}>
                        <Image
                            src='https://d2oeo8w8j25w98.cloudfront.net/horse_gallery_fit.webp'
                            alt='Horse artwork from Val Gallery'
                            fill
                            sizes='(max-width: 900px) 86vw, 42vw'
                            priority
                            className={styles.artImage}
                        />
                    </div>
                    <div className={styles.smallFrame}>
                        <Image
                            src='https://d2oeo8w8j25w98.cloudfront.net/flower_white_fit.webp'
                            alt='White flower artwork from Val Gallery'
                            fill
                            sizes='(max-width: 900px) 38vw, 16vw'
                            className={styles.artImage}
                        />
                    </div>
                </ScrollReveal>
            </section>

            <ScrollReveal as='section' className={styles.statement}>
                <p>
                    Val Gallery is built around contrast: soft botanical forms
                    against deep space, familiar subjects treated with a dream
                    logic, and fine detail balanced by bold, graphic color. Each
                    piece is selected to stand on its own while still feeling
                    part of a larger visual world.
                </p>
            </ScrollReveal>

            <section className={styles.processGrid} aria-label='Creative focus'>
                <ScrollReveal as='article' className={styles.processItem}>
                    <span className={styles.itemNumber}>01</span>
                    <h2>Natural Signals</h2>
                    <p>
                        Flowers, trees, wings, and scales become starting points
                        for compositions that feel organic without being
                        predictable.
                    </p>
                </ScrollReveal>
                <ScrollReveal
                    as='article'
                    className={styles.processItem}
                    delay={120}
                >
                    <span className={styles.itemNumber}>02</span>
                    <h2>Atmospheric Color</h2>
                    <p>
                        Saturated accents, shadowed backgrounds, and clean
                        silhouettes give the work depth from across the room.
                    </p>
                </ScrollReveal>
                <ScrollReveal
                    as='article'
                    className={styles.processItem}
                    delay={240}
                >
                    <span className={styles.itemNumber}>03</span>
                    <h2>Made to Display</h2>
                    <p>
                        The collection is curated for walls, shelves, and
                        spaces where artwork can set a mood without taking over
                        the room.
                    </p>
                </ScrollReveal>
            </section>

            <section className={styles.closing}>
                <ScrollReveal className={styles.closingImage}>
                    <Image
                        src='https://d2oeo8w8j25w98.cloudfront.net/humming_bird_fit.webp'
                        alt='Humming bird artwork from Val Gallery'
                        fill
                        sizes='(max-width: 900px) 88vw, 32vw'
                        className={styles.artImage}
                    />
                </ScrollReveal>
                <ScrollReveal className={styles.closingCopy} delay={120}>
                    <p className={styles.kicker}>The collection</p>
                    <h2>Browse by instinct.</h2>
                    <p>
                        Start with the image that catches you first, then follow
                        the rhythm across the gallery. The best pieces usually
                        announce themselves before they explain themselves.
                    </p>
                    <Link className={styles.textLink} href='/gallery'>
                        Explore the work
                    </Link>
                </ScrollReveal>
            </section>
        </main>
    )
}
