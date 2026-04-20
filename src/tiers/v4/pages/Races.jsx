import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { ORANGE, BODY_TEXT, WHITE, HEADING_DARK } from '../components/constants'
import { RACES } from '../components/constants'

export default function Races() {
  return (
    <>
      <PageHeader title="Race Day" />
      <Section style={{ background: WHITE, padding: '60px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {RACES.map((r, i) => (
            <div key={r.name} style={{ marginBottom: 48, paddingBottom: 48, borderBottom: i < RACES.length - 1 ? '1px solid #eee' : 'none' }}>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 24, fontWeight: 600, color: HEADING_DARK, marginBottom: 8 }}>{r.name}</h3>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 15, color: ORANGE, fontWeight: 500, marginBottom: 8 }}>Distance: {r.dist} &nbsp;|&nbsp; Start: {r.time}</p>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: BODY_TEXT, lineHeight: 1.8 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
