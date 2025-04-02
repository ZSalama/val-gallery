import { requireAdmin } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { markOrderAsShipped } from './markOrderAsShipped'

export async function generateStaticParams() {
    const orders = await prisma.order.findMany({
        select: { id: true },
    })

    return orders.map((order) => ({
        id: order.id,
    }))
}

// export default async function OrderPage({
//     params,
// }: {
//     params: { id: string }
// }) {
//     const { id } = await params

export default async function AdminOrderPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    await requireAdmin()

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
                {/* Form to update order status using server actions */}
                {order.status ? (
                    <p> Order has been shipped </p>
                ) : (
                    <form action={markOrderAsShipped} className='mt-4'>
                        <input type='hidden' name='orderId' value={order.id} />
                        <button
                            type='submit'
                            className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'
                        >
                            Mark Order as Shipped
                        </button>
                    </form>
                )}
            </div>
        </>
    )
}
