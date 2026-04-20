import { motion } from 'framer-motion'
import { ORANGE } from './constants'

export default function PageHeader({ title }) {
  return (
    <div style={{ background: '#f8f8f8', padding: '120px 24px 60px', textAlign: 'center' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: '"Grechen Fuemen", cursive', fontSize: 72, fontWeight: 600, color: ORANGE, margin: 0 }}
      >
        {title}
      </motion.h2>
    </div>
  )
}
