import type { ReactNode } from "react";
import { profile, sections } from "@/content";
import { SectionHeading } from "@/components/SectionHeading";

interface Key {
  href: string;
  label: string;
  note: ReactNode;
  notePosition: "above" | "below";
  rotate: number;
  accent?: boolean;
  external?: boolean;
  download?: boolean;
  icon: ReactNode;
}

const iconProps = {
  width: 42,
  height: 42,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function buildKeys(): Key[] {
  const keys: Key[] = [
    {
      href: `mailto:${profile.email}`,
      label: `Email me at ${profile.email}`,
      note: (
        <>
          email me about projects, roles, or a coffee chat
          <br />
          {profile.email}
        </>
      ),
      notePosition: "below",
      rotate: -3,
      icon: (
        <svg {...iconProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
  ];
  if (profile.socials.linkedin) {
    keys.push({
      href: profile.socials.linkedin,
      label: "LinkedIn profile",
      note: "where I'm most active",
      notePosition: "above",
      rotate: 2,
      external: true,
      icon: <span className="text-[44px] font-bold tracking-[-0.04em]">in</span>,
    });
  }
  if (profile.socials.github) {
    keys.push({
      href: profile.socials.github,
      label: "GitHub profile",
      note: "the code behind my work lives here",
      notePosition: "below",
      rotate: -1,
      external: true,
      icon: (
        <svg {...iconProps}>
          <circle cx="6" cy="5" r="2.5" />
          <circle cx="6" cy="19" r="2.5" />
          <circle cx="18" cy="7" r="2.5" />
          <path d="M6 7.5v9M18 9.5c0 4-6 3-11 7" />
        </svg>
      ),
    });
  }
  keys.push(
    {
      href: profile.bookingUrl,
      label: "Book a 20-minute call",
      note: "grab a free 20-min slot",
      notePosition: "above",
      rotate: -2,
      external: true,
      icon: (
        <svg {...iconProps}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3 10h18" />
        </svg>
      ),
    },
    {
      href: profile.resumeUrl,
      label: "Download résumé (PDF)",
      note: "download my résumé — PDF, recruiter & ATS friendly",
      notePosition: "below",
      rotate: 3,
      accent: true,
      download: true,
      icon: (
        <svg {...iconProps} strokeWidth={2.6}>
          <path d="M12 4v15M6 13l6 6 6-6" />
        </svg>
      ),
    },
  );
  return keys;
}

const ruler = Array.from({ length: 30 }, (_, i) => i + 1);

export function Contact() {
  const keys = buildKeys();
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-[1240px] px-6 pt-24 md:pt-[120px]">
      <SectionHeading intro={sections.contact} headingId="contact-title" />

      <div className="mat reveal relative overflow-hidden rounded-[28px] border border-line">
        <div
          aria-hidden="true"
          className="flex justify-between overflow-hidden whitespace-nowrap px-6 pl-12 pt-2 font-mono text-[10px] text-mat-ruler"
        >
          {ruler.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>

        <div className="px-5 pb-16 pt-8 md:px-14">
          <p className="m-0 text-[15px] uppercase tracking-[0.06em] text-mat-ink">// Contact</p>
          <p
            aria-hidden="true"
            className="write mx-auto mt-5 -rotate-2 text-center font-hand text-[clamp(28px,4vw,44px)] text-mat-note"
          >
            pick whichever feels easiest :)
          </p>

          <ul className="m-0 mt-10 flex list-none flex-wrap justify-center gap-x-5 gap-y-2 p-0">
            {keys.map((key) => {
              const note = (
                <p
                  aria-hidden="true"
                  className={`write m-0 flex flex-col text-center font-hand text-xl leading-tight text-mat-note ${
                    key.notePosition === "above" ? "mb-3.5 min-h-[78px] justify-end" : "mt-3.5 min-h-[110px]"
                  }`}
                  style={{ rotate: `${key.rotate}deg` }}
                >
                  {key.notePosition === "below" && <span>↑</span>}
                  <span>{key.note}</span>
                  {key.notePosition === "above" && <span>↓</span>}
                </p>
              );
              return (
                <li key={key.label} className="flex w-[168px] flex-col items-center">
                  {key.notePosition === "above" ? note : <span className="min-h-[92px]" />}
                  <a
                    href={key.href}
                    aria-label={key.label}
                    className="key"
                    {...(key.external ? { target: "_blank", rel: "me noopener" } : {})}
                    {...(key.download ? { download: true } : {})}
                  >
                    <span className={`key-cap ${key.accent ? "is-accent" : ""}`}>{key.icon}</span>
                  </a>
                  {key.notePosition === "below" ? note : <span className="min-h-[110px]" />}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
