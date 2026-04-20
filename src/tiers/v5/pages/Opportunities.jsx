import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { ORANGE, BODY_TEXT, WHITE, HEADING_DARK, POPPINS, ARCHIVO } from '../components/constants'

const SECTIONS = [
  { title: 'Title And Race Event Partnerships', body: 'Be the face of a race category. Title partners get exclusive branding across all race materials, venue signage, digital platforms, and media coverage. Your brand becomes synonymous with the event.' },
  { title: 'Associate Partners', body: 'Associate with the marathon as a key supporter. Get prominent branding at the venue, on race materials, and across digital channels. Perfect for brands looking for high-visibility community engagement.' },
  { title: 'Team Participation For The Relay Events', body: 'Enter your corporate team in the relay events. A great way to build team spirit, promote employee wellness, and showcase your brand at the event.' },
  { title: 'Pre And Post Race Events Partnership', body: 'Partner with the expo, pasta party, awards ceremony, or other pre/post race events. Engage directly with runners and their families in a relaxed, celebratory atmosphere.' },
  { title: 'Additional Revenue Streams', body: 'Explore unique partnership opportunities including hydration stations, medical support, timing technology, merchandise, and more. Custom packages available to suit your brand objectives.' },
]

export default function Opportunities() {
  return (
    <>
      <PageHeader title="Partnership Opportunities" />
      <section style={{ background: WHITE, padding: '40px 37px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Section>
            <h3 style={{ fontFamily: POPPINS, fontSize: 28, fontWeight: 600, color: HEADING_DARK, margin: '0 0 24px' }}>
              CHENNAI MIDNIGHT MARATHON (CMM) PARTNERSHIPS
            </h3>
          </Section>
          {SECTIONS.map((s, i) => (
            <Section key={s.title} style={{ marginBottom: 32, paddingBottom: 32, borderBottom: i < SECTIONS.length - 1 ? '1px solid #eee' : 'none' }}>
              <h2 style={{ fontFamily: POPPINS, fontSize: 22, fontWeight: 600, color: ORANGE, margin: '0 0 12px' }}>{s.title}</h2>
              <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, margin: 0 }}>{s.body}</p>
            </Section>
          ))}
        </div>
      </section>
    </>
  )
}
