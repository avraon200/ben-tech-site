import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import SectionHeader from '@/components/ui/SectionHeader'
import ReviewCard from '@/components/ui/ReviewCard'
import CTABanner from '@/components/ui/CTABanner'
import { reviews } from '@/data/reviews'

export const metadata = { title: 'המלצות | בן-טק' }

export default function ReviewsPage() {
  return (
    <>
      <section className="relative py-28 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary-dark to-blue-900" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 gradient-text-white">המלצות לקוחות</h1>
          <p className="text-white/60 text-xl">מה אומרים הלקוחות שלנו</p>
        </div>
      </section>

      <section className="py-24 px-4 bg-background grid-pattern-dark">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title={`${reviews.length} לקוחות מרוצים`} subtitle="ממליצים עלינו ברחבי הארץ" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <AnimateOnScroll key={review.name + review.city} delay={(i % 3) * 0.1}>
                <ReviewCard review={review} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="גם אתם רוצים להיות מרוצים? צרו קשר עוד היום" />
    </>
  )
}
