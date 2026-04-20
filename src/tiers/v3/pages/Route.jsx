import { motion } from 'framer-motion'
import Section from '../components/Section'
import { ACCENT } from '../components/constants'

const CHECKPOINTS = [
  { km: '0', location: 'Island Grounds', note: 'Start line — midnight flag-off' },
  { km: '5', location: 'Marina Beach', note: 'Coastal stretch begins' },
  { km: '10', location: 'Mylapore', note: 'Temple district — DJ station' },
  { km: '15', location: 'Adyar', note: 'River crossing' },
  { km: '21.1', location: 'Besant Nagar', note: 'Half marathon finish' },
  { km: '25', location: 'Thiruvanmiyur', note: 'Hydration mega-station' },
  { km: '30', location: 'ECR Junction', note: 'Sunrise stretch begins' },
  { km: '35', location: 'Neelankarai', note: 'Beach road return' },
  { km: '42.2', location: 'Island Grounds', note: 'Finish line — dawn celebration' },
]

export default function Route_() {
  return (
    <>
      <Section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tight mb-4">
            Race <span style={{ color: ACCENT }}>Route</span>
          </h1>
          <p className="text-white/40 max-w-lg mx-auto">42.2 kilometres through Chennai's most iconic landmarks, from midnight to dawn.</p>
        </div>
      </Section>

      <Section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative border border-white/10 aspect-[2.5/1] flex items-center justify-center overflow-hidden mb-16"
            style={{ background: 'linear-gradient(135deg, rgba(255,200,100,0.03), transparent)' }}>
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 400" fill="none">
              <path d="M50 350 C150 280, 200 100, 350 150 S500 350, 600 180 S800 50, 950 200" stroke={ACCENT} strokeWidth="2.5" strokeDasharray="8 4" />
              {CHECKPOINTS.map((cp, i) => {
                const x = 50 + (i / (CHECKPOINTS.length - 1)) * 900
                const y = 200 + Math.sin(i * 0.8) * 100
                return <circle key={cp.km} cx={x} cy={y} r="4" fill={ACCENT} opacity="0.8" />
              })}
            </svg>
            <div className="text-center z-10">
              <div className="font-display font-bold text-3xl text-white/80 mb-2">Full Marathon Route</div>
              <div className="text-white/30 text-sm">AIMS Certified · Flat Course · Sea-Level</div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pb-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display font-bold text-2xl mb-8 text-center">Checkpoints</h2>
          <div className="space-y-0">
            {CHECKPOINTS.map((cp, i) => (
              <motion.div
                key={cp.km}
                whileHover={{ x: 4 }}
                className="flex items-start gap-6 py-4 border-b border-white/5"
              >
                <div className="font-display font-bold text-2xl w-16 shrink-0" style={{ color: ACCENT }}>{cp.km}<span className="text-sm text-white/30">km</span></div>
                <div>
                  <div className="font-display font-medium text-white">{cp.location}</div>
                  <div className="text-sm text-white/40">{cp.note}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
