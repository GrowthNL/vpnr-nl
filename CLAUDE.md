@AGENTS.md

# vpnr.nl — Project Documentation for Claude

## Wat is dit project?
Nederlandse VPN-affiliate vergelijkingssite. Doel: affiliate inkomsten via VPN-providers (NordVPN, Surfshark, ProtonVPN, etc.). Commissies €40–100 per sale + recurring.

**Live site:** https://vpnr.nl  
**GitHub:** https://github.com/GrowthNL/vpnr-nl  
**Vercel:** automatische deploy bij elke push naar `main`  
**Admin panel (affiliate links beheren):** https://vpnr.nl/admin  
**Lokaal pad:** `/Users/konovidovic/Library/CloudStorage/Dropbox/Alle Projecten/vpnr-nl`

---

## Tech Stack

| Laag | Technologie |
|---|---|
| Framework | Next.js (App Router, TypeScript) |
| Hosting | Vercel |
| Styling | Tailwind CSS |
| Content | TypeScript content-bestanden (geen CMS, geen database) |
| Afbeeldingen | AI-gegenereerd via HuggingFace FLUX.1 |
| Affiliate tracking | `/app/go/[slug]/route.ts` + `/config/affiliates.ts` |

---

## Projectstructuur

```
/app                        Next.js routes
  /beste-vpn/[usecase]      Use-case pagina's (bijv. voor-netflix, voor-iphone)
  /vpn-reviews/[slug]       Provider review pagina's
  /vpn-vergelijken          Hoofdvergelijkingspagina (alle providers)
  /vpn-vergelijken/[slug]   Head-to-head vergelijkingen (bijv. nordvpn-vs-surfshark)
  /blog/[slug]              Blog artikel pagina's
  /go/[slug]                Affiliate redirect (→ config/affiliates.ts)
  /sitemap.ts               Auto-gegenereerde sitemap

/content
  /providers/               Provider data (één .ts bestand per provider)
    index.ts                Exporteert providers[] array + getProvider()
    nordvpn.ts, surfshark.ts, protonvpn.ts, hideme.ts,
    cyberghost.ts, purevpn.ts, mcafee.ts, vpnnederland.ts
  usecases.ts               Use-case pagina content (UseCase interface)
  comparisons.ts            Vergelijkingspagina content (Comparison interface)
  posts.ts                  Blog posts (BlogPost interface)

/components                 Herbruikbare React components
  Header.tsx, Footer.tsx, VPNCard.tsx, ProviderLogo.tsx,
  IPBanner.tsx, FAQAccordion.tsx, JsonLd.tsx, AuthorBio.tsx

/config
  affiliates.ts             ENIGE plek met echte affiliate URLs

/public/blog/               Blog hero-afbeeldingen (AI-gegenereerd, .jpg)
/public/logos/              Provider logo's (.svg)

/scripts
  generate-blog-image.mjs   Automatisch afbeeldingen genereren (zie hieronder)
```

---

## Content toevoegen

### Nieuwe blog post

1. Voeg een entry toe aan `/content/posts.ts` (volg het `BlogPost` interface exact)
2. Genereer automatisch een afbeelding:
   ```bash
   node scripts/generate-blog-image.mjs <slug> "<titel>" "<onderwerp>" "<categorie>"
   ```
3. Zet `image: '/blog/<slug>.jpg'` in de post entry
4. Commit en push → Vercel deployt automatisch

**Categorieën:** `Gids` | `Tips` | `Uitleg` | `Privacy` | `Deals` | `Vergelijking`

**BlogPost interface vereisten:**
- `slug`, `title`, `metaTitle`, `metaDescription`, `excerpt`
- `category`, `date` ("4 juni 2026"), `dateISO` ("2026-06-04"), `updatedISO`, `readTime`, `author`
- `image` ("/blog/[slug].jpg"), `imageAlt` (SEO-beschrijvend, <125 tekens, keyword erin)
- `intro` (plain text, geen HTML)
- `sections[]` met `heading`, `body[]` (mag `<strong>`, `<em>`, `<a>` HTML bevatten), optioneel `highlight`, `table`, `cta` (provider slug)
- `faqs[]`, `relatedProviders[]`, `relatedSlugs[]`, `tags[]`

### Nieuwe use-case pagina

Voeg een entry toe aan `/content/usecases.ts` (UseCase interface):
- `slug`, `title`, `metaTitle`, `metaDescription`, `canonical`
- `icon` (emoji), `intro`, `verdict`
- `topProviders[]` (3 slugs, alleen providers die in de site staan)
- `keyFeature`, `tips[]` (5 tips)
- `sections[]` (4 secties met `heading` + `body[]`)
- `faqs[]` (5 vragen), `relatedSlugs[]`

**Bestaande use-cases:** voor-netflix, voor-streaming, voor-torrenten, voor-gaming, gratis, goedkoop, voor-iphone, voor-mac, voor-android, voor-thuiswerken, voor-belgie

### Nieuwe vergelijkingspagina

Voeg een entry toe aan `/content/comparisons.ts` en update `/app/sitemap.ts` als er vergelijkingen bijkomen.

### Nieuwe provider toevoegen

1. Maak `/content/providers/[slug].ts` aan (volg VPNProvider interface in `types.ts`)
2. Voeg toe aan `/content/providers/index.ts`
3. Voeg affiliate link toe aan `/config/affiliates.ts`
4. Voeg logo toe aan `/public/logos/[slug].svg`

**Huidige providers:** nordvpn, surfshark, protonvpn, hideme, cyberghost, purevpn, mcafee, vpnnederland

---

## Afbeeldingen genereren (automatisch)

Het script `scripts/generate-blog-image.mjs` genereert automatisch hero-afbeeldingen.

**Vereiste in `.env.local`:**
```
HF_TOKEN=hf_...   # HuggingFace Read token (gratis, huggingface.co/settings/tokens)
```

**Gebruik:**
```bash
node scripts/generate-blog-image.mjs <slug> "<titel>" "<onderwerp>" "<categorie>"
```

**Werking:**
- Als `HF_TOKEN` aanwezig: genereert echte AI-foto via FLUX.1-schnell (HuggingFace)
- Zonder token: genereert professionele SVG-illustratie als fallback
- Slaat op als `/public/blog/<slug>.jpg` (of `.svg`)

**Endpoint:** `router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell`

**Alt-tekst conventies:**
- Beschrijf wat er feitelijk in de afbeelding staat (niet de prompt)
- Verwerk het primaire keyword
- Onder 125 tekens, in het Nederlands
- Geen "afbeelding van", "illustratie van", "foto van"

---

## Affiliate links

Alle affiliate links staan **alleen** in `/config/affiliates.ts`. De site gebruikt `/go/[slug]` routes die doorsturen. Nooit directe affiliate URLs in content-bestanden zetten.

```
nordvpn   → lt45.net/...
surfshark → get.surfshark.net/...
protonvpn → glp8.net/...
hideme    → rkn3.net/...
cyberghost → ho-app.cyberghostvpn.com/...
purevpn   → anrdoezrs.net/...
mcafee    → mcafee.com/...
vpnnederland → fr135.net/...
```

---

## SEO-conventies

- **Canonicals:** altijd volledig (`https://vpnr.nl/pad`)
- **Schema's:** FAQPage + BreadcrumbList op elke content-pagina; Article schema op blogposts
- **Sitemap:** auto-gegenereerd in `/app/sitemap.ts` — nieuwe routes hier toevoegen
- **Afbeeldingsbestandsnamen:** lowercase, koppeltekens, beschrijvend (bijv. `vpn-android-instellen.jpg`)
- **metaTitle:** max ~60 tekens, jaar erin, keyword vooraan
- **metaDescription:** max ~155 tekens, CTA-achtig

---

## Deploy workflow

```bash
# Altijd vanuit de project-root:
git add <bestanden>
git commit -m "Beschrijving"
git push origin main   # → Vercel deployt automatisch
```

**Vercel deployt elke push naar `main` automatisch.**  
`.env.local` staat in `.gitignore` en wordt nooit gecommit.

---

## Navigatie (header & footer)

**Header:** Beste VPN | Reviews | Vergelijken | Blog | Contact  
*(Niet aanpassen zonder goede reden — compact houden)*

**Footer kolommen:**
1. Brand + adres (Growth Online Marketing Bureau, Almere, KvK 67106366)
2. Reviews (nordvpn t/m hideme)
3. Beste VPN voor (alle use-cases)
4. Vergelijkingen (vergelijkingspagina's)
5. Info (over-ons, contact, disclosure, privacy)

---

## Wat er al staat (juni 2026)

**Use-case pagina's (/beste-vpn/):**
voor-netflix, voor-streaming, voor-torrenten, voor-gaming, gratis, goedkoop,
voor-iphone, voor-mac, voor-android, voor-thuiswerken, voor-belgie

**Vergelijkingspagina's (/vpn-vergelijken/):**
nordvpn-vs-surfshark, protonvpn-vs-surfshark

**Blog posts (/blog/):**
vpn-buitenland-gebruiken, netflix-vpn-werkt-niet, vpn-protocol-vergelijking,
vpn-ip-adres-verbergen, goedkoopste-vpn-deals, vpn-android-instellen,
vpn-iphone-instellen, vpn-windows-instellen, nordvpn-korting, kill-switch-vpn,
wat-is-mijn-ip-adres, nordvpn-vs-surfshark, vpn-thuiswerken

**Statische pagina's:**
/, /beste-vpn, /vpn-reviews, /vpn-vergelijken, /wat-is-een-vpn,
/over-ons, /contact, /affiliate-disclosure, /privacy-policy
