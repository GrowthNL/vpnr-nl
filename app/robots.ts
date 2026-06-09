import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers()
  const host = headersList.get('host') ?? ''
  const isVercel = host.endsWith('.vercel.app')

  // Blokkeer indexering volledig op Vercel preview URLs
  if (isVercel) {
    return {
      rules: { userAgent: '*', disallow: '/' },
    }
  }

  return {
    rules: [
      // Standaard crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/go/', '/api/'],
      },
      // Google Gemini / AI Overviews
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // OpenAI GPT
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      // ChatGPT browse
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      // Anthropic Claude
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      // Perplexity
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Meta AI
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      // Apple
      {
        userAgent: 'Applebot',
        allow: '/',
      },
      // Common Crawl (LLM training data)
      {
        userAgent: 'CCBot',
        allow: '/',
      },
    ],
    sitemap: 'https://vpnr.nl/sitemap.xml',
    host: 'https://vpnr.nl',
  }
}
