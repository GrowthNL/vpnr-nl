import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacybeleid | vpnr.nl',
  description: 'Het privacybeleid van vpnr.nl, hoe wij omgaan met jouw gegevens.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <span className="text-gray-700">Privacybeleid</span>
      </nav>
      <h1 className="text-4xl font-black text-gray-900 mb-2">Privacybeleid</h1>
      <p className="text-sm text-gray-400 mb-8">Laatste update: mei 2026</p>
      <div className="space-y-8 text-gray-500 leading-relaxed">
        {[
          {
            title: '1. Wie zijn wij?',
            text: 'vpnr.nl is een onafhankelijke VPN-vergelijkingssite voor de Nederlandse markt. Wij zijn verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in dit beleid.',
          },
          {
            title: '2. Welke gegevens verzamelen wij?',
            text: 'Wij verzamelen anonieme gebruiksstatistieken via Google Analytics (geanonimiseerde IP-adressen). Wij verzamelen geen naam, e-mailadres of andere persoonlijk identificeerbare informatie, tenzij je zelf contact opneemt.',
          },
          {
            title: '3. Waarvoor gebruiken wij je gegevens?',
            text: 'De anonieme statistieken gebruiken wij uitsluitend om de gebruikservaring van onze site te verbeteren. Wij verkopen nooit gegevens aan derden.',
          },
          {
            title: '4. Cookies',
            text: 'vpnr.nl gebruikt functionele cookies (noodzakelijk voor de werking van de site) en analytische cookies (Google Analytics met geanonimiseerd IP). Affiliate links kunnen cookies plaatsen bij de betreffende VPN-provider.',
          },
          {
            title: '5. Jouw rechten (AVG)',
            text: 'Je hebt het recht op inzage, correctie en verwijdering van je gegevens. Stuur een verzoek via onze contactpagina. Wij reageren binnen 30 dagen.',
          },
          {
            title: '6. Links naar derden',
            text: 'Onze site bevat links naar websites van VPN-providers. Wij zijn niet verantwoordelijk voor het privacybeleid van deze partijen. Lees hun beleid voor meer informatie.',
          },
          {
            title: '7. Wijzigingen',
            text: 'Wij behouden ons het recht voor dit privacybeleid te wijzigen. De meest recente versie is altijd beschikbaar op deze pagina.',
          },
        ].map(({ title, text }) => (
          <section key={title}>
            <h2 className="text-lg font-bold text-gray-900 mb-2">{title}</h2>
            <p>{text}</p>
          </section>
        ))}
        <div className="pt-4 border-t border-gray-100">
          <Link href="/over-ons" className="text-blue-600 hover:underline text-sm">← Terug naar Over ons</Link>
        </div>
      </div>
    </div>
  )
}
