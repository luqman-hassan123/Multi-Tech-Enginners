import { useState } from "react";
import useInView from "../hooks/useInView";
import { ONGOING, EXECUTED } from "../data/siteData";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const [tab, setTab] = useState("ongoing");
  const [hovered, setHovered] = useState(null);
  const [ref] = useInView();

  const projects = tab === "ongoing" ? ONGOING : EXECUTED;

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: "100px 24px", background: "#020d24" }}
    >
      <SectionHeader 
      // tag="Portfolio" 
      title="Projects" />

      {/* Tab Buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 48 }}>
        {["ongoing", "executed"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: "10px 28px",
              borderRadius: 999,
              border: tab === t ? "none" : "1px solid rgba(255,255,255,0.2)",
              background: tab === t ? "#3b82f6" : "transparent",
              color: tab === t ? "#fff" : "rgba(255,255,255,0.6)",
              fontWeight: 600,
              fontSize: "0.9rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
              textTransform: "capitalize",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i ? "#0f2d6b" : "#061a4a",
              border: hovered === i ? "1px solid #3b82f6" : "1px solid transparent",
              borderRadius: 16,
              padding: 28,
              transform: hovered === i ? "translateY(-6px)" : "translateY(0)",
              boxShadow: hovered === i ? "0 12px 40px rgba(59,130,246,0.2)" : "0 2px 10px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
              cursor: "default",
            }}
          >
            {/* Status badge */}
            <span
              style={{
                display: "inline-block",
                padding: "3px 12px",
                borderRadius: 999,
                fontSize: "0.75rem",
                fontWeight: 600,
                marginBottom: 14,
                background: tab === "ongoing" ? "rgba(59,130,246,0.15)" : "rgba(34,197,94,0.15)",
                color: tab === "ongoing" ? "#60a5fa" : "#4ade80",
              }}
            >
              {tab === "ongoing" ? "● In Progress" : "✓ Completed"}
            </span>

            <h3
              style={{
                color: hovered === i ? "#93c5fd" : "#ffffff",
                fontSize: "1rem",
                fontWeight: 600,
                lineHeight: 1.5,
                margin: 0,
                transition: "color 0.3s ease",
              }}
            >
              {typeof p === "string" ? p : p.title}
            </h3>

            {/* Show extra info if available */}
            {p.client && (
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginTop: 8 }}>
                Client: {p.client}
              </p>
            )}
            {p.location && (
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", marginTop: 4 }}>
                📍 {p.location}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}