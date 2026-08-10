import { visionStatement } from '../data/content'
import SectionLabel from './ui/SectionLabel'

export default function VisionStatement() {
  return (
    <section className="bg-cream-50 py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionLabel>{visionStatement.eyebrow}</SectionLabel>
        <h2 className="mt-4 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
          {visionStatement.heading}
        </h2>
        <p className="mt-4 text-base text-ink-600">{visionStatement.body}</p>
      </div>
    </section>
  )
}
