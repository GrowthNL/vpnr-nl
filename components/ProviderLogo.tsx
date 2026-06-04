import Image from 'next/image'

// Providers with official PNG files (white/transparent background)
const pngLogos = new Set(['nordvpn', 'mcafee', 'purevpn', 'hideme'])

// Providers with custom SVG icons
const svgLogos = new Set(['surfshark', 'cyberghost', 'protonvpn', 'vpnnederland'])

const brandColors: Record<string, string> = {
  nordvpn:      '#ffffff',
  surfshark:    '#E8E8E8',
  cyberghost:   '#ffffff',
  protonvpn:    '#ffffff',
  purevpn:      '#ffffff',
  vpnnederland: '#ffffff',
  mcafee:       '#ffffff',
  hideme:       '#ffffff',
}

interface Props {
  slug: string
  naam: string
  iconSize?: number
  showName?: boolean
  nameSize?: string
  className?: string
}

export default function ProviderLogo({
  slug,
  naam,
  iconSize = 32,
  showName = false,
  nameSize = 'text-base',
  className = '',
}: Props) {
  const isKnown = pngLogos.has(slug) || svgLogos.has(slug)

  if (!isKnown) {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <div
          className="rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ width: iconSize, height: iconSize, backgroundColor: '#1e3a8a' }}
        >
          <span className="text-white font-black" style={{ fontSize: iconSize * 0.35 }}>
            {naam[0]}
          </span>
        </div>
        {showName && <span className={`font-bold text-gray-900 ${nameSize}`}>{naam}</span>}
      </div>
    )
  }

  const isPng = pngLogos.has(slug)
  const bg = brandColors[slug] ?? '#ffffff'

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div
        className="rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center"
        style={{ width: iconSize, height: iconSize, backgroundColor: bg }}
      >
        <Image
          src={`/logos/${slug}.${isPng ? 'png' : 'svg'}`}
          alt={`${naam} logo`}
          width={iconSize}
          height={iconSize}
          className="w-full h-full object-contain"
          style={{ padding: isPng ? Math.max(2, iconSize * 0.08) : 0 }}
          unoptimized
        />
      </div>
      {showName && <span className={`font-bold text-gray-900 ${nameSize}`}>{naam}</span>}
    </div>
  )
}
