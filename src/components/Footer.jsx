import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [hovered, setHovered] = useState(null);

  return (
    <footer id="contact" style={{
      background: "linear-gradient(180deg, #061a4a 0%, #020d24 100%)",
      color: "#bfdbfe",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Decorative top border */}
      <div style={{
        height: 3,
        background: "linear-gradient(90deg, transparent, #3b82f6, #93c5fd, #3b82f6, transparent)",
      }} />

      {/* Decorative glow */}
      <div style={{
        position: "absolute", top: -100, left: "50%",
        transform: "translateX(-50%)",
        width: 600, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "80rem",
        margin: "0 auto",
        padding: "4rem 1.5rem 3rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "3rem",
      }}>

        {/* Brand */}
        <div>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "white", margin: "0 0 4px" }}>
            Multi Tech Engineers
          </h2>
          <div style={{
            width: 40, height: 3,
            background: "linear-gradient(90deg, #3b82f6, #93c5fd)",
            borderRadius: 999,
            marginBottom: 16,
          }} />
          <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "rgba(191,219,254,0.75)", margin: 0 }}>
            Delivering reliable engineering solutions since 2007 with integrity,
            innovation, and excellence across Pakistan.
          </p>

          {/* Social / trust badges */}
          <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
            {["Est. 2007", "ISO Certified"].map((badge) => (
              <span key={badge} style={{
                padding: "3px 10px",
                borderRadius: 999,
                background: "rgba(59,130,246,0.12)",
                color: "#60a5fa",
                fontSize: "0.72rem",
                fontWeight: 600,
                border: "1px solid rgba(59,130,246,0.2)",
              }}>
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ fontWeight: 700, color: "white", marginBottom: 16, fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {["About", "Services", "Projects", "Team", "Values", "Contact"].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#3b82f6", fontSize: "0.7rem" }}>▶</span>
                <Link
                  to={`/${item.toLowerCase()}`}
                  style={{
                    color: "rgba(191,219,254,0.75)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "white")}
                  onMouseOut={(e) => (e.target.style.color = "rgba(191,219,254,0.75)")}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 style={{ fontWeight: 700, color: "white", marginBottom: 16, fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Services
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {["Electrical Engineering", "Mechanical Engineering", "HVAC Systems", "Civil Engineering", "Solar Solutions"].map((s) => (
              <li key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#3b82f6", fontSize: "0.7rem" }}>▶</span>
                <span style={{ color: "rgba(191,219,254,0.75)", fontSize: "0.875rem" }}>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 style={{ fontWeight: 700, color: "white", marginBottom: 16, fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Contact Us
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {[
              { icon: "📍", text: "Pakistan" },
              { icon: "📞", text: "+92512603861" },
              { icon: "✉️", text: "multitechengineers497@gmail.com" },
              
            ].map(({ icon, text }, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 12px",
                  borderRadius: 10,
                  background: hovered === i ? "rgba(59,130,246,0.1)" : "transparent",
                  border: hovered === i ? "1px solid rgba(59,130,246,0.2)" : "1px solid transparent",
                  transition: "all 0.2s ease",
                  cursor: "default",
                }}
              >
                <span style={{ fontSize: "1rem" }}>{icon}</span>
                <span style={{ fontSize: "0.875rem", color: "rgba(191,219,254,0.75)" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(59,130,246,0.15)",
        padding: "1.25rem 1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.5rem",
        maxWidth: "80rem",
        margin: "0 auto",
      }}>
        <p style={{ fontSize: "0.8rem", color: "rgba(147,197,253,0.6)", margin: 0 }}>
          © {new Date().getFullYear()} Multi Tech Engineers. All rights reserved.
        </p>
        {/* <p style={{ fontSize: "0.8rem", color: "rgba(147,197,253,0.4)", margin: 0 }}>
          Designed with ❤️ in Pakistan
        </p> */}
      </div>
    </footer>
  );
}