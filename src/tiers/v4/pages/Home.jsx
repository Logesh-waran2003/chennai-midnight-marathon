import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../components/Section'
import { ORANGE, DARK_BG, LIGHT_PURPLE, BODY_TEXT, WHITE } from '../components/constants'

const BADGES = [
  { src: '/images/v4/aims.png', alt: 'AIMS Certified' },
  { src: '/images/v4/certified-course.png', alt: 'Certified Measured Course' },
  { src: '/images/v4/armed-forces-tagline.png', alt: 'Armed Forces Run' },
]

const PARTNERS = [
  { src: '/images/v4/title-sponsor.png', tier: 'Title' },
  { src: '/images/v4/associate-partner.png', tier: 'Associate Partner' },
  { src: '/images/v4/healthcare-partner.png', tier: 'Official Healthcare Partner' },
  { src: '/images/v4/half-marathon-partner.png', tier: 'Half Marathon Partner' },
  { src: '/images/v4/31k-partner.png', tier: '31.6K Run Partner' },
  { src: '/images/v4/10k-partner.png', tier: '10K Run Partner' },
]

const MISSIONS = [
  { title: 'Run To Make A Difference', body: 'The Chennai Midnight Marathon is one of the biggest fundraising events in South India. Every step you take raises awareness and funds for underprivileged children across Tamil Nadu.' },
  { title: 'Run For Hope', body: 'While we are fortunate to have families and friends to care for us, many are not. CMM supports cancer survivors and their families through the Chennai Cancer Foundation.' },
  { title: "Run For Those Who Can\u2019t", body: 'Are you someone who cares about spreading awareness and providing support for differently-abled athletes? 10% of proceeds fund adaptive sports programs across the state.' },
  { title: 'Run For A Smile', body: 'Every child deserves to smile. CMM partners with orphanages across Tamil Nadu to bring joy through sport, education, and community.' },
  { title: 'Run For The Earth', body: 'A zero-waste marathon. Every bib is plantable, every cup is compostable. We offset our carbon footprint and plant a tree for every finisher.' },
]

function PartnersCarousel() {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % PARTNERS.length), 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Section style={{ background: WHITE, padding: '60px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 35, fontWeight: 500, color: '#000', textAlign: 'center', marginBottom: 40 }}>
          Partners 2026
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 300, position: 'relative', overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} style={{ textAlign: 'center' }}>
              <img src={PARTNERS[current].src} alt={PARTNERS[current].tier} style={{ maxWidth: '100%', maxHeight: 250, objectFit: 'contain' }} />
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, color: BODY_TEXT, marginTop: 12 }}>{PARTNERS[current].tier}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20 }}>
          {PARTNERS.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{ width: 10, height: 10, borderRadius: '50%', border: 'none', cursor: 'pointer', background: i === current ? ORANGE : '#ccc', transition: 'background 0.2s' }} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: DARK_BG,
        backgroundImage: 'url(/images/v4/hero-bg.png)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        paddingTop: 70, minHeight: '60vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', padding: '40px 24px' }}>
          <img src="/images/v4/banner.jpeg" alt="Marathon Banner" style={{ maxWidth: '100%', width: 768, borderRadius: 4 }} />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 24, flexWrap: 'wrap' }}>
            {BADGES.map(b => <img key={b.alt} src={b.src} alt={b.alt} style={{ height: 80, objectFit: 'contain' }} />)}
          </div>
        </motion.div>
      </section>

      {/* CTA Banner */}
      <Section style={{ background: DARK_BG, padding: '20px 24px', textAlign: 'center' }}>
        <a href="#register" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, fontWeight: 600, color: ORANGE, textDecoration: 'underline' }}>
          Register Now for Chennai Midnight Marathon 2026
        </a>
      </Section>

      <PartnersCarousel />

      {/* What A Night */}
      <Section style={{ background: WHITE, padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <h3 style={{ fontFamily: '"Grechen Fuemen", cursive', fontSize: 62, fontWeight: 600, color: ORANGE, lineHeight: 1.1, marginBottom: 24 }}>WHAT A<br />NIGHT</h3>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, marginBottom: 16 }}>
              The rain did not stop us. The runners ran through the monsoon night. Volunteers, sponsors, and spectators beat the night together. Music blasted, drummers roared, spectators cheered on.
            </p>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: BODY_TEXT, lineHeight: 1.8 }}>
              4 years on, each year the CMM growing in stature, keeping the community healthy, fixing the roads, helping the needy, showing the world what wonders a small team can achieve...
            </p>
          </div>
          <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', background: '#000', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', background: ORANGE, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <span style={{ color: WHITE, fontSize: 24, marginLeft: 4 }}>▶</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Gear Up CTA */}
      <Section style={{ background: WHITE, padding: '40px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 20, fontWeight: 600, color: ORANGE, maxWidth: 700, margin: '0 auto' }}>
          Gear Up Now For Another Loooo....Oong Night On March 15th At The 4th Edition Of CMM 2026
        </h2>
      </Section>

      {/* Mission Sections */}
      <section style={{ background: DARK_BG, padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {MISSIONS.map((m, i) => (
            <Section key={m.title} style={{ marginBottom: i < MISSIONS.length - 1 ? 48 : 0 }}>
              <h2 style={{ fontFamily: '"Grechen Fuemen", cursive', fontSize: 48, fontWeight: 600, color: ORANGE, marginBottom: 16, textAlign: i % 2 === 0 ? 'left' : 'right' }}>{m.title}</h2>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: LIGHT_PURPLE, lineHeight: 1.8, textAlign: i % 2 === 0 ? 'left' : 'right' }}>{m.body}</p>
              {i < MISSIONS.length - 1 && <hr style={{ border: 'none', borderTop: '1px solid rgba(218,177,217,0.2)', marginTop: 48 }} />}
            </Section>
          ))}
        </div>
      </section>

      {/* The CMM Story */}
      <Section style={{ background: DARK_BG, padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: '"Grechen Fuemen", cursive', fontSize: 62, fontWeight: 600, color: ORANGE, marginBottom: 24 }}>The CMM Story</h2>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: LIGHT_PURPLE, lineHeight: 1.8, marginBottom: 16 }}>
            The Chennai Midnight Marathon represents the vision, vigour and vibrance of the beloved and inspiring city. The Chennai Midnight Marathon (CMM) was founded by RBITC in 2023 to support various deserving charities across Tamil Nadu.
          </p>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: LIGHT_PURPLE, lineHeight: 1.8 }}>
            With its unique chosen hours, it is South India's premier Midnight Marathon. The concept has captivated people resulting in a growing number of participants, from across India and beyond, each year.
          </p>
        </div>
      </Section>
    </>
  )
}
