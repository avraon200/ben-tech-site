import Link from 'next/link'
import { Phone, Shield, Clock, Award, ArrowLeft, Zap, Star, CheckCircle2 } from 'lucide-react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard from '@/components/ui/ServiceCard'
import ReviewCard from '@/components/ui/ReviewCard'
import CTABanner from '@/components/ui/CTABanner'
import CounterStat from '@/components/ui/CounterStat'
import { services } from '@/data/services'
import { reviews } from '@/data/reviews'
import { PHONE_HREF, PHONE } from '@/lib/constants'

const whyUs = [
  {
    icon: Award,
    title: 'ניסיון ומקצועיות',
    desc: 'שנים של ניסיון בהתקנת מערכות אבטחה לבתים ועסקים ברחבי הארץ.',
    accent: 'from-cyan to-blue-500',
    bullets: ['מוסמכים ומורשים', 'צוות מיומן', 'ציוד מקצועי'],
  },
  {
    icon: Shield,
    title: 'אחריות מלאה',
    desc: 'אחריות יצרן מלאה על כל המוצרים והתקנות. אנחנו לצידך לאורך הדרך.',
    accent: 'from-primary to-blue-700',
    bullets: ['אחריות יצרן', 'שירות לאחר מכירה', 'תמיכה טכנית'],
  },
  {
    icon: Clock,
    title: 'זמינות 24/7',
    desc: 'זמינים לכל שאלה ובעיה בכל שעה, כולל בסופי שבוע וחגים.',
    accent: 'from-accent to-red-700',
    bullets: ['מענה מיידי', 'שירות חירום', 'ללא ימי מנוחה'],
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── Hero: CSS animated, no stock photo ─────────── */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-slate-950">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0f2547_0%,_#020817_60%)]" />

        {/* Animated orbs */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-orb hero-orb-4" />

        {/* Grid */}
        <div className="absolute inset-0 grid-pattern opacity-50" />

        {/* Diagonal accent lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-[200%] h-px bg-gradient-to-r from-transparent via-cyan/10 to-transparent rotate-12" />
          <div className="absolute top-3/4 -left-20 w-[200%] h-px bg-gradient-to-r from-transparent via-cyan/6 to-transparent rotate-12" />
        </div>

        <div className="relative z-10 px-4 max-w-5xl mx-auto">
          {/* Badge */}
          <AnimateOnScroll variant="zoomIn">
            <div className="inline-flex items-center gap-2.5 cyber-badge text-sm font-semibold px-5 py-2.5 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              שירות זמין 24/7 ברחבי הארץ
            </div>
          </AnimateOnScroll>

          {/* Main headline */}
          <AnimateOnScroll delay={0.08} variant="fadeUp">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-3 leading-[1.05] tracking-tight">
              פתרונות אבטחה
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.16} variant="fadeUp">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight gradient-text-cyan">
              מקצועיים לבית ולעסק
            </h1>
          </AnimateOnScroll>

          {/* Sub headline */}
          <AnimateOnScroll delay={0.24} variant="fadeIn">
            <p className="text-lg md:text-xl text-white/55 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              מערכות אזעקה, מצלמות, בית חכם ובקרת כניסה — התקנה מקצועית עם אחריות מלאה
            </p>
          </AnimateOnScroll>

          {/* CTA buttons */}
          <AnimateOnScroll delay={0.32} variant="scaleUp">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="group flex items-center justify-center gap-2.5 bg-accent hover:bg-red-500 text-white font-bold px-12 py-4 rounded-2xl text-base transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-accent/40"
              >
                קבל הצעת מחיר חינם
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              </Link>
              <a
                href={PHONE_HREF}
                className="group flex items-center justify-center gap-2.5 border border-white/20 hover:border-cyan/50 bg-white/5 hover:bg-cyan/8 backdrop-blur-sm text-white font-bold px-12 py-4 rounded-2xl text-base transition-all duration-200"
              >
                <Phone size={18} className="group-hover:text-cyan transition-colors" />
                <span className="group-hover:text-cyan transition-colors">{PHONE}</span>
              </a>
            </div>
          </AnimateOnScroll>

          {/* Stats */}
          <AnimateOnScroll delay={0.44} variant="fadeUp">
            <div className="mt-20 inline-flex rounded-2xl overflow-hidden border border-white/8 bg-white/4 backdrop-blur-sm">
              <CounterStat value="500+" label="לקוחות מרוצים" />
              <CounterStat value="10+" label="שנות ניסיון" bordered />
              <CounterStat value="24/7" label="זמינות מלאה" />
            </div>
          </AnimateOnScroll>
        </div>

        {/* Bottom scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25">
          <span className="text-[10px] tracking-[0.3em] uppercase">גלול למטה</span>
          <div className="w-px h-12 bg-gradient-to-b from-cyan/40 to-transparent" />
        </div>
      </section>

      {/* ─── Services ─────────────────────────────────────── */}
      <section className="py-28 px-4 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[700px] h-[500px] bg-cyan/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="השירותים שלנו" subtitle="פתרון מקצועי לכל צורך אבטחתי" light />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.id} delay={i * 0.09} variant={i % 2 === 0 ? 'slideRight' : 'slideLeft'}>
                <ServiceCard service={service} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Us ───────────────────────────────────────── */}
      <section className="py-28 px-4 bg-background grid-pattern-dark relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-96 h-96 bg-cyan/4 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="למה לבחור בנו?" subtitle="ניסיון, מקצועיות ואחריות מלאה" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc, accent, bullets }, i) => (
              <AnimateOnScroll key={title} delay={i * 0.12} variant="scaleUp">
                <div className="neon-border h-full">
                  <div className="premium-card rounded-2xl p-8 flex flex-col gap-5 h-full hover:shadow-none">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${accent} shadow-lg`}>
                      <Icon size={26} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed mb-4">{desc}</p>
                      <ul className="space-y-1.5">
                        {bullets.map(b => (
                          <li key={b} className="flex items-center gap-2 text-text-muted text-xs">
                            <CheckCircle2 size={13} className="text-cyan flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Reviews ──────────────────────────────────────── */}
      <section className="py-28 px-4 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="מה הלקוחות אומרים" subtitle="מאות לקוחות מרוצים ברחבי הארץ" light />
          </AnimateOnScroll>

          {/* Rating bar */}
          <AnimateOnScroll variant="zoomIn">
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-3 cyber-badge px-6 py-3 rounded-full">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-white/80 text-sm font-semibold">4.9 דירוג ממוצע</span>
                <span className="text-white/25">|</span>
                <span className="text-slate-400 text-sm">{reviews.length}+ ביקורות</span>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {reviews.slice(0, 3).map((review, i) => (
              <AnimateOnScroll key={review.name} delay={i * 0.1} variant={i === 1 ? 'fadeUp' : i === 0 ? 'slideRight' : 'slideLeft'}>
                <ReviewCard review={review} />
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-cyan font-semibold border border-cyan/20 hover:border-cyan/50 px-7 py-3 rounded-xl bg-cyan/5 hover:bg-cyan/12 transition-all duration-200 hover:scale-105"
            >
              לכל ההמלצות ({reviews.length})
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Offer Teaser ─────────────────────────────────── */}
      <section className="py-28 px-4 bg-background grid-pattern-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimateOnScroll variant="scaleUp">
            <div className="neon-border">
              <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-gray-100 flex flex-col items-center text-center hover:shadow-none">
                <span className="inline-flex items-center gap-2 accent-badge text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                  <Zap size={13} />
                  מבצע מיוחד
                </span>
                <h2 className="text-4xl md:text-5xl font-black gradient-text mb-3 leading-tight">
                  אזעקה אלחוטית WiComm Pro
                </h2>
                <div className="my-6 flex items-baseline gap-2 justify-center">
                  <span className="text-7xl font-black text-text-primary leading-none">2,690</span>
                  <span className="text-2xl text-text-muted">{'₪ + מע"מ'}</span>
                </div>
                <p className="text-text-muted mb-8 text-base max-w-md leading-relaxed">
                  כולל מערכת אלחוטית מלאה, כרטיס IP, לוח מקשים, גלאים ואינסטלציה מקצועית
                </p>
                <Link
                  href="/offers"
                  className="inline-flex items-center gap-3 bg-gradient-to-l from-accent to-red-600 text-white font-bold px-12 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30 text-base"
                >
                  לכל המבצעים
                  <ArrowLeft size={18} />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <CTABanner />
    </>
  )
}
