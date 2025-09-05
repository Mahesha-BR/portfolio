import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const protectedRoutes = ['/mahesha/add', '/mahesha/edit']
const authRoute = '/auth/signin'
const publicRoutes = ['/auth/signin', '/about', '/projects/:path*', '/blogs/:path*', '/contact', authRoute, '/']

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET!
const secret = new TextEncoder().encode(JWT_SECRET)

export default async function middleware(req: NextRequest) {

    const { pathname } = req.nextUrl

    const token = req.cookies.get('token')?.value

    const isProtected = protectedRoutes.some(route => pathname.startsWith(route))
    const isAuthPage = pathname === authRoute

    let isLoggedIn = false

    if (token) {
        try {
            await jwtVerify(token, secret)
            isLoggedIn = true
        } catch (err) {
            console.error("jwt err:",err)
        }
    }

    if (isLoggedIn && isAuthPage) {
        return NextResponse.redirect(new URL('/mahesha/add', req.nextUrl.origin))
    }

    if (isProtected && !isLoggedIn) {
        return NextResponse.redirect(new URL(authRoute, req.nextUrl.origin))
    }

    return NextResponse.next()

}


export const config = {
  matcher: [
    '/mahesha/:path*',
    '/auth/:path*',
    '/about',
    '/projects/:path*',
    '/blogs/:path*',
    '/contact'
  ]
}