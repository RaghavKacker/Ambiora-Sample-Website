import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ambiora.nmims.edu";

  const staticRoutes = [
    "",
    "/events",
    "/schedule",
    "/about",
    "/sponsors",
    "/contact",
    "/events/handoff",
    "/events/trade-rush",
    "/events/drone-o-mania",
    "/events/prompt-wars",
    "/events/case-exe",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/events/") ? 0.8 : 0.7,
  }));
}
