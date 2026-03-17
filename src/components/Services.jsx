import { useState } from "react";
import useInView from "../hooks/useInView";
import { SERVICES } from "../data/siteData";
import SectionHeader from "./SectionHeader";

export default function Services() {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="services"
      ref={ref}
      style={{
        padding: "100px 24px",
        background: "#03102f",
      }}
    >
      <SectionHeader tag="What We Do" title="Our Services" />
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
        }}
      >
        {SERVICES.map((s, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i ? "#0f2d6b" : "#061a4a",
              padding: 28,
              borderRadius: 16,
              border: hovered === i ? "1px solid #3b82f6" : "1px solid transparent",
              transform: hovered === i ? "translateY(-6px)" : "translateY(0)",
              boxShadow: hovered === i ? "0 12px 40px rgba(59,130,246,0.4)" : "0 2px 10px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
              cursor: "default",
            }}
          >
            <div
              style={{
                fontSize: 36,
                marginBottom: 12,
                display: "inline-block",
                transform: hovered === i ? "scale(1.2)" : "scale(1)",
                transition: "transform 0.3s ease",
              }}
            >
              {s.icon}
            </div>
            <h3
              style={{
                color: hovered === i ? "#93c5fd" : "#ffffff",
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: 8,
                transition: "color 0.3s ease",
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}