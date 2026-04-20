import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { BODY_TEXT, WHITE, ARCHIVO } from '../components/constants'

export default function Terms() {
  return (
    <>
      <PageHeader title="Registration Terms" />
      <section style={{ background: WHITE, padding: '40px 37px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Section>
            <p style={{ fontFamily: ARCHIVO, fontSize: 16, color: BODY_TEXT, lineHeight: 1.8, whiteSpace: 'pre-line' }}>
              All participants must agree to these terms before registering.\n\nEligibility: Full Marathon: 18+ years. Half Marathon: 16+ years. 10K: 14+ years. 5K: No age restriction (under-14 must be accompanied by a registered adult).\n\nMedical Fitness: All Full and Half Marathon participants must submit a medical fitness certificate from a registered physician at bib collection.\n\nBib Policy: Race bibs are non-transferable after March 1, 2026. Running with someone else's bib is grounds for disqualification.\n\nLiability: Participants run at their own risk. CMM, RBITC, sponsors, and volunteers are not liable for any injury, illness, or loss of property during the event.
            </p>
          </Section>
        </div>
      </section>
    </>
  )
}
