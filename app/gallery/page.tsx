import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import CTABanner from '@/components/ui/CTABanner'
import GalleryGrid from '@/components/ui/GalleryGrid'

export const metadata = { title: 'גלריה | בן-טק' }

export default function GalleryPage() {
  return (
    <>
      <section className="relative py-28 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary-dark to-primary" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 gradient-text-white">גלריית עבודות</h1>
          <p className="text-white/60 text-xl">דוגמאות מהתקנות אחרונות שביצענו</p>
        </div>
      </section>

      <section className="py-24 px-4 bg-background grid-pattern-dark">
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
