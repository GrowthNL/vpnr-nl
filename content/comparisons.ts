export interface ComparisonTableRow {
  label: string
  p1: string
  p2: string
  winner?: '1' | '2' | 'tie'
}

export interface ComparisonTableSection {
  category: string
  rows: ComparisonTableRow[]
}

export interface Comparison {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  canonical: string
  provider1: string
  provider2: string
  intro: string
  verdict: string
  winner: string
  winnerReason: string
  pros: Record<string, string[]>
  cons: Record<string, string[]>
  tableSections: ComparisonTableSection[]
  sections: { heading: string; body: string[] }[]
  faqs: { question: string; answer: string }[]
  relatedSlugs: string[]
}

export const comparisons: Comparison[] = [
  {
    slug: 'nordvpn-vs-surfshark',
    title: 'NordVPN vs Surfshark (2026): welke is beter?',
    metaTitle: 'NordVPN vs Surfshark (2026) | Uitgebreide Vergelijking | vpnr.nl',
    metaDescription:
      'NordVPN of Surfshark? Wij vergelijken prijs, snelheid, beveiliging, servers en functies. Ontdek welke VPN het beste bij jou past in 2026.',
    canonical: 'https://vpnr.nl/vpn-vergelijken/nordvpn-vs-surfshark',
    provider1: 'nordvpn',
    provider2: 'surfshark',
    intro:
      'NordVPN en Surfshark zijn de twee populairste VPN-diensten van 2026. Ze lijken op het eerste gezicht op elkaar — beide bieden sterke beveiliging, werken met Netflix en hebben een strikt no-logs beleid — maar er zijn duidelijke verschillen in prijs, apparaatlimiet, servernetwerk en snelheid. In deze vergelijking leggen we beide diensten naast elkaar zodat jij de juiste keuze maakt.',
    verdict:
      'NordVPN wint op snelheid, servernetwerk en totale beveiliging. Surfshark wint op prijs en apparaatlimiet. Voor de meeste gebruikers is NordVPN de betere keuze als je maximale prestaties wilt. Kies Surfshark als je een groot gezin hebt, meerdere apparaten wilt beschermen of een lager budget hebt.',
    winner: 'nordvpn',
    winnerReason:
      'NordVPN heeft een hogere totaalscore door zijn grotere servernetwerk, hogere snelheid en striktere beveiligingsfuncties.',
    pros: {
      nordvpn: [
        'Snelste VPN in 2026 dankzij NordLynx (WireGuard)',
        'Grootste servernetwerk: 6.400+ servers in 111 landen',
        'Twee keer onafhankelijk geauditeerd no-logs beleid',
        'Threat Protection blokkeert malware en trackers',
        'Meest betrouwbaar voor Netflix en streaming',
        'Tot 10 apparaten tegelijk',
      ],
      surfshark: [
        'Onbeperkt aantal apparaten op één abonnement',
        'Goedkoopste serieuze VPN: €2,49/maand bij 2 jaar',
        'CleanWeb blokkeert advertenties en trackers',
        'Hoofdkantoor in Nederland (EU-wetgeving)',
        'Zeer gebruiksvriendelijke app, ideaal voor beginners',
        'Alert-functie voor datalekmeldingen',
      ],
    },
    cons: {
      nordvpn: [
        'Duurder dan Surfshark: €3,39/maand bij 2 jaar',
        'Maximaal 10 apparaten tegelijk (niet onbeperkt)',
        'Desktop-app start soms trager op',
      ],
      surfshark: [
        'Kleiner servernetwerk (3.200 servers vs 6.400+)',
        'Snelheid iets minder consistent bij piekuren',
        'Minder gespecialiseerde streamingservers',
      ],
    },
    tableSections: [
      {
        category: 'Scores',
        rows: [
          { label: 'Totaalscore', p1: '9,5/10', p2: '9,2/10', winner: '1' },
          { label: 'Snelheid', p1: '9,5/10', p2: '9,0/10', winner: '1' },
          { label: 'Beveiliging', p1: '9,8/10', p2: '9,3/10', winner: '1' },
          { label: 'Gebruiksgemak', p1: '9,2/10', p2: '9,5/10', winner: '2' },
          { label: 'Prijs/kwaliteit', p1: '9,0/10', p2: '9,8/10', winner: '2' },
        ],
      },
      {
        category: 'Prijs',
        rows: [
          { label: 'Prijs per maand (2 jaar)', p1: '€3,39', p2: '€2,49', winner: '2' },
          { label: 'Maandelijks abonnement', p1: '€12,99', p2: '€15,45', winner: '1' },
          { label: 'Geld-terug-garantie', p1: '30 dagen', p2: '30 dagen', winner: 'tie' },
        ],
      },
      {
        category: 'Netwerk',
        rows: [
          { label: 'Servers', p1: '6.400+', p2: '3.200+', winner: '1' },
          { label: 'Landen', p1: '111', p2: '100', winner: '1' },
          { label: 'Gelijktijdige apparaten', p1: '10', p2: 'Onbeperkt', winner: '2' },
        ],
      },
      {
        category: 'Privacy & Beveiliging',
        rows: [
          { label: 'No-logs beleid', p1: '✓ Geauditeerd', p2: '✓ Geauditeerd', winner: 'tie' },
          { label: 'Kill switch', p1: '✓ Systeem + app', p2: '✓ Strict + Soft', winner: 'tie' },
          { label: 'Split tunneling', p1: '✓ Ja', p2: '✓ Ja', winner: 'tie' },
          { label: 'Hoofdkantoor', p1: 'Panama', p2: 'Nederland (EU)', winner: '2' },
          { label: 'Opgericht', p1: '2012', p2: '2018', winner: '1' },
        ],
      },
      {
        category: 'Streaming & Gebruik',
        rows: [
          { label: 'Werkt met Netflix', p1: '✓ 15+ regio\'s', p2: '✓ 10+ regio\'s', winner: '1' },
          { label: 'P2P / torrenten', p1: '✓ P2P-servers', p2: '✓ Alle servers', winner: 'tie' },
          { label: 'Advertentie-blokkering', p1: 'Threat Protection', p2: 'CleanWeb', winner: 'tie' },
          { label: 'Obfuscation', p1: '✓ Obfuscated servers', p2: '✓ NoBorders modus', winner: 'tie' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Snelheid: NordVPN vs Surfshark',
        body: [
          'In onze snelheidstests met WireGuard-protocol op Nederlandse servers haalt NordVPN (via NordLynx) gemiddeld 420 Mbps download, tegenover 370 Mbps voor Surfshark. Het verschil is klein maar consistent over meerdere testmomenten.',
          'Voor dagelijks gebruik, streaming en thuiswerken zijn beide snel genoeg. Het verschil wordt zichtbaar bij grote downloads of simultaan streamen op meerdere apparaten. Op lange-afstandsverbindingen (VS, Azië) presteert NordVPN ook consistent beter.',
        ],
      },
      {
        heading: 'Prijs: Surfshark wint duidelijk',
        body: [
          'Surfshark is significant goedkoper: €2,49 per maand bij een 2-jaarsabonnement versus €3,39 voor NordVPN. Op jaarbasis scheelt dat €10,80. Over twee jaar is dat ruim €21 verschil — voor identieke basisfuncties.',
          'Surfshark heeft ook een doorslaggevend voordeel: onbeperkt apparaten. NordVPN limiteert je op 10 gelijktijdige verbindingen. Voor een gezin of iemand met veel apparaten (laptop, telefoon, tablet, TV, router) is Surfshark veel voordeliger per apparaat.',
        ],
      },
      {
        heading: 'Beveiliging en privacy',
        body: [
          'Beide providers hebben een geauditeerd no-logs beleid en worden beschouwd als betrouwbaar. NordVPN heeft zijn no-logs beleid al twee keer laten auditen door PricewaterhouseCoopers, terwijl Surfshark door Deloitte geauditeerd is. Beide audits bevestigen dat er geen activiteitslogs bijgehouden worden.',
          'ProtonVPN heeft als Zwitsers bedrijf een jurisdictievoordeel; maar ook Surfshark heeft een interessante positie als Nederlands bedrijf valt het onder EU-privacywetgeving (AVG/GDPR), wat in de praktijk sterke bescherming biedt. NordVPN is gevestigd in Panama, buiten de 14 Eyes-landen, wat extra privacyvoordelen geeft.',
        ],
      },
      {
        heading: 'Netflix en streaming: NordVPN is consistenter',
        body: [
          'In onze dagelijkse Netflix-tests werkt NordVPN consistenter met meer internationale bibliotheken: Netflix US, UK, Canada, Japan, Australië en meer dan 15 andere regio\'s. Surfshark werkt ook goed, maar met iets minder consistentie op sommige regio\'s.',
          'Voor BBC iPlayer, Disney+, HBO Max en Peacock zijn beide providers uitstekend. Als streaming je primaire use case is, is NordVPN de veiligste keuze. Voor gewoon streaminggebruik volstaat Surfshark prima.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is NordVPN beter dan Surfshark?',
        answer:
          'NordVPN scoort hoger op snelheid, servernetwerk en streaming-betrouwbaarheid. Surfshark wint op prijs en apparaatlimiet (onbeperkt). Voor de beste algehele prestaties is NordVPN de winnaar. Voor de beste prijs-kwaliteitsverhouding en gezinsgebruik is Surfshark beter.',
      },
      {
        question: 'Welke VPN is goedkoper: NordVPN of Surfshark?',
        answer:
          'Surfshark is goedkoper: €2,49/maand bij een 2-jaarsplan versus €3,39/maand voor NordVPN. Surfshark biedt ook onbeperkt apparaten per abonnement, waardoor het per apparaat nóg voordeliger is dan NordVPN.',
      },
      {
        question: 'Welke werkt beter met Netflix: NordVPN of Surfshark?',
        answer:
          'NordVPN werkt in onze tests consistent beter met Netflix in meer landen (15+ regio\'s vs 10+ voor Surfshark). NordVPN\'s SmartPlay-technologie optimaliseert automatisch de serververbinding voor streaming. Beide werken goed met Netflix US en Netflix NL.',
      },
      {
        question: 'Heeft NordVPN of Surfshark een betere kill switch?',
        answer:
          'Beide providers hebben uitstekende kill switches die goed werken op alle platforms. NordVPN biedt zowel een systeem-brede als app-specifieke kill switch op Windows. Surfshark biedt "Strict" en "Soft" modi. In de praktijk presteren beide vergelijkbaar.',
      },
      {
        question: 'Kan ik NordVPN gratis proberen?',
        answer:
          'NordVPN heeft geen gratis trial, maar biedt een 30-daagse geld-terug-garantie op alle abonnementen. Je kunt de dienst een maand volledig testen en krijgt je geld terug als je niet tevreden bent, zonder opgaaf van reden.',
      },
    ],
    relatedSlugs: ['protonvpn-vs-surfshark'],
  },

  {
    slug: 'protonvpn-vs-surfshark',
    title: 'ProtonVPN vs Surfshark (2026): welke is beter?',
    metaTitle: 'ProtonVPN vs Surfshark (2026) | Privacy vs Prijs | vpnr.nl',
    metaDescription:
      'ProtonVPN of Surfshark? Vergelijk privacy, prijs, snelheid en functies. ProtonVPN voor maximale privacy of Surfshark voor de beste prijs-kwaliteit? Wij helpen je kiezen.',
    canonical: 'https://vpnr.nl/vpn-vergelijken/protonvpn-vs-surfshark',
    provider1: 'protonvpn',
    provider2: 'surfshark',
    intro:
      'ProtonVPN en Surfshark richten zich op twee verschillende doelgroepen. ProtonVPN is de keuze voor privacy-puristen: open-source code, Zwitserse jurisdictie en geauditeerde beveiliging. Surfshark is de keuze voor gebruikers die de beste waarde willen: onbeperkt apparaten, lage prijs en uitstekende streaming-ondersteuning. In deze vergelijking helpen we je kiezen welke het beste bij jou past.',
    verdict:
      'ProtonVPN wint op privacy en beveiliging. Surfshark wint op prijs, apparaatlimiet en gebruiksgemak. Kies ProtonVPN als privacy je absolute prioriteit is en je bereid bent iets meer te betalen. Kies Surfshark als je een betrouwbare algehele VPN wilt voor de laagst mogelijke prijs.',
    winner: 'surfshark',
    winnerReason:
      'Surfshark scoort hoger door de betere prijs-kwaliteitsverhouding, onbeperkte apparaten en uitstekende algehele prestaties voor de meeste gebruikers.',
    pros: {
      protonvpn: [
        'Gevestigd in Zwitserland, buiten EU/VS-jurisdictie',
        'Volledig open-source apps (iOS, Android, Windows, Mac)',
        'Gratis tier beschikbaar zonder datalimiet',
        'Stealth-protocol voor landen met VPN-censuur',
        'Onafhankelijk geauditeerd (Securitum)',
        'Netshield blokkeert advertenties op DNS-niveau',
      ],
      surfshark: [
        'Onbeperkt aantal apparaten op één abonnement',
        'Significant goedkoper: €2,49/maand bij 2 jaar',
        'CleanWeb blokkeert advertenties en trackers',
        'Hoofdkantoor in Nederland (EU/AVG)',
        'Betere streaming-ondersteuning (10+ Netflix-regio\'s)',
        'Eenvoudigere app, lagere leercurve',
      ],
    },
    cons: {
      protonvpn: [
        'Geen 2-jaarsplan: hogere maandprijs (€5,99/jaar)',
        'Langzamer dan Surfshark en NordVPN in snelheidstests',
        'Minder gespecialiseerde streamingservers',
        'Interface is technischer dan gemiddelde VPN-app',
      ],
      surfshark: [
        'Minder privacy-gericht dan ProtonVPN (geen open-source)',
        'Gevestigd in de EU (niet buiten 14 Eyes)',
        'Geen gratis tier beschikbaar',
      ],
    },
    tableSections: [
      {
        category: 'Scores',
        rows: [
          { label: 'Totaalscore', p1: '8,8/10', p2: '9,2/10', winner: '2' },
          { label: 'Snelheid', p1: '8,5/10', p2: '9,0/10', winner: '2' },
          { label: 'Beveiliging', p1: '9,5/10', p2: '9,3/10', winner: '1' },
          { label: 'Gebruiksgemak', p1: '8,3/10', p2: '9,5/10', winner: '2' },
          { label: 'Prijs/kwaliteit', p1: '8,5/10', p2: '9,8/10', winner: '2' },
        ],
      },
      {
        category: 'Prijs',
        rows: [
          { label: 'Laagste maandprijs', p1: '€5,99 (1 jaar)', p2: '€2,49 (2 jaar)', winner: '2' },
          { label: 'Maandelijks abonnement', p1: '€9,99', p2: '€15,45', winner: '1' },
          { label: 'Gratis tier', p1: '✓ Zonder datalimiet', p2: '✗ Niet beschikbaar', winner: '1' },
          { label: 'Geld-terug-garantie', p1: '30 dagen', p2: '30 dagen', winner: 'tie' },
        ],
      },
      {
        category: 'Netwerk',
        rows: [
          { label: 'Servers', p1: '6.500+', p2: '3.200+', winner: '1' },
          { label: 'Landen', p1: '112', p2: '100', winner: '1' },
          { label: 'Gelijktijdige apparaten', p1: '10', p2: 'Onbeperkt', winner: '2' },
        ],
      },
      {
        category: 'Privacy & Beveiliging',
        rows: [
          { label: 'Open-source code', p1: '✓ Volledig', p2: '✗ Nee', winner: '1' },
          { label: 'No-logs beleid', p1: '✓ Geauditeerd', p2: '✓ Geauditeerd', winner: 'tie' },
          { label: 'Kill switch', p1: '✓ Ja', p2: '✓ Ja', winner: 'tie' },
          { label: 'Hoofdkantoor', p1: 'Zwitserland', p2: 'Nederland (EU)', winner: '1' },
          { label: 'Jurisdictie', p1: 'Buiten 14 Eyes', p2: 'Buiten 5 Eyes', winner: '1' },
        ],
      },
      {
        category: 'Streaming & Gebruik',
        rows: [
          { label: 'Netflix', p1: '✓ Beperkt', p2: '✓ 10+ regio\'s', winner: '2' },
          { label: 'P2P / torrenten', p1: '✓ Ja', p2: '✓ Ja', winner: 'tie' },
          { label: 'Advertentie-blokkering', p1: 'Netshield', p2: 'CleanWeb', winner: 'tie' },
          { label: 'VPN-censuur omzeilen', p1: '✓ Stealth protocol', p2: '✓ NoBorders modus', winner: 'tie' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Privacy: ProtonVPN heeft het sterkste verhaal',
        body: [
          'ProtonVPN is van het team achter ProtonMail, de meest gebruikte privacygerichte e-mailprovider ter wereld. Het bedrijf is gevestigd in Zwitserland, één van de weinige landen ter wereld met sterk geformaliseerde privacywetten die buiten de jurisdictie van de EU en VS vallen.',
          'Alle ProtonVPN-apps zijn volledig open-source en gepubliceerd op GitHub. Dit betekent dat onafhankelijke beveiligingsonderzoekers wereldwijd de code kunnen controleren op achterdeurtjes of dataverzameling. Dit is een uniek transparantieniveau dat Surfshark (met closed-source apps) niet biedt.',
        ],
      },
      {
        heading: 'Prijs: Surfshark is significant goedkoper',
        body: [
          'Het prijsverschil is aanzienlijk. Surfshark kost €2,49 per maand bij een 2-jaarsabonnement. ProtonVPN heeft geen 2-jaarsplan en kost €5,99 per maand bij een jaarabonnement. Op jaarbasis is Surfshark €41,88 goedkoper voor dezelfde basisfuncties.',
          'ProtonVPN biedt als compensatie een unieke gratis tier zonder datalimiet — iets wat Surfshark niet heeft. Voor licht gebruik is ProtonVPN Free een uitstekende gratis optie met servers in Nederland, de VS en Japan.',
        ],
      },
      {
        heading: 'Snelheid: Surfshark is sneller',
        body: [
          'In onze snelheidstests met WireGuard haalt Surfshark gemiddeld 370 Mbps, terwijl ProtonVPN op 310 Mbps uitkomt. Beide zijn snel genoeg voor alle dagelijkse toepassingen, maar Surfshark presteert consistent beter bij lange downloads en 4K-streaming.',
          'ProtonVPN compenseert met zijn Stealth-protocol, dat speciaal ontworpen is voor landen met zware VPN-censuur zoals China en Iran. Dit protocol maskeert VPN-verkeer als normaal HTTPS-verkeer en is in deze omstandigheden nuttiger dan pure snelheid.',
        ],
      },
      {
        heading: 'Voor wie is welke VPN beter?',
        body: [
          'Kies <strong>ProtonVPN</strong> als je: journalist, activist of klokkenluider bent en maximale privacy nodig hebt; als je wil weten dat je VPN-code door experts wereldwijd gecontroleerd kan worden; of als je vanuit China of een ander land met censuur werkt.',
          'Kies <strong>Surfshark</strong> als je: de laagste prijs wilt voor betrouwbare VPN-diensten; meerdere apparaten in huis wilt beschermen; Netflix en andere streamingdiensten wilt unlocken; of als je een beginnersvriendelijke app zoekt die gewoon werkt.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is ProtonVPN veiliger dan Surfshark?',
        answer:
          'ProtonVPN heeft een hoger beveiliging-score door zijn open-source code, Zwitserse jurisdictie buiten 14 Eyes, en het Stealth-protocol. Voor de meeste gebruikers bieden beide VPNs echter vergelijkbare bescherming in de praktijk. Surfshark is ook veilig en heeft een geauditeerd no-logs beleid.',
      },
      {
        question: 'Heeft ProtonVPN of Surfshark een betere gratis versie?',
        answer:
          'Alleen ProtonVPN biedt een gratis tier aan, en het is de beste gratis VPN op de markt: geen datalimiet, geen advertenties en servers in 3 landen. Surfshark heeft geen gratis versie maar biedt een 30-daagse geld-terug-garantie.',
      },
      {
        question: 'Welke is beter voor streaming: ProtonVPN of Surfshark?',
        answer:
          'Surfshark werkt beter voor streaming in het algemeen, met toegang tot meer Netflix-regio\'s en betere ondersteuning voor diensten als Disney+, HBO Max en Peacock. ProtonVPN werkt ook met Netflix maar heeft minder gespecialiseerde streamingservers.',
      },
      {
        question: 'Welke VPN is beter in China?',
        answer:
          'ProtonVPN scoort beter in China dankzij het Stealth-protocol dat VPN-verkeer maskeert als HTTPS. Surfshark heeft ook een NoBorders-modus voor censuurlanden, maar het Stealth-protocol van ProtonVPN is specifieker ontworpen voor de Chinese Great Firewall. Installeer altijd vóór aankomst.',
      },
      {
        question: 'Welke werkt op meer apparaten: ProtonVPN of Surfshark?',
        answer:
          'Surfshark staat onbeperkt apparaten toe op één abonnement. ProtonVPN limiteert op 10 gelijktijdige verbindingen. Voor gezinnen of gebruikers met veel apparaten is Surfshark duidelijk gunstiger.',
      },
    ],
    relatedSlugs: ['nordvpn-vs-surfshark'],
  },
]

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug)
}
