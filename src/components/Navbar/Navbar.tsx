'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'
// import Logo from '../../components/Logo/Logo'

const Navbar = () => {
    const [style, setStyle] = useState(false)

    const openSidebar = () => {
        // console.log(style)
        setStyle(!style)
    }

    const pathname = usePathname()
    return (
        <>
            {/* open button */}
            <button
                className={styles.style + ' ' + styles.menu_open_button}
                onClick={() => openSidebar()}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='40px'
                    viewBox='0 -960 960 960'
                    width='40px'
                    // fill='#c9c9c9'
                >
                    <path d='M165.13-254.62q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.86q7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.87q-7.22 7.12-17.9 7.12H165.13Zm0-200.25q-10.68 0-17.9-7.27-7.23-7.26-7.23-17.99 0-10.74 7.23-17.87 7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.27 7.23 7.26 7.23 17.99 0 10.74-7.23 17.87-7.22 7.13-17.9 7.13H165.13Zm0-200.26q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.87q7.22-7.12 17.9-7.12h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.86q-7.22 7.13-17.9 7.13H165.13Z' />
                </svg>
            </button>
            {/* overlay */}
            <div
                className={
                    style
                        ? styles.overlay + ' ' + styles.overlay_show
                        : styles.overlay
                }
                onClick={() => openSidebar()}
            ></div>
            {/* navbar */}
            <div className={styles.navContainer}>
                <nav
                    className={
                        style
                            ? styles.nav + ' ' + styles.show
                            : styles.nav + ' ' + styles.hide
                    }
                    onClick={() => openSidebar()}
                >
                    <ul className={styles.navList}>
                        <li>
                            <button
                                className={
                                    styles.link + ' ' + styles.menu_close_button
                                }
                                onClick={() => openSidebar()}
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    height='40px'
                                    viewBox='0 -960 960 960'
                                    width='40px'
                                    fill='#c9c9c9'
                                >
                                    <path d='m480-444.62-209.69 209.7q-7.23 7.23-17.5 7.42-10.27.19-17.89-7.42-7.61-7.62-7.61-17.7 0-10.07 7.61-17.69L444.62-480l-209.7-209.69q-7.23-7.23-7.42-17.5-.19-10.27 7.42-17.89 7.62-7.61 17.7-7.61 10.07 0 17.69 7.61L480-515.38l209.69-209.7q7.23-7.23 17.5-7.42 10.27-.19 17.89 7.42 7.61 7.62 7.61 17.7 0 10.07-7.61 17.69L515.38-480l209.7 209.69q7.23 7.23 7.42 17.5.19 10.27-7.42 17.89-7.62 7.61-17.7 7.61-10.07 0-17.69-7.61L480-444.62Z' />
                                </svg>
                            </button>
                        </li>
                        <li className={styles.home_link}>
                            <Link
                                href='/'
                                className={
                                    pathname === '/'
                                        ? styles.activeLink + ' ' + styles.link
                                        : styles.link
                                }
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/gallery'
                                className={
                                    pathname === '/gallery'
                                        ? styles.activeLink + ' ' + styles.link
                                        : styles.link
                                }
                            >
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/about'
                                className={
                                    pathname === '/about'
                                        ? styles.activeLink + ' ' + styles.link
                                        : styles.link
                                }
                            >
                                About
                            </Link>
                        </li>
                        {/* 
                        <li>
                            <Link
                                href='/pricing'
                                className={
                                    pathname === '/pricing'
                                        ? styles.activeLink + ' ' + styles.link
                                        : styles.link
                                }
                            >
                                Pricing
                            </Link>
                        </li> */}
                        <li>
                            <Link
                                href='/contact'
                                className={
                                    pathname === '/contact'
                                        ? styles.activeLink + ' ' + styles.link
                                        : styles.link
                                }
                            >
                                Contact Us
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                href='/blog'
                                className={
                                    pathname === '/blog'
                                        ? styles.activeLink + ' ' + styles.link
                                        : styles.link
                                }
                            >
                                Blog
                            </Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
