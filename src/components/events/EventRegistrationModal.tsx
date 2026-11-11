"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AmbioraEvent } from "@/data/events";

interface EventRegistrationModalProps {
  event: AmbioraEvent;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventRegistrationModal({
  event,
  isOpen,
  onClose,
}: EventRegistrationModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [institution, setInstitution] = useState("");
  const [teamName, setTeamName] = useState("");
  const [member2, setMember2] = useState("");
  const [member3, setMember3] = useState("");
  const [member4, setMember4] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleClose = useCallback(() => {
    setIsSuccess(false);
    setErrors({});
    onClose();
  }, [onClose]);

  // Lock body scroll and register escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) newErrors.fullName = "Participant name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!studentId.trim()) newErrors.studentId = "Student ID / Roll No is required";
    if (!institution.trim()) newErrors.institution = "Institution name is required";

    if (event.isTeamEvent && !teamName.trim()) {
      newErrors.teamName = "Team name is required for team challenges";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
    setTicketId(`AMB-${event.slug.toUpperCase().slice(0, 4)}-${randomHex}`);
    setIsSuccess(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl rounded-3xl border border-white/[0.12] bg-[#111111]/95 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.85)] z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full text-text-muted hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!isSuccess ? (
              <>
                {/* Header */}
                <div className="mb-6 pr-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-[10px] tracking-[0.2em] uppercase font-mono font-medium mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>Frontend Prototype · Zero Live Backend</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-normal text-text-primary mb-1">
                    Register for {event.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {event.category} · {event.teamSizePlaceholder} · {event.datePlaceholder}
                  </p>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Primary Participant Information */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-1.5">
                        Institutional Email *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@university.edu"
                        className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-1.5">
                        Student ID / Roll No *
                      </label>
                      <input
                        type="text"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        placeholder="7001202409"
                        className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all"
                      />
                      {errors.studentId && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.studentId}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-1.5">
                      College / University *
                    </label>
                    <input
                      type="text"
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      placeholder="e.g. NMIMS MPSTME, Shirpur Campus"
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all"
                    />
                    {errors.institution && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.institution}</p>
                    )}
                  </div>

                  {/* Team Details (if applicable) */}
                  {event.isTeamEvent && (
                    <div className="pt-3 border-t border-white/[0.08] space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-text-primary">
                          Team Configuration ({event.teamSizePlaceholder})
                        </span>
                        <span className="text-[10px] font-mono text-text-muted">
                          Min: {event.minTeamMembers} · Max: {event.maxTeamMembers}
                        </span>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-1.5">
                          Official Team Name *
                        </label>
                        <input
                          type="text"
                          value={teamName}
                          onChange={(e) => setTeamName(e.target.value)}
                          placeholder="e.g. Neural Vectors"
                          className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all"
                        />
                        {errors.teamName && (
                          <p className="text-[11px] text-red-400 mt-1">{errors.teamName}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          value={member2}
                          onChange={(e) => setMember2(e.target.value)}
                          placeholder="Member 2 Name & Roll No"
                          className="w-full px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-xs text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-white/30"
                        />
                        <input
                          type="text"
                          value={member3}
                          onChange={(e) => setMember3(e.target.value)}
                          placeholder="Member 3 Name & Roll No (Optional)"
                          className="w-full px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-xs text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-white/30"
                        />
                      </div>
                      {event.maxTeamMembers >= 4 && (
                        <input
                          type="text"
                          value={member4}
                          onChange={(e) => setMember4(e.target.value)}
                          placeholder="Member 4 Name & Roll No (Optional)"
                          className="w-full px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-xs text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-white/30"
                        />
                      )}
                    </div>
                  )}

                  {/* Submission Row */}
                  <div className="pt-4 flex items-center justify-between gap-4">
                    <p className="text-[11px] text-text-muted">
                      No registration fees charged · Instant confirmation
                    </p>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all duration-300 active:scale-95 whitespace-nowrap cursor-pointer shadow-lg"
                    >
                      Confirm Registration
                    </button>
                  </div>
                </form>
              </>
            ) : (
              /* Success / Ticket Confirmation State */
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-[10px] tracking-[0.2em] uppercase font-mono font-medium mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Pass Generated · Prototype Mode</span>
                </div>

                <h3 className="text-2xl font-semibold tracking-normal text-text-primary mb-2">
                  Registration Confirmed!
                </h3>
                <p className="text-xs text-text-secondary max-w-md mx-auto mb-6">
                  You are registered for <span className="text-white font-medium">{event.name}</span> at AMBIORA 2026. Keep your digital pass for on-site verification.
                </p>

                {/* Digital Boarding Pass */}
                <div className="p-5 rounded-2xl border border-white/15 bg-white/[0.02] text-left mb-6 font-mono relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                    <div>
                      <p className="text-[10px] text-text-muted uppercase">Ticket Identifier</p>
                      <p className="text-xs text-text-primary font-bold">{ticketId}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-text-muted uppercase">Event Slot</p>
                      <p className="text-xs text-text-secondary">{event.datePlaceholder}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                    <div>
                      <p className="text-[10px] text-text-muted uppercase">Primary Delegate</p>
                      <p className="text-text-primary truncate">{fullName}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-text-muted uppercase">Affiliation</p>
                      <p className="text-text-secondary truncate">{institution}</p>
                    </div>
                    {event.isTeamEvent && (
                      <div className="col-span-2">
                        <p className="text-[10px] text-text-muted uppercase">Team Designation</p>
                        <p className="text-text-primary">{teamName}</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-dashed border-white/10 flex items-center justify-between text-[10px] text-text-muted">
                    <span>SECURITY: SHA256 VALIDATED</span>
                    <span className="text-emerald-400 font-medium">STATUS: ACTIVE SEAT</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  className="px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all duration-300 active:scale-95"
                >
                  Return to Event
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
