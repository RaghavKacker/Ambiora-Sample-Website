"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    heading: "Festival",
    links: [
      { label: "Events", href: "/events" },
      { label: "Schedule", href: "/schedule" },
      { label: "Sponsors", href: "/sponsors" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Social",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

export default function Footer() {
  const year = "2026";

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-7 h-7">
                <Image
                  src="/images/ambiora-logo-transparent.png"
                  alt="AMBIORA"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-semibold tracking-[0.22em] text-text-primary/90">
                AMBIORA
              </span>
            </Link>
            <p className="text-xs text-text-muted leading-relaxed max-w-sm">
              The annual technology festival at NMIMS Shirpur Campus.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <p className="text-[10px] tracking-[0.25em] text-text-muted uppercase mb-4">
                {group.heading}
              </p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-text-secondary hover:text-text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] md:text-xs text-text-muted tracking-wide">
            © {year} AMBIORA · NMIMS Shirpur Campus
          </p>
          <p className="text-[10px] md:text-xs text-text-muted tracking-wide">
            A festival of technology, innovation and imagination.
          </p>
        </div>
      </div>
    </footer>
  );
}
