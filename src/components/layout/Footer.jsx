import { Link } from "react-router-dom";
import { NAV_LINKS, SITE_COPY, CONTACT_INFO } from "../../data/site";
import BrandLockup from "./BrandLockup";

export default function Footer() {
  const email = CONTACT_INFO.find((c) => c.label === "Email")?.value;
  const phone = CONTACT_INFO.find((c) => c.label === "Phone")?.value;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="footer-brand">
              <BrandLockup showSub={false} />
            </Link>
            <p className="footer-tagline">{SITE_COPY.tagline}</p>
          </div>

          <div>
            <h4 className="section-tag footer-heading">Quick Links</h4>
            {NAV_LINKS.map(({ path, label }) => (
              <Link key={path} to={path} className="footer-link">
                {label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="section-tag footer-heading">Contact</h4>
            <p className="footer-text">{email}</p>
            <p className="footer-text">{phone}</p>
            <p className="footer-text">Pakistan · Afghanistan</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2025 {SITE_COPY.brandFull}. Founded by Niaz Muhammad Khan.</p>
          <p className="footer-copy footer-copy--muted">{SITE_COPY.footerTag}</p>
        </div>
      </div>
    </footer>
  );
}
