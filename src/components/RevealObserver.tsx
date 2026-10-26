"use client";

import { useEffect } from "react";

/**
 * Scroll reveals use native CSS scroll-driven animations (animation-timeline: view()).
 * In browsers without them, this adds `no-sda` to <html> and toggles `.is-in`
 * with an IntersectionObserver so every visitor gets the same motion.
 */
export function RevealObserver() {
  useEffect(() => {
    if (CSS.supports("animation-timeline: view()")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    root.classList.add("no-sda");

    const targets = document.querySelectorAll<HTMLElement>(".reveal, .draw, .pop, .write");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );
    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove("no-sda");
    };
  }, []);

  return null;
}
