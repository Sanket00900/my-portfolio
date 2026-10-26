import { projects, sections } from "@/content";
import { SectionHeading } from "@/components/SectionHeading";
import { BranchIcon, BranchLabel, BranchRail } from "@/components/BranchRail";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-[1240px] px-6 py-24 md:py-[120px]">
      <SectionHeading intro={sections.work} headingId="work-title" />

      <div className="flex items-center gap-5">
        <span className="flex flex-[0_0_64px]">
          <BranchLabel>main</BranchLabel>
        </span>
      </div>

      <ol className="m-0 list-none p-0">
        {projects.map((project) => {
          const Tag = project.href ? "a" : "div";
          return (
            <li key={project.slug} data-lane={project.lane} className="reveal flex gap-5">
              <BranchRail />
              <article className="min-w-0 flex-1 border-b border-line">
                <Tag
                  {...(project.href ? { href: project.href } : {})}
                  className="flex flex-wrap items-center gap-x-10 gap-y-4 py-16"
                >
                  <div className="flex min-w-0 flex-[999_1_380px] flex-col gap-3">
                    <span className="lane-pill inline-flex items-center gap-2 self-start rounded-full border px-2.5 py-0.5 font-mono text-xs">
                      <BranchIcon />
                      {project.branch}
                    </span>
                    <h3 className="m-0 text-[clamp(28px,3.6vw,48px)] font-medium leading-[1.05] tracking-[-0.03em]">
                      {project.name}
                    </h3>
                    <p className="m-0 text-[17px] leading-[1.55] text-soft">{project.summary}</p>
                  </div>
                  <div className="flex flex-[1_1_200px] flex-col gap-1.5 text-[15px] text-muted">
                    <span className="font-medium text-ink">{project.result}</span>
                    <span>
                      {project.category} · {project.year}
                    </span>
                    {project.href && (
                      <span className="mt-2 inline-flex items-center gap-2 font-medium text-ink">
                        Read case study <span aria-hidden="true">↗</span>
                      </span>
                    )}
                  </div>
                </Tag>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
