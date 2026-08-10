const variants = {
  gold: 'bg-gold-500 text-navy-950 hover:bg-gold-400',
  outline: 'border border-navy-900/15 text-navy-900 hover:bg-navy-900/5',
  ghost: 'text-navy-900 hover:text-gold-600',
}

export default function Button({ as: Tag = 'a', variant = 'gold', className = '', children, ...props }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
