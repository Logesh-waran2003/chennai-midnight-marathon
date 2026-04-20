import Section from '../components/Section'
import { ACCENT } from '../components/constants'

export default function Terms() {
  return (
    <Section className="pt-24 pb-28">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display font-black text-5xl md:text-6xl tracking-tight mb-8">
          Terms & <span style={{ color: ACCENT }}>Conditions</span>
        </h1>
        <div className="space-y-6 text-white/50 text-sm leading-relaxed">
          <p>Last updated: January 1, 2026</p>
          <h2 className="font-display font-semibold text-lg text-white pt-4">Eligibility</h2>
          <p>Full Marathon: 18+ years. Half Marathon: 16+ years (parental consent for minors). 10K: 14+ years. 5K: No age restriction (under-14 must be accompanied by a registered adult).</p>
          <h2 className="font-display font-semibold text-lg text-white pt-4">Medical Fitness</h2>
          <p>All Full and Half Marathon participants must submit a medical fitness certificate from a registered physician at bib collection. CMM reserves the right to deny participation to anyone deemed medically unfit.</p>
          <h2 className="font-display font-semibold text-lg text-white pt-4">Bib Policy</h2>
          <p>Race bibs are non-transferable after March 1, 2026. Running with someone else's bib is grounds for disqualification. Bibs must be worn on the front of the torso and visible at all times.</p>
          <h2 className="font-display font-semibold text-lg text-white pt-4">Event Changes</h2>
          <p>CMM reserves the right to modify the route, timing, or cancel the event due to force majeure, severe weather, or safety concerns. In case of cancellation, a partial refund will be issued per the refund policy.</p>
          <h2 className="font-display font-semibold text-lg text-white pt-4">Liability</h2>
          <p>Participants run at their own risk. CMM, RBITC, sponsors, and volunteers are not liable for any injury, illness, or loss of property during the event. By registering, you acknowledge and accept this risk.</p>
          <h2 className="font-display font-semibold text-lg text-white pt-4">Photography</h2>
          <p>By participating, you consent to being photographed and filmed. CMM may use these images for promotional purposes without additional compensation.</p>
        </div>
      </div>
    </Section>
  )
}
