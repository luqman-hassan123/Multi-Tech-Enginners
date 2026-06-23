import { useState } from "react";

const DEFAULT_PLACEHOLDER = "/images/placeholder-construction.svg";

export default function ImageWithFallback({
  src,
  alt,
  fallback = DEFAULT_PLACEHOLDER,
  style,
  className,
  onClick,
  loading = "lazy",
  fetchPriority,
  draggable = false,
}) {
  const [failed, setFailed] = useState(false);
  const [fallbackFailed, setFallbackFailed] = useState(false);

  if ((!src || failed) && fallbackFailed) {
    return (
      <div
        className={`img-placeholder ${className || ""}`}
        style={style}
        role="img"
        aria-label={alt}
        onClick={onClick}
      >
        {alt || "Photo"}
      </div>
    );
  }

  const resolved = !src || failed ? fallback : src;

  return (
    <img
      src={resolved}
      alt={alt}
      className={className}
      style={style}
      onClick={onClick}
      onError={() => {
        if (!src || failed) setFallbackFailed(true);
        else setFailed(true);
      }}
      loading={loading}
      fetchPriority={fetchPriority}
      draggable={draggable}
    />
  );
}
