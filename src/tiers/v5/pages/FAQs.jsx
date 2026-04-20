import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import { BODY_TEXT, WHITE, ORANGE, POPPINS, ARCHIVO } from '../components/constants'

const FAQS = [
  { q: 'What is the Chennai Midnight Marathon?', a: 'RBITC created history by organizing South India\'s premier Midnight Marathon. It was held at Island Grounds, Chennai, in line with the spirit of the event. This first of its kind event attracts close to 12,000 participants each year. 100% of the proceeds support social causes, making every step you take, count for a better future for the under privileged.' },
  { q: 'What is the purpose of the Marathon?', a: 'Midnight Marathon – A tribute to our city: It is to show that Chennai cares & appreciates the hard work of its people. 100% of the proceeds support social causes, making every step you take, count for a better future for the under privileged.' },
  { q: 'Is CMM a member of AIMS?', a: 'CMM is South India\'s premier Midnight Marathon and it is acknowledged and marked in the official \'International Marathon Calendar\'. CMM is one of the few races in India to be a member of Association of International Marathons and Distance Races (AIMS-IAAF). AIMS is the worldwide body for distance running events.' },
  { q: 'When is CMM 2026?', a: 'The 4th edition of the Chennai Midnight Marathon is scheduled on March 15-16, 2026 at Island Grounds, Chennai.' },
  { q: 'Where is the venue?', a: 'Island Grounds, Chennai — one of the most iconic venues in the city, with excellent connectivity and infrastructure.' },
  { q: 'Who organises CMM?', a: 'RBITC (Run Beyond Imagination Trust of Chennai), Chennai, organises and conducts the Chennai Midnight Marathon, each year, with support from all our Partners.' },
  { q: 'What are the proceeds used for?', a: 'Besides fostering the spirit of Running and good health, the CMM is the main fundraising event of RBITC. Funds raised from the Marathon are used to support various social causes, through the year.' },
  { q: 'How many participants?', a: 'Over the last few years we have averaged about 12,000+ participants. Approx. 30% are women participants, coming from across India.' },
  { q: 'What are the race timings?', a: 'Govt. Schools Relay Race: 04:30 PM | BK5K Run (Timed): 06:30 PM | 5K Fun Run (Non-timed): 06:40 PM | 10K Run: 08:30 PM | Full Marathon: 11:00 PM | 31.6K Run: 11:10 PM | Half Marathon: 11:25 PM' },
  { q: 'How do I register?', a: 'Please register at chennaimidnightmarathon.run. Registration closes 2 weeks before the event for timed races.' },
  { q: 'What is the registration fee?', a: 'Registration fees vary by race category. Please visit the registration page for current pricing. Early bird discounts are available.' },
  { q: 'Is the course BQ qualifying?', a: 'Yes! The CMM Full Marathon is AIMS certified and qualifies for Boston Marathon, London Marathon, and other World Marathon Majors.' },
]

function FAQItem({ faq, isOpen, toggle }) {
  return (
    <div style={{ borderBottom: '1px solid #eee' }}>
      <button onClick={toggle} style={{
        width: '100%', textAlign: 'left', padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{ fontFamily: POPPINS, fontSize: 15, fontWeight: 500, color: BODY_TEXT, paddingRight: 16 }}>{faq.q}</span>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} style={{ color: ORANGE, fontSize: 22, fontWeight: 300, flexShrink: 0 }}>+</motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
            <p style={{ fontFamily: ARCHIVO, fontSize: 15, color: BODY_TEXT, lineHeight: 1.8, paddingBottom: 18 }}>{faq.a}</p>
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
      <PageHeader title="FAQs" />
      <section style={{ background: WHITE, padding: '40px 37px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} isOpen={open === i} toggle={() => setOpen(open === i ? null : i)} />
          ))}
        </div>
      </section>
    </>
  )
}
