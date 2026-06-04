import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { comparisons, getComparison } from '@/content/comparisons'
import { getProvider } from '@/content/providers'
import ProviderLogo from '@/components/ProviderLogo'
import JsonLd from '@/components/JsonLd'
import { Check, X, Minus, ChevronRight, Trophy } from 'lucide-react'

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const c = getComparison(slug)
  if (!c) return {}
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: c.canonical },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: c.canonical,
      type: 'website',
    },
  }
}

function WinnerBadge({ winner }: { winner: '1' | '2' | 'tie' | undefined }) {
  if (!winner) return null
  if (winner === 'tie') {
    return (
      <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-500 text-xs font-medium px-2 py-0.5 rounded-full">
        <Minus className="w-3 h-3" /> Gelijk
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
      <Check className="w-3 h-3" strokeWidth={2.5} /> Beter
    </span>
  )
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const c = getComparison(slug)
  if (!c) notFound()

  const p1 = getProvider(c.provider1)
  const p2 = getProvider(c.provider2)
  if (!p1 || !p2) notFound()

  const relatedComparisons = comparisons.filter((x) => c.relatedSlugs.includes(x.slug))

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vpnr.nl' },
      { '@type': 'ListItem', position: 2, name: 'VPN Vergelijken', item: 'https://vpnr.nl/vpn-vergelijken' },
      { '@type': 'ListItem', position: 3, name: c.title, item: c.canonical },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const winner = c.winner === c.provider1 ? p1 : p2

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="hero-glow text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-blue-200 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/vpn-vergelijken" className="hover:text-white transition-colors">VPN Vergelijken</Link>
            <span>/</span>
            <span className="text-white">{p1.naam} vs {p2.naam}</span>
          </nav>

          {/* Provider logos side by side */}
          <div className="flex items-center gap-6 mb-6">
            <div className="bg-white/10 rounded-2xl p-4 flex items-center justify-center">
              <ProviderLogo slug={p1.slug} naam={p1.naam} iconSize={48} />
            </div>
            <span className="text-blue-200 font-black text-2xl">VS</span>
            <div className="bg-white/10 rounded-2xl p-4 flex items-center justify-center">
              <ProviderLogo slug={p2.slug} naam={p2.naam} iconSize={48} />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-black mb-4">{c.title}</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">{c.intro}</p>
        </div>
      </section>

      {/* Quick verdict */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="w-5 h-5 text-blue-600" />
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                Onze winnaar: {winner.naam}
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">{c.verdict}</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <a
                href={p1.affiliateLink}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-shimmer text-white font-bold px-5 py-2.5 rounded-xl text-sm text-center hover:scale-[1.02] transition-transform"
              >
                {p1.ctaTekst} →
              </a>
              <a
                href={p2.affiliateLink}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm text-center transition-colors"
              >
                {p2.ctaTekst} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">
            {p1.naam} vs {p2.naam}: vergelijkingstabel
          </h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="text-left px-5 py-4 text-gray-400 text-xs font-semibold w-40">Kenmerk</th>
                  <th className="px-4 py-4 text-center min-w-[160px] bg-blue-50/60">
                    <div className="flex flex-col items-center gap-2">
                      <ProviderLogo slug={p1.slug} naam={p1.naam} iconSize={36} />
                      <span className="font-black text-gray-900 text-sm">{p1.naam}</span>
                      {c.winner === c.provider1 && (
                        <span className="inline-flex items-center gap-1 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                          <Trophy className="w-3 h-3" /> Winnaar
                        </span>
                      )}
                    </div>
                  </th>
                  <th className="px-4 py-4 text-center min-w-[160px]">
                    <div className="flex flex-col items-center gap-2">
                      <ProviderLogo slug={p2.slug} naam={p2.naam} iconSize={36} />
                      <span className="font-black text-gray-900 text-sm">{p2.naam}</span>
                      {c.winner === c.provider2 && (
                        <span className="inline-flex items-center gap-1 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                          <Trophy className="w-3 h-3" /> Winnaar
                        </span>
                      )}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.tableSections.map((section) => (
                  <>
                    <tr key={section.category}>
                      <td
                        colSpan={3}
                        className="px-5 py-2.5 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest border-t border-blue-100"
                      >
                        {section.category}
                      </td>
                    </tr>
                    {section.rows.map((row, ri) => (
                      <tr key={row.label} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                        <td className="px-5 py-3.5 text-gray-500 font-medium text-xs">{row.label}</td>
                        <td className="px-4 py-3.5 text-center bg-blue-50/20">
                          <div className="flex flex-col items-center gap-1">
                            <span className="font-semibold text-gray-800 text-xs">{row.p1}</span>
                            {row.winner === '1' && <WinnerBadge winner="1" />}
                            {row.winner === 'tie' && <WinnerBadge winner="tie" />}
                          </div>
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          <div className="flex flex-col items-center gap-1">
                            <span className="font-semibold text-gray-800 text-xs">{row.p2}</span>
                            {row.winner === '2' && <WinnerBadge winner="2" />}
                            {row.winner === 'tie' && <WinnerBadge winner="tie" />}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
                {/* CTA row */}
                <tr className="border-t-2 border-gray-100">
                  <td className="px-5 py-5 text-gray-400 text-xs font-medium">Jouw keuze</td>
                  <td className="px-4 py-5 text-center bg-blue-50/20">
                    <a
                      href={p1.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="btn-shimmer inline-block text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:scale-[1.02] transition-transform"
                    >
                      {p1.ctaTekst} →
                    </a>
                  </td>
                  <td className="px-4 py-5 text-center">
                    <a
                      href={p2.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="bg-green-600 hover:bg-green-700 inline-block text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
                    >
                      {p2.ctaTekst} →
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Voor- en nadelen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { provider: p1, key: c.provider1 },
              { provider: p2, key: c.provider2 },
            ].map(({ provider, key }) => (
              <div key={key} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <ProviderLogo slug={provider.slug} naam={provider.naam} iconSize={32} />
                  <span className="font-black text-gray-900">{provider.naam}</span>
                  {c.winner === key && (
                    <span className="ml-auto inline-flex items-center gap-1 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      <Trophy className="w-3 h-3" /> Winnaar
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <div className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">Voordelen</div>
                  <ul className="space-y-2">
                    {(c.pros[key] ?? []).map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">Nadelen</div>
                  <ul className="space-y-2">
                    {(c.cons[key] ?? []).map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 pt-4 border-t border-gray-200">
                  <a
                    href={provider.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={`block text-center font-bold py-2.5 px-4 rounded-xl text-sm transition-all hover:scale-[1.02] ${
                      c.winner === key
                        ? 'btn-shimmer text-white'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    {provider.ctaTekst} →
                  </a>
                  <Link
                    href={`/vpn-reviews/${provider.slug}`}
                    className="block text-center text-xs text-blue-500 hover:underline mt-2"
                  >
                    Lees de volledige review →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-4 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto space-y-10 py-8">
          {c.sections.map(({ heading, body }) => (
            <div key={heading}>
              <h2 className="text-2xl font-black text-gray-900 mb-3">{heading}</h2>
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
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Veelgestelde vragen</h2>
          <p className="text-gray-500 text-sm mb-8">
            Directe antwoorden op de meest gestelde vragen over {p1.naam} vs {p2.naam}.
          </p>
          <div className="space-y-3">
            {c.faqs.map(({ question, answer }, i) => (
              <details key={i} className="bg-gray-50 rounded-xl border border-gray-100 group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-gray-900 text-sm">
                  {question}
                  <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0 rotate-90 group-open:rotate-[270deg] transition-transform duration-200" />
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related comparisons */}
      {relatedComparisons.length > 0 && (
        <section className="py-12 px-4 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-black text-gray-900 mb-5">Meer vergelijkingen</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {relatedComparisons.map((rel) => {
                const rp1 = getProvider(rel.provider1)
                const rp2 = getProvider(rel.provider2)
                return (
                  <Link
                    key={rel.slug}
                    href={`/vpn-vergelijken/${rel.slug}`}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-center gap-1">
                      {rp1 && <ProviderLogo slug={rp1.slug} naam={rp1.naam} iconSize={24} />}
                      <span className="text-gray-400 text-xs font-bold">vs</span>
                      {rp2 && <ProviderLogo slug={rp2.slug} naam={rp2.naam} iconSize={24} />}
                    </div>
                    <span className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors text-sm flex-1">
                      {rel.title}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
