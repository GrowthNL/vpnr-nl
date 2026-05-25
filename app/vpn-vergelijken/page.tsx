import type { Metadata } from 'next'
import Link from 'next/link'
import { providers } from '@/content/providers'
import ProviderLogo from '@/components/ProviderLogo'
import {
  Star, Zap, ShieldCheck, ThumbsUp, Tag, Euro, Smartphone,
  Server, MapPin, Film, Download, EyeOff, Power, Scissors,
  Building2, CalendarCheck, Check, X,
} from 'lucide-react'

export const metadata: Metadata = {
  title: "VPN Vergelijken 2026 | Zet VPN's Naast Elkaar",
  description: 'Vergelijk VPN-diensten op alle kenmerken: prijs, snelheid, beveiliging, servers en meer. Vind de beste VPN voor jouw situatie.',
  alternates: { canonical: 'https://vpnr.nl/vpn-vergelijken' },
}

const bestFor: Record<string, string> = {
  nordvpn: 'Beste al-in-één',
  surfshark: 'Beste prijs',
  expressvpn: 'Snelste VPN',
  cyberghost: 'Meest servers',
}

function SectionHeader({ label }: { label: string }) {
  return (
    <tr>
      <td
        colSpan={providers.length + 1}
        className="px-5 py-2.5 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest border-t border-blue-100"
      >
        {label}
      </td>
    </tr>
  )
}

function ScoreCell({ score, featured }: { score: number; featured?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className={`font-black text-base ${featured ? 'text-blue-600' : 'text-gray-800'}`}>{score}</span>
      <div className="w-14 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${featured ? 'bg-blue-500' : 'bg-gray-400'}`}
          style={{ width: `${score * 10}%` }}
        />
      </div>
    </div>
  )
}

function Yes() {
  return (
    <span className="inline-flex items-center gap-1 bg-green-50 text-green-600 text-xs font-semibold px-2.5 py-1 rounded-full">
      <Check className="w-3 h-3" strokeWidth={2.5} /> Ja
    </span>
  )
}

function No() {
  return (
    <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-400 text-xs font-medium px-2.5 py-1 rounded-full">
      <X className="w-3 h-3" strokeWidth={2} /> Nee
    </span>
  )
}

function LabelCell({ Icon, label }: { Icon: React.ElementType; label: string }) {
  return (
    <span className="flex items-center gap-2 text-gray-500 font-medium text-xs">
      <Icon className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
      {label}
    </span>
  )
}

export default function VergelijkenPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-glow text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-black mb-3">VPN Vergelijken 2026</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Zet alle VPN-providers naast elkaar op snelheid, prijs, beveiliging en features.
          </p>
        </div>
      </section>

      {/* Quick-pick cards */}
      <section className="py-10 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          {providers.map((p, i) => (
            <div
              key={p.slug}
              className={`bg-white rounded-2xl p-4 text-center ${i === 0 ? 'card-featured' : 'card-main'}`}
            >
              <div className="flex justify-center mb-2">
                <ProviderLogo slug={p.slug} naam={p.naam} iconSize={36} />
              </div>
              <div className="font-black text-gray-900 text-sm">{p.naam}</div>
              <div className="text-blue-600 font-black text-lg">{p.scores.overall}/10</div>
              <div className="text-xs text-gray-400 mb-3">{bestFor[p.slug]}</div>
              <a
                href={p.affiliateLink}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={`block text-xs font-bold py-2 px-3 rounded-xl transition-all hover:scale-[1.03] ${
                  i === 0
                    ? 'btn-shimmer text-white'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                Probeer →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full text-sm bg-white rounded-2xl card-main overflow-hidden">
            <thead>
              <tr className="border-b border-gray-100">
                {/* Label column */}
                <th className="text-left px-5 py-5 text-gray-400 text-xs font-semibold w-44 bg-white">
                  Provider
                </th>
                {providers.map((p, i) => (
                  <th
                    key={p.slug}
                    className={`px-4 py-5 text-center min-w-[160px] ${i === 0 ? 'bg-blue-50/60' : 'bg-white'}`}
                  >
                    {/* Logo */}
                    <div className="flex justify-center mb-2">
                      <ProviderLogo slug={p.slug} naam={p.naam} iconSize={40} />
                    </div>
                    {/* Name */}
                    <Link
                      href={`/vpn-reviews/${p.slug}`}
                      className="font-black text-gray-900 hover:text-blue-700 block text-sm mb-1"
                    >
                      {p.naam}
                    </Link>
                    {/* Best-for badge */}
                    {bestFor[p.slug] && (
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full block mb-2 ${
                        i === 0
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {bestFor[p.slug]}
                      </span>
                    )}
                    {/* Overall score */}
                    <div className={`text-2xl font-black ${i === 0 ? 'text-blue-600' : 'text-gray-700'}`}>
                      {p.scores.overall}
                      <span className="text-xs font-normal text-gray-400">/10</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {/* ── SCORES ── */}
              <SectionHeader label="Scores" />

              {[
                { Icon: Star, label: 'Totaalscore', getValue: (p: typeof providers[0]) => p.scores.overall },
                { Icon: Zap, label: 'Snelheid', getValue: (p: typeof providers[0]) => p.scores.snelheid },
                { Icon: ShieldCheck, label: 'Beveiliging', getValue: (p: typeof providers[0]) => p.scores.beveiliging },
                { Icon: ThumbsUp, label: 'Gebruiksgemak', getValue: (p: typeof providers[0]) => p.scores.gebruiksgemak },
                { Icon: Tag, label: 'Prijs/kwaliteit', getValue: (p: typeof providers[0]) => p.scores.prijsKwaliteit },
              ].map(({ Icon, label, getValue }, ri) => (
                <tr key={label} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                  <td className="px-5 py-3.5">
                    <LabelCell Icon={Icon} label={label} />
                  </td>
                  {providers.map((p, ci) => (
                    <td key={p.slug} className={`px-4 py-3.5 text-center ${ci === 0 ? 'bg-blue-50/30' : ''}`}>
                      <ScoreCell score={getValue(p)} featured={ci === 0} />
                    </td>
                  ))}
                </tr>
              ))}

              {/* ── PRIJS ── */}
              <SectionHeader label="Prijs" />

              <tr className="bg-white">
                <td className="px-5 py-3.5">
                  <LabelCell Icon={Euro} label="Prijs per maand" />
                </td>
                {providers.map((p, ci) => (
                  <td key={p.slug} className={`px-4 py-3.5 text-center ${ci === 0 ? 'bg-blue-50/30' : ''}`}>
                    <span className="font-black text-gray-900">€{p.prijzen.tweeJaar ?? p.prijzen.jaarlijks}</span>
                    <span className="text-gray-400 text-xs">/mo</span>
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-50/60">
                <td className="px-5 py-3.5">
                  <LabelCell Icon={CalendarCheck} label="Garantie" />
                </td>
                {providers.map((p, ci) => (
                  <td key={p.slug} className={`px-4 py-3.5 text-center text-gray-600 text-xs ${ci === 0 ? 'bg-blue-50/30' : ''}`}>
                    {p.prijzen.gratisPeriode ?? '—'}
                  </td>
                ))}
              </tr>

              {/* ── NETWERK ── */}
              <SectionHeader label="Netwerk" />

              {[
                {
                  Icon: Smartphone,
                  label: 'Apparaten',
                  render: (p: typeof providers[0]) =>
                    p.features.aantalApparaten === 'onbeperkt' ? (
                      <span className="font-bold text-green-600">∞ Onbeperkt</span>
                    ) : (
                      <span className="font-semibold text-gray-800">{p.features.aantalApparaten}</span>
                    ),
                },
                {
                  Icon: Server,
                  label: 'Servers',
                  render: (p: typeof providers[0]) => (
                    <span className="font-semibold text-gray-800">{p.features.aantalServers.toLocaleString('nl')}+</span>
                  ),
                },
                {
                  Icon: MapPin,
                  label: 'Landen',
                  render: (p: typeof providers[0]) => (
                    <span className="font-semibold text-gray-800">{p.features.aantalLanden}</span>
                  ),
                },
              ].map(({ Icon, label, render }, ri) => (
                <tr key={label} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                  <td className="px-5 py-3.5">
                    <LabelCell Icon={Icon} label={label} />
                  </td>
                  {providers.map((p, ci) => (
                    <td key={p.slug} className={`px-4 py-3.5 text-center ${ci === 0 ? 'bg-blue-50/30' : ''}`}>
                      {render(p)}
                    </td>
                  ))}
                </tr>
              ))}

              {/* ── FEATURES & PRIVACY ── */}
              <SectionHeader label="Features & Privacy" />

              {[
                { Icon: Film, label: 'Netflix', get: (p: typeof providers[0]) => p.features.werktMetNetflix },
                { Icon: Download, label: 'P2P / Torrenten', get: (p: typeof providers[0]) => p.features.werktMetTorrenten },
                { Icon: EyeOff, label: 'No-logs beleid', get: (p: typeof providers[0]) => p.features.noLogs },
                { Icon: Power, label: 'Kill switch', get: (p: typeof providers[0]) => p.features.killSwitch },
                { Icon: Scissors, label: 'Split tunneling', get: (p: typeof providers[0]) => p.features.splitTunneling },
              ].map(({ Icon, label, get }, ri) => (
                <tr key={label} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                  <td className="px-5 py-3.5">
                    <LabelCell Icon={Icon} label={label} />
                  </td>
                  {providers.map((p, ci) => (
                    <td key={p.slug} className={`px-4 py-3.5 text-center ${ci === 0 ? 'bg-blue-50/30' : ''}`}>
                      {get(p) ? <Yes /> : <No />}
                    </td>
                  ))}
                </tr>
              ))}

              <tr className="bg-white">
                <td className="px-5 py-3.5">
                  <LabelCell Icon={Building2} label="Hoofdkantoor" />
                </td>
                {providers.map((p, ci) => (
                  <td key={p.slug} className={`px-4 py-3.5 text-center text-gray-600 text-xs ${ci === 0 ? 'bg-blue-50/30' : ''}`}>
                    {p.features.hoofdkantoor}
                  </td>
                ))}
              </tr>

              {/* ── CTA ROW ── */}
              <tr className="border-t-2 border-gray-100">
                <td className="px-5 py-6 text-gray-400 text-xs font-medium">Jouw keuze</td>
                {providers.map((p, i) => (
                  <td
                    key={p.slug}
                    className={`px-3 py-6 text-center ${i === 0 ? 'bg-blue-50/30' : ''}`}
                  >
                    <a
                      href={p.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className={`block w-full font-bold py-2.5 px-4 rounded-xl text-sm mb-2 transition-all hover:scale-[1.03] ${
                        i === 0
                          ? 'btn-shimmer text-white shadow-md shadow-blue-500/20'
                          : 'bg-green-600 text-white hover:bg-green-700'
                      }`}
                    >
                      {p.ctaTekst}
                    </a>
                    <Link
                      href={`/vpn-reviews/${p.slug}`}
                      className="text-xs text-blue-500 hover:underline block"
                    >
                      Lees volledige review →
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>

          <p className="text-xs text-gray-400 text-center mt-4">
            Prijzen zijn gebaseerd op het 2-jaarsabonnement. Alle scores zijn gebaseerd op onafhankelijke tests door vpnr.nl.
          </p>
        </div>
      </section>
    </>
  )
}
