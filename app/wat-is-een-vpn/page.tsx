import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ProviderLogo from '@/components/ProviderLogo'
import { providers } from '@/content/providers'
import {
  ShieldCheck, Wifi, Globe, Download, Tag, Home,
  Zap, Activity, TrendingDown, Check, X, ChevronRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wat is een VPN? Complete Uitleg 2026 | vpnr.nl',
  description:
    'Wat is een VPN en hoe werkt het precies? Ontdek wat een VPN doet, waarom je het nodig hebt, welke protocollen er zijn en hoe je de beste VPN kiest. Complete gids voor Nederland.',
  alternates: { canonical: 'https://vpnr.nl/wat-is-een-vpn' },
  openGraph: {
    title: 'Wat is een VPN? Complete Uitleg 2026',
    description:
      'Alles over VPN: hoe het werkt, wat het kost, of het legaal is in Nederland en welke VPN het best is. Onafhankelijke uitleg van vpnr.nl.',
    url: 'https://vpnr.nl/wat-is-een-vpn',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is een VPN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een VPN (Virtual Private Network) is een beveiligde verbinding die je internetverkeer versleutelt en je IP-adres verbergt. Je verbindt eerst met een VPN-server, waarna al je verkeer versleuteld het internet op gaat. Websites zien het IP-adres van de VPN-server, niet jouw echte IP.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe werkt een VPN precies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een VPN werkt via een versleutelde tunnel tussen jouw apparaat en een VPN-server. Wanneer je verbinding maakt, worden al je datapakketjes eerst versleuteld op je apparaat, dan verstuurd naar de VPN-server, ontsleuteld door de VPN-server, en dan pas doorgestuurd naar de website. Teruggaande data volgt dezelfde weg in omgekeerde volgorde.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een VPN legaal in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, VPN gebruik is volledig legaal in Nederland. Er is geen wet die het gebruik van een VPN verbiedt. Illegale activiteiten zoals het downloaden van auteursrechtelijk beschermd materiaal blijven echter verboden, ook met een VPN.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een VPN gemiddeld?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een goede betaalde VPN kost gemiddeld €2,49–€5 per maand bij een abonnement van 1–2 jaar. Maandabonnementen zijn duurder (€10–€13/maand). Surfshark biedt de beste prijs-kwaliteitverhouding vanaf €2,49/maand. NordVPN kost €3,39/maand bij een 2-jaarsabonnement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een gratis en betaalde VPN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gratis VPN-diensten hebben grote nadelen: ze verdienen geld door jouw browsedata te verkopen aan adverteerders, hebben trage servers, beperkte data (vaak 500MB–10GB/maand) en bieden geen goede klantenservice. Betaalde VPN-diensten hanteren een no-logs beleid, bieden snelle servers wereldwijd, onbeperkte data en werken met Netflix.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke VPN is het beste in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NordVPN is de best geteste VPN van 2026: snelste verbindingen, sterkste beveiliging (RAM-only servers, dubbele VPN) en werkt betrouwbaar met Netflix. Surfshark is de beste budgetoptie met onbeperkte apparaten. ExpressVPN is de snelste maar ook duurste keuze.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vertraagt een VPN je internetverbinding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een VPN vertraagt je verbinding altijd iets doordat data extra versleuteld en via een externe server gestuurd wordt. Bij een goede VPN zoals NordVPN of Surfshark is dit verlies minimaal: gemiddeld 5–15% snelheidsverlies. Op een snelle glasvezelverbinding merk je dit nauwelijks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Op hoeveel apparaten kun je een VPN gebruiken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dit verschilt per provider. NordVPN staat 10 gelijktijdige verbindingen toe. Surfshark biedt onbeperkte apparaten. ExpressVPN staat 8 apparaten tegelijk toe. De meeste providers ondersteunen Windows, macOS, iOS, Android en Linux, én router-installatie voor je hele thuisnetwerk.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wat is een VPN? Complete Uitleg 2026',
  description:
    'Alles over VPN: hoe het werkt, wat het kost, of het legaal is en welke VPN het best is voor Nederland.',
  author: { '@type': 'Organization', name: 'vpnr.nl', url: 'https://vpnr.nl' },
  publisher: {
    '@type': 'Organization',
    name: 'vpnr.nl',
    url: 'https://vpnr.nl',
    logo: { '@type': 'ImageObject', url: 'https://vpnr.nl/og-image.png' },
  },
  dateModified: '2026-05-01',
  inLanguage: 'nl-NL',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://vpnr.nl/wat-is-een-vpn' },
}

const toc = [
  { id: 'wat-is-vpn', label: 'Wat is een VPN?' },
  { id: 'hoe-werkt-vpn', label: 'Hoe werkt een VPN?' },
  { id: 'waarom-vpn', label: 'Waarom heb je een VPN nodig?' },
  { id: 'legaal', label: 'Is een VPN legaal?' },
  { id: 'protocollen', label: 'VPN-protocollen uitgelegd' },
  { id: 'gratis-vs-betaald', label: 'Gratis vs betaalde VPN' },
  { id: 'kiezen', label: 'Welke VPN kiezen?' },
  { id: 'instellen', label: 'VPN instellen, stappenplan' },
  { id: 'faq', label: 'Veelgestelde vragen' },
]

export default function WatIsEenVPNPage() {
  const top3 = providers.slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <JsonLd data={faqSchema} />
      <JsonLd data={articleSchema} />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <span className="text-gray-700">Wat is een VPN?</span>
      </nav>

      <div className="lg:flex gap-12">
        {/* Sidebar, Table of Contents */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <div className="sticky top-24 card-main bg-white rounded-2xl p-5">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Inhoud</p>
            <nav className="space-y-1">
              {toc.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="block text-sm text-gray-500 hover:text-blue-600 py-0.5 transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <article className="flex-1 min-w-0">
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Bijgewerkt mei 2026 · 8 min lezen
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
              Wat is een VPN?<br />Complete uitleg 2026
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Een VPN (Virtual Private Network) versleutelt je internetverbinding en verbergt je IP-adres. In deze gids leg je stap voor stap uit hoe het werkt, waarom je het nodig hebt en welke VPN het beste is voor Nederland.
            </p>
          </header>

          {/* Snel antwoord, GEO-friendly direct answer box */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">Kort antwoord</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              Een VPN is een beveiligde tunnel tussen jouw apparaat en het internet. Het verbergt je echte IP-adres, versleutelt al je data en beschermt je privacy, thuis, op openbare wifi en bij geo-geblokkeerde content. Een betrouwbare VPN kost €2–5 per maand.
            </p>
          </div>

          {/* Section 1 */}
          <section id="wat-is-vpn" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Wat is een VPN?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              VPN staat voor <strong>Virtual Private Network</strong>. Het is een technologie die een beveiligde, versleutelde verbinding (een "tunnel") maakt tussen jouw apparaat en een VPN-server, voordat data het publieke internet op gaat.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Normaal verbindt jouw laptop, telefoon of tablet direct met websites en diensten. Elke site ziet dan jouw echte IP-adres, een uniek nummer dat gekoppeld is aan jouw locatie en internetprovider. Je provider zelf ziet ook precies welke sites je bezoekt en wanneer.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Met een VPN gaat al je verkeer via een tussenstop: de VPN-server. Websites zien het IP van die server, niet het jouwe. Je provider ziet wel dat je verbonden bent met een VPN-server, maar niet welke sites je daarna bezoekt.
            </p>
          </section>

          {/* Section 2 */}
          <section id="hoe-werkt-vpn" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Hoe werkt een VPN precies?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Wanneer je een VPN-app opent en op "Verbinden" klikt, gebeuren er achter de schermen vier dingen tegelijk:
            </p>

            <ol className="space-y-4 mb-6">
              {[
                { nr: '1', title: 'Versleuteling', desc: 'Jouw apparaat versleutelt alle uitgaande data met AES-256, dezelfde standaard die banken en overheden gebruiken.' },
                { nr: '2', title: 'Tunneling', desc: 'De versleutelde data wordt via een veilige tunnel naar de VPN-server gestuurd. Niemand onderweg kan de inhoud lezen.' },
                { nr: '3', title: 'IP-masking', desc: 'De VPN-server stuurt de data door naar de bestemming (bijv. een website). Die site ziet het IP-adres van de server, niet het jouwe.' },
                { nr: '4', title: 'Antwoord terug', desc: 'De website stuurt het antwoord naar de VPN-server. Die versleutelt het opnieuw en stuurt het terug naar jouw apparaat.' },
              ].map(({ nr, title, desc }) => (
                <li key={nr} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white text-sm font-black rounded-full flex items-center justify-center">{nr}</span>
                  <div>
                    <span className="font-bold text-gray-900">{title}:</span>{' '}
                    <span className="text-gray-600">{desc}</span>
                  </div>
                </li>
              ))}
            </ol>

            <div className="bg-gray-50 rounded-2xl p-5 font-mono text-sm">
              <div className="text-gray-600">
                <span className="text-blue-600 font-bold">Zonder VPN:</span> Jouw apparaat → Internet → Website<br />
                <span className="text-xs text-gray-400">↳ Je IP-adres is zichtbaar voor websites, je ISP en iedereen op hetzelfde netwerk</span>
              </div>
              <div className="mt-3 text-gray-600">
                <span className="text-green-600 font-bold">Met VPN:</span> Jouw apparaat → 🔒 Versleutelde tunnel → VPN-server → Internet → Website<br />
                <span className="text-xs text-gray-400">↳ Websites zien alleen het IP van de VPN-server; je provider ziet alleen versleuteld verkeer</span>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="waarom-vpn" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Waarom heb je een VPN nodig?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Er zijn vijf belangrijke redenen waarom miljoenen mensen dagelijks een VPN gebruiken:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  Icon: ShieldCheck,
                  title: 'Online privacy',
                  desc: 'Je internetprovider (KPN, Ziggo, T-Mobile) registreert al je surfgedrag. Met een VPN kunnen ze alleen zien dat je verbonden bent met een VPN, niet welke sites je bezoekt.',
                },
                {
                  Icon: Wifi,
                  title: 'Veiligheid op openbare wifi',
                  desc: 'Op het wifi-netwerk van een café, hotel of luchthaven kunnen kwaadwillenden je onversleuteld verkeer onderscheppen. Een VPN maakt dat onmogelijk.',
                },
                {
                  Icon: Globe,
                  title: 'Geo-geblokkeerde content',
                  desc: 'Bepaalde Netflix-catalogi, BBC iPlayer en andere diensten zijn alleen beschikbaar in specifieke landen. Een VPN laat je een server kiezen in dat land.',
                },
                {
                  Icon: Download,
                  title: 'Anoniem torrenten',
                  desc: 'Bij torrenten is je IP-adres zichtbaar voor alle deelnemers in de swarm. Een VPN maskeert je IP en beschermt je identiteit.',
                },
                {
                  Icon: Tag,
                  title: 'Betere prijzen',
                  desc: 'Vluchten, hotels en software zijn soms goedkoper als je ze via een VPN uit een ander land boekt. Prijsdiscriminatie op basis van locatie is wijdverbreid.',
                },
                {
                  Icon: Home,
                  title: 'Veilig thuiswerken',
                  desc: "Veel bedrijven vereisen een VPN-verbinding voor toegang tot interne systemen. Zakelijke VPN's werken op hetzelfde principe als consumentenVPN's.",
                },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="bg-white card-main rounded-xl p-5">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1.5">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section id="legaal" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Is een VPN legaal in Nederland?</h2>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-4">
              <p className="font-bold text-green-800 mb-1">Ja, VPN gebruik is volledig legaal in Nederland.</p>
              <p className="text-green-700 text-sm leading-relaxed">
                Er bestaat geen Nederlandse wet die het gebruik van een VPN verbiedt. Privacy-tools zijn een erkend recht. Overheids- en beveiligingsdiensten gebruiken zelf ook VPN-technologie.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Belangrijk: een VPN maakt illegale activiteiten niet legaal. Het downloaden van auteursrechtelijk beschermd materiaal, fraude of hacking blijft verboden, met of zonder VPN. De meeste betrouwbare VPN-aanbieders hanteren een strict no-logs beleid en bewaren geen gebruiksdata, maar kunnen bij ernstige misdrijven soms toch worden gedwongen te voldoen aan rechtelijke bevelen.
            </p>
          </section>

          {/* Section 5 */}
          <section id="protocollen" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-black text-gray-900 mb-4">VPN-protocollen uitgelegd</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Een VPN-protocol bepaalt hoe de versleutelde tunnel opgebouwd wordt. Elk protocol heeft andere eigenschappen op het gebied van snelheid, beveiliging en compatibiliteit.
            </p>

            <div className="bg-white card-main rounded-2xl overflow-hidden mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-5 py-3 text-left font-bold text-gray-700">Protocol</th>
                    <th className="px-5 py-3 text-left font-bold text-gray-700">Snelheid</th>
                    <th className="px-5 py-3 text-left font-bold text-gray-700">Beveiliging</th>
                    <th className="px-5 py-3 text-left font-bold text-gray-700">Gebruik</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'WireGuard', speedLabel: 'Zeer snel', speedClass: 'text-green-600', SpeedIcon: Zap, secLabel: 'Uitstekend', secClass: 'text-green-600', use: 'Beste keuze voor de meeste gebruikers' },
                    { name: 'OpenVPN', speedLabel: 'Goed', speedClass: 'text-amber-500', SpeedIcon: Activity, secLabel: 'Uitstekend', secClass: 'text-green-600', use: 'Bewezen betrouwbaar, router-support' },
                    { name: 'IKEv2/IPSec', speedLabel: 'Snel', speedClass: 'text-green-600', SpeedIcon: Zap, secLabel: 'Goed', secClass: 'text-blue-600', use: 'Sterk op mobiel bij wisselend netwerk' },
                    { name: 'L2TP/IPSec', speedLabel: 'Traag', speedClass: 'text-red-500', SpeedIcon: TrendingDown, secLabel: 'Matig', secClass: 'text-amber-500', use: 'Verouderd, vermijd indien mogelijk' },
                    { name: 'NordLynx', speedLabel: 'Snelst', speedClass: 'text-green-600', SpeedIcon: Zap, secLabel: 'Uitstekend', secClass: 'text-green-600', use: 'NordVPN-eigen, gebouwd op WireGuard' },
                    { name: 'Lightway', speedLabel: 'Zeer snel', speedClass: 'text-green-600', SpeedIcon: Zap, secLabel: 'Uitstekend', secClass: 'text-green-600', use: 'ExpressVPN-eigen protocol' },
                  ].map(({ name, speedLabel, speedClass, SpeedIcon, secLabel, secClass, use }, i) => (
                    <tr key={name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="px-5 py-3 font-bold text-gray-900">{name}</td>
                      <td className="px-5 py-3">
                        <span className={`flex items-center gap-1 font-medium text-xs ${speedClass}`}>
                          <SpeedIcon className="w-3.5 h-3.5" />
                          {speedLabel}
                        </span>
                      </td>
                      <td className="px-5 py-3">
                        <span className={`flex items-center gap-1 font-medium text-xs ${secClass}`}>
                          <ShieldCheck className="w-3.5 h-3.5" />
                          {secLabel}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-gray-500 text-xs">{use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-400">WireGuard en provider-eigen protocollen (NordLynx, Lightway) bieden de beste combinatie van snelheid en veiligheid in 2026.</p>
          </section>

          {/* Section 6 */}
          <section id="gratis-vs-betaald" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Gratis VPN vs betaalde VPN</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Er zijn honderden gratis VPN-apps beschikbaar. Maar <strong>gratis betekent niet kosteloos</strong>, de kosten worden betaald met jouw data. Hier is het echte verschil:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
                <h3 className="font-bold text-red-800 mb-3">Gratis VPN, de echte kosten</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  {[
                    'Verkoopt jouw browsedata aan adverteerders',
                    'Trage servers (overbelast door veel gebruikers)',
                    'Datalimiet: 500MB–10GB per maand',
                    'Werkt vaak niet met Netflix of streaming',
                    'Weinig of geen klantenservice',
                    'Mogelijk malware of adware ingebouwd',
                    'Geen of zwakke versleuteling',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
                <h3 className="font-bold text-green-800 mb-3">Betaalde VPN, €2–5/maand</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  {[
                    'Strict no-logs beleid (onafhankelijk geauditeerd)',
                    'Snelle servers in 60+ landen',
                    'Onbeperkte data',
                    'Werkt betrouwbaar met Netflix, Disney+, etc.',
                    '24/7 klantenservice via chat',
                    'Kill switch bij wegvallen verbinding',
                    'AES-256 versleuteling + WireGuard',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Onderzoek door Cybersecurity firma CSIRO toonde aan dat 38% van gratis VPN-apps malware bevatte en 84% gebruikersdata lekte.{' '}
              <Link href="/beste-vpn/gratis" className="text-blue-500 hover:underline">Bekijk onze gids over gratis VPN-alternatieven →</Link>
            </p>
          </section>

          {/* Section 7 */}
          <section id="kiezen" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Welke VPN moet ik kiezen?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              De beste VPN hangt af van je gebruik. Hieronder onze top 3 aanbevelingen voor de Nederlandse markt in 2026:
            </p>

            <div className="space-y-4 mb-6">
              {top3.map((p, i) => (
                <div key={p.slug} className={`bg-white rounded-2xl p-5 flex items-center gap-5 ${i === 0 ? 'card-featured' : 'card-main'}`}>
                  <div className="flex-shrink-0">
                    <div className="text-2xl font-black text-gray-100 mb-1">#{i + 1}</div>
                    <ProviderLogo slug={p.slug} naam={p.naam} iconSize={28} showName nameSize="text-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500">{p.tagline}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                        Score: {p.scores.overall}/10
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                        Vanaf €{p.prijzen.tweeJaar ?? p.prijzen.jaarlijks}/maand
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-shrink-0">
                    <a
                      href={p.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className={`text-sm font-bold px-4 py-2 rounded-xl text-center transition-all hover:scale-[1.02] ${
                        i === 0 ? 'btn-shimmer text-white' : 'bg-green-600 text-white hover:bg-green-700'
                      }`}
                    >
                      Probeer {p.naam}
                    </a>
                    <Link
                      href={`/vpn-reviews/${p.slug}`}
                      className="text-sm text-center text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      Lees review →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-2xl p-5">
              <p className="font-semibold text-gray-900 mb-1">Keuze op basis van gebruik:</p>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li><strong>Beste al-in-één:</strong> NordVPN, snelst, veiligst, werkt overal</li>
                <li><strong>Beste budget:</strong> Surfshark, onbeperkte apparaten, laagste prijs</li>
                <li><strong>Beste voor streaming:</strong> ExpressVPN, meest servers, snelst voor Netflix</li>
                <li><strong>Gezinnen / meerdere apparaten:</strong> Surfshark, onbeperkte verbindingen</li>
              </ul>
            </div>

            <div className="mt-4 text-center">
              <Link href="/vpn-vergelijken" className="btn-shimmer inline-block text-white font-bold px-8 py-3.5 rounded-xl shadow-md shadow-blue-500/20">
                Vergelijk alle VPN&apos;s naast elkaar →
              </Link>
            </div>
          </section>

          {/* Section 8 */}
          <section id="instellen" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-black text-gray-900 mb-4">VPN instellen, stappenplan</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Een VPN instellen duurt minder dan 5 minuten. Hier is het stap-voor-stap proces:
            </p>

            <ol className="space-y-5">
              {[
                {
                  nr: '1',
                  title: 'Kies een VPN-provider',
                  desc: 'Kies op basis van je gebruik. Voor de meeste Nederlanders is NordVPN of Surfshark de beste keuze. Beide bieden 30 dagen geld-terug-garantie.',
                },
                {
                  nr: '2',
                  title: 'Maak een account aan',
                  desc: 'Ga naar de website van de provider, kies een abonnement (2-jaar is het voordeligst) en maak een account aan. Betalen kan met creditcard, iDEAL of PayPal.',
                },
                {
                  nr: '3',
                  title: 'Download de app',
                  desc: 'Download de officiële app voor jouw apparaat: Windows, macOS, iOS, Android of Linux. Alle grote providers hebben apps voor alle platforms.',
                },
                {
                  nr: '4',
                  title: 'Log in en verbind',
                  desc: 'Open de app, log in met je account, en klik op "Verbinden". De app kiest automatisch de snelste server in de buurt, of je kiest zelf een land.',
                },
                {
                  nr: '5',
                  title: 'Klaar',
                  desc: 'Je VPN is actief. Alle apps en browsers op je apparaat zijn nu beveiligd. Controleer je IP-adres op whatismyip.com om te bevestigen dat de VPN werkt.',
                },
              ].map(({ nr, title, desc }) => (
                <li key={nr} className="flex gap-4">
                  <span className="flex-shrink-0 w-9 h-9 bg-blue-600 text-white text-sm font-black rounded-full flex items-center justify-center">
                    {nr}
                  </span>
                  <div className="pt-1">
                    <span className="font-bold text-gray-900">{title}</span>
                    <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Section 9, FAQ */}
          <section id="faq" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Veelgestelde vragen over VPN</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Vertraagt een VPN mijn internet?',
                  a: 'Een VPN vertraagt je verbinding altijd iets (5–15%) doordat data extra versleuteld en via een server gestuurd wordt. Bij NordVPN of Surfshark is dit verlies minimaal en op een glasvezelverbinding nauwelijks merkbaar.',
                },
                {
                  q: 'Kan mijn provider zien dat ik een VPN gebruik?',
                  a: 'Ja, je provider kan zien dat je verbonden bent met een VPN-server (via het IP-adres). Ze kunnen echter niet zien welke websites je bezoekt of wat je doet. Met obfuscation-servers (NordVPN heeft deze) is zelfs het VPN-gebruik verborgen.',
                },
                {
                  q: 'Werkt een VPN ook op mijn telefoon?',
                  a: 'Ja, alle grote VPN-providers (NordVPN, Surfshark, ExpressVPN) hebben apps voor zowel Android als iOS. De apps werken op dezelfde manier als op een computer.',
                },
                {
                  q: 'Kan ik een VPN gebruiken op meerdere apparaten?',
                  a: 'Dat hangt af van de provider. NordVPN staat 10 gelijktijdige verbindingen toe. Surfshark biedt onbeperkte apparaten. Je kunt ook een VPN instellen op je router, dan zijn alle apparaten thuis automatisch beveiligd.',
                },
                {
                  q: 'Is een VPN hetzelfde als een proxy?',
                  a: 'Nee. Een proxy verbergt alleen je IP-adres voor één specifieke app (bijv. een browser). Een VPN versleutelt al het verkeer van je gehele apparaat, inclusief alle apps tegelijk.',
                },
                {
                  q: 'Heeft een VPN invloed op gaming?',
                  a: 'Een VPN kan je ping verhogen, wat nadelig is voor competitief gaming. Sommige gamers gebruiken een VPN echter bewust om DDoS-aanvallen te vermijden of vroeger toegang te krijgen tot nieuwe games via een andere regio.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white card-main rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Interne links */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <p className="font-bold text-gray-900 mb-3">Verder lezen</p>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              {[
                { href: '/beste-vpn', label: 'Beste VPN Nederland 2026, Volledige gids' },
                { href: '/vpn-vergelijken', label: 'VPN vergelijken, Alle features op een rij' },
                { href: '/vpn-reviews', label: 'VPN Reviews, NordVPN, Surfshark, ExpressVPN' },
                { href: '/beste-vpn/voor-netflix', label: 'Beste VPN voor Netflix in 2026' },
                { href: '/beste-vpn/voor-torrenten', label: 'Beste VPN voor torrenten' },
                { href: '/beste-vpn/goedkoop', label: 'Goedkoopste VPN van 2026' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="text-blue-600 hover:underline py-1 flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" /> {label}
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
