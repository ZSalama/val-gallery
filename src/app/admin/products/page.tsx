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

// model Product {
//     id          String  @id @default(uuid())
//     name        String
//     description String?
//     price       Float
//     stock       Int?
//     stripeId    String?

//     @@map("products")
//   }

export default async function products() {
    const products = await prisma.product.findMany()
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Products</h1>
            <Table>
                <TableCaption>A list of products.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[100px]'>
                            Product Name
                        </TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Stock</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell className='font-medium'>
                                {product.name}
                            </TableCell>
                            <TableCell>{product.description}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.stock}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
