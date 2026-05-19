'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
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
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/90 shadow-sm' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo (RTL: right side) */}
        <Link href="/" className="font-bold text-2xl text-primary">
          בן-טק
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                pathname === link.href ? 'text-accent border-b-2 border-accent pb-0.5' : 'text-text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href={PHONE_HREF}
          className="hidden lg:flex items-center gap-2 bg-accent hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          <Phone size={16} />
          {PHONE}
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-text-primary"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="תפריט"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 text-base font-medium border-b border-gray-50 ${
                pathname === link.href ? 'text-accent' : 'text-text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href={PHONE_HREF} className="flex items-center gap-2 mt-4 bg-accent text-white px-4 py-3 rounded-xl font-semibold justify-center">
            <Phone size={18} /> {PHONE}
          </a>
        </div>
      )}
    </header>
  )
}
