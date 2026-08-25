export interface Author {
  slug: string
  name: string
  title: string
  shortBio: string
  fullBio: string[]
  expertise: string[]
  location: string
  image: string
  imageAlt: string
  writtenCount?: number
}

const authors: Author[] = [
  {
    slug: 'tim-verhoeven',
    name: 'Tim Verhoeven',
    title: 'Freelance tech-journalist & VPN-specialist',
    shortBio:
      'Tim schrijft al meer dan 9 jaar over online privacy, cybersecurity en digitale vrijheid. Als voormalig IT-consultant test hij elke VPN grondig op snelheid, privacy en gebruiksgemak voor de Nederlandse markt.',
    fullBio: [
      'Tim Verhoeven begon zijn carrière als IT-consultant bij een middelgroot softwarebedrijf in Amsterdam, waar hij zich specialiseerde in netwerkbeveiliging en bedrijfsvpn-oplossingen. Na zeven jaar in de consultancy maakte hij de overstap naar de tech-journalistiek — aangedreven door de overtuiging dat gewone consumenten recht hebben op onafhankelijke, begrijpelijke uitleg over digitale privacy.',
      'Sindsdien test en beoordeelt hij VPN-diensten op een vaste methodiek: snelheid op Nederlandse en Europese servers, DNS- en WebRTC-lekken, no-log-beleid, betalingsopties en gebruiksgemak per platform. Elk product dat op vpnr.nl staat heeft hij persoonlijk geïnstalleerd en getest — op Windows, Android en iOS.',
      'Tim gelooft dat online privacy geen luxe is maar een basisrecht, en schrijft vanuit dat perspectief: zonder jargon, zonder gesponsorde voorkeur, met een duidelijke eindconclusie voor de Nederlandse lezer.',
    ],
    expertise: [
      'VPN-protocollen (WireGuard, OpenVPN, IKEv2)',
      'Online privacy & no-log-beleid',
      'Streaming-omzeilingen (Netflix, Disney+)',
      'Netwerkbeveiliging & DNS-lekken',
      'Digitale vrijheid & censuuromzeiling',
    ],
    location: 'Amsterdam, Nederland',
    image: '/auteurs/tim-verhoeven.jpg',
    imageAlt: 'Tim Verhoeven, VPN-expert en tech-journalist bij vpnr.nl',
  },
]

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug)
}

export { authors }
