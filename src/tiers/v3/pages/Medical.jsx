import Section from '../components/Section'
import { ACCENT } from '../components/constants'

const STATIONS = [
  { km: '0', type: 'Full Medical', desc: 'Start line — ambulance bay, AED, doctors on standby' },
  { km: '5', type: 'First Aid', desc: 'Basic first aid, ice, electrolytes' },
  { km: '10', type: 'Full Medical', desc: 'Doctor, physiotherapist, ambulance' },
  { km: '15', type: 'First Aid', desc: 'Basic first aid, ice, electrolytes' },
  { km: '21.1', type: 'Full Medical', desc: 'Half marathon finish — full medical team' },
  { km: '25', type: 'First Aid', desc: 'Hydration mega-station with medical support' },
  { km: '30', type: 'Full Medical', desc: 'Doctor, physiotherapist, ambulance' },
  { km: '35', type: 'First Aid', desc: 'Basic first aid, ice, electrolytes' },
  { km: '42.2', type: 'Full Medical', desc: 'Finish line — full hospital-grade setup' },
]

export default function Medical() {
  return (
    <>
      <Section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tight mb-4">
            Medical <span style={{ color: ACCENT }}>Advisory</span>
          </h1>
          <p className="text-white/40 max-w-lg mx-auto">Your safety is our top priority. Here's our medical infrastructure.</p>
        </div>
      </Section>

      <Section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { num: '15', label: 'Ambulances' },
              { num: '8', label: 'Medical Stations' },
              { num: '50+', label: 'Medical Staff' },
            ].map(s => (
              <div key={s.label} className="text-center border border-white/10 p-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="font-display font-black text-4xl mb-2" style={{ color: ACCENT }}>{s.num}</div>
                <div className="text-xs tracking-[0.15em] text-white/40 font-display">{s.label}</div>
              </div>
            ))}
          </div>

          <h2 className="font-display font-bold text-2xl mb-6">Medical Stations</h2>
          <div className="space-y-0">
            {STATIONS.map(s => (
              <div key={s.km} className="flex items-start gap-6 py-4 border-b border-white/5">
                <div className="font-display font-bold text-xl w-14 shrink-0" style={{ color: ACCENT }}>{s.km}<span className="text-xs text-white/30">km</span></div>
                <div>
                  <div className="font-display font-medium text-white text-sm">{s.type}</div>
                  <div className="text-xs text-white/40">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pb-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-2xl mb-6">Pre-Race Health Guidelines</h2>
          <div className="space-y-3">
            {[
              'Get a medical fitness certificate from a registered physician (mandatory for Full & Half).',
              'Do not run if you have fever, chest pain, or any acute illness.',
              'Inform the medical team of any pre-existing conditions at bib collection.',
              'Carry your emergency contact details on your person during the race.',
              'Hydrate well in the 48 hours before the race. Avoid alcohol.',
              'If you feel dizzy, nauseous, or experience chest pain during the race — STOP immediately and alert the nearest marshal.',
            ].map((g, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-white/50">
                <span className="text-white/20 mt-0.5">•</span>
                <span>{g}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
