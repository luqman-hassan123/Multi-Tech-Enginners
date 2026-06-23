import { MISSION_VISION } from "../../data/about";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

export default function MissionVisionSection() {
  return (
    <Section theme="light" width="narrow" divider>
      {({ inView }) => (
        <>
          <SectionHeader
            theme="light"
            tag="Purpose"
            title={
              <>
                Mission & <span className="text-accent">Vision</span>
              </>
            }
            subtitle="The principles and direction that guide every project we take on."
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
        </>
      )}
    </Section>
  );
}
