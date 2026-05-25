import type { VPNProvider } from './types'

const expressvpn: VPNProvider = {
  slug: 'expressvpn',
  naam: 'ExpressVPN',
  tagline: 'Premium snelheid en beveiliging',
  affiliateLink: 'https://www.expressvpn.com/refer-a-friend/JOUWLINK',
  ctaTekst: 'Probeer ExpressVPN',
  logo: '/logos/expressvpn.svg',

  scores: {
    overall: 9.0,
    snelheid: 9.8,
    beveiliging: 9.5,
    gebruiksgemak: 9.6,
    prijsKwaliteit: 7.5,
  },

  prijzen: {
    maandelijks: 12.95,
    jaarlijks: 8.32,
    tweeJaar: null,
    gratisPeriode: '30 dagen geld-terug-garantie',
  },

  features: {
    noLogs: true,
    killSwitch: true,
    splitTunneling: true,
    aantalApparaten: 8,
    aantalServers: 3000,
    aantalLanden: 105,
    werktMetNetflix: true,
    werktMetTorrenten: true,
    protocols: ['Lightway', 'OpenVPN', 'IKEv2', 'L2TP'],
    hoofdkantoor: 'Britse Maagdeneilanden',
    opgericht: 2009,
  },

  voordelen: [
    'Snelste VPN in de meeste tests wereldwijd',
    'Eigen Lightway protocol voor optimale snelheid',
    'Werkt in landen met strenge censuur (China)',
    'Uitmuntende apps voor alle platforms',
    'Langste ervaring in de industrie (sinds 2009)',
  ],

  nadelen: [
    'Duurste optie in zijn categorie',
    'Geen 2-jaarsplan beschikbaar',
    'Slechts 8 apparaten tegelijk',
  ],

  verdict:
    'ExpressVPN is de premium keuze voor wie het beste wil zonder compromissen. De snelheid is ongeëvenaard, maar je betaalt daar een significante meerprijs voor. Ideaal voor zware gebruikers en reizigers naar landen met censuur.',
}

export default expressvpn
