import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { HERO_SLIDES, HERO_SLIDE_INTERVAL_MS } from "../../data/images";
import { STATS, SITE_COPY } from "../../data/site";
import Button from "../ui/Button";
import HeroStat from "../HeroStat";

const SLIDE_MS = 1400;

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [leavingIndex, setLeavingIndex] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const goToSlide = (nextIndex) => {
    setActiveIndex((current) => {
      if (nextIndex === current) return current;
      setLeavingIndex(current);
      return nextIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        setLeavingIndex(current);
        return (current + 1) % HERO_SLIDES.length;
      });
    }, HERO_SLIDE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (leavingIndex === null) return undefined;
    const timer = setTimeout(() => setLeavingIndex(null), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [leavingIndex, activeIndex]);

  return (
    <section className="hero-construction">
      <div className="hero-construction__bg" aria-hidden>
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;
          const isLeaving = index === leavingIndex;
          const isInitial = index === 0 && !leavingIndex && activeIndex === 0;

          return (
            <div
              key={slide.id}
              className={[
                "hero-construction__bg-slide",
                isActive ? "is-active" : "",
                isLeaving ? "is-leaving" : "",
                isInitial && mounted ? "is-initial" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{ backgroundImage: `url("${slide.src}")` }}
            />
          );
        })}
      </div>

      <div className="hero-construction__slide-dots" aria-label="Hero background slides">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`hero-construction__dot ${index === activeIndex ? "is-active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Show slide ${index + 1}: ${slide.alt}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>

      <div className="hero-construction__accent-bar" />
      <div className="hero-construction__overlay" />

      <div className={`hero-construction__content ${mounted ? "is-visible" : ""}`}>
        <div className="hero-construction__badge">{SITE_COPY.heroBadge}</div>

        <h1 className="heading-hero">
          Building
          <br />
          <span className="text-accent">Infrastructure</span>
          <br />
          That Lasts
        </h1>

        <p className="hero-construction__lead">
          Multi Tech Engineers delivers civil construction, electrical, mechanical, and HVAC works for government
          institutions, hospitals, courts, and communities across Pakistan and Afghanistan.
        </p>

        <div className="hero-construction__actions">
          <Button as={Link} to="/projects">
            View Our Projects
          </Button>
          <Button as={Link} to="/contact" variant="outline">
            Contact Us
          </Button>
        </div>

        <div className="hero-construction__stats">
          {STATS.map((stat, index) => (
            <HeroStat key={stat.label} stat={stat} start={mounted} delay={index * 180} />
          ))}
        </div>
      </div>
    </section>
  );
}
