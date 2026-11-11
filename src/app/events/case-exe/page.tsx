import { notFound } from "next/navigation";
import EventDetailPlaceholder from "@/components/ui/EventDetailPlaceholder";
import { AMBIORA_EVENTS } from "@/data/events";

export default function CaseExePage() {
  const event = AMBIORA_EVENTS.find((e) => e.slug === "case-exe");
  if (!event) notFound();
  return <EventDetailPlaceholder event={event} />;
}
