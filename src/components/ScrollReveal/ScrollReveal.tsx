'use client'

import {
    CSSProperties,
    ElementType,
    HTMLAttributes,
    ReactNode,
    createElement,
    useEffect,
    useRef,
    useState,
} from 'react'
import styles from './ScrollReveal.module.css'

type ScrollRevealProps = HTMLAttributes<HTMLElement> & {
    as?: ElementType
    children: ReactNode
    delay?: number
}

export default function ScrollReveal({
    as: Component = 'div',
    children,
    className,
    delay = 0,
    style,
    ...props
}: ScrollRevealProps) {
    const ref = useRef<HTMLElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current

        if (!element) {
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            {
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.15,
            }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [])

    const revealClassName = [
        styles.reveal,
        isVisible ? styles.visible : '',
        className ?? '',
    ]
        .filter(Boolean)
        .join(' ')

    const revealStyle: CSSProperties | undefined =
        delay > 0
            ? {
                  ...style,
                  transitionDelay: `${delay}ms`,
              }
            : style

    return createElement(
        Component,
        {
            ...props,
            ref,
            className: revealClassName,
            style: revealStyle,
        },
        children
    )
}
