import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import { ORANGE, BODY_TEXT, WHITE, HEADING_DARK, POPPINS, ARCHIVO } from '../components/constants'

const CELEBRITIES = [
  { name: 'P.T. Usha', title: 'Legend of Indian Athletics', desc: 'Known as the Payyoli Express, P.T. Usha is one of the greatest athletes India has ever produced. Her legacy continues to inspire millions of runners across the nation.' },
  { name: 'Avinash Sable', title: 'Track and Field Athlete', desc: 'Avinash Mukund Sable is an Indian track and field athlete who specializes in 3000 metres steeplechase. He holds the national record of 8:11.20, set at the 2022 Commonwealth Games where he won the silver medal. It was the ninth time he had set the national record.' },
  { name: 'Mary Kom', title: 'World / Olympic Boxing Champion', desc: 'Chungneijang Mary Kom Hmangte is an Indian Olympic boxer from Manipur. She is the only woman to become World Amateur Boxing champion for a record six times, and the only woman boxer to have won a medal in each one of the seven world championships.' },
  { name: 'Saina Nehwal', title: 'Indian Badminton Champion', desc: 'Saina Nehwal is an Indian professional badminton singles player. A former world no. 1, she has won over 24 international titles, which includes eleven Superseries titles.' },
  { name: 'Milind Soman', title: 'Iron Man Of India', desc: 'Fondly known as the Iron Man of India, Milind Soman is an actor, model, and fitness enthusiast who has completed multiple Ironman triathlons and ultramarathons.' },
  { name: 'Harmilan Bains', title: 'Athlete', desc: 'Harmilan Kaur Bains, hailing from Punjab, India, won silver medals in the 800m and 1500m at the 2023 Asian Games held in Hangzhou, China. She is the National Record Holder in 1500m.' },
  { name: 'Rakshitha Raju', title: 'Athlete', desc: 'Rakshitha Raju is a visually impaired Indian runner. She won the gold medal at the 2022 Hangzhou Asian Para Games in the women\'s 1500 metres T11 category. Being a visually handicapped runner, Rakshitha completed the race with the help of a guide runner.' },
]

export default function Celebrities() {
  return (
    <>
      <PageHeader title="Celebrity Runners" />
      <section style={{ background: WHITE, padding: '40px 37px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: POPPINS, fontSize: 26, fontWeight: 600, color: ORANGE, textAlign: 'center', margin: '0 0 40px' }}>
            Chennai Midnight Marathon Brand Ambassadors Over The Years
          </h2>
          {CELEBRITIES.map((c, i) => (
            <motion.div key={c.name} whileHover={{ x: 4 }} style={{ marginBottom: 32, paddingBottom: 32, borderBottom: i < CELEBRITIES.length - 1 ? '1px solid #eee' : 'none' }}>
              <h3 style={{ fontFamily: POPPINS, fontSize: 22, fontWeight: 600, color: HEADING_DARK, margin: '0 0 4px' }}>{c.name}</h3>
              <p style={{ fontFamily: ARCHIVO, fontSize: 14, fontWeight: 500, color: ORANGE, margin: '0 0 10px' }}>{c.title}</p>
              <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, margin: 0 }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
