/**
 * All site copy lives here. Replace every [bracketed] placeholder with your own
 * words — the layout, SEO tags and structured data all read from this file.
 */
import type { Gig, Job, Life, Profile, Project, SectionIntro, Testimonial } from "./types";

export const profile: Profile = {
  name: "{Sanket}",
  initials: "S",
  role: "Software Engineer",
  location: { city: "[City]", country: "[Country]" },
  email: "hello@your-domain.com",
  availability: "Available for new projects",
  headline: { before: "I build software that ", accent: "just works", after: "." },
  intro:
    "Hi, I'm Sanket — a software engineer. I help companies turn ideas into apps and websites their customers love to use.",
  seoDescription:
    "Sanket is a software engineer who turns ideas into fast, reliable web and mobile products. See selected work, experience, freelance projects and how to get in touch.",
  keywords: [
    "Sanket",
    "software engineer",
    "full-stack developer",
    "web developer",
    "product engineer",
    "freelance developer",
    "Next.js developer",
    "TypeScript",
  ],
  photo: null, // e.g. { src: "/images/sanket.jpg", alt: "Portrait of Sanket", width: 800, height: 1000 }
  resumeUrl: "/resume.pdf",
  bookingUrl: "https://cal.com/[your-handle]",
  socials: {
    linkedin: "https://www.linkedin.com/in/[your-handle]",
    github: "https://github.com/[your-handle]",
    instagram: "https://www.instagram.com/[your-handle]",
    youtube: "https://www.youtube.com/@[your-handle]",
  },
  stats: [
    { value: "[X]+", label: "years building products" },
    { value: "[X]", label: "products launched" },
    { value: "[X]", label: "teams and clients helped" },
  ],
  skills: [
    "Websites",
    "Mobile apps",
    "AI features",
    "Product strategy",
    "Fast, accessible design",
    "Team leadership",
  ],
  lastUpdated: "2026-10-26",
};

export const sections = {
  work: {
    number: "01",
    label: "Selected work",
    hash: "c7d2a95",
    title: ["[Things I've", "actually shipped.]"],
    subtitle:
      "Each project branches off my main line of work and merges back once it shipped. Client work is described at a high level where it's private.",
  },
  experience: {
    number: "02",
    label: "Experience",
    hash: "8b41e07",
    title: ["[More than", "the job title.]"],
    subtitle: "My career as a timeline, newest at the top. The open branch is where I am today.",
  },
  testimonials: {
    number: "03",
    label: "Testimonials",
    hash: "5c3b7f2",
    title: ["What people", "I've worked with say."],
    subtitle: "Managers and teammates from my full-time roles.",
  },
  freelance: {
    number: "04",
    label: "Freelance",
    hash: "a4f0c19",
    title: ["[Independent work,", "happy clients.]"],
    subtitle:
      "Alongside my full-time roles I take on a few freelance projects a year. Here's what I delivered — and what the clients said.",
  },
  contact: {
    number: "06",
    label: "Contact",
    hash: "e19a4c3",
    title: ["[Have a problem", "worth solving?]"],
    subtitle: "Projects, full-time roles, or just a chat — I reply to every message within two days.",
  },
} satisfies Record<string, SectionIntro>;

export const projects: Project[] = [
  {
    slug: "project-one",
    branch: "project-one",
    name: "[Project One]",
    summary: "[An app that helps small shops take orders online.]",
    result: "[Cut order time in half]",
    category: "Web app",
    year: "2026",
    lane: 1,
  },
  {
    slug: "project-two",
    branch: "project-two",
    name: "[Project Two]",
    summary: "[A mobile app that reminds patients to take their medicine.]",
    result: "[Used by X,000 people]",
    category: "Mobile app",
    year: "2025",
    lane: 2,
  },
  {
    slug: "project-three",
    branch: "project-three",
    name: "[Project Three]",
    summary: "[A tool that saves engineering teams hours of manual review.]",
    result: "[Adopted by X teams]",
    category: "Internal tool",
    year: "2025",
    lane: 3,
  },
  {
    slug: "project-four",
    branch: "project-four",
    name: "[Project Four]",
    summary: "[A new website that made a brand easier to find on Google.]",
    result: "[X% more visitors]",
    category: "Website",
    year: "2024",
    lane: 4,
  },
];

export const jobs: Job[] = [
  {
    branch: "company-a",
    role: "[Senior Software Engineer]",
    company: "[Company A]",
    location: "[City]",
    start: "2024",
    end: null,
    summary:
      "[In plain words: what the company does, what you're responsible for, and what got better because of you.]",
    promotion: "[Promoted from Software Engineer in 2025]",
    lane: 1,
  },
  {
    branch: "company-b",
    role: "[Software Engineer]",
    company: "[Company B]",
    location: "Remote",
    start: "2022",
    end: "2024",
    summary:
      "[In plain words: what the company does, what you were responsible for, and what got better because of you.]",
    lane: 2,
  },
  {
    branch: "company-c",
    role: "[Junior Developer]",
    company: "[Company C]",
    location: "[City]",
    start: "2020",
    end: "2022",
    summary:
      "[In plain words: what the company does, what you were responsible for, and what got better because of you.]",
    lane: 3,
  },
];

export const careerStart = "[Where it began — e.g. B.Tech, University, 2020]";

export const testimonials: Testimonial[] = [
  {
    quote: "[What it was like to work with you, and one concrete thing you did that made a difference.]",
    name: "[Full Name]",
    role: "[Engineering Manager, Company A]",
    initials: "AB",
    linkedin: "https://www.linkedin.com/in/[their-handle]",
  },
  {
    quote: "[A product lead on how you communicated, kept things simple, and delivered on time.]",
    name: "[Full Name]",
    role: "[Product Lead, Company A]",
    initials: "CD",
    linkedin: "https://www.linkedin.com/in/[their-handle]",
  },
  {
    quote: "[A teammate on how you helped them grow or unblocked the team when it mattered.]",
    name: "[Full Name]",
    role: "[Product Designer, Company B]",
    initials: "EF",
    linkedin: "https://www.linkedin.com/in/[their-handle]",
  },
];

export const gigs: Gig[] = [
  {
    id: "12",
    title: "[Online store rebuild]",
    client: "[Client name]",
    industry: "Retail",
    year: "2026",
    summary: "[Rebuilt their online shop so customers could find products and check out faster on their phones.]",
    result: "[Sales up X% in the first month]",
    testimonial: {
      quote: "[Short client quote about the result and what it was like to work together.]",
      name: "[Client Name]",
      role: "[Owner, Client name]",
      initials: "GH",
    },
  },
  {
    id: "9",
    title: "[Booking app for a clinic]",
    client: "[Client name]",
    industry: "Healthcare",
    year: "2025",
    summary: "[Replaced phone-and-paper bookings with a simple app patients can use themselves.]",
    result: "[X hours a week saved for staff]",
    testimonial: {
      quote: "[Short client quote about reliability and communication.]",
      name: "[Client Name]",
      role: "[Practice Manager]",
      initials: "IJ",
    },
  },
  {
    id: "6",
    title: "[Startup MVP in 6 weeks]",
    client: "[Client name]",
    industry: "SaaS",
    year: "2025",
    summary: "[Took a founder from an idea on a slide to a working product their first customers could pay for.]",
    result: "[Raised a pre-seed round on it]",
    testimonial: {
      quote: "[Short founder quote about speed and judgement.]",
      name: "[Client Name]",
      role: "[Founder & CEO]",
      initials: "KL",
    },
  },
  {
    id: "3",
    title: "[Website & SEO refresh]",
    client: "[Client name]",
    industry: "Agency",
    year: "2024",
    summary: "[Redesigned and sped up their website so more people find them on Google.]",
    result: "[X× more enquiries]",
    testimonial: {
      quote: "[Short client quote about the impact on their business.]",
      name: "[Client Name]",
      role: "[Director]",
      initials: "MN",
    },
  },
];

export const life: Life = {
  intro: {
    number: "05",
    label: "Off the clock",
    hash: "branch: life/*",
    title: ["Lift. Ride.", "Wander.", "Film it all."],
    subtitle:
      "When I'm not building software, I'm training, out on my Royal Enfield Continental GT 650, or planning the next trip. I share the workouts, rides, places and everyday habits with [X]K people online.",
  },
  accentLine: 1,
  interests: [
    { key: "fitness", title: "Fitness", text: "[Strength training most mornings, plus running. Workouts that fit around a desk job.]" },
    { key: "riding", title: "Riding", text: "[Weekend rides and long road trips on my Royal Enfield Continental GT 650.]", featured: true },
    { key: "travel", title: "Travel", text: "[Mountains over beaches. Slow trips, local food, and roads worth the detour.]" },
    { key: "creating", title: "Creating", text: "[Short videos about all of the above — fitness, rides, travel and everyday lifestyle.]" },
  ],
  stats: [
    { value: "[X]K", label: "people following along" },
    { value: "[X],000 km", label: "ridden on the GT 650" },
    { value: "[X]", label: "states & countries explored" },
    { value: "[X] yrs", label: "of consistent training" },
  ],
  videos: [
    { platform: "YouTube", title: "[500 km in a day on the GT 650]", views: "[X]K views", href: "https://www.youtube.com/@[your-handle]" },
    { platform: "Instagram", title: "[My 5am morning routine]", views: "[X]K views", href: "https://www.instagram.com/[your-handle]" },
    { platform: "YouTube", title: "[3 days in the mountains]", views: "[X]K views", href: "https://www.youtube.com/@[your-handle]" },
    { platform: "Instagram", title: "[30-min desk-job workout]", views: "[X]K views", href: "https://www.instagram.com/[your-handle]" },
  ],
  now: {
    title: "[Planning the next long ride]",
    items: [
      { label: "Next ride", value: "[City → City]" },
      { label: "Next trip", value: "[Destination, month]" },
      { label: "Training for", value: "[Half marathon]" },
      { label: "Deadlift PR", value: "[X kg]" },
    ],
  },
  blurb:
    "[Workouts for desk-job people, ride diaries from the GT 650, travel notes, and the everyday routines that keep me going.]",
};

export const navItems = [
  { id: "work", label: "Work", variant: "work" },
  { id: "experience", label: "Experience", variant: "experience" },
  { id: "freelance", label: "Freelance", variant: "freelance" },
  { id: "life", label: "Off the clock", variant: "life" },
  { id: "contact", label: "Contact", variant: "contact" },
] as const;

export type NavVariant = (typeof navItems)[number]["variant"];
