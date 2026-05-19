export interface Service {
  id: string
  title: string
  description: string
  icon: string
  href: string
  image: string
}

export const services: Service[] = [
  {
    id: 'alarms',
    title: 'מערכות אזעקה',
    description: 'מערכות אזעקה מתקדמות לבית ולעסק עם התראות בזמן אמת לסמארטפון שלך.',
    icon: 'ShieldAlert',
    href: '/alarms',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 'cameras',
    title: 'מצלמות אבטחה',
    description: 'מצלמות IP ואנלוגיות ברזולוציה גבוהה עם צפייה מרחוק מכל מכשיר.',
    icon: 'Camera',
    href: '/security-cameras',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80',
  },
  {
    id: 'entrance',
    title: 'בקרת כניסה',
    description: 'מערכות אינטרקום ובקרת גישה חכמות לניהול כניסה לנכס.',
    icon: 'DoorOpen',
    href: '/entrance-control',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80',
  },
  {
    id: 'smart-home',
    title: 'בית חכם',
    description: 'שלוט על תאורה, מנעולים, מיזוג ועוד — מהסמארטפון שלך, מכל מקום בעולם.',
    icon: 'Home',
    href: '/smart-home',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 'infrastructure',
    title: 'התקנת תשתיות תקשורת',
    description: 'התקנה מקצועית של תשתיות רשת ותקשורת לבית ולעסק.',
    icon: 'Network',
    href: '/infrastructure',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
  },
]
