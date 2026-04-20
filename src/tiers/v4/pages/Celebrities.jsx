import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { ORANGE, BODY_TEXT, WHITE, HEADING_DARK } from '../components/constants'

const CELEBRITIES = [
  { name: 'P.T. Usha', title: 'Legend of Indian Athletics', desc: 'Known as the Payyoli Express, P.T. Usha is one of the greatest athletes India has ever produced. Her legacy continues to inspire millions of runners across the nation.' },
  { name: 'Avinash Sable', title: 'Track and Field Athlete', desc: 'Avinash Mukund Sable is an Indian track and field athlete who specializes in 3000 metres steeplechase. He holds the national record and won silver at the 2022 Commonwealth Games.' },
  { name: 'Mary Kom', title: 'World / Olympic Boxing Champion', desc: 'Chungneijang Mary Kom Hmangte is an Indian Olympic boxer from Manipur. She is the only woman to become World Amateur Boxing champion for a record six times.' },
  { name: 'Saina Nehwal', title: 'Indian Badminton Champion', desc: 'Saina Nehwal is an Indian professional badminton singles player. A former world no. 1, she has won over 24 international titles including eleven Superseries titles.' },
  { name: 'Milind Soman', title: 'Iron Man Of India', desc: 'Fondly known as the Iron Man of India, Milind Soman is an actor, model, and fitness enthusiast who has completed multiple Ironman triathlons.' },
  { name: 'Harmilan Bains', title: 'Athlete', desc: 'Harmilan Kaur Bains, hailing from Punjab, won silver medals in the 800m and 1500m at the 2023 Asian Games. She is the National Record Holder in 1500m.' },
]

export default function Celebrities() {
  return (
    <>
      <PageHeader title="Celebrity Runners" />
      <Section style={{ background: WHITE, padding: '60px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 26, color: ORANGE, textAlign: 'center', marginBottom: 48 }}>
            Chennai Midnight Marathon Brand Ambassadors Over The Years
          </h2>
          {CELEBRITIES.map((c, i) => (
            <motion.div key={c.name} whileHover={{ x: 4 }} style={{ marginBottom: 40, paddingBottom: 40, borderBottom: i < CELEBRITIES.length - 1 ? '1px solid #eee' : 'none' }}>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 22, color: HEADING_DARK, marginBottom: 4 }}>{c.name}</h3>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 14, color: ORANGE, fontWeight: 500, marginBottom: 12 }}>{c.title}</p>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: BODY_TEXT, lineHeight: 1.8 }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  )
}
