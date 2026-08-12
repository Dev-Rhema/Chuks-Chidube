import { site, hero } from "../data/content";
import PlaceholderImage from "./ui/PlaceholderImage";
import heroImg from "../assets/imgs/heroImg.png";

export default function Hero() {
  return (
    <section id="top" className="bg-navy-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-24">
        <div className="w-full max-w-2xl sm:w-auto">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-400">
            {hero.eyebrow}
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.05] text-cream-50 sm:text-6xl lg:text-7xl">
            {site.firstName}
            <br />
            <span className="text-gold-400">{site.lastName}</span>
          </h1>
          <p className="mt-6 max-w-md text-lg font-medium text-cream-100/90">
            {hero.tagline}
          </p>
          <p className="mt-4 max-w-md text-base text-cream-100/60">
            {hero.description}
          </p>
        </div>

        <div className="relative col-span-1 w-11/12 max-w-[420px] sm:max-w-[480px] md:max-w-[320px] lg:max-w-[360px] mx-auto">
          <img
            src={heroImg}
            alt=""
            loading="eager"
            fetchPriority="high"
            className="w-full h-auto rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
