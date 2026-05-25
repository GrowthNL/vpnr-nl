import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Over ons | vpnr.nl',
  description: 'Over vpnr.nl, onafhankelijke VPN-vergelijking voor de Nederlandse markt.',
}

export default function OverOnsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <span className="text-gray-700">Over ons</span>
      </nav>
      <h1 className="text-4xl font-black text-gray-900 mb-6">Over vpnr.nl</h1>
      <div className="space-y-6 text-gray-500 leading-relaxed">
        <p>
          <strong className="text-gray-800">vpnr.nl</strong> is een onafhankelijke VPN-vergelijkingssite gericht op de Nederlandse markt. Wij helpen consumenten de beste VPN-keuze te maken op basis van objectieve tests en vergelijkingen.
        </p>
        <p>
          Onze missie is eenvoudig: eerlijke, actuele en begrijpelijke informatie bieden over VPN-diensten. Wij worden niet betaald om positieve reviews te schrijven. Onze verdienste komt uitsluitend via affiliate commissies wanneer bezoekers besluiten een VPN aan te schaffen via onze links.
        </p>
        <h2 className="text-xl font-black text-gray-900 pt-2">Hoe wij testen</h2>
        <p>
          Wij testen elke VPN-provider op snelheid (via onafhankelijke speedtests), beveiliging (DNS-lek tests, kill switch verificatie), compatibiliteit met streamingdiensten en gebruiksgemak. Data wordt regelmatig bijgewerkt.
        </p>
        <h2 className="text-xl font-black text-gray-900 pt-2">Transparantie</h2>
        <p>
          vpnr.nl ontvangt een commissie wanneer je via onze links een VPN aanschaft. Dit heeft <strong className="text-gray-800">geen invloed</strong> op onze beoordelingen of aanbevelingen. Lees onze{' '}
          <Link href="/affiliate-disclosure" className="text-blue-600 hover:underline">affiliate disclosure</Link> voor meer informatie.
        </p>
      </div>
    </div>
  )
}
