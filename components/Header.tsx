import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-700 tracking-tight">
          vpnr<span className="text-gray-400">.nl</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/beste-vpn" className="hover:text-blue-700 transition-colors">Beste VPN</Link>
          <Link href="/vpn-reviews" className="hover:text-blue-700 transition-colors">Reviews</Link>
          <Link href="/vpn-vergelijken" className="hover:text-blue-700 transition-colors">Vergelijken</Link>
          <Link href="/blog" className="hover:text-blue-700 transition-colors">Blog</Link>
        </nav>
        <Link
          href="/beste-vpn"
          className="bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
        >
          Vergelijk VPN's
        </Link>
      </div>
    </header>
  )
}
