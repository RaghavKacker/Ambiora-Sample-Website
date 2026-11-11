import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AMBIORA_EVENTS } from "@/data/events";
import CinematicEventPage from "@/components/events/CinematicEventPage";

const event = AMBIORA_EVENTS.find((e) => e.slug === "case-exe");

export const metadata: Metadata = {
  title: "CASE.exe — Digital Forensics & Investigation | AMBIORA 2026",
  description:
    "A dark investigative forensic gauntlet. Reconstruct redacted memory dumps, dissect malicious binaries, and decode encrypted transmission logs.",
};

export default function CaseExePage() {
  if (!event) notFound();
  return <CinematicEventPage event={event} />;
}
