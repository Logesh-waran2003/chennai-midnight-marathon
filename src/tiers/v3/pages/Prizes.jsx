import { motion } from 'framer-motion'
import Section from '../components/Section'
import { ACCENT } from '../components/constants'

const PRIZE_TABLE = [
  { pos: '1st', full: '₹5,00,000', half: '₹2,50,000', ten: '₹1,00,000' },
  { pos: '2nd', full: '₹3,00,000', half: '₹1,50,000', ten: '₹75,000' },
  { pos: '3rd', full: '₹2,00,000', half: '₹1,00,000', ten: '₹50,000' },
  { pos: '4th', full: '₹1,00,000', half: '₹50,000', ten: '₹25,000' },
  { pos: '5th', full: '₹50,000', half: '₹25,000', ten: '₹15,000' },
]

const SPECIAL = [
  { title: 'Age Group Awards', desc: 'Top 3 in each age category (18-29, 30-39, 40-49, 50+) receive trophies and ₹10,000 each.' },
  { title: 'Corporate Challenge', desc: 'Best corporate team (min 10 runners) wins the CMM Corporate Shield + ₹1,00,000.' },
  { title: 'Chennai Resident Bonus', desc: 'Top Chennai-resident finisher in each category gets an additional ₹25,000.' },
]

export default function Prizes() {
  return (
    <>
      <Section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tight mb-4">
            Prize <span style={{ color: ACCENT }}>Money</span>
          </h1>
          <p className="text-white/40 max-w-lg mx-auto">₹40 Lakhs total prize pool across all categories.</p>
        </div>
      </Section>

      <Section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border border-white/10 overflow-hidden">
            <div className="grid grid-cols-4 gap-0 bg-white/5 p-4">
              <div className="font-display text-xs tracking-[0.15em] text-white/50">POSITION</div>
              <div className="font-display text-xs tracking-[0.15em] text-white/50">FULL (42.2K)</div>
              <div className="font-display text-xs tracking-[0.15em] text-white/50">HALF (21.1K)</div>
              <div className="font-display text-xs tracking-[0.15em] text-white/50">10K</div>
            </div>
            {PRIZE_TABLE.map((row, i) => (
              <motion.div key={row.pos} whileHover={{ background: 'rgba(255,255,255,0.03)' }}
                className="grid grid-cols-4 gap-0 p-4 border-t border-white/5">
                <div className="font-display font-bold text-lg" style={{ color: i === 0 ? ACCENT : 'white' }}>{row.pos}</div>
                <div className="font-display font-medium text-white">{row.full}</div>
                <div className="font-display font-medium text-white/70">{row.half}</div>
                <div className="font-display font-medium text-white/50">{row.ten}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display font-bold text-2xl mb-8">Special Awards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SPECIAL.map(s => (
              <div key={s.title} className="border border-white/10 p-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <h3 className="font-display font-semibold text-lg mb-3" style={{ color: ACCENT }}>{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
