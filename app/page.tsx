import Image from 'next/image'
import Link from 'next/link'
import { Phone, Shield, Clock, Award, ArrowLeft, Zap, Star } from 'lucide-react'
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
          className="object-cover scale-110"
        />
        {/* Dark overlay layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/40 via-transparent to-primary-dark/40" />
        <div className="absolute inset-0 grid-pattern opacity-60" />

        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />

        <div className="relative z-10 px-4 max-w-5xl mx-auto">
          {/* Badge */}
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2.5 cyber-badge text-sm font-medium px-5 py-2.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              שירות זמין 24/7 ברחבי הארץ
            </div>
          </AnimateOnScroll>

          {/* Headline */}
          <AnimateOnScroll delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              פתרונות אבטחה
              <br />
              <span className="gradient-text-cyan">מקצועיים לבית ולעסק</span>
            </h1>
          </AnimateOnScroll>

          {/* Sub */}
          <AnimateOnScroll delay={0.2}>
            <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              מערכות אזעקה, מצלמות, בית חכם ובקרת כניסה — התקנה מקצועית עם אחריות מלאה
            </p>
          </AnimateOnScroll>

          {/* CTA buttons */}
          <AnimateOnScroll delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="group flex items-center justify-center gap-2.5 bg-accent hover:bg-red-500 text-white font-bold px-10 py-4 rounded-2xl text-base transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30"
              >
                קבל הצעת מחיר חינם
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              </Link>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2.5 bg-white/8 hover:bg-white/15 backdrop-blur-sm text-white font-bold px-10 py-4 rounded-2xl text-base transition-all duration-200 border border-white/15 hover:border-cyan/40"
              >
                <Phone size={18} /> {PHONE}
              </a>
            </div>
          </AnimateOnScroll>

          {/* Stats bar */}
          <AnimateOnScroll delay={0.45}>
            <div className="mt-20 grid grid-cols-3 max-w-xl mx-auto gap-0">
              {[
                { value: '500+', label: 'לקוחות מרוצים' },
                { value: '10+', label: 'שנות ניסיון' },
                { value: '24/7', label: 'זמינות מלאה' },
              ].map(({ value, label }, i) => (
                <div key={label} className={`text-center px-4 py-3 ${i === 1 ? 'border-r border-l border-cyan/15' : ''}`}>
                  <p className="text-3xl font-bold text-white stat-glow">{value}</p>
                  <p className="text-white/40 text-xs mt-1 font-medium tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">גלול</span>
          <div className="w-px h-10 bg-gradient-to-b from-cyan/50 to-transparent" />
        </div>
      </section>

      {/* ─── Services ─────────────────────────────────────────── */}
      <section className="py-28 px-4 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="השירותים שלנו" subtitle="פתרון מקצועי לכל צורך אבטחתי" light />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.id} delay={i * 0.08}>
                <ServiceCard service={service} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Us ───────────────────────────────────────────── */}
      <section className="py-28 px-4 bg-background grid-pattern-dark relative overflow-hidden">
        <div className="absolute -top-20 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="למה לבחור בנו?" subtitle="ניסיון, מקצועיות ואחריות מלאה" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: 'ניסיון ומקצועיות',
                desc: 'שנים של ניסיון בהתקנת מערכות אבטחה לבתים ועסקים ברחבי הארץ.',
                accent: 'from-cyan to-blue-500',
              },
              {
                icon: Shield,
                title: 'אחריות מלאה',
                desc: 'אחריות יצרן מלאה על כל המוצרים והתקנות. אנחנו לצידך לאורך הדרך.',
                accent: 'from-primary to-blue-700',
              },
              {
                icon: Clock,
                title: 'זמינות 24/7',
                desc: 'זמינים לכל שאלה ובעיה בכל שעה, כולל בסופי שבוע וחגים.',
                accent: 'from-accent to-red-700',
              },
            ].map(({ icon: Icon, title, desc, accent }, i) => (
              <AnimateOnScroll key={title} delay={i * 0.1}>
                <div className="neon-border h-full">
                  <div className="premium-card rounded-2xl p-8 flex flex-col gap-5 h-full hover:shadow-none">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${accent} shadow-lg`}>
                      <Icon size={26} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Reviews ──────────────────────────────────────────── */}
      <section className="py-28 px-4 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="מה הלקוחות אומרים" subtitle="מאות לקוחות מרוצים ברחבי הארץ" light />
          </AnimateOnScroll>

          {/* Rating bar */}
          <AnimateOnScroll>
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-3 cyber-badge px-6 py-3 rounded-full">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-white/80 text-sm font-semibold">4.9 דירוג ממוצע</span>
                <span className="text-white/30 text-xs">|</span>
                <span className="text-slate-400 text-sm">{reviews.length}+ ביקורות</span>
              </div>
            </div>
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
              className="inline-flex items-center gap-2 text-cyan font-semibold hover:text-cyan/80 transition-colors group border border-cyan/20 hover:border-cyan/40 px-6 py-3 rounded-xl bg-cyan/5 hover:bg-cyan/10"
            >
              לכל ההמלצות
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Offer Teaser ─────────────────────────────────────── */}
      <section className="py-28 px-4 bg-background grid-pattern-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="neon-border">
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-gray-100 flex flex-col items-center text-center">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 accent-badge text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <Zap size={13} />
                מבצע מיוחד
              </span>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-2 leading-tight">
                אזעקה אלחוטית WiComm Pro
              </h2>
              <div className="my-6 flex items-baseline gap-2 justify-center">
                <span className="text-6xl font-bold text-text-primary">2,690</span>
                <span className="text-2xl text-text-muted">{'₪ + מע"מ'}</span>
              </div>
              <p className="text-text-muted mb-8 text-base max-w-md leading-relaxed">
                כולל מערכת אלחוטית מלאה, כרטיס IP, לוח מקשים, גלאים ואינסטלציה מקצועית
              </p>
              <Link
                href="/offers"
                className="inline-flex items-center gap-2.5 bg-gradient-to-l from-accent to-red-600 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-accent/25"
              >
                לכל המבצעים
                <ArrowLeft size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <CTABanner />
    </>
  )
}
