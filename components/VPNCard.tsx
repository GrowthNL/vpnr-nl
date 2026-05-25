import Link from 'next/link'
import type { VPNProvider } from '@/content/providers/types'

interface Props {
  provider: VPNProvider
  rank?: number
  featured?: boolean
}

export default function VPNCard({ provider, rank, featured = false }: Props) {
  return (
    <div className={`bg-white rounded-2xl border-2 p-6 transition-shadow hover:shadow-lg ${
      featured ? 'border-blue-500 shadow-md' : 'border-gray-100 shadow-sm'
    }`}>
      {featured && (
        <div className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full inline-block mb-4">
          #1 Aanbevolen
        </div>
      )}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          {rank && !featured && (
            <span className="text-2xl font-bold text-gray-200">#{rank}</span>
          )}
          <div>
            <h3 className="text-xl font-bold text-gray-900">{provider.naam}</h3>
            <p className="text-sm text-gray-500">{provider.tagline}</p>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-2xl font-bold text-gray-900">
            {provider.scores.overall.toFixed(1)}
          </div>
          <div className="text-xs text-gray-400">/ 10</div>
        </div>
      </div>

      {/* Score bars */}
      <div className="space-y-2 mb-5">
        {[
          { label: 'Snelheid', score: provider.scores.snelheid },
          { label: 'Beveiliging', score: provider.scores.beveiliging },
          { label: 'Gebruiksgemak', score: provider.scores.gebruiksgemak },
          { label: 'Prijs/kwaliteit', score: provider.scores.prijsKwaliteit },
        ].map(({ label, score }) => (
          <div key={label} className="flex items-center gap-2 text-sm">
            <span className="w-28 text-gray-500 flex-shrink-0">{label}</span>
            <div className="flex-1 bg-gray-100 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${score * 10}%` }}
              />
            </div>
            <span className="w-6 text-right font-medium text-gray-700">{score}</span>
          </div>
        ))}
      </div>

      {/* Prijs */}
      <div className="bg-gray-50 rounded-xl p-3 mb-5 flex justify-between items-center">
        <div className="text-sm text-gray-500">Vanaf</div>
        <div className="text-right">
          <span className="text-lg font-bold text-gray-900">
            €{provider.prijzen.tweeJaar ?? provider.prijzen.jaarlijks}
          </span>
          <span className="text-sm text-gray-400">/maand</span>
        </div>
      </div>

      {/* Quick features */}
      <div className="flex flex-wrap gap-2 mb-5">
        {provider.features.noLogs && <Badge>No-logs</Badge>}
        {provider.features.werktMetNetflix && <Badge>Netflix</Badge>}
        {provider.features.werktMetTorrenten && <Badge>Torrenten</Badge>}
        <Badge>{provider.features.aantalLanden} landen</Badge>
        <Badge>
          {provider.features.aantalApparaten === 'onbeperkt'
            ? 'Onbeperkt apparaten'
            : `${provider.features.aantalApparaten} apparaten`}
        </Badge>
      </div>

      {/* CTA */}
      <div className="flex gap-3">
        <a
          href={provider.affiliateLink}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={`flex-1 text-center font-semibold py-3 rounded-xl transition-colors ${
            featured
              ? 'bg-blue-700 text-white hover:bg-blue-800'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {provider.ctaTekst}
        </a>
        <Link
          href={`/vpn-reviews/${provider.slug}`}
          className="px-4 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          Review
        </Link>
      </div>
    </div>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
      {children}
    </span>
  )
}
