import { gigs, jobs, life, profile, projects, testimonials } from "@/content";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

/**
 * /llms.txt — a plain-text summary for AI assistants and AI search engines
 * (ChatGPT, Perplexity, Claude, Gemini) so they describe you accurately.
 */
export function GET() {
  const lines = [
    `# ${profile.name}`,
    "",
    `> ${profile.seoDescription}`,
    "",
    `- Role: ${profile.role}`,
    `- Location: ${profile.location.city}, ${profile.location.country}`,
    `- Status: ${profile.availability}`,
    `- Email: ${profile.email}`,
    `- Website: ${siteUrl}`,
    ...Object.entries(profile.socials).map(([k, v]) => `- ${k}: ${v}`),
    "",
    "## Selected work",
    ...projects.map((p) => `- ${p.name} (${p.category}, ${p.year}): ${p.summary} Result: ${p.result}`),
    "",
    "## Experience",
    ...jobs.map((j) => `- ${j.role} at ${j.company}, ${j.start}–${j.end ?? "present"}: ${j.summary}`),
    "",
    "## Freelance",
    ...gigs.map((g) => `- ${g.title} for ${g.client} (${g.industry}, ${g.year}): ${g.summary} Result: ${g.result}`),
    "",
    "## What colleagues say",
    ...testimonials.map((t) => `- "${t.quote}" — ${t.name}, ${t.role}`),
    "",
    "## Outside work",
    ...life.interests.map((i) => `- ${i.title}: ${i.text}`),
    "",
    "## Links",
    `- [Résumé](${siteUrl}${profile.resumeUrl})`,
    `- [Book a call](${profile.bookingUrl})`,
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
