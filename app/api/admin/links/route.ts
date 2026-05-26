import { NextResponse } from 'next/server'
import { getAllAffiliateLinks, setAffiliateLink, getProviderSlugs } from '@/lib/kv-affiliates'
import { verifySessionToken, getCookieName } from '@/lib/admin-auth'
import { cookies } from 'next/headers'

async function isAuthed(): Promise<boolean> {
  const jar = await cookies()
  const token = jar.get(getCookieName())?.value
  return token ? verifySessionToken(token) : false
}

/** GET /api/admin/links */
export async function GET() {
  if (!await isAuthed()) {
    return NextResponse.json({ error: 'Niet ingelogd.' }, { status: 401 })
  }
  const links = await getAllAffiliateLinks()
  return NextResponse.json(links)
}

/** POST /api/admin/links */
export async function POST(request: Request) {
  if (!await isAuthed()) {
    return NextResponse.json({ error: 'Niet ingelogd.' }, { status: 401 })
  }

  let body: { slug?: string; url?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Ongeldig verzoek.' }, { status: 400 })
  }

  const { slug, url } = body

  if (!slug || !url) {
    return NextResponse.json({ error: 'slug en url zijn verplicht.' }, { status: 400 })
  }

  if (!getProviderSlugs().includes(slug)) {
    return NextResponse.json({ error: `Onbekende provider: ${slug}` }, { status: 400 })
  }

  try {
    new URL(url)
  } catch {
    return NextResponse.json({ error: 'Ongeldige URL.' }, { status: 400 })
  }

  try {
    await setAffiliateLink(slug, url)
    return NextResponse.json({ ok: true })
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Opslaan mislukt.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
