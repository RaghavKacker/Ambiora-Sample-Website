import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AMBIORA_EVENTS } from "@/data/events";
import CinematicEventPage from "@/components/events/CinematicEventPage";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return AMBIORA_EVENTS.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = AMBIORA_EVENTS.find((e) => e.slug === slug);
  if (!event) {
    return {
      title: "Event Not Found | AMBIORA 2026",
      description: "The requested festival arena could not be found.",
    };
  }

  return {
    title: `${event.name} — ${event.category} | AMBIORA 2026`,
    description: event.description,
    openGraph: {
      title: `${event.name} — ${event.category} | AMBIORA 2026`,
      description: event.description,
      images: [{ url: event.image, alt: event.imageAlt }],
    },
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = AMBIORA_EVENTS.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return <CinematicEventPage event={event} />;
}
