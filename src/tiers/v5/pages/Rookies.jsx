import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { ORANGE, BODY_TEXT, WHITE, HEADING_DARK, POPPINS, ARCHIVO } from '../components/constants'

const TIPS = [
  { phase: 'WHEN YOU BEGIN', items: ['Start with walking, then alternate walking and jogging', 'Invest in a good pair of running shoes', 'Set realistic goals — start with 5K', 'Find a running buddy or join a local running group'] },
  { phase: 'YOUR TRAINING PLAN', items: ['Follow a structured 12-week training plan', 'Gradually increase distance — no more than 10% per week', 'Include rest days in your schedule', 'Cross-train with swimming, cycling, or yoga'] },
  { phase: 'RACE DAY TIPS', items: ['Arrive early and familiarize yourself with the venue', 'Don\'t try anything new on race day — stick to tested gear and nutrition', 'Start slow and pace yourself', 'Enjoy the experience — high-five volunteers, soak in the atmosphere'] },
]

export default function Rookies() {
  return (
    <>
      <PageHeader title="Running for Rookies" />
      <section style={{ background: WHITE, padding: '40px 37px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {TIPS.map((phase, i) => (
            <Section key={phase.phase} style={{ marginBottom: 36, paddingBottom: 36, borderBottom: i < TIPS.length - 1 ? '1px solid #eee' : 'none' }}>
              <h3 style={{ fontFamily: POPPINS, fontSize: 20, fontWeight: 600, color: ORANGE, margin: '0 0 16px' }}>{phase.phase}</h3>
              <ul style={{ margin: 0, padding: '0 0 0 20px' }}>
                {phase.items.map(item => (
                  <li key={item} style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 2, listStyleType: 'disc' }}>{item}</li>
                ))}
              </ul>
            </Section>
          ))}
        </div>
      </section>
    </>
  )
}
