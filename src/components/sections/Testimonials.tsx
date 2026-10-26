import { profile, sections, testimonials } from "@/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Avatar, CheckIcon } from "@/components/ui";

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="mx-auto max-w-[1240px] px-6 pt-24 md:pt-[120px]">
      <SectionHeading intro={sections.testimonials} headingId="testimonials-title">
        {profile.socials.linkedin && (
          <>
            {" "}
            More on{" "}
            <a href={profile.socials.linkedin} rel="me noopener" target="_blank" className="border-b border-line-2 text-ink">
              LinkedIn ↗
            </a>
          </>
        )}
      </SectionHeading>

      <div className="stagger grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-5">
        {testimonials.map((t, i) => (
          <figure key={`${t.name}-${i}`} className="reveal m-0 flex flex-col gap-6 rounded-[20px] border border-line bg-card p-7">
            <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-ok-line px-2.5 py-1 text-[13px] font-medium text-ok">
              <CheckIcon />
              Approved
            </span>
            <blockquote className="m-0 flex-1 text-[19px] leading-relaxed">“{t.quote}”</blockquote>
            <figcaption className="flex items-center gap-3.5 border-t border-line pt-5">
              <Avatar initials={t.initials} index={i} size={44} />
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="text-base font-semibold">{t.name}</span>
                <span className="text-sm text-muted">{t.role}</span>
              </span>
              {t.linkedin && (
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener"
                  aria-label={`${t.name} on LinkedIn`}
                  className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-2 text-sm font-bold"
                >
                  in
                </a>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
