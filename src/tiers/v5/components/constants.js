// Exact colors extracted from reference site via browser-harness
export const ORANGE = 'rgb(245, 98, 33)'
export const DARK_BG = 'rgb(2, 1, 6)'
export const FOOTER_BG = 'rgb(23, 22, 20)'
export const INSTA_BG = 'rgb(27, 26, 24)'
export const LIGHT_PURPLE = 'rgb(218, 177, 217)'
export const BODY_TEXT = 'rgb(51, 51, 51)'
export const WHITE = 'rgb(255, 255, 255)'
export const BLACK = 'rgb(0, 0, 0)'
export const HEADING_DARK = 'rgb(28, 36, 75)'
export const CONTACT_BLUE = 'rgb(50, 74, 109)'
export const BASE = '/v5'

// Exact font stacks from reference
export const GRECHEN = '"Grechen Fuemen", cursive'
export const POPPINS = 'Poppins, sans-serif'
export const ARCHIVO = 'Archivo, sans-serif'
export const SYSTEM = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

// Image paths (local, downloaded via browser-harness canvas extraction)
export const IMG = '/images/v4'

export const NAV_ITEMS = [
  { label: 'THE RACE', children: [
    { label: 'Race Events', path: `${BASE}/races` },
    { label: 'Registration Terms', path: `${BASE}/terms` },
    { label: 'Running for Rookies', path: `${BASE}/rookies` },
    { label: 'Prize Money & Awards', path: `${BASE}/prizes` },
    { label: 'Medical Advisory', path: `${BASE}/medical` },
    { label: 'Celebrity Ambassadors', path: `${BASE}/celebrities` },
  ]},
  { label: 'PARTNERSHIP', children: [
    { label: 'Opportunities', path: `${BASE}/opportunities` },
    { label: 'Partners', path: `${BASE}/partners` },
  ]},
  { label: 'PHILANTHROPY', path: `${BASE}/philanthropy` },
  { label: 'ABOUT', children: [
    { label: 'CMM', path: `${BASE}/about` },
    { label: 'RBITC', path: `${BASE}/rbitc` },
  ]},
  { label: 'Race Route Map', path: `${BASE}/route` },
  { label: 'FAQs', path: `${BASE}/faqs` },
]
