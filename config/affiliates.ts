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
  nordvpn:      'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=JOUWID',
  surfshark:    'https://surfshark.com/vpn-deal?coupon=JOUWCODE',
  protonvpn:    'https://protonvpn.com/?ref=JOUWID',
  hideme:       'https://hide.me/en/vpn?ref=JOUWCODE',
  cyberghost:   'https://www.cyberghostvpn.com/affiliates/?coupon=JOUWCODE',
  purevpn:      'https://www.purevpn.com/order?aff_id=JOUWID',
  mcafee:       'https://www.mcafee.com/en-nl/index.html?ref=JOUWCODE',
  vpnnederland: 'https://www.vpnnederland.nl/?ref=JOUWCODE',
}

/**
 * Fallback URL als een slug niet gevonden wordt.
 * Bezoekers komen dan op de vergelijkingspagina terecht.
 */
export const AFFILIATE_FALLBACK = '/beste-vpn'
