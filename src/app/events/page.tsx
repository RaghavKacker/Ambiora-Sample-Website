import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center min-h-screen">
        <div className="text-center px-6">
          <p className="text-[10px] md:text-xs tracking-[0.35em] text-text-muted uppercase mb-6">
            Coming Soon
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-text-primary">
            Events
          </h1>
          <p className="mt-4 text-sm text-text-secondary max-w-md mx-auto">
            The full events listing will be available soon. Stay tuned.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

