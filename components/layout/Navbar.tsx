'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, Phone, Shield } from 'lucide-react'
import { PHONE, PHONE_HREF } from '@/lib/constants'

const navLinks = [
  { href: '/', label: 'ראשי' },
  { href: '/alarms', label: 'אזעקות' },
  { href: '/security-cameras', label: 'מצלמות' },
  { href: '/entrance-control', label: 'בקרת כניסה' },
  { href: '/smart-home', label: 'בית חכם' },
  { href: '/infrastructure', label: 'תשתיות' },
  { href: '/offers', label: 'מבצעים' },
  { href: '/reviews', label: 'המלצות' },
  { href: '/gallery', label: 'גלריה' },
  { href: '/contact-us', label: 'צור קשר' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-slate-950/92 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-cyan/10'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan to-primary flex items-center justify-center shadow-md group-hover:shadow-neon-cyan transition-all duration-300">
            <Shield size={17} className="text-white" />
          </div>
          <span className={`font-bold text-xl transition-colors duration-300 ${scrolled ? 'gradient-text-cyan' : 'text-white'}`}>
            בן-טק
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-200 ${
                pathname === link.href
                  ? 'bg-cyan/12 text-cyan border border-cyan/25'
                  : scrolled
                    ? 'text-slate-300 hover:text-cyan hover:bg-cyan/8'
                    : 'text-white/75 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href={PHONE_HREF}
          className={`hidden lg:flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 hover:scale-105 ${
            scrolled
              ? 'bg-accent hover:bg-red-500 text-white shadow-md hover:shadow-accent/30'
              : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-cyan/30'
          }`}
        >
          <Phone size={14} />
          {PHONE}
        </a>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-300' : 'text-white'}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="תפריט"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-950/97 backdrop-blur-xl border-t border-cyan/10 px-4 pb-6 pt-2 shadow-2xl">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center py-3 text-base font-medium border-b border-slate-800/80 last:border-0 transition-colors ${
                pathname === link.href ? 'text-cyan' : 'text-slate-300 hover:text-cyan'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2 mt-4 bg-accent hover:bg-red-500 text-white px-4 py-3 rounded-xl font-semibold shadow-md transition-colors"
          >
            <Phone size={18} /> {PHONE}
          </a>
        </div>
      )}
    </header>
  )
}
