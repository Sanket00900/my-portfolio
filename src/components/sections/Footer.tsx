import { profile } from "@/content";

export function Footer() {
  const year = new Date(profile.lastUpdated).getFullYear();
  return (
    <footer className="mx-auto max-w-[1240px] px-6 pb-10 pt-14">
      <div className="flex flex-wrap justify-between gap-5 border-t border-line pt-6 text-sm text-muted">
        <span>
          © {year} {profile.name}
        </span>
        <a href="#home" className="text-ink">
          Back to top ↑
        </a>
        <span className="font-mono text-xs">
          last commit · <time dateTime={profile.lastUpdated}>{profile.lastUpdated}</time>
        </span>
      </div>
    </footer>
  );
}
