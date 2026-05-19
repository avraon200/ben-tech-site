import { Home, Lightbulb, Thermometer, Lock, Smartphone, Zap } from 'lucide-react'
import ServicePageTemplate from '@/components/ui/ServicePageTemplate'

export const metadata = { title: 'בית חכם | בן-טק' }

export default function SmartHomePage() {
  return (
    <ServicePageTemplate
      title="בית חכם"
      subtitle="שלוט על כל הבית שלך ממסך אחד — מכל מקום בעולם"
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
      features={[
        { icon: Lightbulb, text: 'שליטה בתאורה — הדלקה, כיבוי ועמעום מרחוק' },
        { icon: Lock, text: 'מנעולים חכמים — פתיחה וסגירה מהסמארטפון' },
        { icon: Thermometer, text: 'שליטה במיזוג ובחימום לחיסכון באנרגיה' },
        { icon: Zap, text: 'שקעים חכמים לניהול צריכת חשמל' },
        { icon: Home, text: 'שליטה על מערכת האזעקה מהאפליקציה' },
        { icon: Smartphone, text: 'ממשק אחד לכל מכשירי הבית' },
      ]}
      steps={[
        { number: 1, title: 'תכנון חכם', desc: 'מיפוי הצרכים שלך ובחירת מכשירים ומערכות מתאימים.' },
        { number: 2, title: 'התקנה ואינטגרציה', desc: 'חיווט, התקנת מתגים חכמים ואינטגרציה עם מערכות קיימות.' },
        { number: 3, title: 'הגדרות ולמידה', desc: 'הגדרת אוטומציות ושגרות, והדרכה מלאה לשימוש.' },
      ]}
      relatedServices={[
        { title: 'מערכות אזעקה', href: '/alarms' },
        { title: 'מצלמות אבטחה', href: '/security-cameras' },
        { title: 'בקרת כניסה', href: '/entrance-control' },
        { title: 'תשתיות', href: '/infrastructure' },
      ]}
    />
  )
}
