import type { VPNProvider } from '@/content/providers/types'

export default function CTABox({ provider }: { provider: VPNProvider }) {
  return (
    <div className="card-featured bg-blue-50 rounded-2xl p-6 my-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">Aanbevolen deal</div>
          <h3 className="text-xl font-black text-gray-900">{provider.naam}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{provider.prijzen.gratisPeriode}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-3xl font-black text-gray-900">
            €{provider.prijzen.tweeJaar ?? provider.prijzen.jaarlijks}
            <span className="text-sm font-normal text-gray-400">/maand</span>
          </div>
        </div>
      </div>
      <a
        href={provider.affiliateLink}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="btn-shimmer mt-4 block w-full text-center text-white font-bold py-3.5 rounded-xl hover:scale-[1.01] transition-transform shadow-md shadow-blue-500/20"
      >
        {provider.ctaTekst} →
      </a>
      <p className="text-xs text-gray-400 text-center mt-2">
        Affiliate link · {provider.prijzen.gratisPeriode}
      </p>
    </div>
  )
}
