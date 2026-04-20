import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

const TIERS = [
  {
    id: 'v1',
    name: 'Standard',
    price: '₹50,000',
    desc: 'Clean, modern, professional. Webflow-quality design with polished typography and subtle animations.',
    tags: ['Inter + Source Serif', 'Light/Dark mode', 'Responsive', 'Subtle animations'],
    accent: '#3b82f6',
    bg: 'linear-gradient(135deg, #0f1629, #1e2d4a)',
  },
  {
    id: 'v2',
    name: 'Premium',
    price: '₹1,00,000',
    desc: 'Cinematic dark theme with parallax effects, dramatic typography, and scroll-driven reveals.',
    tags: ['Bebas Neue + Crimson Pro', 'Parallax backdrop', 'OKLCH colors', 'Asymmetric layout'],
    accent: 'oklch(0.76 0.19 62)',
    bg: 'linear-gradient(135deg, #0a0a12, #1a1520)',
  },
  {
    id: 'v3',
    name: 'Elite',
    price: '₹2,00,000',
    desc: 'Immersive, Awwwards-level experience. Starfield particles, animated counters, scroll-driven storytelling. Full 13-page site.',
    tags: ['Outfit + DM Sans', 'Starfield particles', 'GSAP + Framer Motion', '13 pages', 'Animated counters'],
    accent: 'oklch(0.76 0.19 62)',
    bg: 'linear-gradient(135deg, #000000, #0a0a0a)',
  },
  {
    id: 'v4',
    name: 'Reference Replica',
    price: 'Baseline',
    desc: 'Faithful recreation of the Bharat Midnight Marathon Bangalore website, adapted for Chennai.',
    tags: ['Original design language', 'Proven layout', 'Event-standard', 'Familiar UX'],
    accent: '#e53e3e',
    bg: 'linear-gradient(135deg, #1a1a2e, #16213e)',
  },
]

function StarCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w = window.innerWidth, h = window.innerHeight
    canvas.width = w; canvas.height = h
    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.2 + 0.2, speed: Math.random() * 0.2 + 0.03,
      opacity: Math.random() * 0.6 + 0.2, pulse: Math.random() * Math.PI * 2,
    }))
    let raf
    function draw() {
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        s.y -= s.speed; s.pulse += 0.008
        if (s.y < -2) { s.y = h + 2; s.x = Math.random() * w }
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,200,120,${s.opacity * (0.5 + 0.5 * Math.sin(s.pulse))})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    const onResize = () => { w = window.innerWidth; h = window.innerHeight; canvas.width = w; canvas.height = h }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}

export default function PitchSelector() {
  return (
    <div className="min-h-screen bg-black relative">
      <StarCanvas />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Website Design Proposal
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Chennai Midnight<br />
            <span style={{ color: 'oklch(0.76 0.19 62)' }}>Marathon</span>
          </h1>
          <p className="text-white/40 max-w-lg mx-auto text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Four design directions. One unforgettable event. Pick the vision that matches your ambition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={`/${tier.id}`} className="block group">
                <motion.div
                  whileHover={{ y: -6, borderColor: tier.accent }}
                  transition={{ duration: 0.3 }}
                  className="border border-white/10 p-8 h-full flex flex-col"
                  style={{ background: tier.bg }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs tracking-[0.2em] uppercase text-white/30" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {tier.id.toUpperCase()}
                      </span>
                      <h2 className="text-2xl font-bold text-white mt-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {tier.name}
                      </h2>
                    </div>
                    <span className="text-sm font-semibold px-3 py-1" style={{ color: tier.accent, background: `${tier.accent}15`, fontFamily: 'Outfit, sans-serif' }}>
                      {tier.price}
                    </span>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {tier.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {tier.tags.map(t => (
                      <span key={t} className="text-xs px-2.5 py-1 border border-white/10 text-white/40" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-2 text-sm group-hover:gap-3 transition-all" style={{ color: tier.accent, fontFamily: 'Outfit, sans-serif' }}>
                    <span className="tracking-wide">Explore</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-white/20 text-xs tracking-wide" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Designed for Chennai Midnight Marathon · 2026
          </p>
        </motion.div>
      </div>
    </div>
  )
}
