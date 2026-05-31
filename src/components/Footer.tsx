import { Link } from "react-router-dom";
import { useState, memo, useCallback } from "react";
import "./Footer.scss";
import logoImg from "../assets/logo/transparentIco.png";
import { cities2 } from "./citiesData";
import { siteConfig } from "../config/Company";

// ─── Static data (defined outside component to avoid re-creation on renders) ───

const ABOUT_LINKS = [
  { to: "/who-we-are", label: "Who We Are" },
  { to: "/why-gati", label: "Why Gati" },
  { to: "/our-team", label: "Our Team" },
  { to: "/vission-mission", label: "Vision & Mission" },
  { to: "/video-gallery", label: "Our Videos" },
  { to: "/photo-gallery", label: "Photo Gallery" },
];

const HELP_LINKS = [
  { to: "/faqs", label: "FAQs" },
  { to: "/contact-us", label: "Get a Quote" },
  { to: "/customer-support", label: "Customer Support" },
  { to: "/contact-us", label: "Contact Us" },
  { to: "/moving-guide", label: "Moving Guide" },
  { to: "/bill-claim", label: "Bill Claim" },
];

const SERVICE_LINKS = [
  { to: "/home-shifting", label: "Home Shifting" },
  { to: "/office-relocation", label: "Office Relocation" },
  { to: "/car-bike-transport", label: "Car / Bike Transport" },
  { to: "/pet-relocation", label: "Pet Relocation" },
  { to: "/commercial-shifting", label: "Commercial Shifting" },
  { to: "/international-moves", label: "International Moves" },
];

const STORAGE_LINKS = [
  { to: "/storage", label: "Storage" },
  { to: "/car-storage", label: "Car Storage" },
  { to: "/bike-storage", label: "Bike Storage" },
  { to: "/warehouse", label: "Warehouse" },
  { to: "/home-storage", label: "Home Storage" },
];

const OTHER_LINKS = [
  { to: "/review", label: "Customer Testimonials" },
  { to: "/safety-standard", label: "Safety Standards" },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
  { to: "/privacy-and-policy", label: "Privacy Policy" },
];

const CITY_CHUNK = 28;

// ─── Sub-components (memoized to prevent unnecessary re-renders) ───

const FooterLinkGroup = memo(
  ({ title, links }: { title: string; links: { to: string; label: string }[] }) => (
    <div className="footer-col">
      <h4 className="footer-col__title">{title}</h4>
      <ul className="footer-col__list">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} className="footer-col__link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
);
FooterLinkGroup.displayName = "FooterLinkGroup";

const CityLink = memo(({ city }: { city: string }) => (
  <li className="city-grid__item">
    <Link to={`/packers-and-movers-in-${city}`} className="city-grid__link">
      {/* Inline SVG pin — zero network request, no icon library needed */}
      <svg
        className="city-grid__pin"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        width="14"
        height="14"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
      </svg>
      <span>Movers &amp; Packers {city}</span>
    </Link>
  </li>
));
CityLink.displayName = "CityLink";

// ─── Main Footer ───

const Footer = () => {
  const [visibleCount, setVisibleCount] = useState(CITY_CHUNK);

  const handleShowMore = useCallback(
    () => setVisibleCount((prev) => prev + CITY_CHUNK),
    []
  );

  return (
    <>
      {/* ── City directory section ── */}
      <section id="redirect-links" aria-label="Search by location">
        <div className="redirect-links__header">
          <h2 className="redirect-links__heading">Search By Location</h2>
          <p className="redirect-links__sub">
            Trusted packers &amp; movers across India
          </p>
        </div>

        <div className="city-grid__wrapper">
          <ul className="city-grid">
            {cities2.slice(0, visibleCount).map((item) => (
              <CityLink key={item.city} city={item.city} />
            ))}
          </ul>

          {visibleCount < cities2.length && (
            <button
              className="show-more-btn"
              onClick={handleShowMore}
              aria-label="Show more cities"
            >
              Show More Cities
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
              </svg>
            </button>
          )}
        </div>
      </section>

      {/* ── Main footer ── */}
      <footer className="footer" role="contentinfo">
        {/* Decorative top bar */}
        <div className="footer__accent-bar" aria-hidden="true" />

        <div className="footer__inner">
          {/* Brand column */}
          <div className="footer-col footer-col--brand">
            <img
              src={logoImg}
              alt="Gati Shifting Packers logo"
              className="footer__logo"
              loading="lazy"
              width="140"
              height="auto"
            />
            <address className="footer__address">
              <p>
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
                {siteConfig.officeAddress}
                {/* Gati Shifting Packers<br />
                Ghansoli, Navi Mumbai<br />
                Maharashtra 400701 */}
              </p>
              <p>
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.32.57 3.55.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.44.57 3.55a1 1 0 01-.25 1.02l-2.2 2.22z" />
                </svg>
                +91 {siteConfig.phone}
              </p>
            </address>
          </div>

          <FooterLinkGroup title="About Gati" links={ABOUT_LINKS} />
          <FooterLinkGroup title="Need Help?" links={HELP_LINKS} />
          <FooterLinkGroup title="Our Services" links={SERVICE_LINKS} />
          <FooterLinkGroup title="Secure Storage" links={STORAGE_LINKS} />
          <FooterLinkGroup title="Other Links" links={OTHER_LINKS} />
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Gati Shifting Packers in collaboration with
            Gatisafe Express Private Limited. All Rights Reserved.
          </p>
          <nav className="footer__legal-links" aria-label="Legal">
            <Link to="/terms-and-conditions">Terms</Link>
            <span aria-hidden="true">·</span>
            <Link to="/privacy-and-policy">Privacy</Link>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default memo(Footer);