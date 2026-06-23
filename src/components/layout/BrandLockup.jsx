import Logo from "../Logo";
import { SITE_COPY } from "../../data/site";

export default function BrandLockup({ size = 44, showSub = true, stacked = false }) {
  return (
    <div className={`brand-lockup ${stacked ? "brand-lockup--stacked" : ""}`}>
      <Logo size={size} />
      <div>
        <div className="site-nav__brand-name">{showSub ? SITE_COPY.brandName : SITE_COPY.brandFull}</div>
        {showSub && <div className="site-nav__brand-sub">{SITE_COPY.brandSub}</div>}
      </div>
    </div>
  );
}
