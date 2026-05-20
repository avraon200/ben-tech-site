'use client'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'

type Variant = 'fadeUp' | 'fadeIn' | 'slideRight' | 'slideLeft' | 'scaleUp' | 'zoomIn'

const variants: Record<Variant, Variants> = {
  fadeUp: {
    hidden:  { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  },
  fadeIn: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.75, ease: 'easeOut' } },
  },
  slideRight: {
    hidden:  { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  },
  slideLeft: {
    hidden:  { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  },
  scaleUp: {
    hidden:  { opacity: 0, scale: 0.82 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.34, 1.56, 0.64, 1] } },
  },
  zoomIn: {
    hidden:  { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
  },
}

interface AnimateOnScrollProps {
  children: React.ReactNode
  delay?: number
  className?: string
  variant?: Variant
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  className,
  variant = 'fadeUp',
}: AnimateOnScrollProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const chosen = variants[variant]

  return (
    <motion.div
      ref={ref}
      variants={chosen}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
