import Section from '../components/Section'
import { ACCENT } from '../components/constants'

const TIPS = [
  { week: 'Weeks 1–4', title: 'Build Your Base', items: ['Walk/run 3x per week, 20–30 min', 'Focus on consistency, not speed', 'Get proper running shoes fitted', 'Hydrate throughout the day'] },
  { week: 'Weeks 5–8', title: 'Increase Distance', items: ['Run 4x per week, 30–45 min', 'Add one long run per week', 'Practice race-day nutrition', 'Join a local running group'] },
  { week: 'Weeks 9–12', title: 'Race Prep', items: ['Simulate race conditions (night runs)', 'Taper in final week', 'Plan race-day logistics', 'Trust your training'] },
]

export default function Rookies() {
  return (
    <>
      <Section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tight mb-4">
            Running for <span style={{ color: ACCENT }}>Rookies</span>
          </h1>
          <p className="text-white/40 max-w-lg mx-auto">First marathon? First 5K? We've got you. Here's your 12-week guide to crossing that midnight finish line.</p>
        </div>
      </Section>

      <Section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {TIPS.map((phase, i) => (
              <div key={phase.week} className="border border-white/10 p-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="text-xs tracking-[0.2em] font-display mb-2" style={{ color: ACCENT }}>{phase.week}</div>
                <h3 className="font-display font-bold text-xl text-white mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map(item => (
                    <li key={item} className="text-sm text-white/40 flex items-start gap-2">
                      <span className="text-white/20 mt-1">—</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pb-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-2xl mb-6">Race Night Tips</h2>
          <div className="space-y-4">
            {[
              'Arrive at the venue by 10 PM for bib collection and warm-up.',
              'Wear reflective gear — even though the course is lit, visibility helps.',
              'Don\'t try anything new on race night. Stick to tested shoes, clothes, and nutrition.',
              'Start slow. The midnight energy will tempt you to sprint — resist it.',
              'Enjoy the experience. High-five the volunteers. Soak in the city at night.',
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-4 py-3 border-b border-white/5">
                <span className="font-display font-bold text-lg shrink-0" style={{ color: ACCENT }}>{i + 1}</span>
                <p className="text-white/50 text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
