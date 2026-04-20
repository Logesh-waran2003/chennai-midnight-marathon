export const ORANGE = '#f56221'
export const DARK_BG = 'rgb(2, 1, 6)'
export const LIGHT_PURPLE = '#dab1d9'
export const BODY_TEXT = '#333333'
export const WHITE = '#ffffff'
export const HEADING_DARK = '#1c244b'
export const BASE = '/v4'

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

export const RACES = [
  { name: 'Government Schools Relay', dist: '5 x 200m', time: '04:30 PM', desc: 'Government school children showcasing their talent on the big stage.' },
  { name: 'BK5K Run', dist: '5 KM (timed)', time: '06:30 PM', desc: 'A great way to challenge yourself as a runner or set your first goal.' },
  { name: '5K Fun Run', dist: '5 KM (non-timed)', time: '06:40 PM', desc: 'The flagship event with maximum participation. For everyone who loves running.' },
  { name: '10K Run', dist: '10 KM', time: '08:30 PM', desc: 'The T20 of marathons. For serious runners building towards longer distances.' },
  { name: 'Full Marathon', dist: '42.195 KM', time: '11:00 PM', desc: 'The ultimate test of endurance. AIMS certified course through Chennai.' },
  { name: '31.6K Run', dist: '31.65 KM', time: '11:10 PM', desc: 'The stepping stone towards a full marathon. A new and exciting distance.' },
  { name: 'Half Marathon', dist: '21.097 KM', time: '11:25 PM', desc: 'If you can run a half, you are well on your way to 42.195 km.' },
]
