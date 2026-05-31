import "./BikeStorage.scss";
import heroSectionImg from "../assets/BikeStorage/hero-section-img.png";
import { Link } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

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

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SecurityIcon from "@mui/icons-material/Security";
import FireExtinguisherIcon from "@mui/icons-material/FireExtinguisher";
import PestControlIcon from "@mui/icons-material/PestControl";
import VideocamIcon from "@mui/icons-material/Videocam";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import sampleImg1 from "../assets/BikeStorage/sample1.png";
import sampleImg2 from "../assets/BikeStorage/sample2.png";
import sampleImg3 from "../assets/BikeStorage/sample3.png";
import sampleImg4 from "../assets/BikeStorage/sample4.png";
import sampleImg5 from "../assets/BikeStorage/sample5.png";
import sampleImg6 from "../assets/BikeStorage/sample6.png";
import sampleImg7 from "../assets/BikeStorage/sample7.png";
import sampleImg8 from "../assets/BikeStorage/sample8.png";

import priceImg from "../assets/BikeStorage/priceImg.jpeg";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config/Company";

/* ─── Static data ───────────────────────────────────────────────── */

const BRAND_LIST = [
  { src: abhibus_icon,                   alt: "Abhibus" },
  { src: AIMMAF_icon,                    alt: "AIMMAF" },
  { src: cartello_icon,                  alt: "Cartello" },
  { src: cmo_axis_icon,                  alt: "CMO Axis" },
  { src: edgar_icon,                     alt: "Edgar" },
  { src: ezetap_icon,                    alt: "Ezetap" },
  { src: greencube_icon,                 alt: "Greencube" },
  { src: hubler_icon,                    alt: "Hubler" },
  { src: intelligentia_it_systems_icon,  alt: "Intelligentia IT Systems" },
  { src: ixigo_icon,                     alt: "Ixigo" },
  { src: qwikcliver_icon,                alt: "Qwikcliver" },
  { src: rapyder_icon,                   alt: "Rapyder" },
  { src: rotzler_icon,                   alt: "Rotzler" },
  { src: ToneTag_icon,                   alt: "ToneTag" },
  { src: toyota_tsusho_icon,             alt: "Toyota Tsusho" },
  { src: HDFC_icon,                      alt: "HDFC" },
] as const;

const STATS = [
  { value: siteConfig.stats.totalVerifiedProfessionals,  label: "Verified Experts" },
  { value: siteConfig.stats.totalHappyCustomers, label: "Happy Users" },
  { value: siteConfig.stats.totalYearOfExperience,   label: "Years of Expertise" },
] as const;

const FEATURE_CARDS = [
  { icon: "💲", accent: "#EEF0FF", tag: "Transparent",   title: "No Hidden Fees",              cta: "Only pay for what you use" },
  { icon: "🔓", accent: "#FFF9E6", tag: "Flexible",      title: "No Deposit Required",         cta: "Start storing immediately" },
  { icon: "🛡️", accent: "#FFF0EB", tag: "Protected",     title: "Free Insurance",              cta: "Complete protection included" },
  { icon: "🚚", accent: "#EAFFF5", tag: "Convenient",    title: "Doorstep Pickup & Delivery",  cta: "We come to you" },
  { icon: "📉", accent: "#F0EEFF", tag: "Affordable",    title: "Long-Term Discounts",         cta: "Save with commitment" },
  { icon: "👥", accent: "#FFF9E6", tag: "Trusted",       title: "1 Lakh+ Happy Customers",     cta: "Join the community" },
  { icon: "🎥", accent: "#EAFFF5", tag: "Secure",        title: "24/7 Security Monitoring",    cta: "Peace of mind guaranteed" },
  { icon: "🧹", accent: "#EEF0FF", tag: "Hygienic",      title: "Pest-Free Warehouses",        cta: "Clean storage environment" },
  { icon: "🔥", accent: "#FFF0EB", tag: "Safety",        title: "Fire Safety Enabled",         cta: "Safety first" },
  { icon: "🌡️", accent: "#FFF9E6", tag: "Preserved",     title: "Climate-Controlled Storage",  cta: "Protects sensitive items" },
  { icon: "📦", accent: "#EAFFF5", tag: "Packed Right",  title: "Custom Packing Services",     cta: "Handled with care" },
  { icon: "🤖", accent: "#EEF0FF", tag: "Smart",         title: "AI-Powered Tracking",         cta: "Know what's stored" },
  { icon: "🏆", accent: "#FFF0EB", tag: "Top Rated",     title: "India's No. 1 Storage",       cta: "#1 in secure storage" },
  { icon: "🌆", accent: "#EAFFF5", tag: "Pan India",     title: "11 Cities Covered",           cta: "Nationwide reach" },
  { icon: "🔓", accent: "#F0EEFF", tag: "Flexible",      title: "No Lock-In Contracts",        cta: "Cancel anytime" },
  { icon: "🤝", accent: "#EAFFF5", tag: "Best Value",    title: "Price Match Guarantee",       cta: "Better deal? We'll match it" },
  { icon: "📜", accent: "#FFF0EB", tag: "Certified",     title: "ISO Certified Storage",       cta: "Global standards" },
  { icon: "⭐", accent: "#FFF9E6", tag: "Rated 4.9",     title: "Customer Favorite",           cta: "4.9 Rating" },
  { icon: "💬", accent: "#EAFFF5", tag: "Support",       title: "Live Chat & Support",         cta: "We're here for you" },
] as const;

const SAFETY_FEATURES = [
  { Icon: SecurityIcon,         label: "Insurance Coverage" },
  { Icon: FireExtinguisherIcon, label: "Fire Control" },
  { Icon: PestControlIcon,      label: "Pest Control" },
  { Icon: VideocamIcon,         label: "CCTV Monitoring" },
  { Icon: LocalShippingIcon,    label: "24/7 Security" },
] as const;

const GALLERY_IMAGES = [
  sampleImg1, sampleImg2, sampleImg3, sampleImg4,
  sampleImg5, sampleImg6, sampleImg7, sampleImg8,
] as const;

const SWIPER_BREAKPOINTS = {
  0:    { slidesPerView: 1 },
  480:  { slidesPerView: 2 },
  900:  { slidesPerView: 3 },
  1200: { slidesPerView: 4 },
};

const SWIPER_AUTOPLAY = { delay: 2200, pauseOnMouseEnter: true };

/* ─── Shared CTA Group ──────────────────────────────────────────── */
const CTAButtons = () => (
  <div className="bs-cta-group">
    <Link className="bs-btn bs-btn--primary" to="/contact-us">
      Get Free Quote
    </Link>
    <a className="bs-btn bs-btn--outline" href={`tel:${siteConfig.phone}`}>
      <LocalPhoneIcon fontSize="small" aria-hidden="true" />
      <span>{siteConfig.phone}</span>
    </a>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════════ */
const BikeStorage = () => {
  return (
    <>
      {/* ── SEO ── */}
      <Helmet>
        <title>Bike Storage Services | Safe Shifting Packers – Secure Two-Wheeler Storage</title>
        <meta name="description" content="Safe Shifting Packers offers reliable bike storage services including secure short-term and long-term storage for bikes and two-wheelers with professional handling and monitored facilities." />
        <meta name="keywords" content="Bike storage service, Two-wheeler storage, Bike parking storage, Secure bike storage, Long term bike storage, Short term bike storage, Packers and movers bike storage, Safe Shifting Packers" />
        <meta name="author" content="Safe Shifting Packers" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bike Storage Services | Safe Shifting Packers" />
        <meta property="og:description" content="Secure and flexible bike and two-wheeler storage solutions by Safe Shifting Packers for short and long-term storage with safety-first handling." />
        <meta property="og:url" content="https://safeshiftingpackers.com/bike-storage" />
        <meta property="og:site_name" content="Safe Shifting Packers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bike Storage Services | Safe Shifting Packers" />
        <meta name="twitter:description" content="Professional bike and two-wheeler storage with monitored facilities and flexible terms by Safe Shifting Packers." />
        <link rel="canonical" href="https://safeshiftingpackers.com/bike-storage" />
      </Helmet>

      {/* ── Page Banner ── */}
      <div className="bs-banner" role="banner">
        <div className="bs-banner__inner">
          <h1 className="bs-banner__title">
            Bike <span className="bs-accent">Storage</span>
          </h1>
          <span className="bs-banner__chip">🎉 20% Off Today</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bs-hero" aria-labelledby="bs-hero-heading">
        <div className="bs-hero__container">
          <div className="bs-hero__content">
            <div className="bs-hero__badge">🎉 Book Today — 20% OFF</div>
            <h1 id="bs-hero-heading" className="bs-hero__heading">
              Safe &amp; Secure{" "}
              <span className="bs-accent">Two-Wheeler</span>{" "}
              Storage Services
            </h1>
            <p className="bs-hero__desc">
              Looking for a safe and secure place to store your bike? Gati
              Shifting Packers provides professional bike storage services to
              keep your vehicle protected from damage, theft, and harsh
              weather — with complete peace of mind.
            </p>
            <CTAButtons />
          </div>
          <div className="bs-hero__img-wrap" aria-hidden="true">
            <div className="bs-hero__img-bg" />
            <img
              src={heroSectionImg}
              alt="Secure bike storage"
              className="bs-hero__img"
              loading="eager"
              decoding="async"
              width={560}
              height={460}
            />
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="bs-stats" role="list" aria-label="Key statistics">
        {STATS.map(({ value, label }) => (
          <div key={label} className="bs-stats__item" role="listitem">
            <strong className="bs-stats__value">{value}</strong>
            <span className="bs-stats__label">{label}</span>
          </div>
        ))}
      </div>

      {/* ── About ── */}
      <section className="bs-about" aria-labelledby="bs-about-heading">
        <div className="bs-about__inner">
          <span className="bs-eyebrow">Why Us?</span>
          <h2 id="bs-about-heading" className="bs-section-heading">
            Reliable Bike Storage Solutions You Can Trust
          </h2>
          <p className="bs-about__body">
            Whether you need short-term or long-term storage, Gati Shifting
            Packers offers professional bike storage services designed to
            protect your vehicle from damage, theft, and weather conditions.
            Our modern facilities ensure your bike stays in perfect condition —
            ready when you need it.
          </p>
          <CTAButtons />
        </div>
      </section>

      {/* ── Brands ── */}
      <section className="bs-brands" aria-labelledby="bs-brands-heading">
        <div className="bs-brands__header">
          <span className="bs-eyebrow">Trusted By</span>
          <h2 id="bs-brands-heading" className="bs-section-heading">
            Leading Businesses Trust{" "}
            <span className="bs-accent">Gati Shifting Packers</span>
          </h2>
          <p className="bs-section-sub">
            Providing secure storage solutions to India's top companies
          </p>
        </div>
        <div className="bs-brands__grid" role="list">
          {BRAND_LIST.map(({ src, alt }) => (
            <div key={alt} className="bs-brands__item" role="listitem">
              <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                width={110}
                height={44}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Features Slider ── */}
      <section className="bs-slider" aria-labelledby="bs-slider-heading">
        <div className="bs-slider__header">
          <span className="bs-eyebrow">Everything Included</span>
          <h2 id="bs-slider-heading" className="bs-section-heading">
            Everything You Need In One Place
          </h2>
        </div>
        <div className="bs-slider__track">
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation
            autoplay={SWIPER_AUTOPLAY}
            spaceBetween={16}
            breakpoints={SWIPER_BREAKPOINTS}
            a11y={{ enabled: true }}
          >
            {FEATURE_CARDS.map(({ icon, accent, tag, title, cta }) => (
              <SwiperSlide key={title}>
                <div className="bs-fcard">
                  <div
                    className="bs-fcard__icon"
                    style={{ background: accent }}
                    aria-hidden="true"
                  >
                    {icon}
                  </div>
                  <span className="bs-fcard__tag">{tag}</span>
                  <h3 className="bs-fcard__title">{title}</h3>
                  <Link className="bs-fcard__link" to="/contact-us">
                    {cta} →
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── Pricing Image ── */}
      <section className="bs-pricing" aria-label="Pricing plans">
        <div className="bs-pricing__inner">
          <span className="bs-eyebrow">Pricing</span>
          <h2 className="bs-section-heading">Simple, Transparent Pricing</h2>
          <img
            src={priceImg}
            alt="Bike storage pricing plans"
            className="bs-pricing__img"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* ── Safety / Why Choose ── */}
      <section className="bs-safety" aria-labelledby="bs-safety-heading">
        <div className="bs-safety__container">
          <span className="bs-eyebrow">Why Choose Us</span>
          <h2 id="bs-safety-heading" className="bs-section-heading">
            Why Choose Our Bike Storage Services?
          </h2>
          <p className="bs-section-sub bs-safety__desc">
            Gati Shifting Packers offers trusted bike storage services all over
            India — Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Noida,
            Gurugram, Kolkata, Coimbatore, Jaipur &amp; all over India.
          </p>
          <div className="bs-safety__grid" role="list">
            {SAFETY_FEATURES.map(({ Icon, label }) => (
              <div key={label} className="bs-safety__card" role="listitem">
                <div className="bs-safety__icon-wrap" aria-hidden="true">
                  <Icon className="bs-safety__icon" />
                </div>
                <span className="bs-safety__label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="bs-gallery" aria-label="Storage facility gallery">
        <div className="bs-gallery__header">
          <span className="bs-eyebrow">Our Facility</span>
          <h2 className="bs-section-heading">Storage Facility Gallery</h2>
        </div>
        <div className="bs-gallery__grid">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} className="bs-gallery__item">
              <img
                src={img}
                alt={`Storage facility view ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="bs-gallery__img"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA Strip ── */}
      <section className="bs-cta-strip" aria-label="Contact us">
        <div className="bs-cta-strip__inner">
          <div className="bs-cta-strip__text">
            <h2 className="bs-cta-strip__heading">
              Ready to Store Your Bike Safely?
            </h2>
            <p className="bs-cta-strip__sub">
              Get a free quote today — no obligation, no hidden fees.
            </p>
          </div>
          <CTAButtons />
        </div>
      </section>
    </>
  );
};

export default BikeStorage;