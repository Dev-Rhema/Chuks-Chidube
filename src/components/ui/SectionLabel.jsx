export default function SectionLabel({ children, tone = 'dark', className = '' }) {
  const color = tone === 'light' ? 'text-gold-300' : 'text-gold-600'
  const line = tone === 'light' ? 'bg-gold-300/40' : 'bg-gold-600/40'

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className={`h-px w-8 ${line}`} />
      <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${color}`}>{children}</span>
      <span className={`h-px w-8 ${line}`} />
    </div>
  )
}
