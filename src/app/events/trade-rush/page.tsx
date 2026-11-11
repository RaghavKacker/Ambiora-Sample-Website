import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AMBIORA_EVENTS } from "@/data/events";
import CinematicEventPage from "@/components/events/CinematicEventPage";

const event = AMBIORA_EVENTS.find((e) => e.slug === "trade-rush");

export const metadata: Metadata = {
  title: "TRADE RUSH — Quantitative Simulation | AMBIORA 2026",
  description:
    "High-frequency algorithmic trading simulation under volatile dynamics. Navigate simulated global financial markets and real-time risk management.",
};

export default function TradeRushPage() {
  if (!event) notFound();
  return <CinematicEventPage event={event} />;
}
