import { Network, Cable, Server, Wifi, Building, Wrench } from 'lucide-react'
import ServicePageTemplate from '@/components/ui/ServicePageTemplate'

export const metadata = { title: 'התקנת תשתיות תקשורת | בן-טק' }

export default function InfrastructurePage() {
  return (
    <ServicePageTemplate
      title="התקנת תשתיות תקשורת"
      subtitle="תשתית רשת ותקשורת מקצועית — הבסיס לכל מערכות החכם והאבטחה"
      heroImage="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1600&q=80"
      features={[
        { icon: Cable, text: 'הנחת כבלי רשת CAT6/CAT6A לביצועים גבוהים' },
        { icon: Network, text: 'ארונות תקשורת מסודרים ומקצועיים' },
        { icon: Wifi, text: 'פריסת נקודות גישה אלחוטיות לכיסוי מלא' },
        { icon: Server, text: 'שרתי NAS לאחסון מקומי ומערכות גיבוי' },
        { icon: Building, text: 'מותאם לבתים, עסקים ומבני ציבור' },
        { icon: Wrench, text: 'תכנון, התקנה ובדיקה מקצועית מלאה' },
      ]}
      steps={[
        { number: 1, title: 'תכנון תשתית', desc: 'תכנון מפת הרשת, מיקום נקודות חיבור ובחירת ציוד.' },
        { number: 2, title: 'הנחת כבלים', desc: 'הנחה מקצועית בתוך קירות ותקרות ללא שיבוש מיותר.' },
        { number: 3, title: 'בדיקה ומסירה', desc: 'בדיקת ביצועים מלאה, תיעוד ומסירה עם הדרכה.' },
      ]}
      relatedServices={[
        { title: 'מערכות אזעקה', href: '/alarms' },
        { title: 'מצלמות אבטחה', href: '/security-cameras' },
        { title: 'בקרת כניסה', href: '/entrance-control' },
        { title: 'בית חכם', href: '/smart-home' },
      ]}
    />
  )
}
