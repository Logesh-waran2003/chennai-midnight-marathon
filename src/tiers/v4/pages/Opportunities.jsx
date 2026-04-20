import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { BODY_TEXT, WHITE } from '../components/constants'

export default function Opportunities() {
  return (
    <>
      <PageHeader title="Partnership Opportunities" />
      <Section style={{ background: WHITE, padding: '60px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: BODY_TEXT, lineHeight: 1.8 }}>
            Chennai Midnight Marathon partnerships offer unique branding, visibility, and community engagement opportunities.
          </p>
        </div>
      </Section>
    </>
  )
}
