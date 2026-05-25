export interface VPNProvider {
  slug: string
  naam: string
  tagline: string
  affiliateLink: string
  ctaTekst: string
  logo: string

  scores: {
    overall: number
    snelheid: number
    beveiliging: number
    gebruiksgemak: number
    prijsKwaliteit: number
  }

  prijzen: {
    maandelijks: number
    jaarlijks: number
    tweeJaar: number | null
    gratisPeriode: string | null  // bijv. "30 dagen geld-terug-garantie"
  }

  features: {
    noLogs: boolean
    killSwitch: boolean
    splitTunneling: boolean
    aantalApparaten: number | 'onbeperkt'
    aantalServers: number
    aantalLanden: number
    werktMetNetflix: boolean
    werktMetTorrenten: boolean
    protocols: string[]
    hoofdkantoor: string
    opgericht: number
  }

  voordelen: string[]
  nadelen: string[]
  verdict: string
}
