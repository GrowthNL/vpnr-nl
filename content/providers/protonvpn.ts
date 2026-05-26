import type { VPNProvider } from './types'

const protonvpn: VPNProvider = {
  slug: 'protonvpn',
  naam: 'ProtonVPN',
  tagline: 'Privacy-first VPN vanuit Zwitserland',
  affiliateLink: 'https://protonvpn.com/?aff=JOUWLINK',
  ctaTekst: 'Probeer ProtonVPN',
  logo: '/logos/protonvpn.svg',

  scores: {
    overall: 8.8,
    snelheid: 8.5,
    beveiliging: 9.5,
    gebruiksgemak: 8.3,
    prijsKwaliteit: 8.5,
  },

  prijzen: {
    maandelijks: 9.99,
    jaarlijks: 5.99,
    tweeJaar: null,
    gratisPeriode: '30 dagen geld-terug-garantie',
  },

  features: {
    noLogs: true,
    killSwitch: true,
    splitTunneling: true,
    aantalApparaten: 10,
    aantalServers: 6500,
    aantalLanden: 112,
    werktMetNetflix: true,
    werktMetTorrenten: true,
    protocols: ['WireGuard', 'OpenVPN', 'Stealth'],
    hoofdkantoor: 'Zwitserland',
    opgericht: 2017,
  },

  voordelen: [
    'Gevestigd in Zwitserland, buiten EU/US-jurisdictie',
    'Open-source apps, volledig transparant',
    'Gratis tier beschikbaar zonder datalimiet',
    'Stealth-protocol omzeilt VPN-censuur in China',
    'Onafhankelijk geaudit no-logs beleid (Securitum)',
  ],

  nadelen: [
    'Geen 2-jaarsplan, hogere maandprijs dan concurrenten',
    'Snelheid iets lager dan NordVPN en ExpressVPN',
    'Minder gespecialiseerde streamingservers',
  ],

  verdict:
    'ProtonVPN is de beste keuze voor privacy-bewuste gebruikers. Zwitserland als vestigingsplaats, open-source code en een bewezen no-logs beleid maken het de meest transparante VPN op de markt. Iets duurder, maar ideaal voor wie privacy echt serieus neemt.',

  lastUpdated: 'mei 2026',
  lastUpdatedISO: '2026-05-25',
}

export default protonvpn
