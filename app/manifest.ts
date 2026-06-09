import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'vpnr.nl — Beste VPN Nederland',
    short_name: 'vpnr.nl',
    description: 'Vergelijk de beste VPN-diensten voor Nederland. Onafhankelijke reviews en actuele deals.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#1e3a8a',
    lang: 'nl',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
