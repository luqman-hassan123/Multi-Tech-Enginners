import usePageTitle from "../hooks/usePageTitle";
import ProjectsSection from "../components/sections/ProjectsSection";

export default function ProjectsPage() {
  usePageTitle("Projects");

  return <ProjectsSection divider={false} layout="grid" />;
}
