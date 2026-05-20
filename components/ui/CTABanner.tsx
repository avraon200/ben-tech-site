import { Phone, MessageCircle, Zap } from 'lucide-react'
import { PHONE, PHONE_HREF, WHATSAPP_HREF } from '@/lib/constants'

interface CTABannerProps {
  headline?: string
}

export default function CTABanner({ headline = 'מוכנים להתחיל? דברו איתנו עוד היום' }: CTABannerProps) {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary-dark to-slate-900" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/15 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      {/* Neon divider top */}
      <div className="absolute top-0 inset-x-0 neon-divider" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 cyber-badge text-sm font-medium px-4 py-2 rounded-full mb-6">
          <Zap size={13} className="text-cyan-400" />
          ייעוץ ראשוני ללא עלות
        </div>

        <h2 className="text-3xl md:text-5xl font-bold gradient-text-white mb-4 leading-tight">
          {headline}
        </h2>
        <p className="text-white/50 mb-10 text-lg">זמינים לשירותך 24/7 — ללא התחייבות</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={PHONE_HREF}
            className="group flex items-center justify-center gap-3 bg-accent hover:bg-red-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30 text-base"
          >
            <Phone size={19} />
            <span>התקשר עכשיו — {PHONE}</span>
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 text-base"
          >
            <MessageCircle size={19} />
            <span>שלח הודעה בוואטסאפ</span>
          </a>
        </div>
      </div>

      {/* Neon divider bottom */}
      <div className="absolute bottom-0 inset-x-0 neon-divider" />
    </section>
  )
}
