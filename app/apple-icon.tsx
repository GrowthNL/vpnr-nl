import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

// iOS thuisscherm icoon — 180×180 PNG gegenereerd via ImageResponse
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Shield + checkmark als inline SVG via img data-URI */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="s" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#60a5fa"/>
                  <stop offset="100%" stop-color="#1d4ed8"/>
                </linearGradient>
              </defs>
              <path d="M50 8L18 20v32c0 19 13.5 36.5 32 41 18.5-4.5 32-22 32-41V20L50 8z" fill="url(#s)"/>
              <path d="M50 13L23 23v29c0 16 11 30.5 27 35 16-4.5 27-19 27-35V23L50 13z" fill="white" fill-opacity="0.1"/>
              <path d="M37 52l10 10 21-22" stroke="white" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>`
          )}`}
          width={130}
          height={140}
          alt=""
        />
      </div>
    ),
    { ...size },
  )
}
