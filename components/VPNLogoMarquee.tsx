import Image from 'next/image'

const loggedProviders = [
  { slug: 'nordvpn', name: 'NordVPN', hasLogo: true },
  { slug: 'surfshark', name: 'Surfshark', hasLogo: true },
  { slug: 'expressvpn', name: 'ExpressVPN', hasLogo: true },
  { slug: 'cyberghost', name: 'CyberGhost', hasLogo: true },
  { slug: 'protonvpn', name: 'ProtonVPN', hasLogo: false, color: '#6D4AFF' },
  { slug: 'pia', name: 'Private Internet Access', hasLogo: false, color: '#4DB848' },
  { slug: 'mullvad', name: 'Mullvad', hasLogo: false, color: '#E8A000' },
  { slug: 'ipvanish', name: 'IPVanish', hasLogo: false, color: '#008AFF' },
]

const items = [...loggedProviders, ...loggedProviders]

export default function VPNLogoMarquee() {
  return (
    <div className="border-y border-gray-100 bg-gray-50 py-5 overflow-hidden">
      <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-4 font-medium">
        Wij vergelijken de beste VPN-providers
      </p>
      <div className="relative">
        <div className="marquee-track flex gap-6 w-max items-center">
          {items.map((provider, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0 h-10"
            >
              {provider.hasLogo ? (
                <Image
                  src={`/logos/${provider.slug}.svg`}
                  alt={`${provider.name} logo`}
                  width={90}
                  height={22}
                  className="object-contain"
                  unoptimized
                />
              ) : (
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: provider.color }}
                  />
                  <span className="text-gray-600 font-medium text-sm whitespace-nowrap">
                    {provider.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
