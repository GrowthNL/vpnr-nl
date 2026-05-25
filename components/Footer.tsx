import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#040b18] mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Logo size={24} />
            <p className="text-sm text-white/30 leading-relaxed mt-4 max-w-xs">
              Onafhankelijke VPN-vergelijking voor de Nederlandse markt. Geen gesponsorde resultaten.
            </p>
          </div>
          <div>
            <h3 className="text-white/60 font-semibold mb-4 text-xs uppercase tracking-widest">Reviews</h3>
            <ul className="space-y-2.5 text-sm">
              {['nordvpn', 'surfshark', 'expressvpn', 'cyberghost'].map((slug) => (
                <li key={slug}>
                  <Link href={`/vpn-reviews/${slug}`} className="text-white/40 hover:text-white transition-colors capitalize">
                    {slug.charAt(0).toUpperCase() + slug.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white/60 font-semibold mb-4 text-xs uppercase tracking-widest">Beste VPN voor</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/beste-vpn/voor-netflix', label: 'Netflix' },
                { href: '/beste-vpn/voor-streaming', label: 'Streaming' },
                { href: '/beste-vpn/voor-torrenten', label: 'Torrenten' },
                { href: '/beste-vpn/gratis', label: 'Gratis VPN' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/40 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white/60 font-semibold mb-4 text-xs uppercase tracking-widest">Info</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/wat-is-een-vpn', label: 'Wat is een VPN?' },
                { href: '/over-ons', label: 'Over ons' },
                { href: '/affiliate-disclosure', label: 'Affiliate disclosure' },
                { href: '/privacy-policy', label: 'Privacybeleid' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/40 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/20">
          <p>© {new Date().getFullYear()} vpnr.nl — Alle rechten voorbehouden</p>
          <p>vpnr.nl ontvangt commissie via affiliate links. Dit heeft geen invloed op onze beoordelingen.</p>
        </div>
      </div>
    </footer>
  )
}
