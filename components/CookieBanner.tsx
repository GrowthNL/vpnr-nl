'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const save = (value: 'all' | 'necessary') => {
    localStorage.setItem('cookie-consent', value)
    // Notify Analytics component in the same tab
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: value }))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950 border-t border-gray-800 shadow-2xl">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <Cookie className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-300 leading-relaxed">
            vpnr.nl gebruikt cookies voor analytisch gebruik en een goede werking van de site.{' '}
            <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
              Meer informatie
            </Link>
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={() => save('necessary')}
            className="flex-1 sm:flex-none px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-lg transition-colors"
          >
            Alleen noodzakelijk
          </button>
          <button
            onClick={() => save('all')}
            className="flex-1 sm:flex-none px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
          >
            Akkoord
          </button>
        </div>
      </div>
    </div>
  )
}
