import Link from 'next/link'
import { Calendar, MapPin } from 'lucide-react'
import { getAuthor } from '@/content/authors'

interface Props {
  author?: string
  updatedDate?: string
}

export default function AuthorBio({ author = 'Redactie vpnr.nl', updatedDate }: Props) {
  const authorSlug = author === 'Tim Verhoeven' ? 'tim-verhoeven' : null
  const authorData = authorSlug ? getAuthor(authorSlug) : null

  if (authorData) {
    return (
      <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 my-8">
        <div className="w-14 h-14 rounded-full flex-shrink-0 overflow-hidden bg-blue-700 flex items-center justify-center text-white font-black text-lg shadow-sm select-none">
          TV
        </div>
        <div className="flex-1 min-w-0">
          <Link
            href={`/auteur/${authorData.slug}`}
            className="font-black text-gray-900 text-sm hover:text-blue-700 transition-colors"
          >
            {authorData.name}
          </Link>
          <div className="text-xs text-blue-600 font-medium mt-0.5 mb-2">
            {authorData.title}
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            {authorData.shortBio}
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-2.5">
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <MapPin className="w-3 h-3" />
              <span>{authorData.location}</span>
            </div>
            {updatedDate && (
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Calendar className="w-3 h-3" />
                <span>Bijgewerkt: <strong className="text-gray-600">{updatedDate}</strong></span>
              </div>
            )}
          </div>
          <Link
            href={`/auteur/${authorData.slug}`}
            className="inline-block mt-3 text-xs text-blue-500 hover:underline font-medium"
          >
            Meer artikelen van {authorData.name} →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 my-8">
      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm text-white font-black text-sm select-none">
        vR
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-bold text-gray-900 text-sm">{author}</div>
        <div className="text-xs text-blue-600 font-medium mt-0.5 mb-2">
          Onafhankelijk VPN-expert · vpnr.nl
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">
          Het vpnr.nl-team test VPN-diensten onafhankelijk op snelheid, beveiliging, privacy en
          gebruiksgemak. We verdienen via affiliate-commissies en accepteren geen betaalde
          reviews of gesponsorde content.
        </p>
        {updatedDate && (
          <div className="flex items-center gap-1.5 mt-2.5 text-xs text-gray-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>
              Bijgewerkt: <strong className="text-gray-600">{updatedDate}</strong>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
