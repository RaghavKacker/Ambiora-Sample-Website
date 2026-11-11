"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AmbioraEvent } from "@/data/events";

interface EventPreviewProps {
  activeEvent: AmbioraEvent | null;
  onSelect: (id: string) => void;
  onDeselect: () => void;
  isNavigating?: boolean;
}

export default function EventPreview({
  activeEvent,
  onSelect,
  onDeselect,
  isNavigating = false,
}: EventPreviewProps) {
  return (
    <div className="relative z-20 min-h-[140px] w-full max-w-xl mx-auto px-4 mt-2">
      <AnimatePresence mode="wait">
        {activeEvent ? (
          <motion.div
            key={activeEvent.id}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-5 md:p-6 rounded-2xl border border-white/[0.12] bg-[#111111]/85 backdrop-blur-xl shadow-2xl"
          >
            {/* Top row with Category and Close (Deselect) Button */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] tracking-[0.25em] text-text-muted uppercase">
                {activeEvent.category} · {activeEvent.datePlaceholder}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeselect();
                }}
                className="text-text-muted hover:text-text-primary p-1 transition-colors"
                aria-label="Deselect event"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Event Name */}
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-text-primary mb-1">
              {activeEvent.name}
            </h3>

            {/* Description */}
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-4">
              {activeEvent.description}
            </p>

            {/* Action Row */}
            <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
              <span className="text-[11px] text-text-muted">
                {activeEvent.teamSizePlaceholder}
              </span>
              <button
                onClick={() => onSelect(activeEvent.id)}
                disabled={isNavigating}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase bg-white text-black hover:bg-neutral-200 transition-all duration-300 active:scale-95 disabled:opacity-50"
              >
                {isNavigating ? "Entering..." : "Explore Event"}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center py-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02]">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-ping" />
              <span className="text-[11px] tracking-[0.2em] text-text-muted uppercase">
                Hover or tap an orbiting event to inspect
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
