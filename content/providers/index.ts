import nordvpn from './nordvpn'
import surfshark from './surfshark'
import protonvpn from './protonvpn'
import hideme from './hideme'
import cyberghost from './cyberghost'
import purevpn from './purevpn'
import mcafee from './mcafee'
import vpnnederland from './vpnnederland'
import type { VPNProvider } from './types'

export const providers: VPNProvider[] = [
  nordvpn,
  surfshark,
  protonvpn,
  hideme,
  cyberghost,
  purevpn,
  mcafee,
  vpnnederland,
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
