"use client";

import Link from "next/link";
import { AmbioraEvent, AMBIORA_EVENTS } from "@/data/events";

interface EventDetailNavigationProps {
  currentEvent: AmbioraEvent;
}

export default function EventDetailNavigation({ currentEvent }: EventDetailNavigationProps) {
  const currentIndex = AMBIORA_EVENTS.findIndex((e) => e.id === currentEvent.id);
  const total = AMBIORA_EVENTS.length;

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const prevEvent = AMBIORA_EVENTS[prevIndex];
  const nextEvent = AMBIORA_EVENTS[nextIndex];

  return (
    <nav
      aria-label="Event navigation"
      className="mt-20 pt-12 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6"
    >
      {/* Previous Event Link */}
      <Link
        href={prevEvent.route}
        className="group flex items-center gap-3 w-full md:w-auto p-4 md:p-0 rounded-2xl md:rounded-none bg-white/[0.02] md:bg-transparent border md:border-none border-white/[0.06] hover:text-white transition-colors"
      >
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/5 transition-all">
          <svg className="w-4 h-4 text-text-muted group-hover:text-white transform group-hover:-translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div>
          <span className="block text-[10px] font-mono tracking-widest text-text-muted uppercase">
            Previous Event · {prevEvent.index}
          </span>
          <span className="text-sm font-semibold text-text-primary group-hover:text-white transition-colors">
            {prevEvent.name}
          </span>
        </div>
      </Link>

      {/* Directory Back Link */}
      <Link
        href="/events"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.03] text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-white hover:bg-white/[0.08] hover:border-white/30 transition-all active:scale-95"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        <span>All Events Directory</span>
        <span className="text-[10px] font-mono text-text-muted ml-1">({currentIndex + 1}/{total})</span>
      </Link>

      {/* Next Event Link */}
      <Link
        href={nextEvent.route}
        className="group flex items-center justify-end md:text-right gap-3 w-full md:w-auto p-4 md:p-0 rounded-2xl md:rounded-none bg-white/[0.02] md:bg-transparent border md:border-none border-white/[0.06] hover:text-white transition-colors"
      >
        <div>
          <span className="block text-[10px] font-mono tracking-widest text-text-muted uppercase">
            Next Event · {nextEvent.index}
          </span>
          <span className="text-sm font-semibold text-text-primary group-hover:text-white transition-colors">
            {nextEvent.name}
          </span>
        </div>
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/5 transition-all">
          <svg className="w-4 h-4 text-text-muted group-hover:text-white transform group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </nav>
  );
}
