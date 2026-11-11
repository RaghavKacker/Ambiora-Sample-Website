import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AMBIORA_EVENTS } from "@/data/events";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto w-full">
        {/* Header with clear optical spacing */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[10px] md:text-xs tracking-[0.3em] text-text-muted uppercase mb-4">
            AMBIORA Techfest
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-normal text-text-primary leading-tight">
            Events Directory
          </h1>
          <p className="mt-4 text-sm sm:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            Discover the five central competitive challenges of the AMBIORA universe.
            Select an event to explore its dedicated mission briefing.
          </p>
        </div>

        {/* 5 Event Cards Grid with Real Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {AMBIORA_EVENTS.map((event) => (
            <Link
              key={event.id}
              href={event.route}
              className="group block p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#111111]/80 hover:bg-[#151515] hover:border-white/20 transition-all duration-300"
            >
              {/* Card Image Banner */}
              <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-5 border border-white/[0.06] bg-[#141414]">
                <Image
                  src={event.image}
                  alt={event.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] tracking-[0.2em] font-medium uppercase bg-[#080808]/80 backdrop-blur-md border border-white/10 text-white/90">
                  {event.category}
                </span>
              </div>

              {/* Title & Arrow */}
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-text-primary group-hover:text-white transition-colors duration-200">
                  {event.name}
                </h2>
                <span className="text-sm text-text-muted group-hover:text-text-primary group-hover:translate-x-1 transition-all duration-200">
                  →
                </span>
              </div>

              {/* Tagline */}
              <p className="text-xs font-medium text-text-muted mb-3 line-clamp-1">
                {event.tagline}
              </p>

              {/* Description */}
              <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed mb-6">
                {event.description}
              </p>

              {/* Footer Meta */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-text-muted">
                <span>{event.datePlaceholder}</span>
                <span>{event.teamSizePlaceholder}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
