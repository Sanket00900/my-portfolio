/** Static "Branch S" mark as an SVG string — used for the favicon, Apple icon and Open Graph image. */
export function logoSvg({ bg = "#0b0b0c", fg = "#f7f7f5", dot = "#c6f24e" } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="9" fill="${bg}"/><path d="M21.5 9.5C21.5 7 19 5.75 16 5.75S10 7.25 10 10.25c0 5.75 12 5.25 12 11.25 0 3-2.75 4.75-6 4.75s-5.75-1.5-5.75-4" fill="none" stroke="${fg}" stroke-width="2.6" stroke-linecap="round"/><circle cx="21.5" cy="9.5" r="2.4" fill="${dot}"/><circle cx="16" cy="16" r="2.1" fill="${dot}"/><circle cx="10.25" cy="22.25" r="2.4" fill="${dot}"/></svg>`;
}

export function logoDataUri(options?: Parameters<typeof logoSvg>[0]) {
  return `data:image/svg+xml;base64,${Buffer.from(logoSvg(options)).toString("base64")}`;
}
