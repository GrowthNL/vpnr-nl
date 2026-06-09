/**
 * generate-blog-post.mjs
 *
 * Genereert automatisch een SEO-geoptimaliseerde Nederlandse blogpost voor vpnr.nl.
 *
 * Gebruik:
 *   node scripts/generate-blog-post.mjs
 *
 * Vereist:
 *   ANTHROPIC_API_KEY  — Anthropic API-sleutel (verplicht)
 *   OPENAI_API_KEY     — Voor DALL-E afbeeldingen (optioneel)
 *   GOOGLE_AI_KEY      — Voor Imagen afbeeldingen (optioneel)
 *   HF_TOKEN           — Voor FLUX-afbeeldingen via HuggingFace (optioneel)
 *   BLOG_MODEL         — Model override (standaard: claude-opus-4-8)
 *
 * Werking:
 *   1. Leest posts.ts → pakt alle bestaande slugs
 *   2. Kiest het eerste onderwerp uit blog-topics.mjs dat nog niet bestaat
 *   3. Roept Anthropic API aan voor volledig Nederlands SEO-artikel
 *   4. Genereert hero-afbeelding via generate-blog-image.mjs
 *   5. Voegt post toe aan content/posts.ts
 *   6. Update public/llms.txt
 */

import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'
import { BLOG_TOPICS } from './blog-topics.mjs'
import { generateImage } from './generate-blog-image.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

// ─── ENV ─────────────────────────────────────────────────────────────────────

function loadEnv() {
  const envPath = path.join(ROOT, '.env.local')
  try {
    for (const line of readFileSync(envPath, 'utf8').split('\n')) {
      const eqIdx = line.indexOf('=')
      if (eqIdx > 0) {
        const key = line.slice(0, eqIdx).trim()
        const val = line.slice(eqIdx + 1).trim()
        if (key && !process.env[key]) process.env[key] = val
      }
    }
  } catch { /* geen .env.local aanwezig */ }
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function formatDutchDate(date) {
  const months = [
    'januari', 'februari', 'maart', 'april', 'mei', 'juni',
    'juli', 'augustus', 'september', 'oktober', 'november', 'december',
  ]
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

function formatISO(date) {
  return date.toISOString().split('T')[0]
}

// Haal alle bestaande slugs op uit posts.ts
function getExistingSlugs(postsContent) {
  const matches = [...postsContent.matchAll(/\bslug:\s*["']([^"']+)["']/g)]
  return new Set(matches.map((m) => m[1]))
}

// Haal alle bestaande blog-slugs op (voor de internal-links lijst in de prompt)
function getBlogSlugList(postsContent) {
  const matches = [...postsContent.matchAll(/\bslug:\s*["']([^"']+)["']/g)]
  return matches
    .map((m) => m[1])
    .filter((s) => !s.includes('/'))
    .map((s) => `- /blog/${s}`)
    .join('\n')
}

// ─── ANTHROPIC API ───────────────────────────────────────────────────────────

async function callAnthropic(systemPrompt, userPrompt) {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY is niet ingesteld')

  const model = process.env.BLOG_MODEL ?? 'claude-opus-4-8'
  console.log(`🤖  Model: ${model}`)

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model,
      max_tokens: 8192,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    }),
  })

  if (!response.ok) {
    const err = await response.text()
    throw new Error(`Anthropic API-fout ${response.status}: ${err.slice(0, 300)}`)
  }

  const data = await response.json()
  return data.content[0].text
}

// ─── PROMPT BUILDER ──────────────────────────────────────────────────────────

function buildSystemPrompt(existingSlugs) {
  const blogLinks = getBlogSlugList(
    [...existingSlugs].map((s) => `slug: '${s}'`).join('\n')
  )

  // Bouw een leesbare lijst van bestaande blog-slugs voor internal linking
  const existingBlogLinks = [...existingSlugs]
    .filter((s) => !s.includes('/'))
    .map((s) => `/blog/${s}`)
    .join('\n    ')

  return `Je bent een ervaren Nederlandse SEO-contentschrijver voor vpnr.nl, een onafhankelijke VPN-vergelijkingssite voor de Nederlandse markt (Amsterdam/Nederland).

## KRITIEKE INSTRUCTIE
Geef UITSLUITEND een geldig JSON-object terug als antwoord. Geen uitleg, geen markdown code-fences, geen commentaar. Begin direct met { en eindig met }. Elk ander karakter buiten het JSON-object zal de verwerking breken.

## JSON-schema (volg dit exact, alle velden zijn verplicht tenzij anders aangegeven)
{
  "title": "H1 paginatitel — bevat keyword, pakkend, 60-70 tekens",
  "metaTitle": "SEO-titel — MAXIMAAL 60 tekens, keyword als eerste woord(en), bevat '2026'",
  "metaDescription": "SEO-beschrijving — MAXIMAAL 155 tekens, bevat keyword + CTA-element",
  "excerpt": "Blogkaart-samenvatting — 100-130 tekens, overtuigend, bevat keyword",
  "readTime": "Bijv. '6 min' of '8 min' — schat op basis van totale tekstomvang",
  "imageAlt": "Alt-tekst voor hero-afbeelding — max 120 tekens, beschrijf een FOTO (geen illustratie), bevat keyword, geen 'afbeelding van' of 'foto van'",
  "intro": "Openingsparagraaf — 2-3 zinnen, beantwoordt de zoekvraag DIRECT, bevat keyword in de eerste zin",
  "sections": [
    {
      "heading": "H2 sectietitel — bevat zoekwoord-variant of gerelateerde term",
      "body": [
        "Eerste alinea als string — mag bevatten: <strong>tekst</strong>, <em>tekst</em>, <a href='/pad' class='text-blue-600 hover:underline font-medium'>linktekst</a>",
        "Tweede alinea"
      ],
      "highlight": {"type": "tip", "title": "Korte label (3-5 woorden)", "text": "Inhoud van het kader (1-2 zinnen)"},
      "table": {"headers": ["Kolom 1", "Kolom 2"], "rows": [["Rij 1A", "Rij 1B"]]},
      "cta": "nordvpn"
    }
  ],
  "faqs": [
    {"question": "Vraag die mensen googelen?", "answer": "Duidelijk antwoord in 2-4 zinnen."}
  ],
  "relatedProviders": ["nordvpn", "surfshark"],
  "relatedSlugs": ["vpn-buitenland-gebruiken", "kill-switch-vpn"],
  "tags": ["tag 1", "tag 2", "tag 3", "tag 4"]
}

## Schrijfrichtlijnen

### Structuur
- Schrijf PRECIES 5 tot 6 sections
- Elke section heeft 2 tot 4 alinea's in body[]
- Gebruik highlight in maximaal 2 sections (type: "tip", "warning", "info", of "stat")
- Gebruik table in maximaal 1 section (voor prijsvergelijking of feature-overzicht)
- Gebruik cta in 1 tot 2 sections voor de meest aanbevolen provider

### SEO
- Verwerk het primaire keyword 4-6 keer natuurlijk in de tekst (niet in elke zin)
- Gebruik zoekwoord-varianten en synoniemen in headings
- Beantwoord de zoekvraag volledig — gebruik geen teaser-taal

### Taal & stijl
- ALLEEN Nederlands (nl-NL), formeel maar toegankelijk, geen anglicismen
- Schrijf vanuit een onafhankelijke expert die eerlijk en betrouwbaar adviseert
- Vermeld in de intro of eerste section kort dat vpnr.nl affiliate commissies ontvangt maar dat dit de beoordeling niet beïnvloedt

### Internal links (gebruik 3-5 links)
Gebruik UITSLUITEND links die hieronder zijn opgesomd:

Provider reviews:
    /vpn-reviews/nordvpn | /vpn-reviews/surfshark | /vpn-reviews/protonvpn
    /vpn-reviews/hideme | /vpn-reviews/cyberghost | /vpn-reviews/purevpn
    /vpn-reviews/mcafee | /vpn-reviews/vpnnederland

Blog posts (actueel aanwezig):
    ${existingBlogLinks || '    (nog geen blogposts)'}

Use-case pagina\'s:
    /beste-vpn/voor-netflix | /beste-vpn/voor-streaming | /beste-vpn/voor-torrenten
    /beste-vpn/voor-gaming | /beste-vpn/gratis | /beste-vpn/goedkoop
    /beste-vpn/voor-iphone | /beste-vpn/voor-mac | /beste-vpn/voor-android
    /beste-vpn/voor-thuiswerken | /beste-vpn/voor-belgie

Overige pagina\'s:
    /wat-is-een-vpn | /vpn-vergelijken | /blog

### Veldlimieten (strict)
- relatedProviders: ALLEEN uit: nordvpn, surfshark, protonvpn, hideme, cyberghost, purevpn, mcafee, vpnnederland (kies 2-3)
- relatedSlugs: ALLEEN bestaande blog slugs zonder /blog/ prefix (kies 2-3)
- tags: 4-6 zoektermen, lowercase, in het Nederlands
- FAQs: schrijf precies 5 vragen die mensen daadwerkelijk googelen rondom het onderwerp`
}

function buildUserPrompt(topic) {
  return `Schrijf een volledig, SEO-geoptimaliseerd blogartikel:

Onderwerp: ${topic.title}
Primair keyword: ${topic.keyword}
URL wordt: https://vpnr.nl/blog/${topic.slug}
Categorie: ${topic.category}
${topic.relatedProviders ? `Aanbevolen providers (gebruik als CTA): ${topic.relatedProviders.join(', ')}` : ''}
${topic.context ? `\nInhoudelijke context:\n${topic.context}` : ''}

Onthoud: output ALLEEN het JSON-object, niets meer.`
}

// ─── POSTS.TS UPDATER ────────────────────────────────────────────────────────

function insertPostIntoFile(postsContent, postObject) {
  const MARKER = '\n]\n\nexport function getPost'

  if (!postsContent.includes(MARKER)) {
    throw new Error(
      'Sluitende `]` + `export function getPost` niet gevonden in posts.ts. ' +
      'Is de bestandsstructuur gewijzigd?'
    )
  }

  // Serialiseer als geldig JSON (= geldig TypeScript object literal)
  const serialized = JSON.stringify(postObject, null, 2)

  // Indent met 2 spaties (zodat het er goed uitziet binnen de posts[] array)
  const indented = serialized
    .split('\n')
    .map((line) => '  ' + line)
    .join('\n')

  return postsContent.replace(
    MARKER,
    `\n${indented},\n]\n\nexport function getPost`
  )
}

// ─── LLMS.TXT UPDATER ────────────────────────────────────────────────────────

function updateLlms(slug, title) {
  const llmsPath = path.join(ROOT, 'public', 'llms.txt')

  let content
  try {
    content = readFileSync(llmsPath, 'utf8')
  } catch {
    console.log('⚠️   llms.txt niet gevonden, overgeslagen')
    return
  }

  const entry = `- https://vpnr.nl/blog/${slug} — ${title}`

  if (content.includes(`/blog/${slug}`)) {
    console.log('ℹ️   llms.txt bevat de URL al, overgeslagen')
    return
  }

  writeFileSync(llmsPath, content.trimEnd() + '\n' + entry + '\n')
  console.log('✅  llms.txt bijgewerkt')
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

async function main() {
  loadEnv()

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('❌  ANTHROPIC_API_KEY is niet ingesteld.')
    console.error('   Lokaal: voeg toe aan .env.local')
    console.error('   GitHub Actions: voeg toe als repository secret')
    process.exit(1)
  }

  // Lees bestaande posts
  const postsPath = path.join(ROOT, 'content', 'posts.ts')
  const postsContent = readFileSync(postsPath, 'utf8')
  const existingSlugs = getExistingSlugs(postsContent)

  console.log(`📚  Bestaande posts: ${existingSlugs.size}`)

  // Kies het volgende onderwerp
  const topic = BLOG_TOPICS.find((t) => !existingSlugs.has(t.slug))

  if (!topic) {
    console.log('🎉  Alle onderwerpen zijn al geschreven!')
    console.log('   Voeg nieuwe topics toe aan scripts/blog-topics.mjs')
    process.exit(0)
  }

  console.log(`\n📝  Onderwerp: "${topic.title}"`)
  console.log(`🔑  Keyword:   ${topic.keyword}`)
  console.log(`🔗  Slug:      /blog/${topic.slug}`)
  console.log(`📂  Categorie: ${topic.category}`)

  // Genereer blogcontent via Anthropic
  console.log('\n🤖  Anthropic API aanroepen...')
  const systemPrompt = buildSystemPrompt(existingSlugs)
  const userPrompt = buildUserPrompt(topic)

  let rawOutput
  try {
    rawOutput = await callAnthropic(systemPrompt, userPrompt)
  } catch (err) {
    console.error(`❌  API-fout: ${err.message}`)
    process.exit(1)
  }

  // Parseer JSON (verwijder eventuele code-fences als veiligheidsmaatregel)
  let postData
  try {
    const cleaned = rawOutput
      .trim()
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/, '')
      .trim()
    postData = JSON.parse(cleaned)
  } catch {
    console.error('❌  JSON parse-fout in API-output:')
    console.error('--- BEGIN OUTPUT ---')
    console.error(rawOutput.slice(0, 1000))
    console.error('--- EINDE OUTPUT ---')
    process.exit(1)
  }

  // Valideer verplichte velden
  const required = ['title', 'metaTitle', 'metaDescription', 'excerpt', 'intro', 'sections', 'faqs']
  const missing = required.filter((f) => !postData[f])
  if (missing.length > 0) {
    console.error(`❌  Ontbrekende velden in API-output: ${missing.join(', ')}`)
    process.exit(1)
  }

  console.log(`✅  Content gegenereerd: "${postData.title}"`)
  console.log(`   metaTitle (${postData.metaTitle.length} tekens): ${postData.metaTitle}`)
  console.log(`   Sections: ${postData.sections?.length ?? 0}  |  FAQs: ${postData.faqs?.length ?? 0}`)

  // Genereer hero-afbeelding
  console.log('\n🎨  Afbeelding genereren...')
  const imagePath = await generateImage(
    topic.slug,
    postData.title,
    topic.keyword,
    topic.category
  )
  console.log(`   Afbeelding: ${imagePath}`)

  // Bouw het volledige post-object
  const now = new Date()
  const completePost = {
    slug: topic.slug,
    title: postData.title,
    metaTitle: postData.metaTitle,
    metaDescription: postData.metaDescription,
    excerpt: postData.excerpt,
    category: topic.category,
    date: formatDutchDate(now),
    dateISO: formatISO(now),
    updatedISO: formatISO(now),
    readTime: postData.readTime ?? '6 min',
    author: 'vpnr.nl Redactie',
    image: imagePath,
    imageAlt: postData.imageAlt ?? `${topic.keyword} — vpnr.nl`,
    intro: postData.intro,
    sections: postData.sections,
    faqs: postData.faqs,
    relatedProviders: postData.relatedProviders ?? [],
    relatedSlugs: postData.relatedSlugs ?? [],
    tags: postData.tags ?? [],
  }

  // Voeg toe aan posts.ts
  console.log('\n📄  posts.ts bijwerken...')
  const updatedPosts = insertPostIntoFile(postsContent, completePost)
  writeFileSync(postsPath, updatedPosts)
  console.log('✅  posts.ts bijgewerkt')

  // Update llms.txt
  updateLlms(topic.slug, postData.title)

  // Samenvatting
  console.log('\n' + '─'.repeat(60))
  console.log('🚀  Klaar! Nieuwe blogpost toegevoegd:')
  console.log(`   Titel:      ${postData.title}`)
  console.log(`   URL:        https://vpnr.nl/blog/${topic.slug}`)
  console.log(`   Afbeelding: ${imagePath}`)
  console.log(`   Datum:      ${formatDutchDate(now)}`)
  console.log('─'.repeat(60))
  console.log('ℹ️   Volgende stap: git add + commit + push → Vercel deployt automatisch')
}

main().catch((err) => {
  console.error('❌  Onverwachte fout:', err.message)
  process.exit(1)
})
