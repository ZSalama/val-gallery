import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { PrismaClient } from '@prisma/client'
import { nextCookies } from 'better-auth/next-js'
import { cookies } from 'next/headers'

const prisma = new PrismaClient()
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'postgresql', // or "mysql", "postgresql", ...etc
    }),
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    plugins: [nextCookies()],
})

export async function getAuthStatus() {
    const userCookies = await cookies()
    const authCookie = userCookies.get(process.env.BETTER_COOKIE_NAME || '')

    return Boolean(authCookie)
}
