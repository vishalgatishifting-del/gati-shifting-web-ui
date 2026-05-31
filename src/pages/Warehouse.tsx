import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";
import ReviewDialog from "../components/ReviewDialog";

import "./Warehouse.scss";
import { siteConfig } from "../config/Company";

// ── Static Data (outside component to avoid re-creation) ─────

const STEPS = [
  {
    icon: "📋",
    title: "Share Requirements & Get a Quote",
    points: [
      "Provide type of goods, storage duration, and location.",
      "Receive a fair, customised quote from our verified experts.",
    ],
  },
  {
    icon: "💳",
    title: "Confirm Booking with Advance Payment",
    points: [
      "Choose your preferred storage start date.",
      "Secure your slot with a small advance (adjusted later).",
    ],
  },
  {
    icon: "🚛",
    title: "Safe Transportation & Storage",
    points: [
      "Our trained team picks up items safely from your location.",
      "Items are transported and stored securely in our facility.",
    ],
  },
  {
    icon: "📄",
    title: "Transparent Invoice & Settlement",
    points: [
      "Receive a detailed invoice based on your requirements.",
      "Pay the remaining amount after deducting your advance.",
    ],
  },
  {
    icon: "📱",
    title: "Real-Time Inventory Tracking",
    points: [
      "Track stored goods with live updates until retrieval.",
      "Access control ensures complete security at all times.",
    ],
  },
  {
    icon: "🏠",
    title: "Hassle-Free Retrieval & Feedback",
    points: [
      "We deliver items safely to your doorstep when needed.",
      "Share your experience to help us serve you better.",
    ],
  },
] as const;

const GOODS = [
  {
    icon: "⚙️",
    name: "Industrial Equipment",
    desc: "Machinery, tools, and heavy-duty items handled with care.",
  },
  {
    icon: "📦",
    name: "Raw Materials & Inventory",
    desc: "Stock, supplies, and production materials organised securely.",
  },
  {
    icon: "🪑",
    name: "Furniture & Office Assets",
    desc: "Desks, chairs, cabinets, and office equipment stored safely.",
  },
  {
    icon: "🗂️",
    name: "Documents & Records",
    desc: "Confidential files, records, and archives in secure storage.",
  },
  {
    icon: "🖥️",
    name: "Electronics & Packaged Goods",
    desc: "Consumer electronics, packaged products, and décor items.",
  },
  {
    icon: "🏭",
    name: "Commercial Goods",
    desc: "Bulk merchandise and retail inventory management.",
  },
] as const;

const WHY_ITEMS = [
  {
    icon: "🔒",
    title: "Safe & Secure Storage",
    desc: "Advanced facilities and trained staff protect all goods.",
  },
  {
    icon: "📅",
    title: "Flexible Duration",
    desc: "Short-term or long-term storage based on your needs.",
  },
  {
    icon: "👷",
    title: "Professional Team",
    desc: "Skilled personnel manage storage, handling, and retrieval.",
  },
  {
    icon: "🔄",
    title: "End-to-End Service",
    desc: "Transportation, storage, and delivery handled seamlessly.",
  },
  {
    icon: "🛡️",
    title: "Insurance Support",
    desc: "Coverage available for valuable goods during storage and transit.",
  },
] as const;

const FACTORS = [
  {
    title: "Storage Duration",
    desc: "Longer periods cost more. Short-term rentals offer flexibility at lower rates.",
  },
  {
    title: "Volume & Weight of Goods",
    desc: "Heavier or bulkier items need more space and handling, increasing costs.",
  },
  {
    title: "Type of Goods",
    desc: "Fragile, perishable, or high-value items may need specialised conditions.",
  },
  {
    title: "Location of Warehouse",
    desc: "Warehouses in metro areas or high-demand zones typically have higher charges.",
  },
  {
    title: "Access & Retrieval Frequency",
    desc: "Frequent retrieval of stored items may incur additional handling charges.",
  },
] as const;



const STATS = [
  { number: siteConfig.stats.totalCitiesCovered, label: "Cities Covered" },
  { number: siteConfig.stats.totalHappyCustomers, label: "Happy Clients" },
  { number: siteConfig.stats.safeDelivery, label: "Safe Delivery" },
  { number: "24/7", label: "Support" },
] as const;

// ── Custom Hook: Intersection Observer ──────────────────────
function useAnimateOnScroll(selector: string) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}

// ── Component ────────────────────────────────────────────────
const Warehouse = () => {
  useAnimateOnScroll(".animate-fade-up");

  return (
    <>
      <Helmet>
        <title>Warehouse &amp; Storage Services | Gati Shifting Packers</title>
        <meta
          name="description"
          content="Secure and flexible Warehouse & Storage Services by Gati Shifting Packers. Safe storage solutions for household, office, and commercial goods across India."
        />
        <meta
          name="keywords"
          content="Gati Shifting Packers warehouse, storage services, secure storage solutions, commercial storage, household storage, office storage, inventory management, warehouse and logistics services, safe goods storage, professional warehousing, flexible storage plans, storage facilities near me, reliable warehouse company, affordable storage services"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Gati Shifting Packers" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Warehouse & Storage Services | Gati Shifting Packers" />
        <meta
          property="og:description"
          content="Reliable Warehouse & Storage Services by Gati Shifting Packers. Safe and secure storage for household, office, or commercial goods."
        />
        <meta property="og:url" content="https://gatishiftingpackers.com/warehouse" />
        <meta property="og:site_name" content="Gati Shifting Packers" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Warehouse & Storage Services | Gati Shifting Packers" />
        <meta
          name="twitter:description"
          content="Professional Warehouse & Storage Services by Gati Shifting Packers. Flexible and secure storage for all types of goods."
        />

        <meta httpEquiv="Content-Language" content="en" />
        <link rel="canonical" href="https://gatishiftingpackers.com/warehouse" />
      </Helmet>

      {/* ── Hero ── */}
      <section className="warehouse-hero" aria-label="Warehouse Services Hero">
        <div className="warehouse-hero__inner">
          <div className="warehouse-hero__badge">Trusted Across India</div>
          <h1 className="warehouse-hero__title">
            Warehouse
            <span>&amp; Storage</span>
          </h1>
          <p className="warehouse-hero__subtitle">
            Secure · Flexible · Affordable — Across 50+ Indian Cities
          </p>
        </div>
        <span className="warehouse-hero__scroll-hint" aria-hidden="true">
          scroll
        </span>
      </section>

      {/* ── Main Content ── */}
      <main className="warehouse-section" id="warehouse-main">
        <div className="container">

          {/* Intro */}
          <div className="warehouse-intro animate-fade-up">
            <div className="warehouse-intro__left">
              <h2 className="warehouse-intro__heading">
                Reliable Warehouse Services in <em>India</em>
              </h2>
              <div className="warehouse-intro__accent-line" aria-hidden="true" />
              <p className="warehouse-intro__text">
                Gati Shifting Packers is a trusted name in warehouse storage and
                logistics across India. We provide secure, flexible, and affordable
                warehousing solutions for businesses of all sizes — from short-term
                storage to long-term inventory management.
              </p>
              <p className="warehouse-intro__text">
                With strategically located warehouses in major Indian cities, we offer
                organised storage, timely access, and advanced inventory tracking.
                Insurance coverage and real-time updates ensure complete peace of mind.
              </p>
            </div>
            <div className="warehouse-intro__stats" aria-label="Key Statistics">
              {STATS.map(({ number, label }) => (
                <div className="stat-card" key={label}>
                  <div className="stat-card__number">{number}</div>
                  <div className="stat-card__label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 6-Step Process */}
          <section className="steps-section" aria-labelledby="steps-heading">
            <div className="steps-section__header animate-fade-up">
              <span className="steps-section__tag">How It Works</span>
              <h2 className="steps-section__title" id="steps-heading">
                Simple 6-Step Booking Process
              </h2>
            </div>
            <div className="steps-section__grid">
              {STEPS.map((step, index) => (
                <article
                  key={step.title}
                  className="step-card animate-fade-up"
                  aria-label={`Step ${index + 1}: ${step.title}`}
                >
                  <span className="step-card__number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="step-card__icon" aria-hidden="true">
                    {step.icon}
                  </span>
                  <h3 className="step-card__title">
                    Step {index + 1}: {step.title}
                  </h3>
                  <ul className="step-card__list">
                    {step.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {/* Show ReviewDialog only on last step */}
                  {index === 5 && (
                    <div style={{ marginTop: "16px" }}>
                      <ReviewDialog />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* Types of Goods */}
          <section className="goods-section animate-fade-up" aria-labelledby="goods-heading">
            <div className="goods-section__left">
              <span className="goods-section__tag">What We Store</span>
              <h2 className="goods-section__title" id="goods-heading">
                Types of Goods We Store
              </h2>
              <p className="goods-section__desc">
                We provide comprehensive warehouse solutions for a wide range of items
                — from industrial machinery to sensitive documents. Every item is handled
                with professional care and stored in appropriate conditions.
              </p>
            </div>
            <div className="goods-section__items">
              {GOODS.map(({ icon, name, desc }) => (
                <div className="goods-item animate-fade-up" key={name}>
                  <span className="goods-item__icon" aria-hidden="true">{icon}</span>
                  <div>
                    <div className="goods-item__name">{name}</div>
                    <div className="goods-item__desc">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose */}
          <section className="why-section" aria-labelledby="why-heading">
            <div className="why-section__header animate-fade-up">
              <span className="why-section__tag">Why Choose Us</span>
              <h2 className="why-section__title" id="why-heading">
                Why Professional Warehouse Services?
              </h2>
            </div>
            <div className="why-section__grid">
              {WHY_ITEMS.map(({ icon, title, desc }) => (
                <div className="why-card animate-fade-up" key={title}>
                  <div className="why-card__icon-wrap" aria-hidden="true">{icon}</div>
                  <h3 className="why-card__title">{title}</h3>
                  <p className="why-card__desc">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Banner */}
          <div className="pricing-banner animate-fade-up" aria-label="Pricing Information">
            <div className="pricing-banner__text">
              <span className="pricing-banner__label">Transparent Pricing</span>
              <h2 className="pricing-banner__heading">
                Affordable Warehouse Storage Charges in India
              </h2>
              <p className="pricing-banner__desc">
                No hidden costs — you pay only for the space and duration you use.
                Short-term, seasonal, or long-term: we deliver the best rates.
              </p>
            </div>
            <a
              href="#contact"
              className="pricing-banner__cta"
              aria-label="Get a free warehouse storage quote"
            >
              Get Free Quote →
            </a>
          </div>

          {/* Cost Factors */}
          <section className="factors-section" aria-labelledby="factors-heading">
            <div className="factors-section__header animate-fade-up">
              <span className="factors-section__tag">Pricing Breakdown</span>
              <h2 className="factors-section__title" id="factors-heading">
                Factors Affecting Warehouse Storage Costs
              </h2>
            </div>
            <ol className="factors-section__list" aria-label="Cost factors list">
              {FACTORS.map(({ title, desc }, index) => (
                <li className="factor-item animate-fade-up" key={title}>
                  <div className="factor-item__num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="factor-item__content">
                    <div className="factor-item__title">{title}</div>
                    <p className="factor-item__desc">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

        </div>
      </main>

      {/* ── Shared Sections ── */}
      <ReviewVideo />
      <GetInTouch />
      <AwardCertification />
      <TrustUsSection />
      <BrandList />
      <FAQList />

    </>
  );
};

export default Warehouse;