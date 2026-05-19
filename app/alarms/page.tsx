import { ShieldAlert, Smartphone, Wifi, Flame, Droplets, Wind } from 'lucide-react'
import ServicePageTemplate from '@/components/ui/ServicePageTemplate'

export const metadata = { title: 'מערכות אזעקה | בן-טק' }

export default function AlarmsPage() {
  return (
    <ServicePageTemplate
      title="מערכות אזעקה"
      subtitle="הגנה מקצועית על ביתך ועסקך עם הטכנולוגיה המתקדמת ביותר"
      heroImage="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1600&q=80"
      features={[
        { icon: ShieldAlert, text: 'זיהוי פריצה ואזעקה מיידית' },
        { icon: Flame, text: 'גלאי עשן וחום לגילוי שריפה' },
        { icon: Droplets, text: 'גלאי שיטפון להגנה מפני נזקי מים' },
        { icon: Wind, text: 'גלאי גז למניעת סכנות בטיחות' },
        { icon: Smartphone, text: 'התראות בזמן אמת לסמארטפון' },
        { icon: Wifi, text: 'מערכות קוויות ואלחוטיות לכל סוג נכס' },
      ]}
      steps={[
        { number: 1, title: 'ייעוץ ותכנון', desc: 'מגיעים אליך לסקירת הנכס ומתאימים מערכת אזעקה לצרכים שלך.' },
        { number: 2, title: 'התקנה מקצועית', desc: 'צוות מוסמך מתקין את המערכת בזמן קצר ובשיבוש מינימלי.' },
        { number: 3, title: 'הדרכה ותמיכה', desc: 'מדריכים אותך לשימוש ומלווים אותך לאורך כל חיי המוצר.' },
      ]}
      relatedServices={[
        { title: 'מצלמות אבטחה', href: '/security-cameras' },
        { title: 'בקרת כניסה', href: '/entrance-control' },
        { title: 'בית חכם', href: '/smart-home' },
        { title: 'תשתיות', href: '/infrastructure' },
      ]}
    />
  )
}
