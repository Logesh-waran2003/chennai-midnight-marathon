import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import { ACCENT, RACES } from '../components/constants'

export default function Register() {
  const [selected, setSelected] = useState(0)

  return (
    <>
      <Section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tight mb-4">
            <span style={{ color: ACCENT }}>Register</span>
          </h1>
          <p className="text-white/40 max-w-lg mx-auto">Secure your bib for Chennai Midnight Marathon 2026.</p>
        </div>
      </Section>

      <Section className="pb-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {RACES.map((r, i) => (
              <button
                key={r.name}
                onClick={() => setSelected(i)}
                className={`border p-4 text-left transition-all ${selected === i ? 'border-opacity-100' : 'border-white/10 hover:border-white/20'}`}
                style={{ borderColor: selected === i ? r.color : undefined, background: selected === i ? 'rgba(255,255,255,0.03)' : 'transparent' }}
              >
                <div className="font-display font-black text-2xl" style={{ color: r.color }}>{r.dist}<span className="text-xs text-white/30">{r.unit}</span></div>
                <div className="text-xs text-white/50 mt-1">{r.name}</div>
                <div className="font-display font-semibold text-white mt-2">{r.price}</div>
              </button>
            ))}
          </div>

          <form className="space-y-5" onSubmit={e => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-display tracking-[0.1em] text-white/40 mb-2">FIRST NAME</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-display tracking-[0.1em] text-white/40 mb-2">LAST NAME</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-display tracking-[0.1em] text-white/40 mb-2">EMAIL</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors" />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-display tracking-[0.1em] text-white/40 mb-2">PHONE</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-display tracking-[0.1em] text-white/40 mb-2">DATE OF BIRTH</label>
                <input type="date" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white/60 text-sm focus:outline-none focus:border-white/30 transition-colors" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-display tracking-[0.1em] text-white/40 mb-2">GENDER</label>
                <select className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white/60 text-sm focus:outline-none focus:border-white/30 transition-colors">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-display tracking-[0.1em] text-white/40 mb-2">T-SHIRT SIZE</label>
                <select className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white/60 text-sm focus:outline-none focus:border-white/30 transition-colors">
                  <option value="">Select</option>
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-display tracking-[0.1em] text-white/40 mb-2">EMERGENCY CONTACT</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors" placeholder="Name — Phone number" />
            </div>

            <div className="flex items-start gap-3 pt-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-xs text-white/40">I agree to the registration terms, refund policy, and confirm I am medically fit to participate.</span>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-white/30 font-display">TOTAL</div>
                <div className="font-display font-bold text-2xl text-white">{RACES[selected].price}</div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: `0 0 40px oklch(0.76 0.19 62 / 0.3)` }}
                whileTap={{ scale: 0.98 }}
                className="font-display text-sm tracking-[0.15em] px-10 py-4"
                style={{ background: ACCENT, color: '#000' }}
              >
                PROCEED TO PAYMENT
              </motion.button>
            </div>
          </form>
        </div>
      </Section>
    </>
  )
}
