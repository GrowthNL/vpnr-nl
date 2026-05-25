import ProviderLogo from '@/components/ProviderLogo'

const vpnProviders = [
  { slug: 'nordvpn', name: 'NordVPN' },
  { slug: 'surfshark', name: 'Surfshark' },
  { slug: 'expressvpn', name: 'ExpressVPN' },
  { slug: 'cyberghost', name: 'CyberGhost' },
  { slug: 'protonvpn', name: 'ProtonVPN' },
  { slug: 'pia', name: 'Private Internet Access' },
  { slug: 'mullvad', name: 'Mullvad' },
  { slug: 'ipvanish', name: 'IPVanish' },
]

const items = [...vpnProviders, ...vpnProviders]

export default function VPNLogoMarquee() {
  return (
    <div className="border-y border-gray-100 bg-gray-50 py-5 overflow-hidden">
      <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-4 font-medium">
        Wij vergelijken de beste VPN-providers
      </p>
      <div className="relative">
        <div className="marquee-track flex gap-5 w-max items-center">
          {items.map((provider, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0"
            >
              <ProviderLogo slug={provider.slug} naam={provider.name} iconSize={22} />
              <span className="text-gray-700 font-medium text-sm whitespace-nowrap">
                {provider.name}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
