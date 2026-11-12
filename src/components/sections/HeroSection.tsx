"use client";

import { useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { AMBIORA_EVENTS } from "@/data/events";
import EventPreview from "./EventPreview";

const AmbioraSphere = dynamic(
  () => import("@/components/three/AmbioraSphere"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/[0.06] animate-pulse" />
      </div>
    ),
  }
);

export default function HeroSection() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const [hoveredEventId, setHoveredEventId] = useState<string | null>(null);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  // Active event is either the hovered or tapped/selected event
  const activeEvent = AMBIORA_EVENTS.find(
    (e) => e.id === (hoveredEventId || selectedEventId)
  ) || null;

  const handleHoverEvent = useCallback((id: string | null) => {
    setHoveredEventId(id);
  }, []);

  const handleSelectEvent = useCallback((id: string) => {
    setSelectedEventId(id);
    const event = AMBIORA_EVENTS.find((e) => e.id === id);
    if (!event) return;

    setIsNavigating(true);
    // Smooth transition feedback before routing
    setTimeout(() => {
      router.push(event.route);
    }, 280);
  }, [router]);

  const handleDeselect = useCallback(() => {
    setHoveredEventId(null);
    setSelectedEventId(null);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle radial lighting backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.025)_0%,_transparent_75%)] pointer-events-none" />

      {/* Top institution label */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-[10px] md:text-xs tracking-[0.35em] text-text-muted uppercase mb-4 text-center px-4"
      >
        NMIMS Shirpur Presents
      </motion.p>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[0.16em] text-text-primary text-center"
      >
        AMBIORA
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-3 text-xs sm:text-sm md:text-base text-text-secondary tracking-wide max-w-xs sm:max-w-md text-center px-4 leading-relaxed"
      >
        A festival of technology, innovation and imagination.
      </motion.p>

      {/* 3D Orbital Canvas Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-6xl h-[340px] sm:h-[460px] md:h-[520px] lg:h-[580px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden"
      >
        <AmbioraSphere
          hoveredEventId={hoveredEventId}
          selectedEventId={selectedEventId}
          onHoverEvent={handleHoverEvent}
          onSelectEvent={handleSelectEvent}
        />
      </motion.div>

      {/* Quick Access Orbital Event Selector Pills (Mobile & Desktop Accessible) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="relative z-20 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-full sm:max-w-3xl mx-auto px-3 mt-1 mb-2"
      >
        {AMBIORA_EVENTS.map((event) => {
          const isActive = (hoveredEventId || selectedEventId) === event.id;
          return (
            <button
              key={event.id}
              onClick={() => {
                if (selectedEventId === event.id) {
                  handleDeselect();
                } else {
                  setSelectedEventId(event.id);
                }
              }}
              onMouseEnter={() => setHoveredEventId(event.id)}
              onMouseLeave={() => setHoveredEventId(null)}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] md:text-xs tracking-wider transition-all duration-300 border ${
                isActive
                  ? "bg-white text-black border-white shadow-lg scale-105"
                  : "bg-[#111111]/80 text-text-secondary border-white/[0.08] hover:border-white/30 hover:text-text-primary"
              }`}
            >
              {event.name}
            </button>
          );
        })}
      </motion.div>

      {/* Interactive Floating Event Preview HUD */}
      <EventPreview
        activeEvent={activeEvent}
        onSelect={handleSelectEvent}
        onDeselect={handleDeselect}
        isNavigating={isNavigating}
      />

      {/* Scroll indicator */}
      <motion.a
        href="#festival-intro"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
        aria-label="Scroll to festival overview"
        className="relative z-10 mt-8 mb-2 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="text-[9px] tracking-[0.3em] text-text-muted group-hover:text-text-secondary transition-colors uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-6 bg-gradient-to-b from-transparent via-white/30 to-transparent group-hover:via-white/70 transition-all"
        />
      </motion.a>
    </section>
  );
}
