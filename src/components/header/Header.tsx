"use client";

import { useEffect, useState } from "react";
import { navItems, profile, type NavVariant } from "@/content";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { LogoMark } from "@/components/Logo";

function NavIcon({ variant }: { variant: NavVariant }) {
  switch (variant) {
    case "work":
      return (
        <svg className="nl-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
          <circle cx="6" cy="5" r="2.5" />
          <circle cx="6" cy="19" r="2.5" />
          <circle cx="18" cy="7" r="2.5" />
          <path d="M6 7.5v9M18 9.5c0 4-6 3-11 7" />
        </svg>
      );
    case "experience":
      return (
        <svg className="nl-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
        </svg>
      );
    case "freelance":
      return (
        <svg className="nl-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.2 6.6L21 11l-6.8 2.4L12 20l-2.2-6.6L3 11l6.8-2.4z" />
        </svg>
      );
    case "contact":
      return (
        <svg className="nl-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 3L3 10.5l7 2.5 2.5 7z" />
          <path d="M21 3l-11 10" />
        </svg>
      );
    case "life":
      return (
        <span className="moto" aria-hidden="true">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="4" cy="10" r="3" />
            <circle cx="16" cy="10" r="3" />
            <path d="M4 10l3.5-5h4.5l4 5M7.5 5l-1-2.5H5M12 5l1.5-2.5H15" />
          </svg>
        </span>
      );
  }
}

export function Header() {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll-spy: highlight the menu item for the section in the middle of the screen.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Mobile menu: lock page scroll and close on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-3.5">
      <div className="glass mx-auto flex max-w-[1240px] items-center justify-between gap-4 rounded-[22px] py-2 pl-6 pr-2">
        <a href="#home" className="logo inline-flex items-center gap-3 text-lg font-bold tracking-tight" aria-label={`${profile.name} — home`}>
          <LogoMark />
          <span className="hidden sm:inline">
            {profile.name}
            {/* <span className="logo-dot text-accent-ink"> . </span> */}
          </span>
        </a>

        <div className="flex items-center gap-2 md:gap-5">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-x-5 text-[15px]">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nl nl-${item.variant}`}
                    aria-current={active === item.id ? "location" : undefined}
                  >
                    <NavIcon variant={item.variant} />
                    <span className="nl-clip">
                      <span className="nl-t" data-t={item.label}>
                        {item.label}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-2 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="glass fixed inset-x-4 top-[84px] z-40 rounded-[22px] p-4 md:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.id} className="border-b border-line last:border-0">
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`flex min-h-14 items-center justify-between px-2 text-2xl font-semibold tracking-tight ${
                    item.variant === "life" ? "font-display font-normal uppercase text-life-accent-ink" : ""
                  }`}
                >
                  {item.label}
                  <span aria-hidden="true" className="text-muted">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
