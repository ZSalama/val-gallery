import { cookies } from 'next/headers'
import prisma from '@/lib/prisma'
import OrdersTable from './components/OrdersTable'

const cookie_name = process.env.BETTER_COOKIE_NAME

export default async function Orders() {
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
    const response = await prisma.user.findFirst({
        where: { id: session.userId },
        orderBy: { createdAt: 'desc' },
    })

    if (!response) return <div>User session not found</div>
    // get orders
    const orders = await prisma.order.findMany({
        where: { userId: response.id },
        select: { id: true, createdAt: true, status: true, total: true },
    })

    if (!orders) return <div>User session not found</div>

    return <OrdersTable orders={orders} />
}
