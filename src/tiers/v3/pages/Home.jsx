import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
import Counter from '../components/Counter'
import { ACCENT, RACES, STATS } from '../components/constants'

const WHY_POINTS = [
  { title: 'Zero Traffic', desc: 'Empty roads. No diversions. Pure running through Chennai\'s iconic streets.' },
  { title: 'Cool Breeze', desc: 'Night temperatures drop to 22°C. Perfect running conditions, no sun fatigue.' },
  { title: 'City Lights', desc: 'Marina Beach to Mylapore temples — see Chennai like never before, lit up at night.' },
  { title: 'Electric Crowd', desc: '12,000 runners, live DJs at every kilometer, energy that carries you to the finish.' },
]

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const backdropScale = useTransform(scrollYProgress, [0, 1], [1, 1.3])
  const springY = useSpring(textY, { stiffness: 50, damping: 20 })

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ scale: backdropScale }} className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display font-black text-[18vw] md:text-[16vw] tracking-tight text-white/[0.03] leading-none">MIDNIGHT</span>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: `radial-gradient(circle, oklch(0.76 0.19 62 / 0.4), transparent 70%)` }} />

      <motion.div style={{ y: springY, opacity: textOpacity }} className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="flex items-center justify-center gap-3 mb-8">
          <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full inline-block" style={{ background: ACCENT }} />
          <span className="text-xs tracking-[0.3em] uppercase text-white/50 font-display">Registrations Open · March 15, 2026</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8">
          <span className="text-white">Run the</span><br />
          <span style={{ color: ACCENT }}>Night.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.6 }}
          className="text-lg md:text-xl text-white/50 max-w-lg mx-auto mb-12 leading-relaxed">
          42.2 kilometres through Chennai's sleeping streets. The city is yours from midnight to dawn.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.03, boxShadow: `0 0 40px oklch(0.76 0.19 62 / 0.4)` }} whileTap={{ scale: 0.97 }}>
            <Link to="/v3/register" className="font-display font-semibold text-lg tracking-[0.12em] px-10 py-4 text-black inline-block" style={{ background: ACCENT }}>
              SECURE YOUR BIB
            </Link>
          </motion.div>
          <Link to="/v3/route" className="text-white/40 hover:text-white transition-colors text-sm tracking-wide flex items-center gap-2">
            View Route
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stats */}
      <Section className="py-20 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl mb-2" style={{ color: ACCENT }}>
                <Counter value={s.value} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <div className="text-xs tracking-[0.2em] uppercase text-white/40 font-display">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Races preview */}
      <Section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-center mb-4 tracking-tight">
            Choose Your <span style={{ color: ACCENT }}>Distance</span>
          </h2>
          <p className="text-white/40 text-center mb-16 max-w-md mx-auto">Four categories. One unforgettable night.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {RACES.map(race => (
              <motion.div key={race.name} whileHover={{ y: -8, borderColor: race.color }} transition={{ duration: 0.3 }}
                className="border border-white/10 p-6 flex flex-col group cursor-pointer" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="text-6xl font-display font-black leading-none mb-1" style={{ color: race.color }}>{race.dist}</div>
                <div className="text-xs tracking-[0.2em] text-white/30 font-display mb-4">{race.unit}</div>
                <div className="text-white font-display font-medium text-lg mb-1">{race.name}</div>
                <div className="text-white/40 text-sm mb-4">{race.tag}</div>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="font-display font-semibold text-white">{race.price}</span>
                  <svg className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/v3/races" className="text-sm text-white/40 hover:text-white transition-colors tracking-wide border-b border-white/20 pb-0.5">
              View all race details →
            </Link>
          </div>
        </div>
      </Section>

      {/* Why Midnight */}
      <Section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-center mb-4 tracking-tight">
            Why <span style={{ color: ACCENT }}>Midnight?</span>
          </h2>
          <p className="text-white/40 text-center mb-16 max-w-md mx-auto">Running at night isn't just different — it's transformative.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {WHY_POINTS.map((p, i) => (
              <motion.div key={p.title} whileHover={{ x: 4 }} className="border-l-2 pl-6 py-4" style={{ borderColor: i === 0 ? ACCENT : 'rgba(255,255,255,0.1)' }}>
                <h3 className="font-display font-semibold text-xl text-white mb-2">{p.title}</h3>
                <p className="text-white/40 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Route preview */}
      <Section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative border border-white/10 aspect-[2/1] flex items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(255,200,100,0.03), transparent)' }}>
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 400" fill="none">
              <path d="M50 350 C150 300, 200 100, 350 150 S500 350, 600 200 S750 50, 750 200" stroke={ACCENT} strokeWidth="2" strokeDasharray="8 4" />
            </svg>
            <div className="text-center z-10">
              <div className="font-display font-bold text-2xl md:text-3xl text-white/80 mb-2">42.2 KM Route</div>
              <div className="text-white/30 text-sm mb-4">Marina Beach → Mylapore → Adyar → Besant Nagar → Finish</div>
              <Link to="/v3/route" className="text-xs tracking-[0.15em] px-4 py-2 border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-colors font-display">
                EXPLORE ROUTE
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
            style={{ background: `radial-gradient(circle, oklch(0.76 0.19 62 / 0.5), transparent 70%)` }} />
          <h2 className="font-display font-black text-5xl md:text-7xl tracking-tight mb-6 relative z-10">
            Ready to own<br />the <span style={{ color: ACCENT }}>night?</span>
          </h2>
          <p className="text-white/40 mb-10 max-w-md mx-auto relative z-10">Limited bibs available. Early bird pricing ends February 28, 2026.</p>
          <motion.div whileHover={{ scale: 1.03, boxShadow: `0 0 60px oklch(0.76 0.19 62 / 0.3)` }} whileTap={{ scale: 0.97 }} className="inline-block relative z-10">
            <Link to="/v3/register" className="font-display font-semibold text-lg tracking-[0.12em] px-12 py-5 text-black inline-block" style={{ background: ACCENT }}>
              REGISTER NOW
            </Link>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
