// export default function CEOSection() {
//   return (
//     <section style={{ padding: "100px 24px", background: "#061a4a", color: "#fff" }}>
//       <h2>Message from CEO</h2>
//       <p>
//         Since 2007, Multi Tech Engineers has been delivering excellence with integrity and innovation.
//       </p>
//     </section>
//   );
// }


import { useState } from "react";

export default function CEOSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      style={{
        padding: "100px 24px",
        background: "linear-gradient(135deg, #020d24 0%, #061a4a 50%, #020d24 100%)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background circles */}
      <div style={{
        position: "absolute", top: -100, right: -100,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -80, left: -80,
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "72rem",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "4rem",
        alignItems: "center",
      }}>

        {/* CEO Photo & Info */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          {/* Avatar circle */}
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 64,
              boxShadow: hovered
                ? "0 0 0 6px rgba(59,130,246,0.3), 0 20px 60px rgba(59,130,246,0.3)"
                : "0 0 0 4px rgba(59,130,246,0.15), 0 10px 40px rgba(0,0,0,0.4)",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "all 0.4s ease",
              marginBottom: 24,
              cursor: "default",
            }}
          >
            👤
          </div>

          <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff", margin: 0 }}>
            CEO Name
          </h3>
          <p style={{ color: "#60a5fa", fontSize: "0.9rem", marginTop: 6 }}>
            Chief Executive Officer
          </p>

          {/* Divider */}
          <div style={{
            width: 60, height: 3,
            background: "linear-gradient(90deg, #3b82f6, #93c5fd)",
            borderRadius: 999,
            margin: "16px auto",
          }} />

          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
            Multi Tech Engineers
          </p>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", marginTop: 4 }}>
            Est. 2007 · Pakistan
          </p>
        </div>

        {/* Message */}
        <div>
          {/* Tag */}
          <span style={{
            display: "inline-block",
            padding: "4px 14px",
            borderRadius: 999,
            background: "rgba(59,130,246,0.15)",
            color: "#60a5fa",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}>
            Message from CEO
          </span>

          <h2 style={{
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 800,
            lineHeight: 1.3,
            marginBottom: 24,
            color: "#fff",
          }}>
            Building Pakistan's Future,{" "}
            <span style={{ color: "#60a5fa" }}>One Project at a Time</span>
          </h2>

          {/* Quote mark */}
          <div style={{ fontSize: 64, color: "#3b82f6", lineHeight: 0.5, marginBottom: 20, opacity: 0.5 }}>
            "
          </div>

          <p style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "1rem",
            lineHeight: 1.9,
            marginBottom: 16,
          }}>
            Since 2007, Multi Tech Engineers has been at the forefront of delivering
            high-quality engineering solutions across Pakistan. Our commitment to
            integrity, innovation, and excellence has earned us the trust of both
            public and private sector clients.
          </p>

          <p style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.95rem",
            lineHeight: 1.9,
            marginBottom: 32,
          }}>
            Every project we undertake is a testament to our team's dedication and
            technical expertise. We don't just build structures — we build lasting
            relationships and contribute to the nation's progress.
          </p>

          {/* Stats row */}
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {[
              { number: "17+", label: "Years Experience" },
              { number: "50+", label: "Projects Delivered" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#60a5fa" }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}