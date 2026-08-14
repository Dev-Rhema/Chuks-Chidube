export default function BlogBanner({ src, alt, className = "" }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-950 via-navy-900 to-gold-600/60 ${className}`}
      role="img"
      aria-label={alt}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-10 w-10 text-cream-50/40"
      >
        <path
          d="M4 16.5 8.5 12a2 2 0 0 1 2.8 0L16 16.5M14 14l1.5-1.5a2 2 0 0 1 2.8 0L20 14.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
