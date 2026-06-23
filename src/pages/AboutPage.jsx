import usePageTitle from "../hooks/usePageTitle";
import AboutSection from "../components/sections/AboutSection";
import TeamSection from "../components/sections/TeamSection";
import ValuesSection from "../components/sections/ValuesSection";

export default function AboutPage() {
  usePageTitle("About");

  return (
    <>
      <AboutSection divider={false} />
      <TeamSection />
      <ValuesSection />
    </>
  );
}
