import { Link } from "react-router-dom";
import "./HouseholdShiftSection.scss";
import { siteConfig } from "../config/Company";


const IconHome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const IconSofa = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="10" width="18" height="8" rx="2"/>
    <path d="M5 10V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M3 14h18M8 18v2M16 18v2"/>
  </svg>
);

const IconTV = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

const IconBed = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7h18M3 7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2"/>
    <line x1="10" y1="12" x2="14" y2="12"/>
  </svg>
);

const IconKitchen = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2h12l2 7H4L6 2z"/>
    <path d="M4 9v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"/>
    <path d="M10 14h4M12 12v4"/>
  </svg>
);

const IconBox = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);

const IconMore = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

const PILLS = [
  { Icon: IconSofa,    label: "Furniture & sofas" },
  { Icon: IconTV,      label: "Electronics"        },
  { Icon: IconBed,     label: "Bedroom set"        },
  { Icon: IconKitchen, label: "Kitchen items"      },
  { Icon: IconBox,     label: "Packed boxes"       },
  { Icon: IconMore,    label: "& much more"        },
];

const HouseholdShiftSection = () => {
  return (
    <section id="hss-section" aria-labelledby="hss-heading">
      <div className="hss-orb hss-orb--top"    aria-hidden="true" />
      <div className="hss-orb hss-orb--bottom" aria-hidden="true" />

      <div className="hss-inner">

        {/* Top row: copy + stat */}
        <div className="hss-top">
          <div className="hss-copy">
            <p className="hss-eyebrow">
              <IconHome />
              Household shifting
            </p>
            <h2 className="hss-heading" id="hss-heading">
              Moving homes?<br />
              Tell us what <em>goes.</em>
            </h2>
            <p className="hss-desc">
              Pick your items, drop your details — we'll take it from there.
              No calls, no confusion.
            </p>
          </div>
          <div className="hss-stat" aria-label="500 plus homes shifted successfully">
            <span className="hss-stat-num">
              {siteConfig.stats.totalHomesRelocated}
            </span>
            <span className="hss-stat-label">Homes shifted successfully</span>
          </div>
        </div>

        <div className="hss-divider" aria-hidden="true" />

        {/* Bottom row: pills + CTA */}
        <div className="hss-bottom">
          <div className="hss-pills" role="list" aria-label="Items we can shift">
            {PILLS.map(({ Icon, label }) => (
              <div key={label} className="hss-pill" role="listitem">
                <Icon />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <Link to="/item-selection" className="hss-cta">
            <IconArrow />
            Select items, we'll do the rest
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HouseholdShiftSection;