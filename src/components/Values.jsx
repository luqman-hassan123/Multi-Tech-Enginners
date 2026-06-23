// import { VALUES } from "../data/siteData";
// import SectionHeader from "./SectionHeader";

// export default function Values() {
//   return (
//     <section id="values" style={{ padding: "100px 24px", background: "#061a4a" }}>
//       <SectionHeader tag="Core Values" title="Our Values" />
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
//         {VALUES.map((v, i) => (
//           <div key={i} style={{ background: "#03102f", padding: 24 }}>
//             <span>{v.icon}</span>
//             <h4>{v.title}</h4>
//             <p>{v.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { VALUES } from "../data/siteData";
import SectionHeader from "./SectionHeader";

export default function Values() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="values"
      style={{
        padding: "100px 24px",
        background: "#061a4a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glows */}
      <div style={{
        position: "absolute", top: -120, right: -120,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -100, left: -100,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <SectionHeader tag="Core Values" title="Our Values" />

      <div style={{
        maxWidth: "80rem",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 24,
      }}>
        {VALUES.map((v, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i
                ? "linear-gradient(135deg, #0f2d6b, #1d4ed8)"
                : "linear-gradient(135deg, #03102f, #061a4a)",
              border: hovered === i ? "1px solid #3b82f6" : "1px solid rgba(255,255,255,0.06)",
              borderRadius: 20,
              padding: "36px 28px",
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
            {/* Top shimmer line */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: 3,
              background: hovered === i
                ? "linear-gradient(90deg, #3b82f6, #93c5fd, #3b82f6)"
                : "transparent",
              transition: "all 0.35s ease",
            }} />

            {/* Icon bubble */}
            <div style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: hovered === i
                ? "linear-gradient(135deg, #3b82f6, #60a5fa)"
                : "rgba(59,130,246,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              marginBottom: 20,
              boxShadow: hovered === i ? "0 8px 24px rgba(59,130,246,0.4)" : "none",
              transform: hovered === i ? "scale(1.1)" : "scale(1)",
              transition: "all 0.35s ease",
            }}>
              {v.icon}
            </div>

            <h4 style={{
              color: hovered === i ? "#fff" : "#e2e8f0",
              fontSize: "1.1rem",
              fontWeight: 700,
              marginBottom: 10,
              transition: "color 0.3s ease",
            }}>
              {v.title}
            </h4>

            {/* Accent line */}
            <div style={{
              width: hovered === i ? 48 : 24,
              height: 2,
              background: "linear-gradient(90deg, #3b82f6, #93c5fd)",
              borderRadius: 999,
              marginBottom: 14,
              transition: "width 0.35s ease",
            }} />

            <p style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.88rem",
              lineHeight: 1.8,
              margin: 0,
              transition: "color 0.3s ease",
            }}>
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}