import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { PrismaClient } from '@prisma/client'
import { nextCookies } from 'better-auth/next-js'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const prisma = new PrismaClient()

const cookieName = process.env.BETTER_COOKIE_NAME

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
    const authCookie = userCookies.get(cookieName || '')

    return Boolean(authCookie)
}

export async function requireAdmin() {
    const userCookies = await cookies()
    if (!cookieName) {
        throw new Error('Environment not set: BETTER_COOKIE_NAME')
    }

    const userCookieValue = userCookies.get(cookieName)?.value
    if (!userCookieValue) {
        redirect('/account/login')
    }

    // Split cookie to extract session token
    const token = userCookieValue.split('.')[0]

    // Get session based on token
    const session = await prisma.session.findUnique({
        where: { token },
    })
    if (!session) {
        redirect('/account/login')
    }

    // Get user details from session
    const user = await prisma.user.findFirst({
        where: { id: session.userId },
        orderBy: { createdAt: 'desc' },
    })
    if (!user || !user.isAdmin) {
        redirect('/account/login')
    }

    return user
}
