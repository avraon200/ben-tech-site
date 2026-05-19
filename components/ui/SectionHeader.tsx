interface SectionHeaderProps {
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeader({ title, subtitle, center = true }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : 'text-right'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">{title}</h2>
      <div className={`h-1 w-16 bg-accent rounded ${center ? 'mx-auto' : 'mr-0'}`} />
      {subtitle && <p className="mt-4 text-text-muted text-lg">{subtitle}</p>}
    </div>
  )
}
