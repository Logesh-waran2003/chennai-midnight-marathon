import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { BODY_TEXT, WHITE, HEADING_DARK } from '../components/constants'

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact Us" />
      <Section style={{ background: WHITE, padding: '60px 24px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 40, color: HEADING_DARK, marginBottom: 16 }}>Event Helpline</h1>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 32, color: '#324a6d', marginBottom: 16 }}>Mobile: +91 44 2345 6789</h2>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: BODY_TEXT }}>Email: info@chennaimidnightmarathon.run</p>
        </div>
      </Section>
    </>
  )
}
