import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScheduleTimeline from "@/components/schedule/ScheduleTimeline";

export const metadata: Metadata = {
  title: "Festival Schedule — AMBIORA 2026 | NMIMS Shirpur",
  description:
    "Comprehensive timeline and itinerary for the three-day AMBIORA technology festival at NMIMS Shirpur Campus.",
};

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
        {/* Editorial Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
            <span className="text-[10px] md:text-xs tracking-[0.25em] text-text-muted uppercase font-medium">
              3-Day Festival Itinerary
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-normal text-text-primary leading-tight mb-4">
            FESTIVAL SCHEDULE
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
            Synchronized engineering challenges, algorithmic markets, flight arenas, and ceremonial galas across NMIMS Shirpur Campus.
          </p>
        </div>

        <ScheduleTimeline />
      </main>
      <Footer />
    </>
  );
}
