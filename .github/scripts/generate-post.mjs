/**
 * generate-post.mjs
 * Bepaalt het onderwerp voor deze week, roept Claude API aan,
 * en voegt de gegenereerde BlogPost toe aan content/posts.ts
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '../..')

// ─── Contentkalender ─────────────────────────────────────────────────────────
// Volgorde bepaalt welke post deze week aan de beurt is (index = weeknummer % topics.length)
const TOPICS = [
  {
    slug: 'vpn-mac-instellen',
    title: 'VPN instellen op Mac: stap-voor-stap handleiding (2026)',
    keyword: 'vpn mac',
    category: 'Gids',
    relatedProviders: ['nordvpn', 'surfshark', 'expressvpn'],
    relatedSlugs: ['vpn-windows-instellen', 'vpn-iphone-instellen', 'vpn-protocol-vergelijking'],
    tags: ['vpn mac', 'vpn instellen mac', 'macos vpn handleiding', 'vpn macbook'],
    image: '/blog/vpn-mac.svg',
  },
  {
    slug: 'vpn-router-instellen',
    title: 'VPN instellen op een router: complete handleiding (2026)',
    keyword: 'vpn router',
    category: 'Gids',
    relatedProviders: ['nordvpn', 'expressvpn', 'surfshark'],
    relatedSlugs: ['vpn-windows-instellen', 'vpn-android-instellen', 'vpn-protocol-vergelijking'],
    tags: ['vpn router', 'vpn instellen router', 'router vpn handleiding', 'thuis vpn'],
    image: '/blog/vpn-router.svg',
  },
  {
    slug: 'vpn-openbaar-wifi',
    title: 'VPN op openbaar wifi: waarom het onmisbaar is (2026)',
    keyword: 'vpn openbaar wifi',
    category: 'Tips',
    relatedProviders: ['nordvpn', 'surfshark', 'expressvpn'],
    relatedSlugs: ['vpn-buitenland-gebruiken', 'vpn-ip-adres-verbergen', 'vpn-android-instellen'],
    tags: ['vpn openbaar wifi', 'wifi beveiliging', 'openbare wifi gevaren', 'veilig wifi'],
    image: '/blog/vpn-openbaar-wifi.svg',
  },
  {
    slug: 'anoniem-internetten',
    title: 'Anoniem internetten in 2026: complete gids',
    keyword: 'anoniem internetten',
    category: 'Privacy',
    relatedProviders: ['nordvpn', 'protonvpn', 'surfshark'],
    relatedSlugs: ['vpn-ip-adres-verbergen', 'vpn-buitenland-gebruiken', 'vpn-protocol-vergelijking'],
    tags: ['anoniem internetten', 'vpn privacy', 'ip adres verbergen', 'online privacy 2026'],
    image: '/blog/anoniem-internetten.svg',
  },
  {
    slug: 'nordvpn-korting',
    title: 'NordVPN korting juni 2026 — actuele deals en aanbiedingen',
    keyword: 'nordvpn korting',
    category: 'Deals',
    relatedProviders: ['nordvpn', 'surfshark', 'expressvpn'],
    relatedSlugs: ['goedkoopste-vpn-deals', 'vpn-reviews/nordvpn', 'vpn-buitenland-gebruiken'],
    tags: ['nordvpn korting', 'nordvpn aanbieding', 'nordvpn deal 2026', 'vpn korting'],
    image: '/blog/vpn-deals.svg',
  },
  {
    slug: 'kill-switch-vpn',
    title: 'Kill switch VPN uitgelegd: wat is het en waarom heb je het nodig?',
    keyword: 'kill switch vpn',
    category: 'Uitleg',
    relatedProviders: ['nordvpn', 'surfshark', 'expressvpn'],
    relatedSlugs: ['vpn-windows-instellen', 'vpn-android-instellen', 'vpn-protocol-vergelijking'],
    tags: ['kill switch vpn', 'vpn beveiliging', 'vpn kill switch uitleg', 'internet kill switch'],
    image: '/blog/vpn-protocol.svg',
  },
  {
    slug: 'split-tunneling-vpn',
    title: 'Split tunneling VPN uitgelegd: wat is het en hoe stel je het in?',
    keyword: 'split tunneling vpn',
    category: 'Uitleg',
    relatedProviders: ['nordvpn', 'surfshark', 'expressvpn'],
    relatedSlugs: ['vpn-windows-instellen', 'vpn-android-instellen', 'kill-switch-vpn'],
    tags: ['split tunneling vpn', 'vpn split tunneling', 'split tunnel uitleg', 'vpn instellingen'],
    image: '/blog/vpn-protocol.svg',
  },
  {
    slug: 'vpn-thuiswerken',
    title: 'VPN voor thuiswerken: veilig thuis op je bedrijfsnetwerk (2026)',
    keyword: 'vpn thuiswerken',
    category: 'Gids',
    relatedProviders: ['nordvpn', 'expressvpn', 'surfshark'],
    relatedSlugs: ['vpn-windows-instellen', 'vpn-mac-instellen', 'vpn-ip-adres-verbergen'],
    tags: ['vpn thuiswerken', 'zakelijke vpn', 'veilig thuiswerken', 'remote work vpn'],
    image: '/blog/vpn-buitenland.svg',
  },
]

// ─── Bepaal het onderwerp voor deze week ─────────────────────────────────────
function getTopicForThisWeek() {
  // Handmatige override via workflow_dispatch
  if (process.env.MANUAL_SLUG) {
    const manual = TOPICS.find(t => t.slug === process.env.MANUAL_SLUG)
    if (manual) return manual
    // Als het een geheel nieuw onderwerp is, gebruik default values
    return {
      slug: process.env.MANUAL_SLUG,
      title: process.env.MANUAL_TITLE || `VPN gids: ${process.env.MANUAL_SLUG}`,
      keyword: process.env.MANUAL_KEYWORD || process.env.MANUAL_SLUG,
      category: 'Gids',
      relatedProviders: ['nordvpn', 'surfshark', 'expressvpn'],
      relatedSlugs: ['vpn-buitenland-gebruiken', 'vpn-protocol-vergelijking', 'goedkoopste-vpn-deals'],
      tags: [process.env.MANUAL_KEYWORD || process.env.MANUAL_SLUG],
      image: '/blog/vpn-buitenland.svg',
    }
  }

  // Automatisch: bepaal week-index op basis van ISO weeknummer
  const now = new Date()
  const startOfYear = new Date(now.getFullYear(), 0, 1)
  const weekNumber = Math.floor((now - startOfYear) / (7 * 24 * 60 * 60 * 1000))

  // Sla al gepubliceerde slugs over
  const postsContent = fs.readFileSync(path.join(ROOT, 'content/posts.ts'), 'utf-8')
  const publishedSlugs = [...postsContent.matchAll(/slug: '([^']+)'/g)].map(m => m[1])

  const remaining = TOPICS.filter(t => !publishedSlugs.includes(t.slug))
  if (remaining.length === 0) {
    console.log('Alle geplande onderwerpen zijn al gepubliceerd. Niets te doen.')
    process.exit(0)
  }

  return remaining[weekNumber % remaining.length]
}

// ─── Claude API aanroep ───────────────────────────────────────────────────────
async function generatePostContent(topic) {
  const today = new Date()
  const dateNL = today.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })
  const dateISO = today.toISOString().split('T')[0]
  const monthYear = today.toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' })

  const systemPrompt = `Je bent een expert VPN-redacteur voor vpnr.nl, een Nederlandse VPN-vergelijkingssite.
Je schrijft SEO-geoptimaliseerde, GEO-geoptimaliseerde en LLM-geoptimaliseerde blogposts in het Nederlands.

STIJLREGELS:
- Schrijf in duidelijk, toegankelijk Nederlands (geen Engels jargon zonder uitleg)
- Elke sectieheading beantwoordt direct een vraag (LLM-vriendelijk)
- Eerste zin van elke sectie bevat direct het antwoord op de heading
- Gebruik concrete stappen, cijfers en feiten (E-E-A-T)
- Interne links naar: /vpn-reviews/nordvpn, /vpn-reviews/surfshark, /vpn-reviews/expressvpn
- HTML in body-teksten: alleen <strong>, <em>, <a href="..." class="text-blue-600 hover:underline font-medium">
- Geen markdown, alleen plain tekst en de toegestane HTML-tags

OUTPUT: Genereer ALLEEN een geldig TypeScript-object dat voldoet aan de BlogPost interface hieronder.
Begin direct met het object (geen uitleg, geen markdown, geen code-fence).

interface PostSection {
  heading: string
  body: string[]  // 2-4 paragrafen
  highlight?: { type: 'tip'|'warning'|'info'|'stat'; title: string; text: string }
  table?: { headers: string[]; rows: string[][] }
  cta?: string  // provider slug
}

interface BlogPost {
  slug: string
  title: string
  metaTitle: string        // max 60 tekens
  metaDescription: string  // 140-160 tekens
  excerpt: string          // 1-2 zinnen
  category: string
  date: string             // "D maand YYYY"
  dateISO: string          // "YYYY-MM-DD"
  updatedISO: string
  readTime: string         // "X min"
  author: string
  image: string
  imageAlt: string
  intro: string            // 2-3 zinnen, pakket de lezer
  sections: PostSection[]  // 5-6 secties
  faqs: Array<{ question: string; answer: string }>  // 5 vragen
  relatedProviders: string[]
  relatedSlugs: string[]
  tags: string[]
}`

  const userPrompt = `Schrijf een complete, kwalitatieve blogpost voor vpnr.nl met deze specificaties:

Slug: ${topic.slug}
Titel: ${topic.title}
Primair keyword: ${topic.keyword}
Categorie: ${topic.category}
Publicatiedatum: ${dateNL} (ISO: ${dateISO})
Maand/jaar in titel indien relevant: ${monthYear}
afbeelding: ${topic.image}
imageAlt: beschrijving passend bij ${topic.keyword}
relatedProviders: ${JSON.stringify(topic.relatedProviders)}
relatedSlugs: ${JSON.stringify(topic.relatedSlugs)}
tags: ${JSON.stringify(topic.tags)}
author: "vpnr.nl Redactie"

Vereisten:
- 5-6 secties, elke heading is een vraag of instructie
- Minstens 1 sectie met een highlight box (tip, warning, info of stat)
- Minstens 1 sectie met een cta naar de meest relevante provider
- Minimaal 1 vergelijkingstabel waar relevant
- 5 FAQs die lange-staart zoekopdrachten beantwoorden
- Intro: 2-3 pakkende zinnen die het probleem en de oplossing benoemen
- Alle secties beginnen met een directe, citeerbare uitleg (GEO/LLM-geoptimaliseerd)
- Interne links in body naar de juiste /vpn-reviews/ pagina's

Genereer ALLEEN het TypeScript-object, begin direct met het { teken.`

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-opus-4-5',
      max_tokens: 8000,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    }),
  })

  if (!response.ok) {
    const err = await response.text()
    throw new Error(`Claude API fout ${response.status}: ${err}`)
  }

  const data = await response.json()
  return data.content[0].text.trim()
}

// ─── Voeg post toe aan posts.ts ───────────────────────────────────────────────
function addPostToFile(postObject) {
  const filePath = path.join(ROOT, 'content/posts.ts')
  const content = fs.readFileSync(filePath, 'utf-8')

  // Voeg in voor de sluitende ] van de posts array
  const insertBefore = '\n]\n\nexport function getPost'
  const idx = content.lastIndexOf(insertBefore)
  if (idx === -1) throw new Error('Kan invoegpunt niet vinden in posts.ts')

  const newContent =
    content.slice(0, idx) +
    '\n\n  // ─── AUTO-GEGENEREERD ────────────────────────────────────────────\n  ' +
    postObject.replace(/\n/g, '\n  ') +
    ',' +
    content.slice(idx)

  fs.writeFileSync(filePath, newContent, 'utf-8')
  console.log('✅ Post toegevoegd aan content/posts.ts')
}

// ─── Genereer een SVG hero-afbeelding als die er nog niet is ─────────────────
function ensureSvgExists(imagePath) {
  const fullPath = path.join(ROOT, 'public', imagePath)
  if (fs.existsSync(fullPath)) {
    console.log(`ℹ️  SVG al aanwezig: ${imagePath}`)
    return
  }

  // Generieke fallback SVG (donkerblauw gradient + schild)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e3a8a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <path d="M600 148 L710 178 L710 318 Q710 405 600 445 Q490 405 490 318 L490 178 Z"
        fill="rgba(59,130,246,0.2)" stroke="rgba(99,102,241,0.65)" stroke-width="2.5"/>
  <polyline points="530,298 570,338 670,248" fill="none" stroke="rgba(255,255,255,0.8)"
            stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="200" cy="315" r="4" fill="rgba(96,165,250,0.4)"/>
  <circle cx="1000" cy="315" r="4" fill="rgba(96,165,250,0.4)"/>
  <line x1="204" y1="315" x2="488" y2="297" stroke="rgba(59,130,246,0.4)"
        stroke-width="2" stroke-dasharray="10,6"/>
  <line x1="712" y1="297" x2="996" y2="315" stroke="rgba(59,130,246,0.4)"
        stroke-width="2" stroke-dasharray="10,6"/>
</svg>`

  fs.mkdirSync(path.dirname(fullPath), { recursive: true })
  fs.writeFileSync(fullPath, svg, 'utf-8')
  console.log(`✅ SVG aangemaakt: ${imagePath}`)
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log('🚀 Blog-generator gestart...')

  const topic = getTopicForThisWeek()
  console.log(`📝 Onderwerp deze week: "${topic.title}" (${topic.slug})`)

  // Controleer of de post al bestaat
  const postsContent = fs.readFileSync(path.join(ROOT, 'content/posts.ts'), 'utf-8')
  if (postsContent.includes(`slug: '${topic.slug}'`)) {
    console.log(`⏭️  Slug '${topic.slug}' bestaat al. Niets te doen.`)
    process.exit(0)
  }

  // Zorg dat de SVG bestaat
  ensureSvgExists(topic.image)

  console.log('🤖 Claude API aanroepen...')
  const postObject = await generatePostContent(topic)

  // Valideer dat het een geldig JS-object lijkt
  if (!postObject.startsWith('{') || !postObject.includes('slug:')) {
    console.error('❌ Onverwacht formaat van Claude API response:')
    console.error(postObject.slice(0, 500))
    process.exit(1)
  }

  console.log('📄 Post ontvangen, toevoegen aan posts.ts...')
  addPostToFile(postObject)

  console.log('✅ Klaar! Post wordt via Vercel gedeployd na de push.')
}

main().catch(err => {
  console.error('❌ Fout:', err.message)
  process.exit(1)
})
