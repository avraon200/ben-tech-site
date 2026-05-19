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
        ? 'backdrop-blur-xl bg-white/90 shadow-lg shadow-black/5 border-b border-white/50'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <Shield size={16} className="text-white" />
          </div>
          <span className={`font-bold text-xl transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
            בן-טק
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-200 ${
                pathname === link.href
                  ? 'bg-primary text-white shadow-sm'
                  : scrolled
                    ? 'text-text-primary hover:text-primary hover:bg-primary/8'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
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
              ? 'bg-gradient-to-l from-accent to-red-700 text-white shadow-md hover:shadow-accent/30'
              : 'bg-white/15 backdrop-blur-sm text-white border border-white/25 hover:bg-white/25'
          }`}
        >
          <Phone size={15} />
          {PHONE}
        </a>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-text-primary' : 'text-white'}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="תפריט"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-4 pb-6 pt-2 shadow-xl">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center py-3 text-base font-medium border-b border-gray-50 last:border-0 transition-colors ${
                pathname === link.href ? 'text-primary' : 'text-text-primary hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2 mt-4 bg-gradient-to-l from-accent to-red-700 text-white px-4 py-3 rounded-xl font-semibold shadow-md"
          >
            <Phone size={18} /> {PHONE}
          </a>
        </div>
      )}
    </header>
  )
}
