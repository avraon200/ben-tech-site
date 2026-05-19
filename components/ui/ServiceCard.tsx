'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShieldAlert, Camera, DoorOpen, Home, Network, LucideProps } from 'lucide-react'
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
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="bg-surface rounded-2xl shadow-sm hover:shadow-md p-6 flex flex-col gap-4"
    >
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
        <Icon size={28} className="text-primary" />
      </div>
      <h3 className="text-xl font-bold text-text-primary">{service.title}</h3>
      <p className="text-text-muted text-sm leading-relaxed flex-1">{service.description}</p>
      <Link
        href={service.href}
        className="text-accent font-semibold text-sm hover:underline mt-auto"
      >
        קרא עוד ←
      </Link>
    </motion.div>
  )
}
