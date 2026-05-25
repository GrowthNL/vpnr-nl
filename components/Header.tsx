import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#060d1f]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Logo size={28} />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/60">
          <Link href="/beste-vpn" className="hover:text-white transition-colors">Beste VPN</Link>
          <Link href="/vpn-reviews" className="hover:text-white transition-colors">Reviews</Link>
          <Link href="/vpn-vergelijken" className="hover:text-white transition-colors">Vergelijken</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
        </nav>
        <Link
          href="/beste-vpn"
          className="btn-shimmer text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
        >
          Vergelijk VPN&apos;s
        </Link>
      </div>
    </header>
  )
}
