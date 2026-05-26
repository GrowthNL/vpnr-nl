import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Logo size={28} />
            <p className="text-sm text-gray-500 leading-relaxed mt-4 max-w-xs">
              Onafhankelijke VPN-vergelijking voor de Nederlandse markt. Geen gesponsorde resultaten.
            </p>
            <div className="mt-5 space-y-1.5 text-xs text-gray-600">
              <p className="font-semibold text-gray-500 uppercase tracking-widest text-[10px] mb-2">Uitgever</p>
              <p>Growth Online Marketing Bureau</p>
              <p>Zeussingel 77, 1363 TM Almere</p>
              <a href="mailto:info@growthmedia.nl" className="hover:text-gray-400 transition-colors block">
                info@growthmedia.nl
              </a>
              <a href="tel:+31654208613" className="hover:text-gray-400 transition-colors block">
                +31 6 54 20 86 13
              </a>
              <p className="pt-1">KvK: 67106366</p>
            </div>
          </div>
          <div>
            <h3 className="text-gray-300 font-semibold mb-4 text-xs uppercase tracking-widest">Reviews</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { slug: 'nordvpn', label: 'NordVPN' },
                { slug: 'surfshark', label: 'Surfshark' },
                { slug: 'expressvpn', label: 'ExpressVPN' },
                { slug: 'cyberghost', label: 'CyberGhost' },
                { slug: 'protonvpn', label: 'ProtonVPN' },
                { slug: 'pia', label: 'Private Internet Access' },
              ].map(({ slug, label }) => (
                <li key={slug}>
                  <Link href={`/vpn-reviews/${slug}`} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-gray-300 font-semibold mb-4 text-xs uppercase tracking-widest">Beste VPN voor</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/beste-vpn/voor-netflix', label: 'Netflix' },
                { href: '/beste-vpn/voor-streaming', label: 'Streaming' },
                { href: '/beste-vpn/voor-torrenten', label: 'Torrenten' },
                { href: '/beste-vpn/gratis', label: 'Gratis VPN' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-gray-300 font-semibold mb-4 text-xs uppercase tracking-widest">Info</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/wat-is-een-vpn', label: 'Wat is een VPN?' },
                { href: '/over-ons', label: 'Over ons' },
                { href: '/contact', label: 'Contact' },
                { href: '/affiliate-disclosure', label: 'Affiliate disclosure' },
                { href: '/privacy-policy', label: 'Privacybeleid' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} vpnr.nl, Alle rechten voorbehouden</p>
          <p>vpnr.nl ontvangt commissie via affiliate links. Dit heeft geen invloed op onze beoordelingen.</p>
        </div>
      </div>
    </footer>
  )
}
