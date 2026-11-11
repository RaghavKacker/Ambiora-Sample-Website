import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SponsorsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 md:px-8 max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
            <span className="text-[10px] md:text-xs tracking-[0.25em] text-text-muted uppercase font-medium">
              Partnerships
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-normal text-text-primary leading-tight mb-5">
            Festival Sponsors & Partners
          </h1>
          <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            Collaborating with leading technology pioneers and forward-thinking industry leaders.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-sm text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-text-muted mb-4 font-medium">
            Partnership Opportunities
          </p>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-lg mx-auto mb-8">
            Connect your brand with over 2,000+ top engineering minds, researchers, and innovators at AMBIORA 2026.
          </p>
          <a
            href="mailto:partnerships@ambiora.org"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs tracking-wider uppercase font-semibold bg-white text-black hover:bg-neutral-200 transition-colors duration-300"
          >
            Request Sponsorship Deck
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
