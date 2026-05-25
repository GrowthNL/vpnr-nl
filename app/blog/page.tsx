import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/content/posts'
import { Clock, Calendar, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VPN Blog 2026 | Tips, Gidsen & Nieuws over Privacy | vpnr.nl',
  description: 'Lees onze VPN-gidsen, tips en nieuws. Alles over online privacy, VPN-protocollen, streaming en digitale beveiliging, helder en eerlijk geschreven.',
  alternates: { canonical: 'https://vpnr.nl/blog' },
}

const categoryPillColor: Record<string, string> = {
  Gids: 'bg-blue-500',
  Tips: 'bg-green-500',
  Uitleg: 'bg-purple-500',
  Privacy: 'bg-orange-500',
  Deals: 'bg-emerald-500',
}

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-glow text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4">VPN Blog</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Tips, gidsen en uitleg over VPN, online privacy en digitale beveiliging, helder en eerlijk geschreven door experts.
          </p>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Uitgelicht artikel</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid md:grid-cols-2 bg-white card-main rounded-2xl overflow-hidden hover:shadow-xl transition-all"
          >
            {/* Image side */}
            <div className="relative h-60 md:h-full min-h-[240px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className={`absolute top-5 left-5 text-white text-xs font-bold px-3 py-1 rounded-full ${categoryPillColor[featured.category] ?? 'bg-gray-600'}`}>
                {featured.category}
              </span>
            </div>
            {/* Content side */}
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4 group-hover:text-blue-700 transition-colors leading-snug">
                {featured.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime} leestijd
                </span>
              </div>
              <span className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all">
                Lees het volledige artikel
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── ALL POSTS GRID ── */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Alle artikelen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white card-main rounded-2xl overflow-hidden hover:shadow-lg transition-all flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className={`absolute bottom-3 left-3 text-white text-xs font-bold px-2.5 py-0.5 rounded-full ${categoryPillColor[post.category] ?? 'bg-gray-600'}`}>
                    {post.category}
                  </span>
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 leading-snug mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">
            Welke VPN past bij jou?
          </h2>
          <p className="text-gray-500 mb-6">
            Vergelijk alle VPN-providers naast elkaar op prijs, snelheid en features. Vind de beste keuze voor jouw situatie in 2026.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/vpn-vergelijken"
              className="btn-shimmer text-white font-bold px-6 py-3 rounded-xl"
            >
              VPN&apos;s vergelijken →
            </Link>
            <Link
              href="/beste-vpn"
              className="bg-gray-100 text-gray-700 hover:bg-gray-200 font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Beste VPN 2026
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
