import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 md:px-8 max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
            <span className="text-[10px] md:text-xs tracking-[0.25em] text-text-muted uppercase font-medium">
              Inquiries
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-normal text-text-primary leading-tight mb-5">
            Connect With AMBIORA
          </h1>
          <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            Reach out to the festival organizing team at NMIMS Shirpur Campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-sm">
            <p className="text-[10px] tracking-[0.25em] text-text-muted uppercase mb-3 font-medium">
              General Inquiries
            </p>
            <p className="text-base font-semibold text-text-primary mb-1">contact@ambiora.org</p>
            <p className="text-xs text-text-muted leading-relaxed">
              For campus coordination, student registrations, and festival guidance.
            </p>
          </div>
          <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-sm">
            <p className="text-[10px] tracking-[0.25em] text-text-muted uppercase mb-3 font-medium">
              Campus Address
            </p>
            <p className="text-base font-semibold text-text-primary mb-1">Mukesh Patel Technology Park</p>
            <p className="text-xs text-text-muted leading-relaxed">
              NMIMS Shirpur Campus, Babulde, Shirpur, Dhule, Maharashtra 425405.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
