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

  sections: [
    {
      heading: 'Snelheid: goede prestaties',
      body: [
        'PureVPN gebruikt WireGuard en haalt een snelheidscijfer van 8.0. Voor de meeste taken zoals streaming en browsen zijn de snelheden prima, al is de top net iets lager dan bij de absolute marktleiders.',
        'Met meer dan <strong>6500 servers in 65 landen</strong> is er voldoende dekking, al is het aantal landen kleiner dan bij <a href="/vpn-reviews/nordvpn">NordVPN</a>.',
      ],
    },
    {
      heading: 'Beveiliging en privacy',
      body: [
        'PureVPN scoort een 8.5 op beveiliging met AES-256-encryptie, een kill switch en DNS-lekbescherming. Het <strong>no-logs-beleid is gecertificeerd door KPMG</strong>, wat extra vertrouwen geeft.',
        'Het hoofdkantoor zit op de <strong>Britse Maagdeneilanden</strong>, een privacyvriendelijke jurisdictie zonder verplichte dataretentie. PureVPN biedt ook <strong>port forwarding</strong>, handig voor torrents en specifieke toepassingen.',
      ],
    },
    {
      heading: 'Streaming',
      body: [
        'PureVPN deblokkeert Netflix, Disney+ en andere streamingdiensten betrouwbaar. De snelheden zijn voldoende voor streaming in HD en 4K.',
        'Voor wie veel wil streamen is PureVPN een betaalbare optie. Bekijk ook onze gids <a href="/beste-vpn/voor-streaming">beste VPN voor streaming</a>.',
      ],
    },
    {
      heading: 'Gebruiksgemak',
      body: [
        'De apps zijn beschikbaar voor alle grote platforms en je beschermt tot <strong>10 apparaten</strong> tegelijk. De interface is overzichtelijk en geschikt voor beginners.',
        'Functies als port forwarding en split tunneling maken PureVPN ook interessant voor gevorderde gebruikers en torrenters.',
      ],
    },
    {
      heading: 'Prijs en conclusie',
      body: [
        'PureVPN is met <strong>€1,99 per maand</strong> bij een tweejarig abonnement de goedkoopste VPN uit onze test. Let wel op: de prijs <strong>stijgt fors bij verlenging</strong>, dus reken op een hoger bedrag na de eerste termijn.',
        'Met een eindcijfer van <strong>8.3</strong> is PureVPN een goede budgetkeuze. Voor de scherpste instapprijs is het de moeite waard, maar houd de verlengingsprijs in de gaten.',
      ],
    },
  ],

  faqs: [
    {
      question: 'Is PureVPN de goedkoopste VPN?',
      answer: 'Ja, met €1,99 per maand bij een tweejarig abonnement is PureVPN de goedkoopste VPN uit onze test. Let wel op dat de prijs fors stijgt bij verlenging.',
    },
    {
      question: 'Houdt PureVPN logs bij?',
      answer: 'Nee, PureVPN hanteert een no-logs-beleid dat is gecertificeerd door KPMG. Het hoofdkantoor op de Britse Maagdeneilanden valt buiten verplichte dataretentie.',
    },
    {
      question: 'Biedt PureVPN port forwarding?',
      answer: 'Ja, PureVPN ondersteunt port forwarding als optie. Dit is handig voor torrents, gamen en het toegankelijk maken van specifieke diensten.',
    },
    {
      question: 'Werkt PureVPN met Netflix?',
      answer: 'Ja, PureVPN deblokkeert Netflix, Disney+ en andere streamingdiensten betrouwbaar. De snelheden zijn voldoende voor streaming in HD en 4K.',
    },
    {
      question: 'Stijgt de prijs van PureVPN bij verlenging?',
      answer: 'Ja, de prijs van PureVPN stijgt aanzienlijk na de eerste abonnementsperiode. Houd hier rekening mee bij de keuze en bekijk de verlengingstarieven vooraf.',
    },
  ],

  lastUpdated: 'juni 2026',
  lastUpdatedISO: '2026-06-17',
}

export default purevpn
