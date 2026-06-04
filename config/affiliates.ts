/**
 * config/affiliates.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * CENTRALE AFFILIATE LINK CONFIGURATIE
 *
 * Dit is de enige plek waar echte affiliate URLs staan.
 * Alle links op de site gebruiken /go/[slug] — deze config bepaalt
 * waarheen die doorgestuurd worden.
 *
 * Link aanpassen  → verander de URL hieronder, klaar.
 * Provider toevoegen → voeg een regel toe + maak content/providers/[slug].ts aan.
 * Provider verwijderen → verwijder de regel + verwijder het provider bestand.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const affiliateLinks: Record<string, string> = {
  nordvpn:      'https://lt45.net/c/?si=13179&li=1579239&wi=421843&ws=',
  surfshark:    'https://get.surfshark.net/aff_c?offer_id=45&aff_id=3259',
  protonvpn:    'https://glp8.net/c/?si=21749&li=1917830&wi=421843&ws=',
  hideme:       'https://rkn3.net/c/?si=14381&li=1804212&wi=421843&ws=',
  cyberghost:   'https://ho-app.cyberghostvpn.com/aff_c?offer_id=2631&aff_id=7868',
  purevpn:      'https://www.anrdoezrs.net/click-8068741-13842739',
  mcafee:       'https://www.mcafee.com/en-nl/index.html?ref=JOUWCODE',
  vpnnederland: 'https://fr135.net/c/?si=15398&li=1667864&wi=421843&ws=',
}

/**
 * Fallback URL als een slug niet gevonden wordt.
 * Bezoekers komen dan op de vergelijkingspagina terecht.
 */
export const AFFILIATE_FALLBACK = '/beste-vpn'
