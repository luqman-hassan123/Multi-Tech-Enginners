export default function FormField({ label, children, className = "" }) {
  return (
    <div className={`form-field ${className}`.trim()}>
      <label className="form-field__label">{label}</label>
      {children}
    </div>
  );
}
