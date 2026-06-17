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

  sections: [
    {
      heading: 'Snelheid: redelijk',
      body: [
        'VPN Nederland gebruikt WireGuard en haalt een snelheidscijfer van 7.0. Voor browsen en streaming zijn de snelheden redelijk, maar het kleine servernetwerk kan tot drukte leiden.',
        'Met slechts <strong>ruim 150 servers in 23 landen</strong> is het netwerk veel kleiner dan dat van internationale concurrenten als <a href="/vpn-reviews/cyberghost">CyberGhost</a>.',
      ],
    },
    {
      heading: 'Beveiliging en privacy: aandachtspunten',
      body: [
        'Op beveiliging scoort VPN Nederland een magere 5.5. Hoewel het bedrijf een no-logs-beleid claimt en in <strong>Curaçao</strong> is gevestigd, zijn er belangrijke kanttekeningen.',
        'In <strong>onafhankelijke tests werden DNS- en IP-lekken aangetroffen</strong>, wat betekent dat je echte locatie alsnog zichtbaar kan worden. Dat is een serieus nadeel voor wie de VPN voor privacy gebruikt.',
      ],
    },
    {
      heading: 'Streaming en torrents',
      body: [
        'VPN Nederland kan Netflix deblokkeren en ondersteunt torrents. Door het kleine servernetwerk kunnen de prestaties echter wisselen, vooral tijdens drukke uren.',
        'Voor consistent streamen zijn er betrouwbaardere opties. Zie onze gids <a href="/beste-vpn/voor-streaming">beste VPN voor streaming</a>.',
      ],
    },
    {
      heading: 'Gebruiksgemak en Nederlandse support',
      body: [
        'Een pluspunt is de volledig <strong>Nederlandstalige klantenservice en interface</strong>, prettig voor wie graag in het Nederlands geholpen wordt. Je beschermt een <strong>onbeperkt aantal apparaten</strong>.',
        'De apps zijn eenvoudig, maar bieden minder geavanceerde functies dan internationale concurrenten.',
      ],
    },
    {
      heading: 'Prijs en conclusie',
      body: [
        'VPN Nederland kost <strong>€3,99 per maand</strong> bij een jaarabonnement, met slechts <strong>7 dagen geld-terug-garantie</strong>, korter dan de gangbare 30 dagen.',
        'Met een eindcijfer van <strong>6.5</strong> raden we VPN Nederland alleen aan voor wie per se Nederlandstalige support wil. Voor betere prestaties en privacy zijn <a href="/vpn-reviews/nordvpn">NordVPN</a> en <a href="/vpn-reviews/surfshark">Surfshark</a> de slimmere keuze.',
      ],
    },
  ],

  faqs: [
    {
      question: 'Is VPN Nederland veilig?',
      answer: 'VPN Nederland claimt een no-logs-beleid, maar in onafhankelijke tests zijn DNS- en IP-lekken aangetroffen. Daardoor kan je echte locatie alsnog zichtbaar worden, wat een serieus privacynadeel is.',
    },
    {
      question: 'Heeft VPN Nederland Nederlandstalige support?',
      answer: 'Ja, VPN Nederland biedt een volledig Nederlandstalige interface en klantenservice. Dat is prettig voor gebruikers die graag in het Nederlands geholpen worden.',
    },
    {
      question: 'Hoeveel servers heeft VPN Nederland?',
      answer: 'VPN Nederland heeft ruim 150 servers in 23 landen, veel minder dan internationale concurrenten. Het kleine netwerk kan tijdens drukke uren tot lagere snelheden leiden.',
    },
    {
      question: 'Hoe lang is de geld-terug-garantie van VPN Nederland?',
      answer: 'VPN Nederland biedt slechts 7 dagen geld-terug-garantie, korter dan de gangbare 30 dagen bij concurrenten. Je hebt dus minder tijd om de dienst risicovrij te testen.',
    },
    {
      question: 'Wat kost VPN Nederland?',
      answer: 'VPN Nederland kost €3,99 per maand bij een jaarabonnement. Gezien de beperkte prestaties en privacynadelen zijn NordVPN en Surfshark vaak een betere keuze.',
    },
  ],

  lastUpdated: 'juni 2026',
  lastUpdatedISO: '2026-06-17',
}

export default vpnnederland
