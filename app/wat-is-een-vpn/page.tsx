import type { Metadata } from 'next'
import Link from 'next/link'
import { providers } from '@/content/providers'

export const metadata: Metadata = {
  title: 'Wat is een VPN? De Complete Uitleg voor Beginners',
  description: 'Wat is een VPN en hoe werkt het? Lees onze complete beginnersgids over VPN: wat het doet, waarom je het nodig hebt en hoe je het instelt.',
}

export default function WatIsEenVPNPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <span className="text-gray-700">Wat is een VPN?</span>
      </nav>

      <h1 className="text-4xl font-black text-gray-900 mb-4">Wat is een VPN?</h1>
      <p className="text-xl text-gray-500 mb-10 leading-relaxed">
        Een VPN (Virtual Private Network) is een beveiligde verbinding tussen jouw apparaat en het internet. Het verbergt je IP-adres en versleutelt al je internetverkeer.
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-3">Hoe werkt een VPN?</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Normaal gesproken verbindt je apparaat direct met het internet. Websites en diensten kunnen dan je echte IP-adres zien, en je internetprovider kan al je verkeer monitoren.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Met een VPN gaat al je internetverkeer eerst via een beveiligde tunnel naar een VPN-server. Vanaf die server gaat het naar het internet. Websites zien nu het IP-adres van de VPN-server in plaats van jouw echte IP.
          </p>
          <div className="bg-gray-50 rounded-2xl p-5 mt-4 font-mono text-sm text-gray-600">
            <div>Jouw apparaat → 🔒 VPN-tunnel → VPN-server → Internet</div>
            <div className="text-xs text-gray-400 mt-2">Zonder VPN: Jouw apparaat → Internet (IP zichtbaar)</div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-3">Waarom heb je een VPN nodig?</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { icon: '🔒', title: 'Privacy', desc: 'Je provider, werkgever en overheid kunnen niet zien wat je doet online.' },
              { icon: '📶', title: 'Openbare WiFi', desc: 'Bescherm je gegevens op onbeveiligde netwerken in cafés en hotels.' },
              { icon: '🌍', title: 'Geo-blokkades', desc: 'Toegang tot Netflix US, BBC iPlayer en andere regio-geblokkeerde content.' },
              { icon: '⬇️', title: 'Privacy bij downloads', desc: 'Verberg je activiteiten van je provider en derden.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white card-main rounded-xl p-4">
                <div className="text-xl mb-2">{icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-3">Is een VPN legaal in Nederland?</h2>
          <p className="text-gray-500 leading-relaxed">
            Ja, het gebruik van een VPN is volledig legaal in Nederland. Miljoenen mensen gebruiken dagelijks een VPN voor privacy en beveiliging. Illegale activiteiten blijven uiteraard verboden — een VPN maakt die niet legaal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-3">Gratis vs betaalde VPN</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <h3 className="font-bold text-red-800 mb-2">✗ Gratis VPN</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Verkoopt jouw data aan adverteerders</li>
                <li>• Langzame servers</li>
                <li>• Beperkte data (vaak 500MB-10GB)</li>
                <li>• Geen goede klantenservice</li>
                <li>• Mogelijk malware</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <h3 className="font-bold text-green-800 mb-2">✓ Betaalde VPN (€2-5/maand)</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Geen datalogging</li>
                <li>• Snelle servers wereldwijd</li>
                <li>• Onbeperkte data</li>
                <li>• Werkt met Netflix</li>
                <li>• 24/7 klantenservice</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-3">Welke VPN moet ik kiezen?</h2>
          <p className="text-gray-500 mb-6">Voor de meeste gebruikers is NordVPN of Surfshark de beste keuze. Beide bieden uitstekende beveiliging voor een lage prijs.</p>
          <div className="space-y-3">
            {providers.slice(0, 3).map((p) => (
              <div key={p.slug} className="flex items-center justify-between bg-white card-main rounded-xl p-4">
                <div>
                  <span className="font-bold text-gray-900">{p.naam}</span>
                  <span className="text-sm text-gray-400 ml-2">— vanaf €{p.prijzen.tweeJaar ?? p.prijzen.jaarlijks}/maand</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-blue-600">{p.scores.overall}/10</span>
                  <Link href={`/vpn-reviews/${p.slug}`} className="text-sm text-blue-500 hover:underline">Review</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/beste-vpn" className="btn-shimmer inline-block text-white font-bold px-8 py-3.5 rounded-xl shadow-md shadow-blue-500/20">
              Vergelijk alle VPN&apos;s →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
