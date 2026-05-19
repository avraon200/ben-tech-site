'use client'
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import AnimateOnScroll from './AnimateOnScroll'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80', alt: 'מצלמת אבטחה מותקנת' },
  { src: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80', alt: 'לוח אזעקה' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'מערכת בית חכם' },
  { src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80', alt: 'תשתית רשת' },
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', alt: 'כניסה מאובטחת לבניין' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'אפליקציית שליטה' },
  { src: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80', alt: 'מצלמה כיפה' },
  { src: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80', alt: 'לוח מקשים חכם' },
  { src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80', alt: 'ארון תקשורת' },
]

export default function GalleryGrid() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((img, i) => (
          <AnimateOnScroll key={img.src + i} delay={(i % 3) * 0.1}>
            <button
              onClick={() => { setIndex(i); setOpen(true) }}
              className="relative w-full aspect-video rounded-2xl overflow-hidden group block"
              aria-label={img.alt}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/30 transition-colors" />
            </button>
          </AnimateOnScroll>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={galleryImages.map(img => ({ src: img.src, alt: img.alt }))}
      />
    </>
  )
}
