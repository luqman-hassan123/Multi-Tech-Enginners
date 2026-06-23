import { useState } from "react";
import { TEAM } from "../data/siteData";
import SectionHeader from "./SectionHeader";

export default function Team() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="team"
      style={{
        padding: "100px 24px",
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <SectionHeader
        tag="Leadership"
        title="Our Team"
        style={{
          color: "#1d4ed8",
          fontWeight: 800,
          textShadow: "0 2px 8px rgba(29,78,216,0.15)",
        }}
      />

      {/* CENTER WRAPPER FIX */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, 350px)", // ✅ perfect centering
            gap: 28,
            justifyContent: "center",
            maxWidth: "1400px",
            width: "100%",
          }}
        >
          {TEAM.map((m, i) => {
            const isOpen = selected === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(isOpen ? null : i)}
                style={{
                  background: isOpen
                    ? "linear-gradient(135deg, #1d4ed8, #3b82f6)"
                    : hovered === i
                    ? "linear-gradient(135deg, #0f2d6b, #1d4ed8)"
                    : "linear-gradient(135deg, #061a4a, #0a2158)",

                  border:
                    hovered === i || isOpen
                      ? "1px solid #3b82f6"
                      : "1px solid rgba(255,255,255,0.06)",

                  borderRadius: 20,
                  padding: "30px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.35s ease",
                  position: "relative",
                  overflow: "hidden",

                  transform: isOpen
                    ? "scale(1.05)"
                    : hovered === i
                    ? "translateY(-8px)"
                    : "translateY(0)",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background:
                      hovered === i || isOpen
                        ? "linear-gradient(135deg, #3b82f6, #60a5fa)"
                        : "linear-gradient(135deg, #1d4ed8, #2563eb)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "#fff",
                  }}
                >
                  {m.initials}
                </div>

                <h3 style={{ color: "#fff", fontWeight: 700 }}>
                  {m.name}
                </h3>

                <span
                  style={{
                    display: "inline-block",
                    marginTop: 6,
                    padding: "4px 12px",
                    borderRadius: 999,
                    background: "rgba(147,197,253,0.15)",
                    color: "#93c5fd",
                    fontSize: "0.8rem",
                  }}
                >
                  {m.role}
                </span>

                {/* ✅ SEE MORE OR DESCRIPTION */}
                {!isOpen ? (
                  <p
                    style={{
                      marginTop: 12,
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    Click to see more
                  </p>
                ) : (
                  <p
                    style={{
                      marginTop: 12,
                      fontSize: "0.85rem",
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.6,
                    }}
                  >
                    {m.desc}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}