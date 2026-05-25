export default function Logo({ size = 36 }: { size?: number }) {
  const scale = size / 40
  const w = Math.round(160 * scale)
  const h = Math.round(40 * scale)

  return (
    <svg width={w} height={h} viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="textGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <filter id="shieldShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#3b82f6" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Shield */}
      <g filter="url(#shieldShadow)">
        <path
          d="M20 3L8 8v9c0 7.2 5.1 13.9 12 15.9 6.9-2 12-8.7 12-15.9V8L20 3z"
          fill="url(#shieldTop)"
        />
        {/* Inner shield highlight */}
        <path
          d="M20 5.5L10 9.8v7.7c0 5.8 4 11 10 12.8 6-1.8 10-7 10-12.8V9.8L20 5.5z"
          fill="white"
          fillOpacity="0.12"
        />
        {/* Checkmark */}
        <path
          d="M15.5 20l3.2 3.2 6.8-6.8"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* vpnr tekst */}
      <text
        x="46"
        y="29"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontWeight="800"
        fontSize="26"
        letterSpacing="-1"
        fill="url(#textGrad)"
      >
        vpnr
      </text>

      {/* .nl accent */}
      <text
        x="111"
        y="29"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontWeight="500"
        fontSize="18"
        fill="#3b82f6"
        fillOpacity="0.7"
      >
        .nl
      </text>

      {/* Subtiele onderstreep accent */}
      <rect x="46" y="32" width="68" height="2" rx="1" fill="url(#textGrad)" opacity="0.15" />
    </svg>
  )
}
