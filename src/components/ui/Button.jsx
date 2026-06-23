const VARIANTS = {
  primary: "btn-primary",
  outline: "btn-outline",
  success: "btn-primary btn-primary--success",
};

export default function Button({
  as: Component = "button",
  variant = "primary",
  type = "button",
  className = "",
  children,
  ...props
}) {
  const classes = `${VARIANTS[variant] || VARIANTS.primary} ${className}`.trim();

  if (Component === "button") {
    return (
      <button type={type} className={classes} {...props}>
        {children}
      </button>
    );
  }

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
