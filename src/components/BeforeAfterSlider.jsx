import { useState, useRef, useCallback, useEffect } from "react";
import ImageWithFallback from "./ImageWithFallback";

export default function BeforeAfterSlider({ before, after, beforeFallback, afterFallback }) {
  const [position, setPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
    ro.observe(el);
    setContainerWidth(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  const updatePosition = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(98, Math.max(2, pct)));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    containerRef.current?.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e) => {
    if (dragging.current) updatePosition(e.clientX);
  };

  const onPointerUp = (e) => {
    dragging.current = false;
    try {
      containerRef.current?.releasePointerCapture(e.pointerId);
    } catch {
      /* pointer already released */
    }
  };

  return (
    <div
      ref={containerRef}
      className="before-after-wrap"
      style={{
        position: "relative",
        width: "100%",
        borderRadius: 16,
        overflow: "hidden",
        cursor: "col-resize",
        userSelect: "none",
        touchAction: "none",
        border: "1px solid rgba(232,117,26,0.35)",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <ImageWithFallback
        src={after}
        fallback={afterFallback}
        alt="After"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />

      <div style={{ position: "absolute", inset: 0, width: `${position}%`, overflow: "hidden" }}>
        <ImageWithFallback
          src={before}
          fallback={beforeFallback}
          alt="Before"
          style={{ width: containerWidth || "100%", height: "100%", objectFit: "cover", maxWidth: "none" }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${position}%`,
          width: 3,
          background: "#fff",
          transform: "translateX(-50%)",
          boxShadow: "0 0 12px rgba(0,0,0,0.5)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: `${position}%`,
          transform: "translate(-50%, -50%)",
          width: "clamp(36px, 10vw, 44px)",
          height: "clamp(36px, 10vw, 44px)",
          borderRadius: "50%",
          background: "#fff",
          border: "3px solid #e8751a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
          zIndex: 3,
          fontSize: "clamp(14px, 4vw, 18px)",
          color: "#e8751a",
          pointerEvents: "none",
        }}
      >
        ⇔
      </div>

      <span style={labelStyle("left")}>Before</span>
      <span style={labelStyle("right")}>After</span>
    </div>
  );
}

const labelStyle = (side) => ({
  position: "absolute",
  bottom: "clamp(8px, 2vw, 16px)",
  [side]: "clamp(8px, 2vw, 16px)",
  background: "rgba(0,0,0,0.65)",
  color: "#fff",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "clamp(10px, 2.5vw, 12px)",
  fontWeight: 600,
  letterSpacing: 1.5,
  textTransform: "uppercase",
  padding: "5px 10px",
  borderRadius: 6,
  zIndex: 4,
  pointerEvents: "none",
});
