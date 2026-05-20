import Image from 'next/image'
import Link from 'next/link'
import { LucideIcon, ArrowLeft } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'
import SectionHeader from './SectionHeader'
import CTABanner from './CTABanner'

interface Feature {
  icon: LucideIcon
  text: string
}

interface Step {
  number: number
  title: string
  desc: string
}

interface RelatedService {
  title: string
  href: string
}

interface ServicePageTemplateProps {
  title: string
  subtitle: string
  heroImage: string
  features: Feature[]
  steps: Step[]
  relatedServices: RelatedService[]
}

export default function ServicePageTemplate({
  title,
  subtitle,
  heroImage,
  features,
  steps,
  relatedServices,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16 overflow-hidden">
        <Image src={heroImage} alt={title} fill className="object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/30" />
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <AnimateOnScroll>
            <div className="neon-divider w-16 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 leading-tight gradient-text-cyan">
              {title}
            </h1>
            <p className="text-white/55 text-lg md:text-xl max-w-xl">{subtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className="py-28 px-4 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[600px] h-[400px] bg-cyan/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="מה אנחנו מציעים" light />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, text }, i) => (
              <AnimateOnScroll key={text} delay={i * 0.07} variant={i % 2 === 0 ? 'slideRight' : 'slideLeft'}>
                <div className="cyber-card rounded-2xl p-6 flex items-start gap-4 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-500/15 to-blue-600/15 border border-cyan-500/20 group-hover:border-cyan-400/40 transition-all duration-300 flex-shrink-0 icon-glow">
                    <Icon size={20} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <p className="text-slate-300 font-medium mt-1 leading-snug text-sm group-hover:text-white transition-colors">
                    {text}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="py-28 px-4 bg-background grid-pattern-dark relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="איך זה עובד?" subtitle="תהליך פשוט בשלושה שלבים" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.number} delay={i * 0.14} variant="scaleUp">
                <div className="neon-border h-full">
                  <div className="premium-card rounded-2xl p-8 flex flex-col items-center gap-5 h-full">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white bg-gradient-to-br from-cyan to-primary shadow-neon-cyan">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-text-primary">{step.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CTABanner />

      {/* ── Related services ─────────────────────────────────── */}
      <section className="py-20 px-4 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="שירותים נוספים" light />
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedServices.map((s, i) => (
              <AnimateOnScroll key={s.href} delay={i * 0.05}>
                <Link
                  href={s.href}
                  className="group cyber-card rounded-2xl p-5 flex items-center justify-between transition-all duration-200 hover:-translate-y-1"
                >
                  <span className="text-sm text-cyan font-semibold">{s.title}</span>
                  <ArrowLeft size={14} className="opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all text-cyan" />
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
