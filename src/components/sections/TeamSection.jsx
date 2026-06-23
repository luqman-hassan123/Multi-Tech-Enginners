import { TEAM } from "../../data/about";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import TeamCard from "../TeamCard";

export default function TeamSection({ divider = true }) {
  return (
    <Section divider={divider}>
      {({ inView }) => (
        <>
          <SectionHeader
            tag="Leadership"
            title={
              <>
                The Team Behind <span className="text-accent">Every Build</span>
              </>
            }
            subtitle="Experienced leaders overseeing construction, MEP, and project delivery across Pakistan and Afghanistan."
          />
          <div className="team-grid">
            {TEAM.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} inView={inView} />
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
