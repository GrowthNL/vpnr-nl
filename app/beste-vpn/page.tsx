import type { Metadata } from 'next'
import Link from 'next/link'
import { providers } from '@/content/providers'
import VPNCard from '@/components/VPNCard'
import JsonLd from '@/components/JsonLd'
import { Film, Tv, Download, Gamepad2, Gift, Tag, ShieldCheck, Zap, Euro, Eye, Globe, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Beste VPN Nederland 2026 | Volledige Vergelijking',
  description: 'Vergelijk de beste VPN-diensten van 2026. Uitgebreide vergelijkingstabel met prijzen, scores en features van NordVPN, Surfshark, ExpressVPN en meer.',
  alternates: { canonical: 'https://vpnr.nl/beste-vpn' },
}

const usecases = [
  { href: '/beste-vpn/voor-netflix', Icon: Film, label: 'Netflix' },
  { href: '/beste-vpn/voor-streaming', Icon: Tv, label: 'Streaming' },
  { href: '/beste-vpn/voor-torrenten', Icon: Download, label: 'Torrenten' },
  { href: '/beste-vpn/voor-gaming', Icon: Gamepad2, label: 'Gaming' },
  { href: '/beste-vpn/gratis', Icon: Gift, label: 'Gratis' },
  { href: '/beste-vpn/goedkoop', Icon: Tag, label: 'Goedkoopst' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is de beste VPN voor Nederland in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NordVPN scoort het hoogst in onze tests voor Nederland in 2026. De combinatie van snelheid, sterke AES-256 encryptie, bewezen no-logs beleid en gebruiksgemak maakt het de beste keuze voor de meeste Nederlanders.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke VPN is het goedkoopst?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Surfshark biedt de laagste prijs van alle grote VPN-aanbieders, met onbeperkte apparaten inbegrepen. Het 2-jaarsabonnement kost minder dan €2,50 per maand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft een VPN invloed op mijn internetsnelheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alle VPNs vertragen de verbinding enigszins door de encryptie en omleiding. Moderne VPNs zoals NordVPN en ExpressVPN hebben echter zulke snelle servers dat je in de praktijk nauwelijks verschil merkt bij streamen, browsen of downloaden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een VPN legaal in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, het gebruik van een VPN is volledig legaal in Nederland. Een VPN beschermt je privacy en is toegestaan. Wat je met de VPN doet moet uiteraard wel legaal zijn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik Netflix kijken met een VPN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, de meeste goede VPNs werken met Netflix. NordVPN, Surfshark en ExpressVPN werken betrouwbaar met Netflix en geven toegang tot buitenlandse catalogi zoals Netflix US.',
      },
    },
  ],
}

export default function BesteVPNPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="hero-glow text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Beste VPN van 2026</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-6">
            Onze uitgebreide vergelijking van alle grote VPN-providers, getest op snelheid, beveiliging, privacy en prijs.
          </p>
          <p className="text-blue-200/80 text-sm max-w-2xl mx-auto leading-relaxed">
            We hebben de populairste VPN-diensten voor Nederland getest op meer dan 20 criteria: downloadsnelheid, encryptieprotocollen (WireGuard, OpenVPN), no-logs beleid, DNS-lekbescherming, kill switch en prijs-kwaliteitverhouding. Hieronder vind je onze onafhankelijke ranglijst voor 2026.
          </p>
        </div>
      </section>

      {/* Use-case filter */}
      <section className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-sm text-gray-400 self-center mr-2">Filter op:</span>
            {usecases.map(({ href, Icon, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all"
              >
                <Icon className="w-3.5 h-3.5" /> {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VPN Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Alle VPN-providers gerangschikt</h2>
          <p className="text-gray-500 text-sm mb-8 max-w-2xl">
            Gerangschikt op totaalscore op basis van onze tests. Klik op een provider voor de uitgebreide review.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {providers.map((p, i) => (
              <VPNCard key={p.slug} provider={p} rank={i + 1} featured={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Waarop letten */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Waarop letten bij een VPN?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Niet elke VPN is geschikt voor elk doel. Dit zijn de zes criteria waarop wij elke provider beoordelen.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                Icon: ShieldCheck,
                title: 'Beveiliging & encryptie',
                text: 'Een goede VPN gebruikt minimaal AES-256 encryptie en moderne protocollen zoals WireGuard of OpenVPN. Ook een audited no-logs beleid en DNS-lekbescherming zijn essentieel.',
              },
              {
                Icon: Zap,
                title: 'Snelheid',
                text: 'Snelheid verschilt enorm per provider en serverlocatie. Wij meten downloadsnelheid, uploadsnelheid en latency op Nederlandse servers via meerdere tijdstippen.',
              },
              {
                Icon: Euro,
                title: 'Prijs-kwaliteitverhouding',
                text: 'Een duur abonnement betekent niet automatisch de beste VPN. Wij vergelijken wat je krijgt voor je geld: functies, apparaatlimieten en garantieperiode.',
              },
              {
                Icon: Globe,
                title: 'Servernetwerk',
                text: 'Meer servers in meer landen betekent minder overbelasting en betere keuze voor geo-unblocking. Let ook op of er Nederlandse servers beschikbaar zijn.',
              },
              {
                Icon: Eye,
                title: 'Privacy & no-logs',
                text: 'Een VPN die jouw verkeer registreert beschermt je privacy niet. Wij checken of het no-logs beleid onafhankelijk geaudit is en waar het hoofdkantoor gevestigd is.',
              },
              {
                Icon: Film,
                title: 'Streaming & compatibiliteit',
                text: 'Werkt de VPN betrouwbaar met Netflix, Disney+, HBO Max en andere streamingdiensten? En ondersteunt hij alle apparaten die jij gebruikt?',
              },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vergelijkingstabel */}
      <section className="py-16 px-4 bg-gray-50">
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
      {/* VPN per situatie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-3 text-center">Beste VPN per situatie</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Elke gebruiker heeft andere wensen. Bekijk onze gespecialiseerde gidsen voor jouw specifieke gebruik.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/beste-vpn/voor-netflix', Icon: Film, title: 'Beste VPN voor Netflix', desc: 'Toegang tot Netflix US, UK en andere catalogi zonder geblokkeerd te worden.' },
              { href: '/beste-vpn/voor-streaming', Icon: Tv, title: 'Beste VPN voor streaming', desc: 'Disney+, HBO Max, BBC iPlayer en meer zonder buffering bekijken.' },
              { href: '/beste-vpn/voor-torrenten', Icon: Download, title: 'Beste VPN voor torrenten', desc: 'P2P-optimized servers met zero logs voor veilig downloaden.' },
              { href: '/beste-vpn/voor-gaming', Icon: Gamepad2, title: 'Beste VPN voor gaming', desc: 'Lage ping, DDoS-bescherming en servers dicht bij gameservers.' },
              { href: '/beste-vpn/gratis', Icon: Gift, title: 'Gratis VPN Nederland', desc: 'Zijn gratis VPNs te vertrouwen? Onze eerlijke vergelijking.' },
              { href: '/beste-vpn/goedkoop', Icon: Tag, title: 'Goedkoopste VPN 2026', desc: 'De beste betaalbare VPNs vanaf minder dan €2 per maand.' },
            ].map(({ href, Icon, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="flex items-start gap-4 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-2xl p-5 transition-all group"
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-blue-100 transition-shadow">
                  <Icon className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors flex items-center gap-1">
                    {title} <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm text-gray-500 mt-0.5 leading-relaxed">{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-2 text-center">Veelgestelde vragen</h2>
          <p className="text-gray-500 text-center mb-10">Alles wat je wilt weten over het kiezen van de beste VPN.</p>
          <div className="space-y-3">
            {[
              {
                q: 'Wat is de beste VPN voor Nederland in 2026?',
                a: 'NordVPN scoort het hoogst in onze tests voor Nederland in 2026. De combinatie van snelheid, sterke AES-256 encryptie, een bewezen no-logs beleid en gebruiksgemak maakt het de beste keuze voor de meeste Nederlanders. Surfshark is het beste alternatief als prijs de prioriteit is.',
              },
              {
                q: 'Welke VPN is het goedkoopst?',
                a: 'Surfshark biedt de laagste prijs van alle grote VPN-aanbieders, met onbeperkte apparaten inbegrepen. Het 2-jaarsabonnement kost minder dan €2,50 per maand. CyberGhost is ook voordelig en heeft regelmatig acties met langere gratis proefperiodes.',
              },
              {
                q: 'Heeft een VPN invloed op mijn internetsnelheid?',
                a: 'Alle VPNs vertragen de verbinding enigszins door de encryptie en omleiding. Moderne VPNs zoals NordVPN (NordLynx/WireGuard) en ExpressVPN (Lightway) hebben echter zulke snelle servers dat je in de praktijk nauwelijks verschil merkt bij streamen, browsen of downloaden.',
              },
              {
                q: 'Is een VPN legaal in Nederland?',
                a: 'Ja, het gebruik van een VPN is volledig legaal in Nederland. Een VPN beschermt je privacy en wordt gebruikt door miljoenen mensen wereldwijd voor veilig internet gebruik. Wat je met de VPN doet moet uiteraard wel legaal zijn.',
              },
              {
                q: 'Kan ik Netflix kijken met een VPN?',
                a: 'Ja, de meeste goede VPNs werken met Netflix. NordVPN, Surfshark en ExpressVPN werken betrouwbaar met Netflix en geven toegang tot buitenlandse catalogi zoals Netflix US, Netflix UK en meer. Gratis VPNs worden doorgaans geblokkeerd door Netflix.',
              },
            ].map(({ q, a }, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-gray-900 text-sm">
                  {q}
                  <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0 rotate-90 group-open:rotate-[270deg] transition-transform duration-200" />
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO tekst */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-4">VPN vergelijken: alles wat je moet weten</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Een <strong>VPN (Virtual Private Network)</strong> versleutelt je internetverbinding en verbergt je IP-adres. Dit beschermt je privacy online, geeft toegang tot geblokkeerde content en beveiligt je verbinding op openbare wifi-netwerken. Met miljoenen gebruikers in Nederland is een VPN in 2026 geen luxe meer, maar een basisbeveiligingstool.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Bij het kiezen van de <strong>beste VPN voor Nederland</strong> kijken wij naar AES-256 encryptie, het gebruikte protocol (WireGuard biedt de beste snelheid-beveiligingsbalans), het no-logs beleid (bij voorkeur onafhankelijk geaudit), het aantal servers en landen, compatibiliteit met streaming diensten en de prijs per maand op langetermijnabonnementen.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Onze ranglijst wordt regelmatig bijgewerkt op basis van nieuwe tests, prijswijzigingen en veranderingen in het beleid van VPN-aanbieders. Alle aanbevolen VPN-diensten bieden een geld-terug-garantie van minimaal 30 dagen, waardoor je ze risicovrij kunt uitproberen.
          </p>
        </div>
      </section>
    </>
  )
}
