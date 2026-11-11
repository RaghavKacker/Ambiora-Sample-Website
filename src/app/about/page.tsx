import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About AMBIORA — Technology Festival | NMIMS Shirpur",
  description:
    "Discover the philosophy, vision, and campus setting of AMBIORA — the annual technology festival at NMIMS MPSTME Shirpur Campus.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto w-full">
        {/* Editorial Hero Header */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
            <span className="text-[10px] md:text-xs tracking-[0.25em] text-text-muted uppercase font-medium">
              Festival Ethos & Story
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-text-primary leading-tight mb-5 uppercase">
            Convergence of Rigor & Imagination
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            AMBIORA is the premier annual technology festival at NMIMS MPSTME Shirpur Campus — an arena where scientific precision meets boundless creative vision.
          </p>
        </div>

        {/* ─── 1. WHAT IS AMBIORA? ────────────────────────────────────────── */}
        <section className="mb-20">
          <div className="p-8 sm:p-14 rounded-3xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl relative overflow-hidden">
            <span className="text-[10px] font-mono tracking-[0.25em] text-text-muted uppercase mb-3 block">
              01 // Origin & Identity
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-normal text-text-primary mb-6">
              What is AMBIORA?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl">
              <p>
                Derived from the concepts of ambient exploration, orbital geometry, and cosmic curiosity, AMBIORA was established to transcend conventional collegiate symposiums. It is engineered as a multi-disciplinary crucible where theory converts into working architecture.
              </p>
              <p>
                Over three intensive days, AMBIORA brings together university students across five distinct technological frontiers: distributed system relays, quantitative financial market simulation, high-speed aerial robotics, generative artificial intelligence, and digital cyber forensics.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1">03</p>
                <p className="text-[10px] font-mono tracking-widest text-text-muted uppercase">Festival Days</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1">05</p>
                <p className="text-[10px] font-mono tracking-widest text-text-muted uppercase">Flagship Arenas</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</p>
                <p className="text-[10px] font-mono tracking-widest text-text-muted uppercase">Open Sandboxing</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1">01</p>
                <p className="text-[10px] font-mono tracking-widest text-text-muted uppercase">Shared Horizon</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. FESTIVAL VISION & 3. TECH & INNOVATION ─────────────────── */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-text-muted uppercase mb-3 block">
                02 // Guiding Philosophy
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4">
                Festival Vision
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                We believe that modern engineering breakthroughs rarely occur in isolated silos. By placing quantitative traders beside hardware roboticists, and machine learning researchers beside cyber forensic investigators, AMBIORA fosters cross-disciplinary synthesis.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Rather than superficial pitch presentations, our challenges prioritize tangible deliverables: passing automated test suites, surviving simulated market crashes, clocking sub-millisecond gate vectors, and decrypting memory dumps.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-text-muted">
              CORE PRINCIPLE: EXECUTION PRECEDES PROSE
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-text-muted uppercase mb-3 block">
                03 // Technical Horizon
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4">
                Technology & Innovation
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                The competition formats mirror production-grade industry constraints. Participants interact with modern toolchains, modular version control schemas, WebSocket matching engines, and high-frequency flight controllers.
              </p>
              <ul className="space-y-2.5 text-xs text-text-secondary">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  <span>Modular Code Continuity & Automated Testing (HANDOFF)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  <span>Synthetic Liquidity & High-Frequency Matching (TRADE RUSH)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  <span>3-Axis Vector Flight & Gyro Dynamics (DRONE-O-MANIA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  <span>Adversarial Prompting & Latent Exploration (PROMPT WARS)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  <span>Memory Volatility & Cryptographic Triage (CASE.exe)</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-text-muted">
              STANDARDS: STRICT REPRODUCIBILITY & ZERO FLUFF
            </div>
          </div>
        </section>

        {/* ─── 4. STUDENT PARTICIPATION & 5. NMIMS SHIRPUR CAMPUS ────────── */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl">
            <span className="text-[10px] font-mono tracking-[0.25em] text-text-muted uppercase mb-3 block">
              04 // Collegiate Network
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4">
              Student Participation
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              AMBIORA is powered by student initiative and driven by peer collaboration. Delegates represent engineering schools, technology institutes, and management faculties across the country.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Every round is judged through transparent deterministic scoring, automated test harnesses, or blind academic jury review, ensuring a purely meritocratic playing field.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl">
            <span className="text-[10px] font-mono tracking-[0.25em] text-text-muted uppercase mb-3 block">
              05 // Campus Infrastructure
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4">
              NMIMS Shirpur Campus
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Set within the Mukesh Patel Technology Park in Shirpur, Maharashtra, the campus offers an environment tailored for deep technical immersion.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              With high-performance computing clusters, dedicated aeronautical flight zones, digital signal laboratories, and modern amphitheatres, the campus provides the physical foundation for the festival.
            </p>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs font-mono text-text-muted">
              LOCATION: Mukesh Patel Technology Park, Babulde, Shirpur, Dhule, Maharashtra 425405
            </div>
          </div>
        </section>

        {/* ─── Bottom Navigation CTA ─────────────────────────────────────── */}
        <section className="p-10 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-b from-[#141414] to-[#0a0a0a] text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Be Part of AMBIORA 2026
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto leading-relaxed mb-8">
            Explore the five flagship challenges or review the detailed festival itinerary.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/events"
              className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all active:scale-95"
            >
              Explore Events
            </Link>
            <Link
              href="/schedule"
              className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition-all active:scale-95"
            >
              View Schedule
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
