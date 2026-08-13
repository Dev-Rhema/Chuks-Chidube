import { keynotesSection } from "../data/content";
import SectionLabel from "./ui/SectionLabel";

export default function Keynotes() {
  return (
    <section id="keynotes" className="bg-cream-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <SectionLabel>{keynotesSection.eyebrow}</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
            {keynotesSection.heading}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {keynotesSection.talks.map((talk) => (
            <div
              key={talk.title}
              className="overflow-hidden rounded-3xl border border-navy-900/10 bg-cream-100 p-3"
            >
              <div className="aspect-video overflow-hidden rounded-2xl bg-navy-900/10">
                {talk.iframe ? (
                  <iframe
                    src={talk.iframe}
                    title={talk.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-6 text-center text-sm text-ink-600">
                    {talk.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={keynotesSection.viewMoreHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
          >
            {keynotesSection.viewMoreLabel} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
