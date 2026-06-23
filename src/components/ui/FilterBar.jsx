export default function FilterBar({ items, value, onChange, variant = "button" }) {
  const baseClass = variant === "chip" ? "filter-chip" : "filter-btn";
  const activeClass = variant === "chip" ? "filter-chip--active" : "filter-btn--active";

  return (
    <div className={variant === "chip" ? "filter-scroll" : "filter-row"}>
      {items.map((item) => (
        <button
          key={item.id ?? item}
          type="button"
          className={`${baseClass} ${(value === (item.id ?? item) ? activeClass : "")}`.trim()}
          onClick={() => onChange(item.id ?? item)}
        >
          {item.label ?? item}
        </button>
      ))}
    </div>
  );
}
