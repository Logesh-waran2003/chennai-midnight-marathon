import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { BODY_TEXT, WHITE, ARCHIVO } from '../components/constants'

export default function Philanthropy() {
  return (
    <>
      <PageHeader title="Philanthropy" />
      <section style={{ background: WHITE, padding: '40px 37px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Section>
            <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, whiteSpace: 'pre-line' }}>
              100% of the proceeds from the Chennai Midnight Marathon support social causes, making every step you take count for a better future for the underprivileged.\n\nBesides fostering the spirit of Running and good health, the CMM is the main fundraising event of RBITC. Funds raised from the Marathon are used to support various social causes through the year.\n\nOur key focus areas include: Education for underprivileged children, Healthcare access for rural communities, Environmental sustainability initiatives, Support for differently-abled athletes, and Community development programs across Tamil Nadu.
            </p>
          </Section>
        </div>
      </section>
    </>
  )
}
