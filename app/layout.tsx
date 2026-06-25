import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import IPBanner from '@/components/IPBanner'
import CookieBanner from '@/components/CookieBanner'
import Analytics from '@/components/Analytics'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })

export const metadata: Metadata = {
  title: {
    default: 'Beste VPN Nederland 2026 | Vergelijk & Bespaar | vpnr.nl',
    template: '%s | vpnr.nl',
  },
  description:
    'Vergelijk de beste VPN-diensten voor Nederland. Onafhankelijke reviews van NordVPN, Surfshark, ExpressVPN en meer. Actuele prijzen en eerlijke beoordelingen.',
  metadataBase: new URL('https://vpnr.nl'),
  alternates: {
    canonical: 'https://vpnr.nl',
    languages: {
      'nl-NL': 'https://vpnr.nl',
      'x-default': 'https://vpnr.nl',
    },
  },
  openGraph: {
    siteName: 'vpnr.nl',
    locale: 'nl_NL',
    type: 'website',
    title: 'Beste VPN Nederland 2026 | vpnr.nl',
    description:
      'Onafhankelijke VPN-vergelijking voor Nederland. Eerlijke reviews, actuele prijzen en de beste deals.',
    url: 'https://vpnr.nl',
    images: [{ url: 'https://vpnr.nl/opengraph-image.png', width: 1200, height: 630, alt: 'vpnr.nl | Beste VPN Nederland 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beste VPN Nederland 2026 | vpnr.nl',
    description: 'Onafhankelijke VPN-vergelijking voor Nederland.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  // Voeg je Google Search Console verificatiecode toe als NEXT_PUBLIC_GSC_VERIFICATION env var
  // of vervang de lege string hieronder met je code
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? '',
  },
  other: {
    'article:publisher': 'https://vpnr.nl',
    '75fc95685e5b403': '7b9cfe6b067f5a3c7b2476326c2800ad',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'vpnr.nl',
  url: 'https://vpnr.nl',
  logo: 'https://vpnr.nl/opengraph-image.png',
  description: 'Onafhankelijke VPN-vergelijkingssite voor de Nederlandse markt.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@growthmedia.nl',
    contactType: 'customer support',
    availableLanguage: 'Dutch',
  },
  sameAs: ['https://github.com/GrowthNL/vpnr-nl'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'vpnr.nl',
  url: 'https://vpnr.nl',
  description: 'Vergelijk de beste VPN-diensten voor Nederland.',
  inLanguage: 'nl-NL',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${geist.variable} h-full antialiased`}>
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <IPBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
