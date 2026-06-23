export default function Card({
  theme = "dark",
  hover = true,
  animate = true,
  inView = true,
  delay = 0,
  className = "",
  children,
  ...props
}) {
  const classes = [
    theme === "light" ? "panel panel--light" : "panel",
    hover && "hover-card site-card",
    animate && "animate-card",
    animate && inView && "is-visible",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={{ transitionDelay: `${delay}s` }} {...props}>
      {children}
    </div>
  );
}
