'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function Analytics() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Check on mount
    if (localStorage.getItem('cookie-consent') === 'all') setReady(true)

    // Listen for consent updates in the same tab
    const handler = (e: Event) => {
      if ((e as CustomEvent).detail === 'all') setReady(true)
    }
    window.addEventListener('cookie-consent-updated', handler)
    return () => window.removeEventListener('cookie-consent-updated', handler)
  }, [])

  if (!GA_ID || !ready) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { anonymize_ip: true });
      `}</Script>
    </>
  )
}
