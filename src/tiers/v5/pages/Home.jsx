import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ORANGE, DARK_BG, FOOTER_BG, INSTA_BG, LIGHT_PURPLE, BODY_TEXT, WHITE, BLACK, GRECHEN, POPPINS, ARCHIVO, IMG } from '../components/constants'

// Exact partner data from reference site
const PARTNERS = [
  { src: `${IMG}/title-sponsor.png`, tier: 'Title' },
  { src: `${IMG}/associate-partner.png`, tier: 'Associate Partner' },
  { src: `${IMG}/healthcare-partner.png`, tier: 'Official Healthcare Partner' },
  { src: `${IMG}/half-marathon-partner.png`, tier: 'Half Marathon Partner' },
  { src: `${IMG}/31k-partner.png`, tier: '31.6K Run Partner' },
  { src: `${IMG}/10k-partner.png`, tier: '10K Run Partner' },
  { src: `${IMG}/5k-partner.png`, tier: 'BK5K Race Partner' },
  { src: `${IMG}/hospitality-partner.png`, tier: 'Official Hospitality Partner' },
]

const MISSIONS = [
  { title: 'Run To Make A Difference', body: 'The Chennai Midnight Marathon is one of the biggest fundraising events in South India. Every step you take raises awareness and funds for underprivileged children across Tamil Nadu. 100% of the proceeds support social causes, making every step you take, count for a better future for the under privileged.' },
  { title: 'Run For Hope', body: 'While we are fortunate to have families and friends to care for us, many are not. CMM supports cancer survivors and their families through the Chennai Cancer Foundation. Your participation helps fund treatment, rehabilitation, and hope for thousands.' },
  { title: "Run For Those Who Can\u2019t", body: 'Are you someone who cares about spreading awareness and providing support for differently-abled athletes? 10% of proceeds fund adaptive sports programs across the state. Every runner who crosses the finish line runs for those who cannot.' },
  { title: 'Run For A Smile', body: '"Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing." Every child deserves to smile. CMM partners with orphanages across Tamil Nadu to bring joy through sport, education, and community.' },
  { title: 'Run For The Earth', body: 'Climate change. Pollution. Widespread destruction. These are not just headlines — they are realities we face every day. A zero-waste marathon. Every bib is plantable, every cup is compostable. We offset our carbon footprint and plant a tree for every finisher.' },
]

function Section({ children, style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }} style={style}>
      {children}
    </motion.div>
  )
}

function PartnersCarousel() {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % PARTNERS.length), 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Section style={{ padding: '20px 37px' }}>
      {/* Exact: Poppins 45px/500, black */}
      <h2 style={{ fontFamily: POPPINS, fontSize: 45, fontWeight: 500, color: BLACK, textAlign: 'center', margin: '0 0 20px' }}>
        Partners 2026
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 200, position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -80 }} transition={{ duration: 0.4 }} style={{ textAlign: 'center' }}>
            <img src={PARTNERS[current].src} alt={PARTNERS[current].tier} style={{ maxWidth: '100%', maxHeight: 200, objectFit: 'contain' }} />
            <p style={{ fontFamily: POPPINS, fontSize: 14, color: BODY_TEXT, marginTop: 8 }}>{PARTNERS[current].tier}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 12 }}>
        {PARTNERS.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{ width: 8, height: 8, borderRadius: '50%', border: 'none', cursor: 'pointer', background: i === current ? ORANGE : '#ccc', transition: 'background 0.2s', padding: 0 }} />
        ))}
      </div>
    </Section>
  )
}

export default function Home() {
  return (
    <>
      {/* HERO — exact: bg rgb(2,1,6), bgImage Layer-1, padding 112px 37px, height ~759px */}
      <section style={{
        background: DARK_BG,
        backgroundImage: `url(${IMG}/hero-bg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '112px 37px',
        minHeight: 759,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ textAlign: 'center' }}>
          {/* Banner image */}
          <img src={`${IMG}/banner.jpeg`} alt="Marathon Banner" style={{ maxWidth: '100%', width: 768, borderRadius: 0 }} />
          {/* Thank you / secondary image */}
          <div style={{ marginTop: 20 }}>
            <img src={`${IMG}/thank-you.png`} alt="" style={{ height: 100, objectFit: 'contain' }} />
          </div>
          {/* Certification badges — exact layout: 3 badges in a row with padding-top 70px */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 30, marginTop: 70, flexWrap: 'wrap', alignItems: 'center' }}>
            <img src={`${IMG}/aims.png`} alt="AIMS Certified" style={{ height: 100, objectFit: 'contain' }} />
            <img src={`${IMG}/certified-course.png`} alt="Certified Measured Course" style={{ height: 110, objectFit: 'contain' }} />
            <img src={`${IMG}/armed-forces-tagline.png`} alt="Armed Forces Run" style={{ height: 60, objectFit: 'contain', maxWidth: '80%' }} />
          </div>
        </motion.div>
      </section>

      {/* PARTNERS — exact: Poppins 45px heading, carousel */}
      <PartnersCarousel />

      {/* WHAT A NIGHT — exact: padding 0px 10px, Grechen Fuemen 55px, orange */}
      <Section style={{ padding: '0 10px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, alignItems: 'center', padding: '40px 0' }}>
          <div>
            <h3 style={{ fontFamily: GRECHEN, fontSize: 55, fontWeight: 600, color: ORANGE, lineHeight: 1.1, margin: '0 0 20px' }}>
              WHAT A<br />NIGHT
            </h3>
            <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, margin: '0 0 12px' }}>
              The rain did not stop us... the runners ran through the monsoon night.. Volunteers, the sponsors beat the night.. Music blasted, drummers roared, spectators cheered on.
            </p>
            <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8 }}>
              4 years on, each year the CMM growing in stature, keeping the community healthy, fixing the roads, helping the needy, showing the world what wonders a small team can achieve…
            </p>
          </div>
          <div style={{ position: 'relative', borderRadius: 0, overflow: 'hidden', background: '#111', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', background: ORANGE, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <span style={{ color: WHITE, fontSize: 24, marginLeft: 4 }}>▶</span>
            </div>
          </div>
        </div>
      </Section>

      {/* GEAR UP CTA — exact: padding 15px 0 0, Poppins 20px/600, orange */}
      <Section style={{ padding: '15px 0 0', textAlign: 'center' }}>
        <h2 style={{ fontFamily: POPPINS, fontSize: 20, fontWeight: 600, color: ORANGE, maxWidth: 800, margin: '0 auto', lineHeight: 1.5 }}>
          Gear Up Now For Another Loooo….Oong Night On March 15th At The 4th Edition Of CMM 2026
        </h2>
      </Section>

      {/* MISSION SECTIONS — exact: padding 30px 10px, dark parent bg */}
      <section style={{ background: DARK_BG, padding: '30px 10px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* First mission — large Grechen Fuemen title */}
          <Section>
            <h2 style={{ fontFamily: GRECHEN, fontSize: 45, fontWeight: 600, color: ORANGE, margin: '0 0 16px' }}>
              {MISSIONS[0].title}
            </h2>
            <h2 style={{ fontFamily: ARCHIVO, fontSize: 16, fontWeight: 400, color: LIGHT_PURPLE, lineHeight: 1.8, margin: '0 0 30px' }}>
              {MISSIONS[0].body}
            </h2>
          </Section>

          {/* Remaining missions — Poppins 14px title (white), Archivo 16px body (light purple) */}
          {MISSIONS.slice(1).map((m) => (
            <Section key={m.title} style={{ marginBottom: 20 }}>
              <h2 style={{ fontFamily: POPPINS, fontSize: 14, fontWeight: 500, color: WHITE, margin: '0 0 8px' }}>
                {m.title}
              </h2>
              <h2 style={{ fontFamily: ARCHIVO, fontSize: 16, fontWeight: 400, color: LIGHT_PURPLE, lineHeight: 1.8, margin: '0 0 20px' }}>
                {m.body}
              </h2>
            </Section>
          ))}
        </div>
      </section>

      {/* THE CMM STORY — exact: Grechen Fuemen 50px white, Poppins 16px white, height ~960px */}
      <section style={{ background: DARK_BG, padding: '60px 37px', minHeight: 500 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Section>
            <h2 style={{ fontFamily: GRECHEN, fontSize: 50, fontWeight: 600, color: WHITE, textAlign: 'center', margin: '0 0 30px' }}>
              The CMM Story
            </h2>
            <h2 style={{ fontFamily: POPPINS, fontSize: 16, fontWeight: 500, color: WHITE, lineHeight: 1.8, textAlign: 'center', margin: '0 0 20px' }}>
              The Chennai Midnight Marathon represents the vision, vigour and vibrance of the beloved and inspiring city. The Chennai Midnight Marathon (CMM) was founded by RBITC in 2023 to support various deserving charities across Tamil Nadu. With its unique chosen hours, it is South India's premier Midnight Marathon. The concept has captivated people resulting in a growing number of participants, from across India and beyond, each year.
            </h2>
            <p style={{ fontFamily: POPPINS, fontSize: 16, fontWeight: 400, color: LIGHT_PURPLE, lineHeight: 1.8, textAlign: 'center', margin: '0 0 20px' }}>
              Professional athletes and enthusiastic runners alike join together to run for a specific cause each year, which forms the theme of the marathon. The CMM reflects a unique spectrum of values which is shared by participants, their families and supporters across India and the world.
            </p>
            <p style={{ fontFamily: POPPINS, fontSize: 16, fontWeight: 400, color: LIGHT_PURPLE, lineHeight: 1.8, textAlign: 'center', margin: 0 }}>
              All of Chennai comes out on race day to celebrate the spirit of the city. Companies participate in large numbers using the marathon as a platform to show support for the city, for employee engagement & brand visibility. NGOs participate to raise funds and create awareness for their cause.
            </p>
          </Section>
        </div>
      </section>

      {/* INSTAGRAM/SOCIAL — exact: bg rgb(27,26,24), padding 75px 37px */}
      <section style={{ background: INSTA_BG, padding: '75px 37px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Section>
            <h3 style={{ fontFamily: POPPINS, fontSize: 24, fontWeight: 500, color: WHITE, textAlign: 'center', margin: '0 0 30px' }}>
              Follow Us on Instagram
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
              {[1,2,3,4,5].map(i => (
                <div key={i} style={{ aspectRatio: '1/1', background: 'rgba(255,255,255,0.05)', borderRadius: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: POPPINS, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>@cmm_run</span>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* FOOTER BANNER — exact: bg rgb(23,22,20), Poppins 45px white */}
      <section style={{ background: FOOTER_BG, padding: '40px 37px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: POPPINS, fontSize: 45, fontWeight: 500, color: WHITE, margin: 0 }}>
          Chennai Midnight Marathon
        </h2>
      </section>
    </>
  )
}
