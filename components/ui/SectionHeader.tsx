interface SectionHeaderProps {
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionHeader({ title, subtitle, center = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-right'}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${light ? 'gradient-text-white' : 'gradient-text'}`}>
        {title}
      </h2>
      <div className={`h-1 w-20 rounded-full bg-gradient-to-l from-accent to-primary ${center ? 'mx-auto' : 'mr-0'}`} />
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? 'text-white/70' : 'text-text-muted'}`}>{subtitle}</p>
      )}
    </div>
  )
}
