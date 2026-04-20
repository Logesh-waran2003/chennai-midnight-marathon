import { useRef, useState, useEffect, useCallback } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  AnimatePresence,
} from 'framer-motion'

// ─── constants ────────────────────────────────────────────────────────────────
const ACCENT = 'oklch(0.76 0.19 62)'
const ACCENT_DIM = 'oklch(0.55 0.14 62)'
const NAV_LINKS = ['Races', 'Route', 'Prizes', 'About', 'Contact']

const RACES = [
  { name: 'Full Marathon', dist: '42.2', unit: 'KM', price: '₹2,500', tag: 'Elite & Open', color: ACCENT },
  { name: 'Half Marathon', dist: '21.1', unit: 'KM', price: '₹1,800', tag: 'Open Category', color: '#f59e0b' },
  { name: 'Dream Run', dist: '10', unit: 'KM', price: '₹1,200', tag: 'All Levels', color: '#8b5cf6' },
  { name: 'Midnight Dash', dist: '5', unit: 'KM', price: '₹800', tag: 'Fun Run', color: '#06b6d4' },
]

const STATS = [
  { value: 12000, suffix: '+', label: 'Runners' },
  { value: 40, suffix: 'L', prefix: '₹', label: 'Prize Pool' },
  { value: 42, suffix: '.2K', label: 'Full Course' },
  { value: 4, suffix: '', label: 'Editions' },
]

const WHY_POINTS = [
  { title: 'Zero Traffic', desc: 'Empty roads. No diversions. Pure running through Chennai\'s iconic streets.' },
  { title: 'Cool Breeze', desc: 'Night temperatures drop to 22°C. Perfect running conditions, no sun fatigue.' },
  { title: 'City Lights', desc: 'Marina Beach to Mylapore temples — see Chennai like never before, lit up at night.' },
  { title: 'Electric Crowd', desc: '12,000 runners, live DJs at every kilometer, energy that carries you to the finish.' },
]

// ─── Starfield Canvas ─────────────────────────────────────────────────────────
function Starfield() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const starsRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w = window.innerWidth
    let h = window.innerHeight

    canvas.width = w
    canvas.height = h

    starsRef.current = Array.from({ length: 150 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.3 + 0.05,
      opacity: Math.random() * 0.7 + 0.3,
      pulse: Math.random() * Math.PI * 2,
    }))

    function draw() {
      ctx.clearRect(0, 0, w, h)
      for (const s of starsRef.current) {
        s.y -= s.speed
        s.pulse += 0.01
        if (s.y < -5) { s.y = h + 5; s.x = Math.random() * w }
        const alpha = s.opacity * (0.6 + 0.4 * Math.sin(s.pulse))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 200, 100, ${alpha})`
        ctx.fill()
      }
      animRef.current = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      w = window.innerWidth; h = window.innerHeight
      canvas.width = w; canvas.height = h
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener('resize', onResize) }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}

// ─── Animated Counter ─────────────────────────────────────────────────────────
function Counter({ value, suffix = '', prefix = '', duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = value
    const step = end / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, value, duration])

  return (
    <span ref={ref} className="font-display font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

// ─── Section wrapper with reveal ──────────────────────────────────────────────
function Section({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative z-10 ${className}`}
    >
      {children}
    </motion.section>
  )
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
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
      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-xl tracking-wider" style={{ color: ACCENT }}>
          CMM<span className="text-white/40 text-xs ml-2 tracking-[0.2em]">2026</span>
        </a>

        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-sm text-white/50 hover:text-white transition-colors duration-300 tracking-wide">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <motion.a
            href="#register"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="font-display text-sm tracking-[0.15em] px-5 py-2 hidden sm:inline-block"
            style={{ background: ACCENT, color: '#000' }}
          >
            REGISTER
          </motion.a>

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
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 text-white/70 hover:text-white font-display tracking-wide border-b border-white/5">
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const backdropScale = useTransform(scrollYProgress, [0, 1], [1, 1.3])
  const springY = useSpring(textY, { stiffness: 50, damping: 20 })

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Giant backdrop text */}
      <motion.div
        style={{ scale: backdropScale }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display font-black text-[18vw] md:text-[16vw] tracking-tight text-white/[0.03] leading-none">
          MIDNIGHT
        </span>
      </motion.div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: `radial-gradient(circle, oklch(0.76 0.19 62 / 0.4), transparent 70%)` }} />

      {/* Content */}
      <motion.div
        style={{ y: springY, opacity: textOpacity }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full inline-block"
            style={{ background: ACCENT }}
          />
          <span className="text-xs tracking-[0.3em] uppercase text-white/50 font-display">
            Registrations Open · March 15, 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8"
        >
          <span className="text-white">Run the</span>
          <br />
          <span style={{ color: ACCENT }}>Night.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-lg md:text-xl text-white/50 max-w-lg mx-auto mb-12 leading-relaxed"
        >
          42.2 kilometres through Chennai's sleeping streets. The city is yours from midnight to dawn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#register"
            whileHover={{ scale: 1.03, boxShadow: `0 0 40px oklch(0.76 0.19 62 / 0.4)` }}
            whileTap={{ scale: 0.97 }}
            className="font-display font-semibold text-lg tracking-[0.12em] px-10 py-4 text-black"
            style={{ background: ACCENT }}
          >
            SECURE YOUR BIB
          </motion.a>
          <a href="#route" className="text-white/40 hover:text-white transition-colors text-sm tracking-wide flex items-center gap-2">
            View Route
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function StatsSection() {
  return (
    <Section className="py-20 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl md:text-5xl mb-2" style={{ color: ACCENT }}>
              <Counter value={s.value} suffix={s.suffix} prefix={s.prefix} />
            </div>
            <div className="text-xs tracking-[0.2em] uppercase text-white/40 font-display">{s.label}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ─── Races ────────────────────────────────────────────────────────────────────
function RacesSection() {
  return (
    <Section id="races" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display font-bold text-4xl md:text-6xl text-center mb-4 tracking-tight">
          Choose Your <span style={{ color: ACCENT }}>Distance</span>
        </h2>
        <p className="text-white/40 text-center mb-16 max-w-md mx-auto">
          Four categories. One unforgettable night. Pick your challenge.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {RACES.map((race, i) => (
            <motion.div
              key={race.name}
              whileHover={{ y: -8, borderColor: race.color }}
              transition={{ duration: 0.3 }}
              className="border border-white/10 p-6 flex flex-col group cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div className="text-6xl font-display font-black leading-none mb-1" style={{ color: race.color }}>
                {race.dist}
              </div>
              <div className="text-xs tracking-[0.2em] text-white/30 font-display mb-4">{race.unit}</div>
              <div className="text-white font-display font-medium text-lg mb-1">{race.name}</div>
              <div className="text-white/40 text-sm mb-4">{race.tag}</div>
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="font-display font-semibold text-white">{race.price}</span>
                <svg className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// ─── Why Midnight ─────────────────────────────────────────────────────────────
function WhySection() {
  return (
    <Section id="route" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display font-bold text-4xl md:text-6xl text-center mb-4 tracking-tight">
          Why <span style={{ color: ACCENT }}>Midnight?</span>
        </h2>
        <p className="text-white/40 text-center mb-16 max-w-md mx-auto">
          Running at night isn't just different — it's transformative.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {WHY_POINTS.map((p, i) => (
            <motion.div
              key={p.title}
              whileHover={{ x: 4 }}
              className="border-l-2 pl-6 py-4"
              style={{ borderColor: i === 0 ? ACCENT : 'rgba(255,255,255,0.1)' }}
            >
              <h3 className="font-display font-semibold text-xl text-white mb-2">{p.title}</h3>
              <p className="text-white/40 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// ─── Route Map Placeholder ────────────────────────────────────────────────────
function RouteSection() {
  return (
    <Section className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative border border-white/10 aspect-[2/1] flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(255,200,100,0.03), transparent)' }}>
          {/* Fake route line */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 400" fill="none">
            <path d="M50 350 C150 300, 200 100, 350 150 S500 350, 600 200 S750 50, 750 200" stroke={ACCENT} strokeWidth="2" strokeDasharray="8 4" />
          </svg>
          <div className="text-center z-10">
            <div className="font-display font-bold text-2xl md:text-3xl text-white/80 mb-2">42.2 KM Route</div>
            <div className="text-white/30 text-sm">Marina Beach → Mylapore → Adyar → Besant Nagar → Finish</div>
          </div>
        </div>
      </div>
    </Section>
  )
}

// ─── Sponsors ─────────────────────────────────────────────────────────────────
function SponsorsSection() {
  const sponsors = ['Nike', 'Gatorade', 'TCS', 'SBI', 'Apollo', 'Decathlon', 'Garmin', 'Asics']
  return (
    <Section className="py-20 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-white/30 font-display mb-10">Official Partners</p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center">
          {sponsors.map(s => (
            <div key={s} className="text-white/20 font-display font-medium text-sm hover:text-white/50 transition-colors cursor-default">
              {s}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <Section className="py-32">
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: `radial-gradient(circle, oklch(0.76 0.19 62 / 0.5), transparent 70%)` }} />
        <h2 className="font-display font-black text-5xl md:text-7xl tracking-tight mb-6 relative z-10">
          Ready to own<br />the <span style={{ color: ACCENT }}>night?</span>
        </h2>
        <p className="text-white/40 mb-10 max-w-md mx-auto relative z-10">
          Limited bibs available. Early bird pricing ends February 28, 2026.
        </p>
        <motion.a
          href="#register"
          whileHover={{ scale: 1.03, boxShadow: `0 0 60px oklch(0.76 0.19 62 / 0.3)` }}
          whileTap={{ scale: 0.97 }}
          className="inline-block font-display font-semibold text-lg tracking-[0.12em] px-12 py-5 text-black relative z-10"
          style={{ background: ACCENT }}
        >
          REGISTER NOW
        </motion.a>
      </div>
    </Section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display font-bold tracking-wider" style={{ color: ACCENT }}>
          CMM<span className="text-white/30 text-xs ml-2">Chennai Midnight Marathon</span>
        </div>
        <div className="flex gap-6">
          {['Instagram', 'Twitter', 'YouTube'].map(s => (
            <a key={s} href="#" className="text-xs text-white/30 hover:text-white/70 transition-colors tracking-wide">{s}</a>
          ))}
        </div>
        <div className="text-xs text-white/20">© 2026 CMM. All rights reserved.</div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <Starfield />
      <Nav />
      <Hero />
      <StatsSection />
      <RacesSection />
      <WhySection />
      <RouteSection />
      <SponsorsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
