import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventsDiscovery from "@/components/events/EventsDiscovery";

export const metadata: Metadata = {
  title: "Events Discovery — AMBIORA 2026 | NMIMS Shirpur",
  description:
    "Explore the five central competitive challenges of the AMBIORA technology festival: HANDOFF, TRADE RUSH, DRONE-O-MANIA, PROMPT WARS, and CASE.exe.",
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-28 px-6 md:px-8 max-w-7xl mx-auto w-full">
        <EventsDiscovery />
      </main>
      <Footer />
    </>
  );
}
