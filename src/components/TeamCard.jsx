import { TEAM_IMAGES } from "../data/images";
import ImageWithFallback from "./ImageWithFallback";

export default function TeamCard({ member, index, inView }) {
  const image = TEAM_IMAGES[member.id];
  const hasPhoto = Boolean(image?.src);

  return (
    <article
      className={`team-card site-card animate-card ${hasPhoto ? "hover-image-card" : "team-card--placeholder"} ${inView ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={`team-card__media ${hasPhoto ? "site-card__media" : ""}`}>
        {hasPhoto ? (
          <>
            <ImageWithFallback
              src={image.src}
              fallback={image.fallback}
              alt={member.name}
              className="team-card__img"
            />
            <div className="team-card__overlay" />
          </>
        ) : (
          <div className="team-card__placeholder">
            <span className="team-card__placeholder-initials">{member.initials}</span>
            <span className="team-card__placeholder-hint">Photo coming soon</span>
          </div>
        )}
      </div>

      <div className="team-card__body">
        <h3 className="team-card__name">{member.name}</h3>
        <span className="team-card__role">{member.role}</span>
        <p className="team-card__desc">{member.desc}</p>
      </div>
    </article>
  );
}
