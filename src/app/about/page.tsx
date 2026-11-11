import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 md:px-8 max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
            <span className="text-[10px] md:text-xs tracking-[0.25em] text-text-muted uppercase font-medium">
              Festival Identity
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-normal text-text-primary leading-tight mb-5">
            About AMBIORA
          </h1>
          <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            The flagship annual technology festival at NMIMS Shirpur Campus, uniting engineers, creators, and innovators.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="space-y-8 text-text-secondary text-sm sm:text-base leading-relaxed">
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-semibold text-text-primary mb-4">
              Our Vision
            </h2>
            <p className="mb-4">
              AMBIORA represents the convergence of technological rigor and creative imagination. Derived from ambient exploration and cosmic horizons, the festival serves as a premier proving ground for undergraduate engineers and technological visionaries.
            </p>
            <p>
              Over three high-intensity days, participants immerse themselves in algorithmic competitions, hardware challenges, autonomous robotics vectoring, and generative AI synthesis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#111111]/80">
              <h3 className="text-base font-semibold text-text-primary mb-2">Campus Location</h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                NMIMS Mukesh Patel Technology Park, Shirpur, Maharashtra 425405.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#111111]/80">
              <h3 className="text-base font-semibold text-text-primary mb-2">Festival Edition</h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                AMBIORA 2026 · Multi-Track Intercollegiate Techfest.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
