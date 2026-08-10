import { useState } from 'react'
import { framework } from '../data/content'

export default function Framework() {
  const [openIndex, setOpenIndex] = useState(1)

  return (
    <section className="bg-cream-50 py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-start lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">{framework.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">{framework.heading}</h2>
          <p className="mt-4 text-sm text-ink-600">{framework.subheading}</p>
          <a
            href="#keynotes"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy-950 underline decoration-gold-500/50 underline-offset-4 hover:decoration-gold-500"
          >
            {framework.linkLabel} ↗
          </a>
        </div>

        <div className="divide-y divide-navy-900/10 border-y border-navy-900/10">
          {framework.steps.map((step, index) => {
            const isOpen = openIndex === index
            return (
              <div key={step.number}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-sm font-semibold text-gold-600">{step.number}.</span>
                    <span className="font-display text-lg font-medium text-navy-950">{step.title}</span>
                  </span>
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-navy-900/15 text-navy-950">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && <p className="max-w-md pb-5 text-sm text-ink-600">{step.body}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
