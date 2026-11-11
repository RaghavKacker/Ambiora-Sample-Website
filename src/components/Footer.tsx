"use client";

import Link from "next/link";
import Image from "next/image";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Events Directory", href: "/events" },
  { label: "Festival Schedule", href: "/schedule" },
  { label: "About AMBIORA", href: "/about" },
  { label: "Sponsors & Partners", href: "/sponsors" },
  { label: "Contact & Reach", href: "/contact" },
];

const flagshipEvents = [
  { name: "HANDOFF", category: "Technology", href: "/events/handoff" },
  { name: "TRADE RUSH", category: "Business", href: "/events/trade-rush" },
  { name: "DRONE-O-MANIA", category: "Robotics", href: "/events/drone-o-mania" },
  { name: "PROMPT WARS", category: "AI", href: "/events/prompt-wars" },
  { name: "CASE.exe", category: "Mystery & Logic", href: "/events/case-exe" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X / Twitter", href: "https://x.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
];

export default function Footer() {
  const year = "2026";

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#060606] text-text-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 mb-16">
          {/* Column 1 & 2: Brand Identity & Location */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/ambiora-logo-transparent.png"
                  alt="AMBIORA"
                  fill
                  sizes="32px"
                  className="object-contain brightness-100 group-hover:brightness-125 transition-all duration-300"
                />
              </div>
              <span className="text-sm font-semibold tracking-[0.22em] text-white">
                AMBIORA
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6 max-w-sm">
              The flagship annual technology festival at NMIMS MPSTME Shirpur Campus. A national convergence of algorithmic engineering, autonomous robotics, quantitative finance, and generative intelligence.
            </p>

            <div className="space-y-1 text-xs text-text-muted font-mono">
              <p>Mukesh Patel Technology Park, Babulde</p>
              <p>Shirpur, Dhule, Maharashtra 425405</p>
              <p className="text-text-secondary pt-1">contact@ambiora.org</p>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <p className="text-[10px] font-mono tracking-[0.25em] text-text-muted uppercase mb-5 font-semibold">
              Festival Pages
            </p>
            <ul className="space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-text-secondary hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Flagship Challenges */}
          <div>
            <p className="text-[10px] font-mono tracking-[0.25em] text-text-muted uppercase mb-5 font-semibold">
              Flagship Challenges
            </p>
            <ul className="space-y-2.5">
              {flagshipEvents.map((event) => (
                <li key={event.href}>
                  <Link
                    href={event.href}
                    className="group inline-flex items-center justify-between w-full text-xs text-text-secondary hover:text-white transition-colors duration-200"
                  >
                    <span>{event.name}</span>
                    <span className="text-[10px] font-mono text-text-muted group-hover:text-text-secondary">
                      {event.category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Social Channels & External */}
          <div>
            <p className="text-[10px] font-mono tracking-[0.25em] text-text-muted uppercase mb-5 font-semibold">
              Social Ecosystem
            </p>
            <ul className="space-y-2.5 mb-8">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-text-secondary hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    <span>{s.label}</span>
                    <span className="text-[10px] text-text-muted font-mono">↗</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <span className="block text-[10px] font-mono text-text-muted uppercase mb-1">
                Phase Status
              </span>
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Active Registration
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <p>© {year} AMBIORA · NMIMS MPSTME Shirpur Campus. All rights reserved.</p>
          <p className="text-text-secondary">A festival of technology, innovation and imagination.</p>
        </div>
      </div>
    </footer>
  );
}
