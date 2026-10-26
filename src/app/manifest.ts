import type { MetadataRoute } from "next";
import { profile } from "@/content";
import { siteTitle, themeColors } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteTitle,
    short_name: profile.name.split(" ")[0] ?? profile.name,
    description: profile.seoDescription,
    start_url: "/",
    display: "standalone",
    background_color: themeColors.dark,
    theme_color: themeColors.dark,
    icons: [{ src: "/apple-icon", sizes: "180x180", type: "image/png" }],
  };
}
