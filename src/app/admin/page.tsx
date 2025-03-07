import { PrismaClient } from '@prisma/client'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import styles from './page.module.css'
import Link from 'next/link'
// import styles from './page.module.css'

const prisma = new PrismaClient()

const cookie_name = process.env.BETTER_COOKIE_NAME

export default async function Admin() {
    //get auth cookie from user

    const userCookies = await cookies()
    if (!cookie_name) return <div>Environment not set: BETTER_COOKIE_NAME</div>
    const userId = userCookies.get(cookie_name)?.value
    if (!userId) redirect('/account/login')
    const newUserId = userId.split('.')[0] //split cookie to get session token to match in db

    // get user ID from session token
    const session = await prisma.session.findUnique({
        where: { token: newUserId },
    })
    if (!session) redirect('/account/login')

    // get user address from user ID
    const response = await prisma.user.findFirst({
        where: { id: session.userId },
        orderBy: { createdAt: 'desc' },
    })
    if (!response) redirect('/account/login')

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>hi admin {response.name}</h1>
            <Link href='/admin/products'>
                <button className={styles.button}>Products</button>
            </Link>
            <Link href='/admin/orders'>
                <button className={styles.button}>Orders</button>
            </Link>
        </div>
    )
}
