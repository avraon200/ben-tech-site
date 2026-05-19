'use client'
import { useState } from 'react'
import { EMAIL_HREF } from '@/lib/constants'

interface FormState {
  name: string
  phone: string
  email: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', message: '' })
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  function validate(): string | null {
    if (!form.name.trim()) return 'נא להזין שם מלא'
    if (!form.phone.trim() || !/^0\d{8,9}$/.test(form.phone.replace(/[-\s]/g, ''))) return 'נא להזין מספר טלפון תקין'
    if (!form.message.trim()) return 'נא להזין הודעה'
    return null
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const err = validate()
    if (err) { setError(err); return }
    setError(null)
    const subject = encodeURIComponent(`פנייה חדשה מהאתר — ${form.name}`)
    const body = encodeURIComponent(`שם: ${form.name}\nטלפון: ${form.phone}\nאימייל: ${form.email}\n\n${form.message}`)
    window.location.href = `${EMAIL_HREF}?subject=${subject}&body=${body}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <p className="text-green-700 font-semibold text-lg">תודה! פנייתך התקבלה, ניצור איתך קשר בקרוב.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">שם מלא *</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="ישראל ישראלי"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1">טלפון *</label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="050-0000000"
          dir="ltr"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">אימייל</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="israel@example.com"
          dir="ltr"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">הודעה *</label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          placeholder="ספר לנו על הצורך שלך..."
        />
      </div>
      {error && <p className="text-accent text-sm font-medium">{error}</p>}
      <button
        type="submit"
        className="w-full bg-accent hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors text-lg"
      >
        שלח פנייה
      </button>
    </form>
  )
}
