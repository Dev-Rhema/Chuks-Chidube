import { site, about } from "../data/content";
import about1 from "../assets/imgs/about1.jpg";
import about2 from "../assets/imgs/about2.jpg";

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

        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-5">
          <img
            src={about1}
            alt="About 1"
            className="col-span-1 w-full rounded-2xl object-cover md:col-span-3"
          />

          <div className="col-span-1 flex flex-col gap-3 md:col-span-2">
            <img
              src={about2}
              alt="About 2"
              className="w-full rounded-2xl object-cover"
            />
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
