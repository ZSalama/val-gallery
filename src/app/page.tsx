import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <div className={styles.hero_container}>
            <div className={styles.hero_text}>
                <h1 className={styles.title}>Val&apos;s Gallery</h1>
                <p className={styles.subtitle}>Postcards, prints, and more!</p>
            </div>
            <div className={styles.hero_buttons}>
                <Link href='/gallery'>
                    <button className={styles.hero_button}>View Gallery</button>
                </Link>
                <Link href='/about'>
                    <button className={styles.hero_button}>About Us</button>
                </Link>
            </div>
        </div>
    )
}
