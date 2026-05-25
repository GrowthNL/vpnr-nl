const vpnProviders = [
  { name: 'NordVPN', color: '#4687FF' },
  { name: 'Surfshark', color: '#1DB4C8' },
  { name: 'ExpressVPN', color: '#DA3940' },
  { name: 'CyberGhost', color: '#F5A623' },
  { name: 'ProtonVPN', color: '#6D4AFF' },
  { name: 'Private Internet Access', color: '#4DB848' },
  { name: 'Mullvad', color: '#E8A000' },
  { name: 'IPVanish', color: '#008AFF' },
]

const logos = [...vpnProviders, ...vpnProviders]

export default function VPNLogoMarquee() {
  return (
    <div className="border-y border-gray-100 bg-gray-50 py-5 overflow-hidden">
      <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-4 font-medium">
        Wij vergelijken de beste VPN-providers
      </p>
      <div className="relative">
        <div className="marquee-track flex gap-8 w-max">
          {logos.map((provider, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0"
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: provider.color }}
              />
              <span className="text-gray-600 font-medium text-sm whitespace-nowrap">
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
