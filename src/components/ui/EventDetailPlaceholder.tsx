"use client";

import Link from "next/link";
import Image from "next/image";
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
      <main className="flex-1 pt-28 pb-24 px-6 md:px-8 max-w-4xl mx-auto w-full">
        {/* Breadcrumb / Back link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs tracking-wider text-text-muted hover:text-text-primary uppercase transition-colors duration-300 font-medium"
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

        {/* Hero Image Banner with Visual Identity */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-10 border border-white/[0.08] bg-[#141414]">
          <Image
            src={event.image}
            alt={event.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent pointer-events-none" />

          {/* Banner Overlaid Content */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-black/60 backdrop-blur-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] tracking-[0.2em] text-white/90 uppercase font-medium">
                {event.category} · Phase 2 Prototype
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-normal text-white">
              {event.name}
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl">
          {event.tagline}
        </p>

        {/* Specification Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]/80">
            <p className="text-[10px] tracking-[0.2em] text-text-muted uppercase mb-2">Schedule</p>
            <p className="text-sm sm:text-base font-semibold text-text-primary">{event.datePlaceholder}</p>
          </div>
          <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]/80">
            <p className="text-[10px] tracking-[0.2em] text-text-muted uppercase mb-2">Team Format</p>
            <p className="text-sm sm:text-base font-semibold text-text-primary">{event.teamSizePlaceholder}</p>
          </div>
          <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]/80">
            <p className="text-[10px] tracking-[0.2em] text-text-muted uppercase mb-2">Phase Status</p>
            <p className="text-sm sm:text-base font-semibold text-text-secondary">Orbital Preview</p>
          </div>
        </div>

        {/* Overview Card */}
        <div className="p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-sm mb-10">
          <h2 className="text-xs tracking-[0.25em] text-text-muted uppercase mb-4 font-semibold">
            Event Overview
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-4">
            {event.description}
          </p>
          <p className="text-xs text-text-muted leading-relaxed">
            Detailed problem statements, technical guidelines, rulebooks and live registration pipelines will be deployed in subsequent festival development phases.
          </p>
          <div className="mt-6 pt-4 border-t border-white/[0.04] text-[11px] text-text-muted">
            <span>Visual Attribution: {event.imageSource}</span>
          </div>
        </div>

        {/* Navigation Action Buttons with generous spacing */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs tracking-wider uppercase font-semibold bg-white text-black hover:bg-neutral-200 transition-colors duration-300 active:scale-95"
          >
            Back to Orbital System
          </Link>
          <Link
            href="/events"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs tracking-wider uppercase font-semibold border border-white/20 text-text-primary hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            All Events Directory
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
