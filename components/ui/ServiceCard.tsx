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
    <div className="shimmer-border h-full">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="bg-white rounded-2xl p-7 flex flex-col gap-4 h-full shadow-sm hover:shadow-xl transition-shadow duration-300"
      >
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary to-blue-500 shadow-md">
          <Icon size={26} className="text-white" />
        </div>
        <h3 className="text-xl font-bold text-text-primary">{service.title}</h3>
        <p className="text-text-muted text-sm leading-relaxed flex-1">{service.description}</p>
        <Link
          href={service.href}
          className="flex items-center gap-2 text-primary font-semibold text-sm group mt-auto"
        >
          <span className="group-hover:text-accent transition-colors">קרא עוד</span>
          <ArrowLeft size={16} className="group-hover:text-accent group-hover:-translate-x-1 transition-all" />
        </Link>
      </motion.div>
    </div>
  )
}
