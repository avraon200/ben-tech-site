import { Star } from 'lucide-react'
import type { Review } from '@/data/reviews'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="group premium-card rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden h-full">
      {/* Top accent bar */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-l from-cyan via-primary to-accent rounded-t-2xl" />

      {/* Decorative corner glow */}
      <div className="absolute -top-6 -left-6 w-20 h-20 bg-cyan/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Stars */}
      <div className="flex gap-1 mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <div className="relative flex-1">
        <span className="absolute -top-1 -right-1 text-5xl font-serif text-primary/10 leading-none select-none">&ldquo;</span>
        <p className="text-text-primary leading-relaxed line-clamp-4 text-sm relative z-10 pt-3">
          {review.quote}
        </p>
      </div>

      {/* Author */}
      <div className="pt-3 border-t border-gray-100 group-hover:border-cyan/20 transition-colors flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan to-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-glow-sm">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-text-primary text-sm">{review.name}</p>
          <p className="text-text-muted text-xs">{review.city}</p>
        </div>
      </div>
    </div>
  )
}
