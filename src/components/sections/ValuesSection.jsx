import { VALUES } from "../../data/about";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import ValueCard from "../ValueCard";

export default function ValuesSection({ divider = true }) {
  return (
    <Section theme="light" divider={divider}>
      {({ inView }) => (
        <>
          <SectionHeader
            theme="light"
            tag="Our Standards"
            title={
              <>
                Values on Every <span className="text-accent">Job Site</span>
              </>
            }
            subtitle="Safety, quality, and accountability guide how we plan, build, and hand over every project."
          />
          <div className="values-grid">
            {VALUES.map((value, index) => (
              <ValueCard key={value.id} value={value} index={index} inView={inView} />
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
