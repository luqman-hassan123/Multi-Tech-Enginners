import usePageTitle from "../hooks/usePageTitle";
import CareersSection from "../components/sections/CareersSection";

export default function CareersPage() {
  usePageTitle("Careers");

  return <CareersSection divider={false} />;
}
