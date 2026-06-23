export function scrollToSection(id) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
}
