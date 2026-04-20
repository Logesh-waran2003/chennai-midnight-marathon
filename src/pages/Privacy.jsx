import Section from '../components/Section'
import { ACCENT } from '../components/constants'

export default function Privacy() {
  return (
    <Section className="pt-24 pb-28">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display font-black text-5xl md:text-6xl tracking-tight mb-8">
          Privacy <span style={{ color: ACCENT }}>Policy</span>
        </h1>
        <div className="space-y-6 text-white/50 text-sm leading-relaxed">
          <p>Last updated: January 1, 2026</p>
          <p>Chennai Midnight Marathon ("CMM", "we", "us") is committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.</p>
          <h2 className="font-display font-semibold text-lg text-white pt-4">Information We Collect</h2>
          <p>When you register for CMM, we collect: name, email, phone number, date of birth, gender, emergency contact details, and payment information. During the event, we collect timing data and photographs.</p>
          <h2 className="font-display font-semibold text-lg text-white pt-4">How We Use Your Data</h2>
          <p>Your data is used for: event registration and management, timing and results, safety and medical emergencies, event communications, and improving future events. We do not sell your personal data to third parties.</p>
          <h2 className="font-display font-semibold text-lg text-white pt-4">Data Sharing</h2>
          <p>We share data with: timing partners (ChronoTrack), medical teams (for emergencies only), payment processors, and results platforms. All partners are bound by data protection agreements.</p>
          <h2 className="font-display font-semibold text-lg text-white pt-4">Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data by emailing privacy@chennaimidnightmarathon.run. We will respond within 30 days.</p>
          <h2 className="font-display font-semibold text-lg text-white pt-4">Contact</h2>
          <p>For privacy-related queries: privacy@chennaimidnightmarathon.run</p>
        </div>
      </div>
    </Section>
  )
}
