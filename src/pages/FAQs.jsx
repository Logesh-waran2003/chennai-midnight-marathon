import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../components/Section'
import { ACCENT } from '../components/constants'

const FAQS = [
  { q: 'What time does the marathon start?', a: 'The Full Marathon flags off at 11:59 PM on March 15, 2026. Half Marathon at 12:30 AM, 10K at 1:00 AM, and 5K at 1:30 AM.' },
  { q: 'Is the course well-lit?', a: 'Yes. The entire 42.2K route is illuminated with professional-grade lighting. Every kilometer has LED markers, and major intersections have floodlights.' },
  { q: 'What about safety?', a: 'Over 500 marshals, 200 police personnel, 15 ambulances, and 8 medical stations are deployed along the route. Every runner gets a tracking chip.' },
  { q: 'Can beginners participate?', a: 'Absolutely! The 5K Midnight Dash is designed for first-timers. No qualifying time needed. We also have a "Running for Rookies" program.' },
  { q: 'Is there a time limit?', a: 'Full Marathon: 6 hours. Half Marathon: 3.5 hours. 10K: 2 hours. 5K: 1 hour. Sweeper buses follow the last runner.' },
  { q: 'What\'s included in registration?', a: 'Race bib, timing chip, finisher medal, hydration stations every 2.5K, post-race meal, and event insurance. Full/Half also get finisher T-shirts.' },
  { q: 'Can I transfer my bib?', a: 'Bib transfers are allowed until March 1, 2026 for a ₹200 transfer fee. After that, no transfers are permitted for safety reasons.' },
  { q: 'Is the course BQ qualifying?', a: 'Yes! The CMM Full Marathon is AIMS certified and qualifies for Boston Marathon, London Marathon, and other World Marathon Majors.' },
  { q: 'What if it rains?', a: 'The event runs rain or shine. Chennai in March rarely sees rain, but in case of severe weather, we have contingency protocols in place.' },
  { q: 'Where do I park?', a: 'Free parking at Island Grounds (start/finish). Additional parking at YMCA Grounds and Napier Bridge area. We recommend carpooling or using the metro.' },
]

function FAQItem({ faq, isOpen, toggle }) {
  return (
    <div className="border-b border-white/5">
      <button onClick={toggle} className="w-full text-left py-5 flex items-center justify-between gap-4 group">
        <span className="font-display font-medium text-white group-hover:text-white/80 transition-colors">{faq.q}</span>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-white/40 text-xl shrink-0">+</motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="text-white/40 text-sm leading-relaxed pb-5">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQs() {
  const [open, setOpen] = useState(null)

  return (
    <>
      <Section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tight mb-4">
            <span style={{ color: ACCENT }}>FAQs</span>
          </h1>
          <p className="text-white/40 max-w-lg mx-auto">Everything you need to know about race day.</p>
        </div>
      </Section>

      <Section className="pb-28">
        <div className="max-w-3xl mx-auto px-6">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} isOpen={open === i} toggle={() => setOpen(open === i ? null : i)} />
          ))}
        </div>
      </Section>
    </>
  )
}
