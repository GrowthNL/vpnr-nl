import type { VPNProvider } from './types'

const vpnnederland: VPNProvider = {
  slug: 'vpnnederland',
  naam: 'VPN Nederland',
  tagline: 'Nederlandse VPN met onbeperkt apparaten',
  affiliateLink: '/go/vpnnederland',
  ctaTekst: 'Probeer VPN Nederland',
  logo: '/logos/vpnnederland.svg',

  scores: {
    overall: 6.5,
    snelheid: 7.0,
    beveiliging: 5.5,
    gebruiksgemak: 7.5,
    prijsKwaliteit: 7.5,
  },

  prijzen: {
    maandelijks: 9.95,
    jaarlijks: 3.99,
    tweeJaar: null,
    gratisPeriode: '7 dagen geld-terug-garantie',
  },

  features: {
    noLogs: true,
    killSwitch: true,
    splitTunneling: false,
    aantalApparaten: 'onbeperkt',
    aantalServers: 150,
    aantalLanden: 23,
    werktMetNetflix: true,
    werktMetTorrenten: true,
    protocols: ['WireGuard', 'OpenVPN', 'IKEv2'],
    hoofdkantoor: 'Curaçao',
    opgericht: 2020,
  },

  voordelen: [
    'Nederlandstalige klantenservice en interface',
    'Onbeperkt aantal gelijktijdige verbindingen',
    'Gevestigd op Curaçao — buiten de 5/9/14 Eyes surveillance alliantie',
    'Ondersteunt WireGuard voor snelle verbindingen',
    'Scherpe jaarprijs voor een Europees product',
  ],

  nadelen: [
    'Onafhankelijke test toonde DNS- en IP-lekken aan (privacyrisico)',
    'Zeer klein servernetwerk (150+ servers in 23 landen)',
    'Geen split tunneling beschikbaar',
    'Slechts 7 dagen geld-terug-garantie (marktgemiddelde is 30 dagen)',
  ],

  verdict:
    'VPN Nederland richt zich op de Nederlandse markt met Nederlandstalige ondersteuning en onbeperkt apparaten voor een lage prijs. Helaas toonden onafhankelijke tests DNS- en IP-lekken aan — een serieus privacyprobleem. Voor eenvoudig dagelijks gebruik prima, maar wie privacy echt serieus neemt kan beter kiezen voor NordVPN of ProtonVPN.',

  lastUpdated: 'juni 2026',
  lastUpdatedISO: '2026-06-04',
}

export default vpnnederland
