import type { VPNProvider } from './types'

const hideme: VPNProvider = {
  slug: 'hideme',
  naam: 'Hide.me',
  tagline: 'Privacy-first VPN met gratis tier',
  affiliateLink: '/go/hideme',
  ctaTekst: 'Probeer Hide.me',
  logo: '/logos/hideme.svg',

  scores: {
    overall: 8.6,
    snelheid: 8.3,
    beveiliging: 9.0,
    gebruiksgemak: 7.5,
    prijsKwaliteit: 8.5,
  },

  prijzen: {
    maandelijks: 9.15,
    jaarlijks: 4.19,
    tweeJaar: 2.49,
    gratisPeriode: '30 dagen geld-terug-garantie',
  },

  features: {
    noLogs: true,
    killSwitch: true,
    splitTunneling: true,
    aantalApparaten: 10,
    aantalServers: 2600,
    aantalLanden: 91,
    werktMetNetflix: true,
    werktMetTorrenten: true,
    protocols: ['WireGuard', 'OpenVPN', 'IKEv2', 'SoftEther', 'SSTP'],
    hoofdkantoor: 'Maleisië',
    opgericht: 2012,
  },

  voordelen: [
    'Gevestigd in Maleisië — buiten de 5/9/14 Eyes surveillance alliantie',
    'Onafhankelijk gecontroleerd no-logs beleid (VPN Trust Initiative, 2025)',
    'Vijf protocollen inclusief WireGuard en SoftEther',
    'Royale gratis versie met 10 GB data per maand',
    'P2P / torrenting toegestaan op vrijwel alle servers',
  ],

  nadelen: [
    'Kleiner servernetwerk dan NordVPN of CyberGhost (2.600+ servers)',
    'Kill switch niet beschikbaar op iOS',
    'Desktop interface verouderd van design',
  ],

  verdict:
    'Hide.me is een privacygerichte VPN met een sterk fundament: Maleisische jurisdictie, onafhankelijk gecontroleerd no-logs beleid en vijf ondersteunde protocollen. De royale gratis versie maakt het laagdrempelig om te testen. Een uitstekende keuze voor gebruikers die privacy en flexibiliteit centraal stellen.',

  lastUpdated: 'juni 2026',
  lastUpdatedISO: '2026-06-04',
}

export default hideme
