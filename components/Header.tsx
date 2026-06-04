import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-18 flex items-center justify-between py-3">
        <Link href="/">
          <Logo size={44} />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/beste-vpn" className="hover:text-blue-700 transition-colors">Beste VPN</Link>
          <Link href="/vpn-reviews" className="hover:text-blue-700 transition-colors">Reviews</Link>
          <Link href="/vpn-vergelijken" className="hover:text-blue-700 transition-colors">Vergelijken</Link>
          <Link href="/blog" className="hover:text-blue-700 transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-blue-700 transition-colors">Contact</Link>
        </nav>
        <Link
          href="/beste-vpn"
          className="btn-shimmer text-white text-sm font-bold px-5 py-2.5 rounded-full hover:scale-105 transition-transform shadow-md shadow-blue-500/20"
        >
          Vergelijk VPN&apos;s
        </Link>
      </div>
    </header>
  )
}
