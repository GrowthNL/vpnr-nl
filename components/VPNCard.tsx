import Link from 'next/link'
import type { VPNProvider } from '@/content/providers/types'

interface Props {
  provider: VPNProvider
  rank?: number
  featured?: boolean
}

export default function VPNCard({ provider, rank, featured = false }: Props) {
  return (
    <div className={`relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] ${
      featured
        ? 'card-glow-featured bg-gradient-to-b from-[#0d1b4a] to-[#060d1f]'
        : 'card-glow bg-[#0d1b3e]/60 hover:bg-[#112248]/60'
    }`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-500 to-blue-400 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-blue-500/30">
            #1 Aanbevolen
          </span>
        </div>
      )}

      <div className="flex items-start justify-between gap-4 mb-5 mt-2">
        <div className="flex items-center gap-3">
          {rank && !featured && (
            <span className="text-3xl font-black text-white/10">#{rank}</span>
          )}
          <div>
            <h3 className="text-lg font-bold text-white">{provider.naam}</h3>
            <p className="text-xs text-white/40 mt-0.5">{provider.tagline}</p>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className={`text-3xl font-black ${featured ? 'text-blue-400' : 'text-white'}`}>
            {provider.scores.overall.toFixed(1)}
          </div>
          <div className="text-xs text-white/30">/10</div>
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
            <span className="w-20 text-white/40 flex-shrink-0">{label}</span>
            <div className="flex-1 bg-white/5 rounded-full h-1.5">
              <div
                className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
                style={{ width: `${score * 10}%` }}
              />
            </div>
            <span className="w-5 text-right text-white/60 font-medium">{score}</span>
          </div>
        ))}
      </div>

      {/* Prijs */}
      <div className="bg-white/5 rounded-xl p-3 mb-5 flex justify-between items-center border border-white/5">
        <div className="text-xs text-white/40">Vanaf per maand</div>
        <div>
          <span className="text-xl font-black text-white">
            €{provider.prijzen.tweeJaar ?? provider.prijzen.jaarlijks}
          </span>
          <span className="text-xs text-white/30">/mo</span>
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
              ? 'btn-shimmer text-white shadow-lg shadow-blue-500/20'
              : 'bg-[#22d3a5]/10 text-[#22d3a5] border border-[#22d3a5]/30 hover:bg-[#22d3a5]/20'
          }`}
        >
          {provider.ctaTekst}
        </a>
        <Link
          href={`/vpn-reviews/${provider.slug}`}
          className="px-4 py-3 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-colors text-sm font-medium"
        >
          Review
        </Link>
      </div>
    </div>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs bg-white/5 text-white/50 border border-white/10 px-2 py-0.5 rounded-full">
      {children}
    </span>
  )
}
