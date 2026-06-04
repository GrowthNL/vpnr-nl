import Image from 'next/image'

const knownSlugs = new Set(['nordvpn', 'surfshark', 'cyberghost', 'protonvpn', 'purevpn', 'vpnnederland', 'mcafee', 'hideme'])

const brandColors: Record<string, string> = {
  nordvpn:      '#003F7E',
  surfshark:    '#1B2B44',
  cyberghost:   '#292F3B',
  protonvpn:    '#6D4AFF',
  purevpn:      '#0077C8',
  vpnnederland: '#1A2E4A',
  mcafee:       '#C01818',
  hideme:       '#0D2B30',
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
  if (!knownSlugs.has(slug)) {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <div
          className="rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ width: iconSize, height: iconSize, backgroundColor: brandColors[slug] ?? '#1e3a8a' }}
        >
          <span className="text-white font-black" style={{ fontSize: iconSize * 0.35 }}>
            {naam[0]}
          </span>
        </div>
        {showName && (
          <span className={`font-bold text-gray-900 ${nameSize}`}>{naam}</span>
        )}
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div
        className="rounded-xl overflow-hidden flex-shrink-0"
        style={{ width: iconSize, height: iconSize }}
      >
        <Image
          src={`/logos/${slug}.svg`}
          alt={`${naam} logo`}
          width={iconSize}
          height={iconSize}
          className="w-full h-full"
          unoptimized
        />
      </div>
      {showName && (
        <span className={`font-bold text-gray-900 ${nameSize}`}>{naam}</span>
      )}
    </div>
  )
}
