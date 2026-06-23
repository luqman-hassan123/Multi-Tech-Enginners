import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/site";
import BrandLockup from "./BrandLockup";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const isActive = (path) => (path === "/" ? pathname === "/" : pathname.startsWith(path));

  return (
    <nav className={`site-nav ${scrolled ? "site-nav--solid" : ""}`}>
      <div className="site-nav__inner">
        <Link to="/" className="site-nav__brand" onClick={closeMenu}>
          <BrandLockup />
        </Link>

        <div className="nav-desktop">
          {NAV_LINKS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`nav-link ${isActive(path) ? "nav-link--active" : ""}`}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary btn-primary--sm">
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="nav-mobile"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="nav-mobile-menu">
          {NAV_LINKS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`nav-mobile-menu__link ${isActive(path) ? "nav-link--active" : ""}`}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" className="nav-mobile-cta" onClick={closeMenu}>
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
