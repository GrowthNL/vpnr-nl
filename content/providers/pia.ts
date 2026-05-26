import type { VPNProvider } from './types'

const pia: VPNProvider = {
  slug: 'pia',
  naam: 'Private Internet Access',
  tagline: 'Grootste servernetwerk, bewezen no-logs',
  affiliateLink: 'https://www.privateinternetaccess.com/pages/buy-vpn/JOUWLINK',
  ctaTekst: 'Probeer PIA',
  logo: '/logos/pia.svg',

  scores: {
    overall: 8.2,
    snelheid: 8.5,
    beveiliging: 8.3,
    gebruiksgemak: 8.0,
    prijsKwaliteit: 9.2,
  },

  prijzen: {
    maandelijks: 9.95,
    jaarlijks: 3.33,
    tweeJaar: 1.99,
    gratisPeriode: '30 dagen geld-terug-garantie',
  },

  features: {
    noLogs: true,
    killSwitch: true,
    splitTunneling: true,
    aantalApparaten: 'onbeperkt',
    aantalServers: 35000,
    aantalLanden: 91,
    werktMetNetflix: true,
    werktMetTorrenten: true,
    protocols: ['WireGuard', 'OpenVPN', 'IKEv2'],
    hoofdkantoor: 'Verenigde Staten',
    opgericht: 2010,
  },

  voordelen: [
    'Grootste servernetwerk ter wereld (35.000+ servers)',
    'No-logs beleid tweemaal bewezen voor de rechter',
    'Onbeperkt aantal apparaten op één account',
    'Goedkoopste 2-jaarsplan van alle grote providers',
    'Open-source apps beschikbaar',
  ],

  nadelen: [
    'Gevestigd in de VS (5-Eyes land), nadeel voor privacy',
    'Interface minder intuïtief dan NordVPN of Surfshark',
    'Snelheid wisselvallig op drukke servers',
  ],

  verdict:
    'Private Internet Access biedt het grootste servernetwerk en de laagste prijs van alle serieuze VPN-providers. Het no-logs beleid is in de rechtbank bewezen. De vestiging in de VS is een privacynadeel, maar voor de meeste gebruikers opweegt de combinatie van prijs, servers en bewezen betrouwbaarheid ruimschoots.',

  lastUpdated: 'mei 2026',
  lastUpdatedISO: '2026-05-25',
}

export default pia
