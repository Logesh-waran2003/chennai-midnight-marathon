import Section from '../components/Section'
import { ACCENT } from '../components/constants'

export default function Refund() {
  return (
    <Section className="pt-24 pb-28">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display font-black text-5xl md:text-6xl tracking-tight mb-8">
          Refund <span style={{ color: ACCENT }}>Policy</span>
        </h1>
        <div className="space-y-6 text-white/50 text-sm leading-relaxed">
          <p>Last updated: January 1, 2026</p>
          <div className="border border-white/10 overflow-hidden">
            <div className="grid grid-cols-2 bg-white/5 p-4">
              <div className="font-display text-xs tracking-[0.15em] text-white/50">CANCELLATION DATE</div>
              <div className="font-display text-xs tracking-[0.15em] text-white/50">REFUND</div>
            </div>
            {[
              { date: 'Before January 31, 2026', refund: '75% of registration fee' },
              { date: 'February 1 – 28, 2026', refund: '50% of registration fee' },
              { date: 'March 1 – 10, 2026', refund: '25% of registration fee' },
              { date: 'After March 10, 2026', refund: 'No refund' },
            ].map(r => (
              <div key={r.date} className="grid grid-cols-2 p-4 border-t border-white/5">
                <div className="text-white/60">{r.date}</div>
                <div className="text-white">{r.refund}</div>
              </div>
            ))}
          </div>
          <h2 className="font-display font-semibold text-lg text-white pt-4">Bib Transfers</h2>
          <p>Instead of cancelling, you may transfer your bib to another person for a ₹200 fee. Transfers are allowed until March 1, 2026. Contact registrations@chennaimidnightmarathon.run to initiate a transfer.</p>
          <h2 className="font-display font-semibold text-lg text-white pt-4">Event Cancellation</h2>
          <p>If CMM cancels the event due to force majeure, all participants will receive a 50% refund or a guaranteed slot in the next edition (participant's choice).</p>
          <h2 className="font-display font-semibold text-lg text-white pt-4">How to Request a Refund</h2>
          <p>Email refunds@chennaimidnightmarathon.run with your registration ID and reason. Refunds are processed within 14 business days to the original payment method.</p>
        </div>
      </div>
    </Section>
  )
}
