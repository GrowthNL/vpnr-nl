import type { VPNProvider } from './types'

const surfshark: VPNProvider = {
  slug: 'surfshark',
  naam: 'Surfshark',
  tagline: 'Onbeperkt apparaten, scherpe prijs',
  affiliateLink: '/go/surfshark',
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

  sections: [
    {
      heading: 'Snelheid: snel dankzij WireGuard',
      body: [
        'Surfshark gebruikt het moderne <strong>WireGuard</strong>-protocol en levert daarmee zeer goede snelheden. Met een snelheidscijfer van 9.0 zit het dicht in de buurt van <a href="/vpn-reviews/nordvpn">NordVPN</a>.',
        'Met meer dan <strong>3200 servers in 100 landen</strong> is er ruime keuze. Voor streaming, downloaden en videobellen zul je in de praktijk geen merkbare vertraging ondervinden.',
      ],
    },
    {
      heading: 'Beveiliging en privacy',
      body: [
        'Surfshark scoort een 9.3 op beveiliging. De VPN biedt AES-256-encryptie, een kill switch, CleanWeb (advertentie- en trackerblokkering), MultiHop en het camouflagemodus-protocol.',
        'Het <strong>no-logs-beleid</strong> is onafhankelijk getoetst. Het hoofdkantoor zit sinds de fusie met Nord Security in <strong>Nederland</strong>. Nederland kent geen verplichte dataretentie voor VPN\'s.',
      ],
    },
    {
      heading: 'Streaming: deblokkeert vrijwel alles',
      body: [
        'Surfshark deblokkeert Netflix, Disney+, HBO Max, Videoland en buitenlandse catalogi zonder problemen. De snelheden zijn ruim voldoende voor 4K.',
        'Een groot voordeel is het <strong>onbeperkt aantal apparaten</strong>, ideaal voor gezinnen die op meerdere schermen tegelijk willen streamen. Zie ook onze gids <a href="/beste-vpn/voor-streaming">beste VPN voor streaming</a>.',
      ],
    },
    {
      heading: 'Gebruiksgemak en apparaten',
      body: [
        'De Nederlandstalige apps zijn strak vormgegeven en eenvoudig te bedienen. Surfshark is uniek met ondersteuning voor een <strong>onbeperkt aantal apparaten</strong> per abonnement.',
        'Functies als split tunneling, automatisch verbinden en de Nothing-to-hide-modus maken de app veelzijdig. De 24/7 klantenservice helpt via livechat.',
      ],
    },
    {
      heading: 'Prijs en conclusie',
      body: [
        'Surfshark is met <strong>€2,49 per maand</strong> (tweejarig abonnement) een van de voordeligste premium-VPN\'s, inclusief 30 dagen geld-terug-garantie.',
        'Met een eindcijfer van <strong>9.2</strong> biedt Surfshark de beste prijs-kwaliteitverhouding. Voor wie veel apparaten wil beschermen voor weinig geld is dit de slimste keuze in 2026.',
      ],
    },
  ],

  faqs: [
    {
      question: 'Op hoeveel apparaten werkt Surfshark tegelijk?',
      answer: 'Surfshark ondersteunt een onbeperkt aantal apparaten met één abonnement. Dit is ideaal voor gezinnen en huishoudens met veel telefoons, laptops en smart-tv\'s.',
    },
    {
      question: 'Waar staat het hoofdkantoor van Surfshark?',
      answer: 'Het hoofdkantoor van Surfshark staat in Nederland, na de fusie met Nord Security. Nederland kent geen verplichte dataretentie voor VPN-aanbieders.',
    },
    {
      question: 'Werkt Surfshark met Netflix?',
      answer: 'Ja, Surfshark deblokkeert Netflix, Disney+, Videoland en veel buitenlandse streamingdiensten betrouwbaar. De snelheden zijn voldoende voor streaming in 4K.',
    },
    {
      question: 'Houdt Surfshark logs bij?',
      answer: 'Nee, Surfshark hanteert een onafhankelijk getoetst no-logs-beleid. Er worden geen gegevens over je online activiteiten opgeslagen.',
    },
    {
      question: 'Wat kost Surfshark?',
      answer: 'Surfshark kost vanaf €2,49 per maand bij een tweejarig abonnement, inclusief 30 dagen geld-terug-garantie. Daarmee is het een van de goedkoopste premium-VPN\'s.',
    },
  ],

  lastUpdated: 'juni 2026',
  lastUpdatedISO: '2026-06-17',
}

export default surfshark
