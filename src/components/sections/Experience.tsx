import { careerStart, jobs, sections } from "@/content";
import { SectionHeading } from "@/components/SectionHeading";
import { BranchLabel, BranchRail } from "@/components/BranchRail";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="bg-band [--rail-bg:var(--band)]">
      <div className="mx-auto max-w-[1240px] px-6 py-24 md:py-[120px]">
        <SectionHeading intro={sections.experience} headingId="experience-title" />

        <ol className="m-0 list-none p-0">
          {jobs.map((job) => {
            const isCurrent = job.end === null;
            return (
              <li key={job.branch} data-lane={job.lane} className="reveal flex gap-5">
                <BranchRail mode={isCurrent ? "open" : "merged"} commitPosition="high" />
                <article className="flex min-w-0 flex-1 flex-wrap gap-x-10 gap-y-3 border-b border-line pb-[72px] pt-14">
                  <div className="flex flex-[0_0_200px] flex-col items-start gap-2.5">
                    <span className="lane-pill rounded-full border px-2.5 py-0.5 font-mono text-xs">{job.branch}</span>
                    <span className="text-[15px] text-muted">
                      <time>{job.start}</time> — {isCurrent ? "Now" : <time>{job.end}</time>}
                    </span>
                    {isCurrent && (
                      <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-[#0b0b0c]">Current role</span>
                    )}
                  </div>
                  <div className="min-w-0 flex-[999_1_380px]">
                    <h3 className="m-0 text-[26px] font-semibold tracking-[-0.02em]">{job.role}</h3>
                    <p className="mt-1 text-[17px] text-muted">
                      {job.company} · {job.location}
                    </p>
                    <p className="mt-3.5 max-w-[640px] text-[17px] leading-[1.65] text-soft">{job.summary}</p>
                    {job.promotion && (
                      <p className="lane-pill mt-4 inline-flex items-center gap-2 border-0 text-sm">
                        <span aria-hidden="true">⤴</span>
                        {job.promotion}
                      </p>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>

        <p className="m-0 flex items-center gap-5">
          <span className="flex flex-[0_0_64px]">
            <BranchLabel>start</BranchLabel>
          </span>
          <span className="text-[15px] text-muted">{careerStart}</span>
        </p>
      </div>
    </section>
  );
}
