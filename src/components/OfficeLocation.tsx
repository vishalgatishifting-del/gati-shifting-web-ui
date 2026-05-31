import { useEffect, useRef, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import BadgeIcon from "@mui/icons-material/Badge";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HotelClassIcon from "@mui/icons-material/HotelClass";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import "./OfficeLocation.scss";
import { siteConfig } from "../config/Company";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CityLink {
  label: string;
  href: string;
}

interface OfficeDetail {
  icon: React.ReactNode;
  label: string;
  value: string;
  copyable: boolean;
}

interface CopyButtonProps {
  value: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const CITY_LINKS: CityLink[] = [
  { label: "Delhi",     href: "https://gatishiftingpackers.com/packers-and-movers-in-delhi" },
  { label: "Mumbai",    href: "https://gatishiftingpackers.com/packers-and-movers-in-mumbai-bombay" },
  { label: "Kolkata",   href: "https://gatishiftingpackers.com/packers-and-movers-in-kolkata-calcutta" },
  { label: "Chennai",   href: "https://gatishiftingpackers.com/packers-and-movers-in-chennai-madras" },
  { label: "Bengaluru", href: "https://gatishiftingpackers.com/packers-and-movers-in-Bengaluru-bangalore" },
  { label: "Hyderabad", href: "https://gatishiftingpackers.com/packers-and-movers-in-Hyderabad" },
  { label: "Pune",      href: "https://gatishiftingpackers.com/packers-and-movers-in-Pune" },
  { label: "Goa",       href: "https://gatishiftingpackers.com/packers-and-movers-in-Goa" },
  { label: "Guwahati",  href: "https://gatishiftingpackers.com/packers-and-movers-in-guwahati" },
  { label: "Imphal",    href: "https://gatishiftingpackers.com/packers-and-movers-in-Imphal" },
];

const OFFICE_DETAILS: OfficeDetail[] = [
  {
    icon: <LocationOnIcon fontSize="small" />,
    label: "Address",
    value: siteConfig.officeAddress,
    copyable: false,
  },
  { icon: <CallIcon fontSize="small" />,              label: "Phone", value: siteConfig.phone,                copyable: true  },
  { icon: <EmailIcon fontSize="small" />,             label: "Email", value: siteConfig.email.sales, copyable: true  },
  { icon: <WatchLaterIcon fontSize="small" />,        label: "Hours", value: "Mon – Sun: 8:00 AM – 8:00 PM",  copyable: false },
  { icon: <BadgeIcon fontSize="small" />,             label: "GST",   value: siteConfig.legal.GSTIN,               copyable: true  },
  { icon: <BrandingWatermarkIcon fontSize="small" />, label: "MSME",  value: siteConfig.legal.MSME,           copyable: true  },
  { icon: <VerifiedUserIcon fontSize="small" />,      label: "CIN",   value: siteConfig.legal.CIN,          copyable: true  },
  { icon: <HotelClassIcon fontSize="small" />,        label: "TAN",   value: siteConfig.legal.TAN,                    copyable: true  },
  { icon: <CreditCardIcon fontSize="small" />,        label: "PAN",   value: siteConfig.legal.PAN,                    copyable: true  },
];

// ─── CopyButton ───────────────────────────────────────────────────────────────

function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      type="button"
      className={`ol-copy-btn${copied ? " ol-copy-btn--done" : ""}`}
      onClick={handleCopy}
      aria-label={copied ? "Copied!" : `Copy ${value}`}
      title={copied ? "Copied!" : "Copy to clipboard"}
    >
      {copied ? (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </button>
  );
}

// ─── OfficeLocation ───────────────────────────────────────────────────────────

const OfficeLocation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible]   = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="office-location-section"
      ref={sectionRef}
      aria-label="Office Location"
      className={visible ? "is-visible" : ""}
    >
      {/* ── Decorative background ── */}
      <div className="ol-bg" aria-hidden="true">
        <div className="ol-bg__grid" />
        <span className="ol-bg__orb ol-bg__orb--a" />
        <span className="ol-bg__orb ol-bg__orb--b" />
      </div>

      <div className="ol-wrap">

        {/* ── Section header ── */}
        <div className="ol-heading">
          <div className="ol-heading__rule">
            <span className="ol-heading__rule-line" />
            <span className="ol-heading__eyebrow">Serving All Across India</span>
            <span className="ol-heading__rule-line ol-heading__rule-line--long" />
          </div>
          <h2 className="ol-heading__title">
            Our Office &amp; <em>Coverage</em>
          </h2>
        </div>

        {/* ── City nav ── */}
        <nav className="ol-cities" aria-label="Cities we serve">
          <ul className="ol-cities__list" role="list">
            {CITY_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="ol-cities__chip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Main card ── */}
        <div className="ol-card">

          {/* Map side */}
          <div className="ol-card__map">
            {/* Decorative SVG grid overlay */}
            <div className="ol-card__map-deco" aria-hidden="true">
              <svg width="100%" height="100%" viewBox="0 0 300 500" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <path d="M0 260 Q80 190 160 230 Q230 265 300 210" stroke="rgba(200,146,42,0.35)" strokeWidth="1.5" fill="none" />
                <path d="M0 310 Q90 350 170 290 Q240 240 300 280" stroke="rgba(74,144,217,0.2)" strokeWidth="1" fill="none" />
                <circle cx="160" cy="240" r="5" fill="#c8922a" opacity="0.9" />
                <circle cx="160" cy="240" r="12" stroke="#c8922a" strokeWidth="1" fill="none" opacity="0.4" />
                <circle cx="160" cy="240" r="24" stroke="#c8922a" strokeWidth="0.7" fill="none" opacity="0.18" />
              </svg>
            </div>

            {/* Skeleton shown before map loads */}
            {!mapLoaded && (
              <div className="ol-card__map-skeleton" aria-hidden="true">
                <span className="ol-card__map-skeleton-shimmer" />
                <LocationOnIcon className="ol-card__map-skeleton-pin" />
              </div>
            )}

            <iframe
              title="Gati Shifting Packers – Office Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3769.5225867720897!2d72.99421947520662!3d19.128588882086827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDA3JzQyLjkiTiA3MsKwNTknNDguNSJF!5e0!3m2!1sen!2sin!4v1758188918732!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setMapLoaded(true)}
              className={mapLoaded ? "is-loaded" : ""}
            />

            {/* Address badge at bottom of map */}
            <div className="ol-card__map-badge">
              <span className="ol-card__map-badge-label">Office Address</span>
              <p className="ol-card__map-badge-value">
                Office No. 04, Shree Sadguru Niwas,<br />
                Sector 21, Ghansoli, Navi Mumbai – 400701
              </p>
            </div>
          </div>

          {/* Details side */}
          <div className="ol-card__info">

            <div className="ol-card__info-header">
              <span className="ol-card__eyebrow">Contact Info</span>
              <h3 className="ol-card__title">Get In Touch</h3>
            </div>

            <ul className="ol-detail-list" role="list">
              {OFFICE_DETAILS.map(({ icon, label, value, copyable }) => (
                <li key={label} className="ol-detail-list__item">
                  <span className="ol-detail-list__icon-box" aria-hidden="true">
                    {icon}
                  </span>
                  <div className="ol-detail-list__text">
                    <span className="ol-detail-list__label">{label}</span>
                    <span className="ol-detail-list__value">{value}</span>
                  </div>
                  {copyable && <CopyButton value={value} />}
                </li>
              ))}
            </ul>

            <p className="ol-card__hashtag" aria-label="Brand hashtag">
              #GatiShiftingPackers
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;