import { quote } from '../data/content'

export default function QuoteSection() {
  return (
    <section className="bg-cream-50 pt-16 lg:pt-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-2xl font-medium leading-snug text-navy-950 sm:text-3xl">
          {quote.line1}
          <br />
          {quote.line2}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-ink-600">{quote.sub}</p>

        <div className="mx-auto mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/15 text-navy-950">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 4v16m0 0-6-6m6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  )
}
