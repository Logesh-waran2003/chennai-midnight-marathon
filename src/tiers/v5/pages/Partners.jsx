import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { ORANGE, BODY_TEXT, WHITE, POPPINS, ARCHIVO, IMG } from '../components/constants'

const TIERS = [
  { tier: 'Title Sponsor', sponsors: [{ name: 'TCS', img: `${IMG}/title-sponsor.png` }] },
  { tier: 'Associate Partner', sponsors: [{ name: 'Mana4', img: `${IMG}/associate-partner.png` }] },
  { tier: 'Official Healthcare Partner', sponsors: [{ name: 'Apollo Hospitals', img: `${IMG}/healthcare-partner.png` }] },
  { tier: 'Half Marathon Partner', sponsors: [{ name: 'Agriplast', img: `${IMG}/half-marathon-partner.png` }] },
  { tier: '31.6K Run Partner', sponsors: [{ name: 'Wissen', img: `${IMG}/31k-partner.png` }] },
  { tier: '10K Run Partner', sponsors: [{ name: 'Akamai', img: `${IMG}/10k-partner.png` }] },
  { tier: 'BK5K Race Partner', sponsors: [{ name: 'Fastenal', img: `${IMG}/5k-partner.png` }] },
  { tier: 'Official Hospitality Partner', sponsors: [{ name: 'Hyatt', img: `${IMG}/hospitality-partner.png` }] },
]

export default function Partners() {
  return (
    <>
      <PageHeader title="Partners" />
      <section style={{ background: WHITE, padding: '40px 37px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {TIERS.map((t, i) => (
            <Section key={t.tier} style={{ marginBottom: 36, paddingBottom: 36, borderBottom: i < TIERS.length - 1 ? '1px solid #eee' : 'none', textAlign: 'center' }}>
              <p style={{ fontFamily: POPPINS, fontSize: 12, fontWeight: 500, color: ORANGE, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px' }}>{t.tier}</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
                {t.sponsors.map(s => (
                  <img key={s.name} src={s.img} alt={s.name} style={{ maxHeight: 120, maxWidth: 280, objectFit: 'contain' }} />
                ))}
              </div>
            </Section>
          ))}
        </div>
      </section>
    </>
  )
}
