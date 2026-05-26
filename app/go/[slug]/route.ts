import { NextResponse } from 'next/server'
import { getAffiliateLink } from '@/lib/kv-affiliates'
import { AFFILIATE_FALLBACK } from '@/config/affiliates'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const destination = await getAffiliateLink(slug)

  if (!destination || destination.includes('JOUWID') || destination.includes('JOUWCODE') || destination.includes('JOUWLINK')) {
    // Placeholder link — stuur door naar vergelijkingspagina
    return NextResponse.redirect(new URL(AFFILIATE_FALLBACK, request.url))
  }

  return NextResponse.redirect(destination, {
    status: 302,
    headers: {
      'Referrer-Policy': 'no-referrer',
    },
  })
}
