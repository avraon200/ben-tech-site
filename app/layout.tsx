import type { Metadata } from 'next'
import { Assistant } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-assistant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'בן-טק | פתרונות אבטחה מקצועיים',
  description: 'מערכות אזעקה, מצלמות אבטחה, בקרת כניסה ובית חכם לבית ולעסק. התקנה מקצועית עם אחריות.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={assistant.variable}>
      <body className="font-assistant">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
