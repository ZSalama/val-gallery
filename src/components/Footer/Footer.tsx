import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <Link href='/gallery'>
                        <span className={styles.link}>Gallery</span>
                    </Link>
                    <Link href='/about'>
                        <span className={styles.link}>About</span>
                    </Link>
                    <Link href='/contact'>
                        <span className={styles.link}>Contact</span>
                    </Link>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} VAB. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
