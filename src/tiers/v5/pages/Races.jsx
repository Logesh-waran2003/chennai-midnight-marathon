import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { ORANGE, BODY_TEXT, WHITE, HEADING_DARK, POPPINS, ARCHIVO } from '../components/constants'

const RACES = [
  { name: 'Government Schools Relay', dist: '5 x 200m', time: '04:30 PM', cutoff: '06:00 PM', desc: 'The Government schools children only need an opportunity to excel. They have been doing it consistently in academics, on the football field and in extracurricular activities. Now let\'s create a National Running Champion.' },
  { name: 'BK5K Run (Timed)', dist: '5 KM', time: '06:30 PM', cutoff: '08:00 PM', desc: 'Running a 5K is a great way to challenge yourself if you\'re already a Runner, or to set a goal for yourself if you\'re starting to run for the first time. Pace yourself as you build your speed, endurance, and strength, but also be sure to challenge yourself.' },
  { name: '5K Fun Run (Non-timed)', dist: '5 KM', time: '06:40 PM', cutoff: '08:10 PM', desc: 'The 5K Fun Run is the flagship event of CMM. It is the event that has the maximum participation with thousands turning up for it. This is an event for people who aren\'t professional or serious long distance runners and are looking to improve or maintain their fitness.' },
  { name: '10K Run', dist: '10 KM (2 Loops)', time: '08:30 PM', cutoff: '10:45 PM', desc: 'The 10K Run is the T20 Cricket of Marathons across the world. Immensely popular, this event has taken the world by storm. This is an event for people who aren\'t professional, but are serious long distance runners.' },
  { name: 'Full Marathon', dist: '42.195 KM (8 Loops)', time: '11:00 PM', cutoff: '05:00 AM', desc: 'The Marathon is a long-distance foot race with a distance of 42.195 kilometres, usually run as a road race. The marathon can be completed by running or with a run/walk strategy. CMM is a member of AIMS which has grown since its foundation in 1982.' },
  { name: '31.6K Run', dist: '31.65 KM (6 Loops)', time: '11:10 PM', cutoff: '04:00 AM', desc: 'If you can run a Half, you are well on your way to being able to run 42.195 km. The 31.6K Run is a road running event of 31.65 km. This all new entrant distance has taken the world\'s fancy as the stepping-stone towards running a Full Marathon.' },
  { name: 'Half Marathon', dist: '21.097 KM (4 Loops)', time: '11:25 PM', cutoff: '03:30 AM', desc: 'A Half Marathon is a road running event of 21.0975 km — half the distance of a marathon. It is common for a half marathon event to be held concurrently with a marathon or a 5K race, using almost the same course with a late start.' },
]

export default function Races() {
  return (
    <>
      <PageHeader title="Race Day" />
      <section style={{ background: WHITE, padding: '40px 37px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {RACES.map((r, i) => (
            <Section key={r.name} style={{ marginBottom: 36, paddingBottom: 36, borderBottom: i < RACES.length - 1 ? '1px solid #eee' : 'none' }}>
              <h3 style={{ fontFamily: POPPINS, fontSize: 22, fontWeight: 600, color: HEADING_DARK, margin: '0 0 8px' }}>{r.name}</h3>
              <div style={{ display: 'flex', gap: 20, marginBottom: 12, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: ARCHIVO, fontSize: 14, fontWeight: 500, color: ORANGE }}>Distance: {r.dist}</span>
                <span style={{ fontFamily: ARCHIVO, fontSize: 14, color: BODY_TEXT }}>Start: {r.time}</span>
                <span style={{ fontFamily: ARCHIVO, fontSize: 14, color: BODY_TEXT }}>Cut-off: {r.cutoff}</span>
              </div>
              <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, margin: 0 }}>{r.desc}</p>
            </Section>
          ))}
        </div>
      </section>
    </>
  )
}
