import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProvider, providers } from '@/content/providers'
import CTABox from '@/components/CTABox'
import ProviderLogo from '@/components/ProviderLogo'
import JsonLd from '@/components/JsonLd'
import AuthorBio from '@/components/AuthorBio'
import { Check, X, ChevronRight, Calendar } from 'lucide-react'

export async function generateStaticParams() {
  return providers.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const p = getProvider(slug)
  if (!p) return {}
  return {
    title: `${p.naam} Review 2026 | Getest op Snelheid, Privacy & Streaming`,
    description: `Lees onze uitgebreide ${p.naam} review 2026. Score: ${p.scores.overall}/10. Getest op snelheid, beveiliging en Netflix. Vanaf €${p.prijzen.tweeJaar ?? p.prijzen.jaarlijks}/maand. ${p.prijzen.gratisPeriode ?? ''}.`,
    alternates: { canonical: `https://vpnr.nl/vpn-reviews/${slug}` },
    openGraph: {
      title: `${p.naam} Review 2026 — Score ${p.scores.overall}/10 | vpnr.nl`,
      description: `Onze eerlijke ${p.naam} review: snelheid, beveiliging, streaming en prijs getest. Is ${p.naam} de beste VPN voor jou in 2026?`,
      url: `https://vpnr.nl/vpn-reviews/${slug}`,
      type: 'article',
    },
  }
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const p = getProvider(slug)
  if (!p) notFound()

  const otherProviders = providers.filter((x) => x.slug !== p.slug).slice(0, 3)

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: `${p.naam} Review 2026`,
    reviewBody: p.verdict,
    datePublished: p.lastUpdatedISO,
    dateModified: p.lastUpdatedISO,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: p.scores.overall,
      bestRating: 10,
      worstRating: 0,
    },
    author: {
      '@type': 'Organization',
      name: 'vpnr.nl',
      url: 'https://vpnr.nl',
    },
    publisher: { '@type': 'Organization', name: 'vpnr.nl', url: 'https://vpnr.nl' },
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: p.naam,
      applicationCategory: 'SecurityApplication',
      operatingSystem: 'Windows, macOS, iOS, Android, Linux',
      offers: {
        '@type': 'Offer',
        price: p.prijzen.tweeJaar ?? p.prijzen.jaarlijks,
        priceCurrency: 'EUR',
        url: `https://vpnr.nl/vpn-reviews/${p.slug}`,
      },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vpnr.nl' },
      { '@type': 'ListItem', position: 2, name: 'VPN Reviews', item: 'https://vpnr.nl/vpn-reviews' },
      { '@type': 'ListItem', position: 3, name: `${p.naam} Review`, item: `https://vpnr.nl/vpn-reviews/${p.slug}` },
    ],
  }

  const faqSchema = p.faqs && p.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: p.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }
    : null

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={reviewSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <Link href="/vpn-reviews" className="hover:text-blue-600">VPN Reviews</Link>
        <span>/</span>
        <span className="text-gray-700">{p.naam}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="mb-3">
              <ProviderLogo slug={p.slug} naam={p.naam} iconSize={48} />
            </div>
            <h1 className="text-4xl font-black text-gray-900 mb-2">{p.naam} Review 2026</h1>
            <p className="text-gray-500 text-lg">{p.tagline}</p>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>Bijgewerkt: <strong className="text-gray-600">{p.lastUpdated}</strong></span>
            </div>
          </div>
          <div className="text-center flex-shrink-0 bg-blue-50 rounded-2xl px-5 py-3">
            <div className="text-4xl font-black text-blue-600">{p.scores.overall}</div>
            <div className="text-xs text-gray-400 font-medium">/ 10</div>
          </div>
        </div>

        {/* Score breakdown */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          {[
            { label: 'Snelheid', score: p.scores.snelheid },
            { label: 'Beveiliging', score: p.scores.beveiliging },
            { label: 'Gebruiksgemak', score: p.scores.gebruiksgemak },
            { label: 'Prijs/kwaliteit', score: p.scores.prijsKwaliteit },
          ].map(({ label, score }) => (
            <div key={label} className="bg-white rounded-xl p-4 card-main text-center">
              <div className="text-2xl font-black text-gray-800">{score}</div>
              <div className="text-xs text-gray-400 mt-0.5">{label}</div>
              <div className="mt-2 bg-gray-100 rounded-full h-1.5">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-400 h-1.5 rounded-full"
                  style={{ width: `${score * 10}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verdict */}
      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5 mb-8">
        <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Ons verdict</div>
        <p className="text-gray-700 leading-relaxed">{p.verdict}</p>
      </div>

      <CTABox provider={p} />

      {/* Pros & Cons */}
      <div className="grid sm:grid-cols-2 gap-4 my-8">
        <div className="bg-green-50 rounded-2xl p-5">
          <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" strokeWidth={2.5} /> Voordelen
          </h3>
          <ul className="space-y-2">
            {p.voordelen.map((v) => (
              <li key={v} className="text-sm text-green-700 flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-green-400 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                {v}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 rounded-2xl p-5">
          <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
            <X className="w-4 h-4 text-red-400" strokeWidth={2.5} /> Nadelen
          </h3>
          <ul className="space-y-2">
            {p.nadelen.map((n) => (
              <li key={n} className="text-sm text-red-700 flex items-start gap-2">
                <X className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Prijzen */}
      <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">Prijzen & Abonnementen</h2>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: 'Per maand', price: p.prijzen.maandelijks, note: 'Geen contract' },
          { label: '1 jaar', price: p.prijzen.jaarlijks, note: 'Populairst' },
          ...(p.prijzen.tweeJaar ? [{ label: '2 jaar', price: p.prijzen.tweeJaar, note: 'Goedkoopst' }] : []),
        ].map(({ label, price, note }) => (
          <div key={label} className="bg-white card-main rounded-xl p-4 text-center">
            <div className="text-xs text-gray-400 mb-1">{label}</div>
            <div className="text-2xl font-black text-gray-900">€{price}</div>
            <div className="text-xs text-gray-400">/maand</div>
            <div className="text-xs text-blue-500 font-medium mt-1">{note}</div>
          </div>
        ))}
      </div>
      {p.prijzen.gratisPeriode && (
        <p className="text-sm text-gray-500 mb-8 flex items-center gap-2">
          <Check className="w-4 h-4 text-green-500 flex-shrink-0" strokeWidth={2.5} />
          {p.prijzen.gratisPeriode}
        </p>
      )}

      {/* Features tabel */}
      <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">Features</h2>
      <div className="bg-white card-main rounded-2xl overflow-hidden mb-8">
        <table className="w-full text-sm">
          <tbody>
            {[
              { label: 'Geen-logs beleid', bool: true, ok: p.features.noLogs },
              { label: 'Kill switch', bool: true, ok: p.features.killSwitch },
              { label: 'Split tunneling', bool: true, ok: p.features.splitTunneling },
              {
                label: 'Aantal apparaten',
                text: p.features.aantalApparaten === 'onbeperkt' ? '∞ Onbeperkt' : `${p.features.aantalApparaten} tegelijk`,
              },
              { label: 'Servers', text: `${p.features.aantalServers.toLocaleString('nl')}+` },
              { label: 'Landen', text: `${p.features.aantalLanden} landen` },
              { label: 'Werkt met Netflix', bool: true, ok: p.features.werktMetNetflix },
              { label: 'P2P / Torrenten', bool: true, ok: p.features.werktMetTorrenten },
              { label: 'Protocollen', text: p.features.protocols.join(', ') },
              { label: 'Hoofdkantoor', text: p.features.hoofdkantoor },
              { label: 'Opgericht', text: String(p.features.opgericht) },
            ].map(({ label, bool, ok, text }, i) => (
              <tr key={label} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-5 py-3 text-gray-500 font-medium w-1/2">{label}</td>
                <td className="px-5 py-3">
                  {bool ? (
                    <span className={`flex items-center gap-1.5 font-semibold ${ok ? 'text-green-600' : 'text-red-500'}`}>
                      {ok ? <Check className="w-4 h-4" strokeWidth={2.5} /> : <X className="w-4 h-4" strokeWidth={2.5} />}
                      {ok ? 'Ja' : 'Nee'}
                    </span>
                  ) : (
                    <span className="text-gray-700 font-medium">{text}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Content secties */}
      {p.sections && p.sections.length > 0 && (
        <div className="space-y-10 my-10">
          {p.sections.map(({ heading, body }) => (
            <div key={heading}>
              <h2 className="text-2xl font-black text-gray-900 mb-4">{heading}</h2>
              {body.map((para, i) => (
                <p
                  key={i}
                  className="text-gray-600 leading-relaxed mb-3"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          ))}
        </div>
      )}

      <CTABox provider={p} />

      {/* FAQ */}
      {p.faqs && p.faqs.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-black text-gray-900 mb-6">
            Veelgestelde vragen over {p.naam}
          </h2>
          <div className="space-y-3">
            {p.faqs.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-2xl border border-gray-100 group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-gray-900 text-sm">
                  {question}
                  <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0 rotate-90 group-open:rotate-[270deg] transition-transform duration-200" />
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                  {answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      )}

      {/* Author bio */}
      <AuthorBio updatedDate={p.lastUpdated} />

      {/* Alternatieven */}
      <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">
        Alternatieven voor {p.naam}
      </h2>
      <div className="space-y-3">
        {otherProviders.map((alt) => (
          <Link
            key={alt.slug}
            href={`/vpn-reviews/${alt.slug}`}
            className="flex items-center justify-between bg-white card-main rounded-xl p-4 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3">
              <ProviderLogo slug={alt.slug} naam={alt.naam} iconSize={28} showName nameSize="text-sm" />
              <span className="text-sm text-gray-400">{alt.tagline}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-blue-600">{alt.scores.overall}/10</span>
              <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
