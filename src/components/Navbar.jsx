import { useState } from "react";
import { site, nav } from "../data/content";
import Button from "./ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const contactCta = "Contact";

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-cream-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#top"
          className="font-display text-xl font-semibold text-navy-950"
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const isRouteLink = item.href.startsWith("#/");

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => {
                  if (!isRouteLink) {
                    event.preventDefault();
                    const targetId = item.href.replace(/^#/, "");
                    const scrollToSection = () => {
                      const target = document.getElementById(targetId);
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    };

                    if (window.location.hash.startsWith("#/blog")) {
                      window.location.hash = "#/";
                      setTimeout(scrollToSection, 150);
                    } else {
                      scrollToSection();
                    }
                  }
                }}
                className="text-sm font-medium text-ink-600 transition-colors hover:text-navy-950"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <Button
          href="#contact"
          className="max-md:hidden md:inline-flex md:shrink-0"
        >
          {contactCta}
        </Button>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/15 text-navy-950 md:hidden"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-navy-950"
          />
          <nav className="absolute right-0 top-0 flex h-screen w-[80%] max-w-sm flex-col justify-between bg-navy-950 px-6 py-8 shadow-2xl">
            <div className="flex flex-col gap-2">
              <div className="mb-6 flex items-center justify-between">
                <a
                  href="#top"
                  onClick={() => setOpen(false)}
                  className="font-display text-lg font-semibold text-cream-50"
                >
                  {site.name}
                </a>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/20 text-cream-50"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>

              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-cream-100/80 transition-colors hover:bg-cream-50/10 hover:text-cream-50"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <Button
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 w-full"
            >
              {contactCta}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
