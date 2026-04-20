import Section from '../components/Section'
import { ACCENT } from '../components/constants'

export default function About() {
  return (
    <>
      <Section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tight mb-4">
            About <span style={{ color: ACCENT }}>CMM</span>
          </h1>
          <p className="text-white/40 max-w-lg mx-auto">Four editions. 48,000 finishers. One unforgettable night.</p>
        </div>
      </Section>

      <Section className="pb-20">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <div className="border-l-2 pl-6 py-2" style={{ borderColor: ACCENT }}>
            <h2 className="font-display font-bold text-2xl text-white mb-3">The Story</h2>
            <p className="text-white/50 leading-relaxed">
              Chennai Midnight Marathon was born from a simple idea: what if we gave runners the city's best roads, 
              the coolest temperatures, and an electric atmosphere — all at once? In 2023, 3,000 runners answered that call. 
              By 2025, we had 12,000. In 2026, we're aiming for 15,000.
            </p>
          </div>

          <div className="border-l-2 pl-6 py-2" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <h2 className="font-display font-bold text-2xl text-white mb-3">The Mission</h2>
            <p className="text-white/50 leading-relaxed">
              We believe running transforms cities. When 12,000 people take to the streets at midnight, 
              something magical happens — barriers dissolve, strangers become pacers, and Chennai reveals 
              a side of itself that only runners get to see.
            </p>
          </div>

          <div className="border-l-2 pl-6 py-2" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <h2 className="font-display font-bold text-2xl text-white mb-3">RBITC</h2>
            <p className="text-white/50 leading-relaxed">
              CMM is organized by Run Beyond Imagination Trust of Chennai (RBITC), a non-profit dedicated to 
              promoting running culture in South India. RBITC also organizes community runs, school athletics 
              programs, and coaches aspiring marathoners through their Run Academy.
            </p>
          </div>

          <div className="border-l-2 pl-6 py-2" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <h2 className="font-display font-bold text-2xl text-white mb-3">Certifications</h2>
            <div className="flex flex-wrap gap-3">
              {['AIMS Certified', 'AFI Approved', 'IAAF Standards', 'BQ Qualifying'].map(c => (
                <span key={c} className="text-xs px-3 py-1.5 border border-white/10 text-white/50 font-display tracking-wide">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
