import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-white font-bold text-lg mb-3">
              vpnr<span className="text-gray-500">.nl</span>
            </div>
            <p className="text-sm leading-relaxed">
              Onafhankelijke VPN-vergelijking voor de Nederlandse markt.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Reviews</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/vpn-reviews/nordvpn" className="hover:text-white transition-colors">NordVPN</Link></li>
              <li><Link href="/vpn-reviews/surfshark" className="hover:text-white transition-colors">Surfshark</Link></li>
              <li><Link href="/vpn-reviews/expressvpn" className="hover:text-white transition-colors">ExpressVPN</Link></li>
              <li><Link href="/vpn-reviews/cyberghost" className="hover:text-white transition-colors">CyberGhost</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Beste VPN voor</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/beste-vpn/voor-netflix" className="hover:text-white transition-colors">Netflix</Link></li>
              <li><Link href="/beste-vpn/voor-streaming" className="hover:text-white transition-colors">Streaming</Link></li>
              <li><Link href="/beste-vpn/voor-torrenten" className="hover:text-white transition-colors">Torrenten</Link></li>
              <li><Link href="/beste-vpn/gratis" className="hover:text-white transition-colors">Gratis VPN</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Info</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/wat-is-een-vpn" className="hover:text-white transition-colors">Wat is een VPN?</Link></li>
              <li><Link href="/over-ons" className="hover:text-white transition-colors">Over ons</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-white transition-colors">Affiliate disclosure</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacybeleid</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-xs text-gray-500 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} vpnr.nl — Alle rechten voorbehouden</p>
          <p>vpnr.nl ontvangt commissie via affiliate links. Dit heeft geen invloed op onze beoordelingen.</p>
        </div>
      </div>
    </footer>
  )
}
