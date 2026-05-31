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

import carPricingImg from "../assets/CarBikeTransport/carPricingImg.jpg";
import bikePricingImg from "../assets/CarBikeTransport/bikePricingImg.jpg";

import "./CarBikeTransport.scss";
import { siteConfig } from "../config/Company";
/* ─── Static data ────────────────────────────────────────────────── */

const KEYWORDS = [
  "gati packers and movers",
  "car transport services",
  "vehicle transport services",
  "auto transport companies",
  "car shipping companies",
  "car transport company",
  "car shipping services",
  "motorcycle transport services",
  "bike transport services",
  "door to door car transport",
  "enclosed auto transport",
  "vehicle relocation services",
  "car transport near me",
  "how to transport a car",
  "car transport cost India",
] as const;

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
      "Provide vehicle type, location, and distance.",
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
      "Our team arrives with top-quality protective materials.",
      "Secure loading and strapping done under expert supervision.",
    ],
  },
  {
    step: "04", emoji: "📄",
    title: "Transparent Invoice",
    points: [
      "Receive a detailed invoice based on your requirements.",
      "Pay the remaining amount after deducting your advance.",
    ],
  },
  {
    step: "05", emoji: "🚛",
    title: "Secure Transport",
    points: [
      "Vehicle dispatched safely on a dedicated carrier.",
      "Track your shipment with live updates until delivery.",
    ],
  },
  {
    step: "06", emoji: "🏁",
    title: "Delivery & Feedback",
    points: [
      "Vehicle delivered safely at your doorstep with full inspection.",
      "Share your feedback to help us serve you better.",
    ],
    hasDialog: true,
  },
] ;

const VEHICLE_TYPES = [
  { icon: "🚗", label: "Cars",                desc: "Sedans, SUVs, hatchbacks, luxury cars, and electric vehicles" },
  { icon: "🏍️", label: "Bikes & Motorcycles", desc: "Scooters, motorcycles, sports bikes, and electric bikes" },
  { icon: "🚐", label: "Commercial Vehicles",  desc: "Small trucks, vans, and delivery vehicles" },
] as const;

const WHY_PROFESSIONAL = [
  { icon: "🛡️", title: "Safe & Secure Handling",  desc: "Trained staff ensures your vehicle is protected during loading, transport, and unloading." },
  { icon: "⏱️", title: "Time-Saving",              desc: "Professional transport saves time and effort compared to driving yourself." },
  { icon: "📋", title: "Insurance Coverage",       desc: "Full insurance protection for your vehicles during transit." },
  { icon: "📍", title: "Real-Time Tracking",       desc: "Monitor your vehicle's location throughout the entire journey." },
  { icon: "😌", title: "Stress-Free Transport",    desc: "From pickup to delivery, everything is managed professionally." },
] as const;

const COST_FACTORS = [
  { no: "01", title: "Distance",        desc: "The farther the move, the higher the cost — more fuel, time, and resources." },
  { no: "02", title: "Vehicle Type",    desc: "Larger or heavier vehicles require specialised carriers, increasing the cost." },
  { no: "03", title: "Packing Quality", desc: "Premium protective wrapping and covers keep your vehicle safe but add marginal cost." },
  { no: "04", title: "Carrier Type",    desc: "Open or enclosed carriers — enclosed transport costs more but offers better protection." },
  { no: "05", title: "Time of Moving",  desc: "Weekends and month-ends cost more — choose weekdays or off-season to save." },
] as const;

/* ─── Memoised sub-components ────────────────────────────────────── */

const StatBadge = memo(({ stat }: { stat: (typeof TRUST_STATS)[number] }) => (
  <div className="cbt-stat-badge">
    <span className="cbt-stat-badge__value">{stat.value}</span>
    <span className="cbt-stat-badge__label">{stat.label}</span>
  </div>
));
StatBadge.displayName = "StatBadge";

const StepCard = memo(({ step, index }: { step: (typeof BOOKING_STEPS)[number]; index: number }) => (
  <div className="cbt-step-card" style={{ "--step-delay": `${index * 0.08}s` } as React.CSSProperties}>
    <div className="cbt-step-card__header">
      <span className="cbt-step-card__num">{step.step}</span>
      <span className="cbt-step-card__emoji" aria-hidden="true">{step.emoji}</span>
    </div>
    <h3 className="cbt-step-card__title">{step.title}</h3>
    <ul className="cbt-step-card__list">
      {step.points.map((pt) => <li key={pt}>{pt}</li>)}
    </ul>
    {step.hasDialog && (
      <div className="cbt-step-card__dialog"><ReviewDialog /></div>
    )}
  </div>
));
StepCard.displayName = "StepCard";

const VehicleCard = memo(({ item }: { item: (typeof VEHICLE_TYPES)[number] }) => (
  <div className="cbt-vehicle-card" role="listitem">
    <div className="cbt-vehicle-card__icon-wrap" aria-hidden="true">
      <span className="cbt-vehicle-card__icon">{item.icon}</span>
    </div>
    <h3 className="cbt-vehicle-card__label">{item.label}</h3>
    <p className="cbt-vehicle-card__desc">{item.desc}</p>
  </div>
));
VehicleCard.displayName = "VehicleCard";

const WhyCard = memo(({ item, index }: { item: (typeof WHY_PROFESSIONAL)[number]; index: number }) => (
  <div className="cbt-why-card" role="listitem" style={{ "--why-delay": `${index * 0.07}s` } as React.CSSProperties}>
    <div className="cbt-why-card__icon-wrap" aria-hidden="true">
      <span className="cbt-why-card__icon">{item.icon}</span>
    </div>
    <div className="cbt-why-card__body">
      <h3 className="cbt-why-card__title">{item.title}</h3>
      <p className="cbt-why-card__desc">{item.desc}</p>
    </div>
    <div className="cbt-why-card__arrow" aria-hidden="true">→</div>
  </div>
));
WhyCard.displayName = "WhyCard";

const FactorRow = memo(({ factor }: { factor: (typeof COST_FACTORS)[number] }) => (
  <div className="cbt-factor-row" role="listitem">
    <span className="cbt-factor-row__num">{factor.no}</span>
    <div className="cbt-factor-row__body">
      <h3 className="cbt-factor-row__title">{factor.title}</h3>
      <p className="cbt-factor-row__desc">{factor.desc}</p>
    </div>
    <div className="cbt-factor-row__bar" aria-hidden="true" />
  </div>
));
FactorRow.displayName = "FactorRow";

/* ─── Page Component ─────────────────────────────────────────────── */

const CarBikeTransport = () => (
  <>
    {/* ── SEO ── */}
    <Helmet>
      <title>Car &amp; Bike Transport Services | Gati Shifting Packers</title>
      <meta name="description" content="Get safe and affordable Car & Bike Transport Services across India with Gati Shifting Packers. We ensure secure vehicle relocation with expert handling and timely delivery." />
      <meta name="keywords" content="Gati Shifting Packers car transport, bike transport, vehicle relocation, car moving services, bike shifting India, car carrier services, car and bike shifting, vehicle transportation, car transport service, bike transport service, car movers and packers, bike movers and packers, vehicle relocation services" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Abhishek" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Car & Bike Transport Services | Gati Shifting Packers" />
      <meta property="og:description" content="Reliable and professional Car & Bike Transport Services by Gati Shifting Packers. Move your vehicles safely anywhere in India." />
      <meta property="og:url" content="https://gatishiftingpackers.com/car-bike-transport" />
      <meta property="og:site_name" content="Gati Shifting Packers" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Car & Bike Transport Services | Gati Shifting Packers" />
      <meta name="twitter:description" content="Trust Gati Shifting Packers for secure and affordable Car & Bike Transport Services across India. Safe, fast, and hassle-free vehicle shifting." />
      <meta httpEquiv="Content-Language" content="en" />
      <link rel="canonical" href="https://gatishiftingpackers.com/car-bike-transport" />
    </Helmet>

    {/* ── Hero ── */}
    <section className="cbt-hero" role="banner">
      <div className="cbt-hero__bg-grid" aria-hidden="true" />
      <div className="cbt-hero__accent-bar" aria-hidden="true" />
      <div className="cbt-hero__deco" aria-hidden="true">🚗</div>

      <div className="cbt-hero__inner">
        <div className="cbt-hero__content">
          <div className="cbt-hero__pill">
            <span className="cbt-hero__pill-dot" aria-hidden="true" />
            Pan India · Door-to-Door Vehicle Transport
          </div>

          <h1 className="cbt-hero__title">
            <span className="cbt-hero__title-line">Car &amp; Bike</span>
            <span className="cbt-hero__title-accent">Transport</span>
            <span className="cbt-hero__title-line">Services</span>
          </h1>

          <p className="cbt-hero__sub">
            Zero damage. On-time delivery. Professional vehicle transport for
            cars, bikes, and commercial vehicles — anywhere across India.
          </p>

          <div className="cbt-cta-group">
            <Link className="cbt-btn cbt-btn--primary" to="/contact-us">
              Get Free Quote
              <span className="cbt-btn__arrow" aria-hidden="true">→</span>
            </Link>
            <a className="cbt-btn cbt-btn--outline" href={`tel:${siteConfig.phone}`}>
              📞 {siteConfig.phone}
            </a>
          </div>
        </div>

        <div className="cbt-hero__stats" aria-label="Trust statistics">
          {TRUST_STATS.map((stat) => (
            <StatBadge key={stat.label} stat={stat} />
          ))}
        </div>
      </div>

      <div className="cbt-hero__ticker" aria-hidden="true">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="cbt-hero__ticker-track">
            {["Verified Professionals", "GPS Tracked Vehicles", "Zero-Damage Guarantee",
              `${siteConfig.stats.totalYearOfExperience} Years of Experience`, "Insurance Covered", `${siteConfig.stats.totalCountryServed} Cities Served`].map((t) => (
              <span key={t} className="cbt-hero__ticker-item">
                <span className="cbt-hero__ticker-dot" />
                {t}
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>

    {/* ── Intro ── */}
    <section className="cbt-intro" aria-labelledby="cbt-intro-heading">
      <div className="cbt-intro__container">
        <div className="cbt-intro__label-wrap">
          <span className="cbt-label">About Our Service</span>
        </div>
        <div className="cbt-intro__body">
          <h2 id="cbt-intro-heading" className="cbt-section-heading">
            Gati Shifting Packers –{" "}
            <em className="cbt-accent">Reliable Car &amp; Bike Transport</em> in India
          </h2>
          <div className="cbt-intro__text">
            <p>
              Gati Shifting Packers is a trusted name in vehicle transportation services
              across India, offering safe, fast, and affordable solutions for moving cars
              and bikes anywhere in the country. Whether you're relocating to a new city
              or moving vehicles for personal or commercial reasons, we ensure a smooth
              and hassle-free transport experience.
            </p>
            <p>
              With a strong presence in major cities, we are known for secure handling,
              timely delivery, and transparent services. Our expert team ensures your
              vehicles are transported safely — with insurance support and real-time
              tracking for complete peace of mind.
            </p>
          </div>
          <div className="cbt-cta-group">
            <Link className="cbt-btn cbt-btn--primary" to="/contact-us">
              Get Free Quote
              <span className="cbt-btn__arrow" aria-hidden="true">→</span>
            </Link>
            <a className="cbt-btn cbt-btn--outline" href={`tel:${siteConfig.phone}`}>
              📞 {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ── 6-Step Process ── */}
    <section className="cbt-steps" aria-labelledby="cbt-steps-heading">
      <div className="cbt-steps__container">
        <span className="cbt-label">How It Works</span>
        <h2 id="cbt-steps-heading" className="cbt-section-heading">
          Simple <em className="cbt-accent">6-Step</em> Booking Process
        </h2>
        <p className="cbt-section-sub">
          From first enquiry to safe delivery at your doorstep — we handle it all.
        </p>
        <div className="cbt-steps__grid">
          {BOOKING_STEPS.map((step, i) => (
            <StepCard key={step.step} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* ── Vehicles We Transport ── */}
    <section className="cbt-vehicles" aria-labelledby="cbt-vehicles-heading">
      <div className="cbt-vehicles__container">
        <span className="cbt-label">What We Move</span>
        <h2 id="cbt-vehicles-heading" className="cbt-section-heading">
          Vehicles We Transport
        </h2>
        <p className="cbt-section-sub">
          Secure and professional transport for a wide variety of vehicles.
        </p>
        <div className="cbt-vehicles__grid" role="list">
          {VEHICLE_TYPES.map((item) => (
            <VehicleCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>

    {/* ── Pricing Images ── */}
    <section className="cbt-pricing" aria-labelledby="cbt-pricing-heading">
      <div className="cbt-pricing__container">
        <span className="cbt-label">Pricing</span>
        <h2 id="cbt-pricing-heading" className="cbt-section-heading">
          Affordable Car &amp; Bike Transport Charges
        </h2>
        <p className="cbt-section-sub">
          Transparent pricing with no hidden costs — safe delivery at the best rates.
        </p>
        <div className="cbt-pricing__grid">
          <figure className="cbt-pricing__figure">
            <div className="cbt-pricing__img-wrap">
              <img src={bikePricingImg} alt="Bike transport pricing chart" className="cbt-pricing__img" loading="lazy" decoding="async" />
              <div className="cbt-pricing__badge">Bike Rates</div>
            </div>
            <figcaption>Bike &amp; Two-Wheeler Transport Rates</figcaption>
          </figure>
          <figure className="cbt-pricing__figure">
            <div className="cbt-pricing__img-wrap">
              <img src={carPricingImg} alt="Car transport pricing chart" className="cbt-pricing__img" loading="lazy" decoding="async" />
              <div className="cbt-pricing__badge">Car Rates</div>
            </div>
            <figcaption>Car &amp; Four-Wheeler Transport Rates</figcaption>
          </figure>
        </div>
      </div>
    </section>

    {/* ── Why Professional ── */}
    <section className="cbt-why" aria-labelledby="cbt-why-heading">
      <div className="cbt-why__container">
        <div className="cbt-why__left">
          <span className="cbt-label">Why Us?</span>
          <h2 id="cbt-why-heading" className="cbt-section-heading">
            Why Choose <br /><em className="cbt-accent">Professional</em><br /> Vehicle Transport?
          </h2>
          <p className="cbt-section-sub">
            Don't risk your vehicle with unreliable transporters. Here's why professionals make the difference.
          </p>
        </div>
        <div className="cbt-why__right" role="list">
          {WHY_PROFESSIONAL.map((item, i) => (
            <WhyCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* ── Cost Factors ── */}
    <section className="cbt-factors" aria-labelledby="cbt-factors-heading">
      <div className="cbt-factors__container">
        <span className="cbt-label">Pricing Guide</span>
        <h2 id="cbt-factors-heading" className="cbt-section-heading">
          Factors Affecting the{" "}
          <em className="cbt-accent">Cost of Vehicle Transport</em>
        </h2>
        <p className="cbt-section-sub">Key factors that determine your final vehicle transport price.</p>
        <div className="cbt-factors__list" role="list">
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

    {/* ── Keywords (SEO) ── */}
    <section className="cbt-keywords" aria-label="Related search terms" aria-hidden="true">
      <div className="cbt-keywords__container">
        <h2 className="cbt-keywords__heading">People Also Search For</h2>
        <div className="cbt-keywords__cloud" role="list">
          {KEYWORDS.map((kw) => (
            <span key={kw} className="cbt-keywords__tag" role="listitem">{kw}</span>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default memo(CarBikeTransport);