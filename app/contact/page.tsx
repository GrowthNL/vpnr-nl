import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Clock, ShieldCheck, FileText, MessageSquare } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | vpnr.nl',
  description:
    'Neem contact op met het vpnr.nl-team. Vragen over VPN-reviews, samenwerking of pers? We reageren binnen 2 werkdagen.',
  alternates: { canonical: 'https://vpnr.nl/contact' },
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

export default function ContactPage() {
  return (
    <>
      {/* reCAPTCHA v3 — laadt asynchroon, geen zichtbaar element */}
      {SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}

      {/* Hero */}
      <section className="hero-glow text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-black mb-3">Contact</h1>
          <p className="text-blue-100 text-lg">
            Vragen, feedback of samenwerking? Stuur ons een bericht.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto lg:grid lg:grid-cols-5 lg:gap-12">

          {/* Formulier — 3 kolommen breed */}
          <div className="lg:col-span-3 mb-12 lg:mb-0">
            <h2 className="text-xl font-black text-gray-900 mb-6">Stuur een bericht</h2>
            <div className="bg-white rounded-2xl p-6 card-main">
              <ContactForm />
            </div>
          </div>

          {/* Sidebar — 2 kolommen breed */}
          <div className="lg:col-span-2 space-y-5">

            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-blue-500" />
                <h3 className="font-bold text-gray-900 text-sm">Reactietijd</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                We reageren binnen <strong className="text-gray-700">2 werkdagen</strong> op
                alle berichten.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <h3 className="font-bold text-gray-900 text-sm">Onafhankelijkheid</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                We accepteren geen betaalde reviews of gesponsorde content. Onze vergelijking
                is volledig onafhankelijk.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-4 h-4 text-purple-500" />
                <h3 className="font-bold text-gray-900 text-sm">Pers & media</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Journalisten en media: kies "Pers &amp; media" als onderwerp, dan behandelen
                we je verzoek met prioriteit.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-orange-400" />
                <h3 className="font-bold text-gray-900 text-sm">Fout melden</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Zie je een fout in een artikel of verouderde prijs? Vermeld de URL en we
                passen het zo snel mogelijk aan.
              </p>
            </div>

            <div className="text-xs text-gray-400 space-x-3 pt-2">
              <Link href="/over-ons" className="hover:text-blue-600 transition-colors">Over ons</Link>
              <span>·</span>
              <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacybeleid</Link>
              <span>·</span>
              <Link href="/affiliate-disclosure" className="hover:text-blue-600 transition-colors">Affiliate disclosure</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
