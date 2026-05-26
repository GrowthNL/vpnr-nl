import Link from 'next/link'
import VPNCard from '@/components/VPNCard'
import VPNLogoMarquee from '@/components/VPNLogoMarquee'
import JsonLd from '@/components/JsonLd'
import { providers } from '@/content/providers'
import { posts } from '@/content/posts'
import {
  Film, Tv, Download, Gamepad2, Gift, Tag,
  ShieldCheck, Wifi, Globe, ChevronRight, Calendar, Clock, ArrowRight,
} from 'lucide-react'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welke VPN is het beste in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NordVPN scoort het hoogst in onze tests: snelste verbinding, sterkste beveiliging en werkt betrouwbaar met Netflix. Surfshark is het beste alternatief voor wie op budget let.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een VPN legaal in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, het gebruik van een VPN is volledig legaal in Nederland. Je mag een VPN gebruiken voor privacy, streaming en beveiliging. Illegale activiteiten blijven uiteraard verboden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een goede VPN per maand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een betrouwbare VPN kost tussen €2,49 en €5 per maand bij een abonnement van 1–2 jaar. Surfshark begint al bij €2,49/maand, NordVPN bij €3,39/maand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt een VPN met Netflix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NordVPN, Surfshark en ExpressVPN werken het meest betrouwbaar met Netflix. Ze bieden toegang tot meerdere Netflix-catalogi, waaronder Netflix US.',
      },
    },
  ],
}

export default function HomePage() {
  const top3 = providers.slice(0, 3)
  const recentPosts = [...posts]
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
    .slice(0, 3)

  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="hero-glow relative overflow-hidden py-24 px-4">
        {/* Decoratieve glow bollen */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/60 text-xs font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Bijgewerkt mei 2026 · Onafhankelijk getest
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6 text-white">
            Vind de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
              beste VPN
            </span>
            <br />voor Nederland
          </h1>

          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Wij vergelijken alle populaire VPN-diensten op snelheid, beveiliging en prijs.
            Vind de juiste keuze voor streaming, privacy of torrenten.
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

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-14 pt-10 border-t border-white/5">
            {[
              { value: '20+', label: 'VPN\'s getest' },
              { value: '100%', label: 'Onafhankelijk' },
              { value: '2026', label: 'Actuele data' },
              { value: '€2,49', label: 'Goedkoopste VPN' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-black text-white stat-number">{value}</div>
                <div className="text-xs text-white/30 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VPN Logo Marquee */}
      <VPNLogoMarquee />

      {/* Top 3 VPN's */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              Beste VPN&apos;s van 2026
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Onze top 3 op basis van snelheid, beveiliging, prijs en gebruiksgemak.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {top3.map((provider, i) => (
              <VPNCard
                key={provider.slug}
                provider={provider}
                rank={i + 1}
                featured={i === 0}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/beste-vpn"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              Bekijk alle VPN-vergelijkingen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-12">
            Beste VPN voor jouw situatie
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/beste-vpn/voor-netflix', Icon: Film, title: 'Beste VPN voor Netflix', desc: 'Toegang tot buitenlandse Netflix-catalogi' },
              { href: '/beste-vpn/voor-streaming', Icon: Tv, title: 'Beste VPN voor Streaming', desc: 'Disney+, HBO Max, BBC iPlayer en meer' },
              { href: '/beste-vpn/voor-torrenten', Icon: Download, title: 'Beste VPN voor Torrenten', desc: 'Veilig en anoniem torrenten' },
              { href: '/beste-vpn/voor-gaming', Icon: Gamepad2, title: 'Beste VPN voor Gaming', desc: 'Lagere ping, betere verbinding' },
              { href: '/beste-vpn/gratis', Icon: Gift, title: 'Beste Gratis VPN', desc: 'Gratis opties zonder addertjes' },
              { href: '/beste-vpn/goedkoop', Icon: Tag, title: 'Goedkoopste VPN', desc: 'Kwaliteit voor de laagste prijs' },
            ].map(({ href, Icon, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition-all group"
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

      {/* Waarom VPN */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-12">Waarom heb je een VPN nodig?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { Icon: ShieldCheck, title: 'Privacy beschermen', desc: 'Jouw provider, werkgever of overheid kan zien welke sites je bezoekt. Een VPN versleutelt je verkeer volledig.' },
              { Icon: Wifi, title: 'Veilig op openbare WiFi', desc: 'In hotels, cafés en luchthavens zijn netwerken onbeveiligd. Een VPN beschermt je wachtwoorden en bankgegevens.' },
              { Icon: Globe, title: 'Geo-blokkades omzeilen', desc: 'Toegang tot content die alleen beschikbaar is in andere landen, Netflix US, BBC iPlayer, Peacock en meer.' },
              { Icon: Download, title: 'Anoniem downloaden', desc: 'Torrenten zonder dat jouw IP-adres zichtbaar is voor derden of rechthouders.' },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="card-main bg-white rounded-2xl p-6">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laatste blogs */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">
                Laatste van het blog
              </h2>
              <p className="text-gray-500">
                VPN-tips, handleidingen en nieuws voor Nederland.
              </p>
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
                {/* Category + readtime */}
                <div className="px-5 pt-5 flex items-center justify-between">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title + excerpt */}
                <div className="px-5 pt-3 pb-5 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Date + arrow */}
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

          {/* Mobile: link naar alle blogs */}
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm"
            >
              Alle artikelen bekijken
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-12">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {[
              {
                q: 'Welke VPN is het beste in Nederland?',
                a: 'NordVPN scoort het hoogst in onze tests: snelste verbinding, sterkste beveiliging en werkt betrouwbaar met Netflix. Surfshark is het beste alternatief voor wie op budget let.',
              },
              {
                q: 'Is een VPN legaal in Nederland?',
                a: 'Ja, het gebruik van een VPN is volledig legaal in Nederland. Je mag een VPN gebruiken voor privacy, streaming en beveiliging. Illegale activiteiten blijven uiteraard verboden.',
              },
              {
                q: 'Wat kost een goede VPN per maand?',
                a: "Een betrouwbare VPN kost tussen €2,49 en €5 per maand bij een abonnement van 1–2 jaar. Surfshark begint al bij €2,49/maand, NordVPN bij €3,39/maand.",
              },
              {
                q: 'Werkt een VPN met Netflix?',
                a: 'NordVPN, Surfshark en ExpressVPN werken het meest betrouwbaar met Netflix. Ze bieden toegang tot meerdere Netflix-catalogi, waaronder Netflix US.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="card-main bg-white rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
