import { Link } from 'react-router-dom'
import { ACCENT, NAV_LINKS } from './constants'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="font-display font-bold text-2xl tracking-wider" style={{ color: ACCENT }}>
              CMM
            </Link>
            <p className="text-white/40 text-sm mt-3 leading-relaxed">
              Chennai Midnight Marathon. Run the night, own the city.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-[0.15em] text-white/70 mb-4">NAVIGATE</h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 4).map(l => (
                <li key={l.label}>
                  <Link to={l.path} className="text-sm text-white/40 hover:text-white/70 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-[0.15em] text-white/70 mb-4">INFO</h4>
            <ul className="space-y-2">
              {[
                { label: 'For Rookies', path: '/rookies' },
                { label: 'Medical Advisory', path: '/medical' },
                { label: 'Terms', path: '/terms' },
                { label: 'Privacy', path: '/privacy' },
              ].map(l => (
                <li key={l.label}>
                  <Link to={l.path} className="text-sm text-white/40 hover:text-white/70 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-[0.15em] text-white/70 mb-4">CONNECT</h4>
            <div className="flex gap-4">
              {['Instagram', 'Twitter', 'YouTube'].map(s => (
                <a key={s} href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors tracking-wide">{s}</a>
              ))}
            </div>
            <p className="text-white/30 text-xs mt-6">info@chennaimimidnightmarathon.run</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/20">© 2026 Chennai Midnight Marathon. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/refund" className="text-xs text-white/20 hover:text-white/40 transition-colors">Refund Policy</Link>
            <Link to="/privacy" className="text-xs text-white/20 hover:text-white/40 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-xs text-white/20 hover:text-white/40 transition-colors">T&C</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
