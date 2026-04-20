import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
import { ACCENT, RACES } from '../components/constants'

const PRICING = [
  { category: 'Full Marathon (42.2K)', early: '₹2,500', regular: '₹3,000', late: '₹3,500', includes: ['Timing chip', 'Finisher medal', 'Race bib', 'Hydration stations', 'Post-race meal', 'Finisher T-shirt'] },
  { category: 'Half Marathon (21.1K)', early: '₹1,800', regular: '₹2,200', late: '₹2,600', includes: ['Timing chip', 'Finisher medal', 'Race bib', 'Hydration stations', 'Post-race meal'] },
  { category: 'Dream Run (10K)', early: '₹1,200', regular: '₹1,500', late: '₹1,800', includes: ['Timing chip', 'Finisher medal', 'Race bib', 'Hydration stations'] },
  { category: 'Midnight Dash (5K)', early: '₹800', regular: '₹1,000', late: '₹1,200', includes: ['Participation medal', 'Race bib', 'Hydration stations'] },
]

export default function Races() {
  return (
    <>
      <Section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tight mb-4">
            All <span style={{ color: ACCENT }}>Races</span>
          </h1>
          <p className="text-white/40 max-w-lg mx-auto">From elite marathoners to first-time runners — there's a category for everyone.</p>
        </div>
      </Section>

      <Section className="pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-6">
            {PRICING.map((p, i) => (
              <motion.div
                key={p.category}
                whileHover={{ borderColor: RACES[i]?.color || ACCENT }}
                className="border border-white/10 p-8 grid md:grid-cols-[1fr_auto] gap-8"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div>
                  <h3 className="font-display font-bold text-2xl mb-4" style={{ color: RACES[i]?.color || ACCENT }}>{p.category}</h3>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-white/30 tracking-[0.15em] font-display mb-1">EARLY BIRD</div>
                      <div className="font-display font-bold text-xl text-white">{p.early}</div>
                      <div className="text-xs text-white/30">Till Jan 31</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/30 tracking-[0.15em] font-display mb-1">REGULAR</div>
                      <div className="font-display font-bold text-xl text-white">{p.regular}</div>
                      <div className="text-xs text-white/30">Feb 1 – 28</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/30 tracking-[0.15em] font-display mb-1">LATE</div>
                      <div className="font-display font-bold text-xl text-white">{p.late}</div>
                      <div className="text-xs text-white/30">Mar 1 – 10</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.includes.map(inc => (
                      <span key={inc} className="text-xs px-3 py-1 border border-white/10 text-white/50">{inc}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link to="/v3/register" className="font-display text-sm tracking-[0.15em] px-6 py-3 inline-block" style={{ background: RACES[i]?.color || ACCENT, color: '#000' }}>
                      REGISTER
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
