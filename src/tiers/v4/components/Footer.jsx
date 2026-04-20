import { Link } from 'react-router-dom'
import { LIGHT_PURPLE, WHITE, BASE } from './constants'

const FOOTER_LINKS = [
  { label: 'Race Events', path: `${BASE}/races` },
  { label: 'Race Route Map', path: `${BASE}/route` },
  { label: 'Contact Us', path: `${BASE}/contact` },
  { label: 'FAQs', path: `${BASE}/faqs` },
  { label: 'RBITC', path: `${BASE}/rbitc` },
  { label: 'About CMM', path: `${BASE}/about` },
  { label: 'Refund Policy', path: `${BASE}/refund` },
  { label: 'Privacy Policy', path: `${BASE}/privacy` },
  { label: 'Terms & Conditions', path: `${BASE}/terms` },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a2e', padding: '60px 24px 32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 40, marginBottom: 40 }}>
        <div>
          <h6 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 18, color: WHITE, marginBottom: 12 }}>CMM</h6>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 14, color: LIGHT_PURPLE, lineHeight: 1.7 }}>
            Organised by RBITC, the Chennai Midnight Marathon is South India's premier midnight marathon and the most sought after flagship fund-raising event with scores of runners participating to support the cause.
          </p>
          <div style={{ marginTop: 16 }}>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 13, color: LIGHT_PURPLE }}>Location: Island Grounds, Chennai</p>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 13, color: LIGHT_PURPLE }}>+91 44 2345 6789</p>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 13, color: LIGHT_PURPLE }}>info@chennaimidnightmarathon.run</p>
          </div>
        </div>
        <div>
          <h6 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: WHITE, marginBottom: 12 }}>Site Links</h6>
          {FOOTER_LINKS.map(l => (
            <Link key={l.label} to={l.path} style={{ display: 'block', fontFamily: 'Archivo, sans-serif', fontSize: 13, color: LIGHT_PURPLE, textDecoration: 'none', marginBottom: 6, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = WHITE}
              onMouseLeave={e => e.target.style.color = LIGHT_PURPLE}
            >{l.label}</Link>
          ))}
        </div>
        <div>
          <h6 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: WHITE, marginBottom: 12 }}>Follow Us</h6>
          <div style={{ display: 'flex', gap: 12 }}>
            {['Twitter', 'Facebook', 'YouTube', 'Instagram'].map(s => (
              <a key={s} href="#" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 13, color: LIGHT_PURPLE, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = WHITE}
                onMouseLeave={e => e.target.style.color = LIGHT_PURPLE}
              >{s}</a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20, textAlign: 'center' }}>
        <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 12, color: 'rgba(218,177,217,0.5)' }}>
          © 2026 Chennai Midnight Marathon. Organised by RBITC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
