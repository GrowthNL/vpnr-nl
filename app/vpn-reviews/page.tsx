import type { Metadata } from 'next'
import Link from 'next/link'
import { providers } from '@/content/providers'

export const metadata: Metadata = {
  title: 'VPN Reviews 2026 | Onafhankelijk Getest',
  description: 'Lees onze uitgebreide VPN reviews. We testen NordVPN, Surfshark, ExpressVPN en meer op snelheid, beveiliging en prijs.',
}

export default function ReviewsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-gray-900 mb-4">VPN Reviews 2026</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Onafhankelijke, diepgaande reviews van alle grote VPN-providers. Getest op snelheid, beveiliging, privacy en gebruiksgemak.
        </p>
      </div>
      <div className="space-y-4">
        {providers.map((p, i) => (
          <Link
            key={p.slug}
            href={`/vpn-reviews/${p.slug}`}
            className="flex items-center gap-5 bg-white rounded-2xl p-5 card-main hover:shadow-md transition-all group"
          >
            <div className="text-2xl font-black text-gray-100 w-8 flex-shrink-0">#{i + 1}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{p.naam}</h2>
                <span className="text-xs bg-blue-50 text-blue-600 font-semibold px-2 py-0.5 rounded-full">{p.scores.overall}/10</span>
              </div>
              <p className="text-sm text-gray-400 truncate">{p.tagline}</p>
              <div className="flex gap-3 mt-2 text-xs text-gray-400">
                <span>Vanaf €{p.prijzen.tweeJaar ?? p.prijzen.jaarlijks}/maand</span>
                <span>·</span>
                <span>{p.features.aantalLanden} landen</span>
                <span>·</span>
                <span>{p.features.aantalApparaten === 'onbeperkt' ? 'Onbeperkt apparaten' : `${p.features.aantalApparaten} apparaten`}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              {p.features.werktMetNetflix && <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Netflix</span>}
              {p.features.noLogs && <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">No-logs</span>}
              <svg className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
