"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const placeholderEvents = [
  {
    id: 1,
    title: "Event Title One",
    category: "COMPETITION",
    description:
      "A placeholder description for the first featured event. Details will be provided closer to the festival.",
  },
  {
    id: 2,
    title: "Event Title Two",
    category: "WORKSHOP",
    description:
      "A placeholder description for the second featured event. Details will be provided closer to the festival.",
  },
  {
    id: 3,
    title: "Event Title Three",
    category: "TALK",
    description:
      "A placeholder description for the third featured event. Details will be provided closer to the festival.",
  },
];

export default function FeaturedEvents() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="relative py-32 md:py-40">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
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
            Featured Events
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
            Explore what awaits.
          </motion.h2>
        </div>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {placeholderEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.3 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <div className="relative bg-bg-secondary rounded-2xl border border-white/[0.06] p-8 md:p-10 transition-all duration-500 hover:border-white/[0.12] hover:bg-[#141414]">
                {/* Category badge */}
                <p className="text-[10px] tracking-[0.3em] text-text-muted uppercase mb-6">
                  {event.category}
                </p>

                {/* Placeholder visual */}
                <div className="w-full h-32 md:h-36 rounded-lg bg-[#1a1a1a] border border-white/[0.04] mb-8 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-white/[0.08]" />
                </div>

                {/* Event title */}
                <h3 className="text-lg md:text-xl font-medium text-text-primary tracking-tight mb-3 group-hover:text-white transition-colors duration-300">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                  {event.description}
                </p>

                {/* Learn more link */}
                <div className="mt-6 flex items-center gap-2 text-xs text-text-muted group-hover:text-text-secondary transition-colors duration-300">
                  <span className="tracking-wide">Learn more</span>
                  <svg
                    className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

