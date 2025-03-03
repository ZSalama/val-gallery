'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'
import { useCartContext } from '@/context/CartContext'
// import Logo from '../../components/Logo/Logo'

const Navbar = () => {
    const [style, setStyle] = useState(false)
    const { cart } = useCartContext()
    const [lastScrollY, setLastScrollY] = useState(0)
    const [showNavbar, setShowNavbar] = useState(true)

    const openSidebar = () => {
        // console.log(style)
        setStyle(!style)
    }
    // Scroll behavior: Show navbar when scrolling up, hide when scrolling down
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 50)
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

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
                    fill={pathname === '/' ? '#000' : '#e2e8f0'}
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
            <div
                className={`${
                    styles.navContainer
                } transition-transform duration-300 ${
                    showNavbar ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
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
                                    fill='#e2e8f0'
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
                        <li>
                            {cart.length === 0 ? (
                                <Link
                                    href='/cart'
                                    className={
                                        pathname === '/cart'
                                            ? styles.activeLink +
                                              ' ' +
                                              styles.link
                                            : styles.link
                                    }
                                >
                                    Cart
                                </Link>
                            ) : (
                                <Link
                                    href='/cart'
                                    className={
                                        pathname === '/cart'
                                            ? styles.activeLink +
                                              ' ' +
                                              styles.link
                                            : styles.link
                                    }
                                >
                                    Cart ({cart.length})
                                </Link>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
