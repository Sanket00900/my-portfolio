const avatarColors = ["var(--avatar-1)", "var(--avatar-2)", "var(--avatar-3)", "var(--avatar-4)"];

export function Avatar({ initials, index, size }: { initials: string; index: number; size: number }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex shrink-0 items-center justify-center rounded-full font-semibold text-[#0b0b0c]"
      style={{
        width: size,
        height: size,
        fontSize: size > 40 ? 15 : 13,
        background: avatarColors[index % avatarColors.length],
      }}
    >
      {initials}
    </span>
  );
}

export function CheckIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}
