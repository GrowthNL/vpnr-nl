import Image from 'next/image'

const logos: Record<string, string> = {
  nordvpn: '/logos/nordvpn.svg',
  surfshark: '/logos/surfshark.svg',
  expressvpn: '/logos/expressvpn.svg',
  cyberghost: '/logos/cyberghost.svg',
}

const bgColors: Record<string, string> = {
  nordvpn: '#003F7E',
  surfshark: '#1B2B44',
  expressvpn: '#1A1A1A',
  cyberghost: '#323232',
}

interface Props {
  slug: string
  naam: string
  width?: number
  height?: number
  className?: string
}

export default function ProviderLogo({ slug, naam, width = 120, height = 28, className = '' }: Props) {
  const src = logos[slug]
  if (!src) {
    return (
      <div
        className={`flex items-center justify-center rounded px-3 py-1 text-white text-sm font-bold ${className}`}
        style={{ backgroundColor: bgColors[slug] ?? '#1e3a8a', width, height }}
      >
        {naam}
      </div>
    )
  }
  return (
    <Image
      src={src}
      alt={`${naam} logo`}
      width={width}
      height={height}
      className={`object-contain ${className}`}
      unoptimized
    />
  )
}
