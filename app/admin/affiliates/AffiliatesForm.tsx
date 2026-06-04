'use client'

import { useState } from 'react'
import { Check, Pencil, X, ExternalLink, LogOut, AlertCircle } from 'lucide-react'

interface Props {
  initialLinks: Record<string, string>
  kvReady: boolean
}

const PROVIDER_LABELS: Record<string, string> = {
  nordvpn:      'NordVPN',
  surfshark:    'Surfshark',
  protonvpn:    'ProtonVPN',
  hideme:       'Hide.me',
  cyberghost:   'CyberGhost',
  purevpn:      'PureVPN',
  mcafee:       'McAfee VPN',
  vpnnederland: 'VPN Nederland',
}

function isPlaceholder(url: string) {
  return url.includes('JOUWID') || url.includes('JOUWCODE') || url.includes('JOUWLINK')
}

export default function AffiliatesForm({ initialLinks, kvReady }: Props) {
  const [links, setLinks] = useState<Record<string, string>>(initialLinks)
  const [editing, setEditing] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState<string | null>(null)
  const [saved, setSaved] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function startEdit(slug: string) {
    setEditing(prev => ({ ...prev, [slug]: links[slug] }))
    setSaved(null)
    setError(null)
  }

  function cancelEdit(slug: string) {
    setEditing(prev => {
      const next = { ...prev }
      delete next[slug]
      return next
    })
  }

  async function saveLink(slug: string) {
    const url = editing[slug]?.trim()
    if (!url) return

    setSaving(slug)
    setError(null)

    const res = await fetch('/api/admin/links', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, url }),
    })

    setSaving(null)

    if (res.ok) {
      setLinks(prev => ({ ...prev, [slug]: url }))
      cancelEdit(slug)
      setSaved(slug)
      setTimeout(() => setSaved(null), 3000)
    } else {
      const data = await res.json()
      setError(data.error ?? 'Opslaan mislukt.')
    }
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    window.location.href = '/admin'
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-bold text-white">Affiliate links</h1>
            <p className="text-gray-500 text-xs mt-0.5">vpnr.nl admin</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Uitloggen
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8 space-y-4">

        {/* KV waarschuwing */}
        {!kvReady && (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-amber-300 mb-1">Vercel KV niet gekoppeld</p>
              <p className="text-amber-400/80">
                Links worden nu alleen lokaal getoond en kunnen niet worden opgeslagen.
                Koppel een KV-database via het Vercel dashboard (Storage → Create → KV).
              </p>
            </div>
          </div>
        )}

        {/* Foutmelding */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Links tabel */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="px-5 py-3 border-b border-white/10 text-xs font-semibold text-gray-400 uppercase tracking-wider grid grid-cols-[160px_1fr_80px] gap-4">
            <span>Aanbieder</span>
            <span>Affiliate URL</span>
            <span></span>
          </div>

          {Object.entries(links).map(([slug, url]) => {
            const isEditing = slug in editing
            const isSaving = saving === slug
            const isSaved = saved === slug
            const placeholder = isPlaceholder(url)

            return (
              <div
                key={slug}
                className="px-5 py-4 border-b border-white/5 last:border-0 grid grid-cols-[160px_1fr_80px] gap-4 items-center"
              >
                {/* Naam */}
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full flex-shrink-0 bg-white/10" style={{
                    backgroundColor: placeholder ? '#f59e0b' : '#22c55e',
                    boxShadow: placeholder ? '' : '0 0 6px #22c55e66',
                  }} />
                  <span className="font-medium text-sm text-white">
                    {PROVIDER_LABELS[slug] ?? slug}
                  </span>
                </div>

                {/* URL veld */}
                <div className="min-w-0">
                  {isEditing ? (
                    <input
                      type="url"
                      value={editing[slug]}
                      onChange={e => setEditing(prev => ({ ...prev, [slug]: e.target.value }))}
                      onKeyDown={e => {
                        if (e.key === 'Enter') saveLink(slug)
                        if (e.key === 'Escape') cancelEdit(slug)
                      }}
                      autoFocus
                      placeholder="https://..."
                      className="w-full bg-white/10 border border-blue-500/50 text-white text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={`text-sm truncate ${placeholder ? 'text-amber-400/70 italic' : 'text-gray-300'}`}>
                        {placeholder ? '⚠ Nog niet ingesteld' : url}
                      </span>
                      {!placeholder && (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-400 flex-shrink-0"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Acties */}
                <div className="flex items-center justify-end gap-1.5">
                  {isEditing ? (
                    <>
                      <button
                        onClick={() => saveLink(slug)}
                        disabled={isSaving}
                        className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 transition-colors"
                        title="Opslaan"
                      >
                        <Check className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => cancelEdit(slug)}
                        className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        title="Annuleren"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => startEdit(slug)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isSaved
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white'
                      }`}
                      title="Bewerken"
                    >
                      {isSaved ? <Check className="w-3.5 h-3.5" /> : <Pencil className="w-3.5 h-3.5" />}
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-gray-600 text-xs text-center">
          Wijzigingen zijn direct actief op vpnr.nl/go/[aanbieder] · Geen deploy nodig
        </p>
      </main>
    </div>
  )
}
