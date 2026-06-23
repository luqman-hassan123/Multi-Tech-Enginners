import { Link } from "react-router-dom";

export default function CareerCard({ position, index, inView }) {
  return (
    <article
      className={`career-card site-card animate-card ${inView ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="career-card__head">
        <span className="career-card__type">{position.type}</span>
        <span className="career-card__dept">{position.department}</span>
      </div>
      <h3 className="career-card__title">{position.title}</h3>
      <p className="career-card__location">{position.location}</p>
      <p className="career-card__desc">{position.description}</p>
      <Link
        to="/contact"
        state={{ subject: `Career Application: ${position.title}` }}
        className="career-card__link"
      >
        Apply now <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
