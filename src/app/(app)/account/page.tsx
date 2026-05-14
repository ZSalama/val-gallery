import styles from './page.module.css'
import Link from 'next/link'
import { cookies } from 'next/headers'
import prisma from '@/lib/prisma'
import SignOutButton from '@/components/SignOutButton/SignOutButton'

export const revalidate = 60 // Page regenerates every 60 seconds

export const metadata = {
    title: 'Account',
    description: 'Manage your Valerie Anne Barber Gallery account.',
}

const cookie_name = process.env.BETTER_COOKIE_NAME

export default async function Account() {
    const userCookies = await cookies()
    if (!cookie_name) return <div>Environment not set: BETTER_COOKIE_NAME</div>
    const userId = userCookies.get(cookie_name)?.value
    if (!userId) return <div>User session not found</div>
    const newUserId = userId.split('.')[0]

    const session = await prisma.session.findUnique({
        where: { token: newUserId },
    })
    if (!session) return <div>User session not found</div>

    const response = await prisma.user.findFirst({
        where: { id: session.userId },
        orderBy: { createdAt: 'desc' },
    })

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Account</h1>

            <div className={styles.content}>
                <p>Email: {response?.email}</p>
                <div className={styles.buttonContainer}>
                    <Link href='/account/orders'>
                        <button className={styles.button}>Order history</button>
                    </Link>
                    {/* address handled through stripe now */}
                    {/* <Link href='/account/address'>
                        <button className={styles.button}>
                            Change delivery address
                        </button>
                    </Link> */}
                    <SignOutButton />
                </div>
            </div>
        </div>
    )
}
