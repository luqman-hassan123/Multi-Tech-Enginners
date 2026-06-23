import { Link } from "react-router-dom";
import { useState } from "react";
import { PROJECTS, PROJECT_CATEGORIES } from "../../data/projects";
import { PROJECT_STATUS_FILTERS } from "../../data/site";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import FilterBar from "../ui/FilterBar";
import HorizontalScroll from "../ui/HorizontalScroll";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal";

export default function ProjectsSection({
  divider = true,
  layout = "carousel",
  limit,
  showViewAll = false,
}) {
  const [tab, setTab] = useState("all");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = PROJECTS.filter((project) => {
    const statusMatch = tab === "all" || project.status === tab;
    const categoryMatch = category === "All" || project.category === category;
    return statusMatch && categoryMatch;
  });

  const displayed = limit ? filtered.slice(0, limit) : filtered;
  const isCarousel = layout === "carousel";

  return (
    <Section theme="light" divider={divider}>
      {({ inView }) => (
        <>
          <SectionHeader
            theme="light"
            tag="Portfolio"
            title={
              <>
                Projects We Have <span className="text-accent">Built</span>
              </>
            }
            subtitle={
              isCarousel
                ? "Browse completed and ongoing construction work — swipe or use the arrows to explore more projects."
                : "Browse our full portfolio of completed and ongoing government and institutional construction work."
            }
          />

          {!limit && (
            <>
              <FilterBar items={PROJECT_STATUS_FILTERS} value={tab} onChange={setTab} />
              <FilterBar
                items={PROJECT_CATEGORIES.map((c) => ({ id: c, label: c }))}
                value={category}
                onChange={setCategory}
                variant="chip"
              />
            </>
          )}

          <p className="results-count">
            {displayed.length} project{displayed.length !== 1 ? "s" : ""}
            {isCarousel ? " — scroll sideways to view all" : ""}
          </p>

          {displayed.length > 0 ? (
            isCarousel ? (
              <HorizontalScroll resetKey={`${tab}-${category}-${limit}`} ariaLabel="Projects">
                {displayed.map((project, index) => (
                  <div key={project.id} className="horizontal-scroll__item">
                    <ProjectCard
                      project={project}
                      inView={inView}
                      delay={index * 0.05}
                      onClick={() => setSelected(project)}
                    />
                  </div>
                ))}
              </HorizontalScroll>
            ) : (
              <div className="project-grid">
                {displayed.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    inView={inView}
                    delay={index * 0.05}
                    onClick={() => setSelected(project)}
                  />
                ))}
              </div>
            )
          ) : (
            <p className="empty-state empty-state--dark">No projects match this filter.</p>
          )}

          {showViewAll && (
            <div className="section-cta">
              <Link to="/projects" className="btn-primary">
                View All Projects →
              </Link>
            </div>
          )}

          {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
        </>
      )}
    </Section>
  );
}
