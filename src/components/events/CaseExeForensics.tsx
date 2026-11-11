"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaseSpecialData } from "@/data/events";

interface CaseExeForensicsProps {
  data: CaseSpecialData;
}

type TabType = "timeline" | "suspects" | "evidence" | "rounds";

export default function CaseExeForensics({ data }: CaseExeForensicsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("timeline");

  return (
    <section className="my-20 rounded-3xl border border-white/[0.12] bg-[#0c0c0c]/90 backdrop-blur-2xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
      {/* Decorative Forensic Scan Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/60 to-emerald-500/0" />

      {/* Header Docket */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-[10px] tracking-[0.2em] uppercase font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>CLASSIFIED FORENSIC DOCKET // EYES ONLY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-normal text-text-primary">
            Incident Investigation Dossier
          </h2>
        </div>

        <div className="font-mono text-xs text-text-muted flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10">
            CASE: #2026-NX-709
          </span>
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            LIVE TRIAGE
          </span>
        </div>
      </div>

      {/* Case Briefing Banner */}
      <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.06] bg-black/50 mb-8 font-mono text-xs sm:text-[13px] text-text-secondary leading-relaxed">
        <span className="text-emerald-400 font-bold mr-2">INCIDENT TELEMETRY:</span>
        {data.incidentBriefing}
      </div>

      {/* Investigation Tab Controls */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-white/[0.06] no-scrollbar">
        {[
          { id: "timeline", label: "01. Incident Timeline", count: data.timeline.length },
          { id: "suspects", label: "02. Suspect Dossiers", count: data.suspects.length },
          { id: "evidence", label: "03. Evidence Locker", count: data.evidence.length },
          { id: "rounds", label: "04. Four-Round Gauntlet", count: data.rounds.length },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-medium tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-white text-black font-semibold shadow-md"
                  : "bg-white/[0.03] text-text-muted hover:text-text-primary hover:bg-white/[0.06] border border-white/[0.04]"
              }`}
            >
              <span>{tab.label}</span>
              <span className={`ml-2 text-[10px] opacity-70 ${isActive ? "text-black" : "text-text-muted"}`}>
                ({tab.count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <AnimatePresence mode="wait">
        {activeTab === "timeline" && (
          <motion.div
            key="timeline"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {data.timeline.map((entry) => (
              <div
                key={entry.time}
                className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono"
              >
                <div className="flex items-start gap-4">
                  <div className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs font-bold text-white whitespace-nowrap">
                    {entry.time}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-sm font-semibold text-text-primary">{entry.phase}</h4>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded uppercase font-semibold ${
                          entry.anomalyLevel === "Critical"
                            ? "bg-red-500/20 text-red-300 border border-red-500/30"
                            : entry.anomalyLevel === "High"
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                            : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        }`}
                      >
                        {entry.anomalyLevel}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed font-sans">
                      {entry.description}
                    </p>
                  </div>
                </div>

                <div className="text-right text-[11px] text-text-muted shrink-0">
                  <span className="block opacity-60">TARGET VECTOR</span>
                  <span className="text-text-primary font-mono">{entry.systemTarget}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "suspects" && (
          <motion.div
            key="suspects"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {data.suspects.map((suspect) => (
              <div
                key={suspect.id}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#111111]/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-text-muted">{suspect.alias}</span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-semibold ${
                        suspect.threatLevel === "Critical"
                          ? "bg-red-500/20 text-red-400 border border-red-500/30"
                          : suspect.threatLevel === "High"
                          ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                          : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      }`}
                    >
                      {suspect.threatLevel} Threat
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-text-primary mb-1">{suspect.name}</h3>
                  <p className="text-xs text-text-muted font-mono mb-4">{suspect.role}</p>

                  <div className="space-y-3 text-xs mb-6">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="block text-[10px] font-mono text-text-muted uppercase mb-1">
                        Stated Alibi
                      </span>
                      <p className="text-text-secondary leading-relaxed">{suspect.alibi}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="block text-[10px] font-mono text-text-muted uppercase mb-1">
                        Suspected Motive
                      </span>
                      <p className="text-text-secondary leading-relaxed">{suspect.motive}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px]">
                  <span className="text-text-muted">STATUS</span>
                  <span className="text-text-primary font-medium">{suspect.status}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "evidence" && (
          <motion.div
            key="evidence"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {data.evidence.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#111111]/90 font-mono"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-2.5 py-1 rounded bg-black/70 border border-white/10 text-emerald-400 font-bold">
                    {item.id} · {item.category}
                  </span>
                  <span className="text-[10px] text-text-muted uppercase">Size: {item.fileSize}</span>
                </div>

                <h4 className="text-sm font-semibold text-text-primary font-sans mb-2">{item.title}</h4>
                <p className="text-[11px] text-text-muted mb-4 break-all">{item.hash}</p>

                <div className="p-3 rounded-xl bg-black/80 border border-white/10 text-[11px] text-emerald-300/90 overflow-x-auto">
                  <code>{item.previewSnippet}</code>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-text-muted">
                  <span>CHAIN OF CUSTODY: INTACT</span>
                  <span className="text-text-primary font-semibold">{item.status}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "rounds" && (
          <motion.div
            key="rounds"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {data.rounds.map((round) => (
              <div
                key={round.roundNumber}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#111111]/90 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3 font-mono">
                  <span className="text-xs text-emerald-400 font-bold">ROUND {round.roundNumber}</span>
                  <span className="text-xs text-text-muted">{round.duration}</span>
                </div>

                <h4 className="text-base font-semibold text-text-primary mb-2">{round.title}</h4>

                <div className="space-y-2 text-xs mb-4">
                  <div>
                    <span className="text-text-muted font-mono block text-[10px] uppercase">
                      Investigative Focus
                    </span>
                    <p className="text-text-secondary leading-relaxed">{round.focus}</p>
                  </div>
                  <div>
                    <span className="text-text-muted font-mono block text-[10px] uppercase">
                      Mandatory Deliverable
                    </span>
                    <p className="text-text-secondary leading-relaxed">{round.deliverable}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>CRITICAL ELIMINATION STAGE</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
