import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActiveLink(id);
  };

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 100,
      background: scrolled
        ? "rgba(2, 13, 36, 0.92)"
        : "linear-gradient(180deg, rgba(2,13,36,0.7) 0%, transparent 100%)",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(59,130,246,0.12)" : "1px solid transparent",
      transition: "all 0.4s ease",
    }}>
      <div style={{
        maxWidth: 1280,
        margin: "auto",
        padding: "0 24px",
        height: 68,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>

        {/* Logo */}
        <div
          onClick={() => scrollTo("about")}
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}
        >
          {/* Icon mark */}
          <div style={{
            width: 34,
            height: 34,
            borderRadius: 8,
            background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            boxShadow: "0 4px 14px rgba(59,130,246,0.35)",
            flexShrink: 0,
          }}>
            ⚙️
          </div>
          <div>
            <div style={{
              color: "#fff",
              fontWeight: 800,
              fontSize: "1rem",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}>
              Multi Tech Engineers
            </div>
            <div style={{
              color: "#60a5fa",
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}>
             {/* Engineers */}
            </div>
          </div>
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                position: "relative",
                color: activeLink === link ? "#60a5fa" : hoveredLink === link ? "#93c5fd" : "rgba(255,255,255,0.75)",
                background: hoveredLink === link ? "rgba(59,130,246,0.08)" : "transparent",
                border: "1px solid",
                borderColor: hoveredLink === link ? "rgba(59,130,246,0.2)" : "transparent",
                borderRadius: 8,
                padding: "7px 16px",
                fontSize: "0.88rem",
                fontWeight: activeLink === link ? 600 : 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
                transform: hoveredLink === link ? "translateY(-1px)" : "translateY(0)",
              }}
            >
              {link}

              {/* Active underline dot */}
              {activeLink === link && (
                <span style={{
                  position: "absolute",
                  bottom: 3,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "#60a5fa",
                  boxShadow: "0 0 6px #60a5fa",
                }} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom glow line when scrolled */}
      {scrolled && (
        <div style={{
          position: "absolute",
          bottom: 0,
          left: "10%",
          right: "10%",
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)",
        }} />
      )}
    </nav>
  );
}