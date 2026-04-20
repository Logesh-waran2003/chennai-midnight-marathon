import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { BODY_TEXT, WHITE } from '../components/constants'

export default function Prizes() {
  return (
    <>
      <PageHeader title="Prize Money & Awards" />
      <Section style={{ background: WHITE, padding: '60px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: BODY_TEXT, lineHeight: 1.8 }}>
            Overall Open Winners across all race categories. Prize money details for Full Marathon, Half Marathon, 31.6K Run, 10K Run, and 5K Run.
          </p>
        </div>
      </Section>
    </>
  )
}
