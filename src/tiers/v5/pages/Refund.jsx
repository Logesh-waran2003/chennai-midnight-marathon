import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { BODY_TEXT, WHITE, ARCHIVO } from '../components/constants'

export default function Refund() {
  return (
    <>
      <PageHeader title="Refund Policy" />
      <section style={{ background: WHITE, padding: '40px 37px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Section>
            <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, whiteSpace: 'pre-line' }}>
              Before January 31, 2026: 75% of registration fee refunded.\nFebruary 1-28, 2026: 50% of registration fee refunded.\nMarch 1-10, 2026: 25% of registration fee refunded.\nAfter March 10, 2026: No refund.\n\nBib transfers are allowed until March 1, 2026 for a transfer fee of Rs. 200. After that, no transfers are permitted for safety reasons.\n\nIf CMM cancels the event due to force majeure, all participants will receive a 50% refund or a guaranteed slot in the next edition.\n\nTo request a refund, email refunds@chennaimidnightmarathon.run with your registration ID.
            </p>
          </Section>
        </div>
      </section>
    </>
  )
}
