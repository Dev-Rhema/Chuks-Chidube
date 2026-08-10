import { site, about } from "../data/content";
import PlaceholderImage from "./ui/PlaceholderImage";

export default function About() {
  return (
    <section id="about" className="bg-cream-100 py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            {about.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
            {about.heading}
          </h2>
          <p className="mt-5 max-w-lg text-base text-ink-600">{about.body}</p>
        </div>

        <div className="relative grid grid-cols-5 gap-4">
          <PlaceholderImage
            label="About photo"
            className="col-span-3 aspect-3/4"
          />
          <div className="col-span-2 flex flex-col gap-3">
            <PlaceholderImage label={site.name} className="aspect-3/4" />
            <div className="rounded-2xl bg-navy-950 p-4 text-center">
              <p className="text-xs font-medium leading-snug text-cream-100">
                {about.cardTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
