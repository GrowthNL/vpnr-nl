import { NextResponse } from 'next/server'
import { createSessionToken, getCookieName } from '@/lib/admin-auth'

export async function POST(request: Request) {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) {
    return NextResponse.json(
      { error: 'Admin-toegang is niet geconfigureerd.' },
      { status: 503 },
    )
  }

  let body: { password?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Ongeldig verzoek.' }, { status: 400 })
  }

  const submitted = body.password ?? ''

  // Vergelijk via Web Crypto (constante-tijd)
  const enc = new TextEncoder()
  const hashA = await crypto.subtle.digest('SHA-256', enc.encode(submitted))
  const hashB = await crypto.subtle.digest('SHA-256', enc.encode(adminPassword))
  const a = new Uint8Array(hashA)
  const b = new Uint8Array(hashB)
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i]

  if (diff !== 0) {
    return NextResponse.json({ error: 'Onjuist wachtwoord.' }, { status: 401 })
  }

  const token = await createSessionToken()
  const response = NextResponse.json({ ok: true })

  response.cookies.set(getCookieName(), token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 7 * 24 * 60 * 60,
  })

  return response
}
