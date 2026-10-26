import { ImageResponse } from "next/og";
import { profile } from "@/content";
import { logoDataUri } from "@/lib/logo-svg";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social share card (LinkedIn, X, WhatsApp, Slack…), generated at build time. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0b0b0c",
          color: "#f2f2f0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoDataUri()} width={72} height={72} alt="" />
          <div style={{ display: "flex", fontSize: 30, color: "#a1a1a1" }}>{`${profile.name} · ${profile.role}`}</div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", fontSize: 92, fontWeight: 700, lineHeight: 1, letterSpacing: -3 }}>
          <span>{profile.headline.before}</span>
          <span style={{ color: "#c6f24e" }}>{profile.headline.accent}</span>
          <span>{profile.headline.after}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#a1a1a1" }}>
          <span>{`${profile.location.city}, ${profile.location.country}`}</span>
          <span style={{ color: "#c6f24e" }}>{profile.availability}</span>
        </div>
      </div>
    ),
    size,
  );
}
