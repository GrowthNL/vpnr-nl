import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers()
  const host = headersList.get('host') ?? ''
  const isVercel = host.endsWith('.vercel.app')

  // Blokkeer indexering volledig op Vercel URLs
  if (isVercel) {
    return {
      rules: { userAgent: '*', disallow: '/' },
    }
  }

  // Alleen vpnr.nl mag geïndexeerd worden
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://vpnr.nl/sitemap.xml',
  }
}
