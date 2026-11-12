import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center min-h-[75vh] px-6 text-center pt-24 pb-16">
        <div className="relative inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full border border-white/10 bg-white/[0.02]">
          <span className="text-2xl font-mono text-text-muted">404</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono tracking-wider text-text-muted uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse" />
          Sector Coordinate Not Found
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-text-primary mb-4">
          Trajectory Lost in Deep Orbit
        </h1>

        <p className="max-w-md text-sm sm:text-base text-text-secondary leading-relaxed mb-8">
          The requested route or festival arena does not exist within the AMBIORA 2026 registry. Verify the destination or return to known coordinates.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-bg-primary text-xs font-semibold tracking-wider uppercase hover:bg-neutral-200 transition-colors duration-200"
          >
            Return to Festival Home
          </Link>
          <Link
            href="/events"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/20 text-white text-xs font-semibold tracking-wider uppercase hover:border-white/40 hover:bg-white/[0.05] transition-colors duration-200"
          >
            Explore Events
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

