import { Link } from "react-router-dom";
import { SERVICES } from "../../data/services";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import ServiceCard from "../ServiceCard";

export default function ServicesSection({ divider = true, limit, showViewAll = false }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <Section divider={divider}>
      {({ inView }) => (
        <>
          <SectionHeader
            tag="What We Build"
            title={
              <>
                Construction & MEP <span className="text-accent">Services</span>
              </>
            }
            subtitle="Civil construction, electrical, mechanical, HVAC, and IT infrastructure — delivered by experienced site teams for government and institutional projects."
          />
          <div className="services-grid">
            {items.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                inView={inView}
                linkTo="/projects"
              />
            ))}
          </div>
          {showViewAll && (
            <div className="section-cta">
              <Link to="/services" className="btn-primary">
                View All Services →
              </Link>
            </div>
          )}
        </>
      )}
    </Section>
  );
}
