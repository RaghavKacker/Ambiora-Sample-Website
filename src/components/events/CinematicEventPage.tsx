"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AmbioraEvent } from "@/data/events";
import CinematicHeroBackground from "./CinematicHeroBackground";
import EventRegistrationModal from "./EventRegistrationModal";
import EventDetailNavigation from "./EventDetailNavigation";
import CaseExeForensics from "./CaseExeForensics";

interface CinematicEventPageProps {
  event: AmbioraEvent;
}

export default function CinematicEventPage({ event }: CinematicEventPageProps) {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"about" | "process" | "rules" | "specs">("about");

  const scrollToDetails = () => {
    const el = document.getElementById("event-details");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-[#080808] text-text-primary overflow-x-hidden">
        {/* ─── 1. FULL-WIDTH CINEMATIC HERO SECTION ──────────────────────── */}
        <section className="relative w-full min-h-[92vh] sm:min-h-screen flex items-center justify-center px-6 md:px-12 pt-28 pb-20 overflow-hidden">
          {/* Hardware-Accelerated Dynamic Cinematic Background */}
          <CinematicHeroBackground
            image={event.image}
            imageAlt={event.imageAlt}
            theme={event.visualTheme}
          />

          {/* Hero Content Stage */}
          <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
            {/* Breadcrumb & Categorical Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center gap-3 mb-6"
            >
              <Link
                href="/events"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase text-text-muted hover:text-white bg-black/40 backdrop-blur-md border border-white/10 transition-colors"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Directory</span>
              </Link>

              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-md text-[11px] font-mono tracking-[0.2em] uppercase text-white/90">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>{event.category} · {event.index}</span>
              </span>
            </motion.div>

            {/* Event Title in Large Expressive Apple-Style Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-5 uppercase"
            >
              {event.name}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-xl md:text-2xl text-white/90 max-w-2xl font-normal leading-relaxed mb-6 text-center"
            >
              {event.tagline}
            </motion.p>

            {/* Concise Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm md:text-base text-text-secondary max-w-xl leading-relaxed mb-10 text-center"
            >
              {event.description}
            </motion.p>

            {/* Action CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center gap-4 mb-12"
            >
              <button
                onClick={() => setIsRegisterOpen(true)}
                className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all duration-300 active:scale-95 shadow-xl cursor-pointer"
              >
                Register Now
              </button>

              <button
                onClick={scrollToDetails}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/25 text-white bg-black/40 backdrop-blur-md hover:bg-white/10 hover:border-white/50 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>Explore Details</span>
                <svg className="w-3.5 h-3.5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>

            {/* Quick Hero Metadata Pill Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono text-text-muted"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>{event.datePlaceholder}</span>
              </span>
              <span className="hidden sm:inline text-white/20">/</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>{event.teamSizePlaceholder}</span>
              </span>
              <span className="hidden sm:inline text-white/20">/</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-emerald-400 font-medium">Pre-Registration Open</span>
              </span>
            </motion.div>
          </div>
        </section>

        {/* ─── 2. EVENT INFORMATION & ARCHITECTURE SECTION ────────────────── */}
        <section id="event-details" className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-20">
          {/* Key Metric Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-md">
              <span className="block text-[10px] font-mono tracking-widest text-text-muted uppercase mb-1">
                Duration
              </span>
              <span className="text-base font-semibold text-text-primary">{event.duration}</span>
            </div>

            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-md">
              <span className="block text-[10px] font-mono tracking-widest text-text-muted uppercase mb-1">
                Format
              </span>
              <span className="text-base font-semibold text-text-primary">{event.teamSizePlaceholder}</span>
            </div>

            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-md">
              <span className="block text-[10px] font-mono tracking-widest text-text-muted uppercase mb-1">
                Discipline
              </span>
              <span className="text-base font-semibold text-text-primary">{event.filterCategory}</span>
            </div>

            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-md">
              <span className="block text-[10px] font-mono tracking-widest text-text-muted uppercase mb-1">
                Prize Pool
              </span>
              <span className="text-base font-semibold text-text-secondary">{event.prizePlaceholder}</span>
            </div>
          </div>

          {/* Tabbed / Expandable Information Experience */}
          <div className="mb-16">
            {/* Segment Controls */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-white/[0.08] no-scrollbar">
              {[
                { id: "about", label: "About Event" },
                { id: "process", label: "How It Works" },
                { id: "rules", label: "Rules & Protocol" },
                { id: "specs", label: "Requirements & Eligibility" },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-white text-black shadow-lg"
                        : "bg-white/[0.03] text-text-secondary hover:text-white hover:bg-white/[0.06] border border-white/[0.06]"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab 1: About the Event */}
            {activeTab === "about" && (
              <div className="p-8 sm:p-12 rounded-3xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl space-y-6">
                <h3 className="text-xs font-mono tracking-[0.25em] text-text-muted uppercase font-semibold">
                  Event Philosophy & Context
                </h3>
                {event.aboutParagraphs.map((para, i) => (
                  <p key={i} className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    {para}
                  </p>
                ))}

                <div className="pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {event.metrics.map((m) => (
                    <div key={m.label} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="block text-[10px] font-mono tracking-wider text-text-muted uppercase mb-1">
                        {m.label}
                      </span>
                      <span className="text-sm font-semibold text-text-primary">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: How It Works */}
            {activeTab === "process" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {event.howItWorks.map((step) => (
                  <div
                    key={step.stage}
                    className="p-8 rounded-3xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs text-white/50 px-2.5 py-1 rounded bg-white/[0.04] border border-white/10">
                          {step.stage}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-white/40" />
                      </div>
                      <h4 className="text-lg font-semibold text-text-primary mb-3">{step.title}</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Rules & Regulations */}
            {activeTab === "rules" && (
              <div className="p-8 sm:p-12 rounded-3xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                  <h3 className="text-xs font-mono tracking-[0.25em] text-text-muted uppercase font-semibold">
                    Official Competition Regulations
                  </h3>
                  <span className="text-xs font-mono text-text-muted">AMBIORA PROTOCOL v2.6</span>
                </div>

                <ol className="space-y-4">
                  {event.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm text-text-secondary leading-relaxed">
                      <span className="font-mono text-xs text-white/40 mt-0.5 shrink-0 px-2 py-0.5 rounded bg-white/[0.04] border border-white/10">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 text-xs text-amber-200/90 leading-relaxed font-sans">
                  <strong>Strict Compliance Notice:</strong> Violation of sandboxing rules, unauthorized network intrusion or tampering with festival scoring mechanisms will lead to immediate disqualification and campus revocation.
                </div>
              </div>
            )}

            {/* Tab 4: Requirements & Eligibility */}
            {activeTab === "specs" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Eligibility Card */}
                <div className="p-8 rounded-3xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl">
                  <h4 className="text-xs font-mono tracking-[0.2em] text-text-muted uppercase mb-4 font-semibold">
                    Delegate Eligibility
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {event.eligibility}
                  </p>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs font-mono text-text-muted">
                    Verification: Valid university student photo ID must be presented upon on-site accreditation.
                  </div>
                </div>

                {/* Technical Requirements Card */}
                <div className="p-8 rounded-3xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl">
                  <h4 className="text-xs font-mono tracking-[0.2em] text-text-muted uppercase mb-4 font-semibold">
                    Technical Prerequisites & Gear
                  </h4>
                  <ul className="space-y-3">
                    {event.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* ─── 3. CASE.EXE SPECIAL FORENSIC DESIGN DOCKET ────────────────── */}
          {event.id === "case-exe" && event.caseSpecialData && (
            <CaseExeForensics data={event.caseSpecialData} />
          )}

          {/* ─── 4. BOTTOM REGISTRATION CALL-TO-ACTION ────────────────────── */}
          <div className="mt-16 p-8 sm:p-14 rounded-3xl border border-white/15 bg-gradient-to-b from-[#141414] to-[#0c0c0c] text-center relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl mx-auto relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/[0.05] text-[10px] font-mono tracking-[0.2em] uppercase text-white mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Registrations Open</span>
              </span>

              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
                Secure Your Spot in {event.name}
              </h2>

              <p className="text-xs sm:text-sm text-text-secondary max-w-lg mx-auto leading-relaxed mb-8">
                Entry is complimentary for registered university delegates. Instant confirmation pass generated upon prototype registration.
              </p>

              <button
                onClick={() => setIsRegisterOpen(true)}
                className="px-9 py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all duration-300 active:scale-95 shadow-2xl cursor-pointer"
              >
                Register For This Event
              </button>
            </div>
          </div>

          {/* ─── 5. INTER-EVENT NAVIGATION ─────────────────────────────────── */}
          <EventDetailNavigation currentEvent={event} />
        </section>

        {/* ─── 6. INTERACTIVE REGISTRATION MODAL ─────────────────────────── */}
        <EventRegistrationModal
          event={event}
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
        />
      </main>

      <Footer />
    </>
  );
}
