import { useState } from "react";

/** Logo file: public/images/logo.png OR public/images/logo/logo.png */
export const LOGO_PATH = "/images/logo/logo.png";

export default function Logo({ size = 44 }) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <img
        src={LOGO_PATH}
        alt="Multi Tech Engineers"
        onError={() => setFailed(true)}
        style={{
          width: size,
          height: size,
          objectFit: "contain",
          borderRadius: 8,
          display: "block",
        }}
      />
    );
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 10,
        background: "linear-gradient(135deg, #e8751a, #c2610f)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.45,
        fontWeight: 800,
        color: "#fff",
        fontFamily: "'Barlow Condensed', sans-serif",
        boxShadow: "0 4px 16px rgba(232,117,26,0.4)",
        flexShrink: 0,
      }}
    >
      M
    </div>
  );
}
