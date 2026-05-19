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
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end pb-16 overflow-hidden">
        <Image src={heroImage} alt={title} fill className="object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-primary-dark/75 to-primary/40" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 leading-tight gradient-text-white">{title}</h1>
            <p className="text-white/65 text-lg md:text-xl max-w-xl">{subtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 bg-background grid-pattern-dark">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="מה אנחנו מציעים" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, text }, i) => (
              <AnimateOnScroll key={text} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary to-blue-500 shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} className="text-white" />
                  </div>
                  <p className="text-text-primary font-medium mt-1 leading-snug">{text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-blue-800" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="איך זה עובד?" light />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.number} delay={i * 0.12}>
                <div className="relative flex flex-col items-center gap-4 p-6">
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-l from-transparent via-white/20 to-transparent" />
                  )}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-br from-white/25 to-white/5 border border-white/20 backdrop-blur-sm shadow-xl">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />

      {/* Related services */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="שירותים נוספים" />
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedServices.map((s, i) => (
              <AnimateOnScroll key={s.href} delay={i * 0.05}>
                <Link
                  href={s.href}
                  className="group flex items-center justify-between bg-white rounded-2xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-primary/30 text-primary font-semibold transition-all duration-200 hover:-translate-y-1"
                >
                  <span>{s.title}</span>
                  <ArrowLeft size={16} className="opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all" />
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
