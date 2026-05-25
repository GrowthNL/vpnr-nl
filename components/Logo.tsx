export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size * 3.2} height={size} viewBox="0 0 128 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield icon */}
      <path
        d="M16 4L6 8v10c0 6.6 4.3 12.8 10 15 5.7-2.2 10-8.4 10-15V8L16 4z"
        fill="url(#shieldGrad)"
      />
      <path
        d="M12 19l3 3 6-6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* vpnr text */}
      <text
        x="36"
        y="28"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="white"
        letterSpacing="-0.5"
      >
        vpnr
      </text>
      <text
        x="96"
        y="28"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="400"
        fontSize="14"
        fill="rgba(110,159,255,0.7)"
      >
        .nl
      </text>
      <defs>
        <linearGradient id="shieldGrad" x1="6" y1="4" x2="26" y2="37" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6e9fff" />
          <stop offset="100%" stopColor="#4687ff" />
        </linearGradient>
      </defs>
    </svg>
  )
}
