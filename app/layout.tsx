import type { Metadata } from 'next'
import { Assistant } from 'next/font/google'
import './globals.css'

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
        {children}
      </body>
    </html>
  )
}
