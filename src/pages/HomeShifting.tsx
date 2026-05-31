import { memo, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReviewDialog from "../components/ReviewDialog";
import HouseShiftingPriceImg from "../assets/HomeShifting/houseShiftingPrices.jpg";
import "./HomeShifting.scss";
import { siteConfig } from "../config/Company";

// ── Lazy-load heavy below-fold components ─────────────────────────────────────
const ReviewVideo        = lazy(() => import("../components/ReviewVideos"));
const GetInTouch         = lazy(() => import("../components/GetInTouch"));
const AwardCertification = lazy(() => import("../components/AwardCertification"));
const TrustUsSection     = lazy(() => import("../components/TrustUsSection"));
const BrandList          = lazy(() => import("../components/BrandsList"));
const FAQList            = lazy(() => import("../components/FAQList"));

// ── Static data ────────────────────────────────────────────────────────────────


const TRUST_STATS = [
  { value: siteConfig.stats.totalYearOfExperience,    label: "Years of Trust",   icon: "🏆" },
  { value: siteConfig.stats.totalHappyCustomers,   label: "Moves Completed",  icon: "📦" },
  { value: siteConfig.stats.totalCitiesCovered,   label: "Cities Covered",   icon: "🌏" },
  { value: siteConfig.stats.customerRating+" ★",   label: "Average Rating",   icon: "⭐" },
] as const;

const BOOKING_STEPS = [
  {
    step: "01",
    emoji: "📋",
    title: "Share Details & Get a Quote",
    points: [
      "Provide moving requirements — items, location, and distance.",
      "Get a fair, customised quote from our verified professionals.",
    ],
  },
  {
    step: "02",
    emoji: "📅",
    title: "Confirm Booking",
    points: [
      "Choose your preferred pickup date and time.",
      "Secure your booking with a small advance (adjusted later).",
    ],
  },
  {
    step: "03",
    emoji: "🔧",
    title: "Safe Packing & Pickup",
    points: [
      "Our trained team arrives with top-quality packing materials.",
      "Dismantling, labelling, and secure loading under expert supervision.",
    ],
  },
  {
    step: "04",
    emoji: "📄",
    title: "Transparent Invoice",
    points: [
      "Receive a detailed invoice based on your provided list.",
      "Pay the remaining amount after deducting your advance.",
    ],
  },
  {
    step: "05",
    emoji: "🚛",
    title: "Secure Transport",
    points: [
      "Your goods are dispatched safely to the destination.",
      "Track your shipment with live updates until delivery.",
    ],
  },
  {
    step: "06",
    emoji: "🏠",
    title: "Delivery & Feedback",
    points: ["After delivery and reinstallation, share your valuable feedback."],
    hasDialog: true,
  },
] ;

const HOUSEHOLD_ITEMS = [
  { icon: "🛋️", label: "Furniture",           desc: "Sofas, tables, beds, wardrobes, chairs" },
  { icon: "🧊", label: "Home Appliances",      desc: "Refrigerators, washing machines, ACs, microwaves" },
  { icon: "🛏️", label: "Bedding & Clothing",   desc: "Mattresses, quilts, personal wardrobe essentials" },
  { icon: "💻", label: "Electronics",          desc: "TVs, computers, sound systems, gadgets" },
  { icon: "🍽️", label: "Kitchenware & Décor",  desc: "Glassware, crockery, wall art, fragile items" },
  { icon: "📦", label: "Miscellaneous",        desc: "Books, toys, plants, small household items" },
] as const;

const WHY_PROFESSIONAL = [
  { icon: "📦", title: "Safe & Secure Packing",   desc: "Expert packers use high-quality materials to prevent any damage." },
  { icon: "⏱️", title: "Time-Efficient Process",  desc: "Quick and organised shifting saves you time and significant effort." },
  { icon: "🤝", title: "Professional Handling",   desc: "Trained movers handle fragile and heavy items with care." },
  { icon: "😌", title: "Stress-Free Relocation",  desc: "We manage everything — packing, transport, and unpacking." },
  { icon: "🛡️", title: "Insurance Protection",    desc: "Comprehensive insurance coverage for all your valuables." },
] as const;

const COST_FACTORS = [
  { no: "01", title: "Distance",        desc: "The farther the move, the higher the cost — more fuel, time, and resources." },
  { no: "02", title: "Number of Items", desc: "More or heavier items require bigger vehicles and additional labour." },
  { no: "03", title: "Packing Quality", desc: "Premium materials like bubble wrap keep items safe but add marginal cost." },
  { no: "04", title: "Type of Vehicle", desc: "Bigger or specialised vehicles cost more than compact ones." },
  { no: "05", title: "Time of Moving",  desc: "Weekends and month-ends cost more — choose weekdays or off-season to save." },
] as const;

// ── Memoised sub-components ───────────────────────────────────────────────────

const StatBadge = memo(({ stat }: { stat: (typeof TRUST_STATS)[number] }) => (
  <div className="hs-stat-badge">
    <span className="hs-stat-badge__value">{stat.value}</span>
    <span className="hs-stat-badge__label">{stat.label}</span>
  </div>
));
StatBadge.displayName = "StatBadge";

const StepCard = memo(({ step, index }: { step: (typeof BOOKING_STEPS)[number]; index: number }) => (
  <div className="hs-step-card" style={{ "--step-delay": `${index * 0.08}s` } as React.CSSProperties}>
    <div className="hs-step-card__header">
      <span className="hs-step-card__num">{step.step}</span>
      <span className="hs-step-card__emoji" aria-hidden="true">{step.emoji}</span>
    </div>
    <h3 className="hs-step-card__title">{step.title}</h3>
    <ul className="hs-step-card__list">
      {step.points.map((pt) => <li key={pt}>{pt}</li>)}
    </ul>
    {step.hasDialog && (
      <div className="hs-step-card__dialog">
        <ReviewDialog />
      </div>
    )}
  </div>
));
StepCard.displayName = "StepCard";

const ItemCard = memo(({ item }: { item: (typeof HOUSEHOLD_ITEMS)[number] }) => (
  <div className="hs-item-card" role="listitem">
    <div className="hs-item-card__icon-wrap" aria-hidden="true">
      <span className="hs-item-card__icon">{item.icon}</span>
    </div>
    <h3 className="hs-item-card__label">{item.label}</h3>
    <p className="hs-item-card__desc">{item.desc}</p>
  </div>
));
ItemCard.displayName = "ItemCard";

const WhyCard = memo(({ item, index }: { item: (typeof WHY_PROFESSIONAL)[number]; index: number }) => (
  <div className="hs-why-card" role="listitem" style={{ "--why-delay": `${index * 0.07}s` } as React.CSSProperties}>
    <div className="hs-why-card__icon-wrap" aria-hidden="true">
      <span className="hs-why-card__icon">{item.icon}</span>
    </div>
    <div className="hs-why-card__body">
      <h3 className="hs-why-card__title">{item.title}</h3>
      <p className="hs-why-card__desc">{item.desc}</p>
    </div>
    <div className="hs-why-card__arrow" aria-hidden="true">→</div>
  </div>
));
WhyCard.displayName = "WhyCard";

const FactorRow = memo(({ factor }: { factor: (typeof COST_FACTORS)[number] }) => (
  <div className="hs-factor-row" role="listitem">
    <span className="hs-factor-row__num">{factor.no}</span>
    <div className="hs-factor-row__body">
      <h3 className="hs-factor-row__title">{factor.title}</h3>
      <p className="hs-factor-row__desc">{factor.desc}</p>
    </div>
    <div className="hs-factor-row__bar" aria-hidden="true" />
  </div>
));
FactorRow.displayName = "FactorRow";

// ── Page component ────────────────────────────────────────────────────────────
const HomeShifting = () => (
  <>
    {/* ── SEO ─────────────────────────────────────────────────────────── */}
    <Helmet>
      <title>Home Shifting Services | Gati Shifting Packers</title>
      <meta name="description" content="Professional Home Shifting Services by Gati Shifting Packers. Safe and reliable packing, moving, and delivery of your household items across India." />
      <meta name="keywords" content="Gati Shifting Packers home shifting, Gati House Shifting Packers & Movers, household movers, residential relocation, packing and moving services, home shifting India, home shifting services in delhi, home shifting services in noida, home shifting services in ghaziabad, home shifting services in gurgaon, home shifting services, packers and movers, house relocation, home movers India, domestic shifting, local shifting services" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Abhishek" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Home Shifting Services | Gati Shifting Packers" />
      <meta property="og:description" content="Experience safe and hassle-free home shifting with Gati Shifting Packers. Expert packing and moving services for all your residential needs." />
      <meta property="og:url" content="https://gatishiftingpackers.com/home-shifting" />
      <meta property="og:site_name" content="Gati Shifting Packers" />
      <meta property="og:image" content="https://gatishiftingpackers.com/metaImg.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Home Shifting Services | Gati Shifting Packers" />
      <meta name="twitter:description" content="Reliable home shifting solutions by Gati Shifting Packers. Ensure safe and timely relocation of your household goods across India." />
      <meta httpEquiv="Content-Language" content="en" />
      <link rel="canonical" href="https://gatishiftingpackers.com/home-shifting" />
    </Helmet>

    {/* ── Hero ─────────────────────────────────────────────────────────── */}
    <section className="hs-hero" role="banner">
      {/* Animated background grid */}
      <div className="hs-hero__grid" aria-hidden="true" />
      <div className="hs-hero__glow hs-hero__glow--1" aria-hidden="true" />
      <div className="hs-hero__glow hs-hero__glow--2" aria-hidden="true" />

      <div className="hs-hero__inner">
        {/* Left: text content */}
        <div className="hs-hero__content">
          <div className="hs-hero__pill" aria-label="Service area">
            <span className="hs-hero__pill-dot" aria-hidden="true" />
            Pan India · Door-to-Door
          </div>

          <h1 className="hs-hero__title">
            <span className="hs-hero__title-line">Home</span>
            <span className="hs-hero__title-accent">Shifting</span>
            <span className="hs-hero__title-line">Services</span>
          </h1>

          <p className="hs-hero__sub">
            Trusted by thousands of families — safe, transparent, and affordable
            home relocation anywhere across India.
          </p>

          <div className="hs-cta-group">
            <Link className="hs-btn hs-btn--primary" to="/contact-us">
              Get Free Quote
              <span className="hs-btn__arrow" aria-hidden="true">→</span>
            </Link>
            <a className="hs-btn hs-btn--ghost" href={`tel:${siteConfig.phone}`}>
              📞 {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* Right: stat cards */}
        <div className="hs-hero__stats" aria-label="Trust statistics">
          {TRUST_STATS.map((stat) => (
            <StatBadge key={stat.label} stat={stat} />
          ))}
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="hs-hero__ticker" aria-hidden="true">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="hs-hero__ticker-track">
            {["Verified Professionals", "GPS Tracked Vehicles", "Damage-Free Guarantee",
              "18+ Years of Experience", "Insurance Covered", "200+ Cities Served"].map((t) => (
              <span key={t} className="hs-hero__ticker-item">
                <span className="hs-hero__ticker-dot" />
                {t}
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>

    {/* ── Intro ────────────────────────────────────────────────────────── */}
    <section className="hs-intro" aria-labelledby="hs-intro-heading">
      <div className="hs-intro__container">
        <div className="hs-intro__label-wrap">
          <span className="hs-label">About Our Service</span>
        </div>
        <div className="hs-intro__body">
          <h2 id="hs-intro-heading" className="hs-section-heading">
            Gati Shifting Packers –{" "}
            <em className="hs-accent">Affordable House Shifting</em> in India
          </h2>
          <div className="hs-intro__text">
            <p>
              Gati Shifting Packers is a trusted name in house shifting and relocation
              services across India, offering reliable, fast, and cost-effective moving
              solutions. Whether you're planning a local move or a domestic relocation,
              we ensure a seamless experience from start to finish.
            </p>
            <p>
              With a presence in major cities across India, we have built a strong
              reputation for secure and transparent home shifting. From furniture and
              appliances to fragile items, every item is handled with utmost care.
              We also offer vehicle tracking and insurance support for added peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ── 6-Step Process ───────────────────────────────────────────────── */}
    <section className="hs-steps" aria-labelledby="hs-steps-heading">
      <div className="hs-steps__container">
        <span className="hs-label">How It Works</span>
        <h2 id="hs-steps-heading" className="hs-section-heading">
          Simple <em className="hs-accent">6-Step</em> Booking Process
        </h2>
        <p className="hs-section-sub">
          From first enquiry to final delivery — we handle it all.
        </p>
        <div className="hs-steps__grid">
          {BOOKING_STEPS.map((step, i) => (
            <StepCard key={step.step} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* ── Household Items ──────────────────────────────────────────────── */}
    <section className="hs-items" aria-labelledby="hs-items-heading">
      <div className="hs-items__container">
        <span className="hs-label">What We Move</span>
        <h2 id="hs-items-heading" className="hs-section-heading">
          Household Items We Shift
        </h2>
        <p className="hs-section-sub">
          Complete home relocation solutions for all types of household goods.
        </p>
        <div className="hs-items__grid" role="list">
          {HOUSEHOLD_ITEMS.map((item) => (
            <ItemCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>

    {/* ── Pricing Image ────────────────────────────────────────────────── */}
    <section className="hs-pricing" aria-labelledby="hs-pricing-heading">
      <div className="hs-pricing__container">
        <span className="hs-label">Pricing</span>
        <h2 id="hs-pricing-heading" className="hs-section-heading">
          Affordable House Shifting Charges in India
        </h2>
        <p className="hs-section-sub">
          Transparent pricing — quality relocation at low cost, no hidden charges.
        </p>
        <div className="hs-pricing__img-wrap">
          <img
            src={HouseShiftingPriceImg}
            alt="House shifting price comparison chart by Gati Shifting Packers"
            className="hs-pricing__img"
            loading="lazy"
            decoding="async"
            width={960}
            height={540}
          />
          <div className="hs-pricing__badge">
            <span>No Hidden Charges</span>
          </div>
        </div>
      </div>
    </section>

    {/* ── Why Professional ─────────────────────────────────────────────── */}
    <section className="hs-why" aria-labelledby="hs-why-heading">
      <div className="hs-why__container">
        <div className="hs-why__left">
          <span className="hs-label hs-label--light">Why Us?</span>
          <h2 id="hs-why-heading" className="hs-section-heading hs-section-heading--light">
            Why Choose <br /><em className="hs-accent">Professional</em><br /> House Shifting?
          </h2>
          <p className="hs-section-sub hs-section-sub--light">
            Don't risk your valuables with untrusted movers. Here's why professionals make all the difference.
          </p>
        </div>
        <div className="hs-why__right" role="list">
          {WHY_PROFESSIONAL.map((item, i) => (
            <WhyCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* ── Cost Factors ─────────────────────────────────────────────────── */}
    <section className="hs-factors" aria-labelledby="hs-factors-heading">
      <div className="hs-factors__container">
        <span className="hs-label">Pricing Guide</span>
        <h2 id="hs-factors-heading" className="hs-section-heading">
          Factors Affecting the{" "}
          <em className="hs-accent">Cost of House Shifting</em>
        </h2>
        <p className="hs-section-sub">
          Here are the main factors that determine your shifting price.
        </p>
        <div className="hs-factors__list" role="list">
          {COST_FACTORS.map((factor) => (
            <FactorRow key={factor.no} factor={factor} />
          ))}
        </div>
      </div>
    </section>

    {/* ── Below-fold (lazy loaded) ─────────────────────────────────────── */}
    <Suspense fallback={<div className="hs-loading" aria-hidden="true" />}>
      <ReviewVideo />
      <GetInTouch />
      <AwardCertification />
      <TrustUsSection />
      <BrandList />
      <FAQList />
    </Suspense>

  </>
);

export default memo(HomeShifting);