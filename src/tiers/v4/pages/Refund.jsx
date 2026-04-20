import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { BODY_TEXT, WHITE } from '../components/constants'

export default function Refund() {
  return (
    <>
      <PageHeader title="Refund Policy" />
      <Section style={{ background: WHITE, padding: '60px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: BODY_TEXT, lineHeight: 1.8 }}>
            Our refund and cancellation policy for race registrations.
          </p>
        </div>
      </Section>
    </>
  )
}
