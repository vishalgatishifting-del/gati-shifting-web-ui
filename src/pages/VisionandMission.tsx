import { memo, lazy, Suspense, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import "./VisionandMission.scss";

// ── Lazy-load heavy below-fold components ─────────────────────────────────────
const ReviewVideo      = lazy(() => import("../components/ReviewVideos"));
const GetInTouch       = lazy(() => import("../components/GetInTouch"));
const AwardCertification = lazy(() => import("../components/AwardCertification"));
const TrustUsSection   = lazy(() => import("../components/TrustUsSection"));
const BrandList        = lazy(() => import("../components/BrandsList"));
const FAQList          = lazy(() => import("../components/FAQList"));


const MISSION_PILLARS = [
  {
    icon: "🎯",
    title: "Customer-First Approach",
    desc: "Placing customer satisfaction at the core of everything we do — every decision, every move.",
  },
  {
    icon: "🌏",
    title: "Nationwide & Global Presence",
    desc: "Serving all major Indian cities — Surat, Nagpur, Indore, Chandigarh, Noida and more — plus international destinations worldwide.",
  },
  {
    icon: "🛡️",
    title: "Quality & Safety",
    desc: "High-quality packing materials, modern logistics, and global standards to protect every single belonging.",
  },
  {
    icon: "⚡",
    title: "Innovation & Technology",
    desc: "Advanced tracking systems and efficient processes ensuring timely, transparent delivery at every stage.",
  },
  {
    icon: "🤝",
    title: "Dedicated Teamwork",
    desc: "Empowering our professionals to craft personalized, stress-free solutions tailored to every unique move.",
  },
] as const;

const VISION_CITIES = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai",
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
  "USA", "Canada", "UK", "Australia", "UAE",
] as const;

// ── Intersection Observer hook — animate sections on scroll ──────────────────
function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("vm-revealed");
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

// ── Sub-components ────────────────────────────────────────────────────────────

const PillarCard = memo(
  ({ pillar, index }: { pillar: (typeof MISSION_PILLARS)[number]; index: number }) => (
    <div
      className="vm-pillar"
      style={{ animationDelay: `${index * 0.08}s` }}
      aria-label={pillar.title}
    >
      <span className="vm-pillar__icon" aria-hidden="true">{pillar.icon}</span>
      <div className="vm-pillar__body">
        <strong>{pillar.title}</strong>
        <p>{pillar.desc}</p>
      </div>
    </div>
  )
);
PillarCard.displayName = "PillarCard";

const CityTag = memo(({ city }: { city: string }) => (
  <span className="vm-city-tag">{city}</span>
));
CityTag.displayName = "CityTag";

// ── Page component ────────────────────────────────────────────────────────────

const VisionandMission = () => {
  const visionRef  = useScrollReveal();
  const missionRef = useScrollReveal();

  return (
    <>
      <Helmet>
        <title>Vision &amp; Mission | Gati Shifting Packers</title>
        <meta
          name="description"
          content="Discover the vision and mission of Gati Shifting Packers — our commitment to quality relocation services and customer satisfaction."
        />
        <meta
          name="keywords"
          content="vision, mission, Gati Shifting Packers, relocation services, customer satisfaction, company values"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Gati Shifting Packers" />

        {/* Open Graph */}
        <meta property="og:title" content="Vision &amp; Mission | Gati Shifting Packers" />
        <meta
          property="og:description"
          content="Discover the vision and mission of Gati Shifting Packers — our commitment to quality relocation services and customer satisfaction."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gatishiftingpackers.com/vission-mission" />
        <meta property="og:site_name" content="Gati Shifting Packers" />
        <meta property="og:image" content="https://gatishiftingpackers.com/metaImg.png" />
        <meta property="og:image:alt" content="Vision &amp; Mission — Gati Shifting Packers" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vision &amp; Mission | Gati Shifting Packers" />
        <meta
          name="twitter:description"
          content="Discover the vision and mission of Gati Shifting Packers — our commitment to quality relocation services and customer satisfaction."
        />
        <meta name="twitter:image" content="https://gatishiftingpackers.com/metaImg.png" />
        <meta httpEquiv="content-language" content="en" />
        <link rel="canonical" href="https://gatishiftingpackers.com/vission-mission" />
      </Helmet>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="vm-hero" role="banner">
        <div className="vm-hero__overlay" aria-hidden="true" />
        <div className="vm-hero__content">
          <span className="vm-hero__eyebrow">Who We Are &amp; Where We're Going</span>
          <h1>Vision &amp; Mission</h1>
          <p>
            Built on trust. Driven by purpose. Committed to every move we make.
          </p>
        </div>
        <div className="vm-hero__scroll-hint" aria-hidden="true">
          <span />
        </div>
      </div>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <section className="vm-section" aria-label="Vision and Mission">

        {/* ── Vision block ─────────────────────────────────────────────── */}
        <div className="vm-block vm-block--vision vm-reveal" ref={visionRef}>
          <div className="vm-block__badge" aria-hidden="true">V</div>
          <div className="vm-block__inner">
            <span className="vm-label">Our Vision</span>
            <h2>India's Most Trusted Relocation Partner</h2>
            <p>
              At Gati Shifting Packers, our vision is to become the most trusted
              and customer-focused relocation partner in India and across the globe.
              We aim to set new standards in the packing and moving industry by
              combining advanced technology, professional expertise, and a strong
              commitment to customer satisfaction.
            </p>
            <p>
              We aspire to be the first choice for relocation services — whether
              shifting within major Indian cities or moving internationally.
            </p>

            <div className="vm-cities" aria-label="Cities we serve">
              {VISION_CITIES.map((city) => (
                <CityTag key={city} city={city} />
              ))}
              <span className="vm-city-tag vm-city-tag--more">+100 more</span>
            </div>
          </div>
        </div>

        {/* ── Divider ──────────────────────────────────────────────────── */}
        <div className="vm-divider" aria-hidden="true">
          <span className="vm-divider__line" />
          <span className="vm-divider__icon">✦</span>
          <span className="vm-divider__line" />
        </div>

        {/* ── Mission block ─────────────────────────────────────────────── */}
        <div className="vm-block vm-block--mission vm-reveal" ref={missionRef}>
          <div className="vm-block__badge" aria-hidden="true">M</div>
          <div className="vm-block__inner">
            <span className="vm-label">Our Mission</span>
            <h2>Safe, Reliable &amp; Stress-Free Relocation</h2>
            <p>
              Our mission is to deliver safe, reliable, and stress-free relocation
              experiences to individuals, families, and businesses — achieved
              through five core commitments:
            </p>

            <div className="vm-pillars">
              {MISSION_PILLARS.map((pillar, i) => (
                <PillarCard key={pillar.title} pillar={pillar} index={i} />
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ── Below-fold (lazy loaded) ──────────────────────────────────────── */}
      <Suspense fallback={<div className="vm-loading" aria-hidden="true" />}>
        <ReviewVideo />
        <GetInTouch />
        <AwardCertification />
        <TrustUsSection />
        <BrandList />
        <FAQList />
      </Suspense>
    </>
  );
};

export default memo(VisionandMission);