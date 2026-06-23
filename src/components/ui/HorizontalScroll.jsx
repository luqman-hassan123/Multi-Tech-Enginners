import { useRef, useState, useEffect, useCallback } from "react";

export default function HorizontalScroll({ children, resetKey, className = "", ariaLabel = "Scroll content" }) {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = 0;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    const ro = new ResizeObserver(updateButtons);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      ro.disconnect();
    };
  }, [updateButtons, resetKey, children]);

  const scroll = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.88, behavior: "smooth" });
  };

  return (
    <div className={`horizontal-scroll ${className}`.trim()}>
      <button
        type="button"
        className="horizontal-scroll__btn horizontal-scroll__btn--prev"
        onClick={() => scroll(-1)}
        disabled={!canScrollLeft}
        aria-label={`${ariaLabel} left`}
      >
        ‹
      </button>

      <div className="horizontal-scroll__track" ref={trackRef}>
        {children}
      </div>

      <button
        type="button"
        className="horizontal-scroll__btn horizontal-scroll__btn--next"
        onClick={() => scroll(1)}
        disabled={!canScrollRight}
        aria-label={`${ariaLabel} right`}
      >
        ›
      </button>
    </div>
  );
}
