import { Phone, MessageCircle, Mail, Share2 } from 'lucide-react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import ContactForm from '@/components/ui/ContactForm'
import { PHONE, PHONE_HREF, WHATSAPP_HREF, EMAIL, EMAIL_HREF, FACEBOOK_HREF } from '@/lib/constants'

export const metadata = { title: 'צור קשר | בן-טק' }

const contactItems = [
  { icon: Phone, label: 'טלפון', value: PHONE, href: PHONE_HREF, color: 'bg-blue-50 text-primary' },
  { icon: MessageCircle, label: 'וואטסאפ', value: 'שלח הודעה', href: WHATSAPP_HREF, color: 'bg-green-50 text-green-600' },
  { icon: Mail, label: 'אימייל', value: EMAIL, href: EMAIL_HREF, color: 'bg-red-50 text-accent' },
  { icon: Share2, label: 'פייסבוק', value: 'עמוד הפייסבוק שלנו', href: FACEBOOK_HREF, color: 'bg-indigo-50 text-indigo-600' },
]

export default function ContactPage() {
  return (
    <>
      <section className="relative py-28 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary-dark to-primary" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 gradient-text-white">צור קשר</h1>
          <p className="text-white/60 text-xl">נשמח לענות על כל שאלה ולהכין לך הצעת מחיר</p>
        </div>
      </section>

      <section className="py-24 px-4 bg-background grid-pattern-dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <AnimateOnScroll>
            <div>
              <h2 className="text-2xl font-bold gradient-text mb-2">שלח לנו הודעה</h2>
              <p className="text-text-muted mb-6">נחזור אליך בהקדם האפשרי</p>
              <ContactForm />
            </div>
          </AnimateOnScroll>

          {/* Contact info */}
          <AnimateOnScroll delay={0.15}>
            <div>
              <h2 className="text-2xl font-bold gradient-text mb-2">פרטי התקשרות</h2>
              <p className="text-text-muted mb-6">זמינים לשירותך בכל עת</p>
              <div className="flex flex-col gap-4">
                {contactItems.map(({ icon: Icon, label, value, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 group hover:-translate-y-0.5"
                  >
                    <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">{label}</p>
                      <p className="font-semibold text-text-primary">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
