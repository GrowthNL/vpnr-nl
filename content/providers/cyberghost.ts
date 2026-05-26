import type { VPNProvider } from './types'

const cyberghost: VPNProvider = {
  slug: 'cyberghost',
  naam: 'CyberGhost',
  tagline: 'Grootste servernetwerk, makkelijk in gebruik',
  affiliateLink: '/go/cyberghost',
  ctaTekst: 'Probeer CyberGhost',
  logo: '/logos/cyberghost.svg',

  scores: {
    overall: 8.5,
    snelheid: 8.5,
    beveiliging: 8.8,
    gebruiksgemak: 9.4,
    prijsKwaliteit: 8.8,
  },

  prijzen: {
    maandelijks: 12.99,
    jaarlijks: 4.29,
    tweeJaar: 2.19,
    gratisPeriode: '45 dagen geld-terug-garantie (langste in de markt)',
  },

  features: {
    noLogs: true,
    killSwitch: true,
    splitTunneling: false,
    aantalApparaten: 7,
    aantalServers: 11500,
    aantalLanden: 100,
    werktMetNetflix: true,
    werktMetTorrenten: true,
    protocols: ['WireGuard', 'OpenVPN', 'IKEv2'],
    hoofdkantoor: 'Roemenië',
    opgericht: 2011,
  },

  voordelen: [
    'Grootste servernetwerk (11.500+ servers)',
    'Langste geld-terug-garantie: 45 dagen',
    'Gespecialiseerde streaming- en torrentservers',
    'Goedkoopste 2-jaarsplan op de markt',
    'Zeer beginner-vriendelijke apps',
  ],

  nadelen: [
    'Geen split tunneling op desktop',
    'Moederbedrijf Kape Technologies heeft gemengde reputatie',
    'Snelheid minder consistent dan NordVPN',
  ],

  verdict:
    'CyberGhost is ideaal voor beginners en streaming-liefhebbers. Het grootste servernetwerk en de langste geld-terug-garantie maken het aantrekkelijk. Minder geschikt voor gevorderde gebruikers die split tunneling nodig hebben.',

  lastUpdated: 'mei 2026',
  lastUpdatedISO: '2026-05-25',
}

export default cyberghost
