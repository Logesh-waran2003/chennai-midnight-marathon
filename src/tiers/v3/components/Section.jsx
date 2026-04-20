import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Section({ children, className = '', delay = 0, id }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative z-10 ${className}`}
    >
      {children}
    </motion.section>
  )
}
