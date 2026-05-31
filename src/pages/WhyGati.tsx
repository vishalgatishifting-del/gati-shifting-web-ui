import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Components
import AwardCertification from "../components/AwardCertification";
import ContactForm from "../components/ContactForm";
import FAQList from "../components/FAQList";

// MUI Icons
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PublicIcon from "@mui/icons-material/Public";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import GroupsIcon from "@mui/icons-material/Groups";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import GppGoodIcon from "@mui/icons-material/GppGood";
import StarIcon from "@mui/icons-material/Star";

import "./WhyGati.scss";
import { siteConfig } from "../config/Company";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Props {
  successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}

interface WhyCard {
  Icon: React.ElementType;
  title: string;
  description: string;
  accent: string;
}

interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  city: string;
  rating: number;
  text: string;
  initials: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const WHY_CARDS: WhyCard[] = [
  {
    Icon: SecurityIcon,
    title: "Safe & Secure Packing",
    description:
      "Premium export-grade packing materials — bubble wrap, custom crating, and double-wall cartons — ensure every item reaches safely.",
    accent: "#2563eb",
  },
  {
    Icon: AccessTimeIcon,
    title: "On-Time Delivery",
    description:
      "Advanced GPS tracking and reliable transport fleet guarantee punctual delivery, every single time.",
    accent: "#0891b2",
  },
  {
    Icon: PublicIcon,
    title: "Pan-India Network",
    description:
      "With operations in 100+ cities, we're the only partner you need for local, intercity, and interstate moves.",
    accent: "#7c3aed",
  },
  {
    Icon: CurrencyRupeeIcon,
    title: "Transparent Pricing",
    description:
      "No hidden charges, no last-minute surprises. Our itemized quotes show exactly what you pay for.",
    accent: "#059669",
  },
  {
    Icon: GroupsIcon,
    title: "Expert Team",
    description:
      "70,000+ trained professionals who treat every item as their own — from fragile glassware to heavy appliances.",
    accent: "#dc2626",
  },
  {
    Icon: GppGoodIcon,
    title: "Insurance Coverage",
    description:
      "Comprehensive transit insurance protects your goods for their full value throughout the entire journey.",
    accent: "#d97706",
  },
  {
    Icon: TrackChangesIcon,
    title: "Real-Time Tracking",
    description:
      "Track your shipment live from pickup to delivery via our customer portal — complete peace of mind.",
    accent: "#2563eb",
  },
  {
    Icon: SupportAgentIcon,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available round the clock via phone, chat, and email for any assistance.",
    accent: "#0891b2",
  },
  {
    Icon: EmojiEventsIcon,
    title: "18+ Years of Trust",
    description:
      "Two decades of industry experience and 5.2 lakh+ happy customers make us India's most trusted movers.",
    accent: "#7c3aed",
  },
];

const STATS: StatItem[] = [
  { value: siteConfig.stats.totalHappyCustomers, label: "Happy Customers", icon: <StarIcon /> },
  { value: siteConfig.stats.totalVerifiedProfessionals, label: "Verified Experts", icon: <GroupsIcon /> },
  { value: siteConfig.stats.totalCitiesCovered, label: "Cities Covered", icon: <PublicIcon /> },
  { value: siteConfig.stats.totalYearOfExperience, label: "Years of Trust", icon: <EmojiEventsIcon /> },
  { value: siteConfig.stats.safeDelivery, label: "Safe Delivery Rate", icon: <VerifiedIcon /> },
  { value: siteConfig.stats.customerRating + "★", label: "Customer Rating", icon: <StarIcon /> },
];

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Request a Free Quote",
    description:
      "Share your move details — city, date, and inventory. Receive a transparent, itemized quote within minutes.",
  },
  {
    number: "02",
    title: "Schedule & Confirm",
    description:
      "Choose your preferred date. A dedicated move coordinator is assigned to your booking immediately.",
  },
  {
    number: "03",
    title: "Professional Packing",
    description:
      "Our trained team arrives on time with premium materials and packs everything with expert care.",
  },
  {
    number: "04",
    title: "Safe Transport",
    description:
      "Your goods move in GPS-tracked vehicles with real-time updates shared with you throughout transit.",
  },
  {
    number: "05",
    title: "Delivery & Unpacking",
    description:
      "We deliver, unpack, and place items at your new home — leaving only after your complete satisfaction.",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Sharma",
    city: "Delhi → Mumbai",
    rating: 5,
    text: "Absolutely seamless experience. The team was punctual, careful with our belongings, and the pricing was completely transparent. Highly recommend Gati Shifting Packers!",
    initials: "PS",
  },
  {
    name: "Rahul Mehta",
    city: "Bangalore → Hyderabad",
    rating: 5,
    text: "Used Gati for my office relocation and was blown away by their professionalism. Real-time tracking gave us peace of mind throughout. Zero damage, on-time delivery.",
    initials: "RM",
  },
  {
    name: "Anita Verma",
    city: "Chennai → Pune",
    rating: 5,
    text: "Best packers and movers I've used in 10 years. The insurance coverage, the careful packing, and the friendly staff made what could be a nightmare into a breeze.",
    initials: "AV",
  },
];

const CITIES_DOMESTIC = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata",
  "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Noida", "Gurgaon",
  "Chandigarh", "Indore", "Nagpur", "Surat", "Vadodara", "Kochi",
  "Coimbatore", "Bhopal", "Patna", "Ranchi", "Guwahati", "Bhubaneswar",
  "Dehradun", "Ludhiana", "Amritsar", "Meerut", "Nashik", "Raipur",
];


// ─── Custom Hook ──────────────────────────────────────────────────────────────

function useInView(threshold = 0.1): [React.RefObject<HTMLElement>, boolean] {
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

// ─── Action Buttons ───────────────────────────────────────────────────────────

const ActionButtons: React.FC<{ className?: string; dark?: boolean }> = ({
  className = "",
  dark = false,
}) => (
  <div className={`wg-action-buttons ${dark ? "wg-action-buttons--dark" : ""} ${className}`}>
    <a className="wg-btn wg-btn--primary" href={`tel:${siteConfig.phone}`}>
      <LocalPhoneIcon fontSize="small" />
      <span>{siteConfig.phone}</span>
    </a>
    <Link className="wg-btn wg-btn--outline" to="/contact-us">
      Get Free Quote <ArrowForwardIcon fontSize="small" />
    </Link>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const WhyGati: React.FC<Props> = ({ successCondition }) => {
  const [heroRef, heroInView] = useInView(0.05);
  const [statsRef, statsInView] = useInView(0.1);
  const [whyRef, whyInView] = useInView(0.05);
  const [processRef, processInView] = useInView(0.05);
  const [testimonialsRef, testimonialsInView] = useInView(0.05);
  const [citiesRef, citiesInView] = useInView(0.05);
  const [ctaRef, ctaInView] = useInView(0.05);

  return (
    <>
      <Helmet>
        <title>Why Choose Gati Shifting Packers? | India's Most Trusted Movers</title>
        <meta
          name="description"
          content="Discover why 5 lakh+ Indians trust Gati Shifting Packers for safe, reliable, and affordable relocation services across India. 18+ years experience, 70,000+ experts, 100+ cities."
        />
        <meta
          name="keywords"
          content="why choose Gati Shifting Packers, trusted packers and movers India, best packers and movers, reliable relocation services, professional movers India, affordable packers and movers"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Gati Shifting Packers" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Why Choose Gati Shifting Packers?" />
        <meta
          property="og:description"
          content="18+ years, 5L+ happy customers, 70K+ experts. Find out why Gati Shifting Packers is India's most trusted relocation company."
        />
        <meta property="og:url" content="https://gatishiftingpackers.com/why-gati" />
        <meta property="og:site_name" content="Gati Shifting Packers" />
        <link rel="canonical" href="https://gatishiftingpackers.com/why-gati" />
      </Helmet>

      {/* ── Page Header ── */}
      <div className="wg-page-header">
        <div className="wg-page-header__overlay" aria-hidden="true" />
        <div className="wg-page-header__content">
          <p className="wg-page-header__breadcrumb">Home / About</p>
          <h1 className="wg-page-header__title">Why Gati?</h1>
          <p className="wg-page-header__subtitle">
            India's most trusted relocation partner — since {siteConfig.stats.since}.
          </p>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section
        className={`wg-hero ${heroInView ? "wg-anim--visible" : ""}`}
        ref={heroRef as React.RefObject<HTMLElement>}
      >
        <div className="wg-container wg-hero__inner">
          <div className="wg-hero__content wg-anim wg-anim--left">
            <span className="wg-label">Our Story</span>
            <h2 className="wg-section-title">
              Why Choose<br />
              <span className="wg-gradient-text">Gati Shifting Packers?</span>
            </h2>
            <p className="wg-body-text">
              Relocating can be one of life's most stressful events — but with Gati Shifting Packers, your move becomes smooth, reliable, and completely hassle-free. Whether you're shifting within the city or across India, our experienced team, modern fleet, and customer-first approach ensure your valuables are handled with expert care and delivered on time.
            </p>
            <p className="wg-body-text">
              For over {siteConfig.stats.totalYearOfExperience} years, we have been the trusted relocation partner for over {siteConfig.stats.totalHappyCustomers} families and businesses across India. Our philosophy is simple: treat every move as if it were our own. That commitment to excellence is what sets us apart in an industry built on trust.
            </p>
            <ActionButtons />
          </div>
          <div className="wg-hero__cards wg-anim wg-anim--right">
            {[
              { icon: "🏆", label: "India's #1 Movers", sub: "Rated by 3L+ customers" },
              { icon: "🛡️", label: "Zero Damage Promise", sub: "Full insurance covered" },
              { icon: "⚡", label: "Express Moving", sub: "Same-day available" },
              { icon: "📍", label: siteConfig.stats.totalAvaiableCities + " Cities", sub: "Pan-India network" },
            ].map(({ icon, label, sub }) => (
              <div className="wg-hero__card" key={label}>
                <span className="wg-hero__card-icon">{icon}</span>
                <div>
                  <strong>{label}</strong>
                  <span>{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section
        className={`wg-stats ${statsInView ? "wg-anim--visible" : ""}`}
        ref={statsRef as React.RefObject<HTMLElement>}
      >
        <div className="wg-container wg-stats__grid">
          {STATS.map(({ value, label, icon }, i) => (
            <div
              className="wg-stat-card wg-anim wg-anim--up"
              key={label}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="wg-stat-card__icon">{icon}</div>
              <span className="wg-stat-card__value">{value}</span>
              <span className="wg-stat-card__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why We Stand Out ── */}
      <section
        className={`wg-why ${whyInView ? "wg-anim--visible" : ""}`}
        ref={whyRef as React.RefObject<HTMLElement>}
      >
        <div className="wg-container">
          <div className="wg-section-header">
            <span className="wg-label">Why We Stand Out</span>
            <h2 className="wg-section-title">
              The Gati Difference —<br />
              <span className="wg-gradient-text">9 Reasons to Choose Us</span>
            </h2>
            <p className="wg-body-text wg-section-header__sub">
              We don't just move your belongings — we move your life forward. Here's what makes us different.
            </p>
          </div>
          <div className="wg-why__grid">
            {WHY_CARDS.map(({ Icon, title, description, accent }, i) => (
              <div
                className="wg-why-card wg-anim wg-anim--up"
                key={title}
                style={{
                  animationDelay: `${(i % 3) * 0.1}s`,
                  "--wg-card-accent": accent,
                } as React.CSSProperties}
              >
                <div className="wg-why-card__icon">
                  <Icon />
                </div>
                <h3 className="wg-why-card__title">{title}</h3>
                <p className="wg-why-card__desc">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section
        className={`wg-process ${processInView ? "wg-anim--visible" : ""}`}
        ref={processRef as React.RefObject<HTMLElement>}
      >
        <div className="wg-container">
          <div className="wg-section-header">
            <span className="wg-label">How It Works</span>
            <h2 className="wg-section-title">
              Our Simple<br />
              <span className="wg-gradient-text">5-Step Moving Process</span>
            </h2>
          </div>
          <div className="wg-process__steps">
            {PROCESS_STEPS.map((step, i) => (
              <div className="wg-process__step" key={step.number}>

                {/* Left: number + line ek saath */}
                <div className="wg-process__step-left">
                  <div className="wg-process__step-num">{step.number}</div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="wg-process__connector" aria-hidden="true" />
                  )}
                </div>

                {/* Right: text */}
                <div className="wg-process__step-body">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

              </div>
            ))}
          </div>
          <div className="wg-process__cta">
            <ActionButtons />
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        className={`wg-testimonials ${testimonialsInView ? "wg-anim--visible" : ""}`}
        ref={testimonialsRef as React.RefObject<HTMLElement>}
      >
        <div className="wg-container">
          <div className="wg-section-header">
            <span className="wg-label">Customer Stories</span>
            <h2 className="wg-section-title">
              What Our Customers<br />
              <span className="wg-gradient-text">Say About Us</span>
            </h2>
          </div>
          <div className="wg-testimonials__grid">
            {TESTIMONIALS.map((t, i) => (
              <div
                className="wg-testimonial-card wg-anim wg-anim--up"
                key={t.name}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="wg-testimonial-card__stars">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <StarIcon key={si} />
                  ))}
                </div>
                <p className="wg-testimonial-card__text">"{t.text}"</p>
                <div className="wg-testimonial-card__author">
                  <div className="wg-testimonial-card__avatar">{t.initials}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cities Coverage ── */}
      <section
        className={`wg-cities ${citiesInView ? "wg-anim--visible" : ""}`}
        ref={citiesRef as React.RefObject<HTMLElement>}
      >
        <div className="wg-container">
          <div className="wg-section-header">
            <span className="wg-label">Trusted Across India</span>
            <h2 className="wg-section-title">
              We Serve Every<br />
              <span className="wg-gradient-text">Corner of India</span>
            </h2>
            <p className="wg-body-text wg-section-header__sub">
              From metro cities to smaller towns, our network ensures you get the same world-class service wherever you are.
            </p>
          </div>
          <div className="wg-cities__grid wg-anim wg-anim--up">
            {CITIES_DOMESTIC.map((city) => (
              <span className="wg-city-tag" key={city}>
                📍 {city}
              </span>
            ))}
          </div>
          <p className="wg-cities__note">
            Don't see your city? <Link to="/contact-us">Contact us</Link> — we serve 100+ cities across India.
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className={`wg-cta ${ctaInView ? "wg-anim--visible" : ""}`}
        ref={ctaRef as React.RefObject<HTMLElement>}
      >
        <div className="wg-cta__bg" aria-hidden="true" />
        <div className="wg-container wg-cta__inner wg-anim wg-anim--up">
          <span className="wg-label">Move With Confidence</span>
          <h2 className="wg-cta__title">
            Move Smart,<br />Move with Gati Shifting Packers
          </h2>
          <p className="wg-cta__sub">
            Whether you're moving your household, office, or vehicle — from Delhi to Mumbai, Hyderabad to Chennai, or Kolkata to Bangalore — our services are designed to make every move simple, safe, and stress-free.
          </p>
          <ActionButtons dark className="wg-cta__btns" />
        </div>
      </section>

      {/* ── Shared Components ── */}
      <ContactForm successCondition={successCondition} />
      <AwardCertification />
      <FAQList />

    </>
  );
};

export default WhyGati;