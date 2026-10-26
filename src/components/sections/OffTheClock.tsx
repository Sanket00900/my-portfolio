import type { ReactNode } from "react";
import { life, profile } from "@/content";
import type { InterestKey } from "@/content/types";
import { SectionHeading } from "@/components/SectionHeading";

const interestIcons: Record<InterestKey, ReactNode> = {
  fitness: <path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" />,
  riding: (
    <>
      <circle cx="5" cy="16" r="3.5" />
      <circle cx="19" cy="16" r="3.5" />
      <path d="M5 16l4-6h5l3 6M9 10l-1-3H6M14 10l2-3h2.5" />
    </>
  ),
  travel: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
  creating: (
    <>
      <rect x="2.5" y="6" width="14" height="12" rx="2" />
      <path d="M16.5 10l5-3v10l-5-3" />
    </>
  ),
};

export function OffTheClock() {
  return (
    <section
      id="life"
      aria-labelledby="life-title"
      className="mt-24 border-y border-life-line bg-life-bg text-life-ink md:mt-[120px]"
    >
      <div className="mx-auto max-w-[1240px] px-6 py-24 md:py-[120px]">
        <SectionHeading intro={life.intro} headingId="life-title" tone="life" accentLine={life.accentLine} />

        {/* What I do off the clock */}
        <ul className="stagger m-0 mb-14 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-4 p-0">
          {life.interests.map((interest) => (
            <li
              key={interest.key}
              className={`reveal flex flex-col gap-3 rounded-[20px] p-6 ${
                interest.featured ? "bg-life-feat-bg text-life-feat-ink" : "border border-life-line bg-life-card"
              }`}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className={interest.featured ? "text-life-feat-icon" : "text-life-accent-ink"}
              >
                {interestIcons[interest.key]}
              </svg>
              <h3 className="m-0 font-display text-[30px] font-normal uppercase">{interest.title}</h3>
              <p className={`m-0 text-base leading-normal ${interest.featured ? "text-life-feat-soft" : "text-life-soft"}`}>
                {interest.text}
              </p>
            </li>
          ))}
        </ul>

        <dl className="reveal m-0 mb-14 grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-6 border-y border-life-strong py-7">
          {life.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-1.5 text-[15px] font-medium text-life-muted">{stat.label}</dt>
              <dd className="m-0 font-display text-[52px] leading-none">{stat.value}</dd>
            </div>
          ))}
        </dl>

        {/* Latest videos */}
        <ul className="stagger m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-4 p-0">
          {life.videos.map((video) => (
            <li key={video.title} className="reveal">
              <a
                href={video.href}
                target="_blank"
                rel="noopener"
                className="group relative flex aspect-[9/14] flex-col justify-between overflow-hidden rounded-[20px] border border-life-line bg-life-reel p-[18px] text-[#fff3ec]"
              >
                <span className="flex items-center justify-between text-[13px] text-[#c9b4a8]">
                  <span>{video.platform}</span>
                  <span>{video.views}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="inline-flex h-16 w-16 items-center justify-center self-center rounded-full bg-life-accent text-[#140c08] transition-transform duration-300 group-hover:scale-110"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5.5v13l11-6.5z" />
                  </svg>
                </span>
                <span className="font-display text-[26px] uppercase leading-[1.05] text-white">
                  <span className="sr-only">Watch on {video.platform}: </span>
                  {video.title}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-4">
          <div className="reveal flex-[1_1_340px] rounded-[20px] border border-life-line bg-life-card p-7">
            <p className="m-0 font-mono text-[13px] uppercase tracking-[0.04em] text-life-accent-ink">Right now</p>
            <p className="m-0 mt-2.5 font-display text-[40px] uppercase leading-none">{life.now.title}</p>
            <dl className="m-0 mt-6 flex flex-col">
              {life.now.items.map((item) => (
                <div key={item.label} className="flex justify-between gap-4 border-t border-life-line py-3 text-base">
                  <dt className="text-life-muted">{item.label}</dt>
                  <dd className="m-0 font-semibold">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="reveal flex flex-[1_1_340px] flex-col justify-between gap-6 rounded-[20px] border border-life-line bg-life-card p-7">
            <p className="m-0 text-[22px] font-medium leading-[1.45]">{life.blurb}</p>
            <div className="flex flex-wrap gap-3 text-[15px] font-semibold">
              {profile.socials.instagram && (
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="me noopener"
                  className="inline-flex min-h-[52px] items-center rounded-full bg-life-accent px-6 text-[#140c08]"
                >
                  Follow on Instagram ↗
                </a>
              )}
              {profile.socials.youtube && (
                <a
                  href={profile.socials.youtube}
                  target="_blank"
                  rel="me noopener"
                  className="inline-flex min-h-[52px] items-center rounded-full border border-life-strong px-6"
                >
                  Watch on YouTube ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
