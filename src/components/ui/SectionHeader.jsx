export default function SectionHeader({ tag, title, subtitle, theme = "dark" }) {
  const isLight = theme === "light";

  return (
    <header className="section-header">
      <div className="section-header__tag">
        <span className={isLight ? "section-tag section-tag--dark" : "section-tag"}>{tag}</span>
      </div>
      <h2 className={isLight ? "heading-section heading-section--dark" : "heading-section"}>{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </header>
  );
}
