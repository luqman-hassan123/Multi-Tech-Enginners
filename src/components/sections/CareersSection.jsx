import { Link } from "react-router-dom";
import { CAREERS_COPY, CAREER_BENEFITS, OPEN_POSITIONS } from "../../data/careers";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import CareerCard from "../CareerCard";

export default function CareersSection({ divider = true }) {
  return (
    <Section divider={divider}>
      {({ inView }) => (
        <>
          <SectionHeader
            tag={CAREERS_COPY.tag}
            title={
              <>
                Build Your <span className="text-accent">Career With Us</span>
              </>
            }
            subtitle={CAREERS_COPY.subtitle}
          />

          <div className="careers-benefits-grid">
            {CAREER_BENEFITS.map((benefit, index) => (
              <Card key={benefit.title} inView={inView} delay={index * 0.08} className="career-benefit-card">
                <div className="career-benefit-card__icon">{benefit.icon}</div>
                <h3 className="heading-card-sm">{benefit.title}</h3>
                <p className="career-benefit-card__text">{benefit.desc}</p>
              </Card>
            ))}
          </div>

          <SectionHeader
            tag="Open Roles"
            title={
              <>
                Current <span className="text-accent">Openings</span>
              </>
            }
          />

          <div className="careers-grid">
            {OPEN_POSITIONS.map((position, index) => (
              <CareerCard key={position.id} position={position} index={index} inView={inView} />
            ))}
          </div>

          <p className="careers-apply-note">{CAREERS_COPY.applyNote}</p>

          <div className="section-cta">
            <Link to="/contact" className="btn-primary">
              Apply via Contact Form →
            </Link>
          </div>
        </>
      )}
    </Section>
  );
}
