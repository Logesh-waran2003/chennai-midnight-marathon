import { motion } from 'framer-motion'
import Section from '../components/Section'
import { ACCENT } from '../components/constants'

const TIERS = [
  { tier: 'Title Sponsor', sponsors: ['TCS'] },
  { tier: 'Gold Partners', sponsors: ['Nike', 'Gatorade', 'SBI'] },
  { tier: 'Silver Partners', sponsors: ['Apollo Hospitals', 'Decathlon', 'Garmin', 'Asics'] },
  { tier: 'Official Partners', sponsors: ['Hyatt Regency', 'Chennai Metro', 'The Hindu', 'Star Sports', 'FM Radio City'] },
  { tier: 'Hydration Partner', sponsors: ['Bisleri'] },
  { tier: 'Timing Partner', sponsors: ['ChronoTrack'] },
]

export default function Partners() {
  return (
    <>
      <Section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tight mb-4">
            Our <span style={{ color: ACCENT }}>Partners</span>
          </h1>
          <p className="text-white/40 max-w-lg mx-auto">The brands and organizations that make CMM possible.</p>
        </div>
      </Section>

      <Section className="pb-20">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {TIERS.map(t => (
            <div key={t.tier}>
              <h3 className="font-display text-xs tracking-[0.2em] text-white/30 mb-6 text-center">{t.tier.toUpperCase()}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {t.sponsors.map(s => (
                  <motion.div
                    key={s}
                    whileHover={{ borderColor: ACCENT, scale: 1.02 }}
                    className="border border-white/10 px-8 py-5 font-display font-medium text-white/30 hover:text-white/60 transition-colors cursor-default"
                    style={{ background: 'rgba(255,255,255,0.02)' }}
                  >
                    {s}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-2xl mb-4">Become a Partner</h2>
          <p className="text-white/40 mb-6">Interested in partnering with Chennai Midnight Marathon? We offer customized sponsorship packages.</p>
          <a href="mailto:partnerships@chennaimidnightmarathon.run" className="text-sm font-display tracking-[0.1em] border-b pb-0.5 transition-colors" style={{ color: ACCENT }}>
            partnerships@chennaimidnightmarathon.run
          </a>
        </div>
      </Section>
    </>
  )
}
