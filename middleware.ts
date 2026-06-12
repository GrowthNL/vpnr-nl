import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifySessionToken, getCookieName } from '@/lib/admin-auth'

const PRODUCTION_HOST = 'vpnr.nl'

function isVercelUrl(host: string): boolean {
  return host.endsWith('.vercel.app')
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const host = request.headers.get('host') ?? ''

  // Canonicalisatie: forceer non-www (www.vpnr.nl → vpnr.nl) met een 301.
  // Voorkomt dubbele www/non-www URLs in Google's index.
  if (host.startsWith('www.')) {
    const url = new URL(request.url)
    url.host = host.slice(4)
    url.protocol = 'https:'
    url.port = ''
    return NextResponse.redirect(url, 301)
  }

  // Blokkeer indexering van Vercel preview/deployment URLs
  if (isVercelUrl(host)) {
    // Geef een disallow-all robots.txt terug voor de Vercel URL
    if (pathname === '/robots.txt') {
      return new NextResponse('User-agent: *\nDisallow: /', {
        headers: { 'Content-Type': 'text/plain' },
      })
    }
    // Voeg noindex header toe aan alle overige pagina's
    const response = NextResponse.next()
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
    return response
  }

  // Admin authenticatie
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
  matcher: [
    /*
     * Match alle paden behalve:
     * - _next/static (statische bestanden)
     * - _next/image (afbeeldingen)
     * - favicon.ico, sitemap.xml
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
