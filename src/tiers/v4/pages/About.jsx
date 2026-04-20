import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { ORANGE, BODY_TEXT, WHITE, HEADING_DARK } from '../components/constants'

export default function About() {
  return (
    <>
      <PageHeader title="Chennai Midnight Marathon" />
      <Section style={{ background: WHITE, padding: '60px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: '"Grechen Fuemen", cursive', fontSize: 36, color: ORANGE, marginBottom: 24 }}>The Origin</h2>
          <h4 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 22, color: HEADING_DARK, marginBottom: 16 }}>Motivation</h4>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, marginBottom: 16 }}>
            The humble efforts of a group of like-minded people from RBITC culminated in the first edition of the Chennai Midnight Marathon in 2023. First of its kind in South India, the event attracted runners from across the country.
          </p>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, marginBottom: 16 }}>
            The Chennai Midnight Marathon represents the vision, vigor and vibrance of the beloved and inspiring city. At its heart, the initiative aimed to create a platform to raise funds for health, education, social welfare and rural development projects.
          </p>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, marginBottom: 16 }}>
            4 editions of the Chennai Midnight Marathon have been held till date, with unprecedented success and support from local, national and international athletes. The race is more than just an athletic event; it is a glimpse into the cultural diversity of Chennai.
          </p>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, color: BODY_TEXT, lineHeight: 1.8 }}>
            All of Chennai comes out on race day to celebrate the spirit of the city. Companies participate in large numbers using the marathon as a platform to show support for the city, for employee engagement & brand visibility.
          </p>
        </div>
      </Section>
    </>
  )
}
