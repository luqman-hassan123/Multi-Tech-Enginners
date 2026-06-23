import { formatBlogDate } from "../data/blog";
import ImageWithFallback from "./ImageWithFallback";

export default function BlogCard({ post, onClick, inView, delay = 0 }) {
  return (
    <article
      className={`blog-card site-card hover-image-card animate-card ${inView ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className="blog-card__media site-card__media">
        <ImageWithFallback
          src={post.image?.src}
          fallback={post.image?.fallback}
          alt={post.title}
          className="blog-card__img"
        />
        <div className="blog-card__overlay">
          <span className="blog-card__cta">Read Article →</span>
        </div>
        <span className="blog-card__category">{post.category}</span>
      </div>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
          <span className="meta-sep">·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>
      </div>
    </article>
  );
}
