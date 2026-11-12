"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export interface ScheduleItem {
  id: string;
  day: "Day 01" | "Day 02" | "Day 03";
  startTime: string;
  endTime: string;
  title: string;
  category: "Technology" | "Business" | "Robotics" | "Artificial Intelligence" | "Mystery & Logic" | "Ceremony";
  location: string;
  description: string;
  isFlagship?: boolean;
  eventSlug?: string;
  status: "Confirmed Slot" | "Tentative Slot";
}

const SCHEDULE_ITEMS: ScheduleItem[] = [
  // Day 01
  {
    id: "s1-1",
    day: "Day 01",
    startTime: "09:00 AM",
    endTime: "10:00 AM",
    title: "AMBIORA 2026 Opening Convocation & Keynote",
    category: "Ceremony",
    location: "Main University Auditorium (Ground Floor)",
    description: "Inaugural opening address by academic leadership, introduction of competition tracks, and festival keynote.",
    status: "Confirmed Slot",
  },
  {
    id: "s1-2",
    day: "Day 01",
    startTime: "10:00 AM",
    endTime: "02:00 PM",
    title: "HANDOFF — Relay Engineering Marathon",
    category: "Technology",
    location: "High-Performance Computing Lab 3B",
    description: "4-hour continuous modular codebase relay testing architecture continuity, clean git branching, and agile triage.",
    isFlagship: true,
    eventSlug: "handoff",
    status: "Confirmed Slot",
  },
  {
    id: "s1-3",
    day: "Day 01",
    startTime: "11:30 AM",
    endTime: "04:30 PM",
    title: "NEURAL FORGE — Agentic Architecture Sprint",
    category: "Artificial Intelligence",
    location: "AI Innovation & Neural Sandbox Lab",
    description: "Autonomous multi-agent swarms, RAG toolchains, and model fine-tuning evaluated against hidden enterprise benchmarks.",
    eventSlug: "neural-forge",
    status: "Confirmed Slot",
  },
  {
    id: "s1-4",
    day: "Day 01",
    startTime: "01:00 PM",
    endTime: "02:00 PM",
    title: "Networking Intermission & Technical Showcase",
    category: "Ceremony",
    location: "Central Campus Quadrangle",
    description: "Ecosystem exhibition, project displays, and delegate lunch intermission.",
    status: "Tentative Slot",
  },
  {
    id: "s1-5",
    day: "Day 01",
    startTime: "02:00 PM",
    endTime: "05:00 PM",
    title: "TRADE RUSH — Quantitative Simulation Arena",
    category: "Business",
    location: "Bloomberg & FinTech Simulation Center",
    description: "High-frequency algorithmic trading session under synthetic volatility, macro shocks, and live orderbook matching.",
    isFlagship: true,
    eventSlug: "trade-rush",
    status: "Confirmed Slot",
  },
  {
    id: "s1-6",
    day: "Day 01",
    startTime: "02:30 PM",
    endTime: "06:00 PM",
    title: "ALGO-HACK — Competitive Algorithmic Crucible",
    category: "Technology",
    location: "Algorithms Lab 2A",
    description: "Asymptotic programming sprint tackling NP-hard graphs, streaming geometric queries, and sub-millisecond execution.",
    eventSlug: "algo-hack",
    status: "Confirmed Slot",
  },
  {
    id: "s1-7",
    day: "Day 01",
    startTime: "06:00 PM",
    endTime: "07:00 PM",
    title: "Day 01 Technical Debrief & Scoreboard Reveal",
    category: "Ceremony",
    location: "Seminar Hall 1",
    description: "Review of Day 1 architectural benchmarks, trading Sharpe ratios, and announcement of overnight qualifiers.",
    status: "Tentative Slot",
  },

  // Day 02
  {
    id: "s2-1",
    day: "Day 02",
    startTime: "09:30 AM",
    endTime: "03:30 PM",
    title: "CYBERSTRIKE — Capture The Flag War Games",
    category: "Technology",
    location: "Air-Gapped Cyber Defense Center",
    description: "Adversarial network intrusion, memory exploitation, and live patch defense across 24 isolated enterprise challenge nodes.",
    eventSlug: "cyberstrike",
    status: "Confirmed Slot",
  },
  {
    id: "s2-2",
    day: "Day 02",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    title: "Aerial Aerodynamics & Safety Scrutineering",
    category: "Robotics",
    location: "Outdoor Flight Enclosure (Gate A)",
    description: "Pre-flight failsafe inspections, RF frequency allocations, and drone weight scrutineering.",
    status: "Confirmed Slot",
  },
  {
    id: "s2-3",
    day: "Day 02",
    startTime: "11:00 AM",
    endTime: "03:30 PM",
    title: "ROBO-SOCCER — Mechatronic Dual-Drive Tournament",
    category: "Robotics",
    location: "Indoor Mechatronics Arena",
    description: "High-torque tele-operated and autonomous micro-rovers clash in high-speed group matches and knockout brackets.",
    eventSlug: "robo-soccer",
    status: "Confirmed Slot",
  },
  {
    id: "s2-4",
    day: "Day 02",
    startTime: "11:30 AM",
    endTime: "03:00 PM",
    title: "DRONE-O-MANIA — Precision Obstacle Flight Qualifiers",
    category: "Robotics",
    location: "Illuminated Geometric Air-Arena",
    description: "Pilots race high-speed FPV quadcopters through 3D vector gates and vertical slalom towers.",
    isFlagship: true,
    eventSlug: "drone-o-mania",
    status: "Confirmed Slot",
  },
  {
    id: "s2-5",
    day: "Day 02",
    startTime: "02:00 PM",
    endTime: "06:00 PM",
    title: "VENTURE MATRIX — DeepTech Boardroom Presentations",
    category: "Business",
    location: "Executive Management Boardroom",
    description: "Founders pitch breakthrough technologies, navigate cap-table dilution, and defend financial models before venture capitalists.",
    eventSlug: "venture-matrix",
    status: "Confirmed Slot",
  },
  {
    id: "s2-6",
    day: "Day 02",
    startTime: "03:00 PM",
    endTime: "05:30 PM",
    title: "PROMPT WARS — Generative AI Synthesis Showdown",
    category: "Artificial Intelligence",
    location: "AI Innovation & Neural Sandbox Lab",
    description: "Adversarial prompt injection defenses, multi-modal semantic reverse engineering, and latent space optimization.",
    isFlagship: true,
    eventSlug: "prompt-wars",
    status: "Confirmed Slot",
  },
  {
    id: "s2-7",
    day: "Day 02",
    startTime: "03:30 PM",
    endTime: "07:30 PM",
    title: "VISION-X — Spatial Edge Inference Benchmark",
    category: "Artificial Intelligence",
    location: "Embedded Silicon & Computer Vision Lab",
    description: "Deploy 60 FPS object tracking and 3D point-cloud reconstruction on power-constrained edge accelerators.",
    eventSlug: "vision-x",
    status: "Confirmed Slot",
  },
  {
    id: "s2-8",
    day: "Day 02",
    startTime: "06:30 PM",
    endTime: "08:30 PM",
    title: "DRONE-O-MANIA — Night Flight Championship Finals",
    category: "Robotics",
    location: "Illuminated Geometric Air-Arena",
    description: "Double-elimination head-to-head night racing heats under illuminated LED gates and telemetry broadcast.",
    status: "Tentative Slot",
  },

  // Day 03
  {
    id: "s3-1",
    day: "Day 03",
    startTime: "10:00 AM",
    endTime: "01:00 PM",
    title: "AERODRIFT — Autonomous Rover Circuit Grand Prix",
    category: "Robotics",
    location: "Kinematics Outdoor Test Track",
    description: "100% autonomous rovers tackle variable friction, dynamic pop-up obstacles, and LiDAR trajectory optimization.",
    eventSlug: "aerodrift",
    status: "Confirmed Slot",
  },
  {
    id: "s3-2",
    day: "Day 03",
    startTime: "10:30 AM",
    endTime: "11:45 AM",
    title: "Guest Speaker Series: Cyber Defense & AI Frontiers",
    category: "Ceremony",
    location: "Main University Auditorium",
    description: "Industry leaders explore emerging threat vectors, zero-day resilience, and machine intelligence boundaries.",
    status: "Tentative Slot",
  },
  {
    id: "s3-3",
    day: "Day 03",
    startTime: "01:00 PM",
    endTime: "05:00 PM",
    title: "CASE.exe — Digital Forensics & Investigation Gauntlet",
    category: "Mystery & Logic",
    location: "Cyber Defense War Room (Lab 5)",
    description: "4-hour multi-round incident triage: RAM memory dumps, encrypted PCAP analysis, decompilation, and suspect cross-examination.",
    isFlagship: true,
    eventSlug: "case-exe",
    status: "Confirmed Slot",
  },
  {
    id: "s3-4",
    day: "Day 03",
    startTime: "02:00 PM",
    endTime: "06:00 PM",
    title: "CIPHER PROTOCOL — Cryptanalysis & Steganography Labyrinth",
    category: "Mystery & Logic",
    location: "Discrete Mathematics Seminar Room",
    description: "Decipher polyalphabetic ciphers, hidden spectrogram payloads, and post-quantum lattice mathematical proofs.",
    eventSlug: "cipher-protocol",
    status: "Confirmed Slot",
  },
  {
    id: "s3-5",
    day: "Day 03",
    startTime: "06:30 PM",
    endTime: "08:30 PM",
    title: "AMBIORA 2026 Valedictory & Grand Awards Gala",
    category: "Ceremony",
    location: "Open Air Amphitheatre",
    description: "Official award presentations, trophy distribution, festival highlights screening, and closing ceremony.",
    status: "Confirmed Slot",
  },
];

const DAYS: ("All Days" | "Day 01" | "Day 02" | "Day 03")[] = [
  "All Days",
  "Day 01",
  "Day 02",
  "Day 03",
];

export default function ScheduleTimeline() {
  const [selectedDay, setSelectedDay] = useState<"All Days" | "Day 01" | "Day 02" | "Day 03">("All Days");

  const filteredItems = useMemo(() => {
    if (selectedDay === "All Days") return SCHEDULE_ITEMS;
    return SCHEDULE_ITEMS.filter((item) => item.day === selectedDay);
  }, [selectedDay]);

  return (
    <div className="w-full">
      {/* ─── Day Navigation Pill Switcher ────────────────────────────────── */}
      <div className="flex items-center justify-center mb-14 px-2">
        <div className="inline-flex items-center p-1.5 rounded-full bg-[#111111]/90 backdrop-blur-xl border border-white/[0.08] shadow-2xl">
          {DAYS.map((day) => {
            const isActive = selectedDay === day;
            const count =
              day === "All Days"
                ? SCHEDULE_ITEMS.length
                : SCHEDULE_ITEMS.filter((i) => i.day === day).length;

            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors duration-300 cursor-pointer ${
                  isActive ? "text-black" : "text-text-secondary hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeScheduleDay"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    className="absolute inset-0 bg-white rounded-full shadow-md z-0"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {day}
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
      </div>

      {/* ─── Tentative Notice Disclaimer Banner ──────────────────────────── */}
      <div className="p-4 rounded-2xl border border-amber-500/20 bg-amber-500/5 mb-12 flex items-start gap-3 text-xs text-amber-200/90 leading-relaxed font-sans max-w-3xl mx-auto">
        <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>
          <strong className="text-amber-300 font-semibold">Tentative Schedule Notice:</strong> Timings, lab assignments, and ceremonial sessions are sample placeholders configured for initial festival coordination. Final room numbers will be confirmed at on-site registration.
        </p>
      </div>

      {/* ─── Timeline Layout Rail ────────────────────────────────────────── */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Rail Line */}
        <div className="absolute left-4 sm:left-32 top-4 bottom-4 w-px bg-white/[0.08]" />

        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="relative flex flex-col sm:flex-row items-start gap-6 sm:gap-10 pl-10 sm:pl-0"
              >
                {/* Left Time Column (Desktop) */}
                <div className="hidden sm:block w-28 text-right shrink-0 pt-5 font-mono">
                  <span className="block text-xs font-bold text-text-primary">{item.startTime}</span>
                  <span className="block text-[10px] text-text-muted">{item.endTime}</span>
                  <span className="inline-block mt-2 text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] text-text-muted border border-white/[0.04]">
                    {item.day}
                  </span>
                </div>

                {/* Rail Node Point */}
                <div className="absolute left-2.5 sm:left-[124px] top-6 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-[#080808] bg-white z-10 shadow-[0_0_12px_rgba(255,255,255,0.6)]" />

                {/* Event Card */}
                <div
                  className={`w-full p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                    item.isFlagship
                      ? "border-white/[0.14] bg-[#121212]/90 hover:border-white/30 hover:bg-[#141414] shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                      : "border-white/[0.06] bg-[#0e0e0e]/70 hover:border-white/[0.12]"
                  }`}
                >
                  {/* Top Metadata Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase font-semibold bg-white/[0.06] border border-white/10 text-white/90">
                        {item.category}
                      </span>
                      {item.isFlagship && (
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono tracking-widest uppercase font-bold bg-white text-black">
                          Flagship Challenge
                        </span>
                      )}
                    </div>

                    <span className="text-[10px] font-mono text-text-muted flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.status === "Confirmed Slot" ? "bg-emerald-400" : "bg-amber-400"}`} />
                      <span>{item.status}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>

                  {/* Mobile Time Row */}
                  <div className="sm:hidden font-mono text-xs text-text-muted mb-3 flex items-center gap-2">
                    <span className="text-white font-medium">{item.startTime} – {item.endTime}</span>
                    <span>·</span>
                    <span>{item.day}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Venue & Link Row */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                      <svg className="w-3.5 h-3.5 text-text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{item.location}</span>
                    </div>

                    {item.isFlagship && item.eventSlug && (
                      <Link
                        href={`/events/${item.eventSlug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-neutral-300 transition-colors uppercase tracking-wider"
                      >
                        <span>Event Dossier</span>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
