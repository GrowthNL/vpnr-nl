import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })

export const metadata: Metadata = {
  title: {
    default: 'Beste VPN Nederland 2025 | Vergelijk & Bespaar | vpnr.nl',
    template: '%s | vpnr.nl',
  },
  description:
    'Vergelijk de beste VPN-diensten voor Nederland. Onafhankelijke reviews van NordVPN, Surfshark, ExpressVPN en meer. Vind de VPN die bij jou past.',
  metadataBase: new URL('https://vpnr.nl'),
  openGraph: {
    siteName: 'vpnr.nl',
    locale: 'nl_NL',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
