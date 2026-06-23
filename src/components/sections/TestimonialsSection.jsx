import { getTestimonials } from "../../data/testimonials";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import HorizontalScroll from "../ui/HorizontalScroll";
import TestimonialCard from "../TestimonialCard";
import ClientLogoMarquee from "./ClientLogoMarquee";

export default function TestimonialsSection({ divider = true }) {
  const testimonials = getTestimonials();
  const useScroll = testimonials.length > 2;

  return (
    <Section divider={divider}>
      {({ inView }) => (
        <>
          <SectionHeader
            tag="Client Feedback"
            title={
              <>
                What Our <span className="text-accent">Clients Say</span>
              </>
            }
            subtitle="Institutional partners across government, judiciary, healthcare, and public infrastructure share their experience working with our teams."
          />

          <ClientLogoMarquee />

          {useScroll ? (
            <>
              <p className="results-count">
                {testimonials.length} testimonials — use arrows or swipe to browse
              </p>
              <HorizontalScroll ariaLabel="Testimonials" className="testimonials-scroll">
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="horizontal-scroll__item testimonials-scroll__item">
                    <TestimonialCard
                      testimonial={testimonial}
                      compact
                      inView={inView}
                      index={index}
                    />
                  </div>
                ))}
              </HorizontalScroll>
            </>
          ) : (
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  inView={inView}
                  index={index}
                />
              ))}
            </div>
          )}
        </>
      )}
    </Section>
  );
}
