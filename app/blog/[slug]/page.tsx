import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts, getPost } from '@/content/posts'
import { getProvider } from '@/content/providers'
import ProviderLogo from '@/components/ProviderLogo'
import JsonLd from '@/components/JsonLd'
import FAQAccordion from '@/components/FAQAccordion'
import AuthorBio from '@/components/AuthorBio'
import {
  Lightbulb, AlertTriangle, Info, TrendingUp,
  Clock, Calendar, ChevronRight, Tag,
} from 'lucide-react'

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const ogImage = `https://vpnr.nl${post.image}`
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://vpnr.nl/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://vpnr.nl/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.dateISO,
      modifiedTime: post.updatedISO,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [ogImage],
    },
  }
}

const categoryPillColor: Record<string, string> = {
  Gids: 'bg-blue-500',
  Tips: 'bg-green-500',
  Uitleg: 'bg-purple-500',
  Privacy: 'bg-orange-500',
  Deals: 'bg-emerald-500',
}

const highlightConfig = {
  tip: {
    wrapper: 'bg-green-50 border-l-4 border-green-500 rounded-r-xl',
    icon: Lightbulb,
    iconClass: 'text-green-600',
    titleClass: 'text-green-800',
    textClass: 'text-green-700',
  },
  warning: {
    wrapper: 'bg-amber-50 border-l-4 border-amber-500 rounded-r-xl',
    icon: AlertTriangle,
    iconClass: 'text-amber-600',
    titleClass: 'text-amber-800',
    textClass: 'text-amber-700',
  },
  info: {
    wrapper: 'bg-blue-50 border-l-4 border-blue-500 rounded-r-xl',
    icon: Info,
    iconClass: 'text-blue-600',
    titleClass: 'text-blue-800',
    textClass: 'text-blue-700',
  },
  stat: {
    wrapper: 'bg-blue-900 rounded-2xl',
    icon: TrendingUp,
    iconClass: 'text-blue-300',
    titleClass: 'text-white',
    textClass: 'text-blue-200',
  },
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const sidebarProvider = getProvider(post.relatedProviders[0])
  const relatedPosts = posts.filter((p) => post.relatedSlugs.includes(p.slug)).slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.dateISO,
    dateModified: post.updatedISO,
    image: `https://vpnr.nl${post.image}`,
    author: { '@type': 'Organization', name: 'vpnr.nl', url: 'https://vpnr.nl' },
    publisher: {
      '@type': 'Organization',
      name: 'vpnr.nl',
      url: 'https://vpnr.nl',
      logo: { '@type': 'ImageObject', url: 'https://vpnr.nl/logos/nordvpn.svg' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://vpnr.nl/blog/${post.slug}` },
    keywords: post.tags.join(', '),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vpnr.nl' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://vpnr.nl/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://vpnr.nl/blog/${post.slug}` },
    ],
  }

  const faqSchema = post.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }
    : null

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* ── HERO ── */}
      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        {/* Featured image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
        {/* Breadcrumb (top-left) */}
        <nav className="absolute top-5 left-0 right-0 px-4 max-w-6xl mx-auto">
          <div className="flex items-center gap-1.5 text-xs text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/50 truncate max-w-48">{post.title}</span>
          </div>
        </nav>
        {/* Title overlay (bottom) */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-7 max-w-6xl mx-auto">
          <span className={`inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-3 ${categoryPillColor[post.category] ?? 'bg-gray-600'}`}>
            {post.category}
          </span>
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-3 max-w-3xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/70 text-xs">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime} leestijd
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              {post.author}
            </span>
          </div>
        </div>
      </div>

      {/* ── CONTENT + SIDEBAR ── */}
      <div className="max-w-6xl mx-auto px-4 py-12 lg:grid lg:grid-cols-3 lg:gap-12">

        {/* ── ARTICLE ── */}
        <article className="lg:col-span-2 min-w-0">

          {/* Intro paragraph */}
          <p className="text-gray-700 text-lg leading-relaxed mb-10 pb-8 border-b border-gray-100">
            {post.intro}
          </p>

          {/* Sections */}
          {post.sections.map((section, i) => {
            const hl = section.highlight
            const hlConf = hl ? highlightConfig[hl.type] : null
            const ctaProvider = section.cta ? getProvider(section.cta) : null

            return (
              <section key={i} className="mb-10">
                <h2
                  id={`s-${i}`}
                  className="text-2xl font-black text-gray-900 mb-4 scroll-mt-6"
                >
                  {section.heading}
                </h2>

                {/* Body paragraphs, content is developer-authored, safe to use dangerouslySetInnerHTML */}
                <div className="space-y-4 text-gray-600 leading-relaxed mb-5">
                  {section.body.map((para, j) => (
                    <p key={j} dangerouslySetInnerHTML={{ __html: para }} />
                  ))}
                </div>

                {/* Optional table */}
                {section.table && (
                  <div className="overflow-x-auto my-6 rounded-2xl card-main">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                          {section.table.headers.map((h, j) => (
                            <th key={j} className="text-left px-5 py-3.5 font-semibold text-gray-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, j) => (
                          <tr key={j} className={j % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            {row.map((cell, k) => (
                              <td key={k} className={`px-5 py-3 ${k === 0 ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Optional highlight box */}
                {hl && hlConf && (
                  <div className={`p-5 my-5 ${hlConf.wrapper}`}>
                    {hl.type === 'stat' ? (
                      <div className="text-center py-2">
                        <div className={`text-4xl font-black mb-2 ${hlConf.titleClass}`}>
                          {hl.title}
                        </div>
                        <div className={`text-sm leading-relaxed ${hlConf.textClass}`}>
                          {hl.text}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-3">
                        <hlConf.icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${hlConf.iconClass}`} />
                        <div>
                          {hl.title && (
                            <span className={`font-bold text-sm ${hlConf.titleClass}`}>
                              {hl.title}:{' '}
                            </span>
                          )}
                          <span className={`text-sm leading-relaxed ${hlConf.textClass}`}>
                            {hl.text}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Optional inline CTA */}
                {ctaProvider && (
                  <div className="my-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-5">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <ProviderLogo slug={ctaProvider.slug} naam={ctaProvider.naam} iconSize={44} />
                      <div className="flex-1 min-w-0">
                        <div className="font-black text-gray-900">{ctaProvider.naam}</div>
                        <div className="text-sm text-gray-500 mb-1">{ctaProvider.tagline}</div>
                        <div className="text-xs text-blue-600 font-medium">
                          Vanaf €{ctaProvider.prijzen.tweeJaar ?? ctaProvider.prijzen.jaarlijks}/mnd
                          {ctaProvider.prijzen.gratisPeriode && ` · ${ctaProvider.prijzen.gratisPeriode}`}
                        </div>
                      </div>
                      <a
                        href={ctaProvider.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="btn-shimmer text-white text-sm font-bold px-5 py-2.5 rounded-xl whitespace-nowrap flex-shrink-0 hover:scale-[1.03] transition-transform"
                      >
                        {ctaProvider.ctaTekst} →
                      </a>
                    </div>
                  </div>
                )}
              </section>
            )
          })}

          {/* ── FAQ ── */}
          {post.faqs.length > 0 && (
            <section id="faq" className="mt-12 scroll-mt-6">
              <h2 className="text-2xl font-black text-gray-900 mb-6">
                Veelgestelde vragen
              </h2>
              <FAQAccordion faqs={post.faqs} />
            </section>
          )}

          {/* ── AUTHOR BOX ── */}
          <AuthorBio author={post.author} updatedDate={post.date} />

          {/* ── TAGS ── */}
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* ── SIDEBAR ── */}
        <aside className="lg:col-span-1 mt-10 lg:mt-0">
          <div className="sticky top-6 space-y-5">

            {/* Table of contents */}
            <div className="bg-white card-main rounded-2xl p-5">
              <h3 className="font-black text-gray-900 text-sm mb-4 uppercase tracking-wide text-xs text-gray-500">
                Inhoudsopgave
              </h3>
              <ol className="space-y-2">
                {post.sections.map((section, i) => (
                  <li key={i}>
                    <a
                      href={`#s-${i}`}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-start gap-2 group"
                    >
                      <span className="text-blue-500 font-bold text-xs mt-0.5 flex-shrink-0 w-4">
                        {i + 1}.
                      </span>
                      <span className="leading-snug group-hover:underline">{section.heading}</span>
                    </a>
                  </li>
                ))}
                {post.faqs.length > 0 && (
                  <li>
                    <a
                      href="#faq"
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-start gap-2 group"
                    >
                      <span className="text-blue-500 font-bold text-xs mt-0.5 flex-shrink-0 w-4">?</span>
                      <span className="leading-snug group-hover:underline">Veelgestelde vragen</span>
                    </a>
                  </li>
                )}
              </ol>
            </div>

            {/* Provider recommendation */}
            {sidebarProvider && (
              <div className="card-featured rounded-2xl p-5 bg-white">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                  Onze aanbeveling
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <ProviderLogo slug={sidebarProvider.slug} naam={sidebarProvider.naam} iconSize={40} />
                  <div className="min-w-0">
                    <div className="font-black text-gray-900 text-sm">{sidebarProvider.naam}</div>
                    <div className="text-xs text-gray-500 leading-snug mt-0.5 line-clamp-2">
                      {sidebarProvider.tagline}
                    </div>
                  </div>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-black text-blue-600">{sidebarProvider.scores.overall}</span>
                  <span className="text-sm text-gray-400 font-normal">/10</span>
                </div>
                <div className="text-xs text-gray-500 mb-5">
                  Vanaf €{sidebarProvider.prijzen.tweeJaar ?? sidebarProvider.prijzen.jaarlijks}/mnd
                  {sidebarProvider.prijzen.gratisPeriode && (
                    <span className="block mt-0.5 text-green-600 font-medium">
                      ✓ {sidebarProvider.prijzen.gratisPeriode}
                    </span>
                  )}
                </div>
                <a
                  href={sidebarProvider.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="btn-shimmer block text-center text-white font-bold px-4 py-2.5 rounded-xl text-sm hover:scale-[1.02] transition-transform"
                >
                  {sidebarProvider.ctaTekst} →
                </a>
                <Link
                  href={`/vpn-reviews/${sidebarProvider.slug}`}
                  className="block text-center text-xs text-blue-500 hover:underline mt-2.5"
                >
                  Lees de volledige review →
                </Link>
              </div>
            )}

            {/* Compare link */}
            <Link
              href="/vpn-vergelijken"
              className="block bg-gray-50 border border-gray-200 rounded-2xl p-4 text-center hover:bg-blue-50 hover:border-blue-200 transition-colors group"
            >
              <div className="font-semibold text-gray-800 text-sm group-hover:text-blue-700 mb-1">
                Alle VPN&apos;s vergelijken
              </div>
              <div className="text-xs text-gray-500">
                Zie alle providers naast elkaar →
              </div>
            </Link>
          </div>
        </aside>
      </div>

      {/* ── RELATED POSTS ── */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-100 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-8">Meer lezen</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white card-main rounded-2xl overflow-hidden hover:shadow-lg transition-all"
                >
                  {/* Thumbnail */}
                  <div className="relative h-36 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={related.image}
                      alt={related.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className={`absolute bottom-3 left-3 text-white text-xs font-bold px-2.5 py-0.5 rounded-full ${categoryPillColor[related.category] ?? 'bg-gray-600'}`}>
                      {related.category}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>{related.date}</span>
                      <span>·</span>
                      <span>{related.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
