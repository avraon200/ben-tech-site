import { Phone, MessageCircle } from 'lucide-react'
import { PHONE, PHONE_HREF, WHATSAPP_HREF } from '@/lib/constants'

interface CTABannerProps {
  headline?: string
}

export default function CTABanner({ headline = 'מוכנים להתחיל? דברו איתנו עוד היום' }: CTABannerProps) {
  return (
    <section className="bg-primary py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">{headline}</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2 bg-accent hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            <Phone size={20} />
            התקשר עכשיו — {PHONE}
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            <MessageCircle size={20} />
            שלח הודעה בוואטסאפ
          </a>
        </div>
      </div>
    </section>
  )
}
