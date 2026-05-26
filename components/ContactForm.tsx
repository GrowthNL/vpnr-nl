'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, opts: { action: string }) => Promise<string>
    }
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

type Status = 'idle' | 'loading' | 'success' | 'error'

const subjects = [
  'Algemene vraag',
  'Fout melden in een artikel',
  'Samenwerking of adverteren',
  'Pers & media',
  'Overig',
]

async function getRecaptchaToken(action: string): Promise<string | null> {
  if (!SITE_KEY || typeof window === 'undefined' || !window.grecaptcha) return null
  return new Promise((resolve) => {
    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(SITE_KEY, { action })
        resolve(token)
      } catch {
        resolve(null)
      }
    })
  })
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    const token = await getRecaptchaToken('contact')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, token }),
      })

      const json = await res.json()
      if (!res.ok) throw new Error(json.error ?? 'Er ging iets mis.')

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Er ging iets mis.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="font-black text-gray-900 text-lg mb-2">Bericht ontvangen!</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Bedankt voor je bericht. We reageren binnen 2 werkdagen.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-5 text-sm text-blue-600 hover:underline"
        >
          Nog een bericht sturen
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Naam + e-mail */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="name">
            Naam <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jan de Vries"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">
            E-mailadres <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jan@voorbeeld.nl"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
      </div>

      {/* Onderwerp */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="subject">
          Onderwerp
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        >
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Bericht */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="message">
          Bericht <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Stel hier je vraag of beschrijf je verzoek..."
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
        />
      </div>

      {/* Foutmelding */}
      {status === 'error' && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <div className="flex items-center justify-between gap-4 pt-1">
        <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
          Beveiligd met reCAPTCHA.{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="underline hover:text-gray-600">
            Privacybeleid
          </a>{' '}
          &amp;{' '}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener" className="underline hover:text-gray-600">
            Voorwaarden
          </a>{' '}
          van Google zijn van toepassing.
        </p>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex items-center gap-2 btn-shimmer text-white font-bold px-6 py-3 rounded-xl shadow-md shadow-blue-500/20 disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:scale-[1.02] flex-shrink-0"
        >
          {status === 'loading' ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Versturen...</>
          ) : (
            <><Send className="w-4 h-4" /> Versturen</>
          )}
        </button>
      </div>
    </form>
  )
}
