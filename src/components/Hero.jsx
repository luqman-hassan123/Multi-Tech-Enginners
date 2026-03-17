import { useState } from "react";

export default function Hero() {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #020d24 0%, #03102f 50%, #061a4a 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "6rem",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glows */}
      <div style={{
        position: "absolute", 
        top: -150,
        right: -150,
        width: 600, 
        height: 600, 
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -100, left: -100,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 900, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(29,78,216,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "58rem",
        margin: "0 auto",
        textAlign: "center",
        padding: "0 1.5rem",
        position: "relative",
      }}>

        {/* Tag */}
        <span style={{
          display: "inline-block",
          padding: "5px 18px",
          borderRadius: 999,
          background: "rgba(59,130,246,0.12)",
          color: "#ffffff",
          fontSize: "0.78rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 28,
          border: "1px solid rgba(59,130,246,0.25)",
        }}>
          ✦ Engineering Excellence Since 2007 ✦
        </span>

        {/* Heading */}
        <h1 style={{
          fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
          fontWeight: 900,
          lineHeight: 1.15,
          margin: 0,
          letterSpacing: "-0.02em",
        }}>
          Building a Better Future
          <span style={{
            display: "block",
            marginTop: "0.2rem",
            background: "linear-gradient(90deg, #60a5fa, #93c5fd, #60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Across Two Nations
          </span>
        </h1>

        {/* Accent line */}
        <div style={{
          width: 70, height: 3,
          background: "linear-gradient(90deg, #3b82f6, #93c5fd)",
          borderRadius: 999,
          margin: "28px auto",
        }} />

        <p style={{
          fontSize: "1.05rem",
          color: "#ffffff",
          lineHeight: 1.9,
          maxWidth: "42rem",
          margin: "0 auto 32px",
        }}>
          Multi Tech Engineers delivers high-quality electrical, mechanical,
          HVAC, and civil engineering solutions for public and private sector
          projects across <strong style={{ color: "#93c5fd" }}>Pakistan</strong> and{" "}
          <strong style={{ color: "#93c5fd" }}>Afghanistan</strong>.
        </p>

        {/* Country badges */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          marginBottom: 32,
          flexWrap: "wrap",
        }}>
          {[
            { flag: "🇵🇰", name: "Pakistan", detail: "Headquarters" },
            { flag: "🇦🇫", name: "Afghanistan", detail: "Regional Operations" },
          ].map((c, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCountry(i)}
              onMouseLeave={() => setHoveredCountry(null)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 22px",
                background: hoveredCountry === i
                  ? "rgba(59,130,246,0.18)"
                  : "rgba(59,130,246,0.08)",
                border: hoveredCountry === i
                  ? "1px solid rgba(96,165,250,0.45)"
                  : "1px solid rgba(59,130,246,0.2)",
                borderRadius: 12,
                transform: hoveredCountry === i ? "translateY(-3px)" : "translateY(0)",
                boxShadow: hoveredCountry === i
                  ? "0 8px 24px rgba(59,130,246,0.2)"
                  : "none",
                transition: "all 0.25s ease",
                cursor: "default",
              }}
            >
              <span style={{
                fontSize: hoveredCountry === i ? "1.7rem" : "1.5rem",
                transition: "font-size 0.25s ease",
              }}>
                {c.flag}
              </span>
              <div style={{ textAlign: "left" }}>
                <div style={{
                  color: hoveredCountry === i ? "#fff" : "#e2e8f0",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  transition: "color 0.25s ease",
                }}>
                  {c.name}
                </div>
                <div style={{ color: "rgba(147,197,253,1)", fontSize: "0.72rem" }}>
                  {c.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
          padding: "24px 32px",
          background: "rgba(59,130,246,0.05)",
          borderRadius: 20,
          border: "1px solid rgba(59,130,246,0.12)",
        }}>
          {[
            { number: "17+", label: "Years Experience" },
            { number: "50+", label: "Projects Delivered" },
            { number: "2",   label: "Countries" },
            { number: "4",   label: "Engineering Divisions" },
          ].map((stat, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredStat(i)}
              onMouseLeave={() => setHoveredStat(null)}
              style={{
                textAlign: "center",
                padding: "12px 20px",
                borderRadius: 12,
                background: hoveredStat === i ? "rgba(59,130,246,0.1)" : "transparent",
                border: hoveredStat === i ? "1px solid rgba(59,130,246,0.25)" : "1px solid transparent",
                transform: hoveredStat === i ? "translateY(-4px)" : "translateY(0)",
                transition: "all 0.25s ease",
                cursor: "default",
                flex: 1,
                minWidth: 80,
              }}
            >
              <div style={{
                fontSize: hoveredStat === i ? "2.3rem" : "2rem",
                fontWeight: 900,
                background: "linear-gradient(135deg, #60a5fa, #93c5fd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "#ffffff",
                transition: "font-size 0.25s ease",
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: "0.75rem",
                color: hoveredStat === i ? "rgba(191,219,254,1)" : "rgba(191,219,254,1)",
                marginTop: 6,
                letterSpacing: "0.04em",
                transition: "color 0.25s ease",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}