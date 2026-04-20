import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { BODY_TEXT, WHITE, ARCHIVO } from '../components/constants'

export default function Privacy() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <section style={{ background: WHITE, padding: '40px 37px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Section>
            <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, whiteSpace: 'pre-line' }}>
              Your privacy matters to us. Chennai Midnight Marathon (CMM) is committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data when you register for or participate in our events.\n\nWhen you register for CMM, we collect: name, email, phone number, date of birth, gender, emergency contact details, and payment information. During the event, we collect timing data and photographs.\n\nYour data is used for: event registration and management, timing and results, safety and medical emergencies, event communications, and improving future events. We do not sell your personal data to third parties.\n\nYou may request access to, correction of, or deletion of your personal data by emailing privacy@chennaimidnightmarathon.run.
            </p>
          </Section>
        </div>
      </section>
    </>
  )
}
