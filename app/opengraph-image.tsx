import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'vpnr.nl | Beste VPN Nederland 2026'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e40af 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Achtergrond glow */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 800,
            height: 400,
            background: 'rgba(59, 130, 246, 0.15)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />

        {/* Logo badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 50,
            padding: '10px 24px',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: '#4ade80',
              boxShadow: '0 0 8px #4ade80',
            }}
          />
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, fontWeight: 600 }}>
            vpnr.nl · Onafhankelijk getest 2026
          </span>
        </div>

        {/* Hoofdtitel */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: 24,
            letterSpacing: '-2px',
          }}
        >
          Beste VPN
          <br />
          <span style={{ color: '#60a5fa' }}>Nederland 2026</span>
        </div>

        {/* Subtitel */}
        <div
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.5)',
            textAlign: 'center',
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          Onafhankelijke vergelijking · Eerlijke reviews · Actuele prijzen
        </div>

        {/* Stats balk */}
        <div
          style={{
            display: 'flex',
            gap: 48,
            marginTop: 56,
            paddingTop: 40,
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {[
            { value: '20+', label: "VPN's getest" },
            { value: '100%', label: 'Onafhankelijk' },
            { value: '€2,49', label: 'Goedkoopste VPN' },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: 36, fontWeight: 900, color: 'white' }}>{value}</div>
              <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  )
}
