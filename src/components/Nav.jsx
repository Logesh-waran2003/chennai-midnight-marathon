import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ACCENT, NAV_LINKS } from './constants'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-xl tracking-wider" style={{ color: ACCENT }}>
          CMM<span className="text-white/40 text-xs ml-2 tracking-[0.2em]">2026</span>
        </Link>

        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map(l => (
            <li key={l.label}>
              <Link to={l.path} className="text-sm text-white/50 hover:text-white transition-colors duration-300 tracking-wide">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/register"
              className="font-display text-sm tracking-[0.15em] px-5 py-2 hidden sm:inline-block"
              style={{ background: ACCENT, color: '#000' }}
            >
              REGISTER
            </Link>
          </motion.div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/60 hover:text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen
                ? <path d="M6 6l12 12M6 18L18 6" />
                : <path d="M4 8h16M4 16h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/95 border-t border-white/5 overflow-hidden"
          >
            {NAV_LINKS.map(l => (
              <Link key={l.label} to={l.path} onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 text-white/70 hover:text-white font-display tracking-wide border-b border-white/5">
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
