import { Link } from "react-router-dom";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const LINKS = [
  { path: "/about", label: "About Us", desc: "Our story, leadership, and values since 2007.", icon: "🏢" },
  { path: "/services", label: "Services", desc: "Civil, electrical, mechanical, HVAC & IT works.", icon: "🛠️" },
  { path: "/projects", label: "Projects", desc: "Government and institutional project portfolio.", icon: "📁" },
  { path: "/careers", label: "Careers", desc: "Join our site and engineering teams.", icon: "👷" },
  { path: "/contact", label: "Contact", desc: "Start your next project with our team.", icon: "✉️" },
];

export default function HomeQuickLinks() {
  return (
    <Section theme="light" divider>
      {({ inView }) => (
        <>
          <SectionHeader
            theme="light"
            tag="Explore"
            title={
              <>
                What We <span className="text-accent">Deliver</span>
              </>
            }
            subtitle="Navigate our services, projects, contracts, and institutional client partnerships."
          />
          <div className="home-links-grid">
            {LINKS.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`home-link-card site-card animate-card ${inView ? "is-visible" : ""}`}
                style={{ transitionDelay: `${index * 0.06}s` }}
              >
                <span className="home-link-card__icon">{item.icon}</span>
                <h3 className="home-link-card__title">{item.label}</h3>
                <p className="home-link-card__desc">{item.desc}</p>
                <span className="home-link-card__arrow" aria-hidden>
                  →
                </span>
              </Link>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
