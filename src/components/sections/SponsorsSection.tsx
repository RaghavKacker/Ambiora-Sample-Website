"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const placeholderSponsors = [
  { id: 1, name: "Sponsor One" },
  { id: 2, name: "Sponsor Two" },
  { id: 3, name: "Sponsor Three" },
  { id: 4, name: "Sponsor Four" },
  { id: 5, name: "Sponsor Five" },
];

export default function SponsorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section className="relative py-32 md:py-40">
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
            className="text-[10px] md:text-xs tracking-[0.35em] text-text-muted uppercase mb-6"
          >
            Our Sponsors
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-text-primary"
          >
            Backed by the best.
          </motion.h2>
        </div>

        {/* Sponsor logos grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
        >
          {placeholderSponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex items-center justify-center w-24 h-12 md:w-32 md:h-14 rounded-md border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-400"
            >
              <span className="text-[10px] md:text-xs tracking-[0.1em] text-text-muted select-none">
                {sponsor.name}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 text-center text-[10px] md:text-xs text-text-muted tracking-wide"
        >
          Interested in sponsoring AMBIORA?{" "}
          <a
            href="/contact"
            className="text-text-secondary hover:text-text-primary transition-colors duration-300 underline underline-offset-2"
          >
            Get in touch
          </a>
        </motion.p>
      </div>
    </section>
  );
}

