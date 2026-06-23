export default function ValueCard({ value, index, inView }) {
  return (
    <article
      className={`value-card value-card--icon site-card animate-card ${inView ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="value-card__icon-wrap">
        <span className="value-card__icon" aria-hidden>
          {value.icon}
        </span>
      </div>
      <h3 className="value-card__title">{value.title}</h3>
      <p className="value-card__desc">{value.desc}</p>
    </article>
  );
}
