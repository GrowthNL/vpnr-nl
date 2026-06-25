import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import VPNCard from '@/components/VPNCard'
import VPNLogoMarquee from '@/components/VPNLogoMarquee'
import JsonLd from '@/components/JsonLd'
import { providers } from '@/content/providers'
import { posts } from '@/content/posts'
import {
  Film, Tv, Download, Gamepad2, Gift, Tag, Smartphone, Monitor,
  Tablet, Briefcase, MapPin, ShieldCheck, Wifi, Globe, ChevronRight,
  Calendar, Clock, ArrowRight, Star, Check, Zap, Lock, Eye,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Beste VPN Nederland 2026 | Vergelijk & Bespaar | vpnr.nl',
  description:
    'Vergelijk de beste VPN-diensten voor Nederland in 2026. Onafhankelijk getest op snelheid, beveiliging, Netflix en prijs. NordVPN, Surfshark en ProtonVPN vergeleken.',
  alternates: {
    canonical: 'https://vpnr.nl',
    languages: { 'nl-NL': 'https://vpnr.nl', 'x-default': 'https://vpnr.nl' },
  },
  openGraph: {
    title: 'Beste VPN Nederland 2026 | Vergelijk & Bespaar | vpnr.nl',
    description:
      'Onafhankelijke VPN-vergelijking voor Nederland. Getest op snelheid, beveiliging en streaming. Vind de beste deal in 2026.',
    url: 'https://vpnr.nl',
    type: 'website',
  },
}

export default function HomePage() {
  const top3 = providers.slice(0, 3)
  const allReviews = providers.filter((p) =>
    ['nordvpn', 'surfshark', 'protonvpn', 'cyberghost', 'hideme', 'purevpn', 'mcafee', 'vpnnederland'].includes(p.slug),
  )
  const recentPosts = [...posts]
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
    .slice(0, 3)

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Beste VPN-diensten Nederland 2026',
    description: 'Top VPN-providers voor Nederland, gerangschikt op snelheid, beveiliging en prijs-kwaliteit.',
    numberOfItems: top3.length,
    itemListElement: top3.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.naam,
      url: `https://vpnr.nl/vpn-reviews/${p.slug}`,
      description: p.tagline,
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Welke VPN is het beste in Nederland in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NordVPN scoort het hoogst in onze tests: snelste verbinding (via NordLynx/WireGuard), sterkste beveiliging (AES-256) en werkt betrouwbaar met Netflix US. Surfshark is het beste alternatief voor wie op meerdere apparaten wil verbinden.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is een VPN legaal in Nederland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, een VPN gebruiken is volledig legaal in Nederland. Je mag een VPN inzetten voor privacy, streaming en beveiliging. Illegale activiteiten zoals piraterij blijven uiteraard verboden, ook met VPN.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wat kost een goede VPN per maand?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Een betrouwbare VPN kost tussen €2,19 en €4,99 per maand bij een abonnement van 2 jaar. Surfshark begint bij €2,19/maand, NordVPN bij €3,39/maand en ProtonVPN bij €3,99/maand. Maandelijkse abonnementen zijn 3 tot 4 keer duurder.',
        },
      },
      {
        '@type': 'Question',
        name: 'Werkt een VPN met Netflix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NordVPN, Surfshark en CyberGhost werken het meest betrouwbaar met Netflix in 2026. Ze bieden toegang tot Netflix US, UK, Canada en Japan. Kies altijd een server specifiek voor het land waarvan je de catalogus wil bekijken.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hoeveel apparaten kan ik tegelijk verbinden met één VPN?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dat verschilt per provider. NordVPN staat 10 gelijktijdige verbindingen toe, Surfshark heeft geen limiet. ProtonVPN staat 10 verbindingen toe. Bij de meeste providers kun je ook een VPN op je router installeren, zodat alle apparaten thuis automatisch beschermd zijn.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wat is het beste VPN-protocol?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WireGuard (ook bekend als NordLynx bij NordVPN) is in 2026 het snelste en veiligste VPN-protocol. Voor maximale compatibiliteit of in restrictieve netwerken is OpenVPN een goede keuze. IKEv2 is snel en stabiel op mobiel, maar minder flexibel dan WireGuard.',
        },
      },
    ],
  }

  return (
    <>
      <JsonLd data={itemListSchema} />
      <JsonLd data={faqSchema} />

      {/* ── HERO ── */}
      <section className="hero-glow relative overflow-hidden py-24 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/60 text-xs font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Bijgewerkt juni 2026 · Onafhankelijk getest
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6 text-white">
            Vind de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
              beste VPN
            </span>
            <br />voor Nederland
          </h1>

          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Wij testen en vergelijken alle populaire VPN-diensten op snelheid, beveiliging en prijs.
            Vind de beste VPN voor streaming, privacy, thuiswerken of torrenten.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/beste-vpn"
              className="btn-shimmer text-white font-bold px-8 py-4 rounded-2xl text-base hover:scale-105 transition-transform shadow-xl shadow-blue-500/20"
            >
              Vergelijk alle VPN&apos;s
            </Link>
            <Link
              href="/wat-is-een-vpn"
              className="border border-white/10 text-white/70 hover:text-white font-semibold px-8 py-4 rounded-2xl text-base hover:bg-white/5 transition-all"
            >
              Wat is een VPN?
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-14 pt-10 border-t border-white/5">
            {[
              { value: '20+', label: "VPN's getest" },
              { value: '100%', label: 'Onafhankelijk' },
              { value: '8', label: 'Uitgebreide reviews' },
              { value: '€2,19', label: 'Goedkoopste VPN/mnd' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-black text-white stat-number">{value}</div>
                <div className="text-xs text-white/30 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOGO MARQUEE ── */}
      <VPNLogoMarquee />

      {/* ── TOP 3 KAARTEN ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              Beste VPN&apos;s van 2026
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Onze top 3 op basis van uitgebreide tests: snelheid, beveiliging, prijskwaliteit en
              compatibiliteit met streaming en torrenten.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {top3.map((provider, i) => (
              <VPNCard key={provider.slug} provider={provider} rank={i + 1} featured={i === 0} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/beste-vpn"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              Bekijk alle VPN-vergelijkingen
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── VERGELIJKINGSTABEL ── */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2 text-center">
            Snelle vergelijking top VPN&apos;s
          </h2>
          <p className="text-gray-500 text-center text-sm mb-8">
            Alle prijzen bij het voordeligste abonnement (2 jaar). Scores op basis van onze tests.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-5 py-4 font-semibold text-gray-700">Provider</th>
                  <th className="text-center px-4 py-4 font-semibold text-gray-700">Score</th>
                  <th className="text-center px-4 py-4 font-semibold text-gray-700">Prijs/mnd</th>
                  <th className="text-center px-4 py-4 font-semibold text-gray-700">Servers</th>
                  <th className="text-center px-4 py-4 font-semibold text-gray-700">Apparaten</th>
                  <th className="text-center px-4 py-4 font-semibold text-gray-700">Netflix</th>
                  <th className="text-center px-4 py-4 font-semibold text-gray-700">No-logs</th>
                  <th className="px-4 py-4" />
                </tr>
              </thead>
              <tbody>
                {providers.slice(0, 5).map((p, i) => (
                  <tr key={p.slug} className={`border-b border-gray-50 hover:bg-blue-50/30 transition-colors ${i === 0 ? 'bg-blue-50/20' : 'bg-white'}`}>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-gray-400 w-4">#{i + 1}</span>
                        <Image src={p.logo} alt={p.naam} width={28} height={28} className="flex-shrink-0" />
                        <span className="font-semibold text-gray-900">{p.naam}</span>
                        {i === 0 && (
                          <span className="text-[10px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded-full">Beste keuze</span>
                        )}
                      </div>
                    </td>
                    <td className="text-center px-4 py-4">
                      <span className="font-bold text-blue-700">{p.scores.overall.toFixed(1)}</span>
                      <span className="text-gray-400 text-xs">/10</span>
                    </td>
                    <td className="text-center px-4 py-4 font-semibold text-gray-800">
                      €{(p.prijzen.tweeJaar ?? p.prijzen.jaarlijks).toFixed(2)}
                    </td>
                    <td className="text-center px-4 py-4 text-gray-600">
                      {p.features.aantalServers.toLocaleString('nl-NL')}+
                    </td>
                    <td className="text-center px-4 py-4 text-gray-600">
                      {p.features.aantalApparaten === 'onbeperkt' ? '∞' : p.features.aantalApparaten}
                    </td>
                    <td className="text-center px-4 py-4">
                      {p.features.werktMetNetflix
                        ? <Check className="w-4 h-4 text-green-500 mx-auto" strokeWidth={2.5} />
                        : <span className="text-gray-300">-</span>}
                    </td>
                    <td className="text-center px-4 py-4">
                      {p.features.noLogs
                        ? <Check className="w-4 h-4 text-green-500 mx-auto" strokeWidth={2.5} />
                        : <span className="text-gray-300">-</span>}
                    </td>
                    <td className="px-4 py-4">
                      <Link
                        href={`/vpn-reviews/${p.slug}`}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-800 whitespace-nowrap"
                      >
                        Review →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            Prijzen bij 2-jaarsplan inclusief BTW. Actueel per juni 2026.{' '}
            <Link href="/vpn-vergelijken" className="text-blue-500 hover:underline">Bekijk volledige vergelijking →</Link>
          </p>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Beste VPN voor jouw situatie</h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Niet elke VPN is even geschikt voor elk doel. Bekijk onze specifieke aanbevelingen per gebruik.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/beste-vpn/voor-netflix', Icon: Film, title: 'Beste VPN voor Netflix', desc: 'Netflix US, UK, Canada en Japan ontgrendelen' },
              { href: '/beste-vpn/voor-streaming', Icon: Tv, title: 'Beste VPN voor Streaming', desc: 'Disney+, HBO Max, BBC iPlayer en meer' },
              { href: '/beste-vpn/voor-torrenten', Icon: Download, title: 'Beste VPN voor Torrenten', desc: 'Veilig en anoniem torrenten met P2P-servers' },
              { href: '/beste-vpn/voor-gaming', Icon: Gamepad2, title: 'Beste VPN voor Gaming', desc: 'Lagere ping, DDoS-bescherming, early access' },
              { href: '/beste-vpn/voor-iphone', Icon: Smartphone, title: 'Beste VPN voor iPhone', desc: 'iOS-apps met automatische bescherming' },
              { href: '/beste-vpn/voor-mac', Icon: Monitor, title: 'Beste VPN voor Mac', desc: 'macOS-geoptimaliseerde VPN-apps' },
              { href: '/beste-vpn/voor-android', Icon: Tablet, title: 'Beste VPN voor Android', desc: 'Lichtgewicht apps, auto-connect op wifi' },
              { href: '/beste-vpn/voor-thuiswerken', Icon: Briefcase, title: 'Beste VPN voor Thuiswerken', desc: 'Veilig toegang tot bedrijfsnetwerken' },
              { href: '/beste-vpn/gratis', Icon: Gift, title: 'Beste Gratis VPN', desc: 'Betrouwbare gratis opties zonder bijbedoelingen' },
              { href: '/beste-vpn/goedkoop', Icon: Tag, title: 'Goedkoopste VPN', desc: 'Kwaliteit voor de laagste prijs per maand' },
              { href: '/beste-vpn/voor-belgie', Icon: MapPin, title: 'Beste VPN voor België', desc: 'VTM Go, Streamz en RTBF ontgrendelen' },
            ].map(({ href, Icon, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:bg-blue-50 hover:border-blue-200 transition-all group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors text-sm">{title}</div>
                  <div className="text-xs text-gray-400 mt-1">{desc}</div>
                </div>
                <ChevronRight className="w-4 h-4 ml-auto text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAAROM EEN VPN ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Waarom heb je een VPN nodig?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Een VPN (Virtual Private Network) versleutelt je internetverbinding en verbergt je IP-adres.
              Dat biedt vier concrete voordelen:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                Icon: ShieldCheck,
                title: 'Privacy beschermen',
                desc: 'Jouw internetprovider, werkgever of overheid kan zien welke sites je bezoekt. Een VPN versleutelt al je verkeer met AES-256-encryptie, dezelfde standaard die banken gebruiken. Niemand kan meelezen, ook niet op openbaar wifi.',
              },
              {
                Icon: Wifi,
                title: 'Veilig op openbaar wifi',
                desc: 'Netwerken in hotels, cafés, luchthavens en bibliotheken zijn vaak onbeveiligd. Hackers kunnen je wachtwoorden, bankgegevens en berichten onderscheppen via man-in-the-middle aanvallen. Een VPN maakt die verbinding veilig.',
              },
              {
                Icon: Globe,
                title: 'Geo-blokkades omzeilen',
                desc: 'Netflix US heeft duizenden titels die niet beschikbaar zijn in Nederland. BBC iPlayer, Hulu en Peacock zijn volledig geblokkeerd buiten hun regio. Met een VPN kies je een server in het gewenste land en heb je direct toegang.',
              },
              {
                Icon: Download,
                title: 'Anoniem downloaden',
                desc: 'Bij torrenten is je IP-adres zichtbaar voor iedereen in de swarm, inclusief rechthouders en anti-piracy bedrijven. Een VPN vervangt je IP-adres door dat van de VPN-server, zodat jouw identiteit verborgen blijft.',
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="card-main bg-gray-50 rounded-2xl p-6">
                <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/wat-is-een-vpn" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm">
              Lees meer: wat is een VPN en hoe werkt het?
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTMETHODE / E-E-A-T ── */}
      <section className="py-16 px-4 bg-blue-950 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black mb-3">Hoe testen wij VPN-diensten?</h2>
            <p className="text-blue-200 text-sm max-w-xl mx-auto">
              Onze beoordelingen zijn gebaseerd op uitgebreide, reproduceerbare tests. Geen gesponsorde
              scores, alleen onze eigen meetresultaten.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                Icon: Zap,
                title: 'Snelheidstest',
                desc: 'Download, upload en latency via Nederlandse servers, gemeten met Speedtest.net op meerdere momenten van de dag.',
              },
              {
                Icon: Lock,
                title: 'Beveiligingstest',
                desc: 'DNS-lektests via ipleak.net, WebRTC-lektest, kill switch verificatie en controle van encryptiestandaard (AES-256).',
              },
              {
                Icon: Film,
                title: 'Streamingtest',
                desc: 'Toegang tot Netflix NL, Netflix US, Disney+, BBC iPlayer en Videoland getest per server en per maand.',
              },
              {
                Icon: Eye,
                title: 'Privacy-audit',
                desc: 'No-logs beleid gecontroleerd op onafhankelijke audits, rechtszaken en transparantierapporten van de provider.',
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <Icon className="w-6 h-6 text-blue-300 mb-3" />
                <h3 className="font-bold text-white text-sm mb-2">{title}</h3>
                <p className="text-blue-200 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-blue-400 mt-8">
            vpnr.nl is opgericht door Growth Online Marketing Bureau (Almere, KvK 67106366).
            Wij ontvangen affiliate commissies maar accepteren geen betaalde beoordelingen of gesponsorde scores.{' '}
            <Link href="/over-ons" className="text-blue-300 hover:text-white underline">Meer over ons →</Link>
          </p>
        </div>
      </section>

      {/* ── ALLE VPN REVIEWS ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Alle VPN reviews</h2>
            <p className="text-gray-500 text-sm">
              Uitgebreide, onafhankelijke reviews van alle grote VPN-providers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {allReviews.map((p) => (
              <Link
                key={p.slug}
                href={`/vpn-reviews/${p.slug}`}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all group"
              >
                <Image src={p.logo} alt={`${p.naam} logo`} width={32} height={32} className="flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-800 group-hover:text-blue-700 text-sm transition-colors truncate">
                    {p.naam}
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs text-gray-500 font-medium">{p.scores.overall.toFixed(1)}/10</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/vpn-reviews" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm">
              Bekijk alle reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LAATSTE BLOGS ── */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Laatste van het blog</h2>
              <p className="text-gray-500">VPN-tips, handleidingen en nieuws voor Nederland.</p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
            >
              Alle artikelen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all overflow-hidden"
              >
                <div className="relative w-full h-44 overflow-hidden bg-slate-900">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="px-5 pt-4 flex items-center justify-between">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <div className="px-5 pt-3 pb-5 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="text-blue-500 group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm">
              Alle artikelen bekijken
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Veelgestelde vragen over VPN</h2>
            <p className="text-gray-500">Directe antwoorden op de meest gezochte VPN-vragen in Nederland.</p>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Welke VPN is het beste in Nederland in 2026?',
                a: 'NordVPN scoort het hoogst in onze tests: snelste verbinding via NordLynx/WireGuard, sterkste beveiliging (AES-256) en werkt betrouwbaar met Netflix US. Surfshark is het beste alternatief voor wie op meerdere apparaten wil verbinden zonder extra kosten.',
              },
              {
                q: 'Is een VPN legaal in Nederland?',
                a: 'Ja, een VPN gebruiken is volledig legaal in Nederland. Je mag een VPN inzetten voor privacy, streaming en beveiliging. Illegale activiteiten zoals piraterij blijven uiteraard verboden, ook met VPN.',
              },
              {
                q: 'Wat kost een goede VPN per maand?',
                a: 'Een betrouwbare VPN kost tussen €2,19 en €4,99 per maand bij een 2-jaarsabonnement. Surfshark begint bij €2,19/maand, NordVPN bij €3,39/maand en ProtonVPN bij €3,99/maand. Maandelijkse abonnementen zijn 3 tot 4 keer duurder; een jaar- of 2-jaarsplan is altijd voordeliger.',
              },
              {
                q: 'Werkt een VPN met Netflix?',
                a: 'NordVPN, Surfshark en CyberGhost werken het meest betrouwbaar met Netflix in 2026. Ze bieden toegang tot Netflix US, UK, Canada en Japan. Kies altijd een server in het land van de gewenste catalogus en wis je cookies als je een foutmelding krijgt.',
              },
              {
                q: 'Hoeveel apparaten kan ik tegelijk verbinden?',
                a: 'Dat verschilt per provider. NordVPN staat 10 gelijktijdige verbindingen toe, Surfshark heeft geen limiet. Je kunt ook een VPN op je router installeren; dan telt het hele thuisnetwerk als één verbinding en zijn alle apparaten automatisch beschermd.',
              },
              {
                q: 'Wat is het beste VPN-protocol?',
                a: 'WireGuard (ook bekend als NordLynx bij NordVPN) is in 2026 het snelste en veiligste protocol. Voor maximale compatibiliteit kies je OpenVPN. IKEv2 is stabiel op mobiel. Vermijd oudere protocollen zoals PPTP en L2TP, die bieden onvoldoende beveiliging.',
              },
            ].map(({ q, a }) => (
              <details key={q} className="bg-white rounded-2xl border border-gray-100 group">
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
    </>
  )
}
