import Image from "next/image";
import { profile } from "@/content";

export function Hero() {
  const { headline, photo } = profile;
  return (
    <section id="home" aria-labelledby="hero-title" className="mx-auto max-w-[1240px] px-6 pb-20 pt-16 md:pb-[88px] md:pt-[88px]">
      <div className="flex flex-wrap items-end gap-14">
        <div className="min-w-0 flex-[999_1_560px]">
          <p className="anim-up inline-flex items-center gap-2.5 text-[15px] text-muted">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
            {profile.availability} · {profile.location.city}
          </p>
          <h1
            id="hero-title"
            className="anim-up anim-d1 mt-6 text-[clamp(44px,7.5vw,108px)] font-semibold leading-[0.95] tracking-[-0.05em]"
          >
            {headline.before}
            <span className="text-accent-ink">{headline.accent}</span>
            {headline.after}
          </h1>
          <p className="anim-up anim-d2 mt-8 max-w-[560px] text-xl leading-relaxed text-soft">{profile.intro}</p>
          <div className="anim-up anim-d3 mt-9 flex flex-wrap gap-3 text-[15px] font-semibold">
            <a href="#work" className="inline-flex min-h-[52px] items-center rounded-full bg-accent px-[26px] text-[#0b0b0c]">
              See my work ↓
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex min-h-[52px] items-center rounded-full border border-line-2 px-[26px]"
              download
            >
              Download résumé
            </a>
          </div>
        </div>

        <figure className="anim-up anim-d2 m-0 w-full max-w-[400px] flex-[1_1_280px]">
          {photo ? (
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              priority
              sizes="(min-width: 768px) 400px, 100vw"
              className="aspect-[4/5] w-full rounded-3xl border border-line object-cover"
            />
          ) : (
            <div
              role="img"
              aria-label={`Photo of ${profile.name}`}
              className="flex aspect-[4/5] items-center justify-center rounded-3xl border border-line bg-surface text-sm text-muted"
            >
              [Your photo]
            </div>
          )}
          <figcaption className="mt-3 flex justify-between text-sm text-muted">
            <span>{profile.name}</span>
            <span>
              {profile.location.city}, {profile.location.country}
            </span>
          </figcaption>
        </figure>
      </div>

      <dl className="reveal mt-[72px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-6 border-t border-line pt-8">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse">
            <dt className="mt-1 text-[15px] text-muted">{stat.label}</dt>
            <dd className="m-0 text-[40px] font-semibold tracking-[-0.03em]">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
