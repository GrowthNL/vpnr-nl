'use client'

import Link from 'next/link'
import Logo from './Logo'
import { useState } from 'react'

const navLinks = [
  { href: '/beste-vpn', label: 'Beste VPN' },
  { href: '/vpn-reviews', label: 'Reviews' },
  { href: '/vpn-vergelijken', label: 'Vergelijken' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-18 flex items-center justify-between py-3">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo size={44} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-blue-700 transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/beste-vpn"
            className="btn-shimmer text-white text-sm font-bold px-5 py-2.5 rounded-full hover:scale-105 transition-transform shadow-md shadow-blue-500/20"
          >
            Vergelijk VPN&apos;s
          </Link>

          {/* Hamburger button — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={open}
          >
            <span className={`block h-0.5 w-5 bg-gray-700 transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-5 bg-gray-700 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-gray-700 transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-gray-700 hover:text-blue-700 border-b border-gray-50 last:border-0 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
