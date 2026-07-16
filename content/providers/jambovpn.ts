import type { VPNProvider } from './types'

const jambovpn: VPNProvider = {
  slug: 'jambovpn',
  naam: 'JamboVPN',
  tagline: 'Nederlandse VPN zonder vaste contracten',
  affiliateLink: '/go/jambovpn',
  ctaTekst: 'Probeer JamboVPN',
  logo: '/logos/jambovpn.svg',

  scores: {
    overall: 7.0,
    snelheid: 7.5,
    beveiliging: 6.5,
    gebruiksgemak: 5.5,
    prijsKwaliteit: 8.5,
  },

  prijzen: {
    maandelijks: 2.75,
    jaarlijks: 2.30,
    tweeJaar: null,
    gratisPeriode: '7 dagen geld-terug-garantie',
  },

  features: {
    noLogs: true,
    killSwitch: false,
    splitTunneling: false,
    aantalApparaten: 5,
    aantalServers: 84,
    aantalLanden: 45,
    werktMetNetflix: false,
    werktMetTorrenten: false,
    protocols: ['WireGuard', 'OpenVPN'],
    hoofdkantoor: 'Nederland (Almere)',
    opgericht: 2007,
  },

  voordelen: [
    'Nederlands bedrijf (Goomla B.V., Almere) met volledige GDPR-compliance',
    'Flexibele plannen zonder automatische verlenging, zelfs dagabonnementen mogelijk',
    'WireGuard-protocol voor hoge snelheid en lage latency',
    'RAM-servers: gegevens worden bij elke herstart automatisch gewist',
    'Duidelijk en gedetailleerd no-logs-beleid met specifieke categorieën',
    'Zeer lage prijs: vanaf ca. €2,30 per maand bij jaarabonnement',
  ],

  nadelen: [
    'Geen eigen app: je installeert de standaard WireGuard-client en importeert een configuratiebestand',
    'Geen kill switch en geen DNS-lekbeveiliging door het ontbreken van een eigen app',
    'Geen split tunneling beschikbaar',
    'Klein servernetwerk (84 servers in 45 landen) vergeleken met grote spelers',
    'No-logs-beleid niet onafhankelijk geauditeerd',
    'Nederland valt onder de 9 Eyes-inlichtingenalliantie',
    'Slechts 7 dagen geld-terug-garantie (marktstandaard is 30 dagen)',
  ],

  verdict:
    'JamboVPN is een opvallende keuze: het is een echt Nederlands bedrijf uit Almere, met een eerlijk privacybeleid, RAM-servers en extreem flexibele plannen zonder automatische verlenging. Ideaal voor reizigers die af en toe een VPN nodig hebben. Het grote nadeel is het ontbreken van een eigen app: je moet zelf de WireGuard-client installeren en een configuratiebestand importeren, zonder kill switch of DNS-lekbeveiliging. Voor dagelijks en zorgeloos gebruik zijn <a href="/vpn-reviews/nordvpn">NordVPN</a> of <a href="/vpn-reviews/protonvpn">ProtonVPN</a> de betere keuze.',

  sections: [
    {
      heading: 'Snelheid: snel dankzij WireGuard',
      body: [
        'JamboVPN gebruikt het <strong>WireGuard-protocol</strong>, dat van nature sneller is dan het oudere OpenVPN. Alle servers draaien op <strong>1 Gbps-poorten</strong> zonder bandbreedtebeperking. Daarmee scoort de dienst een 7.5 op snelheid.',
        'Het netwerk bestaat uit <strong>84 servers in 45 landen</strong>, wat klein is vergeleken met NordVPN (6400+) of <a href="/vpn-reviews/cyberghost">CyberGhost</a>. Tijdens piekuren kan de serverbelasting hoger uitvallen. Voor regulier browsen en videostreamen zijn de snelheden in de praktijk doorgaans voldoende.',
      ],
    },
    {
      heading: 'Beveiliging en privacy: Nederlands bedrijf, kanttekeningen',
      body: [
        'JamboVPN scoort een 6.5 op beveiliging. Positief: het bedrijf, <strong>Goomla B.V. uit Almere</strong>, valt volledig onder de AVG (GDPR) en het toezicht van de Autoriteit Persoonsgegevens. Het privacybeleid is gedetailleerd en legt expliciet vast welke gegevens <em>niet</em> worden bijgehouden: geen verkeerslogboeken, geen DNS-logs, geen verbindingstijdstempels en geen IP-adressen van je sessies. De servers zijn RAM-gebaseerd: alle data wordt bij een herstart gewist.',
        'Kritische kanttekeningen: het <strong>no-logs-beleid is niet onafhankelijk geauditeerd</strong> door een externe partij zoals Cure53 of Deloitte. Bovendien valt Nederland onder de <strong>9 Eyes-inlichtingenalliantie</strong>, een punt dat privacy-bewuste gebruikers in overweging moeten nemen. Providers gevestigd in Panama (NordVPN) of Zwitserland (ProtonVPN) bieden in dat opzicht een sterkere jurisdictiebescherming.',
      ],
    },
    {
      heading: 'Apps en gebruiksgemak: geen eigen app',
      body: [
        'Dit is het grootste minpunt van JamboVPN. De dienst heeft <strong>geen eigen applicatie</strong>. In plaats daarvan ontvang je een WireGuard-configuratiebestand (.conf) of QR-code die je importeert in de gratis, open-source WireGuard-app. Die is beschikbaar voor Windows, macOS, iOS, Android, Linux, Amazon Firestick en Android TV.',
        'Door het ontbreken van een eigen app zijn er <strong>geen geavanceerde functies</strong> beschikbaar: geen kill switch, geen split tunneling en geen automatische verbinding bij onbetrouwbaar wifi. Voor technisch ingestelde gebruikers is dit prima te beheren, maar beginners zullen de handmatige configuratie een drempel vinden. JamboVPN biedt bescherming voor <strong>5 apparaten tegelijk</strong>.',
      ],
    },
    {
      heading: 'Prijs en conclusie',
      body: [
        'JamboVPN biedt een uniek prijsmodel: je kiest zelf de looptijd, van <strong>1 dag ($0,29) tot 1 jaar ($29,99)</strong>, zonder verplichte automatische verlenging. Bij een jaarabonnement komt dat neer op <strong>ca. €2,30 per maand</strong>, één van de laagste prijzen in de markt. Op gebruiksgemak na scoort de dienst een 8.5 op prijs-kwaliteitsverhouding.',
        'Met een eindcijfer van <strong>7.0</strong> is JamboVPN een interessante keuze voor technisch vaardige gebruikers en reizigers die flexibel en goedkoop een VPN willen van een <strong>echt Nederlands bedrijf</strong>. Wie een volledig uitgeruste VPN wil met eigen app, kill switch en geauditeerde beveiliging, kiest beter voor <a href="/vpn-reviews/nordvpn">NordVPN</a> of <a href="/vpn-reviews/protonvpn">ProtonVPN</a>.',
      ],
    },
  ],

  faqs: [
    {
      question: 'Heeft JamboVPN een eigen app?',
      answer: 'Nee, JamboVPN heeft geen eigen applicatie. Je installeert de gratis WireGuard-app (beschikbaar voor Windows, macOS, iOS, Android en Linux) en importeert een configuratiebestand of QR-code die JamboVPN verstrekt. Dat werkt prima, maar betekent dat er geen kill switch of split tunneling beschikbaar is.',
    },
    {
      question: 'Waar is JamboVPN gevestigd?',
      answer: 'JamboVPN wordt beheerd door Goomla B.V., een bedrijf geregistreerd in Almere, Nederland (KvK 39101067). De dienst valt volledig onder de AVG (GDPR) en het toezicht van de Nederlandse Autoriteit Persoonsgegevens. Let op: Nederland is lid van de 9 Eyes-inlichtingenalliantie.',
    },
    {
      question: 'Houdt JamboVPN logs bij?',
      answer: 'JamboVPN claimt een strikt no-logs-beleid: er worden geen verkeersgegevens, DNS-logs, verbindingstijdstempels of IP-adressen van sessies bijgehouden. De servers zijn RAM-gebaseerd, zodat data bij elke herstart wordt gewist. Dit beleid is echter nog niet onafhankelijk geauditeerd door een externe partij.',
    },
    {
      question: 'Heeft JamboVPN een geld-terug-garantie?',
      answer: 'Ja, JamboVPN biedt 7 dagen geld-terug-garantie op de eerste aankoop, voor iedere reden. Dit is korter dan de gangbare 30 dagen bij veel concurrenten. De terugbetaling wordt verwerkt via Stripe, doorgaans binnen 5 tot 10 werkdagen.',
    },
    {
      question: 'Wat kost JamboVPN?',
      answer: 'JamboVPN hanteert een flexibel prijsmodel zonder automatische verlenging. Je kiest zelf de looptijd: van 1 dag ($0,29) tot 1 jaar ($29,99, ca. €2,30 per maand). Prijzen zijn in USD; Stripe handelt de valutaomrekening af bij betaling. Er is geen tweejarig abonnement beschikbaar.',
    },
  ],

  lastUpdated: 'juli 2026',
  lastUpdatedISO: '2026-07-15',
}

export default jambovpn
