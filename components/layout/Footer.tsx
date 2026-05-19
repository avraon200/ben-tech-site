import Link from 'next/link'
import { Phone, Mail, MessageCircle, Share2 } from 'lucide-react'
import { PHONE, PHONE_HREF, WHATSAPP_HREF, EMAIL, EMAIL_HREF, FACEBOOK_HREF } from '@/lib/constants'

const quickLinks = [
  { href: '/alarms', label: 'מערכות אזעקה' },
  { href: '/security-cameras', label: 'מצלמות אבטחה' },
  { href: '/entrance-control', label: 'בקרת כניסה' },
  { href: '/smart-home', label: 'בית חכם' },
  { href: '/infrastructure', label: 'התקנת תשתיות' },
  { href: '/offers', label: 'מבצעים' },
  { href: '/reviews', label: 'המלצות' },
  { href: '/contact-us', label: 'צור קשר' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Col 1: Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-3">בן-טק</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            פתרונות אבטחה מקצועיים, מתקדמים ומותאמים אישית לבית ולעסק. זמינים 24/7.
          </p>
        </div>

        {/* Col 2: Quick links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">קישורים מהירים</h4>
          <ul className="space-y-2">
            {quickLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">צור קשר</h4>
          <ul className="space-y-3">
            <li>
              <a href={PHONE_HREF} className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                <Phone size={16} /> {PHONE}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                <MessageCircle size={16} /> וואטסאפ
              </a>
            </li>
            <li>
              <a href={EMAIL_HREF} className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                <Mail size={16} /> {EMAIL}
              </a>
            </li>
            <li>
              <a href={FACEBOOK_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                <Share2 size={16} /> פייסבוק
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-white/50 text-xs">
        © {new Date().getFullYear()} בן-טק. כל הזכויות שמורות.
      </div>
    </footer>
  )
}
