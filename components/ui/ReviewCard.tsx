import { Star } from 'lucide-react'
import type { Review } from '@/data/reviews'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-l from-accent via-primary to-blue-400 rounded-t-2xl" />
      <div className="absolute top-3 left-4 text-6xl font-serif text-primary/8 leading-none select-none">&ldquo;</div>
      <div className="flex gap-1 mt-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-text-primary leading-relaxed line-clamp-3 text-sm relative z-10">
        {review.quote}
      </p>
      <div className="mt-auto pt-3 border-t border-gray-100 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
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
