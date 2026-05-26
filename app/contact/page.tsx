import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Clock, FileText, ShieldCheck, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | vpnr.nl',
  description:
    'Neem contact op met het vpnr.nl-team. Vragen over VPN-reviews, samenwerking of pers? We reageren binnen 2 werkdagen.',
  alternates: { canonical: 'https://vpnr.nl/contact' },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-glow text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-black mb-3">Contact</h1>
          <p className="text-blue-100 text-lg">
            Vragen, feedback of samenwerking? We horen graag van je.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Contact opties */}
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            <a
              href="mailto:contact@vpnr.nl"
              className="flex items-start gap-4 bg-white rounded-2xl p-6 card-main hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                <Mail className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">E-mail</div>
                <div className="text-sm text-blue-600 font-medium">contact@vpnr.nl</div>
                <div className="text-xs text-gray-400 mt-1">Voor algemene vragen</div>
              </div>
            </a>

            <a
              href="mailto:pers@vpnr.nl"
              className="flex items-start gap-4 bg-white rounded-2xl p-6 card-main hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 transition-colors">
                <MessageSquare className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">Pers & media</div>
                <div className="text-sm text-purple-600 font-medium">pers@vpnr.nl</div>
                <div className="text-xs text-gray-400 mt-1">Voor journalisten en media</div>
              </div>
            </a>
          </div>

          {/* Reactietijd */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-blue-500" />
              <h2 className="font-bold text-gray-900">Reactietijd</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              We proberen alle vragen binnen <strong>2 werkdagen</strong> te beantwoorden.
              Bij vragen over een specifieke VPN-review vermeld dan de naam van de provider en
              je e-mailadres, zodat we je snel kunnen helpen.
            </p>
          </div>

          {/* Veelgestelde contactvragen */}
          <h2 className="text-xl font-black text-gray-900 mb-5">Veelgestelde vragen</h2>
          <div className="space-y-4 mb-12">
            {[
              {
                Icon: ShieldCheck,
                vraag: 'Kan ik een VPN-aanbieder laten beoordelen?',
                antwoord:
                  'We accepteren geen betaalde reviews of gesponsorde content. Onze vergelijking is volledig onafhankelijk. We ontvangen wel affiliatecommissies als je via onze links iets koopt, maar dit heeft geen invloed op onze scores.',
              },
              {
                Icon: FileText,
                vraag: 'Ik zie een fout in een artikel, hoe meld ik dat?',
                antwoord:
                  'Stuur een e-mail naar contact@vpnr.nl met de URL van het artikel en een omschrijving van de fout. We nemen iedere melding serieus en passen onze content zo snel mogelijk aan als het klopt.',
              },
              {
                Icon: Mail,
                vraag: 'Ik wil samenwerken of adverteren op vpnr.nl.',
                antwoord:
                  'Neem contact op via contact@vpnr.nl voor samenwerkingsmogelijkheden. We werken uitsluitend met VPN-aanbieders die onze kwaliteitsstandaard halen. We plaatsen geen banneradvertenties.',
              },
            ].map(({ Icon, vraag, antwoord }) => (
              <div key={vraag} className="bg-white rounded-2xl p-5 card-main">
                <div className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">{vraag}</div>
                    <p className="text-sm text-gray-500 leading-relaxed">{antwoord}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="text-center text-sm text-gray-400 space-x-4">
            <Link href="/over-ons" className="hover:text-blue-600 transition-colors">
              Over ons
            </Link>
            <span>·</span>
            <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">
              Privacybeleid
            </Link>
            <span>·</span>
            <Link href="/affiliate-disclosure" className="hover:text-blue-600 transition-colors">
              Affiliate disclosure
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
