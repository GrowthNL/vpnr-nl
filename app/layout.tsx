import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })

export const metadata: Metadata = {
  title: {
    default: 'Beste VPN Nederland 2026 | Vergelijk & Bespaar | vpnr.nl',
    template: '%s | vpnr.nl',
  },
  description: 'Vergelijk de beste VPN-diensten voor Nederland. Onafhankelijke reviews van NordVPN, Surfshark, ExpressVPN en meer. Actuele prijzen en eerlijke beoordelingen.',
  metadataBase: new URL('https://vpnr.nl'),
  alternates: { canonical: 'https://vpnr.nl' },
  openGraph: {
    siteName: 'vpnr.nl',
    locale: 'nl_NL',
    type: 'website',
    title: 'Beste VPN Nederland 2026 | vpnr.nl',
    description: 'Onafhankelijke VPN-vergelijking voor Nederland. Eerlijke reviews, actuele prijzen en de beste deals.',
    url: 'https://vpnr.nl',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beste VPN Nederland 2026 | vpnr.nl',
    description: 'Onafhankelijke VPN-vergelijking voor Nederland.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  other: {
    'article:publisher': 'https://vpnr.nl',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'vpnr.nl',
  url: 'https://vpnr.nl',
  logo: 'https://vpnr.nl/og-image.png',
  description: 'Onafhankelijke VPN-vergelijkingssite voor de Nederlandse markt.',
  sameAs: ['https://github.com/GrowthNL/vpnr-nl'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'vpnr.nl',
  url: 'https://vpnr.nl',
  description: 'Vergelijk de beste VPN-diensten voor Nederland.',
  inLanguage: 'nl-NL',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://vpnr.nl/beste-vpn?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${geist.variable} h-full antialiased`}>
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
