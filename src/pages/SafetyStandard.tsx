import { lazy, Suspense, memo } from "react";
import { Helmet } from "react-helmet-async";
import safetystandardImg from "../assets/SafetyStandard/safetystandardimg.jpg";
import "./SafetyStandard.scss";
import { siteConfig } from "../config/Company";

// ─── Lazy-loaded sections ─────────────────────────────────────────────────────
const ReviewVideo        = lazy(() => import("../components/ReviewVideos"));
const GetInTouch         = lazy(() => import("../components/GetInTouch"));
const AwardCertification = lazy(() => import("../components/AwardCertification"));
const TrustUsSection     = lazy(() => import("../components/TrustUsSection"));
const BrandList          = lazy(() => import("../components/BrandsList"));
const FAQList            = lazy(() => import("../components/FAQList"));

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────
const IconUsers   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>;
const IconPackage = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
const IconGPS     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>;
const IconTag     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>;
const IconPhone   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>;
const IconAlert   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
const IconCheck   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg>;
const IconShield  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;

// ─── Types ────────────────────────────────────────────────────────────────────

interface Standard {
  number: string;
  icon: React.ReactElement;
  title: string;
  desc: string;
}

interface Stat {
  num: string;
  label: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const STANDARDS: Standard[] = [
  {
    number: "01",
    icon: <IconUsers />,
    title: "Expertly Trained Staff",
    desc: "All staff undergo extensive training in safe packing, lifting, and driving. Their hands-on expertise ensures your items are handled with maximum care throughout.",
  },
  {
    number: "02",
    icon: <IconPackage />,
    title: "Premium Packing Materials",
    desc: "We use bubble wrap, sturdy cartons, foam sheets, and heavy-duty tapes to protect delicate and valuable items against long-distance transit and handling.",
  },
  {
    number: "03",
    icon: <IconGPS />,
    title: "GPS-Enabled Vehicles",
    desc: "Our well-maintained GPS fleet is operated by experienced, verified drivers ensuring timely delivery, minimal handling, and complete protection against delays.",
  },
  {
    number: "04",
    icon: <IconTag />,
    title: "Sealed & Labeled Shipments",
    desc: "Every box is sealed, labeled, and documented for easy identification, preventing tampering or loss. Total transparency at every step of transportation.",
  },
  {
    number: "05",
    icon: <IconPhone />,
    title: "Real-Time Tracking",
    desc: "Live shipment tracking and timely updates keep you informed about the current status and location of your goods throughout the entire journey.",
  },
  {
    number: "06",
    icon: <IconAlert />,
    title: "Emergency Preparedness",
    desc: "Our team handles fire, vehicle breakdowns, or accidents efficiently using pre-defined safety protocols to protect your assets under all circumstances.",
  },
];

const COMMITMENTS: string[] = [
  "Zero compromise on packing quality",
  "Verified and background-checked staff",
  "Transit insurance available on request",
  "24/7 customer support during transit",
  "Damage-free delivery guarantee",
];

const STATS: Stat[] = [
  { num: siteConfig.stats.totalGPSVehichle, label: "GPS Vehicles"     },
  { num: siteConfig.stats.totalYearOfExperience,   label: "Years Experience" },
  { num: siteConfig.stats.safeDelivery,   label: "Safe Deliveries"  },
];

// ─── StandardCard ─────────────────────────────────────────────────────────────

const StandardCard = memo(({ standard, index }: { standard: Standard; index: number }) => (
  <article
    className="ssp-card"
    style={{ animationDelay: `${index * 0.08}s` }}
  >
    <div className="ssp-card__top">
      <span className="ssp-card__icon" aria-hidden="true">{standard.icon}</span>
      <span className="ssp-card__num">{standard.number}</span>
    </div>
    <h3 className="ssp-card__title">{standard.title}</h3>
    <p className="ssp-card__desc">{standard.desc}</p>
  </article>
));
StandardCard.displayName = "StandardCard";

// ─── Main Component ───────────────────────────────────────────────────────────

const SafetyStandard = () => (
  <>
    <Helmet>
      <title>Safety Standards | Gati Shifting Packers</title>
      <meta name="description" content="Experience top-tier Safety Standards with Gati Shifting Packers. We ensure secure packing, handling, and transportation with trusted safety protocols and professional care." />
      <meta name="keywords" content="Gati Shifting Packers safety standards, safe relocation services, packing and moving safety, professional movers, goods protection, secure transportation" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type"        content="website" />
      <meta property="og:title"       content="Safety Standards | Gati Shifting Packers" />
      <meta property="og:description" content="Gati Shifting Packers follows strict Safety Standards to ensure secure packing, loading, and delivery of your belongings." />
      <meta property="og:url"         content="https://gatishiftingpackers.com/safety-standard" />
      <meta property="og:site_name"   content="Gati Shifting Packers" />
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content="Safety Standards | Gati Shifting Packers" />
      <meta name="twitter:description" content="Ensure safe and damage-free relocation with Gati Shifting Packers' professional Safety Standards." />
      <link rel="canonical" href="https://gatishiftingpackers.com/safety-standard" />
    </Helmet>

    <div id="safety-standard-page">

      {/* ── Hero Banner ── */}
      <div className="ssp-hero">
        <div className="ssp-hero__bg" aria-hidden="true" />
        <div className="ssp-hero__inner">
          <span className="ssp-eyebrow">Safety First</span>
          <h1 className="ssp-hero__title">Our Safety Standards</h1>
          <p className="ssp-hero__sub">
            At Gati Shifting Packers, every step of our process follows strict safety
            protocols — from packing to final delivery — to ensure a smooth,
            damage-free relocation experience.
          </p>

          {/* Stats */}
          <div className="ssp-stats" role="list">
            {STATS.map(({ num, label }) => (
              <div key={label} className="ssp-stats__item" role="listitem">
                <span className="ssp-stats__num">{num}</span>
                <span className="ssp-stats__label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Standards Grid ── */}
      <section className="ssp-section" aria-labelledby="ssp-standards-heading">
        <div className="ssp-section__header">
          <span className="ssp-section__tag">Core Standards</span>
          <h2 id="ssp-standards-heading">6 Pillars of Safe Relocation</h2>
          <p>Every move we handle is backed by these six non-negotiable safety standards.</p>
        </div>
        <div className="ssp-grid">
          {STANDARDS.map((s, i) => (
            <StandardCard key={s.number} standard={s} index={i} />
          ))}
        </div>
      </section>

      {/* ── Image + Commitment ── */}
      <section className="ssp-commitment-section" aria-label="Our commitment">
        <div className="ssp-commitment-inner">

          <div className="ssp-img-wrap">
            <img
              src={safetystandardImg}
              alt="Gati Shifting Packers safety team at work"
              title="Safety standards in action"
              loading="lazy"
              width={600}
              height={400}
              className="ssp-img"
            />
            {/* Badge overlay */}
            <div className="ssp-img-badge" aria-hidden="true">
              <span className="ssp-img-badge__icon"><IconShield /></span>
              <span>ISO Certified</span>
            </div>
          </div>

          <div className="ssp-commitment">
            <span className="ssp-section__tag">Promise</span>
            <h2 className="ssp-commitment__title">Our Commitment to You</h2>
            <p className="ssp-commitment__sub">
              We don't just move goods — we move trust. Here's what you can always count on
              with every Gati Shifting Packers relocation.
            </p>
            <ul className="ssp-commitment__list">
              {COMMITMENTS.map((item) => (
                <li key={item} className="ssp-commitment__item">
                  <span className="ssp-commitment__check" aria-hidden="true">
                    <IconCheck />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

    </div>

    <Suspense fallback={null}>
      <ReviewVideo />
      <GetInTouch />
      <AwardCertification />
      <TrustUsSection />
      <BrandList />
      <FAQList />
    </Suspense>
  </>
);

export default SafetyStandard;