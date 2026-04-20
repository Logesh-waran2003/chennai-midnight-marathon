import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { BODY_TEXT, WHITE } from '../components/constants'

export default function RBITC() {
  return (
    <>
      <PageHeader title="Rotary Bangalore IT Corridor" />
      <Section style={{ background: WHITE, padding: '60px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: BODY_TEXT, lineHeight: 1.8 }}>
            RBITC is the organizing body behind the Chennai Midnight Marathon, dedicated to community service and social impact.
          </p>
        </div>
      </Section>
    </>
  )
}
