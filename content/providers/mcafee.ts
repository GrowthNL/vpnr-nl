import type { VPNProvider } from './types'

const mcafee: VPNProvider = {
  slug: 'mcafee',
  naam: 'McAfee VPN',
  tagline: 'VPN ingebouwd in het McAfee beveiligingspakket',
  affiliateLink: '/go/mcafee',
  ctaTekst: 'Probeer McAfee VPN',
  logo: '/logos/mcafee.svg',

  scores: {
    overall: 6.8,
    snelheid: 7.0,
    beveiliging: 6.0,
    gebruiksgemak: 8.0,
    prijsKwaliteit: 7.0,
  },

  prijzen: {
    maandelijks: 3.99,
    jaarlijks: 3.99,
    tweeJaar: null,
    gratisPeriode: '30 dagen geld-terug-garantie',
  },

  features: {
    noLogs: false,
    killSwitch: true,
    splitTunneling: false,
    aantalApparaten: 5,
    aantalServers: 2000,
    aantalLanden: 47,
    werktMetNetflix: true,
    werktMetTorrenten: false,
    protocols: ['WireGuard', 'OpenVPN', 'Catapult Hydra'],
    hoofdkantoor: 'Verenigde Staten',
    opgericht: 2019,
  },

  voordelen: [
    'Eenvoudig te gebruiken, geïntegreerd in McAfee beveiligingspakket',
    'Scherpe introductieprijs bij aankoop',
    'Geslaagd voor DNS- en WebRTC-lektests in onafhankelijke tests',
    '30 dagen geld-terug-garantie',
  ],

  nadelen: [
    'Geen echte no-logs policy, privacyrichtlijn laat dataverzameling toe',
    'Kill switch alleen beschikbaar op Windows, niet op iOS of Android',
    'Gevestigd in de VS (Five Eyes), ongunstig voor privacy',
    'Prijzen stijgen drastisch bij verlenging (tot 3× de introductieprijs)',
    'Alleen jaarlijks abonnement beschikbaar, geen maandoptie',
  ],

  verdict:
    'McAfee VPN is handig als je al McAfee-beveiligingssoftware gebruikt, maar als zelfstandige VPN schiet het tekort. De onduidelijke no-logs policy, de beperkte kill switch (alleen Windows) en de Amerikaanse jurisdictie maken het minder geschikt voor wie privacy serieus neemt. De scherpe introductieprijs maakt bij verlenging plaats voor een forse stijging.',

  sections: [
    {
      heading: 'Snelheid: gemiddeld',
      body: [
        'McAfee VPN gebruikt WireGuard en het Catapult Hydra-protocol en haalt een snelheidscijfer van 7.0. Voor browsen en streaming zijn de snelheden voldoende, maar het haalt niet het niveau van gespecialiseerde VPN\'s als <a href="/vpn-reviews/nordvpn">NordVPN</a>.',
        'Het netwerk telt meer dan <strong>2000 servers in 47 landen</strong>, beduidend minder dan de meeste concurrenten.',
      ],
    },
    {
      heading: 'Beveiliging en privacy: belangrijke kanttekeningen',
      body: [
        'Op beveiliging scoort McAfee VPN slechts een 6.0. De VPN biedt encryptie, maar de <strong>kill switch werkt alleen op Windows</strong>. Op andere platforms mis je deze belangrijke bescherming.',
        'Een groot nadeel is dat McAfee <strong>geen strikt no-logs-beleid</strong> hanteert en gegevens kan verzamelen volgens het databeleid. Bovendien zit het hoofdkantoor in de <strong>Verenigde Staten</strong>, onderdeel van de Five Eyes-alliantie. Voor privacybewuste gebruikers is dit een aandachtspunt.',
      ],
    },
    {
      heading: 'Streaming en torrents',
      body: [
        'McAfee VPN kan Netflix deblokkeren, maar de prestaties zijn minder consistent dan bij gespecialiseerde streaming-VPN\'s. <strong>Torrents worden niet ondersteund</strong>, dus voor downloaden is deze VPN geen optie.',
        'Wie vooral wil streamen, vindt betere keuzes in onze gids <a href="/beste-vpn/voor-netflix">beste VPN voor Netflix</a>.',
      ],
    },
    {
      heading: 'Gebruiksgemak en bundel',
      body: [
        'McAfee VPN wordt vaak <strong>meegeleverd in het McAfee-beveiligingspakket</strong>, waardoor het aantrekkelijk lijkt als je al een abonnement hebt. Je beschermt tot <strong>5 apparaten</strong>.',
        'Als losse VPN biedt het echter weinig extra functies en mist het de geavanceerde opties van concurrenten.',
      ],
    },
    {
      heading: 'Prijs en conclusie',
      body: [
        'McAfee VPN kost <strong>€3,99 per maand</strong>, of komt mee in een beveiligingsbundel. Als losse VPN is dat aan de prijs gezien de beperkingen.',
        'Met een eindcijfer van <strong>6.8</strong> raden we McAfee VPN alleen aan als aanvulling op het beveiligingspakket. Voor echte privacy en torrents kijk je beter naar <a href="/vpn-reviews/surfshark">Surfshark</a> of NordVPN.',
      ],
    },
  ],

  faqs: [
    {
      question: 'Ondersteunt McAfee VPN torrents?',
      answer: 'Nee, McAfee VPN ondersteunt geen torrents of P2P-verkeer. Voor downloaden moet je een VPN als NordVPN of Surfshark kiezen.',
    },
    {
      question: 'Houdt McAfee VPN logs bij?',
      answer: 'McAfee hanteert geen strikt no-logs-beleid en kan gegevens verzamelen volgens het databeleid. Het Amerikaanse hoofdkantoor valt bovendien binnen de Five Eyes-alliantie.',
    },
    {
      question: 'Werkt de kill switch van McAfee VPN op alle apparaten?',
      answer: 'Nee, de kill switch van McAfee VPN werkt alleen op Windows. Op andere platforms mis je deze belangrijke beschermingsfunctie.',
    },
    {
      question: 'Werkt McAfee VPN met Netflix?',
      answer: 'McAfee VPN kan Netflix deblokkeren, maar minder consistent dan gespecialiseerde streaming-VPN\'s. Voor betrouwbaar streamen zijn er betere keuzes.',
    },
    {
      question: 'Wat kost McAfee VPN?',
      answer: 'McAfee VPN kost €3,99 per maand of komt mee in het McAfee-beveiligingspakket. Als losse VPN is dat relatief duur gezien de beperkingen.',
    },
  ],

  lastUpdated: 'juni 2026',
  lastUpdatedISO: '2026-06-17',
}

export default mcafee
