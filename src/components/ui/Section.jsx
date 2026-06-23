import useInView from "../../hooks/useInView";

export default function Section({
  id,
  theme = "dark",
  width = "default",
  className = "",
  divider = false,
  children,
}) {
  const [ref, inView] = useInView();
  const containerClass = width === "narrow" ? "container-narrow" : "container";

  return (
    <section
      id={id}
      className={`section ${theme === "light" ? "section--light" : ""} ${divider ? "section--divider" : ""} ${className}`.trim()}
    >
      <div className={containerClass} ref={ref}>
        {typeof children === "function" ? children({ inView }) : children}
      </div>
    </section>
  );
}
