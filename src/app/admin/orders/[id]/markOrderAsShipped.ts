import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

// Server action to update order status
export async function markOrderAsShipped(formData: FormData) {
    'use server'
    const orderId = formData.get('orderId')?.toString()
    if (!orderId) throw new Error('Order ID is missing')

    await prisma.order.update({
        where: { id: orderId },
        data: { status: true },
    })

    revalidatePath(`/admin/orders/${orderId}`)
    revalidatePath(`/account/orders/${orderId}`)

    redirect(`/admin/orders/${orderId}`)
}
