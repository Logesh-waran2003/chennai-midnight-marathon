import { motion } from 'framer-motion'
import Section from '../components/Section'
import { ACCENT } from '../components/constants'

const AMBASSADORS = [
  { name: 'Srikanth Kidambi', title: 'Olympic Badminton Champion', quote: 'Running at midnight is like competing under lights — the energy is unmatched.' },
  { name: 'Dutee Chand', title: 'National Sprint Champion', quote: "Chennai's flat course and night breeze make this the perfect marathon for PBs." },
  { name: 'Avinash Sable', title: 'Steeplechase National Record Holder', quote: 'The crowd support at CMM is something every runner should experience.' },
  { name: 'Sudha Singh', title: 'Asian Games Medalist', quote: 'From Marina to Mylapore — this route tells the story of Chennai.' },
  { name: 'Neeraj Chopra', title: 'Olympic Gold Medalist', quote: 'I may throw javelins, but the spirit of endurance at CMM inspires me.' },
  { name: 'P.T. Usha', title: 'Legend of Indian Athletics', quote: 'Every runner who crosses that midnight finish line is a champion.' },
]

export default function Ambassadors() {
  return (
    <>
      <Section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tight mb-4">
            Celebrity <span style={{ color: ACCENT }}>Ambassadors</span>
          </h1>
          <p className="text-white/40 max-w-lg mx-auto">India's finest athletes championing the midnight running movement.</p>
        </div>
      </Section>

      <Section className="pb-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMBASSADORS.map((a) => (
            <motion.div
              key={a.name}
              whileHover={{ y: -4, borderColor: ACCENT }}
              className="border border-white/10 p-8 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-6 flex items-center justify-center">
                <span className="font-display font-bold text-xl text-white/30">{a.name[0]}</span>
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-1">{a.name}</h3>
              <p className="text-xs tracking-[0.1em] text-white/40 font-display mb-4">{a.title}</p>
              <p className="text-white/50 text-sm leading-relaxed italic mt-auto">"{a.quote}"</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  )
}
