import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { authors, getAuthor } from '@/content/authors'
import { posts } from '@/content/posts'
import JsonLd from '@/components/JsonLd'
import { MapPin, CheckCircle, ChevronRight, Clock, Calendar } from 'lucide-react'

export async function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const author = getAuthor(slug)
  if (!author) return {}
  return {
    title: `${author.name}: ${author.title} | vpnr.nl`,
    description: author.shortBio,
    alternates: { canonical: `https://vpnr.nl/auteur/${author.slug}` },
  }
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const author = getAuthor(slug)
  if (!author) notFound()

  const authorPosts = posts.filter((p) => p.author === author.name)

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.title,
    description: author.shortBio,
    url: `https://vpnr.nl/auteur/${author.slug}`,
    worksFor: {
      '@type': 'Organization',
      name: 'vpnr.nl',
      url: 'https://vpnr.nl',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Amsterdam',
      addressCountry: 'NL',
    },
    knowsAbout: author.expertise,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vpnr.nl' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://vpnr.nl/blog' },
      { '@type': 'ListItem', position: 3, name: author.name, item: `https://vpnr.nl/auteur/${author.slug}` },
    ],
  }

  const categoryPillColor: Record<string, string> = {
    Gids: 'bg-blue-500',
    Tips: 'bg-green-500',
    Uitleg: 'bg-purple-500',
    Privacy: 'bg-orange-500',
    Deals: 'bg-emerald-500',
    Vergelijking: 'bg-rose-500',
  }

  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── HERO ── */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <nav className="flex items-center gap-1.5 text-xs text-white/60 mb-10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/40">{author.name}</span>
          </nav>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-7">
            <div className="w-24 h-24 rounded-2xl border-4 border-white/20 flex-shrink-0 shadow-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={author.image}
                alt={author.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black mb-1">{author.name}</h1>
              <p className="text-blue-300 font-medium text-lg mb-3">{author.title}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {author.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-300 font-medium">Onafhankelijke redacteur</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-4xl mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Main bio */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-black text-gray-900 mb-6">Over {author.name}</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {author.fullBio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Articles */}
            {authorPosts.length > 0 && (
              <div className="mt-14">
                <h2 className="text-xl font-black text-gray-900 mb-6">
                  Artikelen van {author.name}
                  <span className="ml-2 text-sm font-normal text-gray-400">({authorPosts.length})</span>
                </h2>
                <div className="space-y-4">
                  {authorPosts.slice().reverse().map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex gap-4 bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-md hover:border-blue-100 transition-all"
                    >
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.image}
                          alt={post.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={`inline-block text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-1.5 ${categoryPillColor[post.category] ?? 'bg-gray-500'}`}>
                          {post.category}
                        </span>
                        <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1.5 group-hover:text-blue-700 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar: expertise */}
          <aside className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 sticky top-6">
              <h3 className="font-black text-gray-900 text-sm uppercase tracking-widest text-xs mb-5">
                Expertisegebieden
              </h3>
              <ul className="space-y-2.5">
                {author.expertise.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-black text-gray-900 text-xs uppercase tracking-widest mb-4">
                  Werkwijze
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Elke VPN wordt getest op snelheid (NL + EU servers), DNS-lekken,
                  no-log-beleid, gebruiksgemak per platform en prijs-kwaliteitsverhouding.
                  Geen betaalde reviews, geen gesponsorde content.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  href="/over-ons"
                  className="text-xs text-blue-500 hover:underline font-medium"
                >
                  Over onze redactie →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
