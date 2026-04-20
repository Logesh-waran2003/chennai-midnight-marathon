import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { BODY_TEXT, WHITE } from '../components/constants'

export default function Rookies() {
  return (
    <>
      <PageHeader title="Running for Rookies" />
      <Section style={{ background: WHITE, padding: '60px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: BODY_TEXT, lineHeight: 1.8 }}>
            Training tips and guidance for first-time marathon runners. Whether you are starting your running journey or preparing for your first midnight race, we have got you covered.
          </p>
        </div>
      </Section>
    </>
  )
}
