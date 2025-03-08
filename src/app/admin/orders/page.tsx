import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import styles from './page.module.css'
import prisma from '@/lib/prisma'
import Link from 'next/link'
import { requireAdmin } from '@/lib/auth'

// model Order {
//     id        String      @id @default(uuid())
//     userId    String
//     user      User        @relation(fields: [userId], references: [id], onDelete: Cascade)
//     addressId String
//     address   Address     @relation(fields: [addressId], references: [id], onDelete: Cascade)
//     total     Float
//     createdAt DateTime    @default(now())
//     items     OrderItem[]
//     status    Boolean     @default(false) // True if order is complete

//     @@map("orders")
//   }

export default async function orders() {
    const user = await requireAdmin()
    const orders = await prisma.order.findMany()
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Orders</h1>
            <Table>
                <TableCaption>A list of orders.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[100px]'>Order Id</TableHead>
                        <TableHead>Order Placed</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.map((orders) => (
                        <TableRow key={orders.id}>
                            <TableCell className='font-medium'>
                                <Link href={`/admin/orders/${orders.id}`}>
                                    {orders.id}
                                </Link>
                            </TableCell>
                            <TableCell>{orders.createdAt.toString()}</TableCell>
                            <TableCell>{orders.total}</TableCell>
                            <TableCell>
                                (orders.status) ? fulfiled : unfulfilled
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
