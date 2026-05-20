import Link from 'next/link'
import { Phone, Mail, MessageCircle, Share2, Shield, MapPin } from 'lucide-react'
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

const contactItems = [
  { href: PHONE_HREF, icon: Phone, label: PHONE, external: false },
  { href: WHATSAPP_HREF, icon: MessageCircle, label: 'וואטסאפ', external: true },
  { href: EMAIL_HREF, icon: Mail, label: EMAIL, external: false },
  { href: FACEBOOK_HREF, icon: Share2, label: 'פייסבוק', external: true },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0f1a2e] to-slate-950" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-cyan/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl translate-y-1/2" />

      {/* Top neon divider */}
      <div className="relative z-10 neon-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Col 1: Brand */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan to-primary flex items-center justify-center shadow-lg glow-animation">
                <Shield size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold gradient-text-cyan">בן-טק</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              פתרונות אבטחה מקצועיים, מתקדמים ומותאמים אישית לבית ולעסק. זמינים 24/7.
            </p>

            {/* Online status */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-medium">זמינים עכשיו לשירותך</span>
            </div>

            {/* Coverage */}
            <div className="mt-4 flex items-center gap-2 text-slate-500 text-xs">
              <MapPin size={12} />
              <span>שירות ברחבי הארץ</span>
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-base flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-gradient-to-b from-cyan to-primary inline-block" />
              קישורים מהירים
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-cyan/40 rounded-full group-hover:bg-cyan transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-base flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-gradient-to-b from-cyan to-primary inline-block" />
              צור קשר
            </h4>
            <ul className="space-y-3">
              {contactItems.map(({ href, icon: Icon, label, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 text-slate-400 hover:text-cyan text-sm transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/4 border border-white/6 group-hover:bg-cyan/10 group-hover:border-cyan/20 flex items-center justify-center transition-all duration-200 flex-shrink-0">
                      <Icon size={14} className="group-hover:text-cyan transition-colors" />
                    </div>
                    <span className="group-hover:translate-x-0.5 transition-transform">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">© {new Date().getFullYear()} בן-טק. כל הזכויות שמורות.</p>
          <div className="neon-divider w-20 hidden sm:block" />
          <p className="text-slate-600 text-xs">פתרונות אבטחה מתקדמים</p>
        </div>
      </div>
    </footer>
  )
}
