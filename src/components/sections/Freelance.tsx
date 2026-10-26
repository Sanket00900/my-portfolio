import { gigs, sections } from "@/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Avatar, CheckIcon } from "@/components/ui";

export function Freelance() {
  return (
    <section id="freelance" aria-labelledby="freelance-title" className="mx-auto max-w-[1240px] px-6 pt-24 md:pt-[120px]">
      <SectionHeading intro={sections.freelance} headingId="freelance-title" />

      <div className="stagger grid grid-cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))] gap-5">
        {gigs.map((gig, i) => (
          <article key={gig.id} className="reveal flex flex-col gap-4 rounded-[20px] border border-line bg-card p-8">
            <div className="flex flex-wrap items-center gap-2.5">
              <span aria-hidden="true" className="font-mono text-[13px] text-muted">
                #{gig.id}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ok-line px-2.5 py-0.5 text-[13px] font-medium text-ok">
                <CheckIcon size={13} />
                Delivered
              </span>
              <span className="ml-auto text-sm text-muted">{gig.year}</span>
            </div>
            <div>
              <h3 className="m-0 text-[26px] font-semibold tracking-[-0.02em]">{gig.title}</h3>
              <p className="mt-1.5 text-base text-muted">
                for {gig.client} · {gig.industry}
              </p>
            </div>
            <p className="m-0 text-[17px] leading-relaxed text-soft">{gig.summary}</p>
            <p className="m-0 flex items-center gap-2.5 text-base font-semibold">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
              {gig.result}
            </p>
            <figure className="m-0 mt-2 flex flex-col gap-3.5 border-t border-dashed border-line-2 pt-5">
              <blockquote className="m-0 text-[17px] leading-relaxed">“{gig.testimonial.quote}”</blockquote>
              <figcaption className="flex items-center gap-3">
                <Avatar initials={gig.testimonial.initials} index={i} size={36} />
                <span className="flex flex-col">
                  <span className="text-[15px] font-semibold">{gig.testimonial.name}</span>
                  <span className="text-[13px] text-muted">{gig.testimonial.role}</span>
                </span>
              </figcaption>
            </figure>
          </article>
        ))}
      </div>

      <p className="reveal mt-8 text-[17px] text-soft">
        Need something similar?{" "}
        <a href="#contact" className="border-b-2 border-accent font-semibold text-ink">
          Let&apos;s talk about your project →
        </a>
      </p>
    </section>
  );
}
