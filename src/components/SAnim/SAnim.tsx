'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion'

export default function SAnim({ children }: { children: React.ReactNode }) {
    const gallery = useRef(null)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [dimension, setDimension] = useState({ width: 0, height: 0 })

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start'],
    })

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

    useEffect(() => {
        const lenis = new Lenis()

        const raf = (time: number): void => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        const resize = () => {
            setDimension({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', resize)
        requestAnimationFrame(raf)
        resize()

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])
    return (
        <div className=' bg-slate-900'>
            <div ref={gallery} className='max-w-7xl mx-auto relative'>
                <div className='sticky top-0 left-0 w-full h-full z-0'>
                    <motion.div
                        className='absolute top-[1rem] md:top-[5rem] lg:top-[5rem] left-[1rem] md:left-[2rem] lg:left-[5rem]'
                        style={{ rotate }}
                    >
                        <Star className='w-10 md:w-14 lg:w-16 h-10 md:h-14 lg:h-16 stroke-slate-200 fill-slate-200' />
                    </motion.div>
                    <motion.div
                        className='absolute top-[10rem] md:top-[10rem] lg:top-[10rem] left-[3rem] md:left-[3rem] lg:left-[8rem]'
                        style={{ rotate }}
                    >
                        <Star className='w-10 md:w-14 lg:w-16 h-10 md:h-14 lg:h-16 stroke-slate-200 fill-slate-200' />
                    </motion.div>{' '}
                    <motion.div
                        className='absolute top-[13rem] md:top-[13rem] lg:top-[17rem] left-[1rem] md:left-[1rem] lg:left-[1rem]'
                        style={{ rotate }}
                    >
                        <Star className='w-10 md:w-14 lg:w-16 h-10 md:h-14 lg:h-16 stroke-slate-200 fill-slate-200' />
                    </motion.div>{' '}
                    <motion.div
                        className='absolute top-[18rem] md:top-[18rem] lg:top-[22rem] left-[2rem] md:left-[2rem] lg:left-[4rem]'
                        style={{ rotate }}
                    >
                        <Star className='w-10 md:w-14 lg:w-16 h-10 md:h-14 lg:h-16 stroke-slate-200 fill-slate-200' />
                    </motion.div>{' '}
                    <motion.div
                        className='absolute top-[23rem] md:top-[23rem] lg:top-[30rem] left-[4rem] md:left-[4rem] lg:left-[2rem]'
                        style={{ rotate }}
                    >
                        <Star className='w-10 md:w-14 lg:w-16 h-10 md:h-14 lg:h-16 stroke-slate-200 fill-slate-200' />
                    </motion.div>
                    {/* right ride */}
                    <motion.div
                        className='absolute top-[1rem] md:top-[5rem] lg:top-[5rem] right-[1rem] md:right-[2rem] lg:right-[5rem]'
                        style={{ rotate }}
                    >
                        <Star className='w-10 md:w-14 lg:w-16 h-10 md:h-14 lg:h-16 stroke-slate-200 fill-slate-200' />
                    </motion.div>
                    <motion.div
                        className='absolute top-[10rem] md:top-[10rem] lg:top-[10rem] right-[3rem] md:right-[3rem] lg:right-[8rem]'
                        style={{ rotate }}
                    >
                        <Star className='w-10 md:w-14 lg:w-16 h-10 md:h-14 lg:h-16 stroke-slate-200 fill-slate-200' />
                    </motion.div>{' '}
                    <motion.div
                        className='absolute top-[13rem] md:top-[13rem] lg:top-[17rem] right-[1rem] md:right-[1rem] lg:right-[1rem]'
                        style={{ rotate }}
                    >
                        <Star className='w-10 md:w-14 lg:w-16 h-10 md:h-14 lg:h-16 stroke-slate-200 fill-slate-200' />
                    </motion.div>{' '}
                    <motion.div
                        className='absolute top-[18rem] md:top-[18rem] lg:top-[22rem] right-[2rem] md:right-[2rem] lg:right-[4rem]'
                        style={{ rotate }}
                    >
                        <Star className='w-10 md:w-14 lg:w-16 h-10 md:h-14 lg:h-16 stroke-slate-200 fill-slate-200' />
                    </motion.div>{' '}
                    <motion.div
                        className='absolute top-[23rem] md:top-[23rem] lg:top-[30rem] right-[4rem] md:right-[4rem] lg:right-[2rem]'
                        style={{ rotate }}
                    >
                        <Star className='w-10 md:w-14 lg:w-16 h-10 md:h-14 lg:h-16 stroke-slate-200 fill-slate-200' />
                    </motion.div>
                </div>

                <div className='relative md:max-w-xl max-w-4xl min-h-screen p-20 md:p-8 lg:p-4 mx-auto z-10'>
                    {children}
                </div>
            </div>
        </div>
    )
}
