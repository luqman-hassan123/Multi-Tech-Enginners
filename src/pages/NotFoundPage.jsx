import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";

export default function NotFoundPage() {
  usePageTitle("Page Not Found");

  return (
    <Section divider={false}>
      {() => (
        <>
          <SectionHeader
            tag="404"
            title={
              <>
                Page <span className="text-accent">Not Found</span>
              </>
            }
            subtitle="The page you are looking for does not exist or may have been moved."
          />
          <div className="section-cta">
            <Link to="/" className="btn-primary">
              Back to Home →
            </Link>
          </div>
        </>
      )}
    </Section>
  );
}
