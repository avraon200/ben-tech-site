import Image from 'next/image'
import Link from 'next/link'
import { Phone, Shield, Clock, Award } from 'lucide-react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard from '@/components/ui/ServiceCard'
import ReviewCard from '@/components/ui/ReviewCard'
import CTABanner from '@/components/ui/CTABanner'
import { services } from '@/data/services'
import { reviews } from '@/data/reviews'
import { PHONE_HREF, PHONE } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt="אבטחה מקצועית"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/75" />
        <div className="relative z-10 px-4 max-w-3xl mx-auto">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              פתרונות אבטחה מקצועיים<br />לבית ולעסק
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="text-xl text-white/80 mb-10">
              מערכות אזעקה, מצלמות, בית חכם ובקרת כניסה — התקנה מקצועית עם אחריות מלאה
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="bg-accent hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                קבל הצעת מחיר
              </Link>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors border border-white/30"
              >
                <Phone size={20} /> {PHONE}
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="השירותים שלנו" subtitle="פתרון מקצועי לכל צורך אבטחתי" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.id} delay={i * 0.1}>
                <ServiceCard service={service} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="למה לבחור בנו?" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Award, title: 'ניסיון ומקצועיות', desc: 'שנים של ניסיון בהתקנת מערכות אבטחה לבתים ועסקים ברחבי הארץ.' },
              { icon: Shield, title: 'אחריות מלאה', desc: 'אחריות יצרן מלאה על כל המוצרים והתקנות. אנחנו לצידך לאורך הדרך.' },
              { icon: Clock, title: 'זמינות 24/7', desc: 'זמינים לכל שאלה ובעיה בכל שעה, כולל בסופי שבוע וחגים.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <AnimateOnScroll key={title} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-4 p-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews teaser */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="מה הלקוחות אומרים" subtitle="מאות לקוחות מרוצים ברחבי הארץ" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {reviews.slice(0, 3).map((review, i) => (
              <AnimateOnScroll key={review.name} delay={i * 0.1}>
                <ReviewCard review={review} />
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center">
            <Link href="/reviews" className="text-accent font-semibold hover:underline">
              לכל ההמלצות ←
            </Link>
          </div>
        </div>
      </section>

      {/* Offers teaser */}
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <SectionHeader title="מבצע מיוחד" subtitle="אזעקה אלחוטית WiComm Pro" />
            <div className="bg-background rounded-2xl p-8 shadow-sm mt-6">
              <p className="text-4xl font-bold text-primary mb-2">2,690 ₪ <span className="text-lg text-text-muted font-normal">+ {'מע"מ'}</span></p>
              <p className="text-text-muted mb-6">כולל מערכת אלחוטית מלאה, כרטיס IP, לוח מקשים, גלאים ואינסטלציה</p>
              <Link href="/offers" className="inline-block bg-accent hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-colors">
                לכל המבצעים
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  )
}
