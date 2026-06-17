import type { VPNProvider } from './types'

const cyberghost: VPNProvider = {
  slug: 'cyberghost',
  naam: 'CyberGhost',
  tagline: 'Grootste servernetwerk, makkelijk in gebruik',
  affiliateLink: '/go/cyberghost',
  ctaTekst: 'Probeer CyberGhost',
  logo: '/logos/cyberghost.svg',

  scores: {
    overall: 8.5,
    snelheid: 8.5,
    beveiliging: 8.8,
    gebruiksgemak: 9.4,
    prijsKwaliteit: 8.8,
  },

  prijzen: {
    maandelijks: 12.99,
    jaarlijks: 4.29,
    tweeJaar: 2.19,
    gratisPeriode: '45 dagen geld-terug-garantie (langste in de markt)',
  },

  features: {
    noLogs: true,
    killSwitch: true,
    splitTunneling: false,
    aantalApparaten: 7,
    aantalServers: 11500,
    aantalLanden: 100,
    werktMetNetflix: true,
    werktMetTorrenten: true,
    protocols: ['WireGuard', 'OpenVPN', 'IKEv2'],
    hoofdkantoor: 'Roemenië',
    opgericht: 2011,
  },

  voordelen: [
    'Grootste servernetwerk (11.500+ servers)',
    'Langste geld-terug-garantie: 45 dagen',
    'Gespecialiseerde streaming- en torrentservers',
    'Goedkoopste 2-jaarsplan op de markt',
    'Zeer beginner-vriendelijke apps',
  ],

  nadelen: [
    'Geen split tunneling op desktop',
    'Moederbedrijf Kape Technologies heeft gemengde reputatie',
    'Snelheid minder consistent dan NordVPN',
  ],

  verdict:
    'CyberGhost is ideaal voor beginners en streaming-liefhebbers. Het grootste servernetwerk en de langste geld-terug-garantie maken het aantrekkelijk. Minder geschikt voor gevorderde gebruikers die split tunneling nodig hebben.',

  sections: [
    {
      heading: 'Snelheid: snel en stabiel',
      body: [
        'CyberGhost gebruikt WireGuard en haalt een snelheidscijfer van 8.5. Voor streaming, gamen en downloaden zijn de snelheden ruim voldoende.',
        'Met meer dan <strong>11.500 servers in 100 landen</strong> heeft CyberGhost het grootste servernetwerk uit onze test. Dat zorgt voor stabiele verbindingen en weinig overvolle servers.',
      ],
    },
    {
      heading: 'Beveiliging en privacy',
      body: [
        'CyberGhost scoort een 8.8 op beveiliging met AES-256-encryptie, een kill switch en DNS-lekbescherming. Het <strong>no-logs-beleid</strong> is van kracht.',
        'Het hoofdkantoor zit in <strong>Roemenië</strong>, buiten de EU-dataretentieafspraken. Moederbedrijf is Kape Technologies. CyberGhost publiceert regelmatig een transparantierapport over ontvangen verzoeken.',
      ],
    },
    {
      heading: 'Streaming: gespecialiseerde servers',
      body: [
        'Een sterk punt van CyberGhost zijn de <strong>gespecialiseerde streamingservers</strong>, geoptimaliseerd voor specifieke diensten als Netflix, Disney+ en Videoland. Je kiest simpelweg de server voor de dienst die je wilt kijken.',
        'Daardoor is deblokkeren eenvoudig en betrouwbaar. Zie ook onze gids <a href="/beste-vpn/voor-netflix">beste VPN voor Netflix</a>.',
      ],
    },
    {
      heading: 'Gebruiksgemak',
      body: [
        'De Nederlandstalige apps zijn gebruiksvriendelijk, met aparte profielen voor streaming en torrents. Je beschermt tot <strong>7 apparaten</strong> tegelijk.',
        'Een nadeel is dat CyberGhost <strong>geen split tunneling</strong> biedt op alle platforms. Wel krijg je een ruime <strong>45 dagen geld-terug-garantie</strong>, langer dan bij de meeste concurrenten.',
      ],
    },
    {
      heading: 'Prijs en conclusie',
      body: [
        'CyberGhost kost vanaf <strong>€2,19 per maand</strong> bij een tweejarig abonnement en is daarmee zeer voordelig. De 45-daagse geld-terug-garantie is een groot pluspunt.',
        'Met een eindcijfer van <strong>8.5</strong> is CyberGhost een uitstekende keuze voor streamers die houden van eenvoud en een groot servernetwerk.',
      ],
    },
  ],

  faqs: [
    {
      question: 'Hoeveel servers heeft CyberGhost?',
      answer: 'CyberGhost heeft meer dan 11.500 servers in 100 landen, het grootste netwerk uit onze test. Dat zorgt voor stabiele verbindingen en weinig overvolle servers.',
    },
    {
      question: 'Heeft CyberGhost gespecialiseerde streamingservers?',
      answer: 'Ja, CyberGhost biedt servers die zijn geoptimaliseerd voor specifieke diensten zoals Netflix, Disney+ en Videoland. Je kiest simpelweg de server voor de dienst die je wilt kijken.',
    },
    {
      question: 'Hoe lang is de geld-terug-garantie van CyberGhost?',
      answer: 'CyberGhost biedt een ruime geld-terug-garantie van 45 dagen, langer dan bij de meeste concurrenten. Zo kun je de dienst uitgebreid en risicovrij uitproberen.',
    },
    {
      question: 'Ondersteunt CyberGhost split tunneling?',
      answer: 'Split tunneling is niet op alle platforms beschikbaar bij CyberGhost. Wie deze functie belangrijk vindt, kan beter kijken naar NordVPN of Surfshark.',
    },
    {
      question: 'Wat kost CyberGhost?',
      answer: 'CyberGhost kost vanaf €2,19 per maand bij een tweejarig abonnement, inclusief 45 dagen geld-terug-garantie. Daarmee is het een van de voordeligste VPN\'s.',
    },
  ],

  lastUpdated: 'juni 2026',
  lastUpdatedISO: '2026-06-17',
}

export default cyberghost
