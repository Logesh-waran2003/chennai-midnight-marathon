import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { BODY_TEXT, WHITE, HEADING_DARK, CONTACT_BLUE, POPPINS, ARCHIVO } from '../components/constants'

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact Us" />
      <section style={{ background: WHITE, padding: '40px 37px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <Section>
            <h1 style={{ fontFamily: POPPINS, fontSize: 40, fontWeight: 600, color: HEADING_DARK, margin: '0 0 20px' }}>Event Helpline</h1>
            <h2 style={{ fontFamily: POPPINS, fontSize: 32, fontWeight: 500, color: CONTACT_BLUE, margin: '0 0 20px' }}>Mobile: +91 44 2345 6789</h2>
            <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, margin: '0 0 12px' }}>Email: info@chennaimidnightmarathon.run</p>
            <p style={{ fontFamily: ARCHIVO, fontSize: 14, color: BODY_TEXT, margin: '0 0 30px' }}>
              For sponsorship and partnership enquiries, please write to partnerships@chennaimidnightmarathon.run
            </p>
            <div style={{ borderTop: '1px solid #eee', paddingTop: 30 }}>
              <h3 style={{ fontFamily: POPPINS, fontSize: 20, fontWeight: 600, color: HEADING_DARK, margin: '0 0 12px' }}>Office Address</h3>
              <p style={{ fontFamily: ARCHIVO, fontSize: 15, color: BODY_TEXT, lineHeight: 1.8, margin: 0 }}>
                RBITC Office<br />
                Island Grounds, Chennai 600002<br />
                Tamil Nadu, India
              </p>
            </div>
          </Section>
        </div>
      </section>
    </>
  )
}
