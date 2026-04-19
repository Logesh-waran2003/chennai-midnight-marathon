import { useRef, useState, useEffect } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  stagger,
  useAnimate,
} from 'framer-motion'

// ─── tokens ──────────────────────────────────────────────────────────────────
const C = {
  bg:         'oklch(0.07 0.025 265)',
  surface:    'oklch(0.11 0.02 265)',
  accent:     'oklch(0.76 0.19 62)',
  accentDim:  'oklch(0.55 0.14 62)',
  fg:         'oklch(0.96 0.008 265)',
  muted:      'oklch(0.52 0.015 265)',
  border:     'oklch(0.18 0.015 265)',
  bgLight:    'oklch(0.97 0.008 62)',
  surfaceLight:'oklch(0.93 0.012 62)',
  fgLight:    'oklch(0.12 0.025 265)',
  mutedLight: 'oklch(0.45 0.015 265)',
  borderLight:'oklch(0.82 0.012 62)',
}

// ─── motion variants ─────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}
const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.5 } },
}
const staggerContainer = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

// ─── nav links ───────────────────────────────────────────────────────────────
const NAV = ['Races', 'Route', 'Prizes', 'Ambassadors', 'About', 'Contact']

const RACES = [
  { label: 'Full Marathon',  dist: '42.2K', note: 'Elite & Open' },
  { label: 'Half Marathon',  dist: '21.1K', note: 'Open' },
  { label: 'Dream Run',      dist: '10K',   note: 'All levels' },
  { label: 'Midnight Dash',  dist: '5K',    note: 'Fun run' },
]

// ─── helpers ─────────────────────────────────────────────────────────────────
function useDark() {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark)
  }, [dark])
  return [dark, setDark]
}

// ─── MoonIcon ────────────────────────────────────────────────────────────────
function MoonIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
function SunIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const bg    = dark ? C.bg    : C.bgLight
  const fg    = dark ? C.fg    : C.fgLight
  const muted = dark ? C.muted : C.mutedLight
  const bdr   = dark ? C.border: C.borderLight
  const acc   = C.accent

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? `${bg}e8` : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? `1px solid ${bdr}` : '1px solid transparent',
        transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 22, letterSpacing: '0.08em', color: acc }}>CMM</span>
          <span style={{ fontFamily: '"Crimson Pro", serif', fontSize: 10, letterSpacing: '0.2em', color: muted, textTransform: 'uppercase' }}>Chennai · 2026</span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 }} className="hidden-mobile">
          {NAV.map(n => (
            <li key={n}>
              <a href="#" style={{ fontFamily: '"Crimson Pro", serif', fontSize: 15, letterSpacing: '0.06em', color: muted, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = fg}
                onMouseLeave={e => e.target.style.color = muted}
              >{n}</a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button
            onClick={() => setDark(d => !d)}
            aria-label="Toggle theme"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: muted, padding: 4, display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = fg}
            onMouseLeave={e => e.currentTarget.style.color = muted}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <motion.a
            href="#register"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: '"Bebas Neue", sans-serif', fontSize: 14, letterSpacing: '0.12em',
              background: acc, color: C.bg, padding: '8px 20px', textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Register
          </motion.a>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            style={{ background: bg, borderTop: `1px solid ${bdr}`, overflow: 'hidden' }}>
            {NAV.map(n => (
              <a key={n} href="#" style={{ display: 'block', padding: '14px 32px', color: fg, textDecoration: 'none', fontFamily: '"Crimson Pro", serif', fontSize: 18 }}>{n}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ dark }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const rawY   = useTransform(scrollYProgress, [0, 1], [0, 180])
  const backdropY = useSpring(rawY, { stiffness: 60, damping: 20 })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const bg    = dark ? C.bg    : C.bgLight
  const fg    = dark ? C.fg    : C.fgLight
  const muted = dark ? C.muted : C.mutedLight
  const bdr   = dark ? C.border: C.borderLight
  const surf  = dark ? C.surface : C.surfaceLight
  const acc   = C.accent

  return (
    <motion.section
      ref={ref}
      style={{ position: 'relative', minHeight: '100svh', background: bg, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', opacity: heroOpacity }}
    >
      {/* ── Cinematic backdrop text ── */}
      <motion.div
        style={{
          position: 'absolute', top: '50%', left: '50%',
          translateX: '-50%', translateY: '-50%',
          y: backdropY,
          pointerEvents: 'none', userSelect: 'none', zIndex: 0,
          whiteSpace: 'nowrap',
        }}
      >
        <span style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: 'clamp(120px, 22vw, 320px)',
          letterSpacing: '-0.02em',
          color: dark ? 'oklch(0.13 0.02 265)' : 'oklch(0.88 0.012 62)',
          lineHeight: 1,
          display: 'block',
        }}>
          MIDNIGHT
        </span>
      </motion.div>

      {/* ── Live badge ── */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{
          position: 'absolute', top: 96, left: 32,
          display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: '"Crimson Pro", serif', fontSize: 12,
          letterSpacing: '0.18em', textTransform: 'uppercase', color: muted,
        }}
      >
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 6, height: 6, borderRadius: '50%', background: acc, display: 'inline-block' }}
        />
        Registrations Open
      </motion.div>

      {/* ── Edition tag top-right ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          position: 'absolute', top: 96, right: 32,
          fontFamily: '"Bebas Neue", sans-serif', fontSize: 13,
          letterSpacing: '0.2em', color: muted,
          writingMode: 'vertical-rl', textOrientation: 'mixed',
        }}
      >
        Edition IV · 2026
      </motion.div>

      {/* ── Main content ── */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', width: '100%', padding: '0 32px 80px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'flex-end' }}>

        {/* Left: headline stack */}
        <motion.div variants={staggerContainer} initial="hidden" animate="show">
          <motion.p variants={fadeUp} style={{ fontFamily: '"Crimson Pro", serif', fontSize: 14, letterSpacing: '0.22em', textTransform: 'uppercase', color: acc, marginBottom: 16 }}>
            Chennai · March 15, 2026 · 11:59 PM
          </motion.p>

          <motion.h1 variants={fadeUp} style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(64px, 10vw, 140px)', lineHeight: 0.92, letterSpacing: '-0.01em', color: fg, margin: '0 0 24px' }}>
            Run the<br />
            <span style={{ color: acc }}>Night.</span><br />
            Own the<br />City.
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontFamily: '"Crimson Pro", serif', fontStyle: 'italic', fontSize: 'clamp(18px, 2vw, 24px)', color: muted, maxWidth: 420, lineHeight: 1.5, marginBottom: 40 }}>
            42.2 kilometres through Chennai's sleeping streets. The city is yours from midnight to dawn.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <motion.a
              href="#register"
              whileHover={{ scale: 1.02, background: 'oklch(0.82 0.19 62)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: '"Bebas Neue", sans-serif', fontSize: 18, letterSpacing: '0.14em',
                background: acc, color: C.bg, padding: '16px 40px',
                textDecoration: 'none', display: 'inline-block',
                transition: 'background 0.2s',
              }}
            >
              Secure Your Bib
            </motion.a>

            <motion.a
              href="#route"
              whileHover={{ color: fg }}
              style={{
                fontFamily: '"Crimson Pro", serif', fontSize: 16, letterSpacing: '0.06em',
                color: muted, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
                transition: 'color 0.2s',
              }}
            >
              <span>View Route</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: race category strip */}
        <motion.div
          variants={staggerContainer} initial="hidden" animate="show"
          style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 200 }}
        >
          {RACES.map((r, i) => (
            <motion.a
              key={r.label}
              href="#races"
              variants={fadeUp}
              whileHover={{ x: -4, background: surf }}
              style={{
                display: 'flex', flexDirection: 'column', padding: '16px 20px',
                border: `1px solid ${bdr}`, textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 28, letterSpacing: '0.04em', color: i === 0 ? acc : fg, lineHeight: 1 }}>{r.dist}</span>
              <span style={{ fontFamily: '"Crimson Pro", serif', fontSize: 13, color: fg, marginTop: 2 }}>{r.label}</span>
              <span style={{ fontFamily: '"Crimson Pro", serif', fontStyle: 'italic', fontSize: 11, color: muted, marginTop: 1 }}>{r.note}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* ── Bottom stat bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          borderTop: `1px solid ${bdr}`,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          background: dark ? 'oklch(0.09 0.022 265 / 0.7)' : 'oklch(0.95 0.01 62 / 0.8)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {[
          { val: '12,000+', label: 'Runners' },
          { val: '₹40L',    label: 'Prize Pool' },
          { val: '42.2K',   label: 'Full Course' },
          { val: 'IV',      label: 'Edition' },
        ].map((s, i) => (
          <div key={s.label} style={{
            padding: '20px 24px',
            borderRight: i < 3 ? `1px solid ${bdr}` : 'none',
          }}>
            <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 28, letterSpacing: '0.04em', color: fg }}>{s.val}</div>
            <div style={{ fontFamily: '"Crimson Pro", serif', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useDark()

  return (
    <div style={{ background: dark ? C.bg : C.bgLight, minHeight: '100vh' }}>
      <Nav dark={dark} setDark={setDark} />
      <Hero dark={dark} />

      {/* Placeholder continuation */}
      <div style={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: dark ? C.bg : C.bgLight }}>
        <p style={{ fontFamily: '"Crimson Pro", serif', fontStyle: 'italic', fontSize: 20, color: dark ? C.muted : C.mutedLight, letterSpacing: '0.06em' }}>
          — more sections below —
        </p>
      </div>
    </div>
  )
}
