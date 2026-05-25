'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function IPBanner() {
  const [ip, setIp] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((r) => r.json())
      .then((d) => setIp(d.ip))
      .catch(() => setIp('onbekend'))
  }, [])

  if (!ip) return null

  return (
    <div className="bg-red-950/80 border-b border-red-500/30 backdrop-blur-sm py-2.5 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="ip-pulse animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          <span className="text-red-200">
            <span className="font-semibold text-white">Je IP-adres is zichtbaar:</span>{' '}
            <span className="font-mono text-red-300">{ip}</span>
            {' '}— Je verbinding is <span className="font-semibold text-red-400">niet beveiligd</span>
          </span>
        </div>
        <Link
          href="/beste-vpn"
          className="flex-shrink-0 bg-red-500 hover:bg-red-400 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors"
        >
          Bescherm jezelf →
        </Link>
      </div>
    </div>
  )
}
