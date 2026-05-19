import Link from 'next/link'
import { Check } from 'lucide-react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import SectionHeader from '@/components/ui/SectionHeader'
import CTABanner from '@/components/ui/CTABanner'
import { offers } from '@/data/offers'

export const metadata = { title: 'מבצעים | בן-טק' }

export default function OffersPage() {
  return (
    <>
      <section className="bg-primary py-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">מבצעים מיוחדים</h1>
        <p className="text-white/75 text-lg mt-3">חבילות אבטחה מקצועיות במחירים אטרקטיביים</p>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="החבילות שלנו" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((offer, i) => (
              <AnimateOnScroll key={offer.id} delay={i * 0.1}>
                <div className="bg-surface rounded-2xl shadow-sm p-8 flex flex-col h-full">
                  <h2 className="text-2xl font-bold text-primary mb-2">{offer.title}</h2>
                  {offer.price && (
                    <p className="text-3xl font-bold text-accent mb-1">{offer.price}</p>
                  )}
                  {offer.note && (
                    <p className="text-text-muted text-sm mb-4">{offer.note}</p>
                  )}
                  <ul className="flex flex-col gap-3 flex-1 mb-6">
                    {offer.items.map(item => (
                      <li key={item} className="flex items-start gap-3">
                        <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-text-primary text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact-us"
                    className="block text-center bg-accent hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-colors"
                  >
                    צור קשר לפרטים
                  </Link>
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
