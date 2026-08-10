import { book } from '../data/content'
import PlaceholderImage from './ui/PlaceholderImage'
import SectionLabel from './ui/SectionLabel'

export default function BookLaunch() {
  return (
    <section id="book" className="bg-navy-950 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <SectionLabel tone="light">{book.eyebrow}</SectionLabel>
        <h2 className="mx-auto mt-4 max-w-xl font-display text-2xl font-medium text-cream-50 sm:text-3xl">
          {book.heading}
        </h2>
        <p className="mt-3 font-display text-xl font-semibold text-gold-400">{book.title}</p>
        <p className="mx-auto mt-1 max-w-2xl text-sm text-cream-100/70">{book.subtitle}</p>
        <p className="mx-auto mt-5 max-w-2xl text-sm text-cream-100/60">{book.description}</p>

        <div className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => (
            <PlaceholderImage key={i} label="Book cover" className="aspect-3/4" rounded="rounded-xl" tone="dark" />
          ))}
        </div>
      </div>
    </section>
  )
}
