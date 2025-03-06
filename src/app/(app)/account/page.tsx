// import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const revalidate = 60 // Page regenerates every 60 seconds

export default async function Account() {
    //get auth cookie from user

    const userCookies = await cookies()
    const userId = userCookies.get('better-auth.session_token')?.value
    if (!userId) return <div>User session not found</div>
    const newUserId = userId.split('.')[0] //split cookie to get session token to match in db

    // get user ID from session token
    const session = await prisma.session.findUnique({
        where: { token: newUserId },
    })
    if (!session) return <div>User session not found</div>

    // get user address from user ID
    const response = await prisma.user.findFirst({
        where: { id: session.userId },
        orderBy: { createdAt: 'desc' },
    })

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Your account</h1>

            <div className={styles.content}>
                <p>Email: {response?.email}</p>
                <div className={styles.buttonContainer}>
                    <Link href='/account/orders'>
                        <button className={styles.button}>
                            Orders history
                        </button>
                    </Link>
                    <Link href='/account/address'>
                        <button className={styles.button}>
                            Change delivery address
                        </button>
                    </Link>
                    <Link href='/account/logout'>
                        <button className={styles.button}>Logout</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
