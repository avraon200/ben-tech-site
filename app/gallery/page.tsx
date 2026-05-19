import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import CTABanner from '@/components/ui/CTABanner'
import GalleryGrid from '@/components/ui/GalleryGrid'

export const metadata = { title: 'גלריה | בן-טק' }

export default function GalleryPage() {
  return (
    <>
      <section className="bg-primary py-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">גלריית עבודות</h1>
        <p className="text-white/75 text-lg mt-3">דוגמאות מהתקנות אחרונות שביצענו</p>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader title="העבודות שלנו" subtitle="כל תמונה מספרת סיפור של התקנה מקצועית" />
          </AnimateOnScroll>
          <GalleryGrid />
        </div>
      </section>

      <CTABanner headline="אוהבים מה שראיתם? בואו נעבוד יחד" />
    </>
  )
}
