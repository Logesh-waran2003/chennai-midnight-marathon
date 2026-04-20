import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { BODY_TEXT, WHITE, ORANGE } from '../components/constants'

const FAQS = [
  { q: 'What is the Chennai Midnight Marathon?', a: 'RBITC created history by organizing South India\'s premier Midnight Marathon. It is held at Island Grounds, Chennai. 100% of the proceeds support social causes, making every step you take count for a better future.' },
  { q: 'When is CMM 2026?', a: 'The 4th edition of the Chennai Midnight Marathon is scheduled on March 15-16, 2026 at Island Grounds, Chennai.' },
  { q: 'Where is the venue?', a: 'Island Grounds, Chennai — one of the most iconic venues in the city, with excellent connectivity and infrastructure.' },
  { q: 'Who organises CMM?', a: 'RBITC (Run Beyond Imagination Trust of Chennai), organises and conducts the Chennai Midnight Marathon each year, with support from all our Partners.' },
  { q: 'What are the proceeds used for?', a: 'Besides fostering the spirit of Running and good health, the CMM is the main fundraising event of RBITC. Funds raised are used to support various social causes through the year.' },
  { q: 'How many participants?', a: 'Over the last few years we have averaged about 12,000+ participants. Approx. 30% are women participants, coming from across India.' },
  { q: 'What are the race timings?', a: 'BK5K Run: 06:30 PM | 5K Fun Run: 06:40 PM | 10K Run: 08:30 PM | Full Marathon: 11:00 PM | 31.6K Run: 11:10 PM | Half Marathon: 11:25 PM' },
  { q: 'How do I register?', a: 'Please register at chennaimidnightmarathon.run. Registration closes 2 weeks before the event for timed races.' },
]

export default function FAQsPage() {
  const [open, setOpen] = useState(null)
  return (
    <>
      <PageHeader title="FAQs" />
      <Section style={{ background: WHITE, padding: '60px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {FAQS.map((f, i) => (
            <div key={i} style={{ borderBottom: '1px solid #eee' }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: '100%', textAlign: 'left', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, fontWeight: 500, color: BODY_TEXT }}>{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} style={{ color: ORANGE, fontSize: 24, fontWeight: 300 }}>+</motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                    <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 15, color: BODY_TEXT, lineHeight: 1.8, paddingBottom: 20 }}>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
