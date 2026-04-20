import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const ACCENT = '#e53e3e'
const BG = '#1a1a2e'
const SURFACE = '#16213e'
const FG = '#edf2f7'
const MUTED = '#a0aec0'
const BORDER = '#2d3748'

const NAV_LINKS = [
  { label: 'The Race', href: '#races' },
  { label: 'Partnership', href: '#partners' },
  { label: 'About', href: '#about' },
  { label: 'Route Map', href: '#route' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

const RACES = [
  { sponsor: 'TCS', name: 'Full Marathon', dist: '42.2K', time: '11:59 PM', price: '₹2,500', color: '#e53e3e' },
  { sponsor: 'Nike', name: 'Half Marathon', dist: '21.1K', time: '12:30 AM', price: '₹1,800', color: '#dd6b20' },
  { sponsor: 'Gatorade', name: 'Dream Run', dist: '10K', time: '1:00 AM', price: '₹1,200', color: '#38a169' },
  { sponsor: 'Decathlon', name: 'Midnight Dash', dist: '5K', time: '1:30 AM', price: '₹800', color: '#3182ce' },
]

const MISSIONS = [
  { title: 'Run To Make A Difference', desc: 'Every step you take raises awareness and funds for underprivileged children in Chennai.' },
  { title: 'Run For Hope', desc: 'Supporting cancer survivors and their families through the Chennai Cancer Foundation.' },
  { title: "Run For Those Who Can't", desc: 'Dedicated to differently-abled athletes. 10% of proceeds fund adaptive sports programs.' },
  { title: 'Run For A Smile', desc: 'Partnering with orphanages across Tamil Nadu to bring joy through sport.' },
  { title: 'Run For The Earth', desc: 'A zero-waste marathon. Every bib is plantable, every cup is compostable.' },
]

const SPONSORS = [
  { tier: 'Title Sponsor', names: ['TCS'] },
  { tier: 'Associate Partner', names: ['Nike', 'Gatorade'] },
  { tier: 'Healthcare Partner', names: ['Apollo Hospitals'] },
  { tier: 'Hydration Partner', names: ['Bisleri'] },
  { tier: 'Timing Partner', names: ['ChronoTrack'] },
  { tier: 'Banking Partner', names: ['SBI'] },
  { tier: 'Fitness Partner', names: ['Decathlon', 'Garmin'] },
  { tier: 'Media Partner', names: ['The Hindu', 'Star Sports'] },
  { tier: 'Hospitality Partner', names: ['Hyatt Regency Chennai'] },
  { tier: 'Radio Partner', names: ['Radio City 91.1'] },
]

function Section({ children, bg = BG, id }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.section
      ref={ref} id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ background: bg, padding: '80px 0' }}
    >
      {children}
    </motion.section>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? `${BG}f0` : BG,
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: `1px solid ${BORDER}`,
      transition: 'background 0.3s',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: 14, color: 'white' }}>R</span>
          </div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: 14, color: FG }}>Chennai Midnight</div>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 11, color: MUTED }}>Marathon 2026</div>
          </div>
        </a>

        <div className="hidden md:flex" style={{ gap: 28 }}>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} style={{ fontFamily: 'Georgia, serif', fontSize: 14, color: MUTED, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = FG}
              onMouseLeave={e => e.target.style.color = MUTED}
            >{l.label}</a>
          ))}
        </div>

        <a href="#register" style={{
          fontFamily: 'Georgia, serif', fontSize: 13, fontWeight: 'bold',
          background: ACCENT, color: 'white', padding: '8px 20px', borderRadius: 6,
          textDecoration: 'none', transition: 'background 0.2s',
        }}>Register Now</a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section style={{
      minHeight: '100vh', background: `linear-gradient(135deg, ${BG}, #0f3460)`,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '120px 24px 80px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at center, rgba(229,62,62,0.08), transparent 70%)', pointerEvents: 'none' }} />

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
          {['AIMS Certified', 'AFI Approved', 'IAAF Standards'].map(badge => (
            <span key={badge} style={{ fontFamily: 'Georgia, serif', fontSize: 10, letterSpacing: '0.1em', color: MUTED, border: `1px solid ${BORDER}`, padding: '4px 12px', borderRadius: 4 }}>
              {badge}
            </span>
          ))}
        </div>

        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 'bold', color: FG, lineHeight: 1.15, margin: '0 0 16px', maxWidth: 700 }}>
          Chennai Midnight<br />
          <span style={{ color: ACCENT }}>Marathon 2026</span>
        </h1>

        <p style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: MUTED, marginBottom: 8 }}>
          Edition IV · March 15, 2026 · 11:59 PM
        </p>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: 15, color: MUTED, marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>
          Island Grounds, Chennai · AIMS Certified Course
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.a href="#register" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: 16, background: ACCENT, color: 'white', padding: '14px 36px', borderRadius: 8, textDecoration: 'none' }}>
            Register Now
          </motion.a>
          <a href="#races" style={{ fontFamily: 'Georgia, serif', fontSize: 15, color: MUTED, textDecoration: 'none', padding: '14px 24px', border: `1px solid ${BORDER}`, borderRadius: 8, transition: 'border-color 0.2s' }}>
            View Races
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 80, maxWidth: 700, width: '100%', position: 'relative', zIndex: 1 }}
      >
        {[
          { val: '12,000+', label: 'Runners' },
          { val: '₹40L', label: 'Prize Pool' },
          { val: '42.2K', label: 'Full Course' },
          { val: 'IV', label: 'Edition' },
        ].map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: 28, color: FG }}>{s.val}</div>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 12, color: MUTED, marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

function RacesSection() {
  return (
    <Section id="races" bg={SURFACE}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 'bold', color: FG, margin: '0 0 8px' }}>The Races</h2>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: 15, color: MUTED }}>Four categories, one unforgettable night</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
          {RACES.map(r => (
            <motion.div key={r.name} whileHover={{ y: -4 }}
              style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, borderTop: `3px solid ${r.color}` }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 11, color: r.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>{r.sponsor} Presents</div>
              <div style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: 36, color: FG, lineHeight: 1 }}>{r.dist}</div>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 16, color: FG, marginTop: 4, marginBottom: 4 }}>{r.name}</div>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 13, color: MUTED, marginBottom: 16 }}>Flag-off: {r.time}</div>
              <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: 18, color: FG }}>{r.price}</span>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: 11, color: ACCENT }}>Early Bird</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function MissionsSection() {
  return (
    <Section id="about" bg={BG}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 'bold', color: FG, margin: '0 0 8px' }}>What A Night It Will Be</h2>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: 15, color: MUTED }}>More than a marathon — a movement</p>
        </div>
        <div style={{ display: 'grid', gap: 16 }}>
          {MISSIONS.map((m, i) => (
            <motion.div key={m.title} whileHover={{ x: 4 }}
              style={{ display: 'flex', gap: 20, padding: 24, background: SURFACE, borderRadius: 10, border: `1px solid ${BORDER}`, alignItems: 'flex-start' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: `${ACCENT}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: 16, color: ACCENT }}>{i + 1}</span>
              </div>
              <div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: 17, color: FG, margin: '0 0 6px' }}>{m.title}</h3>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function StorySection() {
  return (
    <Section bg={SURFACE}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 'bold', color: FG, margin: '0 0 24px' }}>The CMM Story</h2>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: 16, color: MUTED, lineHeight: 1.8, marginBottom: 16 }}>
          What started as a dream in 2023 with 3,000 runners has grown into South India's most anticipated running event.
          The Chennai Midnight Marathon was born from a simple belief: that running through a sleeping city, under the stars,
          with thousands of fellow runners, creates a bond that no daytime race can match.
        </p>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: 16, color: MUTED, lineHeight: 1.8 }}>
          Organized by RBITC (Run Beyond Imagination Trust of Chennai), CMM is more than a race — it's a celebration of
          Chennai's spirit, a fundraiser for causes that matter, and a night that 12,000 runners will never forget.
          AIMS certified and AFI approved, our course takes you through Marina Beach, the temple district of Mylapore,
          and the tree-lined avenues of Adyar — all under the midnight sky.
        </p>
      </div>
    </Section>
  )
}

function PartnersSection() {
  return (
    <Section id="partners" bg={BG}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 'bold', color: FG, margin: '0 0 8px' }}>Partners 2026</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {SPONSORS.map(s => (
            <div key={s.tier} style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 20, textAlign: 'center' }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 10 }}>{s.tier}</div>
              {s.names.map(n => (
                <div key={n} style={{ fontFamily: 'Georgia, serif', fontSize: 15, color: FG, fontWeight: 'bold' }}>{n}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function RouteSection() {
  return (
    <Section id="route" bg={SURFACE}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 'bold', color: FG, margin: '0 0 8px' }}>Race Route Map</h2>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: 15, color: MUTED }}>AIMS Certified · Flat Course · Sea-Level</p>
        </div>
        <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, aspectRatio: '2.2/1', display: 'flex', alignItems: 'center', justifyContent: 'center', background: BG, position: 'relative', overflow: 'hidden' }}>
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.3 }} viewBox="0 0 800 350" fill="none">
            <path d="M40 300 C120 250, 180 80, 320 130 S460 300, 560 160 S720 40, 760 180" stroke={ACCENT} strokeWidth="2" strokeDasharray="6 4" />
          </svg>
          <div style={{ textAlign: 'center', zIndex: 1 }}>
            <div style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: 22, color: FG, marginBottom: 8 }}>42.2 KM Route</div>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 14, color: MUTED }}>Island Grounds → Marina Beach → Mylapore → Adyar → Besant Nagar → Finish</div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function FAQSection() {
  const [open, setOpen] = useState(null)
  const faqs = [
    { q: 'What time does the marathon start?', a: 'The Full Marathon flags off at 11:59 PM on March 15, 2026. Other categories follow at 12:30 AM, 1:00 AM, and 1:30 AM.' },
    { q: 'Is the course well-lit and safe?', a: 'Yes. The entire route is illuminated with professional lighting. 500+ marshals and 200 police personnel are deployed.' },
    { q: 'Can beginners participate?', a: 'Absolutely! The 5K Midnight Dash is perfect for first-timers. No qualifying time needed.' },
    { q: 'Is the course BQ qualifying?', a: 'Yes! The CMM Full Marathon is AIMS certified and qualifies for Boston, London, and other World Marathon Majors.' },
    { q: 'What is the refund policy?', a: 'Before Jan 31: 75% refund. Feb 1-28: 50%. Mar 1-10: 25%. After Mar 10: No refund. Bib transfers allowed until Mar 1.' },
  ]

  return (
    <Section id="faqs" bg={BG}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 'bold', color: FG, textAlign: 'center', margin: '0 0 40px' }}>FAQs</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ borderBottom: `1px solid ${BORDER}` }}>
            <button onClick={() => setOpen(open === i ? null : i)}
              style={{ width: '100%', textAlign: 'left', padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Georgia, serif', fontSize: 15, color: FG }}>{f.q}</span>
              <span style={{ color: MUTED, fontSize: 18 }}>{open === i ? '−' : '+'}</span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                  <p style={{ fontFamily: 'Georgia, serif', fontSize: 14, color: MUTED, lineHeight: 1.7, paddingBottom: 18 }}>{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  )
}

function CTASection() {
  return (
    <section id="register" style={{ background: `linear-gradient(135deg, ${ACCENT}, #c53030)`, padding: '80px 24px', textAlign: 'center' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 'bold', color: 'white', margin: '0 0 12px' }}>Gear Up Now</h2>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: 16, color: 'rgba(255,255,255,0.8)', marginBottom: 32 }}>
          Early bird registration is open. Secure your bib before prices go up.
        </p>
        <motion.a href="#" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: 16, background: 'white', color: ACCENT, padding: '14px 40px', borderRadius: 8, textDecoration: 'none', display: 'inline-block' }}>
          Register Now
        </motion.a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" style={{ background: '#0f0f23', padding: '60px 24px 32px', borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, marginBottom: 40 }}>
        <div>
          <div style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: 18, color: FG, marginBottom: 12 }}>Chennai Midnight Marathon</div>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: 13, color: MUTED, lineHeight: 1.7 }}>
            Organized by RBITC<br />
            Island Grounds, Chennai 600002<br />
            Tamil Nadu, India<br /><br />
            info@chennaimidnightmarathon.run<br />
            +91 44 2345 6789
          </p>
        </div>
        <div>
          <div style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: 14, color: FG, marginBottom: 12 }}>Site Links</div>
          {['The Race', 'Partnership', 'About', 'Route Map', 'FAQs', 'Contact'].map(l => (
            <a key={l} href="#" style={{ display: 'block', fontFamily: 'Georgia, serif', fontSize: 13, color: MUTED, textDecoration: 'none', marginBottom: 8 }}>{l}</a>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: 14, color: FG, marginBottom: 12 }}>Legal</div>
          {['Privacy Policy', 'Terms & Conditions', 'Refund Policy', 'Medical Advisory'].map(l => (
            <a key={l} href="#" style={{ display: 'block', fontFamily: 'Georgia, serif', fontSize: 13, color: MUTED, textDecoration: 'none', marginBottom: 8 }}>{l}</a>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: 14, color: FG, marginBottom: 12 }}>Follow Us</div>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Twitter', 'Facebook', 'YouTube', 'Instagram'].map(s => (
              <a key={s} href="#" style={{ fontFamily: 'Georgia, serif', fontSize: 12, color: MUTED, textDecoration: 'none' }}>{s}</a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 20, textAlign: 'center' }}>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: 12, color: '#4a5568' }}>© 2026 Chennai Midnight Marathon. Organized by RBITC. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div style={{ background: BG, minHeight: '100vh', color: FG }}>
      <Nav />
      <Hero />
      <RacesSection />
      <MissionsSection />
      <StorySection />
      <PartnersSection />
      <RouteSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  )
}
