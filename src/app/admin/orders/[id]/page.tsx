import prisma from '@/lib/prisma'

interface OrderPageProps {
    params: {
        id: string
    }
}

export default async function OrderDetailPage({ params }: OrderPageProps) {
    const { id } = params
    const order = await prisma.order.findUnique({
        where: { id },
        include: {
            // Include related data if needed, e.g., order items, user, address, etc.
            items: true,
            user: true,
            address: true,
        },
    })

    if (!order) {
        return <p>Order not found.</p>
    }

    return (
        <div>
            <h1>Order Details for {order.id}</h1>
            <p>Total: ${order.total}</p>
            <p>Order Placed: {order.createdAt.toString()}</p>
            {/* Render additional order details, like items, user info, address, etc. */}
        </div>
    )
}
