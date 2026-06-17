import type { VPNProvider } from './types'

const protonvpn: VPNProvider = {
  slug: 'protonvpn',
  naam: 'ProtonVPN',
  tagline: 'Privacy-first VPN vanuit Zwitserland',
  affiliateLink: '/go/protonvpn',
  ctaTekst: 'Probeer ProtonVPN',
  logo: '/logos/protonvpn.svg',

  scores: {
    overall: 8.8,
    snelheid: 8.5,
    beveiliging: 9.5,
    gebruiksgemak: 8.3,
    prijsKwaliteit: 8.5,
  },

  prijzen: {
    maandelijks: 9.99,
    jaarlijks: 5.99,
    tweeJaar: null,
    gratisPeriode: '30 dagen geld-terug-garantie',
  },

  features: {
    noLogs: true,
    killSwitch: true,
    splitTunneling: true,
    aantalApparaten: 10,
    aantalServers: 6500,
    aantalLanden: 112,
    werktMetNetflix: true,
    werktMetTorrenten: true,
    protocols: ['WireGuard', 'OpenVPN', 'Stealth'],
    hoofdkantoor: 'Zwitserland',
    opgericht: 2017,
  },

  voordelen: [
    'Gevestigd in Zwitserland, buiten EU/US-jurisdictie',
    'Open-source apps, volledig transparant',
    'Gratis tier beschikbaar zonder datalimiet',
    'Stealth-protocol omzeilt VPN-censuur in China',
    'Onafhankelijk geaudit no-logs beleid (Securitum)',
  ],

  nadelen: [
    'Geen 2-jaarsplan, hogere maandprijs dan concurrenten',
    'Snelheid iets lager dan NordVPN en ExpressVPN',
    'Minder gespecialiseerde streamingservers',
  ],

  verdict:
    'ProtonVPN is de beste keuze voor privacy-bewuste gebruikers. Zwitserland als vestigingsplaats, open-source code en een bewezen no-logs beleid maken het de meest transparante VPN op de markt. Iets duurder, maar ideaal voor wie privacy echt serieus neemt.',

  sections: [
    {
      heading: 'Snelheid: solide prestaties',
      body: [
        'ProtonVPN gebruikt WireGuard en haalt een snelheidscijfer van 8.5. De snelheden zijn ruim voldoende voor streaming en downloaden, al ligt de top net iets lager dan bij <a href="/vpn-reviews/nordvpn">NordVPN</a>.',
        'Met meer dan <strong>6500 servers in 112 landen</strong> heb je veel keuze. De VPN Accelerator-technologie helpt om snelheden op verre servers hoog te houden.',
      ],
    },
    {
      heading: 'Beveiliging en privacy: de privacykampioen',
      body: [
        'Op privacy is ProtonVPN ongeëvenaard met een beveiligingscijfer van 9.5. Alle apps zijn <strong>open source en onafhankelijk geaudit door Securitum</strong>, zodat iedereen de code kan controleren.',
        'Het hoofdkantoor zit in <strong>Zwitserland</strong>, met sterke privacywetgeving. Unieke functies zijn <strong>Secure Core</strong>-servers (verkeer via meerdere landen) en het Stealth-protocol om VPN-blokkades te omzeilen. Het no-logs-beleid is strikt en geverifieerd.',
      ],
    },
    {
      heading: 'Streaming en gratis versie',
      body: [
        'Met een betaald abonnement deblokkeert ProtonVPN Netflix, Disney+ en andere diensten zonder problemen via de Plus-servers.',
        'ProtonVPN biedt als enige in onze top een echte <strong>gratis versie</strong> zonder datalimiet, al is die beperkt tot enkele landen en zonder streaming. Wil je gratis aan de slag? Bekijk <a href="/beste-vpn/gratis">beste gratis VPN</a>.',
      ],
    },
    {
      heading: 'Gebruiksgemak',
      body: [
        'De apps zijn beschikbaar voor alle grote platforms en bieden functies als kill switch, split tunneling en NetShield-advertentieblokkering. Je beschermt tot <strong>10 apparaten</strong> tegelijk.',
        'De interface is wat technischer dan die van concurrenten, maar voor privacybewuste gebruikers biedt het juist extra controle en transparantie.',
      ],
    },
    {
      heading: 'Prijs en conclusie',
      body: [
        'ProtonVPN kost <strong>€5,99 per maand</strong> bij een jaarabonnement; er is geen tweejarig plan. Daarmee is het duurder dan de meeste concurrenten, maar je betaalt voor topbeveiliging en transparantie.',
        'Met een eindcijfer van <strong>8.8</strong> is ProtonVPN de beste keuze voor wie privacy bovenaan zet. Voor de laagste prijs kijk je beter naar <a href="/vpn-reviews/surfshark">Surfshark</a>.',
      ],
    },
  ],

  faqs: [
    {
      question: 'Is ProtonVPN echt gratis te gebruiken?',
      answer: 'Ja, ProtonVPN biedt een gratis versie zonder datalimiet, beschikbaar in enkele landen. De gratis versie ondersteunt geen streaming en heeft minder servers dan de betaalde abonnementen.',
    },
    {
      question: 'Waarom is ProtonVPN goed voor privacy?',
      answer: 'ProtonVPN is open source, onafhankelijk geaudit door Securitum en gevestigd in Zwitserland met strenge privacywetgeving. Secure Core-servers en het Stealth-protocol bieden extra bescherming.',
    },
    {
      question: 'Werkt ProtonVPN met Netflix?',
      answer: 'Ja, met een betaald abonnement deblokkeert ProtonVPN Netflix, Disney+ en andere streamingdiensten via de Plus-servers. De gratis versie ondersteunt geen streaming.',
    },
    {
      question: 'Wat zijn Secure Core-servers?',
      answer: 'Secure Core stuurt je verkeer via meerdere servers in privacyvriendelijke landen voordat het het internet bereikt. Dit beschermt tegen netwerkaanvallen en gecompromitteerde servers.',
    },
    {
      question: 'Wat kost ProtonVPN?',
      answer: 'ProtonVPN kost €5,99 per maand bij een jaarabonnement; een tweejarig plan is er niet. Daarmee is het duurder dan de meeste concurrenten, maar je krijgt topbeveiliging.',
    },
  ],

  lastUpdated: 'juni 2026',
  lastUpdatedISO: '2026-06-17',
}

export default protonvpn
