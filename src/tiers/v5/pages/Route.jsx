import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { ORANGE, BODY_TEXT, WHITE, HEADING_DARK, POPPINS, ARCHIVO } from '../components/constants'

const ROUTES = [
  { name: 'BK5K Run', time: '06:30 PM', dist: '5 KM' },
  { name: '5K Fun Run', time: '06:40 PM', dist: '5 KM' },
  { name: '10K Run', time: '08:30 PM', dist: '10 KM (2 loops)' },
  { name: 'Full Marathon', time: '11:00 PM', dist: '42.195 KM (8 loops of 5.27 km)' },
  { name: '31.6K Run', time: '11:10 PM', dist: '31.65 KM (6 loops of 5.27 km)' },
  { name: 'Half Marathon', time: '11:25 PM', dist: '21.097 KM (4 loops of 5.27 km)' },
]

export default function Route() {
  return (
    <>
      <PageHeader title="Race Route Map" />
      <section style={{ background: WHITE, padding: '40px 37px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Section>
            <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, margin: '0 0 8px' }}>
              AIMS Certified · Flat Course · Sea-Level
            </p>
            <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, margin: '0 0 30px' }}>
              Island Grounds → Marina Beach → Mylapore → Adyar → Besant Nagar → Finish
            </p>
          </Section>
          {ROUTES.map((r, i) => (
            <Section key={r.name} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: i < ROUTES.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                <h3 style={{ fontFamily: POPPINS, fontSize: 18, fontWeight: 600, color: HEADING_DARK, margin: 0 }}>{r.name}</h3>
                <div style={{ display: 'flex', gap: 20 }}>
                  <span style={{ fontFamily: ARCHIVO, fontSize: 14, color: ORANGE, fontWeight: 500 }}>@ {r.time}</span>
                  <span style={{ fontFamily: ARCHIVO, fontSize: 14, color: BODY_TEXT }}>{r.dist}</span>
                </div>
              </div>
            </Section>
          ))}
        </div>
      </section>
    </>
  )
}
