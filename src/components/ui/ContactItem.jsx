export default function ContactItem({ icon, label, value, href, isLast = false, light = false }) {
  return (
    <div className={`contact-item ${light ? "contact-item--light" : ""} ${isLast ? "contact-item--last" : ""}`}>
      <div className="contact-item__icon">{icon}</div>
      <div>
        <div className="contact-item__label">{label}</div>
        {href ? (
          <a href={href} className="contact-item__link">
            {value}
          </a>
        ) : (
          <div className="contact-item__value">{value}</div>
        )}
      </div>
    </div>
  );
}
