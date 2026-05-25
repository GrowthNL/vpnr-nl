import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | vpnr.nl',
  description: 'Informatie over affiliate links en commissies op vpnr.nl.',
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <span className="text-gray-700">Affiliate Disclosure</span>
      </nav>
      <h1 className="text-4xl font-black text-gray-900 mb-6">Affiliate Disclosure</h1>
      <div className="space-y-5 text-gray-500 leading-relaxed">
        <p className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-yellow-800 text-sm">
          <strong>Samenvatting:</strong> vpnr.nl verdient commissie via affiliate links. Dit heeft geen invloed op onze eerlijke beoordelingen.
        </p>
        <p>
          vpnr.nl neemt deel aan affiliate programma's van VPN-providers waaronder NordVPN, Surfshark, ExpressVPN en CyberGhost. Dit betekent dat wij een commissie ontvangen wanneer je via een link op onze site een abonnement afsluit.
        </p>
        <p>
          Deze commissies helpen ons de site te onderhouden en gratis toegankelijk te houden voor iedereen. De hoogte van de commissie heeft <strong className="text-gray-800">geen enkele invloed</strong> op onze beoordelingen, rankings of aanbevelingen. Wij beoordelen elke VPN-provider objectief op basis van onze eigen tests.
        </p>
        <p>
          Affiliate links zijn herkenbaar doordat ze je doorsturen naar de website van de betreffende VPN-provider. Je betaalt nooit meer dan de normale prijs — soms zelfs minder via onze exclusieve kortingen.
        </p>
        <p>
          Heeft u vragen over onze affiliate relaties? Neem dan contact op via onze{' '}
          <Link href="/over-ons" className="text-blue-600 hover:underline">Over ons</Link> pagina.
        </p>
        <p className="text-xs text-gray-400 pt-4">Laatste update: mei 2026</p>
      </div>
    </div>
  )
}
