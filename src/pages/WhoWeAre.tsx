import { memo, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import TrustUsSection from "../components/TrustUsSection";
import ReviewVideo from "../components/ReviewVideos";
import "./WhoWeAre.scss";
import { siteConfig } from "../config/Company";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Stat {
  value: string;
  label: string;
}

interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

// ─── Constants (defined outside component to prevent re-creation on render) ──

const STATS: Stat[] = [
  { value: siteConfig.stats.totalYearOfExperience, label: "Years of Experience" },
  { value: siteConfig.stats.totalHomesRelocated, label: "Families Moved" },
  { value: siteConfig.stats.totalCitiesCovered, label: "Cities Covered" },
  { value: "99%", label: "On-Time Delivery" },
];

const CORE_VALUES: CoreValue[] = [
  {
    icon: "🛡️",
    title: "Transparency",
    description:
      "Upfront quotations with zero hidden charges — what you see is what you pay.",
  },
  {
    icon: "⏱️",
    title: "Timeliness",
    description:
      "GPS-tracked vehicles and strict timelines ensure your goods arrive when promised.",
  },
  {
    icon: "📦",
    title: "Safety",
    description:
      "Industry-best packing materials and trained handlers protect every item we touch.",
  },
  {
    icon: "🤝",
    title: "Accountability",
    description:
      "End-to-end ownership of your move — we don't hand off responsibility.",
  },
  {
    icon: "💬",
    title: "Customer First",
    description:
      "24/7 support team with real-time updates and a single point of contact.",
  },
  {
    icon: "🌟",
    title: "Excellence",
    description:
      "Continuously improving our standards to turn every move into a great experience.",
  },
];

const KEYWORDS: string[] = [
  "Gati Shifting Packers about us",
  "gati packers and movers",
  "trusted packers and movers in India",
  "reliable packers and movers",
  "packers and movers company profile",
  "packers and movers with experience",
  "leading packers and movers in India",
  "about us moving company",
  "trusted moving services India",
  "professional relocation services",
  "experienced home shifting company",
  "about our relocation company",
  "packing and unpacking services",
  "best packers and movers",
  "cheap packers and movers",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const StatCard = memo(({ value, label }: Stat) => (
  <div className="stat-card">
    <span className="stat-value">{value}</span>
    <span className="stat-label">{label}</span>
  </div>
));
StatCard.displayName = "StatCard";

const ValueCard = memo(({ icon, title, description }: CoreValue) => (
  <div className="value-card">
    <span className="value-icon" role="img" aria-label={title}>
      {icon}
    </span>
    <h3 className="value-title">{title}</h3>
    <p className="value-desc">{description}</p>
  </div>
));
ValueCard.displayName = "ValueCard";

// ─── Intersection Observer hook for scroll animations ────────────────────────

function useRevealOnScroll(selector: string) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}

// ─── Main Component ───────────────────────────────────────────────────────────

const WhoWeAre = () => {
  useRevealOnScroll(".reveal");

  return (
    <>
      <Helmet>
        <title>
          About Us | Gati Shifting Packers – India's Trusted Relocation Experts
        </title>
        <meta
          name="description"
          content="Founded in 2008, Gati Shifting Packers is India's leading relocation company with 18+ years of experience, 50,000+ happy families, and a presence across 200+ cities."
        />
        <meta name="keywords" content={KEYWORDS.join(", ")} />
        
        <link rel="canonical" href="https://gatishiftingpackers.com/who-we-are" />
      </Helmet>

      {/* ── Hero ── */}
      <section className="wwa-hero" aria-label="Who We Are hero">
        <div className="wwa-hero__overlay" aria-hidden="true" />
        <div className="wwa-hero__content">
          <p className="wwa-hero__eyebrow">Est. {siteConfig.stats.since} · Mumbai, India</p>
          <h1 className="wwa-hero__heading">Who We Are</h1>
          <p className="wwa-hero__sub">
            India's most trusted name in relocation — moving lives, not just
            belongings.
          </p>
        </div>
        <div className="wwa-hero__scroll-hint" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="wwa-stats" aria-label="Company statistics">
        {STATS.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* ── About Story ── */}
      <section className="wwa-story reveal" id="about-story" aria-labelledby="story-heading">
        <div className="wwa-story__accent" aria-hidden="true" />
        <div className="wwa-story__body">
          <p className="wwa-story__eyebrow">Our Story</p>
          <h2 className="wwa-story__heading" id="story-heading">
            Built on trust. <br />
            <em>Driven by care.</em>
          </h2>
          <div className="wwa-story__text">
            <p>
              Founded in <strong>{siteConfig.stats.since}</strong>, Gati Shifting Packers has grown
              into one of the most reliable names in the Indian relocation
              industry. Headquartered in Mumbai with a wide branch network
              nationwide, we deliver top-notch shifting experiences with
              unmatched professionalism.
            </p>
            <p>
              Over the years, we have helped thousands of families, individuals,
              and businesses move safely — whether it's local, intercity, or
              interstate. Our services span comprehensive packing, secure
              transport, careful loading &amp; unloading, unpacking, warehouse
              storage, and vehicle transportation.
            </p>
            <p>
              Our team of seasoned professionals handles fragile items, heavy
              furniture, electronics, office equipment, and vehicles using
              modern techniques and premium packing materials — from bubble wrap
              to tamper-proof cartons and GPS-tracked fleets.
            </p>
            <p>
              With <strong>{siteConfig.stats.totalYearOfExperience} years of experience</strong> and a growing base
              of loyal customers, Gati Shifting is more than a packers &amp;
              movers company — we are your trusted relocation partner. Choose us
              for a move that is smooth, transparent, affordable, and backed by
              people who genuinely care.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="wwa-values reveal" id="core-values" aria-labelledby="values-heading">
        <div className="wwa-values__header">
          <p className="section-eyebrow">What Drives Us</p>
          <h2 className="section-heading" id="values-heading">
            Our Core Values
          </h2>
        </div>
        <ul className="wwa-values__grid" role="list">
          {CORE_VALUES.map((v) => (
            <li key={v.title}>
              <ValueCard {...v} />
            </li>
          ))}
        </ul>
      </section>

      {/* ── Video Reviews ── */}
      <ReviewVideo />

      {/* ── Get In Touch ── */}
      <GetInTouch />

      {/* ── Awards ── */}
      <AwardCertification />

      {/* ── Trust Section ── */}
      <TrustUsSection />

      {/* ── Brand Partners ── */}
      <BrandList />


      {/* ── FAQ ── */}
      <FAQList />

    </>
  );
};

export default memo(WhoWeAre);