import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { BODY_TEXT, WHITE, HEADING_DARK, POPPINS, ARCHIVO } from '../components/constants'

const PROJECTS = [
  { title: 'Adoption Of A Government School', desc: 'RBITC has adopted a government school in Chennai, providing infrastructure improvements, educational resources, and extracurricular programs to help students excel.' },
  { title: 'Integrated Village Development', desc: 'A comprehensive rural development program that addresses education, healthcare, sanitation, and livelihood opportunities in adopted villages around Chennai.' },
  { title: 'Lighting For Literacy (LFL)', desc: 'Providing solar-powered lighting solutions to underprivileged communities, enabling children to study after dark and improving overall quality of life.' },
  { title: 'Potable Water Project For A Village', desc: 'Installing water purification systems in rural villages to provide clean, safe drinking water to communities that lack access to basic water infrastructure.' },
]

export default function RBITC() {
  return (
    <>
      <PageHeader title="RBITC" />
      <section style={{ background: WHITE, padding: '40px 37px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Section>
            <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, margin: '0 0 30px' }}>
              RBITC (Run Beyond Imagination Trust of Chennai) is the organizing body behind the Chennai Midnight Marathon. Dedicated to community service and social impact, RBITC channels the proceeds from the marathon into various social welfare projects across Tamil Nadu.
            </p>
          </Section>
          {PROJECTS.map((p, i) => (
            <Section key={p.title} style={{ marginBottom: 28, paddingBottom: 28, borderBottom: i < PROJECTS.length - 1 ? '1px solid #eee' : 'none' }}>
              <h3 style={{ fontFamily: POPPINS, fontSize: 22, fontWeight: 600, color: HEADING_DARK, margin: '0 0 10px' }}>{p.title}</h3>
              <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, margin: 0 }}>{p.desc}</p>
            </Section>
          ))}
        </div>
      </section>
    </>
  )
}
