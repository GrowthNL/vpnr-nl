import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { usecases, getUseCase } from '@/content/usecases'
import { getProvider } from '@/content/providers'
import VPNCard from '@/components/VPNCard'
import JsonLd from '@/components/JsonLd'
import { Check, Lightbulb, ChevronRight } from 'lucide-react'

export async function generateStaticParams() {
  return usecases.map((u) => ({ usecase: u.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ usecase: string }>
}): Promise<Metadata> {
  const { usecase } = await params
  const u = getUseCase(usecase)
  if (!u) return {}
  return {
    title: u.metaTitle,
    description: u.metaDescription,
    alternates: { canonical: u.canonical },
    openGraph: {
      title: u.metaTitle,
      description: u.metaDescription,
      url: u.canonical,
      type: 'website',
    },
  }
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ usecase: string }>
}) {
  const { usecase } = await params
  const u = getUseCase(usecase)
  if (!u) notFound()

  const topProviders = u.topProviders.map((slug) => getProvider(slug)).filter(Boolean)
  const relatedUsecases = usecases.filter((x) => u.relatedSlugs.includes(x.slug))

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vpnr.nl' },
      { '@type': 'ListItem', position: 2, name: 'Beste VPN', item: 'https://vpnr.nl/beste-vpn' },
      { '@type': 'ListItem', position: 3, name: u.title, item: u.canonical },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: u.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: u.metaTitle,
    description: u.metaDescription,
    url: u.canonical,
    publisher: { '@type': 'Organization', name: 'vpnr.nl', url: 'https://vpnr.nl' },
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={webPageSchema} />

      {/* Hero */}
      <section className="hero-glow text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-blue-200 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/beste-vpn" className="hover:text-white transition-colors">Beste VPN</Link>
            <span>/</span>
            <span className="text-white">{u.title}</span>
          </nav>
          <div className="text-5xl mb-4">{u.icon}</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">{u.title}</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">{u.intro}</p>
        </div>
      </section>

      {/* Key feature bar */}
      <section className="bg-white border-b border-gray-100 py-3 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Check className="w-4 h-4 text-green-500 flex-shrink-0" strokeWidth={2.5} />
          <span>
            Waar op te letten:{' '}
            <strong className="text-gray-700">{u.keyFeature}</strong>
          </span>
        </div>
      </section>

      {/* Top providers */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2">
            Top {topProviders.length} VPN voor{' '}
            {u.title
              .replace('Beste VPN ', '')
              .replace('Beste ', '')
              .replace('Goedkoopste VPN van 2026', 'goedkoop')}
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Gerangschikt op basis van onze tests. Klik voor de volledige review.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {topProviders.map(
              (p, i) =>
                p && <VPNCard key={p.slug} provider={p} rank={i + 1} featured={i === 0} />,
            )}
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-6">
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">
              Ons verdict
            </div>
            <p className="text-gray-700 leading-relaxed">{u.verdict}</p>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-4 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">
          {u.sections.map(({ heading, body }) => (
            <div key={heading}>
              <h2 className="text-2xl font-black text-gray-900 mb-3">{heading}</h2>
              {body.map((para, i) => (
                <p
                  key={i}
                  className="text-gray-500 leading-relaxed mb-3"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Quick tips */}
      <section className="py-10 px-4 bg-amber-50 border-y border-amber-100">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <h2 className="text-lg font-black text-gray-900">Snelle tips</h2>
          </div>
          <ul className="space-y-2.5">
            {u.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                <Check
                  className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Veelgestelde vragen</h2>
          <p className="text-gray-500 text-sm mb-8">
            Directe antwoorden op de meest gestelde vragen over {u.title.toLowerCase()}.
          </p>
          <div className="space-y-3">
            {u.faqs.map(({ question, answer }, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 group">
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
      </section>

      {/* CTA */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="p-6 bg-blue-50 rounded-2xl card-featured text-center">
            <h3 className="text-xl font-black text-gray-900 mb-2">Klaar om te beginnen?</h3>
            <p className="text-gray-500 text-sm mb-5">
              Probeer {topProviders[0]?.naam} risicovrij met de geld-terug-garantie.
            </p>
            {topProviders[0] && (
              <a
                href={topProviders[0].affiliateLink}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-shimmer inline-block text-white font-bold px-8 py-3.5 rounded-xl shadow-md shadow-blue-500/20"
              >
                {topProviders[0].ctaTekst} →
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Related use cases */}
      {relatedUsecases.length > 0 && (
        <section className="py-12 px-4 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-black text-gray-900 mb-5">Bekijk ook</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {relatedUsecases.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/beste-vpn/${rel.slug}`}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all group"
                >
                  <span className="text-2xl">{rel.icon}</span>
                  <span className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors text-sm flex-1">
                    {rel.title}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
