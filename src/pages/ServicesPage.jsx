import usePageTitle from "../hooks/usePageTitle";
import ServicesSection from "../components/sections/ServicesSection";

export default function ServicesPage() {
  usePageTitle("Services");

  return <ServicesSection divider={false} />;
}
