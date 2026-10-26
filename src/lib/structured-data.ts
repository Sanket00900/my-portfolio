import { jobs, life, profile, projects } from "@/content";
import { siteName, siteUrl } from "./site";

/**
 * Schema.org graph: WebSite + ProfilePage + Person (+ projects as CreativeWork).
 * Helps Google understand who the site is about (knowledge panel / rich results)
 * and gives AI search engines clean, structured facts.
 * Validate at https://validator.schema.org and https://search.google.com/test/rich-results
 */
export function buildStructuredData() {
  const personId = `${siteUrl}/#person`;
  const sameAs = Object.values(profile.socials).filter((url): url is string => Boolean(url));
  const current = jobs.find((job) => job.end === null);

  const person = {
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    url: siteUrl,
    email: `mailto:${profile.email}`,
    jobTitle: profile.role,
    description: profile.seoDescription,
    ...(profile.photo ? { image: `${siteUrl}${profile.photo.src}` } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location.city,
      addressCountry: profile.location.country,
    },
    ...(current ? { worksFor: { "@type": "Organization", name: current.company } } : {}),
    knowsAbout: [...profile.skills, ...life.interests.map((i) => i.title)],
    sameAs,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: profile.seoDescription,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: `${profile.name} — ${profile.role}`,
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": personId },
        dateModified: profile.lastUpdated,
      },
      person,
      ...projects.map((project) => ({
        "@type": "CreativeWork",
        name: project.name,
        description: `${project.summary} ${project.result}`,
        genre: project.category,
        dateCreated: project.year,
        creator: { "@id": personId },
        ...(project.href ? { url: project.href } : {}),
      })),
    ],
  };
}
