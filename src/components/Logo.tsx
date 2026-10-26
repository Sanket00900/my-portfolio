/**
 * "Branch S" mark: the letter S drawn as a git branch line with three commits.
 * It draws itself on page load and re-draws on hover (see .logo-mark in globals.css).
 */
export function LogoMark({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      className={`logo-mark ${className}`}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <rect className="logo-mark-bg" x="0" y="0" width="32" height="32" rx="9" />
      <path
        className="logo-mark-path"
        pathLength={1}
        d="M21.5 9.5C21.5 7 19 5.75 16 5.75S10 7.25 10 10.25c0 5.75 12 5.25 12 11.25 0 3-2.75 4.75-6 4.75s-5.75-1.5-5.75-4"
        fill="none"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle className="logo-mark-dot logo-mark-dot-1" cx="21.5" cy="9.5" r="2.4" />
      <circle className="logo-mark-dot logo-mark-dot-2" cx="16" cy="16" r="2.1" />
      <circle className="logo-mark-dot logo-mark-dot-3" cx="10.25" cy="22.25" r="2.4" />
    </svg>
  );
}
