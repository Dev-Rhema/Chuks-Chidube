import { site, workHelps } from "../data/content";
import PlaceholderImage from "./ui/PlaceholderImage";

export default function WorkHelps() {
  return (
    <section className="bg-cream-50 px-6 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-cream-200">
        <div className="px-6 py-10 text-center sm:px-12">
          <h3 className="font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
            {workHelps.heading}
          </h3>

          <ul className="mx-auto mt-8 flex max-w-md flex-col gap-4 text-left">
            {workHelps.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold-500 text-navy-950">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm text-ink-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative px-6 pb-6 sm:px-12">
          <PlaceholderImage label="Portrait" className="aspect-16/7 w-full" />
        </div>
      </div>
    </section>
  );
}
