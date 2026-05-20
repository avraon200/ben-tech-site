import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-heebo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'בן-טק | פתרונות אבטחה מקצועיים',
  description: 'מערכות אזעקה, מצלמות אבטחה, בקרת כניסה ובית חכם לבית ולעסק. התקנה מקצועית עם אחריות.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="font-heebo">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
