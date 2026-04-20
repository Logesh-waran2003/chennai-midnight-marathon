import { motion } from 'framer-motion'
import { ORANGE, GRECHEN } from './constants'

export default function PageHeader({ title }) {
  return (
    <div style={{ background: '#f8f8f8', padding: '60px 37px 40px' }}>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ fontFamily: GRECHEN, fontSize: 72, fontWeight: 600, color: ORANGE, margin: 0, textAlign: 'center' }}
      >
        {title}
      </motion.h2>
    </div>
  )
}
