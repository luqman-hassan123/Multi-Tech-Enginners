export default function SectionHeader({ tag, title, subtitle, style }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 60 }}>
      <span style={{ color: "#38bdf8", fontSize: 12 }}>{tag}</span>

      {/* ✅ apply dynamic style here */}
      {/* <h2 style={{ color: "#fff", fontSize: 35, fontWeight: 800 ,...style }}>
        {title}
      </h2> */}

      <h2
        style={{
          fontSize: 40,
          fontWeight: 800,
          background: "linear-gradient(90deg, #1d4ed8, #3b82f6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 4px 20px rgba(59,130,246, 1)",
        }}
      >
        {title}
      </h2>

      {subtitle && <p style={{ color: "rgba(255,255,255,0.6)" }}>{subtitle}</p>}
    </div>
  );
}
