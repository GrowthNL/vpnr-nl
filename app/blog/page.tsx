import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'VPN Blog | Nieuws, Tips & Guides',
  description: 'Lees onze VPN-gidsen, nieuws en tips. Alles over online privacy, beveiliging en het omzeilen van geo-blokkades.',
}

const posts = [
  {
    slug: 'vpn-buitenland-gebruiken',
    title: 'VPN gebruiken in het buitenland: alles wat je moet weten',
    excerpt: 'Op vakantie of zakenreis? Zo gebruik je een VPN om veilig te internetten en je favoriete Nederlandse sites te bereiken vanuit het buitenland.',
    category: 'Gids',
    date: '15 mei 2026',
    readTime: '5 min',
  },
  {
    slug: 'netflix-vpn-werkt-niet',
    title: 'Netflix VPN werkt niet meer? Dit zijn de oplossingen',
    excerpt: 'Netflix heeft zijn VPN-detectie aangescherpt. Wij leggen uit waarom sommige VPN\'s niet meer werken en welke alternatieven je hebt.',
    category: 'Tips',
    date: '12 mei 2026',
    readTime: '4 min',
  },
  {
    slug: 'vpn-protocol-vergelijking',
    title: 'WireGuard vs OpenVPN vs IKEv2: welk protocol is het beste?',
    excerpt: 'Een overzicht van de meest gebruikte VPN-protocollen: wat zijn de verschillen in snelheid, veiligheid en compatibiliteit?',
    category: 'Uitleg',
    date: '8 mei 2026',
    readTime: '7 min',
  },
  {
    slug: 'vpn-ip-adres-verbergen',
    title: 'Hoe verberg je je IP-adres? De complete gids voor 2026',
    excerpt: 'Je IP-adres zegt veel over jou. Leer hoe je het verbergt met een VPN en waarom dit belangrijk is voor je privacy.',
    category: 'Privacy',
    date: '3 mei 2026',
    readTime: '6 min',
  },
  {
    slug: 'goedkoopste-vpn-deals',
    title: 'De goedkoopste VPN-deals van mei 2026',
    excerpt: 'Een overzicht van de beste VPN-aanbiedingen deze maand. Bespaar tot 85% met onze verzamelde deals.',
    category: 'Deals',
    date: '1 mei 2026',
    readTime: '3 min',
  },
]

const categoryColors: Record<string, string> = {
  Gids: 'bg-blue-100 text-blue-700',
  Tips: 'bg-green-100 text-green-700',
  Uitleg: 'bg-purple-100 text-purple-700',
  Privacy: 'bg-orange-100 text-orange-700',
  Deals: 'bg-red-100 text-red-700',
}

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-gray-900 mb-3">VPN Blog</h1>
        <p className="text-gray-500">Tips, nieuws en uitleg over VPN, privacy en online beveiliging.</p>
      </div>
      <div className="space-y-5">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex gap-5 bg-white card-main rounded-2xl p-6 hover:shadow-md transition-all group"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{post.date}</span>
                <span className="text-xs text-gray-400">· {post.readTime}</span>
              </div>
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-1">{post.title}</h2>
              <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
            </div>
            <svg className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
      <p className="text-center text-gray-400 text-sm mt-10">Meer artikelen volgen binnenkort.</p>
    </div>
  )
}
