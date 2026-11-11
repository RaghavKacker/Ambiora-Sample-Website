"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const techPartners = [
  { id: 1, name: "Cloud Infrastructure", category: "Core Compute" },
  { id: 2, name: "Neural Stack", category: "Inference Lab" },
  { id: 3, name: "Quant Terminal", category: "Market Simulator" },
  { id: 4, name: "Aero Vector", category: "Robotics & Avionics" },
  { id: 5, name: "Cyber Shield", category: "Forensic Sandbox" },
];

export default function SponsorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="relative py-28 md:py-36">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={sectionRef} className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center mb-14 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[10px] md:text-xs tracking-[0.25em] text-text-muted uppercase mb-4 font-medium"
          >
            Partnerships & Ecosystem
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-normal text-text-primary"
          >
            Backed by technology leaders.
          </motion.h2>
        </div>

        {/* Sponsor/Partner Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8"
        >
          {techPartners.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-center justify-center px-6 py-4 rounded-xl border border-white/[0.08] bg-[#111111]/80 hover:border-white/25 hover:bg-[#151515] transition-all duration-300 min-w-[140px] sm:min-w-[160px]"
            >
              <span className="text-sm font-semibold tracking-wide text-text-primary mb-1">
                {partner.name}
              </span>
              <span className="text-[10px] tracking-wider text-text-muted uppercase font-mono">
                {partner.category}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center text-xs text-text-muted tracking-wide"
        >
          Interested in supporting the next generation of engineers?{" "}
          <Link
            href="/sponsors"
            className="text-text-primary hover:text-white transition-colors duration-300 underline underline-offset-4 font-medium"
          >
            Explore partnership tiers
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
