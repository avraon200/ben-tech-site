import { Phone, MessageCircle } from 'lucide-react'
import { PHONE, PHONE_HREF, WHATSAPP_HREF } from '@/lib/constants'

interface CTABannerProps {
  headline?: string
}

export default function CTABanner({ headline = 'מוכנים להתחיל? דברו איתנו עוד היום' }: CTABannerProps) {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-primary-dark via-primary to-blue-700" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-snug">{headline}</h2>
        <p className="text-white/60 mb-10 text-lg">ייעוץ ראשוני ללא עלות וללא התחייבות</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-3 bg-accent hover:bg-red-600 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/30 text-lg"
          >
            <Phone size={20} />
            התקשר עכשיו — {PHONE}
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 text-lg"
          >
            <MessageCircle size={20} />
            שלח הודעה בוואטסאפ
          </a>
        </div>
      </div>
    </section>
  )
}
