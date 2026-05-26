import { ShieldCheck, Calendar } from 'lucide-react'

interface Props {
  author?: string
  updatedDate?: string
}

export default function AuthorBio({
  author = 'Redactie vpnr.nl',
  updatedDate,
}: Props) {
  return (
    <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 my-8">
      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
        <ShieldCheck className="w-6 h-6 text-white" />
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
              Bijgewerkt:{' '}
              <strong className="text-gray-600">{updatedDate}</strong>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
