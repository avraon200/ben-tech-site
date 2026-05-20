'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShieldAlert, Camera, DoorOpen, Home, Network, ArrowLeft, LucideProps } from 'lucide-react'
import type { Service } from '@/data/services'

type IconComponent = React.ComponentType<LucideProps>

const iconMap: Record<string, IconComponent> = {
  ShieldAlert,
  Camera,
  DoorOpen,
  Home,
  Network,
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? ShieldAlert

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="cyber-card rounded-2xl p-7 flex flex-col gap-4 h-full group cursor-pointer"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-500/15 to-blue-600/15 border border-cyan-500/20 group-hover:border-cyan-400/50 group-hover:bg-gradient-to-br group-hover:from-cyan-500/25 group-hover:to-blue-600/25 transition-all duration-300 icon-glow">
        <Icon size={26} className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white leading-snug">{service.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-1 group-hover:text-slate-300 transition-colors">
        {service.description}
      </p>

      {/* Separator */}
      <div className="h-px bg-gradient-to-l from-cyan-500/20 via-blue-500/10 to-transparent" />

      {/* Link */}
      <Link
        href={service.href}
        className="flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors mt-auto"
      >
        <span>קרא עוד</span>
        <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-200" />
      </Link>
    </motion.div>
  )
}
