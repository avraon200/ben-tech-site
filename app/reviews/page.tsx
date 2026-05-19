import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import SectionHeader from '@/components/ui/SectionHeader'
import ReviewCard from '@/components/ui/ReviewCard'
import CTABanner from '@/components/ui/CTABanner'
import { reviews } from '@/data/reviews'

export const metadata = { title: 'המלצות | בן-טק' }

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-primary py-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">המלצות לקוחות</h1>
        <p className="text-white/75 text-lg mt-3">מה אומרים הלקוחות שלנו</p>
      </section>

      <section className="py-20 px-4 bg-background">
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
