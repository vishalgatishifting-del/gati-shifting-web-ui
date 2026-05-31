import React, { useState, useEffect, useRef, memo, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import "./Home.scss";

import ZohoForm from "../components/ZohoForm";
import googleRatingImg from "../assets/HomePage/ghs-google-rating.png";
import Counter from "../components/Counter";
import { Link } from "react-router-dom";

import HomeSlider from "../components/HomeSlider";
import ServicesCard from "../components/ServicesCard";
import BadgeSection from "../components/Badges";

import domesticPng from "../assets/HomePage/domestic.webp";
import carPng from "../assets/HomePage/car.webp";
import flightPng from "../assets/HomePage/flight.webp";
import internationalPng from "../assets/HomePage/international.webp";
import warehousePng from "../assets/HomePage/warehouseicon.webp";
import bikePng from "../assets/HomePage/bike.webp";

import truckImg from "../assets/HomePage/truck.webp";
import carLoadingImg from "../assets/HomePage/carLoading.webp";
import shipImg from "../assets/HomePage/ship.webp";
import ship2 from "../assets/HomePage/ship2.webp";
import airplaneImg from "../assets/HomePage/airplane.webp";
import truck2 from "../assets/HomePage/truck2.webp";

// Slider images
import petSlider from "../assets/HomePage/slide2.webp";
import bike from "../assets/HomePage/slide3.webp";
import house from "../assets/HomePage/slide4.webp";
import car from "../assets/HomePage/slide1.webp";
import slide5 from "../assets/HomePage/slide5.webp";



import { siteConfig } from "../config/Company";

import ExpandableImagePanel from "../components/ExpandableImageSlider";
import WhatWeCaterTo from "../components/WhatWeCare";
const ReviewVideo = lazy(() => import("../components/ReviewVideos"));
const OfficeLocation = lazy(() => import("../components/OfficeLocation"));
const TrustUsSection = lazy(() => import("../components/TrustUsSection"));
const FAQList = lazy(() => import("../components/FAQList"));
const ProductImageSlider = lazy(() => import("../components/PackingImageSlider"));
const CompanyDescription = lazy(() => import("../components/CompanyDescription"));

function useLazyMount(rootMargin = "300px") {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || shouldMount) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldMount(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, shouldMount]);

  return { sentinelRef, shouldMount };
}

// Icons 
const IconForm = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);
const IconQuote = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
);
const IconCompare = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);
const IconTruck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <path d="M16 8h4l3 5v3h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

// Steps data
const STEPS = [
  { number: "01", icon: <IconForm />, title: "Fill Your Enquiry Form", description: "Share your moving requirements and get connected with verified movers instantly.", color: "#1a6ef5" },
  { number: "02", icon: <IconQuote />, title: "Get Quotes in Minutes", description: "Receive competitive quotes from trusted and verified relocation partners.", color: "#0ea5e9" },
  { number: "03", icon: <IconCompare />, title: "Compare and Choose", description: "Compare pricing, reviews, and profiles to select the best moving service.", color: "#8b5cf6" },
  { number: "04", icon: <IconTruck />, title: "Enjoy Safe Relocation", description: "Sit back and relax while professionals handle your relocation safely.", color: "#10b981" },
] as const;

// StepCard
const StepCard = memo(({ number, icon, title, description, color, index }: {
  number: string; icon: React.ReactNode; title: string;
  description: string; color: string; index: number;
}) => (
  <div
    className="ss-card"
    style={{ "--card-color": color, "--delay": `${index * 0.1}s` } as React.CSSProperties}
  >
    {index < 3 && <span className="ss-card__connector" aria-hidden />}
    <div className="ss-card__top">
      <div className="ss-card__icon-wrap">{icon}</div>
      <span className="ss-card__number">{number}</span>
    </div>
    <h3 className="ss-card__title">{title}</h3>
    <p className="ss-card__desc">{description}</p>
    <div className="ss-card__glow" aria-hidden />
  </div>
));
StepCard.displayName = "StepCard";


const SLIDER_IMAGES = [
  { img: car, heading: "Trusted Movers & Packers", text: "As a trusted movers and packers company, we ensure protective wrapping, proper anchoring, and smooth doorstep pickup and delivery." },
  { img: house, heading: "Expert Team", text: "Our movers and packers team works with precision, ensuring protective wrapping, proper anchoring, and smooth doorstep delivery." },
  { img: bike, heading: "House Shifting", text: "Smooth and reliable house shifting with professional packing, loading, transport, and setup at your new home." },
  { img: petSlider, heading: "Bike Transport", text: "Bike relocation with protective wrapping, proper anchoring, and doorstep pickup and delivery." },
  { img: slide5, heading: "24/7 Available", text: "We provide reliable movers and packers services with 24/7 availability for your convenience." },
];


// Main component
interface Props {
  successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<Props> = ({ successCondition }) => {
  const [activeBtn, setActiveBtn] = useState("Domestic Moving");
  const stepsRef = useRef<HTMLElement>(null);

  const companyDesc = useLazyMount("400px");
  const imageSlider = useLazyMount("300px");
  const reviewVideo = useLazyMount("300px");
  const officeLocation = useLazyMount("200px");
  const trustSection = useLazyMount("200px");
  const faqSection = useLazyMount("200px");

  useEffect(() => {
    const section = stepsRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>(".ss-card");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("ss-card--visible");
          io.unobserve(entry.target);
        }
      }),
      { threshold: 0.15 }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Gati Shifting Packers | Trusted Packers and Movers - 15% off</title>
        <meta name="description" content="Gati Shifting Packers is a trusted Packers and Movers company in India offering safe, affordable home shifting, office relocation, car & bike transport, and warehouse storage services nationwide." />
        <meta name="keywords" content="Packers and Movers India, Home Shifting Services, Office Relocation, Car Transport, Bike Transport, Warehouse Storage, Gati Shifting Packers" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content="en" />
        <meta property="og:title" content="Packers and Movers in India | Gati Shifting Packers" />
        <meta property="og:description" content="Trusted Packers and Movers in India for home shifting, office relocation, vehicle transport and storage services." />
        <meta property="og:image" content="https://gatishiftingpackers.com/metaImg.png" />
        <meta property="og:url" content="https://gatishiftingpackers.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Packers and Movers in India | Gati Shifting Packers" />
        <meta name="twitter:description" content="Safe, affordable and professional Packers and Movers services across India." />
        <meta name="twitter:image" content="https://gatishiftingpackers.com/metaImg.png" />
        <link rel="canonical" href="https://gatishiftingpackers.com/" />
        <link
          rel="preload"
          as="image"
          href={car}
          // @ts-ignore 
          fetchpriority="high"
        />
      </Helmet>
      <HomeSlider />

      {/* Service tab */}
      <div className="service-tab">
        <div className="tabs">
          {[
            { label: "Domestic Moving", src: domesticPng },
            { label: "Car Moving", src: carPng },
            { label: "Bike Moving", src: bikePng },
            { label: "Flight Cargo", src: flightPng },
            { label: "International Moving", src: internationalPng },
            { label: "Storage", src: warehousePng },
          ].map(({ label, src }) => (
            <button
              key={label}
              className={activeBtn === label ? "active" : ""}
              onClick={() => setActiveBtn(label)}
              aria-label={label}
            >
              <img src={src} alt={label} loading="eager" width={100} height={100} />
            </button>
          ))}
        </div>
        <div className="form-area">
          <h3>Get a free <span>{activeBtn}</span> Quote</h3>
          <i>We'll call you within 15 minutes</i>
          <ZohoForm successCondition={successCondition} />
        </div>
      </div>

      <BadgeSection />

      {/* Counter */}
      <section id="counter-section">
        <div className="cs-inner">
          <div className="cs-label">Our Impact in Numbers</div>
          <div className="container">
            {[
              {
                end: 132858,
                suffix: "+",
                label: "Homes Relocated",
                sub: "Successfully delivered",
                icon: "🏠",
                idx: 0,
              },
              {
                end: 600,
                suffix: "+",
                label: "Cities Covered",
                sub: "Pan-India network",
                icon: "📍",
                idx: 1,
              },
              {
                end: 3548,
                suffix: "+",
                label: "Verified Experts",
                sub: "Background-checked pros",
                icon: "✅",
                idx: 2,
              },
              {
                end: 99,
                suffix: "%",
                label: "Satisfaction Rate",
                sub: "Happy customers",
                icon: "⭐",
                idx: 3,
              },
            ].map(({ end, suffix, label, sub, icon, idx }) => (
              <div key={label} className="card" style={{ "--i": idx } as React.CSSProperties}>
                <div className="card-top">
                  <span className="card-icon">{icon}</span>
                  <Link to="/contact-us" className="card-arrow" aria-label={`Learn more about ${label}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </Link>
                </div>
                <div className="card-mid">
                  <Counter end={end} suffix={suffix} />
                </div>
                <div className="card-bot">
                  <p className="card-label">{label}</p>
                  <span className="card-sub">{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            <WhatWeCaterTo />
      {/* CompanyDescription */}
      <div ref={companyDesc.sentinelRef}>
        {companyDesc.shouldMount && (
          <Suspense fallback={<div style={{ minHeight: 200 }} />}>
            <CompanyDescription />
          </Suspense>
        )}
      </div>

      {/* ProductImageSlider */}
      <div ref={imageSlider.sentinelRef}>
        {imageSlider.shouldMount && (
          <Suspense fallback={<div style={{ minHeight: 300 }} />}>
            <ProductImageSlider />
          </Suspense>
        )}
      </div>

      {/* ReviewVideo */}
      <div ref={reviewVideo.sentinelRef}>
        {reviewVideo.shouldMount && (
          <Suspense fallback={<div style={{ minHeight: 300 }} />}>
            <ReviewVideo />
          </Suspense>
        )}
      </div>

      <section className="ss-section" ref={stepsRef} aria-labelledby="ss-heading">
        <div className="ss-orb ss-orb--1" aria-hidden />
        <div className="ss-orb ss-orb--2" aria-hidden />
        <div className="ss-orb ss-orb--3" aria-hidden />
        <div className="ss-container">
          <div className="ss-header">
            <p className="ss-header__eyebrow">How It Works</p>
            <h2 className="ss-header__title" id="ss-heading">
              4 Easy Steps to Hire{" "}
              <span className="ss-header__highlight">Reliable Movers</span>
            </h2>
            <p className="ss-header__sub">Simple, fast and secure process to book trusted relocation services</p>
          </div>
          <div className="ss-grid">
            {STEPS.map((step, i) => (
              <StepCard key={step.number} {...step} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ExpandableImagePanel items={SLIDER_IMAGES} />

      {/* Google Review Section */}
      <section className="gr-section">
        <div className="gr-container">
          <div className="gr-text">
            <p className="gr-text__eyebrow">Customer Reviews</p>
            <h2 className="gr-text__title">
              Trusted by Thousands of{" "}
              <span className="gr-text__highlight">Happy Customers</span>
            </h2>
            <p className="gr-text__desc">
              Real experiences from customers who trusted Gati Shifting Packers for safe, timely, and hassle-free relocation across India.
            </p>
            <Link to="/review" className="gr-text__btn">
              Leave Your Review
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className="gr-card">
            <div className="gr-card__glow" aria-hidden />
            <div className="gr-card__badge">
              <img src={googleRatingImg} alt="Google Rating" loading="lazy" decoding="async" width={48} height={48} />
              <span>Google Reviews</span>
            </div>
            <div className="gr-card__score">
              <span className="gr-card__number">{siteConfig.stats.customerRating}</span>
              <div className="gr-card__stars" aria-label="4.9 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="gr-card__star" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="gr-card__count">Based on 1,000+ Verified Reviews</p>
            <p className="gr-card__desc">Customers love our fast, secure and professional moving services.</p>
            <div className="gr-card__divider" aria-hidden />
            <div className="gr-card__badges">
              {[
                { icon: "✓", label: "Verified Reviews" },
                { icon: "🔒", label: "100% Trusted" },
                { icon: "🏆", label: "Top Rated" },
              ].map(({ icon, label }) => (
                <div className="gr-card__trust" key={label}>
                  <span className="gr-card__trust-icon">{icon}</span>
                  <span className="gr-card__trust-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TrustUsSection */}
      <div ref={trustSection.sentinelRef}>
        {trustSection.shouldMount && (
          <Suspense fallback={<div style={{ minHeight: 200 }} />}>
            <TrustUsSection />
          </Suspense>
        )}
      </div>

      <ServicesCard images={[truckImg, carLoadingImg, shipImg, ship2, airplaneImg, truck2]} />

      {/* OfficeLocation */}
      <div ref={officeLocation.sentinelRef}>
        {officeLocation.shouldMount && (
          <Suspense fallback={<div style={{ minHeight: 300 }} />}>
            <OfficeLocation />
          </Suspense>
        )}
      </div>

      {/* FAQList */}
      <div ref={faqSection.sentinelRef}>
        {faqSection.shouldMount && (
          <Suspense fallback={<div style={{ minHeight: 200 }} />}>
            <FAQList />
          </Suspense>
        )}
      </div>

    </>
  );
};

export default Home;