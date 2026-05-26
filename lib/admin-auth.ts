/**
 * Admin authenticatie — gebruikt Web Crypto API zodat het werkt
 * in zowel Node.js als de Edge runtime (middleware).
 */

const COOKIE_NAME = 'vpnr_admin'
const SESSION_MAX_AGE = 7 * 24 * 60 * 60 * 1000 // 7 dagen

function getSecret(): string {
  return process.env.ADMIN_SECRET ?? 'dev-secret-change-in-production'
}

async function hmac(data: string, secret: string): Promise<string> {
  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data))
  return Array.from(new Uint8Array(sig))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

/** Maak een gesigneerd sessie-token aan */
export async function createSessionToken(): Promise<string> {
  const ts = Date.now().toString()
  const signature = await hmac(`${ts}:admin`, getSecret())
  return `${ts}.${signature}`
}

/** Controleer of een token geldig is */
export async function verifySessionToken(token: string): Promise<boolean> {
  const dotIdx = token.indexOf('.')
  if (dotIdx === -1) return false

  const ts = token.slice(0, dotIdx)
  const sig = token.slice(dotIdx + 1)

  if (!ts || !sig) return false

  // Verlopen na 7 dagen
  if (Date.now() - parseInt(ts) > SESSION_MAX_AGE) return false

  const expected = await hmac(`${ts}:admin`, getSecret())

  // Constante-tijd vergelijking
  if (sig.length !== expected.length) return false
  let diff = 0
  for (let i = 0; i < sig.length; i++) {
    diff |= sig.charCodeAt(i) ^ expected.charCodeAt(i)
  }
  return diff === 0
}

export function getCookieName() {
  return COOKIE_NAME
}
