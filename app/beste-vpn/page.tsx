import type { Metadata } from 'next'
import Link from 'next/link'
import { providers } from '@/content/providers'
import VPNCard from '@/components/VPNCard'

export const metadata: Metadata = {
  title: 'Beste VPN Nederland 2026 | Volledige Vergelijking',
  description: 'Vergelijk de beste VPN-diensten van 2026. Uitgebreide vergelijkingstabel met prijzen, scores en features van NordVPN, Surfshark, ExpressVPN en meer.',
}

const usecases = [
  { href: '/beste-vpn/voor-netflix', emoji: '🎬', label: 'Netflix' },
  { href: '/beste-vpn/voor-streaming', emoji: '📺', label: 'Streaming' },
  { href: '/beste-vpn/voor-torrenten', emoji: '⬇️', label: 'Torrenten' },
  { href: '/beste-vpn/voor-gaming', emoji: '🎮', label: 'Gaming' },
  { href: '/beste-vpn/gratis', emoji: '🆓', label: 'Gratis' },
  { href: '/beste-vpn/goedkoop', emoji: '💰', label: 'Goedkoopst' },
]

export default function BesteVPNPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-glow text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Beste VPN van 2026</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Onze uitgebreide vergelijking van alle grote VPN-providers, getest op snelheid, beveiliging, privacy en prijs.
          </p>
        </div>
      </section>

      {/* Use-case filter */}
      <section className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-sm text-gray-400 self-center mr-2">Filter op:</span>
            {usecases.map(({ href, emoji, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all"
              >
                <span>{emoji}</span> {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VPN Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Alle VPN-providers gerangschikt</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {providers.map((p, i) => (
              <VPNCard key={p.slug} provider={p} rank={i + 1} featured={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Vergelijkingstabel */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Vergelijkingstabel</h2>
          <div className="overflow-x-auto rounded-2xl card-main">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-5 py-4 text-gray-500 font-semibold w-40">Feature</th>
                  {providers.map((p) => (
                    <th key={p.slug} className="px-4 py-4 text-center">
                      <Link href={`/vpn-reviews/${p.slug}`} className="font-black text-gray-900 hover:text-blue-700 transition-colors">
                        {p.naam}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: 'Score',
                    render: (p: typeof providers[0]) => <span className="font-black text-blue-600">{p.scores.overall}/10</span>,
                  },
                  {
                    label: 'Prijs/maand',
                    render: (p: typeof providers[0]) => `€${p.prijzen.tweeJaar ?? p.prijzen.jaarlijks}`,
                  },
                  {
                    label: 'Apparaten',
                    render: (p: typeof providers[0]) => p.features.aantalApparaten === 'onbeperkt' ? '∞' : String(p.features.aantalApparaten),
                  },
                  {
                    label: 'Servers',
                    render: (p: typeof providers[0]) => `${p.features.aantalServers.toLocaleString('nl')}+`,
                  },
                  {
                    label: 'Landen',
                    render: (p: typeof providers[0]) => String(p.features.aantalLanden),
                  },
                  {
                    label: 'Netflix',
                    render: (p: typeof providers[0]) => p.features.werktMetNetflix
                      ? <span className="text-green-600 font-bold">✓</span>
                      : <span className="text-red-400">✗</span>,
                  },
                  {
                    label: 'P2P',
                    render: (p: typeof providers[0]) => p.features.werktMetTorrenten
                      ? <span className="text-green-600 font-bold">✓</span>
                      : <span className="text-red-400">✗</span>,
                  },
                  {
                    label: 'No-logs',
                    render: (p: typeof providers[0]) => p.features.noLogs
                      ? <span className="text-green-600 font-bold">✓</span>
                      : <span className="text-red-400">✗</span>,
                  },
                  {
                    label: 'Kill switch',
                    render: (p: typeof providers[0]) => p.features.killSwitch
                      ? <span className="text-green-600 font-bold">✓</span>
                      : <span className="text-red-400">✗</span>,
                  },
                  {
                    label: 'Hoofdkantoor',
                    render: (p: typeof providers[0]) => p.features.hoofdkantoor,
                  },
                ].map(({ label, render }, i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3.5 text-gray-500 font-medium">{label}</td>
                    {providers.map((p) => (
                      <td key={p.slug} className="px-4 py-3.5 text-center text-gray-700">
                        {render(p)}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-white border-t border-gray-100">
                  <td className="px-5 py-4" />
                  {providers.map((p) => (
                    <td key={p.slug} className="px-4 py-4 text-center">
                      <a
                        href={p.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="btn-shimmer text-white text-xs font-bold px-4 py-2 rounded-full inline-block"
                      >
                        {p.ctaTekst}
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
