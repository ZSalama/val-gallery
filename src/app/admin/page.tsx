import styles from './page.module.css'
import Link from 'next/link'
import { requireAdmin } from '@/lib/auth'

export default async function Admin() {
    //get auth cookie from user

    const user = await requireAdmin()

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>hi admin {user.name}</h1>
            <Link href='/admin/products'>
                <button className={styles.button}>Products</button>
            </Link>
            <Link href='/admin/orders'>
                <button className={styles.button}>Orders</button>
            </Link>
        </div>
    )
}
