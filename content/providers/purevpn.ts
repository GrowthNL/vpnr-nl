import type { VPNProvider } from './types'

const purevpn: VPNProvider = {
  slug: 'purevpn',
  naam: 'PureVPN',
  tagline: 'Geauditeerd no-logs, 6.500+ servers wereldwijd',
  affiliateLink: '/go/purevpn',
  ctaTekst: 'Probeer PureVPN',
  logo: '/logos/purevpn.svg',

  scores: {
    overall: 8.3,
    snelheid: 8.0,
    beveiliging: 8.5,
    gebruiksgemak: 8.3,
    prijsKwaliteit: 8.8,
  },

  prijzen: {
    maandelijks: 11.95,
    jaarlijks: 3.69,
    tweeJaar: 1.99,
    gratisPeriode: '31 dagen geld-terug-garantie',
  },

  features: {
    noLogs: true,
    killSwitch: true,
    splitTunneling: true,
    aantalApparaten: 10,
    aantalServers: 6500,
    aantalLanden: 65,
    werktMetNetflix: true,
    werktMetTorrenten: true,
    protocols: ['WireGuard', 'OpenVPN', 'IKEv2'],
    hoofdkantoor: 'Britse Maagdeneilanden',
    opgericht: 2007,
  },

  voordelen: [
    'Onafhankelijk geauditeerd no-logs beleid (KPMG-gecertificeerd)',
    'Uitgebreid servernetwerk: 6.500+ servers in 65+ landen',
    '10 gelijktijdige verbindingen — geschikt voor het hele gezin',
    'Kill switch en split tunneling beschikbaar op meerdere platforms',
    'Langste geld-terug-garantie: 31 dagen',
  ],

  nadelen: [
    'Verlengingsprijs stijgt fors na de introductieperiode',
    'Gevestigd op de Britse Maagdeneilanden — minder transparant voor EU-gebruikers',
    'P2P-servers niet beschikbaar in alle regio\'s',
  ],

  verdict:
    'PureVPN is een solide, betaalbare VPN met een uitgebreid servernetwerk en een onafhankelijk gecontroleerd no-logs beleid (KPMG-gecertificeerd). Ideaal voor gebruikers die op zoek zijn naar een budgetvriendelijke optie met veel functies, al moet je bij verlenging rekening houden met een hogere prijs.',

  lastUpdated: 'juni 2026',
  lastUpdatedISO: '2026-06-04',
}

export default purevpn
