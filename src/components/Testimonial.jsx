import { testimonial } from "../data/content";
import SectionLabel from "./ui/SectionLabel";

export default function Testimonial() {
  return (
    <section className="bg-cream-100 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <SectionLabel>{testimonial.eyebrow}</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
            {testimonial.heading}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonial.items.map((item) => (
            <div
              key={item.author}
              className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-sm"
            >
              <p className="font-display text-xl font-medium leading-relaxed text-navy-950">
                “{item.quote}”
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-navy-950">
                  {item.author}
                </p>
                <p className="text-sm text-ink-600">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
