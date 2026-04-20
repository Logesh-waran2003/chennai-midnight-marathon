import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

// ─── motion variants ──────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}
const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.5 } },
}
const staggerWrap = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

// ─── data ─────────────────────────────────────────────────────────────────────
const NAV_LINKS = ['Races', 'Route', 'Prizes', 'Ambassadors', 'About', 'Contact']

const RACES = [
  { name: 'Full Marathon',  dist: '42.2K', price: '₹2,500', note: 'Elite & Open category',       featured: true  },
  { name: 'Half Marathon',  dist: '21.1K', price: '₹1,800', note: 'Open category',               featured: false },
  { name: 'Dream Run',      dist: '10K',   price: '₹1,200', note: 'All fitness levels',           featured: false },
  { name: 'Midnight Dash',  dist: '5K',    price: '₹800',   note: 'Fun run · families welcome',  featured: false },
]

const STATS = [
  { val: '12,000+', label: 'Registered Runners' },
  { val: '₹40L',    label: 'Prize Pool'          },
  { val: '42.2K',   label: 'Full Course'         },
  { val: 'IV',      label: 'Edition'             },
]

const WHY = [
  {
    title: 'The City Is Yours',
    body:  'Empty streets, lit landmarks, zero traffic. Chennai transforms after midnight into a runner\'s paradise unlike anything you\'ve experienced.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    ),
  },
  {
    title: 'Perfect Conditions',
    body:  'Cooler temperatures and lower humidity make midnight the ideal time to push your personal best. Science agrees — your body performs better.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
      </svg>
    ),
  },
  {
    title: 'Unforgettable Atmosphere',
    body:  'City lights reflecting off Marina Beach, the hum of a sleeping metropolis — a race you\'ll recount for years. This is Chennai at its most cinematic.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: 'A Tribe Like No Other',
    body:  'Join 12,000 night owls who chose the road less run. The midnight running community shares a bond forged in darkness and finished at dawn.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
]

const SPONSORS = [
  { tier: 'Title Sponsor',  slots: 1 },
  { tier: 'Gold Sponsor',   slots: 2 },
  { tier: 'Silver Sponsor', slots: 3 },
  { tier: 'Partner',        slots: 4 },
]

// ─── hooks ────────────────────────────────────────────────────────────────────
function useDark() {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark)
  }, [dark])
  return [dark, setDark]
}

// ─── Section wrapper ──────────────────────────────────────────────────────────
function Section({ children, id, style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.section
      id={id}
      ref={ref}
      variants={staggerWrap}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      style={style}
    >
      {children}
    </motion.section>
  )
}

// ─── Icons ────────────────────────────────────────────────────────────────────
function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}
function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}
function ArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? dark ? 'bg-[#080d1a]/90 backdrop-blur-xl border-b border-[#1e2d4a]'
                 : 'bg-[#f4f7ff]/90 backdrop-blur-xl border-b border-[#c8d4ee]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none no-underline">
          <span className="font-['Inter'] font-bold text-xl tracking-tight text-[#3b82f6]">CMM</span>
          <span className={`font-['Source_Serif_4'] text-[10px] tracking-[0.2em] uppercase ${dark ? 'text-[#6b7fa3]' : 'text-[#4a5a7a]'}`}>
            Chennai · 2026
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`font-['Inter'] text-sm font-medium tracking-wide no-underline transition-colors duration-200 ${
                  dark ? 'text-[#6b7fa3] hover:text-[#eef2ff]' : 'text-[#4a5a7a] hover:text-[#0a1628]'
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(d => !d)}
            aria-label="Toggle theme"
            className={`p-2 rounded-lg transition-colors duration-200 cursor-pointer border-0 bg-transparent ${
              dark ? 'text-[#6b7fa3] hover:text-[#eef2ff]' : 'text-[#4a5a7a] hover:text-[#0a1628]'
            }`}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <motion.a
            href="#register"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-['Inter'] font-semibold text-sm px-5 py-2.5 rounded-lg no-underline transition-colors duration-200"
          >
            Register Now
          </motion.a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className={`md:hidden p-2 rounded-lg border-0 bg-transparent cursor-pointer ${dark ? 'text-[#eef2ff]' : 'text-[#0a1628]'}`}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden overflow-hidden border-t ${dark ? 'bg-[#080d1a] border-[#1e2d4a]' : 'bg-[#f4f7ff] border-[#c8d4ee]'}`}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className={`font-['Inter'] text-base font-medium py-2.5 no-underline transition-colors ${
                    dark ? 'text-[#eef2ff]' : 'text-[#0a1628]'
                  }`}
                >
                  {link}
                </a>
              ))}
              <a
                href="#register"
                className="mt-3 inline-flex justify-center bg-[#3b82f6] text-white font-['Inter'] font-semibold text-sm px-5 py-3 rounded-lg no-underline"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ dark }) {
  return (
    <section className={`relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden ${dark ? 'bg-[#080d1a]' : 'bg-[#f4f7ff]'}`}>
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: dark
            ? 'linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)'
            : 'linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.07) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: dark
            ? 'radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%)'
            : 'radial-gradient(ellipse, rgba(59,130,246,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div variants={staggerWrap} initial="hidden" animate="show">
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-8">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-[#3b82f6] inline-block"
              />
              <span className={`font-['Inter'] text-xs font-medium tracking-[0.18em] uppercase ${dark ? 'text-[#6b7fa3]' : 'text-[#4a5a7a]'}`}>
                Registrations Open · Edition IV
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className={`font-['Inter'] font-bold leading-[1.05] tracking-tight mb-6 ${dark ? 'text-[#eef2ff]' : 'text-[#0a1628]'}`}
              style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}
            >
              Chennai<br />
              Midnight<br />
              <span className="text-[#3b82f6]">Marathon</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className={`font-['Source_Serif_4'] italic mb-3 leading-relaxed ${dark ? 'text-[#6b7fa3]' : 'text-[#4a5a7a]'}`}
              style={{ fontSize: 'clamp(16px, 1.8vw, 20px)' }}
            >
              March 15, 2026 · 11:59 PM · Marina Beach
            </motion.p>

            <motion.p
              variants={fadeUp}
              className={`font-['Source_Serif_4'] mb-10 leading-relaxed max-w-md ${dark ? 'text-[#6b7fa3]' : 'text-[#4a5a7a]'}`}
              style={{ fontSize: 'clamp(15px, 1.6vw, 18px)' }}
            >
              Run through Chennai's sleeping streets as the city transforms into a runner's paradise. 42.2 kilometres from midnight to dawn.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center">
              <motion.a
                href="#register"
                whileHover={{ scale: 1.03, backgroundColor: '#2563eb' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#3b82f6] text-white font-['Inter'] font-semibold px-8 py-4 rounded-xl no-underline text-base transition-colors duration-200"
              >
                Register Now
                <ArrowRight />
              </motion.a>
              <motion.a
                href="#route"
                whileHover={{ x: 4 }}
                className={`inline-flex items-center gap-2 font-['Inter'] font-medium text-base no-underline transition-colors duration-200 ${dark ? 'text-[#6b7fa3] hover:text-[#eef2ff]' : 'text-[#4a5a7a] hover:text-[#0a1628]'}`}
              >
                View Route <ArrowRight />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right — race category cards */}
          <motion.div variants={staggerWrap} initial="hidden" animate="show" className="grid grid-cols-2 gap-3">
            {RACES.map((race, i) => (
              <motion.a
                key={race.name}
                href="#races"
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`flex flex-col p-5 rounded-2xl border no-underline transition-all duration-200 ${
                  race.featured
                    ? 'bg-[#3b82f6] border-[#3b82f6] text-white'
                    : dark
                      ? 'bg-[#0f1629] border-[#1e2d4a] hover:border-[#3b82f6]/40'
                      : 'bg-[#eaeffc] border-[#c8d4ee] hover:border-[#3b82f6]/40'
                }`}
              >
                <span className={`font-['Inter'] font-bold text-3xl leading-none mb-1 ${race.featured ? 'text-white' : 'text-[#3b82f6]'}`}>
                  {race.dist}
                </span>
                <span className={`font-['Inter'] font-semibold text-sm mb-1 ${race.featured ? 'text-white' : dark ? 'text-[#eef2ff]' : 'text-[#0a1628]'}`}>
                  {race.name}
                </span>
                <span className={`font-['Source_Serif_4'] italic text-xs ${race.featured ? 'text-blue-100' : dark ? 'text-[#6b7fa3]' : 'text-[#4a5a7a]'}`}>
                  {race.note}
                </span>
                <span className={`font-['Inter'] font-bold text-lg mt-3 ${race.featured ? 'text-white' : dark ? 'text-[#eef2ff]' : 'text-[#0a1628]'}`}>
                  {race.price}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <div className={`relative z-10 border-t ${dark ? 'border-[#1e2d4a] bg-[#0f1629]/60' : 'border-[#c8d4ee] bg-[#eaeffc]/60'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`py-6 px-4 ${i < 3 ? `border-r ${dark ? 'border-[#1e2d4a]' : 'border-[#c8d4ee]'}` : ''}`}
              >
                <div className={`font-['Inter'] font-bold text-2xl lg:text-3xl ${dark ? 'text-[#eef2ff]' : 'text-[#0a1628]'}`}>{s.val}</div>
                <div className={`font-['Source_Serif_4'] text-xs tracking-wide mt-1 ${dark ? 'text-[#6b7fa3]' : 'text-[#4a5a7a]'}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Races & Pricing ──────────────────────────────────────────────────────────
function RacesSection({ dark }) {
  return (
    <Section id="races" style={{ padding: '96px 0', background: dark ? '#080d1a' : '#f4f7ff' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div variants={fadeUp} className="mb-14">
          <p className={`font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-[#3b82f6]`}>
            Race Categories
          </p>
          <h2 className={`font-['Inter'] font-bold leading-tight mb-4 ${dark ? 'text-[#eef2ff]' : 'text-[#0a1628]'}`}
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            Races &amp; Pricing
          </h2>
          <p className={`font-['Source_Serif_4'] text-lg max-w-xl ${dark ? 'text-[#6b7fa3]' : 'text-[#4a5a7a]'}`}>
            Four distances. One unforgettable night. Choose your challenge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {RACES.map((race, i) => (
            <motion.div
              key={race.name}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-200 ${
                race.featured
                  ? 'border-[#3b82f6]'
                  : dark ? 'border-[#1e2d4a] hover:border-[#3b82f6]/50' : 'border-[#c8d4ee] hover:border-[#3b82f6]/50'
              } ${dark ? 'bg-[#0f1629]' : 'bg-[#eaeffc]'}`}
            >
              {race.featured && (
                <div className="bg-[#3b82f6] text-white font-['Inter'] font-semibold text-xs tracking-widest uppercase text-center py-2">
                  Most Popular
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[#3b82f6] font-['Inter'] font-bold text-4xl leading-none mb-2">{race.dist}</span>
                <h3 className={`font-['Inter'] font-bold text-lg mb-1 ${dark ? 'text-[#eef2ff]' : 'text-[#0a1628]'}`}>{race.name}</h3>
                <p className={`font-['Source_Serif_4'] italic text-sm mb-6 ${dark ? 'text-[#6b7fa3]' : 'text-[#4a5a7a]'}`}>{race.note}</p>

                <div className="mt-auto">
                  <div className={`font-['Inter'] font-bold text-3xl mb-4 ${dark ? 'text-[#eef2ff]' : 'text-[#0a1628]'}`}>{race.price}</div>
                  <motion.a
                    href="#register"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className={`block text-center font-['Inter'] font-semibold text-sm py-3 rounded-xl no-underline transition-colors duration-200 ${
                      race.featured
                        ? 'bg-[#3b82f6] text-white hover:bg-[#2563eb]'
                        : dark
                          ? 'bg-[#162040] text-[#eef2ff] hover:bg-[#1e2d4a]'
                          : 'bg-[#dde5f8] text-[#0a1628] hover:bg-[#c8d4ee]'
                    }`}
                  >
                    Register
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Early bird note */}
        <motion.p variants={fadeUp} className={`mt-8 text-center font-['Source_Serif_4'] italic text-sm ${dark ? 'text-[#6b7fa3]' : 'text-[#4a5a7a]'}`}>
          Early bird pricing ends January 31, 2026. Group discounts available for 5+ registrations.
        </motion.p>
      </div>
    </Section>
  )
}

// ─── Why Run at Midnight ──────────────────────────────────────────────────────
function WhySection({ dark }) {
  return (
    <Section
      id="about"
      style={{
        padding: '96px 0',
        background: dark ? '#0f1629' : '#eaeffc',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <motion.p variants={fadeUp} className="font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-[#3b82f6]">
              Why Midnight?
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className={`font-['Inter'] font-bold leading-tight mb-6 ${dark ? 'text-[#eef2ff]' : 'text-[#0a1628]'}`}
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              Why Run at<br />Midnight?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className={`font-['Source_Serif_4'] text-lg leading-relaxed mb-8 ${dark ? 'text-[#6b7fa3]' : 'text-[#4a5a7a]'}`}
            >
              Because some experiences can only happen when the world is asleep. The Chennai Midnight Marathon isn't just a race — it's a reclamation of the city.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="#register"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-[#3b82f6] text-white font-['Inter'] font-semibold px-7 py-3.5 rounded-xl no-underline text-sm hover:bg-[#2563eb] transition-colors duration-200"
            >
              Claim Your Spot <ArrowRight />
            </motion.a>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={`p-6 rounded-2xl border transition-all duration-200 ${
                  dark
                    ? 'bg-[#080d1a] border-[#1e2d4a] hover:border-[#3b82f6]/40'
                    : 'bg-[#f4f7ff] border-[#c8d4ee] hover:border-[#3b82f6]/40'
                }`}
              >
                <div className="text-[#3b82f6] mb-4">{item.icon}</div>
                <h3 className={`font-['Inter'] font-semibold text-base mb-2 ${dark ? 'text-[#eef2ff]' : 'text-[#0a1628]'}`}>
                  {item.title}
                </h3>
                <p className={`font-['Source_Serif_4'] text-sm leading-relaxed ${dark ? 'text-[#6b7fa3]' : 'text-[#4a5a7a]'}`}>
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default function App() {
  const [dark, setDark] = useDark()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  return (
    <div style={{ background: dark ? '#080d1a' : '#f4f7ff', minHeight: '100vh' }}>
      <Nav dark={dark} setDark={setDark} />
      <Hero dark={dark} />
      <RacesSection dark={dark} />
      <WhySection dark={dark} />
      <SponsorsSection dark={dark} />
      <CTASection dark={dark} />
      <Footer dark={dark} />
    </div>
  )
}

function SponsorsSection({ dark }) {
  const ref = useRef(null)
  useGSAP(() => {
    gsap.from('.v1-sponsor', {
      opacity: 0, y: 20, stagger: 0.08, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 85%' },
    })
  }, { scope: ref })

  const sponsors = ['Nike', 'Gatorade', 'TCS', 'SBI', 'Apollo', 'Decathlon', 'Garmin', 'Asics']
  return (
    <section ref={ref} style={{ padding: '80px 0', borderTop: `1px solid ${dark ? '#1e2d4a' : '#c8d4ee'}`, background: dark ? '#080d1a' : '#f4f7ff' }}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className={`font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase mb-8 ${dark ? 'text-[#6b7fa3]' : 'text-[#4a5a7a]'}`}>
          Official Partners
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {sponsors.map(s => (
            <span key={s} className={`v1-sponsor font-['Inter'] font-medium text-sm ${dark ? 'text-[#2a3a5a]' : 'text-[#b0bdd4]'} hover:text-[#3b82f6] transition-colors cursor-default`}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection({ dark }) {
  const ref = useRef(null)
  useGSAP(() => {
    gsap.from(ref.current.querySelector('.v1-cta-inner'), {
      scale: 0.95, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} style={{ padding: '120px 0', background: dark ? '#0f1629' : '#eaeffc' }}>
      <div className="v1-cta-inner max-w-3xl mx-auto px-6 text-center">
        <h2 className={`font-['Inter'] font-bold mb-4 ${dark ? 'text-[#eef2ff]' : 'text-[#0a1628]'}`} style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
          Ready to run the night?
        </h2>
        <p className={`font-['Source_Serif_4'] text-lg mb-8 ${dark ? 'text-[#6b7fa3]' : 'text-[#4a5a7a]'}`}>
          Limited bibs available. Early bird pricing ends January 31, 2026.
        </p>
        <motion.a
          href="#register"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-[#3b82f6] text-white font-['Inter'] font-semibold px-10 py-4 rounded-xl no-underline text-base hover:bg-[#2563eb] transition-colors"
        >
          Register Now
        </motion.a>
      </div>
    </section>
  )
}

function Footer({ dark }) {
  return (
    <footer style={{ padding: '48px 0', borderTop: `1px solid ${dark ? '#1e2d4a' : '#c8d4ee'}`, background: dark ? '#080d1a' : '#f4f7ff' }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-['Inter'] font-bold text-lg text-[#3b82f6]">CMM</span>
          <span className={`font-['Source_Serif_4'] text-sm ${dark ? 'text-[#6b7fa3]' : 'text-[#4a5a7a]'}`}>Chennai Midnight Marathon</span>
        </div>
        <div className="flex gap-6">
          {['Instagram', 'Twitter', 'YouTube'].map(s => (
            <a key={s} href="#" className={`font-['Source_Serif_4'] text-sm no-underline ${dark ? 'text-[#6b7fa3]' : 'text-[#4a5a7a]'} hover:text-[#3b82f6] transition-colors`}>{s}</a>
          ))}
        </div>
        <p className={`font-['Source_Serif_4'] text-xs ${dark ? 'text-[#2a3a5a]' : 'text-[#b0bdd4]'}`}>© 2026 CMM. All rights reserved.</p>
      </div>
    </footer>
  )
}
