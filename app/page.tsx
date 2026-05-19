import Image from 'next/image'
import Link from 'next/link'
import { Phone, Shield, Clock, Award, ArrowLeft } from 'lucide-react'
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
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt="אבטחה מקצועית"
          fill
          priority
          className="object-cover scale-105"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-primary-dark/80 to-primary-dark/60" />
        <div className="absolute inset-0 grid-pattern" />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />

        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              שירות זמין 24/7 ברחבי הארץ
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              פתרונות אבטחה
              <br />
              <span className="gradient-text-white">מקצועיים לבית ולעסק</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              מערכות אזעקה, מצלמות, בית חכם ובקרת כניסה — התקנה מקצועית עם אחריות מלאה
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="group flex items-center justify-center gap-2 bg-accent hover:bg-red-500 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30"
              >
                קבל הצעת מחיר חינם
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </Link>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all duration-200 border border-white/25 hover:border-white/50"
              >
                <Phone size={20} /> {PHONE}
              </a>
            </div>
          </AnimateOnScroll>

          {/* Stats bar */}
          <AnimateOnScroll delay={0.4}>
            <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { value: '500+', label: 'לקוחות מרוצים' },
                { value: '10+', label: 'שנות ניסיון' },
                { value: '24/7', label: 'זמינות מלאה' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-4xl font-bold text-white">{value}</p>
                  <p className="text-white/50 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">גלול</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ─── Services ─────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-background grid-pattern-dark relative">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="השירותים שלנו" subtitle="פתרון מקצועי לכל צורך אבטחתי" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.id} delay={i * 0.08}>
                <ServiceCard service={service} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Us ───────────────────────────────────────────── */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-blue-800" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="למה לבחור בנו?" light />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { icon: Award, title: 'ניסיון ומקצועיות', desc: 'שנים של ניסיון בהתקנת מערכות אבטחה לבתים ועסקים ברחבי הארץ.' },
              { icon: Shield, title: 'אחריות מלאה', desc: 'אחריות יצרן מלאה על כל המוצרים והתקנות. אנחנו לצידך לאורך הדרך.' },
              { icon: Clock, title: 'זמינות 24/7', desc: 'זמינים לכל שאלה ובעיה בכל שעה, כולל בסופי שבוע וחגים.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <AnimateOnScroll key={title} delay={i * 0.1}>
                <div className="bg-white/8 hover:bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/25 transition-all duration-300 group">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Reviews ──────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="מה הלקוחות אומרים" subtitle="מאות לקוחות מרוצים ברחבי הארץ" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {reviews.slice(0, 3).map((review, i) => (
              <AnimateOnScroll key={review.name} delay={i * 0.1}>
                <ReviewCard review={review} />
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group"
            >
              לכל ההמלצות
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Offer Teaser ─────────────────────────────────────── */}
      <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-accent/30">
              מבצע מיוחד
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              אזעקה אלחוטית
              <br />
              <span className="gradient-text-white">WiComm Pro</span>
            </h2>
            <div className="my-8">
              <span className="text-6xl font-bold text-white">2,690</span>
              <span className="text-2xl text-white/50 mr-2">{'₪ + מע"מ'}</span>
            </div>
            <p className="text-white/50 mb-8 text-lg">כולל מערכת אלחוטית מלאה, כרטיס IP, לוח מקשים, גלאים ואינסטלציה</p>
            <Link
              href="/offers"
              className="inline-flex items-center gap-2 bg-accent hover:bg-red-500 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
            >
              לכל המבצעים
              <ArrowLeft size={18} />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <CTABanner />
    </>
  )
}
