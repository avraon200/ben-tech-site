'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CounterStatProps {
  value: string   // e.g. "500+" or "24/7" or "10+"
  label: string
  bordered?: boolean
}

function parseNumber(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return { num: 0, suffix: value }
  return { num: parseInt(match[1], 10), suffix: match[2] }
}

export default function CounterStat({ value, label, bordered = false }: CounterStatProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const { num, suffix } = parseNumber(value)
  const [count, setCount] = useState(0)
  const hasNumber = num > 0

  useEffect(() => {
    if (!isInView || !hasNumber) return
    const duration = 1600
    const frames = 60
    let current = 0
    let frame = 0

    const timer = setInterval(() => {
      frame++
      // ease-out curve
      const progress = 1 - Math.pow(1 - frame / frames, 3)
      current = Math.round(num * progress)
      setCount(current)
      if (frame >= frames) {
        setCount(num)
        clearInterval(timer)
      }
    }, Math.round(duration / frames))

    return () => clearInterval(timer)
  }, [isInView, num, hasNumber])

  return (
    <div
      ref={ref}
      className={`text-center px-6 py-4 ${bordered ? 'border-r border-l border-cyan/15' : ''}`}
    >
      <p className="text-3xl md:text-4xl font-black text-white stat-glow tracking-tight">
        {hasNumber ? `${count}${suffix}` : value}
      </p>
      <p className="text-white/45 text-xs mt-1.5 font-medium tracking-widest uppercase">{label}</p>
    </div>
  )
}
