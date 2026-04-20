import { motion } from 'framer-motion'

function Placeholder() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
        <p className="text-white/40 text-sm tracking-[0.2em] font-display">V4 — REFERENCE REPLICA</p>
        <p className="text-white/20 text-xs mt-2">Building...</p>
      </motion.div>
    </div>
  )
}

export default function V4Layout() {
  return <Placeholder />
}
