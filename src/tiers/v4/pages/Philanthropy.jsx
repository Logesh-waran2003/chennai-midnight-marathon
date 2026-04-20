import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { BODY_TEXT, WHITE } from '../components/constants'

export default function Philanthropy() {
  return (
    <>
      <PageHeader title="Philanthropy" />
      <Section style={{ background: WHITE, padding: '60px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: BODY_TEXT, lineHeight: 1.8 }}>
            100% of the proceeds support social causes, making every step you take count for a better future for the underprivileged.
          </p>
        </div>
      </Section>
    </>
  )
}
