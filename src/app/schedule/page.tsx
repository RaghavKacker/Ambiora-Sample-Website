import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 md:px-8 max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
            <span className="text-[10px] md:text-xs tracking-[0.25em] text-text-muted uppercase font-medium">
              Festival Timeline
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-normal text-text-primary leading-tight mb-5">
            Event Schedule
          </h1>
          <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            Three days of synchronized engineering competitions, hackathons, and keynotes.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              day: "DAY 01",
              date: "February 2026",
              events: [
                { time: "10:00 AM", name: "HANDOFF — Relay Engineering Phase 1" },
                { time: "02:00 PM", name: "TRADE RUSH — Quantitative Simulation" },
              ],
            },
            {
              day: "DAY 02",
              date: "February 2026",
              events: [
                { time: "11:00 AM", name: "DRONE-O-MANIA — Precision Obstacle Flight" },
                { time: "03:00 PM", name: "PROMPT WARS — Generative AI Synthesis" },
              ],
            },
            {
              day: "DAY 03",
              date: "February 2026",
              events: [
                { time: "01:00 PM", name: "CASE.exe — Digital Forensics & Reversing" },
                { time: "06:00 PM", name: "AMBIORA Valedictory & Grand Awards" },
              ],
            },
          ].map((scheduleDay) => (
            <div
              key={scheduleDay.day}
              className="p-7 rounded-2xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/[0.06]">
                <span className="text-xs tracking-[0.25em] text-text-primary font-semibold uppercase">
                  {scheduleDay.day}
                </span>
                <span className="text-xs text-text-muted">{scheduleDay.date}</span>
              </div>
              <div className="space-y-3">
                {scheduleDay.events.map((ev, i) => (
                  <div key={i} className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-text-muted font-mono">{ev.time}</span>
                    <span className="text-text-secondary font-medium">{ev.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
