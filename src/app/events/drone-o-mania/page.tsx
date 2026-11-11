import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AMBIORA_EVENTS } from "@/data/events";
import CinematicEventPage from "@/components/events/CinematicEventPage";

const event = AMBIORA_EVENTS.find((e) => e.slug === "drone-o-mania");

export const metadata: Metadata = {
  title: "DRONE-O-MANIA — Aerial Robotics | AMBIORA 2026",
  description:
    "Precision flight, obstacle vectoring and autonomous navigation. Pilot custom-engineered UAVs through complex geometric courses.",
};

export default function DroneOManiaPage() {
  if (!event) notFound();
  return <CinematicEventPage event={event} />;
}
