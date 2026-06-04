import type { VPNProvider } from './types'

const mcafee: VPNProvider = {
  slug: 'mcafee',
  naam: 'McAfee VPN',
  tagline: 'VPN ingebouwd in het McAfee beveiligingspakket',
  affiliateLink: '/go/mcafee',
  ctaTekst: 'Probeer McAfee VPN',
  logo: '/logos/mcafee.svg',

  scores: {
    overall: 6.8,
    snelheid: 7.0,
    beveiliging: 6.0,
    gebruiksgemak: 8.0,
    prijsKwaliteit: 7.0,
  },

  prijzen: {
    maandelijks: 3.99,
    jaarlijks: 3.99,
    tweeJaar: null,
    gratisPeriode: '30 dagen geld-terug-garantie',
  },

  features: {
    noLogs: false,
    killSwitch: true,
    splitTunneling: false,
    aantalApparaten: 5,
    aantalServers: 2000,
    aantalLanden: 47,
    werktMetNetflix: true,
    werktMetTorrenten: false,
    protocols: ['WireGuard', 'OpenVPN', 'Catapult Hydra'],
    hoofdkantoor: 'Verenigde Staten',
    opgericht: 2019,
  },

  voordelen: [
    'Eenvoudig te gebruiken, geïntegreerd in McAfee beveiligingspakket',
    'Scherpe introductieprijs bij aankoop',
    'Geslaagd voor DNS- en WebRTC-lektests in onafhankelijke tests',
    '30 dagen geld-terug-garantie',
  ],

  nadelen: [
    'Geen echte no-logs policy — privacyrichtlijn laat dataverzameling toe',
    'Kill switch alleen beschikbaar op Windows, niet op iOS of Android',
    'Gevestigd in de VS (Five Eyes) — ongunstig voor privacy',
    'Prijzen stijgen drastisch bij verlenging (tot 3× de introductieprijs)',
    'Alleen jaarlijks abonnement beschikbaar, geen maandoptie',
  ],

  verdict:
    'McAfee VPN is handig als je al McAfee-beveiligingssoftware gebruikt, maar als zelfstandige VPN schiet het tekort. De onduidelijke no-logs policy, de beperkte kill switch (alleen Windows) en de Amerikaanse jurisdictie maken het minder geschikt voor wie privacy serieus neemt. De scherpe introductieprijs maakt bij verlenging plaats voor een forse stijging.',

  lastUpdated: 'juni 2026',
  lastUpdatedISO: '2026-06-04',
}

export default mcafee
