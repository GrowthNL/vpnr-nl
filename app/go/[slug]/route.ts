import { NextResponse } from 'next/server'
import { affiliateLinks, AFFILIATE_FALLBACK } from '@/config/affiliates'

/**
 * GET /go/[slug]
 *
 * Stuurt de bezoeker door naar de echte affiliate URL.
 * Gebruik 302 (tijdelijk) zodat zoekmachines de doelURL niet indexeren
 * en wij de link kunnen aanpassen zonder cache-problemen.
 *
 * Hier kun je later click-tracking toevoegen, bijv.:
 *   await trackClick(slug, request.headers.get('referer'))
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const destination = affiliateLinks[slug]

  if (!destination) {
    // Onbekende provider → stuur naar vergelijkingspagina
    return NextResponse.redirect(new URL(AFFILIATE_FALLBACK, request.url))
  }

  return NextResponse.redirect(destination, {
    status: 302,
    headers: {
      // Verberg de referrer zodat de affiliate niet ziet van welke pagina
      // de bezoeker afkomstig is (privacy + voorkomt cookieless tracking)
      'Referrer-Policy': 'no-referrer',
    },
  })
}
