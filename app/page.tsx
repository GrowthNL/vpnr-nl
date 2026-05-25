import Link from 'next/link'
import VPNCard from '@/components/VPNCard'
import { providers } from '@/content/providers'

export default function HomePage() {
  const top3 = providers.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-600/50 text-blue-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Bijgewerkt mei 2025 · Onafhankelijke vergelijking
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            De beste VPN voor Nederland
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Wij testen en vergelijken alle populaire VPN-diensten zodat jij niet hoeft te gokken.
            Veilig internetten, streamen en torrenten — voor elke behoefte de juiste keuze.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/beste-vpn"
              className="bg-white text-blue-800 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Vergelijk alle VPN&apos;s
            </Link>
            <Link
              href="/wat-is-een-vpn"
              className="border border-blue-400 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700/50 transition-colors"
            >
              Wat is een VPN?
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          {['100% onafhankelijk', 'Dagelijks bijgewerkt', 'Getest door experts', 'Geen verborgen agenda'].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Top 3 VPN's */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Beste VPN&apos;s van 2025</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
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
          <div className="text-center mt-8">
            <Link
              href="/beste-vpn"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
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
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Beste VPN voor jouw situatie</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/beste-vpn/voor-netflix', emoji: '🎬', title: 'Beste VPN voor Netflix', desc: 'Toegang tot buitenlandse Netflix-catalogi' },
              { href: '/beste-vpn/voor-streaming', emoji: '📺', title: 'Beste VPN voor Streaming', desc: 'Disney+, HBO, BBC iPlayer en meer' },
              { href: '/beste-vpn/voor-torrenten', emoji: '⬇️', title: 'Beste VPN voor Torrenten', desc: 'Veilig en anoniem torrenten' },
              { href: '/beste-vpn/voor-gaming', emoji: '🎮', title: 'Beste VPN voor Gaming', desc: 'Lagere ping, betere verbinding' },
              { href: '/beste-vpn/gratis', emoji: '🆓', title: 'Beste Gratis VPN', desc: 'Gratis opties zonder addertjes' },
              { href: '/beste-vpn/goedkoop', emoji: '💰', title: 'Goedkoopste VPN', desc: 'Kwaliteit voor de laagste prijs' },
            ].map(({ href, emoji, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
              >
                <span className="text-2xl flex-shrink-0">{emoji}</span>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{title}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom VPN */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Waarom heb je een VPN nodig?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Privacy beschermen', desc: 'Jouw internetprovider, werkgever of overheid kan zien welke sites je bezoekt. Een VPN versleutelt je verkeer volledig.' },
              { title: 'Veilig op openbare WiFi', desc: 'In hotels, cafés en luchthavens zijn netwerken onbeveiligd. Een VPN beschermt je wachtwoorden en bankgegevens.' },
              { title: 'Geo-blokkades omzeilen', desc: 'Toegang tot content die alleen beschikbaar is in andere landen — Netflix US, BBC iPlayer, Peacock en meer.' },
              { title: 'Anoniem downloaden', desc: 'Torrenten zonder dat jouw IP-adres zichtbaar is voor derden of rechthouders.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/wat-is-een-vpn" className="text-blue-700 font-semibold hover:underline">
              Alles over VPN&apos;s →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Welke VPN is het beste in Nederland?',
                a: 'NordVPN scoort het hoogst in onze tests: snelste verbinding, sterkste beveiliging en werkt betrouwbaar met Netflix. Surfshark is het beste alternatief voor wie op budget let of meerdere apparaten wil beschermen.',
              },
              {
                q: 'Is een VPN legaal in Nederland?',
                a: 'Ja, het gebruik van een VPN is volledig legaal in Nederland. Je mag een VPN gebruiken voor privacy, streaming en beveiliging. Illegale activiteiten via een VPN blijven uiteraard verboden.',
              },
              {
                q: 'Wat kost een goede VPN per maand?',
                a: "Een betrouwbare VPN kost tussen €2,50 en €5 per maand bij een abonnement van 1–2 jaar. Surfshark begint al bij €2,49/maand, NordVPN bij €3,39/maand. Vermijd gratis VPN's — die verdienen geld aan jouw data.",
              },
              {
                q: 'Werkt een VPN met Netflix?',
                a: 'Niet alle VPN\'s werken even goed met Netflix. NordVPN, Surfshark en ExpressVPN zijn de meest betrouwbare keuzes voor Netflix. Ze bieden toegang tot meerdere Netflix-catalogi, waaronder Netflix US.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border border-gray-100 rounded-xl p-6">
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
