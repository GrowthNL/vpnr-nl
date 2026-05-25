import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { usecases, getUseCase } from '@/content/usecases'
import { getProvider } from '@/content/providers'
import VPNCard from '@/components/VPNCard'

export async function generateStaticParams() {
  return usecases.map((u) => ({ usecase: u.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ usecase: string }> }): Promise<Metadata> {
  const { usecase } = await params
  const u = getUseCase(usecase)
  if (!u) return {}
  return { title: u.metaTitle, description: u.metaDescription }
}

export default async function UseCasePage({ params }: { params: Promise<{ usecase: string }> }) {
  const { usecase } = await params
  const u = getUseCase(usecase)
  if (!u) notFound()

  const topProviders = u.topProviders.map((slug) => getProvider(slug)).filter(Boolean)

  return (
    <>
      {/* Hero */}
      <section className="hero-glow text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-blue-200 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/beste-vpn" className="hover:text-white">Beste VPN</Link>
            <span>/</span>
            <span>{u.title}</span>
          </nav>
          <div className="text-5xl mb-4">{u.icon}</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">{u.title}</h1>
          <p className="text-blue-100 text-lg max-w-2xl">{u.intro}</p>
        </div>
      </section>

      {/* Key feature */}
      <section className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <span className="text-green-500 font-bold">✓</span>
          <span>Waar op te letten: <strong className="text-gray-700">{u.keyFeature}</strong></span>
        </div>
      </section>

      {/* Top providers */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Top {topProviders.length} VPN voor {u.title.replace('Beste VPN ', '').replace('Goedkoopste VPN van 2026', 'goedkoop')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {topProviders.map((p, i) => p && (
              <VPNCard key={p.slug} provider={p} rank={i + 1} featured={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Content secties */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10">
            {u.sections.map(({ heading, text }) => (
              <div key={heading}>
                <h2 className="text-2xl font-black text-gray-900 mb-3">{heading}</h2>
                <p className="text-gray-500 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 bg-blue-50 rounded-2xl card-featured text-center">
            <h3 className="text-xl font-black text-gray-900 mb-2">Klaar om te beginnen?</h3>
            <p className="text-gray-500 text-sm mb-4">Probeer {topProviders[0]?.naam} risicovrij met de geld-terug-garantie.</p>
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
    </>
  )
}
