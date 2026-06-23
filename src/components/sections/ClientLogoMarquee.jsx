import { CLIENTS } from "../../data/clients";
import Marquee from "../ui/Marquee";
import ClientLogoBadge from "../ClientLogoBadge";

export default function ClientLogoMarquee() {
  return (
    <div className="client-logo-marquee">
      <p className="client-logo-marquee__label">Trusted by institutional clients</p>
      <Marquee speed={50} ariaLabel="Client logos">
        {CLIENTS.map((client) => (
          <ClientLogoBadge key={client.id} clientId={client.id} name={client.name} />
        ))}
      </Marquee>
    </div>
  );
}
