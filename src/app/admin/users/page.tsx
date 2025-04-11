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
import { requireAdmin } from '@/lib/auth'

// model User {
//     id            String    @id
//     email         String    @unique
//     name          String?
//     emailVerified Boolean
//     image         String?
//     createdAt     DateTime
//     updatedAt     DateTime
//     sessions      Session[]
//     accounts      Account[]
//     isAdmin       Boolean   @default(false)

//     // custom fields
//     addresses Address[]
//     orders    Order[]

//     @@map("user")
//   }

export default async function users() {
    await requireAdmin()
    const users = await prisma.user.findMany({
        include: {
            orders: true,
        },
    })
    console.log(users)
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Products</h1>
            <Table>
                <TableCaption>A list of users.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[100px]'>User Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead># of orders</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((users) => (
                        <TableRow key={users.id}>
                            <TableCell className='font-medium'>
                                {users.name}
                            </TableCell>
                            <TableCell>{users.email}</TableCell>
                            <TableCell>
                                {users.createdAt.getMonth()}.
                                {users.createdAt.getDate()}.
                                {users.createdAt.getFullYear()}
                            </TableCell>
                            <TableCell>{users.orders.length}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
