import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  AnimatePresence,
} from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const C = {
  bg: 'oklch(0.07 0.025 265)', surface: 'oklch(0.11 0.02 265)',
  accent: 'oklch(0.76 0.19 62)', accentDim: 'oklch(0.55 0.14 62)',
  fg: 'oklch(0.96 0.008 265)', muted: 'oklch(0.52 0.015 265)',
  border: 'oklch(0.18 0.015 265)',
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const NAV = ['Races', 'Route', 'Prizes', 'Ambassadors', 'About', 'Contact']
const RACES = [
  { label: 'Full Marathon', dist: '42.2K', note: 'Elite & Open', price: '\u20B92,500' },
  { label: 'Half Marathon', dist: '21.1K', note: 'Open', price: '\u20B91,800' },
  { label: 'Dream Run', dist: '10K', note: 'All levels', price: '\u20B91,200' },
  { label: 'Midnight Dash', dist: '5K', note: 'Fun run', price: '\u20B9800' },
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? `${C.bg}e8` : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? `1px solid ${C.border}` : '1px solid transparent',
        transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 22, letterSpacing: '0.08em', color: C.accent }}>CMM</span>
          <span style={{ fontFamily: '"Crimson Pro", serif', fontSize: 10, letterSpacing: '0.2em', color: C.muted, textTransform: 'uppercase' }}>Chennai \u00B7 2026</span>
        </a>
        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 }} className="hidden-mobile">
          {NAV.map(n => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`} style={{ fontFamily: '"Crimson Pro", serif', fontSize: 15, letterSpacing: '0.06em', color: C.muted, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = C.fg}
                onMouseLeave={e => e.target.style.color = C.muted}
              >{n}</a>
            </li>
          ))}
        </ul>
        <motion.a href="#register" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 14, letterSpacing: '0.12em', background: C.accent, color: C.bg, padding: '8px 20px', textDecoration: 'none' }}>
          Register
        </motion.a>
      </div>
    </motion.nav>
  )
}

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 180])
  const backdropY = useSpring(rawY, { stiffness: 60, damping: 20 })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <motion.section ref={ref}
      style={{ position: 'relative', minHeight: '100svh', background: C.bg, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', opacity: heroOpacity }}>
      <motion.div style={{ position: 'absolute', top: '50%', left: '50%', translateX: '-50%', translateY: '-50%', y: backdropY, pointerEvents: 'none', userSelect: 'none', zIndex: 0, whiteSpace: 'nowrap' }}>
        <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(120px, 22vw, 320px)', letterSpacing: '-0.02em', color: 'oklch(0.13 0.02 265)', lineHeight: 1 }}>MIDNIGHT</span>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 0.5 }}
        style={{ position: 'absolute', top: 96, left: 32, display: 'flex', alignItems: 'center', gap: 8, fontFamily: '"Crimson Pro", serif', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.muted }}>
        <motion.span animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 6, height: 6, borderRadius: '50%', background: C.accent, display: 'inline-block' }} />
        Registrations Open
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        style={{ position: 'absolute', top: 96, right: 32, fontFamily: '"Bebas Neue", sans-serif', fontSize: 13, letterSpacing: '0.2em', color: C.muted, writingMode: 'vertical-rl' }}>
        Edition IV \u00B7 2026
      </motion.div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', width: '100%', padding: '0 32px 80px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'flex-end' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="show">
          <motion.p variants={fadeUp} style={{ fontFamily: '"Crimson Pro", serif', fontSize: 14, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.accent, marginBottom: 16 }}>
            Chennai \u00B7 March 15, 2026 \u00B7 11:59 PM
          </motion.p>
          <motion.h1 variants={fadeUp} style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(64px, 10vw, 140px)', lineHeight: 0.92, letterSpacing: '-0.01em', color: C.fg, margin: '0 0 24px' }}>
            Run the<br /><span style={{ color: C.accent }}>Night.</span><br />Own the<br />City.
          </motion.h1>
          <motion.p variants={fadeUp} style={{ fontFamily: '"Crimson Pro", serif', fontStyle: 'italic', fontSize: 'clamp(18px, 2vw, 24px)', color: C.muted, maxWidth: 420, lineHeight: 1.5, marginBottom: 40 }}>
            42.2 kilometres through Chennai's sleeping streets. The city is yours from midnight to dawn.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <motion.a href="#register" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 18, letterSpacing: '0.14em', background: C.accent, color: C.bg, padding: '16px 40px', textDecoration: 'none' }}>
              Secure Your Bib
            </motion.a>
            <a href="#route" style={{ fontFamily: '"Crimson Pro", serif', fontSize: 16, letterSpacing: '0.06em', color: C.muted, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>View Route</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </motion.div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" animate="show" style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 200 }}>
          {RACES.map((r, i) => (
            <motion.a key={r.label} href="#races" variants={fadeUp} whileHover={{ x: -4, background: C.surface }}
              style={{ display: 'flex', flexDirection: 'column', padding: '16px 20px', border: `1px solid ${C.border}`, textDecoration: 'none', cursor: 'pointer', transition: 'background 0.2s' }}>
              <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 28, letterSpacing: '0.04em', color: i === 0 ? C.accent : C.fg, lineHeight: 1 }}>{r.dist}</span>
              <span style={{ fontFamily: '"Crimson Pro", serif', fontSize: 13, color: C.fg, marginTop: 2 }}>{r.label}</span>
              <span style={{ fontFamily: '"Crimson Pro", serif', fontStyle: 'italic', fontSize: 11, color: C.muted, marginTop: 1 }}>{r.note}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.6 }}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, borderTop: `1px solid ${C.border}`, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: 'oklch(0.09 0.022 265 / 0.7)', backdropFilter: 'blur(8px)' }}>
        {[
          { val: '12,000+', label: 'Runners' }, { val: '\u20B940L', label: 'Prize Pool' },
          { val: '42.2K', label: 'Full Course' }, { val: 'IV', label: 'Edition' },
        ].map((s, i) => (
          <div key={s.label} style={{ padding: '20px 24px', borderRight: i < 3 ? `1px solid ${C.border}` : 'none' }}>
            <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 28, letterSpacing: '0.04em', color: C.fg }}>{s.val}</div>
            <div style={{ fontFamily: '"Crimson Pro", serif', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  )
}

function GsapSection({ children, className = '' }) {
  const ref = useRef(null)
  useGSAP(() => {
    gsap.from(ref.current, {
      opacity: 0, y: 60,
      duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play none none none' },
    })
  }, { scope: ref })
  return <section ref={ref} className={className}>{children}</section>
}

function RacesSection() {
  const containerRef = useRef(null)
  useGSAP(() => {
    gsap.from('.race-card', {
      opacity: 0, y: 40, stagger: 0.15, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
    })
  }, { scope: containerRef })

  return (
    <section id="races" ref={containerRef} style={{ background: C.bg, padding: '120px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: '"Crimson Pro", serif', fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.accent, marginBottom: 12 }}>Race Categories</p>
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(48px, 6vw, 80px)', color: C.fg, lineHeight: 1, margin: 0 }}>Choose Your Distance</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {RACES.map((r, i) => (
            <motion.div key={r.label} className="race-card" whileHover={{ y: -8, borderColor: C.accent }}
              style={{ border: `1px solid ${C.border}`, padding: 32, background: C.surface, cursor: 'pointer', transition: 'border-color 0.3s' }}>
              <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 56, color: i === 0 ? C.accent : C.fg, lineHeight: 1, marginBottom: 8 }}>{r.dist}</div>
              <div style={{ fontFamily: '"Crimson Pro", serif', fontSize: 18, color: C.fg, marginBottom: 4 }}>{r.label}</div>
              <div style={{ fontFamily: '"Crimson Pro", serif', fontStyle: 'italic', fontSize: 14, color: C.muted, marginBottom: 16 }}>{r.note}</div>
              <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 22, color: C.fg }}>{r.price}</span>
                <span style={{ fontFamily: '"Crimson Pro", serif', fontSize: 13, color: C.accent, letterSpacing: '0.1em' }}>Early Bird</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RouteSection() {
  const pathRef = useRef(null)
  useGSAP(() => {
    const path = pathRef.current
    if (!path) return
    const length = path.getTotalLength()
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
    gsap.to(path, {
      strokeDashoffset: 0, duration: 2, ease: 'power2.inOut',
      scrollTrigger: { trigger: path.closest('section'), start: 'top 70%' },
    })
  })

  return (
    <GsapSection>
      <div id="route" style={{ background: C.bg, padding: '120px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontFamily: '"Crimson Pro", serif', fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.accent, marginBottom: 12 }}>The Course</p>
            <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(48px, 6vw, 80px)', color: C.fg, lineHeight: 1, margin: 0 }}>42.2 KM Route</h2>
          </div>
          <div style={{ border: `1px solid ${C.border}`, aspectRatio: '2.5/1', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.6 }} viewBox="0 0 1000 400" fill="none">
              <path ref={pathRef} d="M50 350 C150 280, 200 100, 350 150 S500 350, 600 180 S800 50, 950 200" stroke={C.accent} strokeWidth="2.5" />
            </svg>
            <div style={{ textAlign: 'center', zIndex: 1 }}>
              <p style={{ fontFamily: '"Crimson Pro", serif', fontSize: 14, color: C.muted }}>Marina Beach \u2192 Mylapore \u2192 Adyar \u2192 Besant Nagar \u2192 Finish</p>
            </div>
          </div>
        </div>
      </div>
    </GsapSection>
  )
}

function SponsorsSection() {
  const sponsors = ['Nike', 'Gatorade', 'TCS', 'SBI', 'Apollo', 'Decathlon', 'Garmin', 'Asics']
  return (
    <GsapSection>
      <div style={{ background: C.bg, padding: '80px 32px', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: '"Crimson Pro", serif', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted, marginBottom: 32 }}>Official Partners</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32 }}>
            {sponsors.map(s => (
              <span key={s} style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 18, color: 'oklch(0.25 0.015 265)', letterSpacing: '0.1em', transition: 'color 0.2s', cursor: 'default' }}
                onMouseEnter={e => e.target.style.color = C.muted}
                onMouseLeave={e => e.target.style.color = 'oklch(0.25 0.015 265)'}
              >{s}</span>
            ))}
          </div>
        </div>
      </div>
    </GsapSection>
  )
}

function CTASection() {
  const textRef = useRef(null)
  useGSAP(() => {
    gsap.from(textRef.current, {
      scale: 0.9, opacity: 0, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: textRef.current, start: 'top 80%' },
    })
  })

  return (
    <section style={{ background: C.bg, padding: '160px 32px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, oklch(0.76 0.19 62 / 0.08), transparent 70%)`, pointerEvents: 'none' }} />
      <div ref={textRef} style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(56px, 8vw, 100px)', color: C.fg, lineHeight: 0.95, margin: '0 0 24px' }}>
          Ready to own<br />the <span style={{ color: C.accent }}>night?</span>
        </h2>
        <p style={{ fontFamily: '"Crimson Pro", serif', fontStyle: 'italic', fontSize: 18, color: C.muted, marginBottom: 40 }}>
          Limited bibs available. Early bird pricing ends February 28, 2026.
        </p>
        <motion.a href="#register" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 20, letterSpacing: '0.14em', background: C.accent, color: C.bg, padding: '18px 48px', textDecoration: 'none', display: 'inline-block' }}>
          Register Now
        </motion.a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: '48px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 20, color: C.accent, letterSpacing: '0.08em' }}>CMM</span>
          <span style={{ fontFamily: '"Crimson Pro", serif', fontSize: 12, color: C.muted, marginLeft: 12 }}>Chennai Midnight Marathon</span>
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Instagram', 'Twitter', 'YouTube'].map(s => (
            <a key={s} href="#" style={{ fontFamily: '"Crimson Pro", serif', fontSize: 13, color: C.muted, textDecoration: 'none' }}>{s}</a>
          ))}
        </div>
        <p style={{ fontFamily: '"Crimson Pro", serif', fontSize: 12, color: 'oklch(0.25 0.015 265)' }}>\u00A9 2026 CMM. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  return (
    <div style={{ background: C.bg, minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <RacesSection />
      <RouteSection />
      <SponsorsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
