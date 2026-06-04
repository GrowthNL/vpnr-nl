export default function Logo({ size = 44 }: { size?: number }) {
  const scale = size / 44
  const w = Math.round(185 * scale)
  const h = Math.round(44 * scale)

  return (
    <svg width={w} height={h} viewBox="0 0 185 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="55%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
        {/* Lichte verloop op de tekst: helder links → diep rechts */}
        <linearGradient id="textGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <radialGradient id="glowGrad" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#1d4ed8" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Glow achter schild */}
      <ellipse cx="22" cy="26" rx="18" ry="16" fill="url(#glowGrad)" />

      {/* Shield */}
      <g filter="url(#shadow)">
        <path
          d="M22 2L7 8v11c0 8.5 6 16.2 15 18.5C31 35.2 37 27.5 37 19V8L22 2z"
          fill="url(#shieldGrad)"
        />
        <path
          d="M22 5L10 10.5v8.5c0 6.8 4.7 12.8 12 14.8 7.3-2 12-8 12-14.8v-8.5L22 5z"
          fill="white"
          fillOpacity="0.14"
        />
        <path
          d="M16 21.5l4 4 8.5-8.5"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* VPNR — caps, lichte verloop */}
      <text
        x="50"
        y="32"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontWeight="900"
        fontSize="27"
        letterSpacing="0.5"
        fill="url(#textGrad)"
      >
        VPNR
      </text>

      {/* .nl — direct aansluitend */}
      <text
        x="148"
        y="32"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontWeight="600"
        fontSize="19"
        fill="#3b82f6"
        fillOpacity="0.65"
      >
        .nl
      </text>
    </svg>
  )
}
