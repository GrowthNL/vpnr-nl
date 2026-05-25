import type { MetadataRoute } from 'next'
import { providers } from '@/content/providers'
import { usecases } from '@/content/usecases'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vpnr.nl'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/beste-vpn`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/vpn-vergelijken`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/vpn-reviews`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    ...providers.map((p) => ({
      url: `${base}/vpn-reviews/${p.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...usecases.map((u) => ({
      url: `${base}/beste-vpn/${u.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    })),
    { url: `${base}/wat-is-een-vpn`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.7 },
    { url: `${base}/over-ons`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/affiliate-disclosure`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
  ]
}
