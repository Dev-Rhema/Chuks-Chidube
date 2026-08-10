import { workshopsSection } from "../data/content";
import Button from "./ui/Button";
import PlaceholderImage from "./ui/PlaceholderImage";
import SectionLabel from "./ui/SectionLabel";

export default function Workshops() {
  return (
    <section id="workshops" className="bg-cream-100 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <SectionLabel>{workshopsSection.eyebrow}</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
            {workshopsSection.heading}
          </h2>
        </div>

        <div className="mt-10 grid justify-center gap-6">
          {workshopsSection.programs.map((program) => (
            <div
              key={program.title}
              className="overflow-hidden rounded-3xl bg-cream-50"
            >
              <PlaceholderImage
                label="Workshop photo"
                className="aspect-16/10 w-full"
                rounded="rounded-none"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-navy-950">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600">
                  {program.description}
                </p>
                {program.ctaHref && (
                  <Button
                    href={program.ctaHref}
                    target="_blank"
                    rel="noreferrer"
                    variant="outline"
                    className="mt-4"
                  >
                    {program.ctaLabel || "Learn More"}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
