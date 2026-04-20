import { motion } from 'framer-motion'
import Section from '../components/Section'
import { ACCENT } from '../components/constants'

export default function Contact() {
  return (
    <>
      <Section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tight mb-4">
            Contact <span style={{ color: ACCENT }}>Us</span>
          </h1>
          <p className="text-white/40 max-w-lg mx-auto">Got questions? We're here to help.</p>
        </div>
      </Section>

      <Section className="pb-28">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-semibold text-sm tracking-[0.15em] text-white/50 mb-3">EMAIL</h3>
              <a href="mailto:info@chennaimidnightmarathon.run" className="text-white hover:underline">info@chennaimidnightmarathon.run</a>
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm tracking-[0.15em] text-white/50 mb-3">PHONE</h3>
              <p className="text-white">+91 44 2345 6789</p>
              <p className="text-white/40 text-sm mt-1">Mon–Sat, 10 AM – 6 PM IST</p>
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm tracking-[0.15em] text-white/50 mb-3">OFFICE</h3>
              <p className="text-white/60 leading-relaxed">
                RBITC Office<br />
                3rd Floor, Runners Hub<br />
                Anna Salai, Chennai 600002<br />
                Tamil Nadu, India
              </p>
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm tracking-[0.15em] text-white/50 mb-3">SOCIAL</h3>
              <div className="flex gap-4">
                {['Instagram', 'Twitter', 'Facebook', 'YouTube'].map(s => (
                  <a key={s} href="#" className="text-sm text-white/40 hover:text-white transition-colors">{s}</a>
                ))}
              </div>
            </div>
          </div>

          <form className="space-y-5" onSubmit={e => e.preventDefault()}>
            <div>
              <label className="block text-xs font-display tracking-[0.1em] text-white/40 mb-2">NAME</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-xs font-display tracking-[0.1em] text-white/40 mb-2">EMAIL</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-xs font-display tracking-[0.1em] text-white/40 mb-2">SUBJECT</label>
              <select className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white/60 text-sm focus:outline-none focus:border-white/30 transition-colors">
                <option value="">Select a topic</option>
                <option value="registration">Registration</option>
                <option value="sponsorship">Sponsorship</option>
                <option value="volunteering">Volunteering</option>
                <option value="media">Media Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-display tracking-[0.1em] text-white/40 mb-2">MESSAGE</label>
              <textarea rows="5" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors resize-none" placeholder="Your message..." />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="font-display text-sm tracking-[0.15em] px-8 py-3 w-full"
              style={{ background: ACCENT, color: '#000' }}
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </div>
      </Section>
    </>
  )
}
