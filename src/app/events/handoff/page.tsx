import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AMBIORA_EVENTS } from "@/data/events";
import CinematicEventPage from "@/components/events/CinematicEventPage";

const event = AMBIORA_EVENTS.find((e) => e.slug === "handoff");

export const metadata: Metadata = {
  title: "HANDOFF — Relay Engineering | AMBIORA 2026",
  description:
    "A high-stakes multi-stage software engineering relay. Teams exchange modular codebases under strict constraints, testing design continuity and agile execution.",
};

export default function HandoffPage() {
  if (!event) notFound();
  return <CinematicEventPage event={event} />;
}
