"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { AMBIORA_EVENTS } from "@/data/events";

export default function FeaturedEvents() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const featured = AMBIORA_EVENTS.slice(0, 3);

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
            className="text-[10px] md:text-xs tracking-[0.3em] text-text-muted uppercase mb-4"
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
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-normal text-text-primary"
          >
            Explore what awaits.
          </motion.h2>
        </div>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.3 + index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <Link
                href={event.route}
                className="block relative bg-bg-secondary rounded-2xl border border-white/[0.08] p-6 sm:p-7 md:p-8 transition-all duration-500 hover:border-white/[0.2] hover:bg-[#151515]"
              >
                {/* Category badge */}
                <p className="text-[10px] tracking-[0.25em] text-text-muted uppercase mb-4">
                  {event.category}
                </p>

                {/* Real High-Quality Sample Image */}
                <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-6 border border-white/[0.06] bg-[#141414]">
                  <Image
                    src={event.image}
                    alt={event.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle dark vignette overlay for Apple-inspired depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Event title */}
                <h3 className="text-lg md:text-xl font-semibold text-text-primary tracking-normal mb-2.5 group-hover:text-white transition-colors duration-300">
                  {event.name}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed line-clamp-3 mb-6">
                  {event.description}
                </p>

                {/* Learn more link */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-text-muted group-hover:text-text-primary transition-colors duration-300">
                  <span className="tracking-wide font-medium">Explore briefing</span>
                  <svg
                    className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300"
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
