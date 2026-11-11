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

        {/* Central A Symbol */}
        <svg
          viewBox="0 0 200 200"
          className="w-28 h-28 relative z-10"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          opacity="0.85"
        >
          <circle cx="100" cy="100" r="80" strokeOpacity="0.2" />
          <polygon points="100,45 60,125 140,125" fill="none" strokeOpacity="0.8" />
          <polygon points="100,58 68,118 132,118" fill="none" strokeOpacity="0.4" />
          <line x1="100" y1="45" x2="100" y2="20" strokeOpacity="0.6" />
          <line x1="60" y1="125" x2="35" y2="150" strokeOpacity="0.6" />
          <line x1="140" y1="125" x2="165" y2="115" strokeOpacity="0.6" />
          <circle cx="100" cy="20" r="3.5" fill="none" strokeOpacity="0.8" />
          <circle cx="35" cy="150" r="3.5" fill="none" strokeOpacity="0.8" />
          <circle cx="165" cy="115" r="3.5" fill="none" strokeOpacity="0.8" />
        </svg>

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
  const [canRender3D, setCanRender3D] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      setCanRender3D(!!gl);
    } catch {
      setCanRender3D(false);
    }

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
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
