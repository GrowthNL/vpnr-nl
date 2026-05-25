export interface UseCase {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  icon: string
  intro: string
  topProviders: string[]
  keyFeature: string
  sections: { heading: string; text: string }[]
}

export const usecases: UseCase[] = [
  {
    slug: 'voor-netflix',
    title: 'Beste VPN voor Netflix',
    metaTitle: 'Beste VPN voor Netflix Nederland 2026 | Werkt Gegarandeerd',
    metaDescription: 'Welke VPN werkt met Netflix in 2026? Wij testten alle grote VPN-diensten op Netflix NL, US en UK. Bekijk onze top 3.',
    icon: '🎬',
    intro: 'Netflix blokkeert actief VPN-servers. Niet elke VPN werkt meer betrouwbaar met Netflix. Wij testten dagelijks welke VPN\'s de Netflix-blokkade omzeilen en toegang geven tot Netflix US, UK en andere catalogi.',
    topProviders: ['nordvpn', 'surfshark', 'expressvpn'],
    keyFeature: 'Betrouwbare ontgrendeling van Netflix US, UK en andere regio\'s',
    sections: [
      {
        heading: 'Waarom werkt niet elke VPN met Netflix?',
        text: 'Netflix gebruikt geavanceerde detectietechnologie om VPN-servers te herkennen en te blokkeren. Ze bijhouden lijsten van bekende VPN-IP-adressen. Alleen VPN-providers die voortdurend nieuwe servers toevoegen en hun IP-adressen roteren, blijven betrouwbaar werken.',
      },
      {
        heading: 'Welke Netflix-catalogi kun je ontgrendelen?',
        text: 'Met een goede VPN heb je toegang tot Netflix US (grootste bibliotheek), Netflix UK, Netflix Canada, Netflix Japan en meer. Netflix US heeft duizenden extra titels die niet beschikbaar zijn op Netflix Nederland.',
      },
      {
        heading: 'Is Netflix via VPN legaal?',
        text: 'Het gebruik van een VPN voor Netflix is technisch gezien in strijd met de gebruiksvoorwaarden van Netflix, maar het is niet illegaal. Netflix kan je account blokkeren, maar in de praktijk gebeurt dit zelden. Het ergste dat kan gebeuren is dat je tijdelijk geen toegang hebt tot de VPN-server.',
      },
    ],
  },
  {
    slug: 'voor-streaming',
    title: 'Beste VPN voor Streaming',
    metaTitle: 'Beste VPN voor Streaming 2026 | Disney+, HBO, BBC iPlayer',
    metaDescription: 'Beste VPN voor streaming in 2026. Toegang tot Disney+, HBO Max, BBC iPlayer, Peacock en meer. Getest en vergeleken.',
    icon: '📺',
    intro: 'Streamingdiensten zijn geografisch beperkt. Met een VPN heb je toegang tot Disney+, HBO Max, BBC iPlayer, Peacock, DAZN en tientallen andere diensten die niet beschikbaar zijn in Nederland.',
    topProviders: ['nordvpn', 'expressvpn', 'surfshark'],
    keyFeature: 'Werkt met Disney+, HBO Max, BBC iPlayer en Peacock',
    sections: [
      {
        heading: 'Welke streamingdiensten kun je ontgrendelen?',
        text: 'Met een goede VPN heb je toegang tot BBC iPlayer (UK), Peacock (US), Hulu (US), DAZN (meerdere landen), Channel 4 (UK), ITV Hub (UK) en tientallen andere diensten. Ideaal voor sport en exclusieve series.',
      },
      {
        heading: 'Hoeveel bandbreedte heb je nodig?',
        text: 'Voor HD-streaming heb je minimaal 5 Mbps nodig, voor 4K minstens 25 Mbps. Een goede VPN heeft minimale impact op je snelheid. NordVPN en ExpressVPN hebben de snelste servers voor streaming.',
      },
      {
        heading: 'VPN op je Smart TV of streamingapparaat',
        text: 'Je kunt een VPN instellen op je router zodat alle apparaten beschermd zijn, of de VPN-app installeren op FireTV Stick, Apple TV of Android TV. NordVPN en Surfshark hebben apps voor alle populaire streamingapparaten.',
      },
    ],
  },
  {
    slug: 'voor-torrenten',
    title: 'Beste VPN voor Torrenten',
    metaTitle: 'Beste VPN voor Torrenten 2026 | Veilig & Anoniem P2P',
    metaDescription: 'Beste VPN voor torrenten en P2P in 2026. Verberg je IP-adres, vermijd DMCA-brieven en torrent veilig. Onze top 3.',
    icon: '⬇️',
    intro: 'Torrenten zonder VPN betekent dat je IP-adres zichtbaar is voor iedereen in de swarm — inclusief advocatenkantoren die namens rechthebbenden boetes uitsturen. Een VPN verbergt je echte IP-adres en beschermt je privacy.',
    topProviders: ['nordvpn', 'surfshark', 'cyberghost'],
    keyFeature: 'P2P-toegestaan servers, geen logs, kill switch',
    sections: [
      {
        heading: 'Waarom heb je een VPN nodig voor torrenten?',
        text: 'Zonder VPN is je IP-adres zichtbaar in elke torrent-swarm. Rechthebbenden en hun advocaten monitoren actief populaire torrents en sturen boetebrieven naar IP-adressen. In Nederland zijn er regelmatig acties van anti-piraterijorganisaties.',
      },
      {
        heading: 'Wat is een kill switch en waarom is het belangrijk?',
        text: 'Een kill switch blokkeert al je internetverkeer als de VPN-verbinding wegvalt. Zonder kill switch kan je echte IP-adres tijdelijk zichtbaar worden. Voor torrenten is een betrouwbare kill switch onmisbaar.',
      },
      {
        heading: 'Welke VPN-protocollen zijn het beste voor P2P?',
        text: 'WireGuard en OpenVPN zijn de beste protocollen voor torrenten. Ze bieden de beste combinatie van snelheid en beveiliging. NordVPN\'s NordLynx (gebaseerd op WireGuard) is bijzonder snel voor grote downloads.',
      },
    ],
  },
  {
    slug: 'voor-gaming',
    title: 'Beste VPN voor Gaming',
    metaTitle: 'Beste VPN voor Gaming 2026 | Lagere Ping & DDoS Bescherming',
    metaDescription: 'Beste VPN voor gaming in 2026. Verlaag je ping, bescherm je tegen DDoS-aanvallen en speel games die nog niet in NL beschikbaar zijn.',
    icon: '🎮',
    intro: 'Een VPN voor gaming heeft twee hoofddoelen: DDoS-bescherming en toegang tot games die eerder uitkomen in andere regio\'s. Een slechte VPN verhoogt je ping, maar de juiste VPN kan juist sneller zijn dan je normale verbinding.',
    topProviders: ['nordvpn', 'expressvpn', 'surfshark'],
    keyFeature: 'Lage latency, DDoS-bescherming, geo-unlock',
    sections: [
      {
        heading: 'Verhoogt een VPN je ping?',
        text: 'Ja, een VPN voegt altijd enige latency toe doordat je verkeer via een extra server gaat. Maar met een server dicht bij jou in de buurt is het verschil minimaal — vaak minder dan 5-10ms. NordVPN en ExpressVPN hebben servers in Amsterdam en Frankfurt voor minimale ping.',
      },
      {
        heading: 'Games eerder spelen met een VPN',
        text: 'Veel games komen eerder uit in Australië of Nieuw-Zeeland door tijdzones. Met een VPN-server in die regio kun je de game al spelen voordat hij in Nederland beschikbaar is. Dit werkt bij Steam, PlayStation en Xbox games.',
      },
      {
        heading: 'DDoS-bescherming voor streamers',
        text: 'Als je streamt op Twitch of YouTube Gaming, ben je kwetsbaar voor DDoS-aanvallen. Met een VPN verberg je je echte IP-adres en kunnen aanvallers je verbinding niet direct aanvallen.',
      },
    ],
  },
  {
    slug: 'gratis',
    title: 'Beste Gratis VPN',
    metaTitle: 'Beste Gratis VPN 2026 Nederland | Veilig & Betrouwbaar',
    metaDescription: 'Op zoek naar een gratis VPN? Wij bespreken de beste gratis opties én waarom een betaalde VPN vaak beter is. Lees onze eerlijke vergelijking.',
    icon: '🆓',
    intro: 'Gratis VPN\'s zijn verleidelijk, maar de meeste zijn onveilig of verbergen verborgen kosten. Wij bespreken de beste gratis opties én leggen uit wanneer een betaalde VPN de moeite waard is.',
    topProviders: ['nordvpn', 'surfshark', 'expressvpn'],
    keyFeature: 'Geen datalimiet, geen logs, eerlijke dienst',
    sections: [
      {
        heading: 'Zijn gratis VPN\'s veilig?',
        text: 'De meeste gratis VPN\'s verdienen geld door je data te verkopen aan adverteerders. Een bekende studie toonde aan dat 38% van de gratis VPN-apps malware bevatten. Kies altijd voor een VPN met een duidelijk verdienmodel — dat is een betaald abonnement.',
      },
      {
        heading: 'Welke gratis VPN\'s zijn legitiem?',
        text: 'ProtonVPN heeft een echte gratis versie zonder datalimiet, maar met beperkte servers. Windscribe geeft 10GB per maand gratis. Deze zijn veilig maar hebben beperkingen in snelheid en servers.',
      },
      {
        heading: 'Wanneer is een betaalde VPN de moeite waard?',
        text: 'Voor €2,49-€3,99 per maand heb je onbeperkte data, snellere servers, betere privacy en toegang tot streaming. Dat is minder dan een kop koffie per week. De geld-terug-garanties van 30-45 dagen maken het risicovlij om te proberen.',
      },
    ],
  },
  {
    slug: 'goedkoop',
    title: 'Goedkoopste VPN van 2026',
    metaTitle: 'Goedkoopste VPN 2026 | Beste Prijs-Kwaliteit Verhouding',
    metaDescription: 'Welke VPN is het goedkoopst in 2026? Vergelijk prijzen van NordVPN, Surfshark en meer. Vind de beste deal met geld-terug-garantie.',
    icon: '💰',
    intro: 'Je hoeft niet veel te betalen voor een goede VPN. Met de juiste deal betaal je minder dan €3 per maand voor topkwaliteit. Wij vergelijken alle prijzen en deals.',
    topProviders: ['surfshark', 'nordvpn', 'cyberghost'],
    keyFeature: 'Laagste prijs per maand bij 2-jaarsplan',
    sections: [
      {
        heading: 'Wanneer zijn VPN-aanbiedingen het voordeligst?',
        text: 'VPN-providers hebben regelmatig grote kortingen tijdens Black Friday, Cyber Monday en andere feestdagen. Surfshark geeft soms tot 85% korting. Schrijf je in voor onze nieuwsbrief om de beste deals te ontvangen.',
      },
      {
        heading: '1 jaar vs 2 jaar abonnement',
        text: 'Een 2-jaarsplan is altijd goedkoper dan een jaarabonnement. Surfshark kost €2,49/maand op 2 jaar versus €3,99 op 1 jaar. Let op: je betaalt het 2-jaarsplan in één keer vooruit.',
      },
      {
        heading: 'Geld-terug-garantie als vangnet',
        text: 'Alle grote VPN-providers bieden een geld-terug-garantie van 30 tot 45 dagen. Je kunt dus risicovrij een 2-jaarsplan nemen en je geld terugvragen als je niet tevreden bent. CyberGhost biedt zelfs 45 dagen.',
      },
    ],
  },
]

export function getUseCase(slug: string): UseCase | undefined {
  return usecases.find((u) => u.slug === slug)
}
