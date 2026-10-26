export type Lane = 1 | 2 | 3 | 4;

export type SocialKey = "linkedin" | "github" | "x" | "instagram" | "youtube";

export interface Stat {
  value: string;
  label: string;
}

export interface Profile {
  /** Full name — used in the logo, title tags and structured data. */
  name: string;
  /** Two-letter initials for the favicon / Open Graph image. */
  initials: string;
  role: string;
  location: { city: string; country: string };
  email: string;
  availability: string;
  /** Hero headline split so one phrase can be highlighted in the accent colour. */
  headline: { before: string; accent: string; after: string };
  intro: string;
  /** Short description used for meta description, Open Graph and llms.txt. */
  seoDescription: string;
  keywords: string[];
  /** Put your photo in /public/images and set the path, or leave null for a placeholder. */
  photo: { src: string; alt: string; width: number; height: number } | null;
  resumeUrl: string;
  bookingUrl: string;
  socials: Partial<Record<SocialKey, string>>;
  stats: Stat[];
  skills: string[];
  /** ISO date shown in the footer as "last commit" and used in structured data. */
  lastUpdated: string;
}

export interface SectionIntro {
  number: string;
  label: string;
  hash: string;
  /** Each array item renders on its own line. */
  title: string[];
  subtitle: string;
}

export interface Project {
  slug: string;
  branch: string;
  name: string;
  summary: string;
  result: string;
  category: string;
  year: string;
  href?: string;
  lane: Lane;
}

export interface Job {
  branch: string;
  role: string;
  company: string;
  location: string;
  start: string;
  /** null = current role (open branch). */
  end: string | null;
  summary: string;
  promotion?: string;
  lane: Lane;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  linkedin?: string;
}

export interface Gig {
  id: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  summary: string;
  result: string;
  testimonial: Testimonial;
}

export type InterestKey = "fitness" | "riding" | "travel" | "creating";

export interface Interest {
  key: InterestKey;
  title: string;
  text: string;
  featured?: boolean;
}

export interface Video {
  platform: "Instagram" | "YouTube";
  title: string;
  views: string;
  href: string;
}

export interface Life {
  intro: SectionIntro;
  accentLine: number;
  interests: Interest[];
  stats: Stat[];
  videos: Video[];
  now: { title: string; items: { label: string; value: string }[] };
  blurb: string;
}
