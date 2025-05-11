import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <div
            className={`${styles.hero_container} relative pointer-events-none`}
        >
            <div className={styles.hero_text}>
                <h1 className={styles.title}>
                    Valerie Anne Barber&apos;s <br /> Gallery
                </h1>
                <p className={styles.subtitle}>Postcards, prints, and more!</p>
            </div>
            <div className={styles.hero_buttons}>
                <Link href='/gallery'>
                    <button
                        className={`${styles.hero_button} relative pointer-events-auto`}
                    >
                        View Gallery
                    </button>
                </Link>
            </div>
        </div>
    )
}
