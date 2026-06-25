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
    'Gevestigd in Maleisië, buiten de 5/9/14 Eyes surveillance alliantie',
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

  sections: [
    {
      heading: 'Snelheid: betrouwbaar en stabiel',
      body: [
        'Hide.me gebruikt onder andere WireGuard en haalt een snelheidscijfer van 8.3. Voor streaming, browsen en downloaden zijn de snelheden ruim voldoende.',
        'Met meer dan <strong>2600 servers in 91 landen</strong> is er voldoende keuze voor een soepele verbinding dichtbij huis.',
      ],
    },
    {
      heading: 'Beveiliging en privacy',
      body: [
        'Hide.me scoort een 9.0 op beveiliging en ondersteunt een breed scala aan protocollen: <strong>WireGuard, OpenVPN, IKEv2, SoftEther en SSTP</strong>. Dat geeft veel flexibiliteit om blokkades te omzeilen.',
        'Het <strong>no-logs-beleid</strong> is in 2025 bevestigd via het VPN Trust Initiative. Het hoofdkantoor zit in <strong>Maleisië</strong>, buiten de grote inlichtingenallianties. Let op: de kill switch is niet beschikbaar op iOS.',
      ],
    },
    {
      heading: 'Streaming en gratis versie',
      body: [
        'Hide.me deblokkeert Netflix en andere streamingdiensten op de betaalde servers. De prestaties zijn stabiel, al is het aanbod servers kleiner dan bij <a href="/vpn-reviews/cyberghost">CyberGhost</a>.',
        'Er is een <strong>gratis versie met 10 GB per maand</strong>, handig om de dienst te proberen. Meer gratis opties vind je in onze gids <a href="/beste-vpn/gratis">beste gratis VPN</a>.',
      ],
    },
    {
      heading: 'Gebruiksgemak',
      body: [
        'De apps zijn beschikbaar voor alle grote platforms en je beschermt tot <strong>10 apparaten</strong> tegelijk. De interface is overzichtelijk, met handige instellingen voor gevorderde gebruikers.',
        'Houd er rekening mee dat de kill switch op iOS ontbreekt, wat een nadeel kan zijn voor iPhone-gebruikers die maximale bescherming willen.',
      ],
    },
    {
      heading: 'Prijs en conclusie',
      body: [
        'Hide.me kost vanaf <strong>€2,49 per maand</strong> bij een tweejarig abonnement, scherp geprijsd voor een dienst met zoveel protocolopties.',
        'Met een eindcijfer van <strong>8.6</strong> is Hide.me een solide keuze, vooral voor gebruikers die veel protocollen willen en een gratis versie waarderen.',
      ],
    },
  ],

  faqs: [
    {
      question: 'Heeft Hide.me een gratis versie?',
      answer: 'Ja, Hide.me biedt een gratis versie met 10 GB data per maand. Daarmee kun je de dienst uitgebreid testen voordat je een betaald abonnement neemt.',
    },
    {
      question: 'Welke protocollen ondersteunt Hide.me?',
      answer: 'Hide.me ondersteunt WireGuard, OpenVPN, IKEv2, SoftEther en SSTP. Deze brede keuze maakt het eenvoudig om VPN-blokkades te omzeilen en de verbinding te optimaliseren.',
    },
    {
      question: 'Heeft Hide.me een kill switch op iOS?',
      answer: 'Nee, de kill switch is niet beschikbaar op iOS, wel op andere platforms. iPhone-gebruikers die maximale bescherming willen, moeten hier rekening mee houden.',
    },
    {
      question: 'Houdt Hide.me logs bij?',
      answer: 'Nee, Hide.me hanteert een no-logs-beleid dat in 2025 is bevestigd via het VPN Trust Initiative. Het hoofdkantoor in Maleisië valt buiten de grote inlichtingenallianties.',
    },
    {
      question: 'Wat kost Hide.me?',
      answer: 'Hide.me kost vanaf €2,49 per maand bij een tweejarig abonnement. Dat is scherp geprijsd voor een VPN met zoveel protocolopties en een gratis versie.',
    },
  ],

  lastUpdated: 'juni 2026',
  lastUpdatedISO: '2026-06-17',
}

export default hideme
