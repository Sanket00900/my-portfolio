import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-[1240px] flex-col items-start justify-center gap-6 px-6">
      <Link href="/" className="logo" aria-label="Home">
        <LogoMark size={48} />
      </Link>
      <p className="font-mono text-sm text-muted">fatal: path not found (404)</p>
      <h1 className="text-[clamp(44px,7vw,96px)] font-semibold leading-none tracking-[-0.05em]">
        This branch doesn&apos;t exist.
      </h1>
      <Link href="/" className="inline-flex min-h-[52px] items-center rounded-full bg-accent px-6 font-semibold text-[#0b0b0c]">
        Back to main →
      </Link>
    </main>
  );
}
