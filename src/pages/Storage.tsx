import { useEffect, useRef, useState, memo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// MUI Icons
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import InventoryIcon from "@mui/icons-material/Inventory";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SecurityIcon from "@mui/icons-material/Security";
import FireExtinguisherIcon from "@mui/icons-material/FireExtinguisher";
import PestControlIcon from "@mui/icons-material/PestControl";
import VideocamIcon from "@mui/icons-material/Videocam";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

// Assets
import heroSectionImg from "../assets/Storage/hero-section-img.webp";
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
import houseImg from "../assets/Storage/house.jpg";
import documentImg from "../assets/Storage/document.jpg";
import businessImg from "../assets/Storage/business.jpg";
import boxImg from "../assets/Storage/boxes.jpg";
import bikeImg from "../assets/Storage/bikeStorage.png";
import carImg from "../assets/Storage/carStorage.png";
import sampleImg1 from "../assets/Storage/sample1.png";
import sampleImg2 from "../assets/Storage/sample2.png";
import sampleImg3 from "../assets/Storage/sample3.png";
import sampleImg4 from "../assets/Storage/sample4.png";
import sampleImg5 from "../assets/Storage/sample5.jpeg";
import sampleImg6 from "../assets/Storage/sample6.jpeg";
import sampleImg7 from "../assets/Storage/sample7.jpeg";
import sampleImg8 from "../assets/Storage/sample8.jpeg";
import "./Storage.scss"
import { siteConfig } from "../config/Company";
// ─── Types ────────────────────────────────────────────────────────────────────

interface Brand {
  src: string;
  alt: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface FeatureCard {
  icon: string;
  label: string;
  title: string;
  linkText: string;
  bg: string;
}

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
}

interface SafetyCard {
  icon: React.ReactNode;
  label: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const BRANDS: Brand[] = [
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

const STATS: StatItem[] = [
  { value: "630+", label: "B2B Clients" },
  { value: "71K+", label: "Business Items Stored" },
  { value: "24/7", label: "Business Support" },
  { value: "99.9%", label: "Client Retention" },
];

const FEATURE_CARDS: FeatureCard[] = [
  { icon: "💲", label: "TRANSPARENT", title: "No Hidden Fees", linkText: "Only pay for what you use", bg: "#546BFF" },
  { icon: "🔓", label: "Flexible", title: "No Deposit Required", linkText: "Start storing immediately", bg: "#FFC107" },
  { icon: "🛡️", label: "Protected", title: "Free Insurance", linkText: "Complete protection included", bg: "#E91E8C" },
  { icon: "🚚", label: "Convenient", title: "Doorstep Pickup & Delivery", linkText: "We come to you", bg: "#FF5252" },
  { icon: "📉", label: "Affordable", title: "Long-Term Discounts", linkText: "Save with commitment", bg: "#4CAF50" },
  { icon: "👥", label: "Trusted", title: "1 Lakh+ Happy Customers", linkText: "Join the community", bg: "#FF9800" },
  { icon: "🎥", label: "Secure", title: "24/7 Security Monitoring", linkText: "Peace of mind guaranteed", bg: "#00BCD4" },
  { icon: "🧹", label: "Hygienic", title: "Pest-Free Warehouses", linkText: "Clean storage environment", bg: "#3F51B5" },
  { icon: "🔥", label: "Safety", title: "Fire Safety Enabled", linkText: "Safety first", bg: "#9C27B0" },
  { icon: "🌡️", label: "Preserved", title: "Climate-Controlled Storage", linkText: "Protects sensitive items", bg: "#E91E63" },
  { icon: "📦", label: "Packed Right", title: "Custom Packing Services", linkText: "Handled with care", bg: "#8BC34A" },
  { icon: "🤖", label: "Smart", title: "AI-Powered Tracking", linkText: "Know what's stored", bg: "#FF6F00" },
  { icon: "🏆", label: "Top Rated", title: "India's No. 1 Storage", linkText: "#1 in secure storage", bg: "#D32F2F" },
  { icon: "🌆", label: "Pan India", title: "11 Cities Covered", linkText: "Nationwide reach", bg: "#0288D1" },
  { icon: "🔓", label: "Flexible Terms", title: "No Lock-In Contracts", linkText: "Cancel anytime", bg: "#388E3C" },
  { icon: "🤝", label: "Best Value", title: "Price Match Guarantee", linkText: "Better deal? We'll match it", bg: "#0097A7" },
  { icon: "📜", label: "Certified", title: "ISO Certified Storage", linkText: "Global standards", bg: "#7B1FA2" },
  { icon: "⭐", label: "Rated 4.9", title: "Customer Favorite", linkText: "4.9 Rating", bg: "#00838F" },
  { icon: "💬", label: "Support", title: "Live Chat & Support", linkText: "We're here for you", bg: "#2E7D32" },
];

const SERVICES: ServiceCard[] = [
  {
    icon: <HomeIcon />,
    title: "Household Storage",
    description:
      "We pride ourselves on being the best when it comes to helping you store your furniture. Stow your household items safely with our storage services in Hyderabad, Chennai, Pune and Mumbai.",
    features: ["Furniture Protection", "Multiple Cities", "Safe & Secure"],
    image: houseImg,
  },
  {
    icon: <InventoryIcon />,
    title: "Box Storage",
    description:
      "We provide corrugated boxes in different sizes to store your clothes, decor, utensils, and documents. These sturdy boxes are perfect for safe packing and easy organization.",
    features: ["Different Sizes", "Versatile Use", "Quality Boxes"],
    image: boxImg,
  },
  {
    icon: <TwoWheelerIcon />,
    title: "Bike Storage",
    description:
      "Safe and monitored bike storage services, ensuring your two-wheeler remains protected, clean, and ready to ride whenever needed.",
    features: ["Monitored 24/7", "Clean Environment", "Quick Access"],
    image: bikeImg,
  },
  {
    icon: <DirectionsCarIcon />,
    title: "Car Storage",
    description:
      "Secure car storage facilities to protect your vehicle from damage, theft, and weather conditions with complete peace of mind.",
    features: ["Weather Protected", "Anti-Theft Secure", "Insurance Covered"],
    image: carImg,
  },
  {
    icon: <DescriptionIcon />,
    title: "Document Storage",
    description:
      "Records management document storage services for professionals and small businesses for the safe and secure storage of official files and documents.",
    features: ["Professional Service", "Business Storage", "Secure Files"],
    image: documentImg,
  },
  {
    icon: <DirectionsCarFilledIcon />,
    title: "Commercial Storage",
    description:
      "Reliable commercial storage solutions for businesses, providing secure and well-managed space for inventory, equipment, and operational assets.",
    features: ["24×7 Monitoring", "Rodent Proof", "Multiple Locations"],
    image: businessImg,
  },
];

const SAFETY_CARDS: SafetyCard[] = [
  { icon: <SecurityIcon />, label: "Insurance Coverage" },
  { icon: <FireExtinguisherIcon />, label: "Fire Control" },
  { icon: <PestControlIcon />, label: "Pest Control" },
  { icon: <VideocamIcon />, label: "CCTV Monitoring" },
  { icon: <LocalShippingIcon />, label: "24/7 Security" },
];

const SAMPLE_IMAGES = [
  sampleImg1, sampleImg2, sampleImg3, sampleImg4,
  sampleImg5, sampleImg6, sampleImg7, sampleImg8,
];

// ─── useInView Hook ───────────────────────────────────────────────────────────
// Lightweight intersection observer — no external dependency needed

function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null!);
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

// ─── Sub-components ───────────────────────────────────────────────────────────

const StatCounter = memo(({ value, label }: StatItem) => (
  <div className="stat-item">
    <span className="stat-value">{value}</span>
    <span className="stat-label">{label}</span>
  </div>
));

const BrandLogo = memo(({ src, alt }: Brand) => (
  <div className="brand-logo">
    <img src={src} alt={alt} loading="lazy" width={80} height={40} />
  </div>
));

const ServiceCardComponent = memo(({ service, index }: { service: ServiceCard; index: number }) => {
  const [ref, inView] = useInView();
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`service-card ${isReversed ? "reversed" : ""} ${inView ? "visible" : ""}`}
    >
      <div className="service-content">
        <div className="service-icon-title">
          <span className="service-icon-wrap">{service.icon}</span>
          <h3>{service.title}</h3>
        </div>
        <p>{service.description}</p>
        <ul className="service-features">
          {service.features.map((f) => (
            <li key={f}>
              <CheckCircleOutlineIcon className="check-icon" />
              {f}
            </li>
          ))}
        </ul>
        <Link className="service-cta" to="/contact-us">
          Get Free Quote <ArrowForwardIcon fontSize="small" />
        </Link>
      </div>
      <div className="service-image">
        <img src={service.image} alt={service.title} loading="lazy" />
      </div>
    </div>
  );
});

// ─── Main Component ───────────────────────────────────────────────────────────

const Storage = () => {
  const [heroRef, heroInView] = useInView(0.1);

  return (
    <>
      <Helmet>
        <title>Storage & Warehousing Services | Safe Shifting Packers</title>
        <meta
          name="description"
          content="Safe Shifting Packers provides secure storage and warehousing solutions for household goods, vehicles, office items, and more with flexible short-term and long-term options."
        />
        <meta
          name="keywords"
          content="Storage services, Warehousing services, Goods storage, Household storage, Vehicle storage, Packers and movers storage, Long term storage, Short term storage, Safe Shifting Packers"
        />
        <meta name="author" content="Safe Shifting Packers" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Secure Storage & Warehousing Services – Safe Shifting Packers" />
        <meta
          property="og:description"
          content="Explore reliable and secure storage and warehousing solutions by Safe Shifting Packers including household goods, vehicles, and office equipment storage with flexible terms."
        />
        <meta property="og:url" content="https://safeshiftingpackers.com/storage" />
        <meta property="og:site_name" content="Safe Shifting Packers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Storage & Warehousing Services | Safe Shifting Packers" />
        <meta
          name="twitter:description"
          content="Flexible and secure storage services for goods, vehicles, and equipment by Safe Shifting Packers."
        />
        <link rel="canonical" href="https://safeshiftingpackers.com/storage" />
        <link
          rel="preload"
          as="image"
          href={heroSectionImg}
        />
      </Helmet>

      {/* ── Page Banner ── */}
      <div className="storage-page-banner">
        <div className="banner-overlay" />
        <h1>Storage Solutions</h1>
        <p>Secure · Flexible · Trusted across India</p>
      </div>

      {/* ── Hero ── */}
      <section className="storage-hero" ref={heroRef}>
        <div className="storage-hero__inner">
          <div className={`storage-hero__content ${heroInView ? "fade-up" : ""}`}>
            <span className="hero-badge">🎉 Book Today — 20% OFF</span>
            <h1>We Store Anything You Care About</h1>
            <p>India's most trusted storage network — safe, smart, and always accessible.</p>
            <div className="hero-ctas">
              <a className="cta-primary" href={`tel:${siteConfig.phone}`}>
                <LocalPhoneIcon fontSize="small" />
                {siteConfig.phone}
              </a>
              <Link className="cta-secondary" to="/contact-us">
                Get a Free Quote
              </Link>
            </div>
          </div>
          <div className={`storage-hero__image ${heroInView ? "fade-up delay-2" : ""}`}>
            <img src={heroSectionImg} alt="Storage solutions" loading="eager" />
          </div>
        </div>
      </section>

      {/* ── Brands ── */}
      <section className="storage-brands">
        <div className="section-header">
          <span className="section-tag">Trusted By</span>
          <h2>
            Leading Businesses Trust <span>Gati Shifting Packers</span>
          </h2>
          <p>Providing secure storage solutions to India's top companies and organisations</p>
        </div>
        <div className="brands-grid">
          {BRANDS.map((brand) => (
            <BrandLogo key={brand.alt} {...brand} />
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="storage-stats">
        <div className="stats-inner">
          <div className="stats-grid">
            {STATS.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
          <div className="stats-cta">
            <p>Trusted by top Indian companies for secure and reliable storage solutions.</p>
            <div className="stats-cta-btns">
              <Link className="cta-primary" to="/contact-us">
                Get Free Quote
              </Link>
              <a className="cta-outline" href={`tel:${siteConfig.phone}`}>
                <LocalPhoneIcon fontSize="small" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Slider ── */}
      <section className="storage-features">
        <h2 className="features-heading">Everything You Need In One Place</h2>
        <div className="features-swiper-wrap">
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation
            autoplay={{ delay: 2200, pauseOnMouseEnter: true, disableOnInteraction: false }}
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1.3 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {FEATURE_CARDS.map((card) => (
              <SwiperSlide key={card.title}>
                <div className="feature-card">
                  <span className="feature-icon" style={{ background: card.bg }}>
                    {card.icon}
                  </span>
                  <span className="feature-tag">{card.label}</span>
                  <h4>{card.title}</h4>
                  <Link to="/contact-us">{card.linkText}</Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="storage-services">
        <div className="section-header">
          <span className="section-tag">Our Services</span>
          <h2>What We Offer</h2>
          <p>Comprehensive storage solutions tailored to your specific needs</p>
        </div>
        <div className="services-list">
          {SERVICES.map((service, i) => (
            <ServiceCardComponent key={service.title} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* ── Safety ── */}
      <section className="storage-safety">
        <div className="safety-inner">
          <div className="safety-text">
            <span className="section-tag light">Security First</span>
            <h2>🔐 Safe · Secure · Reliable</h2>
            <p>
              Gati Shifting Packers offers trusted storage services all over India — Bangalore,
              Hyderabad, Mumbai, Pune, Chennai, Delhi, Noida, Gurugram, Kolkata, Coimbatore,
              Jaipur &amp; All Over India — ensuring your belongings stay safe for short-term
              and long-term needs.
            </p>
            <Link className="cta-primary" to="/contact-us">
              Book Storage Now <ArrowForwardIcon fontSize="small" />
            </Link>
          </div>
          <div className="safety-cards">
            {SAFETY_CARDS.map((card) => (
              <div className="safety-card" key={card.label}>
                <span className="safety-icon">{card.icon}</span>
                <span>{card.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="storage-gallery">
        <div className="section-header">
          <span className="section-tag">Our Facilities</span>
          <h2>A Look Inside</h2>
        </div>
        <div className="gallery-grid">
          {SAMPLE_IMAGES.map((img, i) => (
            <div className="gallery-item" key={i}>
              <img src={img} alt={`Storage facility ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Storage;