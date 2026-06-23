import { useState } from "react";
import { getClientLogo } from "../data/clientLogos";

export default function ClientLogoBadge({ clientId, name, className = "" }) {
  const logo = getClientLogo(clientId);
  const [failed, setFailed] = useState(false);

  if (!logo?.src || failed) {
    return (
      <div className={`client-logo-badge client-logo-badge--text ${className}`.trim()} title={name}>
        <span>{name}</span>
      </div>
    );
  }

  return (
    <div className={`client-logo-badge ${className}`.trim()} title={name}>
      <img
        src={logo.src}
        alt={name}
        className="client-logo-badge__img"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
