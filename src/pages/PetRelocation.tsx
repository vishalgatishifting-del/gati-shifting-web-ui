import { memo, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import petrelocationImg from "../assets/PetRelocation/petrelocation.jpg";
import ReviewDialog from "../components/ReviewDialog";
import "./PetRelocation.scss";
import { siteConfig } from "../config/Company";

// Lazy-load heavy below-fold components
const ReviewVideo = lazy(() => import("../components/ReviewVideos"));
const GetInTouch = lazy(() => import("../components/GetInTouch"));
const AwardCertification = lazy(() => import("../components/AwardCertification"));
const TrustUsSection = lazy(() => import("../components/TrustUsSection"));
const BrandList = lazy(() => import("../components/BrandsList"));
const FAQList = lazy(() => import("../components/FAQList"));

// ─── Static data (outside component to avoid re-creation on renders) ───────────

const BOOKING_STEPS = [
  {
    icon: "📋",
    step: "01",
    title: "Share Details & Get Quote",
    desc: "Provide your moving requirements — pet type, origin, and destination. Receive a fair, transparent quote tailored to your needs.",
  },
  {
    icon: "📅",
    step: "02",
    title: "Confirm Booking",
    desc: "Choose your preferred pickup date and secure your slot with a small advance payment, adjusted at final settlement.",
  },
  {
    icon: "🔧",
    step: "03",
    title: "Safe Pickup & Packing",
    desc: "Our trained team arrives with climate-safe carriers and proper documentation, ensuring your pet is comfortable from the start.",
  },
  {
    icon: "📄",
    step: "04",
    title: "Invoice & Settlement",
    desc: "Receive a detailed, itemised invoice. Pay the remaining balance after deducting your advance — no hidden charges.",
  },
  {
    icon: "🚛",
    step: "05",
    title: "Transport & Live Tracking",
    desc: "Your pet is dispatched safely. Track the journey in real-time with live updates straight to your phone.",
  },
  {
    icon: "🏠",
    step: "06",
    title: "Delivery & Feedback",
    desc: "After safe delivery, share your experience to help us serve every pet owner better.",
    hasReviewDialog: true,
  },
];

const PET_TYPES = [
  { emoji: "🐕", label: "Dogs", desc: "All breeds, small to large" },
  { emoji: "🐈", label: "Cats", desc: "Domestic cats of all sizes" },
  { emoji: "🐇", label: "Small Pets", desc: "Rabbits, birds & more" },
];

const WHY_CHOOSE = [
  {
    icon: "🌡️",
    title: "Climate-Controlled Travel",
    desc: "Pets travel in secure, temperature-regulated carriers designed for their comfort.",
  },
  {
    icon: "🤝",
    title: "Experienced Handlers",
    desc: "Trained professionals minimise stress and ensure safe handling at every stage.",
  },
  {
    icon: "📑",
    title: "Health & Documentation",
    desc: "Assistance with vaccination certificates, travel permits, and vet coordination.",
  },
  {
    icon: "📱",
    title: "Real-Time Tracking",
    desc: "Stay updated on your pet's journey with live status notifications.",
  },
  {
    icon: "🛡️",
    title: "End-to-End Care",
    desc: "Complete management from pickup to doorstep delivery — you just relax.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    desc: "Competitive rates with no hidden fees. What you see is what you pay.",
  },
];

const COST_FACTORS = [
  {
    num: "01",
    title: "Distance",
    desc: "Longer journeys require additional travel time, logistics, and fuel — all reflected in the quote.",
  },
  {
    num: "02",
    title: "Pet Type & Size",
    desc: "Larger pets or multiple animals need bigger, specialised carriers and additional handling care.",
  },
  {
    num: "03",
    title: "Travel Method",
    desc: "Air transport, ground, or a combination — each has its own cost profile based on speed and safety needs.",
  },
  {
    num: "04",
    title: "Documentation Needs",
    desc: "Vaccination certificates, permits, and veterinary pre-travel checks may add slightly to the total.",
  },
  {
    num: "05",
    title: "Timing & Urgency",
    desc: "Peak seasons or last-minute relocations typically cost more than well-planned, pre-scheduled moves.",
  },
];


// ─── Sub-components (memoised for performance) ────────────────────────────────

const StepCard = memo(({ step }: { step: (typeof BOOKING_STEPS)[0] }) => (
  <div className="step-card">
    <div className="step-number">{step.step}</div>
    <div className="step-icon">{step.icon}</div>
    <h3>{step.title}</h3>
    <p>{step.desc}</p>
    {step.hasReviewDialog && (
      <div className="step-cta">
        <ReviewDialog />
      </div>
    )}
  </div>
));
StepCard.displayName = "StepCard";

const PetTypeCard = memo(({ pet }: { pet: (typeof PET_TYPES)[0] }) => (
  <div className="pet-type-card">
    <span className="pet-emoji">{pet.emoji}</span>
    <strong>{pet.label}</strong>
    <span>{pet.desc}</span>
  </div>
));
PetTypeCard.displayName = "PetTypeCard";

const WhyCard = memo(({ item }: { item: (typeof WHY_CHOOSE)[0] }) => (
  <div className="why-card">
    <span className="why-icon">{item.icon}</span>
    <h3>{item.title}</h3>
    <p>{item.desc}</p>
  </div>
));
WhyCard.displayName = "WhyCard";

const CostFactorItem = memo(
  ({ factor }: { factor: (typeof COST_FACTORS)[0] }) => (
    <div className="cost-factor">
      <div className="factor-num">{factor.num}</div>
      <div className="factor-body">
        <strong>{factor.title}</strong>
        <p>{factor.desc}</p>
      </div>
    </div>
  )
);
CostFactorItem.displayName = "CostFactorItem";

// ─── Page component ──────────────────────────────────────────────────────────

const PetRelocation = () => (
  <>
    <Helmet>
      <title>Pet Relocation Services | Gati Shifting Packers</title>
      <meta
        name="description"
        content="Safe and reliable Pet Relocation Services by Gati Shifting Packers. Expert care for transporting your pets across India with comfort and security."
      />
      <meta
        name="keywords"
        content="Gati Shifting Packers pet relocation, pet movers, pet transportation services, pet moving India, safe pet relocation, pet relocation, pet shifting, animal transportation, pet movers, pet travel services, pet relocation company, pet transport in India, international pet relocation, domestic pet transport, safe pet relocation, pet relocation by Gati Shifting Packers, dog and cat relocation services, affordable pet moving services, pet relocation experts near me, reliable pet shifting company, pet transport service providers, best pet movers in India, pet travel assistance, Gati Shifting Packers pet relocation reviews, door-to-door pet transport services, stress-free pet relocation solutions, professional pet transport company, animal relocation specialists, pet relocation packages India, pan-India pet shifting services"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Abhishek" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Pet Relocation Services | Gati Shifting Packers"
      />
      <meta
        property="og:description"
        content="Trust Gati Shifting Packers for safe and stress-free pet relocation across India. Expert handling for all types of pets."
      />
      <meta
        property="og:url"
        content="https://gatishiftingpackers.com/pet-relocation"
      />
      <meta property="og:site_name" content="Gati Shifting Packers" />
      <meta property="og:image" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Pet Relocation Services | Gati Shifting Packers"
      />
      <meta
        name="twitter:description"
        content="Reliable pet relocation services by Gati Shifting Packers. Ensure the safe and comfortable transport of your pets anywhere in India."
      />
      <meta name="twitter:image" content="" />
      <meta httpEquiv="Content-Language" content="en" />
      <link
        rel="canonical"
        href="https://gatishiftingpackers.com/pet-relocation"
      />
    </Helmet>

    {/* ── Hero Banner ─────────────────────────────────────────── */}
    <div className="pr-hero">
      <div className="pr-hero__overlay" />
      <div className="pr-hero__content">
        <span className="pr-hero__badge">India's Trusted Pet Movers</span>
        <h1>Pet Relocation Services</h1>
        <p>
          Safe, stress-free transportation for your beloved pets — anywhere
          across India.
        </p>
      </div>
    </div>

    {/* ── Intro ───────────────────────────────────────────────── */}
    <section className="pr-section pr-intro">
      <div className="pr-container">
        <div className="pr-intro__grid">
          <div className="pr-intro__text">
            <span className="section-label">About Our Service</span>
            <h2>Gati Shifting Packers — Trusted Pet Relocation Across India</h2>
            <p>
              We are a reliable name in pet relocation services across India,
              ensuring safe, comfortable, and stress-free travel for your
              beloved companions. Whether you're moving to a new city or state,
              our professional team handles every aspect of your pet's journey
              with utmost care.
            </p>
            <p>
              With experience in relocating cats, dogs, and other domestic
              animals, we are known for safe handling, timely updates, and
              compassionate care — including real-time tracking, health check
              coordination, and transport that meets all safety standards.
            </p>
            <div className="pr-intro__stats">
              <div className="stat">
                <strong>{siteConfig.stats.totalPetRelocated}</strong>
                <span>Pets Relocated</span>
              </div>
              <div className="stat">
                <strong>{siteConfig.stats.totalCitiesCovered}</strong>
                <span>Cities Covered</span>
              </div>
              <div className="stat">
                <strong>98%</strong>
                <span>Happy Pet Parents</span>
              </div>
            </div>
          </div>
          <div className="pr-intro__image">
            <img
              src={petrelocationImg}
              alt="Pet being safely transported by Gati Shifting Packers"
              loading="lazy"
              // width={580}
              // height={400}
            />
          </div>
        </div>
      </div>
    </section>

    {/* ── Pet Types ───────────────────────────────────────────── */}
    <section className="pr-section pr-pets">
      <div className="pr-container">
        <span className="section-label">Who We Relocate</span>
        <h2>Types of Pets We Transport</h2>
        <div className="pr-pets__grid">
          {PET_TYPES.map((pet) => (
            <PetTypeCard key={pet.label} pet={pet} />
          ))}
        </div>
      </div>
    </section>

    {/* ── Booking Steps ───────────────────────────────────────── */}
    <section className="pr-section pr-steps">
      <div className="pr-container">
        <span className="section-label">How It Works</span>
        <h2>Simple 6-Step Booking Process</h2>
        <p className="section-subtitle">
          From quote to doorstep delivery — we handle every step with care.
        </p>
        <div className="pr-steps__grid">
          {BOOKING_STEPS.map((step) => (
            <StepCard key={step.step} step={step} />
          ))}
        </div>
      </div>
    </section>

    {/* ── Why Choose ──────────────────────────────────────────── */}
    <section className="pr-section pr-why">
      <div className="pr-container">
        <span className="section-label">Why Us</span>
        <h2>Why Choose Professional Pet Relocation?</h2>
        <div className="pr-why__grid">
          {WHY_CHOOSE.map((item) => (
            <WhyCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>

    {/* ── Cost Factors ────────────────────────────────────────── */}
    <section className="pr-section pr-cost">
      <div className="pr-container">
        <div className="pr-cost__inner">
          <div className="pr-cost__header">
            <span className="section-label">Pricing Transparency</span>
            <h2>Factors Affecting Relocation Cost</h2>
            <p>
              We offer competitive, transparent pricing. Here's what influences
              your final quote — no surprises.
            </p>
          </div>
          <div className="pr-cost__list">
            {COST_FACTORS.map((factor) => (
              <CostFactorItem key={factor.num} factor={factor} />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── Below-fold (lazy loaded) ─────────────────────────────── */}
    <Suspense fallback={<div className="pr-loading" aria-hidden="true" />}>
      <ReviewVideo />
      <GetInTouch />
      <AwardCertification />
      <TrustUsSection />
      <BrandList />
      <FAQList />
    </Suspense>

  </>
);

export default memo(PetRelocation);