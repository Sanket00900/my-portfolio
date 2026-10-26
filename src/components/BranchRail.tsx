/**
 * The git-style lane drawn to the left of each project / job.
 * - "merged": forks off main, runs, merges back (finished work).
 * - "open": still running at the top (current role) — no fork drawn above it.
 */
export function BranchRail({ mode = "merged", commitPosition = "middle" }: { mode?: "merged" | "open"; commitPosition?: "middle" | "high" }) {
  return (
    <div aria-hidden="true" className="rail">
      <span className="rail-main" />
      {mode === "merged" && (
        <>
          <span className="rail-fork" />
          <span className="rail-node-top" />
        </>
      )}
      <span className={`rail-lane draw ${mode === "open" ? "is-open" : ""}`} />
      <span className="rail-merge" />
      <span className="rail-node-bottom" />
      <span className={`rail-commit pop ${commitPosition === "high" ? "is-high" : ""}`} />
    </div>
  );
}

export function BranchLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex shrink-0 rounded-full border border-line-2 px-2.5 py-0.5 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

export function BranchIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="6" cy="5" r="2.5" />
      <circle cx="6" cy="19" r="2.5" />
      <circle cx="18" cy="7" r="2.5" />
      <path d="M6 7.5v9M18 9.5c0 4-6 3-11 7" />
    </svg>
  );
}
