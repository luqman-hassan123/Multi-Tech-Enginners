import { useState, useEffect, useCallback } from "react";
import { getPlaceholder } from "../data/projects";
import BeforeAfterSlider from "./BeforeAfterSlider";
import ImageWithFallback from "./ImageWithFallback";

export default function ProjectModal({ project, onClose }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const placeholder = getPlaceholder();
  const beforeFallback = placeholder;
  const afterFallback = placeholder;
  const coverFallback = placeholder;

  const allImages = [
    ...(project.before ? [{ src: project.before, label: "Before", fallback: beforeFallback }] : []),
    ...(project.after ? [{ src: project.after, label: "After", fallback: afterFallback }] : []),
    ...(project.gallery || []).map((src, i) => ({
      src,
      label: `Photo ${i + 1}`,
      fallback: placeholder,
    })),
  ];

  const hasBeforeAfter = project.before && project.after;

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) setLightboxIndex(null);
        else onClose();
      }
      if (lightboxIndex !== null && allImages.length > 1) {
        if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % allImages.length);
        if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + allImages.length) % allImages.length);
      }
    },
    [lightboxIndex, allImages.length, onClose]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(2,8,23,0.92)",
        backdropFilter: "blur(12px)",
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
        padding: "clamp(12px, 3vw, 24px)",
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-panel">
        <button
          onClick={onClose}
          style={{
            position: "fixed",
            top: "clamp(12px, 3vw, 20px)",
            right: "clamp(12px, 3vw, 20px)",
            zIndex: 210,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 10,
            color: "#fff",
            width: 44,
            height: 44,
            cursor: "pointer",
            fontSize: 20,
            backdropFilter: "blur(10px)",
          }}
          aria-label="Close"
        >
          ✕
        </button>

        <div style={{ paddingTop: 8 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
            <span style={badgeStyle(project.status === "ongoing" ? "#16a34a" : "#e8751a")}>
              {project.status === "ongoing" ? "In Progress" : "Completed"}
            </span>
            <span style={badgeStyle("#e8751a")}>{project.category}</span>
            <span style={badgeStyle("rgba(255,255,255,0.3)")}>{project.year}</span>
          </div>

          <h2 className="heading-section" style={{ fontSize: "clamp(22px, 5vw, 36px)", marginBottom: 8, paddingRight: 48 }}>
            {project.title}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(14px, 3vw, 15px)", marginBottom: 24 }}>
            📍 {project.location}
          </p>

          {hasBeforeAfter ? (
            <div style={{ marginBottom: 28 }}>
              <p style={{ color: "var(--accent)", fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
                Before & After — drag to compare
              </p>
              <BeforeAfterSlider
                before={project.before}
                after={project.after}
                beforeFallback={beforeFallback}
                afterFallback={afterFallback}
              />
            </div>
          ) : (
            <div style={{ marginBottom: 28, borderRadius: 4, overflow: "hidden", border: "1px solid rgba(232,117,26,0.25)" }}>
              <ImageWithFallback
                src={project.cover}
                fallback={coverFallback}
                alt={project.title}
                style={{ width: "100%", height: "clamp(200px, 45vw, 400px)", objectFit: "cover", display: "block" }}
              />
            </div>
          )}

          <p style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(14px, 3vw, 16px)", lineHeight: 1.85, marginBottom: 28 }}>
            {project.description}
          </p>

          {allImages.length > 0 && (
            <div>
              <p style={{ color: "var(--accent)", fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>
                Project Gallery · {allImages.length} photo{allImages.length !== 1 ? "s" : ""}
              </p>
              <div className="modal-gallery">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    style={{
                      position: "relative",
                      padding: 0,
                      border: "1px solid rgba(232,117,26,0.25)",
                      borderRadius: 4,
                      overflow: "hidden",
                      cursor: "pointer",
                      background: "none",
                      aspectRatio: "4/3",
                    }}
                  >
                    <ImageWithFallback
                      src={img.src}
                      fallback={img.fallback}
                      alt={img.label}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        bottom: 6,
                        left: 6,
                        background: "rgba(0,0,0,0.65)",
                        color: "#fff",
                        fontSize: 9,
                        fontWeight: 600,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        padding: "3px 7px",
                        borderRadius: 4,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {img.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 300,
            background: "rgba(0,0,0,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
          onClick={() => setLightboxIndex(null)}
        >
          {allImages.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i - 1 + allImages.length) % allImages.length); }}
              className="lightbox-nav lightbox-nav-left"
              style={navBtnStyle("left")}
              aria-label="Previous"
            >
              ‹
            </button>
          )}
          <ImageWithFallback
            src={allImages[lightboxIndex].src}
            fallback={allImages[lightboxIndex].fallback}
            alt={allImages[lightboxIndex].label}
            style={{ maxWidth: "min(92vw, 100%)", maxHeight: "78vh", objectFit: "contain", borderRadius: 8 }}
            onClick={(e) => e.stopPropagation()}
          />
          {allImages.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i + 1) % allImages.length); }}
              className="lightbox-nav lightbox-nav-right"
              style={navBtnStyle("right")}
              aria-label="Next"
            >
              ›
            </button>
          )}
          <span style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif", fontSize: 13, textAlign: "center", width: "100%", padding: "0 16px" }}>
            {allImages[lightboxIndex].label} · {lightboxIndex + 1} / {allImages.length}
          </span>
        </div>
      )}
    </div>
  );
}

const badgeStyle = (color) => ({
  display: "inline-block",
  background: typeof color === "string" && color.startsWith("rgba") ? color : `${color}22`,
  border: `1px solid ${typeof color === "string" && color.startsWith("rgba") ? color : `${color}55`}`,
  color: typeof color === "string" && color.startsWith("rgba") ? "#fff" : color,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: 1.2,
  textTransform: "uppercase",
  padding: "5px 12px",
  borderRadius: 6,
});

const navBtnStyle = (side) => ({
  position: "absolute",
  [side]: 16,
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(255,255,255,0.12)",
  border: "1px solid rgba(255,255,255,0.25)",
  borderRadius: "50%",
  width: 48,
  height: 48,
  color: "#fff",
  fontSize: 26,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
