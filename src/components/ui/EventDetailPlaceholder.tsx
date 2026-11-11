"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AmbioraEvent } from "@/data/events";

interface EventDetailPlaceholderProps {
  event: AmbioraEvent;
}

export default function EventDetailPlaceholder({ event }: EventDetailPlaceholderProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col justify-center min-h-screen pt-28 pb-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto w-full">
          {/* Breadcrumb / Back link */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs tracking-widest text-text-muted hover:text-text-primary uppercase transition-colors duration-300"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Return to Orbital View
            </Link>
          </div>

          {/* Event Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
            <span className="text-[10px] tracking-[0.25em] text-text-muted uppercase">
              {event.category} · Phase 2 Prototype
            </span>
          </div>

          {/* Event Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-text-primary mb-4">
            {event.name}
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl">
            {event.tagline}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-white/[0.08] mb-10" />

          {/* Specification Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="p-5 rounded-xl border border-white/[0.06] bg-[#111111]/60">
              <p className="text-[10px] tracking-[0.2em] text-text-muted uppercase mb-2">Schedule</p>
              <p className="text-sm font-medium text-text-primary">{event.datePlaceholder}</p>
            </div>
            <div className="p-5 rounded-xl border border-white/[0.06] bg-[#111111]/60">
              <p className="text-[10px] tracking-[0.2em] text-text-muted uppercase mb-2">Team Format</p>
              <p className="text-sm font-medium text-text-primary">{event.teamSizePlaceholder}</p>
            </div>
            <div className="p-5 rounded-xl border border-white/[0.06] bg-[#111111]/60">
              <p className="text-[10px] tracking-[0.2em] text-text-muted uppercase mb-2">Phase Status</p>
              <p className="text-sm font-medium text-text-secondary">Orbital Preview</p>
            </div>
          </div>

          {/* Description */}
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-sm mb-12">
            <h2 className="text-xs tracking-[0.25em] text-text-muted uppercase mb-4">
              Event Overview
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {event.description}
            </p>
            <p className="mt-4 text-xs text-text-muted leading-relaxed">
              Detailed problem statements, technical guidelines, rulebooks and live registration pipelines will be deployed in subsequent festival development phases.
            </p>
          </div>

          {/* Navigation action */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs tracking-wider uppercase font-medium bg-white text-black hover:bg-neutral-200 transition-colors duration-300"
            >
              Back to Orbital System
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs tracking-wider uppercase font-medium border border-white/[0.12] text-text-secondary hover:text-text-primary hover:border-white/30 transition-all duration-300"
            >
              All Events Directory
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
