import styles from './page.module.css'

export const metadata = {
    title: 'About',
    description:
        'Learn about Valerie Anne Barber Gallery and browse artwork available as prints and card sets.',
}

export default function About() {
    return (
        <div>
            <h1 className={styles.title}>About</h1>

            <div className={styles.content}>
                <p>
                    Valerie Anne Barber Gallery collects artwork available as
                    prints, postcards, and card sets. Browse the gallery to
                    choose a piece, then select the format that fits your space
                    or note-sending occasion.
                </p>
            </div>
        </div>
    )
}
