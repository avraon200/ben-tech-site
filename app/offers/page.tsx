import Link from 'next/link'
import { Check, Zap } from 'lucide-react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import SectionHeader from '@/components/ui/SectionHeader'
import CTABanner from '@/components/ui/CTABanner'
import { offers } from '@/data/offers'

export const metadata = { title: 'מבצעים | בן-טק' }

const cardAccents = [
  { header: 'from-cyan to-primary', btn: 'from-cyan to-blue-600', glow: 'rgba(6,182,212,0.3)' },
  { header: 'from-accent to-red-600', btn: 'from-accent to-red-700', glow: 'rgba(220,38,38,0.3)' },
  { header: 'from-primary to-blue-800', btn: 'from-primary to-blue-800', glow: 'rgba(30,64,175,0.3)' },
  { header: 'from-emerald-500 to-teal-600', btn: 'from-emerald-500 to-teal-700', glow: 'rgba(16,185,129,0.3)' },
]

export default function OffersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary-dark to-slate-900" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan/8 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 cyber-badge text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Zap size={13} className="text-cyan-400" />
            מחירים אטרקטיביים
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 gradient-text-cyan">מבצעים מיוחדים</h1>
          <p className="text-white/55 text-xl">חבילות אבטחה מקצועיות לכל צורך</p>
        </div>
      </section>

      {/* Offers grid */}
      <section className="py-28 px-4 bg-background grid-pattern-dark relative overflow-hidden">
        <div className="absolute -top-20 left-0 w-80 h-80 bg-cyan/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimateOnScroll>
            <SectionHeader title="החבילות שלנו" subtitle="בחר את החבילה המתאימה לצרכיך" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((offer, i) => {
              const accent = cardAccents[i % cardAccents.length]
              return (
                <AnimateOnScroll key={offer.id} delay={i * 0.1}>
                  <div className="neon-border h-full">
                    <div className="bg-white rounded-3xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-none transition-shadow duration-300">
                      {/* Header */}
                      <div className={`bg-gradient-to-l ${accent.header} p-7`}>
                        <h2 className="text-2xl font-bold text-white mb-2">{offer.title}</h2>
                        {offer.price ? (
                          <>
                            <p className="text-4xl font-bold text-white">{offer.price}</p>
                            {offer.note && <p className="text-white/65 text-xs mt-1">{offer.note}</p>}
                          </>
                        ) : (
                          <p className="text-white/75 text-sm italic mt-1">{offer.note}</p>
                        )}
                      </div>
                      {/* Body */}
                      <div className="p-7 flex flex-col flex-1">
                        <ul className="flex flex-col gap-3.5 flex-1 mb-7">
                          {offer.items.map(item => (
                            <li key={item} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check size={11} className="text-emerald-600" />
                              </div>
                              <span className="text-text-primary text-sm leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/contact-us"
                          className={`block text-center bg-gradient-to-l ${accent.btn} text-white font-bold py-3.5 rounded-2xl transition-all duration-200 hover:scale-[1.02] hover:shadow-lg`}
                          style={{ boxShadow: `0 0 0 0 ${accent.glow}` }}
                        >
                          צור קשר לפרטים
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner headline="לא מצאת מה שחיפשת? נתאים לך חבילה אישית" />
    </>
  )
}
