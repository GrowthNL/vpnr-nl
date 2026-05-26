import nordvpn from './nordvpn'
import surfshark from './surfshark'
import expressvpn from './expressvpn'
import cyberghost from './cyberghost'
import protonvpn from './protonvpn'
import pia from './pia'
import type { VPNProvider } from './types'

export const providers: VPNProvider[] = [
  nordvpn,
  surfshark,
  expressvpn,
  cyberghost,
  protonvpn,
  pia,
]

export function getProvider(slug: string): VPNProvider | undefined {
  return providers.find((p) => p.slug === slug)
}

export function getTopProviders(n: number = 3): VPNProvider[] {
  return [...providers]
    .sort((a, b) => b.scores.overall - a.scores.overall)
    .slice(0, n)
}

export type { VPNProvider }
