export const ACCENT = 'oklch(0.76 0.19 62)'
export const ACCENT_DIM = 'oklch(0.55 0.14 62)'

export const RACES = [
  { name: 'Full Marathon', dist: '42.2', unit: 'KM', price: '₹2,500', tag: 'Elite & Open', color: ACCENT },
  { name: 'Half Marathon', dist: '21.1', unit: 'KM', price: '₹1,800', tag: 'Open Category', color: '#f59e0b' },
  { name: 'Dream Run', dist: '10', unit: 'KM', price: '₹1,200', tag: 'All Levels', color: '#8b5cf6' },
  { name: 'Midnight Dash', dist: '5', unit: 'KM', price: '₹800', tag: 'Fun Run', color: '#06b6d4' },
]

export const STATS = [
  { value: 12000, suffix: '+', label: 'Runners' },
  { value: 40, suffix: 'L', prefix: '₹', label: 'Prize Pool' },
  { value: 42, suffix: '.2K', label: 'Full Course' },
  { value: 4, suffix: '', label: 'Editions' },
]

export const NAV_LINKS = [
  { label: 'Races', path: '/races' },
  { label: 'Route', path: '/route' },
  { label: 'Prizes', path: '/prizes' },
  { label: 'Ambassadors', path: '/ambassadors' },
  { label: 'About', path: '/about' },
  { label: 'FAQs', path: '/faqs' },
  { label: 'Contact', path: '/contact' },
]
