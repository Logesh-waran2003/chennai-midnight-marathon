import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'

export default function Counter({ value, suffix = '', prefix = '', duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = value
    const step = end / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, value, duration])

  return (
    <span ref={ref} className="font-display font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}
