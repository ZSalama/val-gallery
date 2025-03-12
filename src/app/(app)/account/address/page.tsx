import prisma from '@/lib/prisma'
import { cookies } from 'next/headers'
import styles from './page.module.css'
import AddressForm from '@/components/AddressForm/AddressForm'

export const revalidate = 60 // Page regenerates every 60 seconds

const cookie_name = process.env.BETTER_COOKIE_NAME

export default async function Address() {
    //get auth cookie from user

    const userCookies = await cookies()
    if (!cookie_name) return <div>Environment not set: BETTER_COOKIE_NAME</div>
    const userId = userCookies.get(cookie_name)?.value
    if (!userId) return <div>User session not found</div>
    const newUserId = userId.split('.')[0] //split cookie to get session token to match in db

    // get user ID from session token
    const session = await prisma.session.findUnique({
        where: { token: newUserId },
    })
    if (!session) return <div>User session not found</div>

    // get user address from user ID
    const response = await prisma.address.findFirst({
        where: { userId: session.userId },
        orderBy: { createdAt: 'desc' },
    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.cur_address}>
                <h2 className={styles.title}>Your current address</h2>
                <ul className={styles.address_list}>
                    <ul>name: {response?.name}</ul>
                    <ul>street: {response?.street}</ul>
                    <ul>state: {response?.state}</ul>
                    <ul>city: {response?.city}</ul>
                    <ul>zipcode: {response?.zip}</ul>
                    <ul>country: {response?.country}</ul>
                </ul>
            </div>
            <div className={styles.change_address}>
                <h2 className={styles.title}>Change address</h2>
                <AddressForm />
            </div>
        </div>
    )
}
