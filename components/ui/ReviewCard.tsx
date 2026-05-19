import { Star } from 'lucide-react'
import type { Review } from '@/data/reviews'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-surface rounded-2xl shadow-sm p-6 flex flex-col gap-3">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-text-primary leading-relaxed line-clamp-3">"{review.quote}"</p>
      <div className="mt-auto pt-2 border-t border-gray-100">
        <p className="font-semibold text-text-primary text-sm">{review.name}</p>
        <p className="text-text-muted text-xs">{review.city}</p>
      </div>
    </div>
  )
}
