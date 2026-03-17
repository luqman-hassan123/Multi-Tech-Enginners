export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 60 }}>
      <span style={{ color: "#38bdf8", fontSize: 12 }}>{tag}</span>
      <h2 style={{ color: "#fff", fontSize: 40 }}>{title}</h2>
      {subtitle && <p style={{ color: "rgba(255,255,255,0.6)" }}>{subtitle}</p>}
    </div>
  );
}
