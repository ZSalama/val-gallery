import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const prismaClientSingleton = () => {
    const connectionString = process.env.DATABASE_URL
    if (!connectionString) {
        throw new Error('Environment not set: DATABASE_URL')
    }

    const adapter = new PrismaPg({
        connectionString,
    })

    return new PrismaClient({ adapter })
}

declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

// Ensure the prisma instance is reused across hot reloads in development
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
