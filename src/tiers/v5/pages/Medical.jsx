import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { BODY_TEXT, WHITE, HEADING_DARK, POPPINS, ARCHIVO } from '../components/constants'

const QUESTIONS = [
  'Has your doctor ever said that you have a heart condition and that you should only do physical activity recommended by a doctor?',
  'Do you feel pain in your chest when you do physical activity?',
  'In the past month, have you had chest pain when you were not doing physical activity?',
  'Do you lose your balance because of dizziness or do you ever lose consciousness?',
  'Do you have a bone or joint problem that could be made worse by a change in your physical activity?',
  'Is your doctor currently prescribing drugs for your blood pressure or heart condition?',
  'Do you know of any other reason why you should not do physical activity?',
]

export default function Medical() {
  return (
    <>
      <PageHeader title="Medical Advisory" />
      <section style={{ background: WHITE, padding: '40px 37px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Section>
            <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, margin: '0 0 24px' }}>
              Do review these medical scenarios before applying for the event:
            </p>
            {QUESTIONS.map((q, i) => (
              <div key={i} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid #f0f0f0' }}>
                <p style={{ fontFamily: ARCHIVO, fontSize: 15, color: BODY_TEXT, lineHeight: 1.7, margin: 0 }}>
                  <span style={{ fontFamily: POPPINS, fontWeight: 600, color: HEADING_DARK, marginRight: 8 }}>{i + 1}.</span>
                  {q} – Yes / No
                </p>
              </div>
            ))}
            <div style={{ marginTop: 24, padding: 20, background: '#f8f8f8', borderLeft: '3px solid #f56221' }}>
              <p style={{ fontFamily: ARCHIVO, fontSize: 15, color: BODY_TEXT, lineHeight: 1.8, margin: 0 }}>
                <strong>Important:</strong> If you answered YES to any of the above questions, please consult your physician before registering for the event. A medical fitness certificate from a registered physician is mandatory for Full Marathon and Half Marathon participants.
              </p>
            </div>
          </Section>
        </div>
      </section>
    </>
  )
}
