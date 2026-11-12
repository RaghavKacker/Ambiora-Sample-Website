"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AMBIORA_EVENTS, AmbioraEvent, EventCategoryFilter } from "@/data/events";

const CATEGORIES: EventCategoryFilter[] = [
  "All",
  "Technology",
  "Business",
  "Robotics",
  "Artificial Intelligence",
  "Mystery & Logic",
];

export default function EventsDiscovery() {
  const [activeCategory, setActiveCategory] = useState<EventCategoryFilter>("All");

  const filteredEvents = useMemo(() => {
    if (activeCategory === "All") return AMBIORA_EVENTS;
    return AMBIORA_EVENTS.filter((e) => e.filterCategory === activeCategory);
  }, [activeCategory]);

  return (
    <div className="w-full">
      {/* ─── Editorial Header ────────────────────────────────────────────── */}
      <div className="text-center mb-14 md:mb-18">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
          <span className="text-[10px] md:text-xs tracking-[0.25em] text-text-muted uppercase font-medium">
            Curated Showcase · 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-normal text-text-primary leading-tight mb-5"
        >
          EXPLORE THE EVENTS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-text-secondary max-w-xl mx-auto leading-relaxed"
        >
          Thirteen flagship experiences. Five specialized arenas. One festival.
        </motion.p>
      </div>

      {/* ─── Segmented Category Filter Bar ───────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center mb-16 md:mb-20 px-2"
      >
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl md:rounded-full bg-[#111111]/90 backdrop-blur-xl border border-white/[0.08] shadow-2xl max-w-3xl">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            const count =
              category === "All"
                ? AMBIORA_EVENTS.length
                : AMBIORA_EVENTS.filter((e) => e.filterCategory === category).length;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-3.5 sm:px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-colors duration-300 ${
                  isActive ? "text-black font-semibold" : "text-text-secondary hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeEventCategoryFilter"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    className="absolute inset-0 bg-white rounded-full shadow-md z-0"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {category}
                  <span
                    className={`text-[10px] font-mono opacity-60 ${
                      isActive ? "text-black" : "text-text-muted"
                    }`}
                  >
                    ({count})
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* ─── Editorial Showcase List ─────────────────────────────────────── */}
      <div className="space-y-12 md:space-y-16">
        <AnimatePresence mode="popLayout">
          {filteredEvents.map((event, idx) => (
            <EditorialEventCard
              key={event.id}
              event={event}
              index={idx}
              isSingle={filteredEvents.length === 1}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Individual Editorial Showcase Card ─────────────────────────────────────
function EditorialEventCard({
  event,
  index,
  isSingle,
}: {
  event: AmbioraEvent;
  index: number;
  isSingle: boolean;
}) {
  // Alternate visual layout orientation for editorial magazine flow
  const isReversed = index % 2 === 1 && !isSingle;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
    >
      <div
        className={`flex flex-col ${
          isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-stretch min-h-[420px]`}
      >
        {/* Visual Media Stage */}
        <div className="relative w-full lg:w-7/12 min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden bg-[#141414]">
          <Image
            src={event.image}
            alt={event.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent pointer-events-none" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111111]/80 pointer-events-none" />

          {/* Top Floating Badge Bar */}
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
            <span className="px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold bg-black/70 backdrop-blur-md border border-white/15 text-white/90">
              {event.category}
            </span>
            <span className="font-mono text-xs text-white/60 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
              {event.index}
            </span>
          </div>

          {/* Bottom Technical Accent Snippet */}
          <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between">
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 font-mono text-[11px] text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
              <span>{event.accentSnippet}</span>
            </div>
            <span className="text-[11px] font-mono text-text-muted bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 ml-auto">
              {event.datePlaceholder}
            </span>
          </div>
        </div>

        {/* Narrative & Editorial Information Column */}
        <div className="w-full lg:w-5/12 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
          <div>
            {/* Meta Row */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono tracking-widest text-text-muted uppercase">
                {event.filterCategory}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-xs text-text-muted font-medium">
                {event.teamSizePlaceholder}
              </span>
            </div>

            {/* Event Name */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-normal text-text-primary group-hover:text-white transition-colors duration-300 mb-3">
              {event.name}
            </h2>

            {/* Tagline */}
            <p className="text-xs sm:text-sm font-medium text-text-muted leading-relaxed mb-5">
              {event.tagline}
            </p>

            {/* Complete Description */}
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8">
              {event.description}
            </p>

            {/* Distinctive Specifications Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 mb-8 pt-6 border-t border-white/[0.06]">
              {event.metrics.map((m) => (
                <div key={m.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <p className="text-[9px] uppercase tracking-wider text-text-muted mb-1 truncate">
                    {m.label}
                  </p>
                  <p className="text-xs font-semibold text-text-primary truncate">{m.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
            <Link
              href={event.route}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-white text-black hover:bg-neutral-200 transition-all duration-300 active:scale-95 group/btn"
            >
              <span>Explore Event</span>
              <svg
                className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <span className="text-[11px] font-mono text-text-muted group-hover:text-text-secondary transition-colors">
              Route: {event.route}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
