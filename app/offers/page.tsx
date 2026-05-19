import Link from 'next/link'
import { Check } from 'lucide-react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import SectionHeader from '@/components/ui/SectionHeader'
import CTABanner from '@/components/ui/CTABanner'
import { offers } from '@/data/offers'

export const metadata = { title: 'מבצעים | בן-טק' }

const cardColors = [
  'from-blue-600 to-primary',
  'from-accent to-orange-500',
  'from-primary-dark to-blue-900',
  'from-emerald-600 to-teal-700',
]

export default function OffersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-blue-700" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-400/15 rounded-full blur-3xl" />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 gradient-text-white">מבצעים מיוחדים</h1>
          <p className="text-white/60 text-xl">חבילות אבטחה מקצועיות במחירים אטרקטיביים</p>
        </div>
      </section>

      {/* Offers grid */}
      <section className="py-24 px-4 bg-background grid-pattern-dark">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="החבילות שלנו" subtitle="בחר את החבילה המתאימה לצרכיך" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((offer, i) => (
              <AnimateOnScroll key={offer.id} delay={i * 0.1}>
                <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 flex flex-col h-full">
                  {/* Card header with gradient */}
                  <div className={`bg-gradient-to-l ${cardColors[i % cardColors.length]} p-6`}>
                    <h2 className="text-2xl font-bold text-white">{offer.title}</h2>
                    {offer.price ? (
                      <p className="text-4xl font-bold text-white mt-2">{offer.price}</p>
                    ) : (
                      <p className="text-white/70 text-sm mt-2 italic">{offer.note}</p>
                    )}
                    {offer.price && offer.note && (
                      <p className="text-white/70 text-xs mt-1">{offer.note}</p>
                    )}
                  </div>
                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    <ul className="flex flex-col gap-3 flex-1 mb-6">
                      {offer.items.map(item => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={12} className="text-green-600" />
                          </div>
                          <span className="text-text-primary text-sm leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact-us"
                      className={`block text-center bg-gradient-to-l ${cardColors[i % cardColors.length]} text-white font-bold py-3.5 rounded-2xl transition-all duration-200 hover:opacity-90 hover:shadow-lg`}
                    >
                      צור קשר לפרטים
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="לא מצאת מה שחיפשת? נתאים לך חבילה אישית" />
    </>
  )
}
