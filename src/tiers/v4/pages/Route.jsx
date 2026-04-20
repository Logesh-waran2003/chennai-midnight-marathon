import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { BODY_TEXT, WHITE } from '../components/constants'

export default function Route() {
  return (
    <>
      <PageHeader title="Race Route Map" />
      <Section style={{ background: WHITE, padding: '60px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: BODY_TEXT, lineHeight: 1.8 }}>
            AIMS certified course through Chennai — Marina Beach, Mylapore, Adyar, Besant Nagar.
          </p>
        </div>
      </Section>
    </>
  )
}
