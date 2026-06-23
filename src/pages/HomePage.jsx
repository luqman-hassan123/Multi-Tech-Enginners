import usePageTitle from "../hooks/usePageTitle";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

export default function HomePage() {
  usePageTitle("Home");

  return (
    <>
      <HeroSection />
      <ServicesSection limit={4} showViewAll />
      <ProjectsSection limit={6} showViewAll />
      <TestimonialsSection />
    </>
  );
}
