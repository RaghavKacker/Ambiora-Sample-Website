import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AMBIORA_EVENTS } from "@/data/events";
import CinematicEventPage from "@/components/events/CinematicEventPage";

const event = AMBIORA_EVENTS.find((e) => e.slug === "prompt-wars");

export const metadata: Metadata = {
  title: "PROMPT WARS — Generative AI | AMBIORA 2026",
  description:
    "Cognitive boundary probing and generative synthesis. Formulate calibrated system prompts to bypass adversarial heuristics and synthesize complex outputs.",
};

export default function PromptWarsPage() {
  if (!event) notFound();
  return <CinematicEventPage event={event} />;
}
