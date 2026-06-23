export default function TestimonialCard({ testimonial, compact = false, inView = true, index = 0 }) {
  return (
    <article
      className={`testimonial-card site-card ${compact ? "testimonial-card--compact" : ""} ${inView ? "animate-card is-visible" : "animate-card"}`}
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <div className="testimonial-card__mark" aria-hidden>
        "
      </div>
      <blockquote className="testimonial-card__quote">{testimonial.quote}</blockquote>
      <footer className="testimonial-card__footer">
        <div className="testimonial-card__avatar" aria-hidden>
          {testimonial.initials}
        </div>
        <div>
          <cite className="testimonial-card__name">{testimonial.name}</cite>
          {testimonial.role && <p className="testimonial-card__role">{testimonial.role}</p>}
          <p className="testimonial-card__org">{testimonial.organization}</p>
        </div>
      </footer>
    </article>
  );
}
