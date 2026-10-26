import { profile } from "@/content";

/** Absolute site URL without a trailing slash. Set NEXT_PUBLIC_SITE_URL in production. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://fitai.host").replace(/\/$/, "");

export const siteName = profile.name;
export const siteTitle = `${profile.name} — ${profile.role}`;

/** Theme background colours, kept in sync with globals.css (used for the theme wipe and viewport). */
export const themeColors = {
  light: "#f7f7f5",
  dark: "#0b0b0c",
} as const;
