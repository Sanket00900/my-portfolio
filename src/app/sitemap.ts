import type { MetadataRoute } from "next";
import { profile } from "@/content";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(profile.lastUpdated),
      changeFrequency: "monthly",
      priority: 1,
      ...(profile.photo ? { images: [`${siteUrl}${profile.photo.src}`] } : {}),
    },
  ];
}
