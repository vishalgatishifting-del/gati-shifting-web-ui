import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";
import ReviewDialog from "../components/ReviewDialog";
import { Helmet } from "react-helmet-async";
import "./HomeStorage.scss";
import { siteConfig } from "../config/Company";

// ─── Static Data ─────────────────────────────────────────────

const STEPS = [
  {
    icon: "📋",
    title: "Share Your Storage Details & Get a Quote",
    points: [
      "Provide information about the items, quantity, and storage duration.",
      "Receive a fair, customized quote from our verified professionals.",
    ],
    hasCta: false,
  },
  {
    icon: "📅",
    title: "Confirm Booking with Advance Payment",
    points: [
      "Choose your preferred storage start date.",
      "Secure your booking with a small advance (adjusted later).",
    ],
    hasCta: false,
  },
  {
    icon: "🔧",
    title: "Safe Packing & Pickup",
    points: [
      "Our trained team arrives with high-quality packing materials.",
      "Dismantling, labeling, and secure loading done under expert supervision.",
    ],
    hasCta: false,
  },
  {
    icon: "📄",
    title: "Transparent Invoice & Payment Settlement",
    points: [
      "Receive a detailed invoice based on your storage requirements.",
      "Pay the remaining amount after deducting your advance payment.",
    ],
    hasCta: false,
  },
  {
    icon: "🏠",
    title: "Secure Storage & Real-Time Updates",
    points: [
      "Your items are stored safely in our secured warehouse.",
      "Track your belongings with live updates until retrieval.",
    ],
    hasCta: false,
  },
  {
    icon: "🚚",
    title: "Hassle-Free Retrieval & Feedback",
    points: [
      "When you need your items, we deliver them safely to your doorstep.",
      "Share your feedback to help us serve you better.",
    ],
    hasCta: true,
  },
];

const STORED_ITEMS = [
  {
    icon: "🛋️",
    label: "Furniture & Appliances",
    sub: "Sofas, beds, fridges, washing machines & more",
  },
  {
    icon: "❄️",
    label: "Seasonal Items",
    sub: "Clothing, decorations, sports equipment",
  },
  {
    icon: "📺",
    label: "Electronics & Gadgets",
    sub: "TVs, computers, kitchen appliances",
  },
  {
    icon: "📂",
    label: "Documents & Personal Items",
    sub: "Important papers, files, and keepsakes",
  },
  {
    icon: "🏺",
    label: "Décor & Accessories",
    sub: "Books, utensils, and home accessories",
  },
];

const WHY_CHOOSE = [
  {
    icon: "🔒",
    title: "Safe & Secure Handling",
    desc: "Experienced staff handle all household items with the utmost care.",
  },
  {
    icon: "🗓️",
    title: "Flexible Storage Duration",
    desc: "Short-term or long-term storage options tailored to your schedule.",
  },
  {
    icon: "👷",
    title: "Professional Team",
    desc: "Skilled personnel manage packing, loading, storage, and retrieval.",
  },
  {
    icon: "🔁",
    title: "End-to-End Service",
    desc: "From packing to doorstep delivery — everything handled professionally.",
  },
  {
    icon: "🛡️",
    title: "Insurance Support",
    desc: "Coverage available for valuable items during storage and transit.",
  },
];

const COST_FACTORS = [
  {
    title: "Volume & Weight of Items",
    desc: "More items or heavier belongings require more space and labor, increasing costs.",
  },
  {
    title: "Storage Duration",
    desc: "Long-term storage typically costs more than short-term storage.",
  },
  {
    title: "Packing Materials & Quality",
    desc: "Premium packing for fragile or high-value items may slightly increase charges.",
  },
  {
    title: "Type of Goods",
    desc: "Sensitive or bulky items may require special storage conditions.",
  },
  {
    title: "Location of Storage Facility",
    desc: "Storage in high-demand or metropolitan areas can be more expensive.",
  },
];

const KEYWORDS = [
  "gati packers and movers",
  "home storage services",
  "household storage services",
  "storage services for home",
  "temporary home storage",
  "home storage solutions",
  "household goods storage",
  "short-term storage for home",
  "home storage near me",
  "storage and moving services",
  "secure home storage",
  "long-term home storage",
  "home storage cost",
  "climate controlled home storage",
  "home storage and warehousing",
  "how to store household items",
];

const META = {
  title: "Home Storage Services in India | Gati Shifting Packers",
  description:
    "Trusted home & household storage solutions across India. Safe, flexible, affordable. Short-term & long-term storage with real-time tracking.",
  keywords: KEYWORDS.join(", "),
};

// ─── Component ───────────────────────────────────────────────

const HomeStorage = () => {
  return (
    <>
    <div className="home-storage-page">
      <Helmet>
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <meta name="keywords" content={META.keywords} />
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://gatishiftingpackers.com/home-storage" />
      </Helmet>

      {/* ── Hero ── */}
      <section className="hs-hero" aria-label="Home Storage Hero">
        <span className="hs-hero__badge">Trusted Across India</span>
        <h1 className="hs-hero__title">
          Reliable Home Storage Services in India
        </h1>
        <p className="hs-hero__subtitle">
          Safe, flexible &amp; affordable storage for every household need —
          from short-term moves to long-term solutions.
        </p>
      </section>

      {/* ── Intro ── */}
      <section className="hs-section" aria-labelledby="intro-heading">
        <div className="hs-container">
          <div className="hs-intro">
            <div className="hs-intro__content">
              <p className="hs-section__eyebrow">About Us</p>
              <h2 id="intro-heading" className="hs-section__title">
                Gati Shifting Packers — Your Storage Partner
              </h2>
              <p className="hs-section__lead">
                We provide safe, flexible, and affordable storage options for
                individuals and families who need extra space during moves,
                renovations, or for long-term household storage. Our
                strategically located facilities ensure your belongings are
                handled with precision and care.
              </p>
              <p className="hs-section__lead" style={{ marginTop: "12px" }}>
                From furniture and appliances to personal keepsakes, we manage
                everything end-to-end with insurance coverage and real-time
                tracking for complete peace of mind.
              </p>
              <div className="hs-intro__stats">
                {[
                  { val: siteConfig.stats.totalYearOfExperience, label: "Years of Experience" },
                  { val: siteConfig.stats.totalHappyCustomers, label: "Happy Customers" },
                  { val: "100%", label: "Insured Storage" },
                  { val: "24/7", label: "Live Tracking" },
                ].map(({ val, label }) => (
                  <div key={label} className="hs-intro__stat-card">
                    <strong>{val}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hs-intro__visual" aria-hidden="true">
              <div className="hs-intro__img-wrap">
                {/* Replace src with real image */}
                <img
                  src="/images/home-storage-warehouse.webp"
                  alt="Secure home storage warehouse"
                  loading="lazy"
                  width="600"
                  height="450"
                />
              </div>
              <div className="hs-intro__badge-float">
                <span className="icon">🏆</span>
                <div>
                  <strong style={{ display: "block", fontSize: "0.9rem" }}>Award-Winning</strong>
                  <span style={{ fontSize: "0.78rem", color: "#6b7280" }}>Best Packers & Movers 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hs-divider" />

      {/* ── 6-Step Process ── */}
      <section className="hs-section hs-section--alt" aria-labelledby="steps-heading">
        <div className="hs-container">
          <div className="hs-section__header">
            <p className="hs-section__eyebrow">How It Works</p>
            <h2 id="steps-heading" className="hs-section__title">
              Simple 6-Step Home Storage Process
            </h2>
            <p className="hs-section__lead">
              From your first call to hassle-free retrieval — we handle every
              step professionally.
            </p>
          </div>
          <div className="hs-steps__grid">
            {STEPS.map((step, idx) => (
              <article
                key={idx}
                className={`hs-steps__card hs-animate hs-animate--delay-${idx + 1}`}
              >
                <span className="hs-steps__num" aria-hidden="true">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="hs-steps__icon" role="img" aria-label={step.title}>
                  {step.icon}
                </span>
                <h3 className="hs-steps__title">
                  Step {idx + 1}: {step.title}
                </h3>
                <ul className="hs-steps__list">
                  {step.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
                {step.hasCta && (
                  <div className="hs-steps__cta-wrap">
                    <ReviewDialog />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Items We Store ── */}
      <section className="hs-section" aria-labelledby="items-heading">
        <div className="hs-container">
          <div className="hs-section__header">
            <p className="hs-section__eyebrow">What We Store</p>
            <h2 id="items-heading" className="hs-section__title">
              Household Items We Store
            </h2>
            <p className="hs-section__lead">
              Comprehensive storage solutions for a wide range of personal
              belongings — handled with care every time.
            </p>
          </div>
          <div className="hs-items__grid">
            {STORED_ITEMS.map(({ icon, label, sub }) => (
              <div key={label} className="hs-items__chip">
                <span className="hs-items__chip-icon" role="img" aria-label={label}>
                  {icon}
                </span>
                <div>
                  <div className="hs-items__chip-label">{label}</div>
                  <div className="hs-items__chip-sub">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Banner ── */}
      <section className="hs-section hs-section--alt" aria-label="Pricing information">
        <div className="hs-container">
          <div className="hs-pricing-banner">
            <div>
              <h2 className="hs-pricing-banner__title">
                Affordable Home Storage Charges in India
              </h2>
              <p className="hs-pricing-banner__text">
                Cost-effective pricing with complete transparency — no hidden
                charges. Whether short-term during relocation or long-term for
                household items, Gati Shifting Packers offers safe, convenient
                storage at the best rates.
              </p>
            </div>
            <a href="#get-in-touch" className="hs-btn hs-btn--outline-white">
              Get Free Quote →
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="hs-section" aria-labelledby="why-heading">
        <div className="hs-container">
          <div className="hs-section__header">
            <p className="hs-section__eyebrow">Why Choose Us</p>
            <h2 id="why-heading" className="hs-section__title">
              Why Choose Professional Home Storage Services?
            </h2>
          </div>
          <div className="hs-why__list">
            {WHY_CHOOSE.map(({ icon, title, desc }) => (
              <div key={title} className="hs-why__item">
                <span className="hs-why__item-icon" role="img" aria-label={title}>
                  {icon}
                </span>
                <div className="hs-why__item-title">{title}</div>
                <div className="hs-why__item-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cost Factors ── */}
      <section className="hs-section hs-section--alt" aria-labelledby="factors-heading">
        <div className="hs-container">
          <div className="hs-section__header">
            <p className="hs-section__eyebrow">Pricing Factors</p>
            <h2 id="factors-heading" className="hs-section__title">
              Factors Affecting Home Storage Costs in India
            </h2>
          </div>
          <ol className="hs-factors__list" aria-label="Cost factors list">
            {COST_FACTORS.map(({ title, desc }) => (
              <li key={title} className="hs-factors__item">
                <div className="hs-factors__item-title">{title}</div>
                <div className="hs-factors__item-desc">{desc}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      
    </div>
    {/* ── External Components ── */}
      <ReviewVideo />
      <GetInTouch />
      <AwardCertification />
      <TrustUsSection />
      <BrandList />
      <FAQList />

      </>
  );
};

export default HomeStorage;