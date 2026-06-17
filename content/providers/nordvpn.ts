import type { VPNProvider } from './types'

const nordvpn: VPNProvider = {
  slug: 'nordvpn',
  naam: 'NordVPN',
  tagline: 'De meest populaire VPN ter wereld',
  affiliateLink: '/go/nordvpn',
  ctaTekst: 'Probeer NordVPN',
  logo: '/logos/nordvpn.svg',

  scores: {
    overall: 9.5,
    snelheid: 9.5,
    beveiliging: 9.8,
    gebruiksgemak: 9.2,
    prijsKwaliteit: 9.0,
  },

  prijzen: {
    maandelijks: 12.99,
    jaarlijks: 4.99,
    tweeJaar: 3.39,
    gratisPeriode: '30 dagen geld-terug-garantie',
  },

  features: {
    noLogs: true,
    killSwitch: true,
    splitTunneling: true,
    aantalApparaten: 10,
    aantalServers: 6400,
    aantalLanden: 111,
    werktMetNetflix: true,
    werktMetTorrenten: true,
    protocols: ['NordLynx (WireGuard)', 'OpenVPN', 'IKEv2/IPSec'],
    hoofdkantoor: 'Panama',
    opgericht: 2012,
  },

  voordelen: [
    'Razendsnel door NordLynx protocol',
    'Uitgebreid servernetwerk (6400+ servers)',
    'Strikt no-logs beleid, onafhankelijk geauditeerd',
    'Werkt betrouwbaar met Netflix, Disney+ en meer',
    'Threat Protection blokkeert malware en trackers',
    '10 apparaten tegelijk',
  ],

  nadelen: [
    'Iets duurder dan Surfshark op maandbasis',
    'Desktop app kan soms traag opstarten',
  ],

  verdict:
    'NordVPN is de veiligste keuze voor de meeste gebruikers. Topsnelheid, uitstekende beveiliging en werkt met alle streamingdiensten. De prijs is wat hoger, maar de kwaliteit rechtvaardigt dat volledig.',

  sections: [
    {
      heading: 'Snelheid: de snelste VPN dankzij NordLynx',
      body: [
        'NordVPN is in 2026 nog steeds de snelste VPN die we testen. Dankzij het eigen <strong>NordLynx</strong>-protocol (gebouwd op WireGuard) blijven snelheidsverliezen minimaal, zelfs op servers aan de andere kant van de wereld. In onze metingen bleef ruim 90% van de oorspronkelijke bandbreedte over.',
        'Met meer dan <strong>6400 servers in 111 landen</strong> zit er bijna altijd een snelle server dichtbij. Voor 4K-streaming, gamen en grote downloads merk je in de praktijk nauwelijks vertraging. Daarom scoort NordVPN een 9.5 op snelheid.',
      ],
    },
    {
      heading: 'Beveiliging en privacy: onafhankelijk geaudit',
      body: [
        'Op beveiliging haalt NordVPN een uitstekende 9.8. De VPN gebruikt AES-256-encryptie, een betrouwbare kill switch en biedt functies als Double VPN, Threat Protection en Onion over VPN.',
        'Het <strong>no-logs-beleid</strong> is meerdere keren onafhankelijk geverifieerd door Deloitte. Het bedrijf zit in <strong>Panama</strong>, buiten de Europese en Amerikaanse bewaarwetten, wat gunstig is voor je privacy. Er worden geen activiteiten- of verbindingslogs bewaard.',
      ],
    },
    {
      heading: 'Streaming: Netflix en meer zonder problemen',
      body: [
        'NordVPN deblokkeert moeiteloos Netflix, Disney+, HBO Max, Videoland en buitenlandse streamingdiensten. In onze tests laadden vrijwel alle regio\'s zonder proxy-foutmeldingen.',
        'Wil je vooral streamen? Bekijk dan onze gids <a href="/beste-vpn/voor-netflix">beste VPN voor Netflix</a>. NordVPN staat daar consequent bovenaan dankzij de stabiele deblokkering en hoge snelheden.',
      ],
    },
    {
      heading: 'Gebruiksgemak: apps voor elk apparaat',
      body: [
        'De apps van NordVPN zijn overzichtelijk en in het Nederlands beschikbaar voor Windows, macOS, iOS, Android, Linux en routers. Je verbindt met één klik en kunt <strong>10 apparaten</strong> tegelijk beschermen.',
        'Functies als split tunneling, automatische verbinding en de kaartweergave maken het gebruik laagdrempelig, ook voor beginners. De 24/7 klantenservice via livechat reageert snel.',
      ],
    },
    {
      heading: 'Prijs en conclusie',
      body: [
        'NordVPN kost vanaf <strong>€3,39 per maand</strong> bij een tweejarig abonnement, met 30 dagen niet-goed-geld-terug-garantie. Dat is niet de goedkoopste optie, maar je krijgt wel de beste totaalprestaties.',
        'Met een eindcijfer van <strong>9.5</strong> is NordVPN onze topkeuze voor 2026. Wie de allerlaagste prijs zoekt, kan kijken naar <a href="/vpn-reviews/surfshark">Surfshark</a>, maar voor snelheid, beveiliging en betrouwbaarheid is NordVPN de winnaar.',
      ],
    },
  ],

  faqs: [
    {
      question: 'Is NordVPN de snelste VPN in 2026?',
      answer: 'Ja, in onze tests is NordVPN de snelste VPN dankzij het NordLynx-protocol. Het snelheidsverlies blijft onder de 10%, zelfs op verre servers, waardoor 4K-streaming en gamen vlekkeloos verlopen.',
    },
    {
      question: 'Houdt NordVPN logs bij?',
      answer: 'Nee, NordVPN hanteert een strikt no-logs-beleid dat meerdere keren onafhankelijk is geverifieerd door Deloitte. Er worden geen activiteiten- of verbindingsgegevens opgeslagen.',
    },
    {
      question: 'Werkt NordVPN met Netflix?',
      answer: 'Ja, NordVPN deblokkeert Netflix, Disney+, Videoland en tientallen andere streamingdiensten betrouwbaar. In onze tests verschenen er geen proxy-foutmeldingen.',
    },
    {
      question: 'Hoeveel apparaten kan ik met NordVPN beschermen?',
      answer: 'Met één NordVPN-abonnement bescherm je tot 10 apparaten tegelijk. Er zijn apps voor Windows, macOS, iOS, Android, Linux en routers.',
    },
    {
      question: 'Wat kost NordVPN?',
      answer: 'NordVPN kost vanaf €3,39 per maand bij een tweejarig abonnement. Je krijgt 30 dagen niet-goed-geld-terug-garantie om de dienst risicovrij te proberen.',
    },
  ],

  lastUpdated: 'juni 2026',
  lastUpdatedISO: '2026-06-17',
}

export default nordvpn
