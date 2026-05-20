interface SectionHeaderProps {
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionHeader({ title, subtitle, center = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : 'text-right'}`}>
      {/* Eyebrow accent */}
      <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : 'justify-end'}`}>
        <div className="h-px w-8 bg-gradient-to-l from-cyan to-transparent opacity-70" />
        <div className="w-1.5 h-1.5 rounded-full bg-cyan" style={{ boxShadow: '0 0 8px rgba(6,182,212,0.9)' }} />
        <div className="h-px w-8 bg-gradient-to-r from-cyan to-transparent opacity-70" />
      </div>

      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight ${
        light ? 'gradient-text-white' : 'gradient-text'
      }`}>
        {title}
      </h2>

      {/* Gradient underline */}
      <div className={`h-0.5 w-24 rounded-full bg-gradient-to-l from-cyan via-primary to-accent ${
        center ? 'mx-auto' : 'mr-0'
      }`} />

      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-white/60' : 'text-text-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
