/**
 * generate-blog-image.mjs
 *
 * Genereert automatisch een hero-afbeelding voor elke blogpost.
 *
 * Modus A (standaard): Professionele SVG-illustratie — uniek per post, geen API nodig.
 * Modus B (upgrade):   Echte AI-afbeelding via HuggingFace (FLUX) als HF_TOKEN in .env.local staat.
 *
 * Gebruik:
 *   node scripts/generate-blog-image.mjs <slug> "<titel>" "<onderwerp>" [categorie]
 *
 * Voorbeeld:
 *   node scripts/generate-blog-image.mjs vpn-china "VPN in China" "VPN in China gebruiken" "Gids"
 */

import fs from 'fs'
import path from 'path'
import https from 'https'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https.get(url, (res) => {
      res.pipe(file)
      file.on('finish', () => file.close(resolve))
    }).on('error', (e) => { fs.unlink(dest, () => {}); reject(e) })
  })
}

// ─── ENV LOADER ──────────────────────────────────────────────────────────────

function loadEnv() {
  const envPath = path.join(ROOT, '.env.local')
  if (!fs.existsSync(envPath)) return
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const eqIdx = line.indexOf('=')
    if (eqIdx > 0) {
      const key = line.slice(0, eqIdx).trim()
      const val = line.slice(eqIdx + 1).trim()
      if (key && !process.env[key]) process.env[key] = val
    }
  }
}

// ─── TOPIC DETECTIE ──────────────────────────────────────────────────────────

function detectTopic(slug, title) {
  const text = (slug + ' ' + title).toLowerCase()
  if (/netflix|stream|disney|hbo|kijk/.test(text)) return 'streaming'
  if (/torrent|p2p|download/.test(text)) return 'torrenting'
  if (/router|dd-wrt|openwrt|firmware/.test(text)) return 'router'
  if (/gaming|game|ping|ddos/.test(text)) return 'gaming'
  if (/iphone|ios|ipad/.test(text)) return 'iphone'
  if (/mac|macos|macbook|apple/.test(text)) return 'mac'
  if (/android|samsung|pixel/.test(text)) return 'android'
  if (/thuiswerk|home.?office|zakelijk/.test(text)) return 'homeoffice'
  if (/belgi|brussels|antwerp/.test(text)) return 'belgium'
  if (/buitenland|travel|vakantie|china/.test(text)) return 'travel'
  if (/ip.adres|ip-adres|ip address/.test(text)) return 'ip'
  if (/protocol|wireguard|openvpn/.test(text)) return 'protocol'
  if (/kill.switch/.test(text)) return 'killswitch'
  if (/gratis|free|goedkoop|deal|korting/.test(text)) return 'deals'
  if (/vergelijk|vs\.?|versus/.test(text)) return 'compare'
  if (/windows|pc|laptop/.test(text)) return 'windows'
  return 'vpn'
}

// ─── SVG GENERATOR ───────────────────────────────────────────────────────────

// Eenvoudige hash voor unieke patronen per slug
function hash(str) {
  let h = 5381
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h) ^ str.charCodeAt(i)
  return Math.abs(h)
}

function getTopicSVGElements(topic) {
  switch (topic) {
    case 'streaming':
      return `
        <circle cx="600" cy="280" r="120" fill="none" stroke="rgba(96,165,250,0.25)" stroke-width="2"/>
        <circle cx="600" cy="280" r="80" fill="none" stroke="rgba(96,165,250,0.35)" stroke-width="1.5"/>
        <polygon points="570,240 570,320 650,280" fill="rgba(96,165,250,0.7)"/>
        <rect x="540" y="370" width="120" height="8" rx="4" fill="rgba(96,165,250,0.3)"/>
        <rect x="540" y="386" width="80" height="6" rx="3" fill="rgba(96,165,250,0.2)"/>`
    case 'torrenting':
      return `
        <line x1="600" y1="180" x2="600" y2="340" stroke="rgba(96,165,250,0.5)" stroke-width="3" stroke-linecap="round"/>
        <polyline points="540,280 600,360 660,280" fill="none" stroke="rgba(96,165,250,0.7)" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
        <rect x="530" y="370" width="140" height="12" rx="6" fill="rgba(96,165,250,0.25)"/>`
    case 'gaming':
      return `
        <rect x="490" y="230" width="220" height="140" rx="30" fill="none" stroke="rgba(96,165,250,0.4)" stroke-width="2"/>
        <circle cx="570" cy="300" r="18" fill="none" stroke="rgba(96,165,250,0.5)" stroke-width="1.5"/>
        <circle cx="630" cy="300" r="18" fill="none" stroke="rgba(96,165,250,0.5)" stroke-width="1.5"/>
        <line x1="600" y1="270" x2="600" y2="250" stroke="rgba(96,165,250,0.6)" stroke-width="2"/>
        <line x1="580" y1="260" x2="620" y2="260" stroke="rgba(96,165,250,0.6)" stroke-width="2"/>`
    case 'iphone':
    case 'android':
      return `
        <rect x="545" y="200" width="110" height="190" rx="18" fill="none" stroke="rgba(96,165,250,0.4)" stroke-width="2"/>
        <rect x="560" y="218" width="80" height="120" rx="4" fill="rgba(96,165,250,0.1)"/>
        <circle cx="600" cy="368" r="10" fill="none" stroke="rgba(96,165,250,0.4)" stroke-width="1.5"/>
        <rect x="575" y="212" width="50" height="6" rx="3" fill="rgba(96,165,250,0.3)"/>
        <path d="M575 260 L600 240 L625 260 L615 290 L585 290 Z" fill="rgba(96,165,250,0.3)"/>`
    case 'mac':
    case 'windows':
      return `
        <rect x="460" y="220" width="280" height="170" rx="12" fill="none" stroke="rgba(96,165,250,0.4)" stroke-width="2"/>
        <rect x="476" y="234" width="248" height="138" rx="4" fill="rgba(96,165,250,0.08)"/>
        <rect x="510" y="395" width="180" height="10" rx="5" fill="rgba(96,165,250,0.25)"/>
        <rect x="475" y="250" width="130" height="4" rx="2" fill="rgba(96,165,250,0.2)"/>
        <rect x="475" y="262" width="100" height="4" rx="2" fill="rgba(96,165,250,0.15)"/>
        <rect x="475" y="274" width="115" height="4" rx="2" fill="rgba(96,165,250,0.15)"/>`
    case 'homeoffice':
      return `
        <path d="M600 190 L700 270 L700 390 L500 390 L500 270 Z" fill="none" stroke="rgba(96,165,250,0.4)" stroke-width="2" stroke-linejoin="round"/>
        <rect x="560" y="310" width="80" height="80" rx="4" fill="none" stroke="rgba(96,165,250,0.35)" stroke-width="1.5"/>
        <path d="M580 310 L580 290 L620 290 L620 310" fill="none" stroke="rgba(96,165,250,0.35)" stroke-width="1.5"/>`
    case 'travel':
    case 'belgium':
      return `
        <circle cx="600" cy="300" r="110" fill="none" stroke="rgba(96,165,250,0.3)" stroke-width="1.5"/>
        <ellipse cx="600" cy="300" rx="55" ry="110" fill="none" stroke="rgba(96,165,250,0.25)" stroke-width="1"/>
        <line x1="490" y1="300" x2="710" y2="300" stroke="rgba(96,165,250,0.2)" stroke-width="1"/>
        <ellipse cx="600" cy="300" rx="110" ry="40" fill="none" stroke="rgba(96,165,250,0.2)" stroke-width="1"/>
        <circle cx="600" cy="300" r="6" fill="rgba(96,165,250,0.7)"/>`
    case 'ip':
      return `
        <circle cx="600" cy="280" r="90" fill="none" stroke="rgba(96,165,250,0.3)" stroke-width="1.5"/>
        <circle cx="600" cy="280" r="55" fill="rgba(96,165,250,0.08)"/>
        <text x="600" y="290" text-anchor="middle" font-family="monospace" font-size="22" fill="rgba(96,165,250,0.7)" font-weight="bold">185.x.x.x</text>
        <line x1="600" y1="190" x2="600" y2="175" stroke="rgba(239,68,68,0.5)" stroke-width="2"/>
        <line x1="575" y1="175" x2="625" y2="175" stroke="rgba(239,68,68,0.5)" stroke-width="2"/>`
    case 'protocol':
    case 'killswitch':
      return `
        <rect x="490" y="230" width="80" height="50" rx="8" fill="rgba(96,165,250,0.15)" stroke="rgba(96,165,250,0.4)" stroke-width="1.5"/>
        <rect x="630" y="230" width="80" height="50" rx="8" fill="rgba(96,165,250,0.15)" stroke="rgba(96,165,250,0.4)" stroke-width="1.5"/>
        <rect x="490" y="320" width="80" height="50" rx="8" fill="rgba(96,165,250,0.15)" stroke="rgba(96,165,250,0.4)" stroke-width="1.5"/>
        <rect x="630" y="320" width="80" height="50" rx="8" fill="rgba(96,165,250,0.15)" stroke="rgba(96,165,250,0.4)" stroke-width="1.5"/>
        <line x1="570" y1="255" x2="630" y2="255" stroke="rgba(96,165,250,0.5)" stroke-width="1.5"/>
        <line x1="530" y1="280" x2="530" y2="320" stroke="rgba(96,165,250,0.35)" stroke-width="1.5"/>
        <line x1="670" y1="280" x2="670" y2="320" stroke="rgba(96,165,250,0.35)" stroke-width="1.5"/>
        <line x1="570" y1="345" x2="630" y2="345" stroke="rgba(96,165,250,0.5)" stroke-width="1.5"/>`
    case 'deals':
      return `
        <circle cx="600" cy="270" r="80" fill="none" stroke="rgba(96,165,250,0.35)" stroke-width="2"/>
        <line x1="545" y1="215" x2="655" y2="325" stroke="rgba(96,165,250,0.4)" stroke-width="1.5"/>
        <circle cx="555" cy="250" r="18" fill="rgba(96,165,250,0.2)" stroke="rgba(96,165,250,0.4)" stroke-width="1.5"/>
        <circle cx="645" cy="290" r="18" fill="rgba(96,165,250,0.2)" stroke="rgba(96,165,250,0.4)" stroke-width="1.5"/>
        <text x="600" y="380" text-anchor="middle" font-family="sans-serif" font-size="20" fill="rgba(96,165,250,0.5)" font-weight="bold">€€€</text>`
    case 'compare':
      return `
        <rect x="460" y="220" width="120" height="160" rx="10" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.4)" stroke-width="1.5"/>
        <rect x="620" y="220" width="120" height="160" rx="10" fill="rgba(99,102,241,0.12)" stroke="rgba(99,102,241,0.4)" stroke-width="1.5"/>
        <line x1="600" y1="200" x2="600" y2="400" stroke="rgba(255,255,255,0.15)" stroke-width="1" stroke-dasharray="6,4"/>
        <path d="M480 280 L540 260 L540 300 Z" fill="rgba(96,165,250,0.5)"/>
        <path d="M720 280 L660 260 L660 300 Z" fill="rgba(99,102,241,0.5)"/>`
    default: // vpn / shield
      return `
        <path d="M600 190 L680 230 L680 310 C680 360 640 395 600 410 C560 395 520 360 520 310 L520 230 Z" fill="rgba(96,165,250,0.15)" stroke="rgba(96,165,250,0.5)" stroke-width="2"/>
        <path d="M580 300 L596 318 L630 276" fill="none" stroke="rgba(96,165,250,0.8)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`
  }
}

function generateSVG(slug, title, category = '') {
  const h = hash(slug)
  const topic = detectTopic(slug, title)

  // Unieke kleurtinten gebaseerd op de hash (blijft binnen blauw/paars spectrum)
  const hue1 = 215 + (h % 25)
  const hue2 = 235 + (h % 30)
  const hue3 = 250 + (h % 20)

  // Unieke patroon-offsets
  const offsetX = h % 60
  const offsetY = (h >> 4) % 40
  const rotation = (h % 15) - 7

  // Achtergrond-stippen in hexagonaal raster
  const dots = []
  for (let x = offsetX; x < 1200; x += 70) {
    for (let y = offsetY; y < 630; y += 60) {
      const rowShift = Math.floor(y / 60) % 2 === 0 ? 0 : 35
      const opacity = 0.08 + ((hash(slug + x + y) % 15) / 100)
      dots.push(`<circle cx="${x + rowShift}" cy="${y}" r="2" fill="rgba(148,163,184,${opacity.toFixed(2)})"/>`)
    }
  }

  // Verbindingslijnen (netwerk-effect)
  const lines = []
  const nodes = [
    [100 + (h % 80), 100 + (h % 60)],
    [200 + ((h >> 3) % 100), 200 + ((h >> 2) % 80)],
    [900 + (h % 60), 80 + ((h >> 5) % 70)],
    [1050 + ((h >> 2) % 80), 200 + (h % 100)],
    [150 + ((h >> 6) % 80), 450 + (h % 80)],
    [1000 + (h % 100), 480 + ((h >> 3) % 80)],
  ]
  for (let i = 0; i < nodes.length - 1; i++) {
    const opacity = (0.06 + (i * 0.02)).toFixed(2)
    lines.push(`<line x1="${nodes[i][0]}" y1="${nodes[i][1]}" x2="${nodes[i + 1][0]}" y2="${nodes[i + 1][1]}" stroke="rgba(96,165,250,${opacity})" stroke-width="1"/>`)
  }
  for (const [x, y] of nodes) {
    lines.push(`<circle cx="${x}" cy="${y}" r="3" fill="rgba(96,165,250,0.25)"/>`)
    lines.push(`<circle cx="${x}" cy="${y}" r="8" fill="rgba(96,165,250,0.06)"/>`)
  }

  const categoryLabel = category
    ? `<rect x="32" y="570" width="${category.length * 8 + 24}" height="26" rx="13" fill="rgba(96,165,250,0.2)"/>
       <text x="44" y="588" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="rgba(148,163,184,0.9)" letter-spacing="0.05em">${category.toUpperCase()}</text>`
    : ''

  const topicElements = getTopicSVGElements(topic)

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:hsl(${hue1},70%,8%)"/>
      <stop offset="50%" style="stop-color:hsl(${hue2},65%,12%)"/>
      <stop offset="100%" style="stop-color:hsl(${hue3},60%,9%)"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="45%" r="40%">
      <stop offset="0%" style="stop-color:hsl(${hue2},80%,30%);stop-opacity:0.18"/>
      <stop offset="100%" style="stop-color:transparent;stop-opacity:0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="20%" cy="20%" r="30%">
      <stop offset="0%" style="stop-color:hsl(${hue1},70%,40%);stop-opacity:0.08"/>
      <stop offset="100%" style="stop-color:transparent;stop-opacity:0"/>
    </radialGradient>
    <filter id="blur"><feGaussianBlur stdDeviation="40"/></filter>
  </defs>

  <!-- Achtergrond -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>

  <!-- Stippenraster -->
  ${dots.join('\n  ')}

  <!-- Netwerklijnen -->
  ${lines.join('\n  ')}

  <!-- Horizontale accentlijn -->
  <line x1="0" y1="1" x2="1200" y2="1" stroke="rgba(96,165,250,0.12)" stroke-width="1"/>
  <line x1="0" y1="629" x2="1200" y2="629" stroke="rgba(96,165,250,0.08)" stroke-width="1"/>

  <!-- Topic-illustratie (gecentreerd) -->
  <g transform="translate(0,0)">${topicElements}
  </g>

  <!-- Categorie badge -->
  ${categoryLabel}

  <!-- Subtiele vpnr.nl branding (rechtsonder) -->
  <text x="1168" y="614" font-family="system-ui, sans-serif" font-size="11" fill="rgba(100,116,139,0.5)" text-anchor="end" letter-spacing="0.04em">vpnr.nl</text>
</svg>`
}

// ─── AI IMAGE VIA HUGGINGFACE (optioneel, als HF_TOKEN beschikbaar is) ──────

function buildPrompt(topic, subject) {
  const base = 'professional stock photo, sharp focus, DSLR photography, natural lighting, high resolution, 16:9, no text, no logos, no watermarks'

  const topicPrompts = {
    router: `Modern wifi router on a home desk with glowing LED lights, multiple devices connected in background, clean home interior, ${base}`,
    streaming: `Person relaxing on a couch watching Netflix on a large TV screen, colorful movie poster visible, warm cozy living room, bokeh background, ${base}`,
    torrenting: `Close-up of a laptop screen showing a download progress bar at 98%, dark minimal desk setup, soft blue ambient light, ${base}`,
    gaming: `Gaming setup with RGB keyboard and monitor showing a vibrant game, dark room with neon lighting, immersive atmosphere, ${base}`,
    iphone: `iPhone held in hand showing a VPN connected screen with green checkmark, clean minimalist background, soft natural light, ${base}`,
    android: `Android smartphone on a wooden desk showing a security app with shield icon, modern office background, ${base}`,
    mac: `MacBook Pro open on a clean desk showing a security dashboard with green status indicators, bright airy home office, ${base}`,
    windows: `Windows laptop on a modern desk showing a VPN app interface with connected status, professional home office setup, ${base}`,
    homeoffice: `Neat home office desk with open laptop showing a productivity app, notebook, coffee mug and plants, large window with soft daylight, ${base}`,
    travel: `Person using a laptop at a busy airport terminal, departure board visible in background, travel bag nearby, ${base}`,
    belgium: `Panoramic skyline of Brussels with the Atomium and modern glass buildings, blue sky, golden hour light, ${base}`,
    ip: `Close-up of a screen showing an IP address lookup tool with location data, dark server room background, cool blue tones, ${base}`,
    protocol: `Split screen showing WireGuard vs OpenVPN logos on a dark tech dashboard, glowing interface, ${base}`,
    killswitch: `Hand pressing a large red emergency stop button in an industrial setting, dramatic cinematic lighting, ${base}`,
    deals: `Laptop screen showing a VPN pricing page with big discount percentages, credit card on desk, warm inviting light, ${base}`,
    compare: `Two smartphones side by side showing different VPN app interfaces, clean white background, top-down flat lay, ${base}`,
    vpn: `Person working on a laptop in a coffee shop with a VPN shield icon visible on screen, candid lifestyle photography, ${base}`,
  }

  return topicPrompts[topic] ?? topicPrompts.vpn
}

async function generateDallEImage(slug, title, subject) {
  const key = process.env.OPENAI_API_KEY
  if (!key) return null

  console.log('🎨  OPENAI_API_KEY gevonden — genereer via DALL-E 3...')

  const topic = detectTopic(slug, title)
  const prompt = buildPrompt(topic, subject)
  console.log(`🎯  Topic: ${topic}`)
  console.log(`📝  Prompt: ${prompt.slice(0, 80)}...`)

  return new Promise((resolve) => {
    const body = JSON.stringify({
      model: 'gpt-image-2',
      prompt,
      n: 1,
      size: '1536x1024',
      quality: 'medium',
    })

    const options = {
      hostname: 'api.openai.com',
      path: '/v1/images/generations',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    }

    const req = https.request(options, (res) => {
      const chunks = []
      res.on('data', (chunk) => chunks.push(chunk))
      res.on('end', () => {
        if (res.statusCode !== 200) {
          console.log(`⚠️   DALL-E 3 API antwoord: ${res.statusCode} — val terug op FLUX`)
          console.log(Buffer.concat(chunks).toString().slice(0, 300))
          resolve(null)
          return
        }
        try {
          const json = JSON.parse(Buffer.concat(chunks).toString())
          const b64 = json.data?.[0]?.b64_json
          if (!b64) { resolve(null); return }
          const outputPath = `${ROOT}/public/blog/${slug}.jpg`
          fs.writeFileSync(outputPath, Buffer.from(b64, 'base64'))
          console.log(`✅  GPT Image 2 afbeelding opgeslagen: public/blog/${slug}.jpg`)
          resolve(`/blog/${slug}.jpg`)
        } catch (e) {
          console.log('⚠️   DALL-E 3 parse-fout — val terug op FLUX')
          resolve(null)
        }
      })
    })

    req.on('error', () => { console.log('⚠️   DALL-E 3 verbindingsfout — val terug op FLUX'); resolve(null) })
    req.setTimeout(60000, () => { req.destroy(); console.log('⚠️   DALL-E 3 timeout — val terug op FLUX'); resolve(null) })
    req.write(body)
    req.end()
  })
}

async function generateImagenImage(slug, title, subject) {
  const key = process.env.GOOGLE_AI_KEY
  if (!key) return null

  console.log('🖼️   GOOGLE_AI_KEY gevonden — probeer Imagen 3 via Gemini API...')

  const topic = detectTopic(slug, title)
  const prompt = buildPrompt(topic, subject)
  console.log(`🎯  Topic: ${topic}`)
  console.log(`📝  Prompt: ${prompt.slice(0, 80)}...`)

  return new Promise((resolve) => {
    const body = JSON.stringify({
      instances: [{ prompt }],
      parameters: { sampleCount: 1, aspectRatio: '16:9', personGeneration: 'allow_adult' },
    })

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      path: `/v1beta/models/imagen-3.0-generate-002:predict?key=${key}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    }

    const req = https.request(options, (res) => {
      const chunks = []
      res.on('data', (chunk) => chunks.push(chunk))
      res.on('end', () => {
        if (res.statusCode !== 200) {
          console.log(`⚠️   Imagen API antwoord: ${res.statusCode} — val terug op FLUX`)
          console.log(Buffer.concat(chunks).toString().slice(0, 200))
          resolve(null)
          return
        }
        try {
          const json = JSON.parse(Buffer.concat(chunks).toString())
          const b64 = json.predictions?.[0]?.bytesBase64Encoded
          if (!b64) { resolve(null); return }
          const outputPath = `${ROOT}/public/blog/${slug}.jpg`
          fs.writeFileSync(outputPath, Buffer.from(b64, 'base64'))
          console.log(`✅  Imagen-afbeelding opgeslagen: public/blog/${slug}.jpg`)
          resolve(`/blog/${slug}.jpg`)
        } catch {
          console.log('⚠️   Imagen parse-fout — val terug op FLUX')
          resolve(null)
        }
      })
    })

    req.on('error', () => { console.log('⚠️   Imagen verbindingsfout — val terug op FLUX'); resolve(null) })
    req.setTimeout(60000, () => { req.destroy(); console.log('⚠️   Imagen timeout — val terug op FLUX'); resolve(null) })
    req.write(body)
    req.end()
  })
}

async function generateAIImage(slug, title, subject) {
  const token = process.env.HF_TOKEN
  if (!token) return null

  console.log('🤖  HF_TOKEN gevonden — probeer AI-afbeelding via FLUX...')

  const topic = detectTopic(slug, title)
  const prompt = buildPrompt(topic, subject)
  console.log(`🎯  Topic: ${topic}`)
  console.log(`📝  Prompt: ${prompt.slice(0, 80)}...`)

  return new Promise((resolve) => {
    const body = JSON.stringify({
      inputs: prompt,
      parameters: {
        width: 1280,
        height: 720,
        negative_prompt: 'text, words, letters, typography, watermark, logo, label, caption, writing, inscription, signage, subtitles, overlay',
      },
    })
    const options = {
      hostname: 'router.huggingface.co',
      path: '/hf-inference/models/black-forest-labs/FLUX.1-schnell',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    }

    const req = https.request(options, (res) => {
      if (res.statusCode !== 200) {
        console.log(`⚠️   HuggingFace API antwoord: ${res.statusCode} — val terug op SVG`)
        res.resume()
        resolve(null)
        return
      }

      const chunks = []
      res.on('data', (chunk) => chunks.push(chunk))
      res.on('end', () => {
        const buf = Buffer.concat(chunks)
        const outputPath = path.join(ROOT, 'public', 'blog', `${slug}.jpg`)
        fs.writeFileSync(outputPath, buf)
        console.log(`✅  AI-afbeelding opgeslagen: public/blog/${slug}.jpg`)
        resolve(`/blog/${slug}.jpg`)
      })
    })

    req.on('error', () => {
      console.log('⚠️   HuggingFace verbindingsfout — val terug op SVG')
      resolve(null)
    })

    req.setTimeout(120000, () => {
      req.destroy()
      console.log('⚠️   HuggingFace timeout — val terug op SVG')
      resolve(null)
    })

    req.write(body)
    req.end()
  })
}

// ─── HOOFD FUNCTIE ───────────────────────────────────────────────────────────

export async function generateImage(slug, title, subject = '', category = '') {
  loadEnv()

  const outputDir = path.join(ROOT, 'public', 'blog')
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true })

  // Prioriteit: DALL-E 3 → Imagen 3 → FLUX → SVG
  if (process.env.OPENAI_API_KEY) {
    const dallePath = await generateDallEImage(slug, title, subject)
    if (dallePath) return dallePath
  }

  if (process.env.GOOGLE_AI_KEY) {
    const imagenPath = await generateImagenImage(slug, title, subject)
    if (imagenPath) return imagenPath
  }

  if (process.env.HF_TOKEN) {
    const aiPath = await generateAIImage(slug, title, subject)
    if (aiPath) return aiPath
  }

  // Genereer professionele SVG
  console.log(`🎨  SVG-afbeelding genereren voor: "${title}"`)
  const svg = generateSVG(slug, title, category)
  const outputPath = path.join(outputDir, `${slug}.svg`)
  fs.writeFileSync(outputPath, svg, 'utf8')
  console.log(`✅  Opgeslagen: public/blog/${slug}.svg`)
  return `/blog/${slug}.svg`
}

// ─── CLI (alleen als direct aangeroepen, niet bij import) ────────────────────

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])

if (isMain) {
  const [,, slug, title, subject, category] = process.argv

  if (!slug || !title) {
    console.log('Gebruik: node scripts/generate-blog-image.mjs <slug> "<titel>" "<onderwerp>" [categorie]')
    console.log('Optioneel: voeg HF_TOKEN=xxx toe aan .env.local voor echte AI-afbeeldingen via FLUX')
    process.exit(1)
  }

  generateImage(slug, title, subject ?? title, category ?? '').catch((err) => {
    console.error('❌  Fout:', err.message)
    process.exit(1)
  })
}
