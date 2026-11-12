import type { MetadataRoute } from "next";
import { AMBIORA_EVENTS } from "@/data/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ambiora.nmims.edu";

  const coreRoutes = [
    "",
    "/events",
    "/schedule",
    "/about",
    "/sponsors",
    "/contact",
  ];

  const eventRoutes = AMBIORA_EVENTS.map((e) => e.route);

  const allRoutes = [...coreRoutes, ...eventRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/events/") ? 0.8 : 0.7,
  }));
}
