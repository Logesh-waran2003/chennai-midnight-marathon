import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { ORANGE, BODY_TEXT, WHITE, HEADING_DARK, POPPINS, ARCHIVO } from '../components/constants'

const PRIZES = [
  { pos: '1st', full: '₹5,00,000', half: '₹2,50,000', run31: '₹2,00,000', run10: '₹1,00,000' },
  { pos: '2nd', full: '₹3,00,000', half: '₹1,50,000', run31: '₹1,50,000', run10: '₹75,000' },
  { pos: '3rd', full: '₹2,00,000', half: '₹1,00,000', run31: '₹1,00,000', run10: '₹50,000' },
  { pos: '4th', full: '₹1,00,000', half: '₹50,000', run31: '₹50,000', run10: '₹25,000' },
  { pos: '5th', full: '₹50,000', half: '₹25,000', run31: '₹25,000', run10: '₹15,000' },
]

export default function Prizes() {
  return (
    <>
      <PageHeader title="Prize Money & Awards" />
      <section style={{ background: WHITE, padding: '40px 37px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Section>
            <h3 style={{ fontFamily: POPPINS, fontSize: 20, fontWeight: 600, color: HEADING_DARK, margin: '0 0 8px' }}>
              PRIZE MONEY & AWARDS – CMM 2026
            </h3>
            <p style={{ fontFamily: ARCHIVO, fontSize: 14, color: BODY_TEXT, margin: '0 0 24px' }}>Overall Open Winners</p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: ARCHIVO, fontSize: 14 }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #eee' }}>
                    <th style={{ padding: '10px 12px', textAlign: 'left', color: HEADING_DARK, fontFamily: POPPINS, fontSize: 13 }}>Position</th>
                    <th style={{ padding: '10px 12px', textAlign: 'left', color: HEADING_DARK, fontFamily: POPPINS, fontSize: 13 }}>Full Marathon</th>
                    <th style={{ padding: '10px 12px', textAlign: 'left', color: HEADING_DARK, fontFamily: POPPINS, fontSize: 13 }}>Half Marathon</th>
                    <th style={{ padding: '10px 12px', textAlign: 'left', color: HEADING_DARK, fontFamily: POPPINS, fontSize: 13 }}>31.6K Run</th>
                    <th style={{ padding: '10px 12px', textAlign: 'left', color: HEADING_DARK, fontFamily: POPPINS, fontSize: 13 }}>10K Run</th>
                  </tr>
                </thead>
                <tbody>
                  {PRIZES.map((row, i) => (
                    <tr key={row.pos} style={{ borderBottom: '1px solid #f0f0f0' }}>
                      <td style={{ padding: '10px 12px', fontWeight: 600, color: i === 0 ? ORANGE : BODY_TEXT }}>{row.pos}</td>
                      <td style={{ padding: '10px 12px', color: BODY_TEXT }}>{row.full}</td>
                      <td style={{ padding: '10px 12px', color: BODY_TEXT }}>{row.half}</td>
                      <td style={{ padding: '10px 12px', color: BODY_TEXT }}>{row.run31}</td>
                      <td style={{ padding: '10px 12px', color: BODY_TEXT }}>{row.run10}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        </div>
      </section>
    </>
  )
}
