import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Components (unchanged — your existing shared components)
import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";
import ReviewDialog from "../components/ReviewDialog";

// Assets
import InternationalMovesImg from "../assets/InternationalMoves/internationalMovesImg.jpg";
import InternationalBannerImg from "../assets/homePagePng/INTERNATIONAL.png";

// MUI Icons
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import InventoryIcon from "@mui/icons-material/Inventory";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import GppGoodIcon from "@mui/icons-material/GppGood";
import PublicIcon from "@mui/icons-material/Public";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import "./InternationalMovers.scss";
import { siteConfig } from "../config/Company";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
}

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

interface WhyCard {
  Icon: React.ElementType;
  title: string;
  description: string;
}

interface CostFactor {
  number: string;
  title: string;
  description: string;
}

interface Destination {
  country: string;
  flag: string;
  tag: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const STEPS: Step[] = [
  {
    number: "01",
    title: "Share Details & Get a Quote",
    icon: <AssignmentIcon />,
    description:
      "Tell us about your move — inventory, origin, and destination country. Our experts craft a customized quote within 24 hours.",
    items: [
      "Provide your full inventory list",
      "Share origin & destination details",
      "Receive a transparent, itemized quote",
    ],
  },
  {
    number: "02",
    title: "Confirm Booking & Schedule",
    icon: <CheckCircleOutlineIcon />,
    description:
      "Pick your preferred packing & pickup date. A small advance secures your booking and our full team coordination begins.",
    items: [
      "Choose your preferred move date",
      "Secure booking with advance payment",
      "Dedicated move coordinator assigned",
    ],
  },
  {
    number: "03",
    title: "Professional Packing",
    icon: <InventoryIcon />,
    description:
      "Our trained team uses international-grade materials to pack every item — from fragile glassware to heavy furniture.",
    items: [
      "Export-quality double-wall cartons",
      "Bubble wrap & foam for fragile items",
      "Custom crating for antiques & art",
    ],
  },
  {
    number: "04",
    title: "Documentation & Customs",
    icon: <AssignmentIcon />,
    description:
      "We handle all customs paperwork, permits, and clearance documentation so you never face bureaucratic roadblocks.",
    items: [
      "Bill of lading & packing lists",
      "Import/export permits",
      "Country-specific customs compliance",
    ],
  },
  {
    number: "05",
    title: "Shipping & Live Tracking",
    icon: <TrackChangesIcon />,
    description:
      "Choose air or sea freight. Track your shipment in real-time on our portal from pickup to doorstep delivery.",
    items: [
      "Air freight (3–7 days) available",
      "Sea freight (FCL/LCL) for budget moves",
      "Real-time GPS + portal tracking",
    ],
  },
  {
    number: "06",
    title: "Delivery & Unpacking",
    icon: <VerifiedIcon />,
    description:
      "At your destination, items are carefully delivered, unpacked, and placed — we leave only after your satisfaction.",
    items: [
      "White-glove delivery & unpacking",
      "Furniture assembly on request",
      "Post-move support & feedback",
    ],
  },
];

const SERVICES: ServiceItem[] = [
  {
    icon: "🛋️",
    title: "Household Goods",
    description:
      "Furniture, appliances, bedding, kitchenware, and décor items packed and shipped with export-grade protection.",
  },
  {
    icon: "🖥️",
    title: "Office & IT Assets",
    description:
      "Desks, servers, computers, confidential files, and office equipment relocated with zero downtime.",
  },
  {
    icon: "🚗",
    title: "Vehicles",
    description:
      "Cars, motorcycles, and other vehicles shipped in enclosed containers with full insurance coverage.",
  },
  {
    icon: "💎",
    title: "Fragile & High-Value",
    description:
      "Glassware, electronics, artwork, and antiques handled with custom crating and extra-care protocols.",
  },
  {
    icon: "🐾",
    title: "Pets & Plants",
    description:
      "Special care relocation for pets and plants with required health certificates and import permits.",
  },
  {
    icon: "📦",
    title: "Commercial Cargo",
    description:
      "Machinery, industrial equipment, and bulk commercial goods with full logistics and customs management.",
  },
];

const WHY_CARDS: WhyCard[] = [
  {
    Icon: PublicIcon,
    title: "Global Network",
    description:
      "Partner agents in 150+ countries ensure seamless last-mile delivery and customs support worldwide.",
  },
  {
    Icon: GppGoodIcon,
    title: "Safe & Secure Packing",
    description:
      "International-standard export packing with materials certified for sea and air transit conditions.",
  },
  {
    Icon: AssignmentIcon,
    title: "Customs Support",
    description:
      "Our customs experts manage all documentation, duties, and clearance so your move stays stress-free.",
  },
  {
    Icon: TrackChangesIcon,
    title: "Real-Time Tracking",
    description:
      "Track your shipment at every stage — from pickup in India to delivery at your new home abroad.",
  },
  {
    Icon: SupportAgentIcon,
    title: "Dedicated Move Manager",
    description:
      "A single point of contact guides you through the entire relocation journey, from quote to delivery.",
  },
  {
    Icon: VerifiedIcon,
    title: "Insurance Covered",
    description:
      "Comprehensive transit insurance protects your goods for the full value throughout the journey.",
  },
];

const COST_FACTORS: CostFactor[] = [
  {
    number: "01",
    title: "Distance & Destination",
    description:
      "Intercontinental routes and remote destinations affect base shipping rates. We provide the most cost-optimal routing.",
  },
  {
    number: "02",
    title: "Volume & Weight",
    description:
      "Heavier or bulkier shipments require larger containers or multiple consignments, directly impacting pricing.",
  },
  {
    number: "03",
    title: "Packing Requirements",
    description:
      "Specialized custom crating for fragile, antique, or oversized items may add to the overall cost.",
  },
  {
    number: "04",
    title: "Mode of Transport",
    description:
      "Air freight is fast (3–7 days) but premium-priced; sea freight (FCL/LCL) is economical for larger volumes.",
  },
  {
    number: "05",
    title: "Customs & Documentation",
    description:
      "Import duties, taxes, and destination-country regulations can influence overall charges and clearance timelines.",
  },
];

const DESTINATIONS: Destination[] = [
  { country: "United States", flag: "🇺🇸", tag: "Most Popular" },
  { country: "United Kingdom", flag: "🇬🇧", tag: "High Demand" },
  { country: "Canada", flag: "🇨🇦", tag: "Trending" },
  { country: "Australia", flag: "🇦🇺", tag: "Popular" },
  { country: "Germany", flag: "🇩🇪", tag: "Europe Hub" },
  { country: "UAE / Dubai", flag: "🇦🇪", tag: "Top Route" },
  { country: "Singapore", flag: "🇸🇬", tag: "Asia Hub" },
  { country: "New Zealand", flag: "🇳🇿", tag: "Available" },
  { country: "Netherlands", flag: "🇳🇱", tag: "Europe" },
  { country: "Saudi Arabia", flag: "🇸🇦", tag: "Gulf Route" },
  { country: "Japan", flag: "🇯🇵", tag: "Available" },
  { country: "France", flag: "🇫🇷", tag: "Europe" },
];

const KEYWORDS = [
  "gati packers and movers",
  "international moving companies",
  "international moving services",
  "Gati International Shifting Packers and Movers",
  "International shifting packers and movers",
  "International Gati Shifting Packers",
  "International packers and movers",
  "International relocation services",
  "International shifting services",
  "International moving company",
  "International household shifting",
  "International cargo services",
  "International logistics services",
  "best international moving companies",
  "international relocation services",
  "international packing and moving",
  "international household relocation",
  "international moving cost",
  "how to move abroad with belongings",
  "international relocation company near me",
];

// ─── Custom Hook: Scroll-triggered visibility ─────────────────────────────────

function useInView(threshold = 0.12): [React.RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement>(null!);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

// ─── Reusable CTA Buttons ─────────────────────────────────────────────────────

const ActionButtons: React.FC<{ className?: string; dark?: boolean }> = ({
  className = "",
  dark = false,
}) => (
  <div className={`im-action-buttons ${dark ? "im-action-buttons--dark" : ""} ${className}`}>
    <a className="im-btn im-btn--primary" href={`tel:${siteConfig.phone}`}>
      <LocalPhoneIcon fontSize="small" />
      <span>{siteConfig.phone}</span>
    </a>
    <Link className="im-btn im-btn--outline" to="/contact-us">
      Get Free Quote <ArrowForwardIcon fontSize="small" />
    </Link>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const InternationalMovers: React.FC = () => {
  const [heroRef, heroInView] = useInView(0.05);
  const [stepsRef, stepsInView] = useInView(0.05);
  const [servicesRef, servicesInView] = useInView(0.05);
  const [destRef, destInView] = useInView(0.05);
  const [whyRef, whyInView] = useInView(0.05);
  const [costRef, costInView] = useInView(0.05);
  const [ctaRef, ctaInView] = useInView(0.05);

  return (
    <>
      <Helmet>
        <title>International Moving Services | Gati Shifting Packers – Trusted Global Relocation</title>
        <meta
          name="description"
          content="Hassle-free International Moving Services by Gati Shifting Packers. We ensure safe, timely, and affordable overseas relocation for your home, office, or vehicle."
        />
        <meta
          name="keywords"
          content="Gati Shifting Packers international moving, overseas relocation, international packers and movers, global shifting services, international transport, abroad relocation, international moving services, international household moving, cross-border relocation, international moving company in India, affordable overseas movers, door-to-door international moving, worldwide relocation services"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Gati Shifting Packers" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="International Moving Services | Gati Shifting Packers" />
        <meta
          property="og:description"
          content="Trusted International Moving Services by Gati Shifting Packers. Move your household or office items abroad safely and efficiently."
        />
        <meta property="og:url" content="https://gatishiftingpackers.com/international-moves" />
        <meta property="og:site_name" content="Gati Shifting Packers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="International Moving Services | Gati Shifting Packers" />
        <meta
          name="twitter:description"
          content="Secure and professional International Moving Services by Gati Shifting Packers. Reliable relocation solutions for global moves."
        />
        <link rel="canonical" href="https://gatishiftingpackers.com/international-moves" />
      </Helmet>

      {/* ── Banner ── */}
      <section className="im-banner">
        <img
          src={InternationalBannerImg}
          alt="Gati Shifting Packers International Moving Services"
          loading="eager"
          className="im-banner__img"
        />
        <div className="im-banner__overlay">
          <div className="im-banner__content">
            <span className="im-label">Worldwide Relocation</span>
            <h1 className="im-banner__title">
              Move Anywhere<br />
              <span className="im-gradient-text">In The World</span>
            </h1>
            <p className="im-banner__subtitle">
              Trusted by 3L+ Indians for safe, stress-free international relocation
            </p>
            <ActionButtons />
          </div>
        </div>
      </section>

      {/* ── Hero / About Section ── */}
      <section
        className={`im-hero ${heroInView ? "im-anim--visible" : ""}`}
        ref={heroRef as React.RefObject<HTMLElement>}
      >
        <div className="im-container im-hero__inner">
          <div className="im-hero__content im-anim im-anim--left">
            <span className="im-label">Who We Are</span>
            <h2 className="im-section-title">
              Gati Shifting Packers –<br />
              <span className="im-gradient-text">Trusted International Movers</span>
            </h2>
            <p className="im-body-text">
              Gati Shifting Packers is India's most reliable partner for international relocation. Whether you're moving your household, office, or personal belongings to a new country, our expert team ensures a smooth, stress-free transition — from the first box packed to the final item delivered.
            </p>
            <p className="im-body-text">
              With 18+ years of experience handling international moves to and from India, we manage everything: professional packing, customs clearance, sea or air freight shipping, and white-glove delivery. Our global partner network spans 150+ countries, making us truly capable of moving you anywhere in the world.
            </p>
            <div className="im-hero__stats">
              {[
                { value: siteConfig.stats.totalCountryServed, label: "Countries Served" },
                { value:siteConfig.stats.totalYearOfExperience, label: "Years Experience" },
                { value: siteConfig.stats.totalHappyCustomers, label: "Happy Customers" },
                { value: siteConfig.stats.safeDelivery, label: "Safe Delivery Rate" },
              ].map(({ value, label }) => (
                <div className="im-hero__stat" key={label}>
                  <span className="im-hero__stat-value im-gradient-text">{value}</span>
                  <span className="im-hero__stat-label">{label}</span>
                </div>
              ))}
            </div>
            <ActionButtons />
          </div>
          <div className="im-hero__image im-anim im-anim--right">
            <div className="im-hero__image-card">
              <img
                src={InternationalMovesImg}
                alt="International moving services by Gati Shifting Packers"
                loading="lazy"
              />
              <div className="im-hero__image-badge">
                <FlightTakeoffIcon />
                <span>Air & Sea Freight Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Transport Modes ── */}
      <section className="im-transport">
        <div className="im-container">
          <div className="im-transport__grid">
            <div className="im-transport__card im-transport__card--air">
              <div className="im-transport__card-icon">
                <FlightTakeoffIcon />
              </div>
              <div className="im-transport__card-content">
                <h3>Air Freight</h3>
                <p>Fast delivery in 3–7 business days. Ideal for urgent moves, high-value items, and compact shipments.</p>
                <ul>
                  <li>✓ Express 3–7 day delivery</li>
                  <li>✓ Ideal for documents & valuables</li>
                  <li>✓ Door-to-door available</li>
                </ul>
              </div>
            </div>
            <div className="im-transport__card im-transport__card--sea">
              <div className="im-transport__card-icon">
                <DirectionsBoatIcon />
              </div>
              <div className="im-transport__card-content">
                <h3>Sea Freight</h3>
                <p>Cost-effective for large household moves. FCL (Full Container Load) and LCL (shared container) options.</p>
                <ul>
                  <li>✓ FCL & LCL container options</li>
                  <li>✓ Best for full household goods</li>
                  <li>✓ Most economical for bulk moves</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6-Step Process ── */}
      <section
        className={`im-steps ${stepsInView ? "im-anim--visible" : ""}`}
        ref={stepsRef as React.RefObject<HTMLElement>}
      >
        <div className="im-container">
          <div className="im-section-header">
            <span className="im-label">How It Works</span>
            <h2 className="im-section-title">
              Our Simple 6-Step<br />
              <span className="im-gradient-text">International Moving Process</span>
            </h2>
            <p className="im-body-text im-section-header__sub">
              From the moment you contact us to the day we unpack at your new home — every step is handled with precision.
            </p>
          </div>
          <div className="im-steps__grid">
            {STEPS.map((step, i) => (
              <div
                className="im-step-card im-anim im-anim--up"
                key={step.number}
                style={{ animationDelay: `${(i % 3) * 0.1}s` }}
              >
                <div className="im-step-card__number">{step.number}</div>
                <div className="im-step-card__icon">{step.icon}</div>
                <h3 className="im-step-card__title">{step.title}</h3>
                <p className="im-step-card__desc">{step.description}</p>
                <ul className="im-step-card__list">
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {step.number === "06" && (
                  <div className="im-step-card__review">
                    <ReviewDialog />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Move ── */}
      <section
        className={`im-services ${servicesInView ? "im-anim--visible" : ""}`}
        ref={servicesRef as React.RefObject<HTMLElement>}
      >
        <div className="im-container">
          <div className="im-section-header">
            <span className="im-label">What We Move</span>
            <h2 className="im-section-title">
              Items We Relocate<br />
              <span className="im-gradient-text">Internationally</span>
            </h2>
            <p className="im-body-text im-section-header__sub">
              From household furniture to high-value cargo — we handle everything with international-grade care.
            </p>
          </div>
          <div className="im-services__grid">
            {SERVICES.map((service, i) => (
              <div
                className="im-service-card im-anim im-anim--up"
                key={service.title}
                style={{ animationDelay: `${(i % 3) * 0.1}s` }}
              >
                <span className="im-service-card__icon">{service.icon}</span>
                <h3 className="im-service-card__title">{service.title}</h3>
                <p className="im-service-card__desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Destinations ── */}
      <section
        className={`im-destinations ${destInView ? "im-anim--visible" : ""}`}
        ref={destRef as React.RefObject<HTMLElement>}
      >
        <div className="im-container">
          <div className="im-section-header">
            <span className="im-label">Where We Go</span>
            <h2 className="im-section-title">
              Popular International<br />
              <span className="im-gradient-text">Destinations</span>
            </h2>
          </div>
          <div className="im-destinations__grid">
            {DESTINATIONS.map((dest, i) => (
              <Link
                to="/contact-us"
                className="im-dest-card im-anim im-anim--up"
                key={dest.country}
                style={{ animationDelay: `${(i % 4) * 0.08}s` }}
              >
                <span className="im-dest-card__flag">{dest.flag}</span>
                <span className="im-dest-card__country">{dest.country}</span>
                <span className="im-dest-card__tag">{dest.tag}</span>
              </Link>
            ))}
          </div>
          <div className="im-destinations__note">
            <PublicIcon />
            <span>We cover 150+ countries worldwide. Don't see your destination? <Link to="/contact-us">Contact us</Link> — we'll make it happen.</span>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section
        className={`im-why ${whyInView ? "im-anim--visible" : ""}`}
        ref={whyRef as React.RefObject<HTMLElement>}
      >
        <div className="im-container">
          <div className="im-section-header">
            <span className="im-label">Why Gati</span>
            <h2 className="im-section-title">
              Why Choose Us for<br />
              <span className="im-gradient-text">International Moves?</span>
            </h2>
          </div>
          <div className="im-why__grid">
            {WHY_CARDS.map(({ Icon, title, description }, i) => (
              <div
                className="im-why-card im-anim im-anim--up"
                key={title}
                style={{ animationDelay: `${(i % 3) * 0.1}s` }}
              >
                <div className="im-why-card__icon">
                  <Icon />
                </div>
                <h3 className="im-why-card__title">{title}</h3>
                <p className="im-why-card__desc">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Section ── */}
      <section className="im-pricing">
        <div className="im-container im-pricing__inner">
          <div className="im-pricing__content">
            <span className="im-label">Transparent Pricing</span>
            <h2 className="im-section-title">
              Affordable International<br />
              <span className="im-gradient-text">Moving Charges</span>
            </h2>
            <p className="im-body-text">
              Gati Shifting Packers offers competitive, fully transparent pricing for international relocations. No hidden charges — ever. Your final quote covers packing, transport, customs, and delivery.
            </p>
            <p className="im-body-text">
              Costs depend on factors like shipment volume, destination, and mode of transport (air vs sea). We always recommend the most cost-effective option for your specific move.
            </p>
            <ActionButtons />
          </div>
          <div className="im-pricing__cta-box">
            <h3>Get an Instant Estimate</h3>
            <p>Tell us your move details and receive a free, no-obligation quote in 24 hours.</p>
            <ul>
              <li>✓ No hidden charges</li>
              <li>✓ Door-to-door pricing available</li>
              <li>✓ Insurance included</li>
              <li>✓ Air & sea freight options</li>
            </ul>
            <a className="im-btn im-btn--primary im-btn--full" href={`tel:${siteConfig.phone}`}>
              <LocalPhoneIcon fontSize="small" />
              Call Now for a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* ── Cost Factors ── */}
      <section
        className={`im-cost ${costInView ? "im-anim--visible" : ""}`}
        ref={costRef as React.RefObject<HTMLElement>}
      >
        <div className="im-container">
          <div className="im-section-header">
            <span className="im-label">Pricing Factors</span>
            <h2 className="im-section-title">
              What Affects Your<br />
              <span className="im-gradient-text">International Moving Cost?</span>
            </h2>
          </div>
          <div className="im-cost__list">
            {COST_FACTORS.map((factor, i) => (
              <div
                className="im-cost-item im-anim im-anim--left"
                key={factor.number}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className="im-cost-item__number">{factor.number}</span>
                <div className="im-cost-item__content">
                  <h3>{factor.title}</h3>
                  <p>{factor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA Banner ── */}
      <section
        className={`im-cta ${ctaInView ? "im-anim--visible" : ""}`}
        ref={ctaRef as React.RefObject<HTMLElement>}
      >
        <div className="im-cta__bg" aria-hidden="true" />
        <div className="im-container im-cta__inner im-anim im-anim--up">
          <span className="im-label">Start Your Move</span>
          <h2 className="im-cta__title">
            Ready to Move Internationally?<br />Let's Make It Happen.
          </h2>
          <p className="im-cta__sub">
            Get a free, no-obligation quote today. Our international move specialists are available 7 days a week.
          </p>
          <ActionButtons dark className="im-cta__btns" />
        </div>
      </section>

      {/* ── Shared Components ── */}
      <ReviewVideo />
      <GetInTouch />
      <AwardCertification />
      <TrustUsSection />
      <BrandList />
      <FAQList />

      {/* ── Keywords Section (SEO) ── */}
      <section className="im-keywords">
        <div className="im-container">
          <h2 className="im-keywords__heading">People Also Search For</h2>
          <div className="im-keywords__grid">
            {KEYWORDS.map((keyword) => (
              <span className="im-keyword" key={keyword}>
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InternationalMovers;