import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sponsors & Industry Partners — AMBIORA 2026 | NMIMS Shirpur",
  description:
    "Explore the corporate ecosystem, technology partners, and institutional sponsors supporting AMBIORA 2026 at NMIMS Shirpur Campus.",
};

// Neutral minimalist SVG emblem for partner placeholders
function NeutralLogoPlaceholder({
  symbol,
  label,
  tier,
}: {
  symbol: string;
  label: string;
  tier: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 sm:p-8">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center font-mono text-sm sm:text-base font-bold text-white/70 mb-4 tracking-widest shadow-inner">
        {symbol}
      </div>
      <span className="text-xs sm:text-sm font-semibold tracking-wider text-text-primary uppercase mb-1">
        {label}
      </span>
      <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase">
        {tier}
      </span>
    </div>
  );
}

export default function SponsorsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto w-full">
        {/* Editorial Header */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
            <span className="text-[10px] md:text-xs tracking-[0.25em] text-text-muted uppercase font-medium">
              Ecosystem & Alliances
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-text-primary leading-tight mb-5 uppercase">
            Sponsors & Partners
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Collaborating with forward-thinking technology organizations, research initiatives, and corporate leaders to empower collegiate innovation.
          </p>
        </div>

        {/* ─── 1. TITLE SPONSOR (SPOTLIGHT) ──────────────────────────────── */}
        <section className="mb-20">
          <div className="text-center mb-6">
            <span className="text-[10px] font-mono tracking-[0.3em] text-text-muted uppercase">
              Principal Ecosystem Patron
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mt-1">
              Title Sponsor
            </h2>
          </div>

          <div className="max-w-2xl mx-auto p-10 sm:p-14 rounded-3xl border border-white/20 bg-gradient-to-b from-[#141414] to-[#0d0d0d] text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-radial-gradient from-white/[0.04] to-transparent pointer-events-none" />
            <div className="w-20 h-20 rounded-3xl border border-white/20 bg-white/[0.04] flex items-center justify-center font-mono text-2xl font-bold text-white mx-auto mb-6 tracking-widest shadow-2xl group-hover:scale-105 transition-transform duration-500">
              Δ·Ω
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-wider text-white uppercase mb-2">
              Title Sponsor
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto leading-relaxed mb-6">
              Official presenting organization backing all festival tracks, keynote sessions, and grand championship trophies.
            </p>
            <span className="inline-block text-[10px] font-mono tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              EXCLUSIVE PRINCIPAL PATRON TIER
            </span>
          </div>
        </section>

        {/* ─── 2. POWERED BY PARTNERS ────────────────────────────────────── */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono tracking-[0.3em] text-text-muted uppercase">
              Infrastructure & Compute
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mt-1">
              Powered By
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-3xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl hover:border-white/20 transition-all duration-300">
              <NeutralLogoPlaceholder
                symbol="PX-1"
                label="Powered By Partner A"
                tier="Cloud & Compute Infrastructure"
              />
            </div>
            <div className="rounded-3xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl hover:border-white/20 transition-all duration-300">
              <NeutralLogoPlaceholder
                symbol="PX-2"
                label="Powered By Partner B"
                tier="Network & Systems Engineering"
              />
            </div>
          </div>
        </section>

        {/* ─── 3. TECHNOLOGY PARTNERS ────────────────────────────────────── */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono tracking-[0.3em] text-text-muted uppercase">
              Domain Technology Providers
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mt-1">
              Technology Partners
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="rounded-2xl border border-white/[0.06] bg-[#101010]/70 hover:border-white/20 transition-all duration-300">
              <NeutralLogoPlaceholder
                symbol="AI"
                label="Neural Stack"
                tier="Inference Sandbox"
              />
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-[#101010]/70 hover:border-white/20 transition-all duration-300">
              <NeutralLogoPlaceholder
                symbol="QT"
                label="Quant Terminal"
                tier="Market Simulator"
              />
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-[#101010]/70 hover:border-white/20 transition-all duration-300">
              <NeutralLogoPlaceholder
                symbol="AV"
                label="Aero Vector"
                tier="Avionics & Telemetry"
              />
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-[#101010]/70 hover:border-white/20 transition-all duration-300">
              <NeutralLogoPlaceholder
                symbol="SC"
                label="Cyber Shield"
                tier="Forensic Sandbox"
              />
            </div>
          </div>
        </section>

        {/* ─── 4. ASSOCIATE SPONSORS ─────────────────────────────────────── */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono tracking-[0.3em] text-text-muted uppercase">
              Corporate & Industry Network
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mt-1">
              Associate Sponsors
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {["ASSOC-01", "ASSOC-02", "ASSOC-03", "ASSOC-04", "ASSOC-05", "ASSOC-06"].map(
              (id, idx) => (
                <div
                  key={id}
                  className="p-5 rounded-xl border border-white/[0.05] bg-white/[0.02] text-center hover:bg-white/[0.04] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-white/50 mx-auto mb-2">
                    0{idx + 1}
                  </div>
                  <span className="block text-xs font-medium text-text-primary truncate">
                    Associate Partner
                  </span>
                  <span className="text-[9px] font-mono text-text-muted uppercase">Tier IV</span>
                </div>
              )
            )}
          </div>
        </section>

        {/* ─── 5. SUPPORTING PARTNERS & CHAPTERS ─────────────────────────── */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono tracking-[0.3em] text-text-muted uppercase">
              Academic & Community Chapters
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mt-1">
              Supporting Partners
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {["Robotics Club", "Coding Society", "FinTech Forum", "Cyber Cell"].map((chapter) => (
              <div
                key={chapter}
                className="p-4 rounded-xl border border-white/[0.05] bg-[#0c0c0c] text-center"
              >
                <span className="block text-xs font-semibold text-text-primary mb-0.5">
                  {chapter}
                </span>
                <span className="text-[10px] font-mono text-text-muted uppercase">
                  Student Chapter
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PARTNERSHIP PROSPECTUS CALL-TO-ACTION ─────────────────────── */}
        <section className="p-10 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-b from-[#141414] to-[#0a0a0a] text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/[0.05] text-[10px] font-mono tracking-[0.2em] uppercase text-white mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>Corporate Outreach Active</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Partner with AMBIORA 2026
            </h2>

            <p className="text-xs sm:text-sm text-text-secondary max-w-lg mx-auto leading-relaxed mb-8">
              Connect your brand with over 2,000+ top collegiate engineers, researchers, and technical leaders. Custom brand activations, hiring pipelines, and challenge branding available.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all active:scale-95 shadow-xl"
              >
                Connect with Outreach Team
              </Link>
              <a
                href="mailto:partnerships@ambiora.org"
                className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition-all active:scale-95"
              >
                partnerships@ambiora.org
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
