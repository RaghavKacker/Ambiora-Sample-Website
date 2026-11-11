import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AMBIORA_EVENTS } from "@/data/events";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 md:px-8 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <p className="text-[10px] md:text-xs tracking-[0.35em] text-text-muted uppercase mb-4">
            AMBIORA Techfest
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-primary">
            Events Directory
          </h1>
          <p className="mt-4 text-sm text-text-secondary max-w-lg mx-auto">
            Discover the five central competitive challenges of the AMBIORA universe.
            Click an event to enter its dedicated briefing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMBIORA_EVENTS.map((event) => (
            <Link
              key={event.id}
              href={event.route}
              className="group block p-7 rounded-2xl border border-white/[0.08] bg-[#111111]/70 hover:bg-[#141414] hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] tracking-[0.25em] text-text-muted uppercase">
                  {event.category}
                </span>
                <span className="text-xs text-text-muted group-hover:text-text-primary transition-colors duration-200">
                  →
                </span>
              </div>
              <h2 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-white transition-colors duration-200">
                {event.name}
              </h2>
              <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed mb-6">
                {event.description}
              </p>
              <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-text-muted">
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
