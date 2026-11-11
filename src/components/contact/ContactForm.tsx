"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("Competition Inquiry");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messageId, setMessageId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = "Full name is required";
    if (!email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please provide a valid email format";
    }
    if (!message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (message.trim().length < 10) {
      newErrors.message = "Please provide at least 10 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setMessageId(`MSG-${Math.random().toString(36).substring(2, 7).toUpperCase()}`);
      setIsSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setCategory("Competition Inquiry");
    setMessage("");
    setIsSubmitted(false);
  };

  return (
    <div className="w-full p-8 sm:p-12 rounded-3xl border border-white/[0.08] bg-[#111111]/85 backdrop-blur-xl relative overflow-hidden shadow-2xl">
      {/* Top Prototype Badge */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-[10px] font-mono tracking-[0.2em] uppercase text-amber-300">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>Interactive Prototype · Local Simulation</span>
        </div>
        <span className="text-[10px] font-mono text-text-muted">STATUS: READY</span>
      </div>

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maya Lin"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all"
                />
                {errors.name && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="maya@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all"
                />
                {errors.email && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-1.5">
                Inquiry Topic / Domain *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#161616] text-sm text-text-primary focus:outline-none focus:border-white/40 transition-all cursor-pointer"
              >
                <option value="Competition Inquiry">Competition Inquiry (Flagship Challenges)</option>
                <option value="Sponsorship & Partnership">Corporate Sponsorship & Partnership</option>
                <option value="Delegate Registration">Delegate Registration & Accommodation</option>
                <option value="Campus Coordination">Campus Facilities & Travel Logistics</option>
                <option value="General Query">General Query & Feedback</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-1.5">
                Message & Details *
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please outline your inquiry, team background, or partnership question..."
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all resize-none"
              />
              {errors.message && (
                <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-text-muted text-center sm:text-left">
                Demonstration interface · Client-side verification
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all duration-300 active:scale-95 disabled:opacity-50 cursor-pointer shadow-lg whitespace-nowrap"
              >
                {isSubmitting ? "Transmitting..." : "Send Dispatch"}
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-8"
          >
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <span className="inline-block text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3">
              DISPATCH RECORDED // {messageId}
            </span>

            <h3 className="text-2xl font-semibold text-text-primary mb-2">
              Message Transmitted!
            </h3>

            <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto leading-relaxed mb-6">
              Thank you, <span className="text-white font-medium">{name}</span>. Your dispatch regarding &quot;{category}&quot; has been recorded in the prototype interface.
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              Submit Another Message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
