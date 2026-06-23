export default function Avatar({ initials, size = "md" }) {
  return (
    <div className={`avatar avatar--${size}`} aria-hidden>
      {initials}
    </div>
  );
}
