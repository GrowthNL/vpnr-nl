const vpnProviders = [
  { name: 'NordVPN', color: '#4687FF' },
  { name: 'Surfshark', color: '#1DB4C8' },
  { name: 'ExpressVPN', color: '#DA3940' },
  { name: 'CyberGhost', color: '#FFCC00' },
  { name: 'ProtonVPN', color: '#6D4AFF' },
  { name: 'Private Internet Access', color: '#4DB848' },
  { name: 'Mullvad', color: '#E8CF42' },
  { name: 'IPVanish', color: '#008AFF' },
]

const logos = [...vpnProviders, ...vpnProviders]

export default function VPNLogoMarquee() {
  return (
    <div className="border-y border-white/5 bg-white/[0.02] py-6 overflow-hidden">
      <p className="text-center text-xs text-white/30 uppercase tracking-widest mb-4 font-medium">
        Wij vergelijken de beste VPN-providers
      </p>
      <div className="relative">
        <div className="marquee-track flex gap-12 w-max">
          {logos.map((provider, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 flex-shrink-0"
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: provider.color, boxShadow: `0 0 8px ${provider.color}` }}
              />
              <span className="text-white/70 font-medium text-sm whitespace-nowrap">
                {provider.name}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#060d1f] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#060d1f] to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
