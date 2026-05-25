import Link from 'next/link'
import type { VPNProvider } from '@/content/providers/types'
import ProviderLogo from '@/components/ProviderLogo'

interface Props {
  provider: VPNProvider
  rank?: number
  featured?: boolean
}

export default function VPNCard({ provider, rank, featured = false }: Props) {
  return (
    <div className={`relative bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${
      featured ? 'card-featured' : 'card-main'
    }`}>
      {featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="btn-shimmer text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-blue-500/30">
            #1 Aanbevolen
          </span>
        </div>
      )}

      <div className="flex items-start justify-between gap-4 mb-5 mt-2">
        <div className="flex items-center gap-3">
          {rank && !featured && (
            <span className="text-3xl font-black text-gray-100">#{rank}</span>
          )}
          <div>
            <ProviderLogo slug={provider.slug} naam={provider.naam} width={110} height={26} className="mb-1" />
            <p className="text-xs text-gray-400 mt-0.5">{provider.tagline}</p>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className={`text-3xl font-black ${featured ? 'text-blue-600' : 'text-gray-800'}`}>
            {provider.scores.overall.toFixed(1)}
          </div>
          <div className="text-xs text-gray-400">/10</div>
        </div>
      </div>

      {/* Score bars */}
      <div className="space-y-2.5 mb-5">
        {[
          { label: 'Snelheid', score: provider.scores.snelheid },
          { label: 'Beveiliging', score: provider.scores.beveiliging },
          { label: 'Gemak', score: provider.scores.gebruiksgemak },
          { label: 'Prijs/kwal.', score: provider.scores.prijsKwaliteit },
        ].map(({ label, score }) => (
          <div key={label} className="flex items-center gap-2 text-xs">
            <span className="w-20 text-gray-400 flex-shrink-0">{label}</span>
            <div className="flex-1 bg-gray-100 rounded-full h-1.5">
              <div
                className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
                style={{ width: `${score * 10}%` }}
              />
            </div>
            <span className="w-5 text-right text-gray-600 font-semibold">{score}</span>
          </div>
        ))}
      </div>

      {/* Prijs */}
      <div className="bg-blue-50 rounded-xl p-3 mb-5 flex justify-between items-center">
        <div className="text-xs text-gray-500">Vanaf per maand</div>
        <div>
          <span className="text-xl font-black text-gray-900">
            €{provider.prijzen.tweeJaar ?? provider.prijzen.jaarlijks}
          </span>
          <span className="text-xs text-gray-400">/mo</span>
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {provider.features.noLogs && <Badge>No-logs</Badge>}
        {provider.features.werktMetNetflix && <Badge>Netflix</Badge>}
        {provider.features.werktMetTorrenten && <Badge>P2P</Badge>}
        <Badge>{provider.features.aantalLanden} landen</Badge>
        <Badge>
          {provider.features.aantalApparaten === 'onbeperkt'
            ? '∞ apparaten'
            : `${provider.features.aantalApparaten} apparaten`}
        </Badge>
      </div>

      {/* CTA */}
      <div className="flex gap-2">
        <a
          href={provider.affiliateLink}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={`flex-1 text-center font-bold py-3 rounded-xl transition-all text-sm hover:scale-[1.02] ${
            featured
              ? 'btn-shimmer text-white shadow-md shadow-blue-500/20'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {provider.ctaTekst}
        </a>
        <Link
          href={`/vpn-reviews/${provider.slug}`}
          className="px-4 py-3 rounded-xl border border-gray-200 text-gray-500 hover:text-gray-800 hover:border-gray-300 transition-colors text-sm font-medium"
        >
          Review
        </Link>
      </div>
    </div>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-0.5 rounded-full">
      {children}
    </span>
  )
}
