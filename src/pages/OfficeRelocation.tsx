import { memo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import ReviewDialog from "../components/ReviewDialog";
import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";

import officeRelocationImg from "../assets/OfficeRelocation/office-relocation-img.jpg";
import "./OfficeRelocation.scss";
import { siteConfig } from "../config/Company";
/* ─── Static data ────────────────────────────────────────────────── */


const TRUST_STATS = [
  { value: siteConfig.stats.totalYearOfExperience,   label: "Years of Trust"   },
  { value: siteConfig.stats.totalHappyCustomers,  label: "Moves Completed"  },
  { value: siteConfig.stats.totalCitiesCovered,  label: "Cities Covered"   },
  { value: siteConfig.stats.customerRating+" ★",  label: "Average Rating"   },
] as const;

const BOOKING_STEPS = [
  {
    step: "01", emoji: "📋",
    title: "Share Details & Get a Quote",
    points: [
      "Provide moving requirements — items, location, and distance.",
      "Get a fair, customised quote from our verified professionals.",
    ],
  },
  {
    step: "02", emoji: "📅",
    title: "Confirm Booking",
    points: [
      "Choose your preferred pickup date and time.",
      "Secure your booking with a small advance (adjusted later).",
    ],
  },
  {
    step: "03", emoji: "🔧",
    title: "Safe Packing & Pickup",
    points: [
      "Our trained team arrives with top-quality packing materials.",
      "Dismantling, labelling, and secure loading under expert supervision.",
    ],
  },
  {
    step: "04", emoji: "📄",
    title: "Transparent Invoice",
    points: [
      "Receive a detailed invoice based on your provided list.",
      "Pay the remaining amount after deducting your advance.",
    ],
  },
  {
    step: "05", emoji: "🚛",
    title: "Secure Transport",
    points: [
      "Your goods are dispatched safely to the destination.",
      "Track your shipment with live updates until delivery.",
    ],
  },
  {
    step: "06", emoji: "🏢",
    title: "Delivery & Feedback",
    points: ["After delivery and reinstallation, share your valuable feedback."],
    hasDialog: true,
  },
];

const OFFICE_ITEMS = [
  { icon: "🪑", label: "Office Furniture",      desc: "Desks, chairs, tables, cabinets, and workstations" },
  { icon: "💻", label: "IT Equipment",           desc: "Computers, servers, printers, scanners, networking devices" },
  { icon: "📁", label: "Files & Documents",      desc: "Confidential papers and records packed securely" },
  { icon: "🔌", label: "Electrical Items",       desc: "Projectors, AC units, lighting systems, and other devices" },
  { icon: "☕", label: "Pantry & Miscellaneous", desc: "Kitchen equipment, décor items, and other accessories" },
] as const;

const WHY_PROFESSIONAL = [
  { icon: "🛡️", title: "Safe & Secure Handling", desc: "Expert movers ensure delicate equipment and files are moved safely." },
  { icon: "⚡", title: "Minimal Downtime",        desc: "Quick and well-planned relocation keeps your business running smoothly." },
  { icon: "👷", title: "Professional Team",       desc: "Skilled staff manage dismantling, packing, loading, and setup efficiently." },
  { icon: "🔄", title: "End-to-End Service",      desc: "From packing to reinstallation, everything is handled by professionals." },
  { icon: "📋", title: "Insurance Support",       desc: "Get insurance coverage for your valuable office assets during transit." },
] as const;

const COST_FACTORS = [
  { no: "01", title: "Distance",        desc: "The farther the move, the higher the cost — more fuel, time, and resources." },
  { no: "02", title: "Number of Items", desc: "More or heavier items require a bigger vehicle and additional labour." },
  { no: "03", title: "Packing Quality", desc: "Premium materials like bubble wrap keep items safe but add marginal cost." },
  { no: "04", title: "Type of Vehicle", desc: "Bigger or specialised vehicles cost more than compact ones." },
  { no: "05", title: "Time of Moving",  desc: "Weekends and month-ends cost more — choose weekdays or off-season to save." },
] as const;

/* ─── Memoised sub-components ────────────────────────────────────── */

const StatBadge = memo(({ stat }: { stat: (typeof TRUST_STATS)[number] }) => (
  <div className="or-stat-badge">
    <span className="or-stat-badge__value">{stat.value}</span>
    <span className="or-stat-badge__label">{stat.label}</span>
  </div>
));
StatBadge.displayName = "StatBadge";

const StepCard = memo(({ step, index }: { step: (typeof BOOKING_STEPS)[number]; index: number }) => (
  <div className="or-step-card" style={{ "--step-delay": `${index * 0.08}s` } as React.CSSProperties}>
    <div className="or-step-card__header">
      <span className="or-step-card__num">{step.step}</span>
      <span className="or-step-card__emoji" aria-hidden="true">{step.emoji}</span>
    </div>
    <h3 className="or-step-card__title">{step.title}</h3>
    <ul className="or-step-card__list">
      {step.points.map((pt) => <li key={pt}>{pt}</li>)}
    </ul>
    {step.hasDialog && (
      <div className="or-step-card__dialog"><ReviewDialog /></div>
    )}
  </div>
));
StepCard.displayName = "StepCard";

const ItemCard = memo(({ item }: { item: (typeof OFFICE_ITEMS)[number] }) => (
  <div className="or-item-card" role="listitem">
    <div className="or-item-card__icon-wrap" aria-hidden="true">
      <span className="or-item-card__icon">{item.icon}</span>
    </div>
    <h3 className="or-item-card__label">{item.label}</h3>
    <p className="or-item-card__desc">{item.desc}</p>
  </div>
));
ItemCard.displayName = "ItemCard";

const WhyCard = memo(({ item, index }: { item: (typeof WHY_PROFESSIONAL)[number]; index: number }) => (
  <div className="or-why-card" role="listitem" style={{ "--why-delay": `${index * 0.07}s` } as React.CSSProperties}>
    <div className="or-why-card__icon-wrap" aria-hidden="true">
      <span className="or-why-card__icon">{item.icon}</span>
    </div>
    <div className="or-why-card__body">
      <h3 className="or-why-card__title">{item.title}</h3>
      <p className="or-why-card__desc">{item.desc}</p>
    </div>
    <div className="or-why-card__arrow" aria-hidden="true">→</div>
  </div>
));
WhyCard.displayName = "WhyCard";

const FactorRow = memo(({ factor }: { factor: (typeof COST_FACTORS)[number] }) => (
  <div className="or-factor-row" role="listitem">
    <span className="or-factor-row__num">{factor.no}</span>
    <div className="or-factor-row__body">
      <h3 className="or-factor-row__title">{factor.title}</h3>
      <p className="or-factor-row__desc">{factor.desc}</p>
    </div>
    <div className="or-factor-row__bar" aria-hidden="true" />
  </div>
));
FactorRow.displayName = "FactorRow";

/* ─── Page Component ─────────────────────────────────────────────── */

const OfficeRelocation = () => (
  <>
    {/* ── SEO ── */}
    <Helmet>
      <title>Office Relocation Services | Gati Shifting Packers</title>
      <meta name="description" content="Professional Office Relocation Services by Gati Shifting Packers. Efficient, safe, and timely shifting of your office equipment and furniture across India." />
      <meta name="keywords" content="Gati Shifting Packers office relocation, commercial movers, office shifting services, corporate relocation, office moving India, office movers, affordable office movers in delhi, affordable office movers in noida, gati office relocation services, office relocation, office shifting, corporate relocation, business moving services" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Abhishek" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Office Relocation Services | Gati Shifting Packers" />
      <meta property="og:description" content="Trust Gati Shifting Packers for hassle-free office relocation. Safe packing and moving services for your commercial space anywhere in India." />
      <meta property="og:url" content="https://gatishiftingpackers.com/office-relocation" />
      <meta property="og:site_name" content="Gati Shifting Packers" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Office Relocation Services | Gati Shifting Packers" />
      <meta name="twitter:description" content="Efficient office relocation services by Gati Shifting Packers. Securely move your office furniture and equipment anywhere in India." />
      <meta httpEquiv="Content-Language" content="en" />
      <link rel="canonical" href="https://gatishiftingpackers.com/office-relocation" />
    </Helmet>

    {/* ── Hero ── */}
    <section className="or-hero" role="banner">
      <div className="or-hero__bg-lines" aria-hidden="true" />
      <div className="or-hero__accent-bar" aria-hidden="true" />

      <div className="or-hero__inner">
        {/* Left: content */}
        <div className="or-hero__content">
          <div className="or-hero__pill">
            <span className="or-hero__pill-dot" aria-hidden="true" />
            Pan India · Corporate & Commercial
          </div>

          <h1 className="or-hero__title">
            <span className="or-hero__title-line">Office</span>
            <span className="or-hero__title-accent">Relocation</span>
            <span className="or-hero__title-line">Services</span>
          </h1>

          <p className="or-hero__sub">
            Zero downtime. Zero damage. Professional office shifting for
            businesses of every size — anywhere across India.
          </p>

          <div className="or-cta-group">
            <Link className="or-btn or-btn--primary" to="/contact-us">
              Get Free Quote
              <span className="or-btn__arrow" aria-hidden="true">→</span>
            </Link>
            <a className="or-btn or-btn--outline" href={`tel:${siteConfig.phone}`}>
              📞 {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* Right: stat cards */}
        <div className="or-hero__stats" aria-label="Trust statistics">
          {TRUST_STATS.map((stat) => (
            <StatBadge key={stat.label} stat={stat} />
          ))}
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="or-hero__ticker" aria-hidden="true">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="or-hero__ticker-track">
            {["Verified Professionals", "GPS Tracked Vehicles", "Zero-Damage Guarantee",
              `${siteConfig.stats.totalYearOfExperience} Years of Experience`, "Insurance Covered", `${siteConfig.stats.totalCountryServed} Cities Served`].map((t) => (
              <span key={t} className="or-hero__ticker-item">
                <span className="or-hero__ticker-dot" />
                {t}
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>

    {/* ── Intro ── */}
    <section className="or-intro" aria-labelledby="or-intro-heading">
      <div className="or-intro__container">
        <div className="or-intro__label-wrap">
          <span className="or-label">About Our Service</span>
        </div>
        <div className="or-intro__body">
          <h2 id="or-intro-heading" className="or-section-heading">
            Gati Shifting Packers –{" "}
            <em className="or-accent">Reliable Office Shifting</em> Services in India
          </h2>
          <div className="or-intro__text">
            <p>
              Gati Shifting Packers is one of the most trusted names in office
              relocation and commercial moving services in India. We provide smooth,
              professional, and affordable office shifting solutions that help businesses
              move without affecting productivity.
            </p>
            <p>
              With a strong presence across major Indian cities, we are known for
              efficient handling, careful packing, and timely delivery of office assets.
              From furniture and computers to confidential files and IT equipment — we
              manage everything with precision, insurance, and live vehicle tracking.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ── 6-Step Process ── */}
    <section className="or-steps" aria-labelledby="or-steps-heading">
      <div className="or-steps__container">
        <span className="or-label">How It Works</span>
        <h2 id="or-steps-heading" className="or-section-heading">
          Simple <em className="or-accent">6-Step</em> Booking Process
        </h2>
        <p className="or-section-sub">From first enquiry to final setup — we handle it all.</p>
        <div className="or-steps__grid">
          {BOOKING_STEPS.map((step, i) => (
            <StepCard key={step.step} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* ── Office Items ── */}
    <section className="or-items" aria-labelledby="or-items-heading">
      <div className="or-items__container">
        <span className="or-label">What We Move</span>
        <h2 id="or-items-heading" className="or-section-heading">
          Office Items We Shift
        </h2>
        <p className="or-section-sub">
          Complete office shifting solutions covering all essential workplace items.
        </p>
        <div className="or-items__grid" role="list">
          {OFFICE_ITEMS.map((item) => (
            <ItemCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>

    {/* ── Pricing Image ── */}
    <section className="or-pricing" aria-labelledby="or-pricing-heading">
      <div className="or-pricing__container">
        <span className="or-label">Pricing</span>
        <h2 id="or-pricing-heading" className="or-section-heading">
          Affordable Office Shifting Charges in India
        </h2>
        <p className="or-section-sub">
          Transparent pricing with no hidden costs — pay only for what you use.
        </p>
        <div className="or-pricing__img-wrap">
          <img
            src={officeRelocationImg}
            alt="Office relocation service in action by Gati Shifting Packers"
            className="or-pricing__img"
            loading="lazy"
            decoding="async"
          />
          <div className="or-pricing__badge">No Hidden Charges</div>
        </div>
      </div>
    </section>

    {/* ── Why Professional ── */}
    <section className="or-why" aria-labelledby="or-why-heading">
      <div className="or-why__container">
        <div className="or-why__left">
          <span className="or-label">Why Us?</span>
          <h2 id="or-why-heading" className="or-section-heading">
            Why Choose <br /><em className="or-accent">Professional</em><br /> Office Shifting?
          </h2>
          <p className="or-section-sub">
            Don't risk your business assets with untrusted movers. Here's why professionals make all the difference.
          </p>
        </div>
        <div className="or-why__right" role="list">
          {WHY_PROFESSIONAL.map((item, i) => (
            <WhyCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* ── Cost Factors ── */}
    <section className="or-factors" aria-labelledby="or-factors-heading">
      <div className="or-factors__container">
        <span className="or-label">Pricing Guide</span>
        <h2 id="or-factors-heading" className="or-section-heading">
          Factors Affecting the{" "}
          <em className="or-accent">Cost of Office Shifting</em>
        </h2>
        <p className="or-section-sub">Key factors that determine your final office shifting price.</p>
        <div className="or-factors__list" role="list">
          {COST_FACTORS.map((factor) => (
            <FactorRow key={factor.no} factor={factor} />
          ))}
        </div>
      </div>
    </section>

    {/* ── External Sections ── */}
    <ReviewVideo />
    <GetInTouch />
    <AwardCertification />
    <TrustUsSection />
    <BrandList />
    <FAQList />

  </>
);

export default memo(OfficeRelocation);