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
    gratisPeriode: string | null
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

  sections?: {
    heading: string
    body: string[]
  }[]

  faqs?: {
    question: string
    answer: string
  }[]

  lastUpdated: string
  lastUpdatedISO: string
}
