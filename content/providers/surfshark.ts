import type { VPNProvider } from './types'

const surfshark: VPNProvider = {
  slug: 'surfshark',
  naam: 'Surfshark',
  tagline: 'Onbeperkt apparaten, scherpe prijs',
  affiliateLink: 'https://surfshark.com/deal/JOUWLINK',
  ctaTekst: 'Probeer Surfshark',
  logo: '/logos/surfshark.svg',

  scores: {
    overall: 9.2,
    snelheid: 9.0,
    beveiliging: 9.3,
    gebruiksgemak: 9.5,
    prijsKwaliteit: 9.8,
  },

  prijzen: {
    maandelijks: 15.45,
    jaarlijks: 3.99,
    tweeJaar: 2.49,
    gratisPeriode: '30 dagen geld-terug-garantie',
  },

  features: {
    noLogs: true,
    killSwitch: true,
    splitTunneling: true,
    aantalApparaten: 'onbeperkt',
    aantalServers: 3200,
    aantalLanden: 100,
    werktMetNetflix: true,
    werktMetTorrenten: true,
    protocols: ['WireGuard', 'OpenVPN', 'IKEv2'],
    hoofdkantoor: 'Nederland',
    opgericht: 2018,
  },

  voordelen: [
    'Onbeperkt aantal apparaten, ideaal voor gezinnen',
    'Goedkoopste serieuze VPN op de markt',
    'CleanWeb blokkeert advertenties en malware',
    'Hoofdkantoor in Nederland (EU-wetgeving)',
    'Zeer gebruiksvriendelijke app',
  ],

  nadelen: [
    'Kleinere servernetwerk dan NordVPN',
    'Snelheid iets minder consistent bij drukke servers',
  ],

  verdict:
    'Surfshark is de beste keuze als je op prijs let of meerdere apparaten wil beschermen. Onbeperkt apparaten voor minder dan €2,50 per maand is onverslaanbaar. De beveiliging en snelheid zijn uitstekend.',

  lastUpdated: 'mei 2026',
  lastUpdatedISO: '2026-05-25',
}

export default surfshark
