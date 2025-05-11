'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useCartContext } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'

const Navbar = () => {
    const { cart } = useCartContext()
    const pathname = usePathname()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [showNavbar, setShowNavbar] = useState(true)
    const { session } = useAuth()

    const toggleSidebar = () => setSidebarOpen((prev) => !prev)
    const closeSidebar = () => setSidebarOpen(false)

    useEffect(() => {
        let timeout: NodeJS.Timeout
        const handleScroll = () => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                const currentScrollY = window.scrollY
                setShowNavbar(
                    currentScrollY < lastScrollY || currentScrollY < 50
                )
                setLastScrollY(currentScrollY)
            }, 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return (
        <div className=''>
            {/* Open button */}
            <button
                onClick={toggleSidebar}
                aria-label='Open navigation'
                className='block md:hidden fixed top-0 right-0 p-4 z-20'
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

            {/* Overlay (mobile only) */}
            <div
                onClick={toggleSidebar}
                aria-hidden='true'
                className={`fixed inset-0 z-40 transition-colors duration-300 bg-transparent pointer-events-none md:hidden ${
                    sidebarOpen ? 'bg-black/50 pointer-events-auto' : ''
                }`}
            />

            {/* Navbar Container */}
            <div
                className={`fixed top-0  left-0 w-full flex justify-center z-50 transition-transform duration-300 bg-black/50 ${
                    showNavbar ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <nav
                    className={`flex justify-between items-center max-w-[1550px] w-full transition-[right] duration-300 ease-out bg-transparent md:static md:top-auto md:right-auto md:h-auto md:w-full md:border-none ${
                        sidebarOpen
                            ? 'fixed right-0 top-0 h-screen w-[min(15em,100%)] border-l border-[var(--hover-color)]'
                            : 'fixed -right-full top-0 h-screen w-[min(15em,100%)] border-l border-[var(--hover-color)]'
                    }`}
                >
                    <ul className='list-none flex flex-col md:flex-row w-full'>
                        {/* Close button */}
                        <li>
                            <button
                                onClick={toggleSidebar}
                                aria-label='Close navigation'
                                className='block md:hidden p-4'
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

                        {/* Home Link */}
                        <li className='flex md:ml-[50px] ml-0 z-10 md:mr-auto'>
                            <Link
                                href={
                                    pathname?.includes('/admin')
                                        ? '/admin'
                                        : '/'
                                }
                                aria-label='Home'
                                onClick={closeSidebar}
                                className={`flex no-underline min-w-full px-[2em] py-[30px] text-[var(--nav-text)] transition-colors duration-200 hover:bg-[var(--nav-foreground)] ${
                                    pathname === '/'
                                        ? 'bg-[var(--nav-foreground)]'
                                        : ''
                                }`}
                            >
                                Home
                            </Link>
                        </li>

                        {/* Other Links */}
                        {[
                            { href: '/gallery', label: 'Gallery' },
                            { href: '/about', label: 'About' },
                            {
                                href: session ? '/account' : '/account/login',
                                label: session ? 'Account' : 'Log in',
                            },
                        ].map(({ href, label }) => (
                            <li key={href} className=''>
                                <Link
                                    href={href}
                                    aria-label={label}
                                    onClick={closeSidebar}
                                    className={`flex no-underline min-w-full px-[2em] py-[30px] text-[var(--nav-text)] transition-colors duration-200 hover:bg-[var(--nav-foreground)] ${
                                        pathname === href
                                            ? 'bg-[var(--nav-foreground)]'
                                            : ''
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}

                        {/* Cart Link */}
                        <li>
                            <Link
                                href='/cart'
                                aria-label='Cart'
                                onClick={closeSidebar}
                                className={`flex items-center no-underline min-w-full px-[2em] py-[30px] text-[var(--nav-text)] transition-colors duration-200 hover:bg-[var(--nav-foreground)] ${
                                    pathname === '/cart'
                                        ? 'bg-[var(--nav-foreground)]'
                                        : ''
                                }`}
                            >
                                <span className='pr-2'>Cart</span>
                                {cart.length > 0 && (
                                    <span className='bg-black text-white border-white border-2 text-xs font-bold px-2 py-0.5 rounded-full'>
                                        {cart.length}
                                    </span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
