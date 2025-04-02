'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { useRouter } from 'next/navigation'
import styles from './../page.module.css'

export default function OrdersTable({ orders }: { orders: any[] }) {
    const router = useRouter()

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Orders</h1>
            <Table>
                {/* <TableCaption className='text-white'>
                    A list of orders.
                </TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[100px] text-white'>
                            Order Id
                        </TableHead>
                        <TableHead className='text-white'>
                            Order Placed
                        </TableHead>
                        <TableHead className='text-white'>Total</TableHead>
                        <TableHead className='text-white'>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow
                            key={order.id}
                            onClick={() =>
                                router.push(`/account/orders/${order.id}`)
                            }
                            className='cursor-pointer hover:bg-gray-900'
                        >
                            <TableCell className='font-medium'>
                                {order.id}
                            </TableCell>
                            <TableCell>
                                {order.createdAt.toDateString()}
                            </TableCell>
                            <TableCell>{order.total}</TableCell>
                            <TableCell>
                                {order.status ? 'shipped' : 'processing'}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
