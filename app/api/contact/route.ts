import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY
const MIN_SCORE = 0.5

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_PORT !== '587', // true voor 465, false voor 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

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

    // E-mail versturen via SMTP (bijv. je Vimexx/DirectAdmin mailbox)
    const transporter = createTransporter()
    const recipient = process.env.SMTP_USER ?? ''

    await transporter.sendMail({
      from: `"vpnr.nl Contact" <${recipient}>`,
      to: recipient,
      replyTo: `"${name}" <${email}>`,
      subject: `[vpnr.nl] ${subject ?? 'Contactformulier'} — ${name}`,
      text: [
        `Naam:      ${name}`,
        `E-mail:    ${email}`,
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
