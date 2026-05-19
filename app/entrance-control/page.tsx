import { DoorOpen, KeyRound, CreditCard, Shield, Smartphone, Users } from 'lucide-react'
import ServicePageTemplate from '@/components/ui/ServicePageTemplate'

export const metadata = { title: 'בקרת כניסה | בן-טק' }

export default function EntranceControlPage() {
  return (
    <ServicePageTemplate
      title="בקרת כניסה"
      subtitle="פתרונות אינטרקום ובקרת גישה חכמים לניהול כניסה מקצועי"
      heroImage="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1600&q=80"
      features={[
        { icon: KeyRound, text: 'לוחות מקשים חכמים לפתיחת דלת בקוד' },
        { icon: CreditCard, text: 'קוראי תגים ותעודות לגישה מהירה' },
        { icon: DoorOpen, text: 'בקרי כניסה חכמים לניהול גישה' },
        { icon: Shield, text: 'מסכי תצוגה חכמים עם וידאו' },
        { icon: Smartphone, text: 'פתיחת דלת מרחוק דרך האפליקציה' },
        { icon: Users, text: 'ניהול הרשאות גישה לעובדים ומבקרים' },
      ]}
      steps={[
        { number: 1, title: 'תכנון מערכת', desc: 'הגדרת נקודות הגישה ובחירת פתרון מתאים לגודל הנכס.' },
        { number: 2, title: 'התקנה', desc: 'התקנת ציוד, חיווט מקצועי ואינטגרציה עם מערכות קיימות.' },
        { number: 3, title: 'הגדרות וניהול', desc: 'הגדרת הרשאות, קודים ותגים לכל משתמש.' },
      ]}
      relatedServices={[
        { title: 'מערכות אזעקה', href: '/alarms' },
        { title: 'מצלמות אבטחה', href: '/security-cameras' },
        { title: 'בית חכם', href: '/smart-home' },
        { title: 'תשתיות', href: '/infrastructure' },
      ]}
    />
  )
}
