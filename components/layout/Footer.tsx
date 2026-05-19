import Link from 'next/link'
import { Phone, Mail, MessageCircle, Share2, Shield } from 'lucide-react'
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
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary-dark to-slate-900" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Col 1: Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center shadow-lg">
              <Shield size={20} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">בן-טק</h3>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">
            פתרונות אבטחה מקצועיים, מתקדמים ומותאמים אישית לבית ולעסק. זמינים 24/7.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-xs font-medium">זמינים עכשיו לשירותך</span>
          </div>
        </div>

        {/* Col 2: Quick links */}
        <div>
          <h4 className="font-semibold text-white mb-5 text-lg">קישורים מהירים</h4>
          <ul className="space-y-2.5">
            {quickLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/50 hover:text-white text-sm transition-colors hover:pr-1 duration-200 flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div>
          <h4 className="font-semibold text-white mb-5 text-lg">צור קשר</h4>
          <ul className="space-y-3">
            {[
              { href: PHONE_HREF, icon: Phone, label: PHONE },
              { href: WHATSAPP_HREF, icon: MessageCircle, label: 'וואטסאפ', external: true },
              { href: EMAIL_HREF, icon: Mail, label: EMAIL },
              { href: FACEBOOK_HREF, icon: Share2, label: 'פייסבוק', external: true },
            ].map(({ href, icon: Icon, label, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-white/15 flex items-center justify-center transition-colors flex-shrink-0">
                    <Icon size={14} />
                  </div>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} בן-טק. כל הזכויות שמורות.</p>
          <div className="h-px w-16 bg-gradient-to-l from-accent/50 to-primary/50 hidden sm:block" />
          <p className="text-white/20 text-xs">פתרונות אבטחה מתקדמים</p>
        </div>
      </div>
    </footer>
  )
}
