"use client";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import OrbitalScene from "./OrbitalScene";
import { AMBIORA_EVENTS } from "@/data/events";

interface AmbioraSphereProps {
  hoveredEventId?: string | null;
  selectedEventId?: string | null;
  onHoverEvent?: (id: string | null) => void;
  onSelectEvent?: (id: string) => void;
}

// ─── Static Fallback for Reduced Motion or Non-WebGL Environments ─────────
function StaticOrbitalFallback({
  onSelectEvent,
}: {
  onSelectEvent?: (id: string) => void;
}) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        {/* Orbital rings fallback */}
        <div className="absolute inset-0 rounded-full border border-white/[0.08]" />
        <div className="absolute inset-6 rounded-full border border-white/[0.06]" />
        <div className="absolute inset-12 rounded-full border border-white/[0.05]" />
        <div className="absolute inset-20 rounded-full border border-white/[0.04]" />

        {/* Central A Symbol matching official AMBIORA Logo */}
        <div className="relative w-32 h-32 z-10 flex items-center justify-center">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Outer Circular Boundary */}
            <circle cx="100" cy="100" r="90" strokeOpacity="0.85" strokeWidth="2.5" />
            
            {/* Equilateral Triangle and Extended Arms */}
            {/* Top Node to Bottom Right */}
            <line x1="83" y1="32" x2="135" y2="121" strokeOpacity="0.9" />
            {/* Bottom Right to Right Node */}
            <line x1="135" y1="121" x2="167" y2="121" strokeOpacity="0.9" />
            {/* Base of Triangle */}
            <line x1="135" y1="121" x2="65" y2="121" strokeOpacity="0.9" />
            {/* Bottom Left to Bottom Left Node */}
            <line x1="65" y1="121" x2="50" y2="148" strokeOpacity="0.9" />
            {/* Left Leg of Triangle */}
            <line x1="65" y1="121" x2="100" y2="61" strokeOpacity="0.9" />

            {/* Inner A crossbar and accents */}
            <line x1="82" y1="110" x2="122" y2="110" strokeOpacity="0.6" strokeWidth="1.8" />
            <line x1="100" y1="74" x2="122" y2="110" strokeOpacity="0.6" strokeWidth="1.8" />
            <line x1="100" y1="74" x2="82" y2="110" strokeOpacity="0.6" strokeWidth="1.8" />

            {/* Three Terminal Nodes */}
            <circle cx="83" cy="32" r="6" fill="#111111" stroke="white" strokeWidth="2.5" />
            <circle cx="50" cy="148" r="6" fill="#111111" stroke="white" strokeWidth="2.5" />
            <circle cx="167" cy="121" r="6" fill="#111111" stroke="white" strokeWidth="2.5" />
          </svg>
        </div>

        {/* 5 Event Nodes around the circle */}
        {AMBIORA_EVENTS.map((event, i) => {
          const angle = (i / AMBIORA_EVENTS.length) * Math.PI * 2;
          const r = 110;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          return (
            <button
              key={event.id}
              onClick={() => onSelectEvent?.(event.id)}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              className="absolute z-20 w-8 h-8 -ml-4 -mt-4 rounded-full border border-white/20 bg-[#111111] hover:border-white hover:scale-110 flex items-center justify-center transition-all duration-300 group"
              title={event.name}
            >
              <span className="w-2 h-2 rounded-full bg-white/70 group-hover:bg-white" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Exported AmbioraSphere / Orbital Canvas Container ─────────────────────
export default function AmbioraSphere({
  hoveredEventId = null,
  selectedEventId = null,
  onHoverEvent = () => {},
  onSelectEvent = () => {},
}: AmbioraSphereProps) {
  const [canRender3D] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      const canvas = document.createElement("canvas");
      return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
    } catch {
      return false;
    }
  });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!canRender3D) {
    return <StaticOrbitalFallback onSelectEvent={onSelectEvent} />;
  }

  return (
    <Canvas
      camera={{ position: [0, 0.8, 7.2], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
    >
      <OrbitalScene
        hoveredEventId={hoveredEventId}
        selectedEventId={selectedEventId}
        onHoverEvent={onHoverEvent}
        onSelectEvent={onSelectEvent}
        reducedMotion={prefersReducedMotion}
      />
    </Canvas>
  );
}
