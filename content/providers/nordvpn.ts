import type { VPNProvider } from './types'

const nordvpn: VPNProvider = {
  slug: 'nordvpn',
  naam: 'NordVPN',
  tagline: 'De meest populaire VPN ter wereld',
  affiliateLink: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=JOUWID',
  ctaTekst: 'Probeer NordVPN',
  logo: '/logos/nordvpn.svg',

  scores: {
    overall: 9.5,
    snelheid: 9.5,
    beveiliging: 9.8,
    gebruiksgemak: 9.2,
    prijsKwaliteit: 9.0,
  },

  prijzen: {
    maandelijks: 12.99,
    jaarlijks: 4.99,
    tweeJaar: 3.39,
    gratisPeriode: '30 dagen geld-terug-garantie',
  },

  features: {
    noLogs: true,
    killSwitch: true,
    splitTunneling: true,
    aantalApparaten: 10,
    aantalServers: 6400,
    aantalLanden: 111,
    werktMetNetflix: true,
    werktMetTorrenten: true,
    protocols: ['NordLynx (WireGuard)', 'OpenVPN', 'IKEv2/IPSec'],
    hoofdkantoor: 'Panama',
    opgericht: 2012,
  },

  voordelen: [
    'Razendsnel door NordLynx protocol',
    'Uitgebreid servernetwerk (6400+ servers)',
    'Strikt no-logs beleid, onafhankelijk geauditeerd',
    'Werkt betrouwbaar met Netflix, Disney+ en meer',
    'Threat Protection blokkeert malware en trackers',
    '10 apparaten tegelijk',
  ],

  nadelen: [
    'Iets duurder dan Surfshark op maandbasis',
    'Desktop app kan soms traag opstarten',
  ],

  verdict:
    'NordVPN is de veiligste keuze voor de meeste gebruikers. Topsnelheid, uitstekende beveiliging en werkt met alle streamingdiensten. De prijs is wat hoger, maar de kwaliteit rechtvaardigt dat volledig.',
}

export default nordvpn
