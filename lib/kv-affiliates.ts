import { affiliateLinks as staticLinks } from '@/config/affiliates'

const KV_PREFIX = 'affiliate:'

/**
 * Lees één affiliate link.
 * Probeert eerst Vercel KV, valt terug op de statische config.
 */
export async function getAffiliateLink(slug: string): Promise<string | null> {
  if (process.env.KV_REST_API_URL) {
    try {
      const { kv } = await import('@vercel/kv')
      const url = await kv.get<string>(`${KV_PREFIX}${slug}`)
      if (url) return url
    } catch {
      // KV niet beschikbaar — gebruik config als fallback
    }
  }
  return staticLinks[slug] ?? null
}

/**
 * Lees alle affiliate links.
 * KV-waarden overschrijven de statische config.
 */
export async function getAllAffiliateLinks(): Promise<Record<string, string>> {
  const result: Record<string, string> = { ...staticLinks }

  if (process.env.KV_REST_API_URL) {
    try {
      const { kv } = await import('@vercel/kv')
      for (const slug of Object.keys(staticLinks)) {
        const url = await kv.get<string>(`${KV_PREFIX}${slug}`)
        if (url) result[slug] = url
      }
    } catch {
      // KV niet beschikbaar
    }
  }

  return result
}

/**
 * Sla een affiliate link op in KV.
 */
export async function setAffiliateLink(slug: string, url: string): Promise<void> {
  if (!process.env.KV_REST_API_URL) {
    throw new Error('Vercel KV is niet geconfigureerd. Zie de setup-instructies.')
  }
  const { kv } = await import('@vercel/kv')
  await kv.set(`${KV_PREFIX}${slug}`, url)
}

/**
 * Geeft alle geldige provider-slugs terug.
 */
export function getProviderSlugs(): string[] {
  return Object.keys(staticLinks)
}
