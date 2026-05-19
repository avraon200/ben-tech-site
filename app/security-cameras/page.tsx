import { Camera, Monitor, Smartphone, Eye, Wifi, Server } from 'lucide-react'
import ServicePageTemplate from '@/components/ui/ServicePageTemplate'

export const metadata = { title: 'מצלמות אבטחה | בן-טק' }

export default function SecurityCamerasPage() {
  return (
    <ServicePageTemplate
      title="מצלמות אבטחה"
      subtitle="מערכות צילום מתקדמות לניטור מתמיד של ביתך ועסקך"
      heroImage="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1600&q=80"
      features={[
        { icon: Camera, text: 'מצלמות אנלוגיות עד 4MP — פתרון פשוט ואמין' },
        { icon: Eye, text: 'מצלמות IP עד 12MP — רזולוציה גבוהה לכל פרט' },
        { icon: Smartphone, text: 'צפייה חיה מהסמארטפון, טאבלט או מחשב' },
        { icon: Monitor, text: 'מערכת הקלטה DVR/NVR עם גישה מרחוק' },
        { icon: Wifi, text: 'קישוריות אינטרנט לגישה מכל מקום בעולם' },
        { icon: Server, text: 'אחסון מקומי ועל ענן לשמירת הצילומים' },
      ]}
      steps={[
        { number: 1, title: 'סקר שטח', desc: 'מיפוי נקודות הצילום הקריטיות בנכס שלך לכיסוי מקסימלי.' },
        { number: 2, title: 'התקנה וחיווט', desc: 'התקנת מצלמות, הנחת כבלים והגדרת מערכת ההקלטה.' },
        { number: 3, title: 'הגדרה והדרכה', desc: 'הגדרת גישה מרחוק, אפליקציה בסמארטפון והדרכת שימוש.' },
      ]}
      relatedServices={[
        { title: 'מערכות אזעקה', href: '/alarms' },
        { title: 'בקרת כניסה', href: '/entrance-control' },
        { title: 'בית חכם', href: '/smart-home' },
        { title: 'תשתיות', href: '/infrastructure' },
      ]}
    />
  )
}
