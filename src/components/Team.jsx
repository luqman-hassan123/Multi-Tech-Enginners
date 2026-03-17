import { useState } from "react";
import { TEAM } from "../data/siteData";
import SectionHeader from "./SectionHeader";

export default function Team() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="team"
      style={{
        padding: "100px 24px",
        background: "#03102f",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <SectionHeader tag="Leadership" title="Our Team" />

      <div style={{
        maxWidth: "80rem",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 28,
      }}>
        {TEAM.map((m, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i
                ? "linear-gradient(135deg, #0f2d6b, #1d4ed8)"
                : "linear-gradient(135deg, #061a4a, #0a2158)",
              border: hovered === i ? "1px solid #3b82f6" : "1px solid rgba(255,255,255,0.06)",
              borderRadius: 20,
              padding: "36px 28px",
              textAlign: "center",
              transform: hovered === i ? "translateY(-8px)" : "translateY(0)",
              boxShadow: hovered === i
                ? "0 20px 60px rgba(59,130,246,0.25)"
                : "0 4px 20px rgba(0,0,0,0.3)",
              transition: "all 0.35s ease",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Card shimmer line */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: 3,
              background: hovered === i
                ? "linear-gradient(90deg, #3b82f6, #93c5fd, #3b82f6)"
                : "transparent",
              transition: "all 0.35s ease",
            }} />

            {/* Avatar circle */}
            <div style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: hovered === i
                ? "linear-gradient(135deg, #3b82f6, #60a5fa)"
                : "linear-gradient(135deg, #1d4ed8, #2563eb)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#fff",
              boxShadow: hovered === i
                ? "0 0 0 4px rgba(96,165,250,0.3), 0 8px 24px rgba(59,130,246,0.4)"
                : "0 0 0 3px rgba(59,130,246,0.15)",
              transition: "all 0.35s ease",
              transform: hovered === i ? "scale(1.1)" : "scale(1)",
            }}>
              {m.initials}
            </div>

            <h3 style={{
              color: hovered === i ? "#fff" : "#e2e8f0",
              fontSize: "1.1rem",
              fontWeight: 700,
              margin: "0 0 8px",
              transition: "color 0.3s ease",
            }}>
              {m.name}
            </h3>

            {/* Role badge */}
            <span style={{
              display: "inline-block",
              padding: "4px 14px",
              borderRadius: 999,
              background: hovered === i ? "rgba(147,197,253,0.15)" : "rgba(59,130,246,0.1)",
              color: hovered === i ? "#93c5fd" : "#60a5fa",
              fontSize: "0.8rem",
              fontWeight: 500,
              transition: "all 0.3s ease",
            }}>
              {m.role}
            </span>

            {/* Optional bio */}
            {m.bio && (
              <p style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                marginTop: 14,
                marginBottom: 0,
              }}>
                {m.bio}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}