"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FestivalIntroduction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section className="relative py-32 md:py-40">
      {/* Subtle top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div
        ref={sectionRef}
        className="max-w-3xl mx-auto px-6 md:px-8 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] md:text-xs tracking-[0.25em] text-text-muted uppercase mb-6"
        >
          About the Festival
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-normal text-text-primary leading-tight"
        >
          Where technology meets
          <br />
          creative expression.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-8 text-sm md:text-base text-text-secondary leading-relaxed max-w-xl mx-auto"
        >
          AMBIORA brings together the brightest minds across disciplines to
          explore the intersections of technology, design and innovation.
          Experience workshops, competitions and talks that push the boundaries
          of what&apos;s possible.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 md:mt-16 grid grid-cols-3 gap-6 sm:gap-8 max-w-md mx-auto"
        >
          {[
            { value: "20+", label: "Events" },
            { value: "50+", label: "Speakers" },
            { value: "2K+", label: "Participants" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-xl md:text-2xl font-semibold text-text-primary tracking-normal">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] md:text-xs tracking-[0.15em] text-text-muted uppercase font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

