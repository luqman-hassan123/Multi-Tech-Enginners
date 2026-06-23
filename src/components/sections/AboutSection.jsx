import { Link } from "react-router-dom";
import { CEO, MISSION_VISION } from "../../data/about";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import Panel from "../ui/Panel";
import Card from "../ui/Card";
import Avatar from "../ui/Avatar";

export default function AboutSection({ divider = true }) {
  return (
    <Section theme="light" width="narrow" divider={divider} className="section--about">
      {({ inView }) => (
        <>
          <SectionHeader
            theme="light"
            tag="Who We Are"
            title={
              <>
                About <span className="text-accent">Multi Tech Engineers</span>
              </>
            }
            subtitle="A construction and MEP contractor serving government institutions across Pakistan and Afghanistan since 2007."
          />

          <div className={`ceo-grid fade-in ${inView ? "is-visible" : ""}`}>
            <div className="ceo-grid__profile">
              <Avatar initials={CEO.initials} size="lg" />
              <h3 className="heading-card heading-card--dark">{CEO.name}</h3>
              <p className="section-tag section-tag--dark">{CEO.role}</p>
            </div>

            <Panel theme="light" className="ceo-quote">
              <div className="ceo-quote__mark">"</div>
              <p className="ceo-quote__lead ceo-quote__lead--dark">{CEO.quotes[0]}</p>
              <p className="ceo-quote__body ceo-quote__body--dark">{CEO.quotes[1]}</p>
            </Panel>
          </div>

          <div className="about-mission-block">
            <SectionHeader
              theme="light"
              tag="Purpose"
              title={
                <>
                  Mission & <span className="text-accent">Vision</span>
                </>
              }
            />
            <div className="mv-grid">
              {MISSION_VISION.map((item, index) => (
                <Card
                  key={item.tag}
                  theme="light"
                  inView={inView}
                  delay={index * 0.12}
                  className="mission-card"
                >
                  <div className="mission-card__icon">{item.icon}</div>
                  <span className="section-tag section-tag--dark">{item.tag}</span>
                  <h3 className="heading-sub heading-sub--dark">{item.title}</h3>
                  <p className="mission-card__text">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </>
      )}
    </Section>
  );
}
