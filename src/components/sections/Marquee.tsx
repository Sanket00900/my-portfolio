import { profile } from "@/content";

/** Decorative, continuously scrolling strip of skills (the same list is in the page text and JSON-LD). */
export function Marquee() {
  const items = [...profile.skills, ...profile.skills];
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-line">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap px-6 py-[22px] text-[22px] font-medium text-muted">
        {items.map((skill, i) => (
          <span key={`${skill}-${i}`} className="inline-flex items-center gap-12">
            {skill}
            <span className="text-accent-ink">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
