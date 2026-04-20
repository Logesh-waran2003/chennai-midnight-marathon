import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { ORANGE, BODY_TEXT, WHITE, HEADING_DARK, POPPINS, ARCHIVO, GRECHEN } from '../components/constants'

export default function About() {
  return (
    <>
      <PageHeader title="Chennai Midnight Marathon" />
      <section style={{ background: WHITE, padding: '40px 37px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Section>
            <h2 style={{ fontFamily: GRECHEN, fontSize: 36, fontWeight: 600, color: ORANGE, margin: '0 0 20px' }}>The Origin</h2>
            <h4 style={{ fontFamily: POPPINS, fontSize: 22, fontWeight: 600, color: HEADING_DARK, margin: '0 0 16px' }}>Motivation</h4>
            <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, margin: '0 0 16px' }}>
              The humble efforts of a group of like-minded people from RBITC culminated in the first edition of the Chennai Midnight Marathon in 2023. First of its kind in South India, the event attracted runners from across the country and beyond.
            </p>
            <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, margin: '0 0 16px' }}>
              Let's break free. Let's Run Free again. The Chennai Midnight Marathon represents the vision, vigor and vibrance of the beloved and inspiring city. At its heart, the initiative aimed to create a platform to raise funds for health, education, social welfare and rural development projects. A unique concept that has captivated people.
            </p>
            <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, margin: '0 0 16px' }}>
              4 editions of the Chennai Midnight Marathon have been held till date, with unprecedented success and support from local, national and international athletes. The race is more than just an athletic event; it is a glimpse into the cultural diversity of Chennai and the spirit of its people.
            </p>
            <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, margin: '0 0 16px' }}>
              The CMM reflects a unique spectrum of values which is shared by participants, their families and supporters across India and the world. Associations established with the marathon display not just a heart for social responsibility but also provide a platform for brand visibility and employee engagement.
            </p>
            <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, margin: 0 }}>
              All of Chennai comes out on race day to celebrate the spirit of the city. Companies participate in large numbers using the marathon as a platform to show support for the city. NGOs participate to raise funds for and also to create awareness on their cause. The Sports & Film fraternity & celebrities participate to show their support.
            </p>
          </Section>
        </div>
      </section>
    </>
  )
}
