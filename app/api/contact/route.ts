import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const RECIPIENT = 'contact@vpnr.nl'
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY
const MIN_SCORE = 0.5

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, token } = await req.json()

    // Basis validatie
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Vul alle verplichte velden in.' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Ongeldig e-mailadres.' }, { status: 400 })
    }

    // reCAPTCHA v3 verificatie (skip als secret niet geconfigureerd)
    if (RECAPTCHA_SECRET && token) {
      const verifyRes = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${token}`,
        { method: 'POST' },
      )
      const verifyData = await verifyRes.json()

      if (!verifyData.success || verifyData.score < MIN_SCORE) {
        return NextResponse.json(
          { error: 'Verificatie mislukt. Probeer het opnieuw.' },
          { status: 400 },
        )
      }
    }

    // E-mail versturen via Resend
    await resend.emails.send({
      // Gebruik je eigen domein zodra je vpnr.nl hebt geverifieerd in Resend.
      // Tot die tijd werkt 'onboarding@resend.dev' alleen naar je eigen adres.
      from: 'vpnr.nl Contact <onboarding@resend.dev>',
      to: [RECIPIENT],
      replyTo: email,
      subject: `[vpnr.nl] ${subject ?? 'Contactformulier'} — ${name}`,
      text: [
        `Naam:    ${name}`,
        `E-mail:  ${email}`,
        `Onderwerp: ${subject ?? '—'}`,
        '',
        'Bericht:',
        message,
        '',
        '---',
        'Verzonden via het contactformulier op vpnr.nl',
      ].join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact/route]', err)
    return NextResponse.json(
      { error: 'Er ging iets mis. Probeer het later opnieuw.' },
      { status: 500 },
    )
  }
}
