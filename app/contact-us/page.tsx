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
      <section className="bg-primary py-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">צור קשר</h1>
        <p className="text-white/75 text-lg mt-3">נשמח לענות על כל שאלה ולהכין לך הצעת מחיר</p>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <AnimateOnScroll>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">שלח לנו הודעה</h2>
              <p className="text-text-muted mb-6">נחזור אליך בהקדם האפשרי</p>
              <ContactForm />
            </div>
          </AnimateOnScroll>

          {/* Contact info */}
          <AnimateOnScroll delay={0.15}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">פרטי התקשרות</h2>
              <p className="text-text-muted mb-6">זמינים לשירותך בכל עת</p>
              <div className="flex flex-col gap-4">
                {contactItems.map(({ icon: Icon, label, value, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 bg-surface rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
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
