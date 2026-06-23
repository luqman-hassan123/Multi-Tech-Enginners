import { useNavigate } from "react-router-dom";
import ImageWithFallback from "./ImageWithFallback";

export default function ServiceCard({ service, index, inView, onSelect, linkTo }) {
  const navigate = useNavigate();

  const handleActivate = () => {
    if (linkTo) {
      navigate(linkTo);
      return;
    }
    onSelect?.(service);
  };

  return (
    <article
      className={`service-card site-card hover-image-card animate-card ${inView ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onClick={handleActivate}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleActivate()}
    >
      <div className="service-card__media site-card__media">
        <ImageWithFallback
          src={service.image}
          fallback={service.fallback}
          alt={service.title}
          className="service-card__img"
        />
        <div className="service-card__overlay" />
        <div className="service-card__icon">
          <span>{service.icon}</span>
        </div>
      </div>
      <div className="service-card__body">
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
        <span className="service-card__link">
          View projects <span aria-hidden>→</span>
        </span>
      </div>
    </article>
  );
}
