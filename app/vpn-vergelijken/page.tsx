import type { Metadata } from 'next'
import Link from 'next/link'
import { providers } from '@/content/providers'

export const metadata: Metadata = {
  title: 'VPN Vergelijken 2026 | Zet VPN\'s Naast Elkaar',
  description: 'Vergelijk VPN-diensten op alle kenmerken: prijs, snelheid, beveiliging, servers en meer. Vind de beste VPN voor jouw situatie.',
}

export default function VergelijkenPage() {
  return (
    <>
      <section className="hero-glow text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-black mb-4">VPN Vergelijken</h1>
          <p className="text-blue-100 text-lg">Zet alle VPN-providers naast elkaar en vind de beste keuze voor jou.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full text-sm bg-white card-main rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-5 py-4 text-gray-500 w-44">Vergelijking</th>
                {providers.map((p) => (
                  <th key={p.slug} className="px-4 py-4 text-center min-w-[140px]">
                    <Link href={`/vpn-reviews/${p.slug}`} className="font-black text-gray-900 hover:text-blue-700 block">{p.naam}</Link>
                    <span className="text-blue-500 font-bold text-lg block mt-1">{p.scores.overall}/10</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {([
                { label: '⭐ Totaalscore', render: (p: typeof providers[0]) => <span className="font-black text-blue-600 text-base">{p.scores.overall}/10</span> },
                { label: '⚡ Snelheid', render: (p: typeof providers[0]) => `${p.scores.snelheid}/10` },
                { label: '🔒 Beveiliging', render: (p: typeof providers[0]) => `${p.scores.beveiliging}/10` },
                { label: '😊 Gebruiksgemak', render: (p: typeof providers[0]) => `${p.scores.gebruiksgemak}/10` },
                { label: '💰 Prijs/kwaliteit', render: (p: typeof providers[0]) => `${p.scores.prijsKwaliteit}/10` },
                { label: '💶 Prijs per maand', render: (p: typeof providers[0]) => <span className="font-bold">€{p.prijzen.tweeJaar ?? p.prijzen.jaarlijks}</span> },
                { label: '📱 Apparaten', render: (p: typeof providers[0]) => p.features.aantalApparaten === 'onbeperkt' ? <span className="font-bold text-green-600">Onbeperkt</span> : String(p.features.aantalApparaten) },
                { label: '🌍 Servers', render: (p: typeof providers[0]) => `${p.features.aantalServers.toLocaleString('nl')}+` },
                { label: '📍 Landen', render: (p: typeof providers[0]) => String(p.features.aantalLanden) },
                { label: '🎬 Netflix', render: (p: typeof providers[0]) => p.features.werktMetNetflix ? <span className="text-green-600 font-bold text-base">✓</span> : <span className="text-red-400 text-base">✗</span> },
                { label: '⬇️ P2P/Torrenten', render: (p: typeof providers[0]) => p.features.werktMetTorrenten ? <span className="text-green-600 font-bold text-base">✓</span> : <span className="text-red-400 text-base">✗</span> },
                { label: '📋 No-logs', render: (p: typeof providers[0]) => p.features.noLogs ? <span className="text-green-600 font-bold text-base">✓</span> : <span className="text-red-400 text-base">✗</span> },
                { label: '🔌 Kill switch', render: (p: typeof providers[0]) => p.features.killSwitch ? <span className="text-green-600 font-bold text-base">✓</span> : <span className="text-red-400 text-base">✗</span> },
                { label: '✂️ Split tunneling', render: (p: typeof providers[0]) => p.features.splitTunneling ? <span className="text-green-600 font-bold text-base">✓</span> : <span className="text-red-400 text-base">✗</span> },
                { label: '🏛️ Hoofdkantoor', render: (p: typeof providers[0]) => p.features.hoofdkantoor },
                { label: '📅 Garantie', render: (p: typeof providers[0]) => p.prijzen.gratisPeriode ?? '—' },
              ] as { label: string; render: (p: typeof providers[0]) => React.ReactNode }[]).map(({ label, render }, i) => (
                <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-5 py-3.5 text-gray-500 font-medium text-xs">{label}</td>
                  {providers.map((p) => (
                    <td key={p.slug} className="px-4 py-3.5 text-center text-gray-700 text-sm">{render(p)}</td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-gray-100 bg-white">
                <td className="px-5 py-5 text-gray-400 text-xs">Kies</td>
                {providers.map((p) => (
                  <td key={p.slug} className="px-3 py-5 text-center">
                    <a href={p.affiliateLink} target="_blank" rel="noopener noreferrer nofollow"
                      className="btn-shimmer text-white text-xs font-bold px-3 py-2 rounded-full block mb-2">
                      {p.ctaTekst}
                    </a>
                    <Link href={`/vpn-reviews/${p.slug}`} className="text-xs text-blue-500 hover:underline block">
                      Lees review
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
