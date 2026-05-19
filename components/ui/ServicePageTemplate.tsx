import Image from 'next/image'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
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
      {/* Page hero */}
      <section className="relative h-80 flex items-end pb-12">
        <Image src={heroImage} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-primary-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
          <p className="text-white/80 text-lg mt-2">{subtitle}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="מה אנחנו מציעים" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, text }, i) => (
              <AnimateOnScroll key={text} delay={i * 0.1}>
                <div className="flex items-start gap-4 bg-surface rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <p className="text-text-primary font-medium mt-1">{text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="איך זה עובד?" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.number} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center text-3xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-white/75 text-sm">{step.desc}</p>
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
                  className="block bg-surface rounded-xl p-4 text-center text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  {s.title}
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
