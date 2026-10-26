import type { Metadata, Viewport } from "next";
import { Anton, Gochi_Hand, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { profile } from "@/content";
import { siteName, siteTitle, siteUrl, themeColors } from "@/lib/site";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { RevealObserver } from "@/components/RevealObserver";
import "./globals.css";

/* Fonts are self-hosted at build time by next/font — no layout shift, no third-party requests. */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
const gochiHand = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gochi-hand",
  display: "swap",
  preload: false,
});
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s · ${siteName}`,
  },
  description: profile.seoDescription,
  keywords: profile.keywords,
  applicationName: siteName,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: "/",
    siteName,
    title: siteTitle,
    description: profile.seoDescription,
    locale: "en_IN",
    firstName: profile.name.split(" ")[0],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: profile.seoDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, email: false, address: false },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: themeColors.light },
    { media: "(prefers-color-scheme: dark)", color: themeColors.dark },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${gochiHand.variable} ${anton.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <ThemeProvider>
          {children}
          <RevealObserver />
        </ThemeProvider>
      </body>
    </html>
  );
}
