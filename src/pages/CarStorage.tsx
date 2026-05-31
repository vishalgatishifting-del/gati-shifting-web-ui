import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// MUI Icons
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SecurityIcon from "@mui/icons-material/Security";
import FireExtinguisherIcon from "@mui/icons-material/FireExtinguisher";
import PestControlIcon from "@mui/icons-material/PestControl";
import VideocamIcon from "@mui/icons-material/Videocam";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Assets — paths unchanged, only component logic is rewritten
import heroSectionImg from "../assets/CarStorage/hero-section-img.png";

import abhibus_icon from "../assets/Storage/Abhibus-icon.webp";
import AIMMAF_icon from "../assets/Storage/AIMMAF-icon.webp";
import cartello_icon from "../assets/Storage/cartello-icon.webp";
import cmo_axis_icon from "../assets/Storage/cmo-axis-icon.webp";
import edgar_icon from "../assets/Storage/edgar-icon.webp";
import ezetap_icon from "../assets/Storage/ezetap-icon.webp";
import greencube_icon from "../assets/Storage/greencube-icon.webp";
import hubler_icon from "../assets/Storage/hubler-icon.webp";
import intelligentia_it_systems_icon from "../assets/Storage/intelligentia-it-systems-icon.webp";
import ixigo_icon from "../assets/Storage/ixigo-icon.webp";
import qwikcliver_icon from "../assets/Storage/qwikcliver-icon.webp";
import rapyder_icon from "../assets/Storage/rapyder-icon.webp";
import rotzler_icon from "../assets/Storage/rotzler-icon.webp";
import ToneTag_icon from "../assets/Storage/ToneTag-icon.webp";
import toyota_tsusho_icon from "../assets/Storage/toyota-tsusho-icon.webp";
import HDFC_icon from "../assets/Storage/HDFC-icon.webp";

import sampleImg1 from "../assets/CarStorage/sample1.png";
import sampleImg2 from "../assets/CarStorage/sample2.png";
import sampleImg3 from "../assets/CarStorage/sample3.png";
import sampleImg4 from "../assets/CarStorage/sample4.png";
import sampleImg5 from "../assets/CarStorage/sample5.png";
import sampleImg6 from "../assets/CarStorage/sample6.png";
import sampleImg7 from "../assets/CarStorage/sample7.png";
import sampleImg8 from "../assets/CarStorage/sample8.png";

import priceImg from "../assets/CarStorage/priceImg.jpeg";
import "./carStorage.scss"
import { siteConfig } from "../config/Company";
// ─── Types ───────────────────────────────────────────────────────────────────

interface StatItem {
  value: string;
  label: string;
}

interface FeatureCard {
  icon: string;
  category: string;
  title: string;
  link: string;
  accent: string;
}

interface SafetyFeature {
  Icon: React.ElementType;
  label: string;
  description: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS: StatItem[] = [
  { value: siteConfig.stats.totalVerifiedProfessionals, label: "Verified Experts" },
  { value: siteConfig.stats.totalHappyCustomers, label: "Happy Customers" },
  { value: siteConfig.stats.totalYearOfExperience, label: "Years of Expertise" },
];

const BRANDS = [
  { src: abhibus_icon, alt: "Abhibus" },
  { src: AIMMAF_icon, alt: "AIMMAF" },
  { src: cartello_icon, alt: "Cartello" },
  { src: cmo_axis_icon, alt: "CMO Axis" },
  { src: edgar_icon, alt: "Edgar" },
  { src: ezetap_icon, alt: "Ezetap" },
  { src: greencube_icon, alt: "Greencube" },
  { src: hubler_icon, alt: "Hubler" },
  { src: intelligentia_it_systems_icon, alt: "Intelligentia IT Systems" },
  { src: ixigo_icon, alt: "Ixigo" },
  { src: qwikcliver_icon, alt: "Qwikcliver" },
  { src: rapyder_icon, alt: "Rapyder" },
  { src: rotzler_icon, alt: "Rotzler" },
  { src: ToneTag_icon, alt: "ToneTag" },
  { src: toyota_tsusho_icon, alt: "Toyota Tsusho" },
  { src: HDFC_icon, alt: "HDFC" },
];

const FEATURE_CARDS: FeatureCard[] = [
  { icon: "💲", category: "TRANSPARENT", title: "No Hidden Fees", link: "/contact-us", accent: "#546BFF" },
  { icon: "🔓", category: "Flexible", title: "No Deposit Required", link: "/contact-us", accent: "#F0C419" },
  { icon: "🛡️", category: "Protected", title: "Free Insurance", link: "/contact-us", accent: "#E040FB" },
  { icon: "🚚", category: "Convenient", title: "Doorstep Pickup & Delivery", link: "/contact-us", accent: "#FF5252" },
  { icon: "📉", category: "Affordable", title: "Long-Term Discounts", link: "/contact-us", accent: "#69F0AE" },
  { icon: "👥", category: "Trusted", title: "1 Lakh+ Happy Customers", link: "/contact-us", accent: "#FFB74D" },
  { icon: "🎥", category: "Secure", title: "24/7 Security Monitoring", link: "/contact-us", accent: "#40E0D0" },
  { icon: "🧹", category: "Hygienic", title: "Pest-Free Warehouses", link: "/contact-us", accent: "#80DEEA" },
  { icon: "🔥", category: "Safety", title: "Fire Safety Enabled", link: "/contact-us", accent: "#FF7043" },
  { icon: "🌡️", category: "Preserved", title: "Climate-Controlled Storage", link: "/contact-us", accent: "#CE93D8" },
  { icon: "📦", category: "Packed Right", title: "Custom Packing Services", link: "/contact-us", accent: "#A5D6A7" },
  { icon: "🤖", category: "Smart", title: "AI-Powered Tracking", link: "/contact-us", accent: "#90CAF9" },
  { icon: "🏆", category: "Top Rated", title: "India's No. 1 Storage", link: "/contact-us", accent: "#FFCA28" },
  { icon: "🌆", category: "Pan India", title: "11 Cities Covered", link: "/contact-us", accent: "#4FC3F7" },
  { icon: "🔓", category: "Flexible Terms", title: "No Lock-In Contracts", link: "/contact-us", accent: "#C5E1A5" },
  { icon: "🤝", category: "Best Value", title: "Price Match Guarantee", link: "/contact-us", accent: "#80CBC4" },
  { icon: "📜", category: "Certified", title: "ISO Certified Storage", link: "/contact-us", accent: "#E1BEE7" },
  { icon: "⭐", category: "Rated 4.9", title: "Customer Favorite", link: "/contact-us", accent: "#FFF176" },
  { icon: "💬", category: "Support", title: "Live Chat & Support", link: "/contact-us", accent: "#B2DFDB" },
];

const SAFETY_FEATURES: SafetyFeature[] = [
  { Icon: SecurityIcon, label: "Insurance Coverage", description: "Full vehicle insurance included at no extra cost" },
  { Icon: FireExtinguisherIcon, label: "Fire Control", description: "Advanced fire suppression systems installed" },
  { Icon: PestControlIcon, label: "Pest Control", description: "Regular pest-free treatment across all units" },
  { Icon: VideocamIcon, label: "CCTV Monitoring", description: "HD surveillance covering every inch 24/7" },
  { Icon: LocalShippingIcon, label: "24/7 Security", description: "Trained security guards on-site round the clock" },
];

const GALLERY_IMAGES = [
  sampleImg1, sampleImg2, sampleImg3, sampleImg4,
  sampleImg5, sampleImg6, sampleImg7, sampleImg8,
];

// ─── Custom Hook: Intersection Observer for scroll animations ─────────────────

function useInView(threshold = 0.15): [React.RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement>(null!);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

// ─── Sub-components ──────────────────────────────────────────────────────────

const ActionButtons: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`cs-action-buttons ${className}`}>
    <a className="cs-btn cs-btn--primary" href={`tel:${siteConfig.phone}`}>
      <LocalPhoneIcon fontSize="small" />
      <span>{siteConfig.phone}</span>
    </a>
    <Link className="cs-btn cs-btn--outline" to="/contact-us">
      Get Free Quote <ArrowForwardIcon fontSize="small" />
    </Link>
  </div>
);

// ─── Main Component ──────────────────────────────────────────────────────────

const CarStorage: React.FC = () => {
  const [heroRef, heroInView] = useInView(0.1);
  const [aboutRef, aboutInView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.1);
  const [safetyRef, safetyInView] = useInView(0.1);
  const [galleryRef, galleryInView] = useInView(0.05);

  return (
    <>
      <Helmet>
        <title>Car Storage Services | Gati Shifting Packers – Secure Vehicle Storage</title>
        <meta name="description" content="Gati Shifting Packers offers secure car storage services including short-term and long-term vehicle parking, monitored storage facilities, and safe handling for cars and other vehicles." />
        <meta name="keywords" content="Car storage service, Vehicle storage solutions, Car parking storage, Secure car storage, Packers and movers car storage, Vehicle warehouse, Long term car storage, Short term car storage, Gati Shifting Packers" />
        <meta name="author" content="Gati Shifting Packers" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Car Storage Services – Gati Shifting Packers" />
        <meta property="og:description" content="Discover secure and reliable car storage services by Gati Shifting Packers – vehicle storage, monitored parking, and safe handling for your car or vehicle." />
        <meta property="og:url" content="https://gatishiftingpackers.com/car-storage" />
        <meta property="og:site_name" content="Gati Shifting Packers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Car Storage Services | Gati Shifting Packers" />
        <meta name="twitter:description" content="Secure and reliable car storage services for long and short term storage of vehicles by Gati Shifting Packers." />
        <link rel="canonical" href="https://gatishiftingpackers.com/car-storage" />
      </Helmet>

      {/* ── Page Header ── */}
      <div className="cs-page-header">
        <div className="cs-page-header__overlay" />
        <div className="cs-page-header__content">
          <p className="cs-page-header__breadcrumb">Home / Services</p>
          <h1 className="cs-page-header__title">Car Storage</h1>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section
        className={`cs-hero ${heroInView ? "cs-anim--visible" : ""}`}
        ref={heroRef as React.RefObject<HTMLElement>}
      >
        <div className="cs-hero__bg-grid" aria-hidden="true" />
        <div className="cs-container cs-hero__inner">
          <div className="cs-hero__content cs-anim cs-anim--left">
            <span className="cs-hero__badge">🎉 Book Today — 20% OFF</span>
            <h1 className="cs-hero__title">
              Safe &amp; Secure<br />
              <span className="cs-gradient-text">Car Storage</span><br />
              Services
            </h1>
            <p className="cs-hero__subtitle">
              Protect your vehicle with monitored, affordable, and reliable storage solutions across India.
            </p>
            <ActionButtons />
          </div>
          <div className="cs-hero__image cs-anim cs-anim--right">
            <div className="cs-hero__image-glow" aria-hidden="true" />
            <img src={heroSectionImg} alt="Secure car storage facility" loading="eager" />
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section
        className={`cs-about ${aboutInView ? "cs-anim--visible" : ""}`}
        ref={aboutRef as React.RefObject<HTMLElement>}
      >
        <div className="cs-container cs-about__inner">
          <div className="cs-about__text cs-anim cs-anim--up">
            <span className="cs-label">Who We Are</span>
            <h2 className="cs-section-title">
              Reliable Car Storage Solutions<br />You Can Trust
            </h2>
            <p className="cs-section-body">
              Looking for a safe place to store your car — short-term or long-term? Gati Shifting Packers offers professional car storage designed to protect your vehicle from damage, theft, and weather conditions. Our modern facilities ensure your car stays in perfect condition until you need it again.
            </p>
            <ActionButtons className="cs-about__actions" />
          </div>
          <div className="cs-about__highlights cs-anim cs-anim--up" style={{ animationDelay: "0.15s" }}>
            {[
              { icon: "🔒", text: "100% Secure Facilities" },
              { icon: "📍", text: "Pan-India Coverage" },
              { icon: "📋", text: "No Lock-in Contracts" },
              { icon: "🚗", text: "Doorstep Pickup & Drop" },
            ].map(({ icon, text }) => (
              <div className="cs-about__highlight-item" key={text}>
                <span className="cs-about__highlight-icon">{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brands Section ── */}
      <section className="cs-brands">
        <div className="cs-container">
          <div className="cs-brands__heading">
            <span className="cs-label">Trusted By</span>
            <h2 className="cs-section-title">
              Leading Businesses Trust{" "}
              <span className="cs-gradient-text">Gati Shifting Packers</span>
            </h2>
          </div>
          <div className="cs-brands__grid">
            {BRANDS.map(({ src, alt }) => (
              <div className="cs-brands__item" key={alt}>
                <img src={src} alt={alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section
        className={`cs-stats ${statsInView ? "cs-anim--visible" : ""}`}
        ref={statsRef as React.RefObject<HTMLElement>}
      >
        <div className="cs-stats__bg" aria-hidden="true" />
        <div className="cs-container cs-stats__inner">
          {STATS.map(({ value, label }, i) => (
            <div
              className="cs-stats__item cs-anim cs-anim--up"
              key={label}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="cs-stats__value cs-gradient-text">{value}</span>
              <span className="cs-stats__label">{label}</span>
            </div>
          ))}
        </div>
        <div className="cs-container cs-stats__cta">
          <p>Trusted by millions of Indians for secure, reliable car storage solutions.</p>
          <ActionButtons />
        </div>
      </section>

      {/* ── Features Slider ── */}
      <section className="cs-features">
        <div className="cs-container">
          <span className="cs-label">What We Offer</span>
          <h2 className="cs-section-title">Everything You Need In One Place</h2>
        </div>
        <div className="cs-features__slider">
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation
            autoplay={{ delay: 2200, pauseOnMouseEnter: true, disableOnInteraction: false }}
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1.3 },
              480: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1100: { slidesPerView: 4.2 },
            }}
          >
            {FEATURE_CARDS.map((card) => (
              <SwiperSlide key={card.title}>
                <Link to={card.link} className="cs-feature-card" style={{ "--card-accent": card.accent } as React.CSSProperties}>
                  <div className="cs-feature-card__icon">{card.icon}</div>
                  <span className="cs-feature-card__category">{card.category}</span>
                  <h3 className="cs-feature-card__title">{card.title}</h3>
                  <span className="cs-feature-card__cta">Learn more →</span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── Price Image ── */}
      <section className="cs-price-banner">
        <div className="cs-container">
          <img src={priceImg} alt="Car storage pricing plans" loading="lazy" className="cs-price-banner__img" />
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section
        className={`cs-safety ${safetyInView ? "cs-anim--visible" : ""}`}
        ref={safetyRef as React.RefObject<HTMLElement>}
      >
        <div className="cs-container">
          <span className="cs-label">Why Choose Us</span>
          <h2 className="cs-section-title">
            Designed for Your Vehicle's Safety
          </h2>
          <p className="cs-section-body cs-safety__desc">
            Gati Shifting Packers delivers trusted car storage services across Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Noida, Gurugram, Kolkata, Coimbatore, Jaipur and all over India — ensuring your vehicle stays safe for short-term and long-term needs.
          </p>
          <div className="cs-safety__grid">
            {SAFETY_FEATURES.map(({ Icon, label, description }, i) => (
              <div
                className="cs-safety__card cs-anim cs-anim--up"
                key={label}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="cs-safety__card-icon">
                  <Icon />
                </div>
                <h3 className="cs-safety__card-title">{label}</h3>
                <p className="cs-safety__card-desc">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section
        className={`cs-gallery ${galleryInView ? "cs-anim--visible" : ""}`}
        ref={galleryRef as React.RefObject<HTMLElement>}
      >
        <div className="cs-container">
          <span className="cs-label">Our Facilities</span>
          <h2 className="cs-section-title">See It for Yourself</h2>
        </div>
        <div className="cs-gallery__grid">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              className="cs-gallery__item cs-anim cs-anim--up"
              key={i}
              style={{ animationDelay: `${(i % 4) * 0.08}s` }}
            >
              <img src={img} alt={`Storage facility view ${i + 1}`} loading="lazy" />
              <div className="cs-gallery__overlay" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="cs-cta">
        <div className="cs-cta__bg" aria-hidden="true" />
        <div className="cs-container cs-cta__inner">
          <h2 className="cs-cta__title">Ready to Store Your Car Safely?</h2>
          <p className="cs-cta__subtitle">Get a free quote today — no commitment required.</p>
          <ActionButtons className="cs-cta__actions" />
        </div>
      </section>
    </>
  );
};

export default CarStorage;