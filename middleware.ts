import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifySessionToken, getCookieName } from '@/lib/admin-auth'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/admin') && pathname !== '/admin') {
    const token = request.cookies.get(getCookieName())?.value
    const valid = token ? await verifySessionToken(token) : false

    if (!valid) {
      const loginUrl = new URL('/admin', request.url)
      loginUrl.searchParams.set('from', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
