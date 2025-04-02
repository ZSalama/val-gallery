import { cookies } from 'next/headers'
import prisma from '@/lib/prisma'

const cookie_name = process.env.BETTER_COOKIE_NAME

export async function generateStaticParams() {
    const orders = await prisma.order.findMany({
        select: { id: true },
    })

    return orders.map((order) => ({
        id: order.id,
    }))
}

export default async function OrderPage({
    params,
}: {
    // params: { id: string }
    params: Promise<{ id: string }>
}) {
    const { id } = await params

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

    // get order
    const order = await prisma.order.findUnique({
        where: { id },
        select: {
            id: true,
            createdAt: true,
            status: true,
            total: true,
            shippingAddress: true,
            items: true,
        },
    })

    if (!order) return <div>Order not found</div>

    //format date
    const date = new Date(order.createdAt)
    const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    }
    const datePart = date.toLocaleDateString('en-US', options)
    const timePart = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    })
    const formattedDate = `${datePart} - ${timePart}`

    return (
        <>
            <div className='mt-40 max-w-md mx-auto bg-gray-300 shadow-md rounded-lg p-6'>
                <h1 className='text-2xl font-bold mb-4'>
                    Order ID: {order.id}
                </h1>
                <p className='text-gray-600 mb-2'>
                    Order placed:{' '}
                    <span className='font-medium'>{formattedDate}</span>
                </p>
                <p className='text-gray-600 mb-2'>
                    Order Shipped:{' '}
                    <span className='font-medium'>
                        {order.status ? 'Yes' : 'No'}
                    </span>
                </p>
                <div className='text-gray-600 mb-2'>
                    Shipping Address:{' '}
                    <p className='font-medium'>{order.shippingAddress.line1}</p>
                    <p className='font-medium'>
                        {order.shippingAddress.line2}{' '}
                    </p>
                    <span className='font-medium'>
                        {order.shippingAddress.city}
                        {', '}
                    </span>
                    <span className='font-medium'>
                        {order.shippingAddress.state}{' '}
                    </span>
                    <br></br>
                    <span className='font-medium'>
                        {order.shippingAddress.zip}{' '}
                    </span>
                    <span className='font-medium'>
                        {order.shippingAddress.country}
                    </span>
                </div>
                <div className='text-gray-600 mb-2'>
                    Items:{' '}
                    <span className='font-medium'>
                        {order.items.map((item) => (
                            <div key={item.id}>
                                <p>
                                    {item.productName} - {item.quantity} x $
                                    {item.price}
                                </p>
                            </div>
                        ))}
                    </span>
                </div>
                <p className='text-xl font-semibold text-gray-800'>
                    Order Total:{' '}
                    <span className='text-green-600'>${order.total}</span>
                </p>
            </div>
        </>
    )
}
