import { Link } from 'react-router-dom'
import { LIGHT_PURPLE, WHITE, FOOTER_BG, POPPINS, ARCHIVO, BASE } from './constants'

const LINKS = [
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
    <footer style={{ background: FOOTER_BG, padding: '50px 37px 28px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 36, marginBottom: 36 }}>
        <div>
          <h6 style={{ fontFamily: POPPINS, fontWeight: 600, fontSize: 16, color: WHITE, marginBottom: 10 }}>CMM</h6>
          <p style={{ fontFamily: ARCHIVO, fontSize: 13, color: LIGHT_PURPLE, lineHeight: 1.7 }}>
            Organised by RBITC, the Chennai Midnight Marathon is South India's premier midnight marathon and the most sought after flagship fund-raising event with scores of runners participating to support the cause.
          </p>
          <div style={{ marginTop: 14 }}>
            <p style={{ fontFamily: ARCHIVO, fontSize: 12, color: LIGHT_PURPLE }}>Location: Island Grounds, Chennai</p>
            <p style={{ fontFamily: ARCHIVO, fontSize: 12, color: LIGHT_PURPLE }}>+91 44 2345 6789</p>
            <p style={{ fontFamily: ARCHIVO, fontSize: 12, color: LIGHT_PURPLE }}>info@chennaimidnightmarathon.run</p>
          </div>
        </div>
        <div>
          <h6 style={{ fontFamily: POPPINS, fontWeight: 600, fontSize: 13, color: WHITE, marginBottom: 10 }}>Site Links</h6>
          {LINKS.map(l => (
            <Link key={l.label} to={l.path} style={{ display: 'block', fontFamily: ARCHIVO, fontSize: 12, color: LIGHT_PURPLE, textDecoration: 'none', marginBottom: 5, transition: 'color 0.15s' }}
              onMouseEnter={e => e.target.style.color = WHITE}
              onMouseLeave={e => e.target.style.color = LIGHT_PURPLE}
            >{l.label}</Link>
          ))}
        </div>
        <div>
          <h6 style={{ fontFamily: POPPINS, fontWeight: 600, fontSize: 13, color: WHITE, marginBottom: 10 }}>Follow Us</h6>
          <div style={{ display: 'flex', gap: 10 }}>
            {['Twitter', 'Facebook', 'YouTube', 'Instagram'].map(s => (
              <a key={s} href="#" style={{ fontFamily: ARCHIVO, fontSize: 12, color: LIGHT_PURPLE, textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color = WHITE}
                onMouseLeave={e => e.target.style.color = LIGHT_PURPLE}
              >{s}</a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16, textAlign: 'center' }}>
        <p style={{ fontFamily: ARCHIVO, fontSize: 11, color: 'rgba(218,177,217,0.4)' }}>
          © 2026 Chennai Midnight Marathon. Organised by RBITC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
