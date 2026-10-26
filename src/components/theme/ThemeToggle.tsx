"use client";

import { useTheme } from "next-themes";
import { useEffect, useEffectEvent, useRef, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import { themeColors } from "@/lib/site";

const HINT_KEY = "pf-theme-hinted";
const HINT_EVENT = "pf-theme-hinted";

type Theme = "light" | "dark";

/* "Try the lights" hint: shown until the visitor switches theme once. */
function subscribeHint(onChange: () => void) {
  window.addEventListener(HINT_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(HINT_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}
function readHint() {
  try {
    return localStorage.getItem(HINT_KEY) !== "1";
  } catch {
    return false;
  }
}
function dismissHint() {
  try {
    localStorage.setItem(HINT_KEY, "1");
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new Event(HINT_EVENT));
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Applies the theme class immediately so the View Transition captures the final state. */
function applyThemeClass(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
  root.style.colorScheme = theme;
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const busy = useRef(false);
  const showHint = useSyncExternalStore(subscribeHint, readHint, () => false);

  const switchTheme = () => {
    if (busy.current) return;
    const current: Theme = resolvedTheme === "dark" ? "dark" : "light";
    const next: Theme = current === "dark" ? "light" : "dark";

    if (showHint) dismissHint();

    const commit = () => {
      applyThemeClass(next);
      flushSync(() => setTheme(next));
    };

    if (prefersReducedMotion()) {
      commit();
      return;
    }

    // Circle origin = centre of the toggle button.
    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth - 60;
    const y = rect ? rect.top + rect.height / 2 : 40;
    const r = Math.ceil(
      Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y)),
    );

    // Preferred: native View Transition — the new theme is revealed in a growing circle.
    if (typeof document.startViewTransition === "function") {
      const style = document.documentElement.style;
      style.setProperty("--vt-x", `${x}px`);
      style.setProperty("--vt-y", `${y}px`);
      style.setProperty("--vt-r", `${r}px`);
      busy.current = true;
      const transition = document.startViewTransition(commit);
      transition.finished.finally(() => {
        busy.current = false;
      });
      return;
    }

    // Fallback: a colour flood grows from the button, the theme swaps underneath, then it fades.
    const wipe = wipeRef.current;
    if (!wipe) {
      commit();
      return;
    }
    busy.current = true;
    Object.assign(wipe.style, {
      display: "block",
      left: `${x - r}px`,
      top: `${y - r}px`,
      width: `${r * 2}px`,
      height: `${r * 2}px`,
      background: themeColors[next],
    });
    const grow = wipe.animate([{ transform: "scale(0)" }, { transform: "scale(1)" }], {
      duration: 640,
      easing: "cubic-bezier(.65,0,.25,1)",
      fill: "forwards",
    });
    grow.finished.then(() => {
      commit();
      const fade = wipe.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 420, easing: "ease" });
      fade.finished.then(() => {
        wipe.style.display = "none";
        grow.cancel();
        busy.current = false;
      });
    });
  };

  // Keyboard shortcut: press "T" anywhere (outside form fields) to switch theme.
  const onShortcut = useEffectEvent(() => switchTheme());
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "t" || e.metaKey || e.ctrlKey || e.altKey || e.repeat) return;
      const target = e.target as HTMLElement | null;
      if (target && (target.isContentEditable || /^(input|textarea|select)$/i.test(target.tagName))) return;
      onShortcut();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <span className="relative inline-flex">
      {showHint && (
        <span
          aria-hidden="true"
          className="theme-ping pointer-events-none absolute -inset-[5px] rounded-full border-2 border-accent-ink"
        />
      )}
      <button
        ref={buttonRef}
        type="button"
        onClick={switchTheme}
        aria-label="Switch colour theme (shortcut: T)"
        className="theme-toggle relative inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line-2 text-ink"
      >
        <svg
          key={`sun-${resolvedTheme}`}
          className="icon-sun icon-swap"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
        <svg
          key={`moon-${resolvedTheme}`}
          className="icon-moon icon-swap"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      </button>
      <span
        aria-hidden="true"
        className="theme-tip pointer-events-none absolute right-0 top-[calc(100%+10px)] whitespace-nowrap rounded-lg bg-ink px-2.5 py-1.5 text-[13px] font-medium text-bg"
      >
        <span className="tip-dark">Lights off · T</span>
        <span className="tip-light">Lights on · T</span>
      </span>
      {showHint && (
        <span
          aria-hidden="true"
          className="theme-nudge pointer-events-none absolute right-1 top-[calc(100%+14px)] hidden flex-col items-end whitespace-nowrap font-hand text-[19px] leading-[1.1] text-accent-ink md:flex"
        >
          <svg width="34" height="26" viewBox="0 0 34 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 24C10 22 24 18 26 4M21 8l5-5 4 6" />
          </svg>
          psst… try the lights
        </span>
      )}
      <div ref={wipeRef} aria-hidden="true" className="pointer-events-none fixed z-[100] hidden rounded-full" />
    </span>
  );
}
