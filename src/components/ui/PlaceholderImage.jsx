// A simple gray placeholder block used everywhere a real photo will
// eventually go. Swap any <PlaceholderImage /> for a real <img> when you
// have assets. Use tone="dark" when placing one on a dark section
// background so the block and its icon stay visible.
export default function PlaceholderImage({ className = '', label, rounded = 'rounded-2xl', tone = 'light' }) {
  const isDark = tone === 'dark'

  return (
    <div
      className={`flex items-center justify-center ${isDark ? 'bg-cream-50/10' : 'bg-navy-800/10'} ${rounded} ${className}`}
      style={{
        backgroundImage: isDark
          ? 'repeating-linear-gradient(135deg, rgba(251,249,245,0.08) 0px, rgba(251,249,245,0.08) 2px, transparent 2px, transparent 12px)'
          : 'repeating-linear-gradient(135deg, rgba(26,26,31,0.06) 0px, rgba(26,26,31,0.06) 2px, transparent 2px, transparent 12px)',
      }}
    >
      <div className={`flex flex-col items-center gap-2 ${isDark ? 'text-cream-100/50' : 'text-ink-400'}`}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        {label && <span className="text-xs font-medium">{label}</span>}
      </div>
    </div>
  )
}
