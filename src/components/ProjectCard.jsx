import { getPlaceholder } from "../data/projects";
import ImageWithFallback from "./ImageWithFallback";

export default function ProjectCard({ project, onClick, inView, delay = 0 }) {
  return (
    <article
      className={`project-card site-card hover-image-card animate-card ${inView ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className="project-card__media site-card__media">
        <ImageWithFallback
          src={project.cover}
          fallback={getPlaceholder()}
          alt={project.title}
          className="project-card__img"
        />
        <div className="project-card__gradient">
          <span className="project-card__cta">View Project →</span>
        </div>
        <div className="project-card-overlay-hint">
          <span>Tap to view</span>
        </div>
        <span
          className={`project-card__status ${
            project.status === "ongoing" ? "project-card__status--ongoing" : "project-card__status--done"
          }`}
        >
          {project.status === "ongoing" ? "In Progress" : "Completed"}
        </span>
      </div>
      <div className="project-card__body">
        <span className="project-card__category">{project.category}</span>
        <h3 className="heading-card-sm">{project.title}</h3>
        <div className="project-card__meta">
          <span>📍 {project.location}</span>
          <span className="meta-sep">·</span>
          <span>{project.year}</span>
        </div>
      </div>
    </article>
  );
}
