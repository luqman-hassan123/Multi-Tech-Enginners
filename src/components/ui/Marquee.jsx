export default function Marquee({
  children,
  speed = 45,
  pauseOnHover = true,
  ariaLabel = "Scrolling content",
  className = "",
}) {
  return (
    <div
      className={`marquee ${pauseOnHover ? "marquee--pausable" : ""} ${className}`.trim()}
      aria-label={ariaLabel}
    >
      <div className="marquee__track" style={{ "--marquee-duration": `${speed}s` }}>
        <div className="marquee__group">{children}</div>
        <div className="marquee__group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
