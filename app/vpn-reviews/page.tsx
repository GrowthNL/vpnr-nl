import type { Metadata } from 'next'
import Link from 'next/link'
import { providers } from '@/content/providers'
import ProviderLogo from '@/components/ProviderLogo'

export const metadata: Metadata = {
  title: 'VPN Reviews 2026 | Onafhankelijk Getest',
  description: 'Lees onze uitgebreide VPN reviews. We testen NordVPN, Surfshark, ProtonVPN, Hide.me en meer op snelheid, beveiliging en prijs.',
  alternates: { canonical: 'https://vpnr.nl/vpn-reviews' },
}

const badges: Record<string, string> = {
  nordvpn:      'Meest gekozen',
  surfshark:    'Beste prijs',
  protonvpn:    'Open-source',
  hideme:       'Beste privacy',
  cyberghost:   'Grootste netwerk',
  purevpn:      'KPMG-geauditeerd',
  vpnnederland: 'Nederlandse keuze',
}

export default function ReviewsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          Bijgewerkt mei 2026 · Onafhankelijk getest
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-4">VPN Reviews 2026</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Onafhankelijke, diepgaande reviews van alle grote VPN-providers. Getest op snelheid, beveiliging, privacy en gebruiksgemak.
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-5">
        {providers.map((p, i) => {
          const featured = i === 0
          const price = p.prijzen.tweeJaar ?? p.prijzen.jaarlijks
          const label = badges[p.slug]

          return (
            <div
              key={p.slug}
              className={`relative bg-white rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${
                featured ? 'card-featured pt-8 pb-6 px-6' : 'card-main p-6'
              }`}
            >
              {/* Featured badge */}
              {featured && (
                <div className="absolute -top-3.5 left-6">
                  <span className="btn-shimmer text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-blue-500/30">
                    #1 Beste keuze 2026
                  </span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                {/* Left: rank + logo + info */}
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  {!featured && (
                    <span className="text-2xl font-black text-gray-100 w-7 flex-shrink-0 mt-1">
                      #{i + 1}
                    </span>
                  )}

                  <ProviderLogo slug={p.slug} naam={p.naam} iconSize={44} className="flex-shrink-0" />

                  <div className="min-w-0 flex-1">
                    {/* Name + score + label */}
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h2 className={`font-black ${featured ? 'text-xl text-gray-900' : 'text-lg text-gray-900'}`}>
                        {p.naam}
                      </h2>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        featured ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {p.scores.overall}/10
                      </span>
                      {label && (
                        <span className="text-xs font-semibold bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                          {label}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-500 mb-3">{p.tagline}</p>

                    {/* Feature badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {p.features.noLogs && (
                        <span className="text-xs bg-green-50 text-green-700 font-medium px-2.5 py-0.5 rounded-full">
                          ✓ No-logs
                        </span>
                      )}
                      {p.features.werktMetNetflix && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full">
                          Netflix
                        </span>
                      )}
                      {p.features.werktMetTorrenten && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full">
                          P2P
                        </span>
                      )}
                      <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full">
                        {p.features.aantalLanden} landen
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full">
                        {p.features.aantalApparaten === 'onbeperkt'
                          ? '∞ apparaten'
                          : `${p.features.aantalApparaten} apparaten`}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: price + CTAs */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 sm:gap-2 flex-shrink-0 sm:min-w-[150px]">
                  <div className="text-right">
                    <div className={`font-black tabular-nums ${featured ? 'text-3xl text-gray-900' : 'text-2xl text-gray-800'}`}>
                      €{price}
                    </div>
                    <div className="text-xs text-gray-400">per maand</div>
                    {p.prijzen.gratisPeriode && (
                      <div className="text-xs text-green-600 font-medium mt-0.5">
                        {p.prijzen.gratisPeriode.split(' ').slice(0, 4).join(' ')}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5 items-end">
                    <a
                      href={p.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className={`text-sm font-bold px-5 py-2.5 rounded-xl whitespace-nowrap transition-all hover:scale-[1.03] active:scale-[0.98] ${
                        featured
                          ? 'btn-shimmer text-white shadow-md shadow-blue-500/25'
                          : 'bg-green-600 text-white hover:bg-green-700'
                      }`}
                    >
                      Probeer {p.naam} →
                    </a>
                    <Link
                      href={`/vpn-reviews/${p.slug}`}
                      className="text-xs text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      Lees volledige review →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Score bar (featured only) */}
              {featured && (
                <div className="grid grid-cols-4 gap-2 mt-5 pt-5 border-t border-blue-100">
                  {[
                    { label: 'Snelheid', score: p.scores.snelheid },
                    { label: 'Beveiliging', score: p.scores.beveiliging },
                    { label: 'Gemak', score: p.scores.gebruiksgemak },
                    { label: 'Prijs/kwal.', score: p.scores.prijsKwaliteit },
                  ].map(({ label, score }) => (
                    <div key={label} className="text-center">
                      <div className="text-xs text-gray-400 mb-1">{label}</div>
                      <div className="text-sm font-bold text-blue-600">{score}</div>
                      <div className="mt-1 bg-blue-100 rounded-full h-1">
                        <div
                          className="bg-blue-500 h-1 rounded-full"
                          style={{ width: `${score * 10}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8">
        <h2 className="text-xl font-black text-gray-900 mb-2">Niet zeker welke VPN bij jou past?</h2>
        <p className="text-gray-500 text-sm mb-5">
          Gebruik onze vergelijkingstool om de beste VPN te vinden op basis van jouw situatie.
        </p>
        <Link
          href="/vpn-vergelijken"
          className="btn-shimmer inline-block text-white font-bold px-8 py-3.5 rounded-xl shadow-md shadow-blue-500/20"
        >
          Vergelijk alle VPN&apos;s →
        </Link>
      </div>
    </div>
  )
}
