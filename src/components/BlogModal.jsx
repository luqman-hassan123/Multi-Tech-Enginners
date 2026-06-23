import { useEffect, useCallback } from "react";
import { formatBlogDate } from "../data/blog";
import ImageWithFallback from "./ImageWithFallback";

export default function BlogModal({ post, onClose }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  if (!post) return null;

  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-panel blog-modal">
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="blog-modal__hero">
          <ImageWithFallback
            src={post.image?.src}
            fallback={post.image?.fallback}
            alt={post.title}
            className="blog-modal__img"
          />
        </div>

        <div className="blog-modal__content">
          <div className="blog-modal__tags">
            <span className="blog-card__category">{post.category}</span>
            <span className="blog-modal__meta">{post.readTime}</span>
          </div>

          <h2 className="heading-section blog-modal__title">{post.title}</h2>

          <p className="blog-modal__byline">
            {formatBlogDate(post.date)} · {post.author}
          </p>

          <div className="blog-modal__body">
            {post.body.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
