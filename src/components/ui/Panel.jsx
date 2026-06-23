export default function Panel({ theme = "dark", className = "", children }) {
  const panelClass = theme === "light" ? "panel panel--light" : "panel";
  return <div className={`${panelClass} ${className}`.trim()}>{children}</div>;
}
