import { site, contact, footer } from "../data/content";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/evangchukschidube?igsh=NWpuOTZ3NTZ3bXhy",
    icon: IconInstagram,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@praise.channeltv?si=_RdLHXGFiSoTJRMv",
    icon: IconYoutube,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${site.phone.replace(/[^\d+]/g, "")}`,
    icon: IconWhatsApp,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@chukschidube?_r=1&_t=ZS-98lxzH5rxvJ",
    icon: IconTikTok,
  },
];

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
              {contact.heading}
            </h2>
            <p className="mt-4 max-w-md text-sm text-cream-100/60">
              {contact.body}
            </p>

            <div className="mt-8 flex flex-col gap-3 text-sm text-cream-100">
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-3 hover:text-gold-400"
              >
                <IconPhone />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 hover:text-gold-400"
              >
                <IconMail />
                {site.email}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-cream-50/10 bg-navy-900 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
              Follow & Connect
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-cream-50/10 bg-navy-950/70 p-4 transition-colors hover:border-gold-400/50 hover:text-gold-400"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-cream-50/10 text-gold-400">
                    <Icon />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-cream-50">
                      {label}
                    </span>
                    <span className="mt-1 block text-xs text-cream-100/60">
                      Open profile
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-cream-50/10 pt-10 text-center">
          <p className="font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
            {site.name}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream-100/50">
            {footer.tagline}
          </p>

          <p className="mt-6 text-xs text-cream-100/40">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

function IconPhone() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconYoutube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 7.5a3.3 3.3 0 0 0-.86-2.35A2.9 2.9 0 0 0 20.8 4c-1.5-.1-7.3-.1-7.3-.1s-5.8 0-7.3.1A2.9 2.9 0 0 0 3.9 5.15 3.3 3.3 0 0 0 3 7.5v9a3.3 3.3 0 0 0 .86 2.35A2.9 2.9 0 0 0 5.2 20c1.5.1 7.3.1 7.3.1s5.8 0 7.3-.1a2.9 2.9 0 0 0 1.3-.65A3.3 3.3 0 0 0 23 16.5zM10 15.5v-7l6 3.5z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2A9.96 9.96 0 0 0 2.08 11.97c0 1.74.45 3.45 1.32 4.95L2 22l5.28-1.38a9.95 9.95 0 0 0 4.76 1.16h.01A9.96 9.96 0 0 0 22 12.03 9.96 9.96 0 0 0 12.04 2Zm5.24 14.32c-.23.64-1.32 1.2-1.83 1.28-.49.08-1.1.12-1.78-.13-.41-.14-.95-.35-1.64-.69-.77-.34-1.53-.75-2.25-1.28a8.4 8.4 0 0 1-1.53-1.38 4.4 4.4 0 0 1-.66-.8c-.18-.28-.03-.56.31-.73.2-.1.43-.27.65-.4.18-.1.37-.21.49-.28.19-.09.31-.15.46-.26.13-.09.27-.25.35-.43.11-.24.06-.44-.04-.6-.11-.16-.47-.96-.65-1.3-.15-.29-.31-.25-.46-.25-.13 0-.28-.01-.43-.01-.15 0-.34.03-.54.17-.2.14-.76.74-.76 1.8 0 1.06.8 2.13 1.01 2.28.2.16 1.74 2.64 4.23 3.64.3.11.53.17.72.22.3.08.57.07.78.04.25-.03.77-.3 1-.6.23-.29.31-.54.43-.87.13-.31.25-.27.48-.16.24.1.89.42 1.04.49.14.06.24.09.28.14.05.06.05.24-.02.38Z" />
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.5 2h2.4a5.8 5.8 0 0 0 5.1 5.8v2.6a8.5 8.5 0 0 1-5.1-1.6v7.3a6.8 6.8 0 1 1-6.8-6.8c.3 0 .6 0 .9.1v2.7a4.1 4.1 0 1 0 2.2 3.7V2Z" />
    </svg>
  );
}
