import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Components
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import TrustUsSection from "../components/TrustUsSection";

// Assets
import OurTeamImg from "../assets/ourTeam/outTeam.svg";
import OurTeamImg2 from "../assets/ourTeam/ourTeam2.svg";
import logo from "../assets/logo2.webp";

// MUI Icons
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PublicIcon from "@mui/icons-material/Public";
import VerifiedIcon from "@mui/icons-material/Verified";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import InventoryIcon from "@mui/icons-material/Inventory";
import SecurityIcon from "@mui/icons-material/Security";
import StarIcon from "@mui/icons-material/Star";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
// Slider images
import petSlider from "../assets/HomePage/slide2.webp";
import bike from "../assets/HomePage/slide3.webp";
import house from "../assets/HomePage/slide4.webp";
import car from "../assets/HomePage/slide1.webp";
import slide5 from "../assets/HomePage/slide5.webp";
import "./OurTeam.scss";
import { siteConfig } from "../config/Company";
import ExpandableImagePanel from "../components/ExpandableImageSlider";

// ─── Types ────────────────────────────────────────────────────────────────────

interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface TeamOffer {
  Icon: React.ElementType;
  title: string;
  description: string;
}

interface WhyItem {
  Icon: React.ElementType;
  title: string;
  description: string;
}

interface Department {
  icon: string;
  name: string;
  count: string;
  description: string;
}

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS: StatItem[] = [
  { value: siteConfig.stats.totalVerifiedProfessionals, label: "Verified Experts", icon: <PeopleAltIcon /> },
  { value: siteConfig.stats.totalYearOfExperience, label: "Years Experience", icon: <EmojiEventsIcon /> },
  { value: siteConfig.stats.totalCountryServed, label: "Countries Covered", icon: <PublicIcon /> },
  { value: siteConfig.stats.totalHappyCustomers, label: "Happy Customers", icon: <StarIcon /> },
];

const TEAM_OFFERS: TeamOffer[] = [
  {
    Icon: InventoryIcon,
    title: "End-to-End Solutions",
    description:
      "From packing and customs clearance to final delivery at your new address — our team handles every step seamlessly.",
  },
  {
    Icon: PublicIcon,
    title: "Global Network",
    description:
      "Strategic partnerships across Europe, North America, the Middle East, and Asia enable smooth international moves.",
  },
  {
    Icon: SupportAgentIcon,
    title: "Customer-First Mindset",
    description:
      "Every team member is trained to prioritize your comfort, communication, and complete satisfaction throughout the move.",
  },
  {
    Icon: SecurityIcon,
    title: "Safe & Secure Handling",
    description:
      "International-grade packing materials and advanced techniques protect your valuables during every transit.",
  },
  {
    Icon: VerifiedIcon,
    title: "Certified Professionals",
    description:
      "Our staff holds industry certifications and undergoes regular training to stay current with global moving standards.",
  },
  {
    Icon: HandshakeIcon,
    title: "Transparent Process",
    description:
      "Clear, honest communication at every stage — no hidden charges, no surprises. Just reliable, accountable service.",
  },
];

const WHY_ITEMS: WhyItem[] = [
  {
    Icon: PublicIcon,
    title: "Local Expertise, Global Reach",
    description:
      "Whether it's Gati Shifting Packers in Delhi or a relocation to Canada, our pan-India and global teams make it happen effortlessly.",
  },
  {
    Icon: VerifiedIcon,
    title: "Transparency & Reliability",
    description:
      "We maintain clear communication at every stage — from quote to delivery. Our clients always know where their belongings are.",
  },
  {
    Icon: GroupsIcon,
    title: "Cultural Sensitivity",
    description:
      "Our international relocation specialists deeply understand regional customs, documentation requirements, and cultural nuances.",
  },
  {
    Icon: WorkIcon,
    title: "Committed Professionals",
    description:
      "From the planning stage to final unpacking, our dedicated move managers stay by your side every step of the way.",
  },
  {
    Icon: SchoolIcon,
    title: "Continuous Training",
    description:
      "Our team undergoes quarterly skill upgrades covering new packing techniques, customs regulations, and customer service excellence.",
  },
  {
    Icon: EmojiEventsIcon,
    title: "Award-Winning Service",
    description:
      "Recognized as one of India's most trusted relocation companies, backed by 5L+ positive customer reviews and industry accolades.",
  },
];

const DEPARTMENTS: Department[] = [
  {
    icon: "📦",
    name: "Packing Specialists",
    count: "2,000+",
    description: "Expert packers trained in domestic and export-grade materials handling.",
  },
  {
    icon: "🚛",
    name: "Logistics & Transport",
    count: "5,000+",
    description: "Drivers and fleet managers ensuring on-time delivery across India.",
  },
  {
    icon: "✈️",
    name: "International Ops",
    count: "800+",
    description: "Dedicated team managing air/sea freight and customs clearance globally.",
  },
  {
    icon: "🎧",
    name: "Customer Support",
    count: "500+",
    description: "Round-the-clock support agents available via call, chat, and email.",
  },
  {
    icon: "📋",
    name: "Move Coordinators",
    count: "1,200+",
    description: "Dedicated managers assigned to every customer for end-to-end oversight.",
  },
  {
    icon: "🔧",
    name: "Furniture Assembly",
    count: "600+",
    description: "Skilled technicians for disassembly, transit packing, and reassembly at destination.",
  },
];

const VALUES: Value[] = [
  {
    icon: "🤝",
    title: "Trust",
    description: "We earn your trust through consistent, reliable service — every single move.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description: "AI-powered tracking, digital documentation, and smart routing keep us ahead.",
  },
  {
    icon: "❤️",
    title: "Care",
    description: "We treat your belongings like our own — with attention, respect, and expertise.",
  },
  {
    icon: "🌍",
    title: "Global Thinking",
    description: "A local heart with a worldwide reach — serving India and 150+ countries.",
  },
];

const DESTINATIONS_DOMESTIC = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai",
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Noida",
  "Lucknow", "Chandigarh", "Indore", "Nagpur", "Surat",
];

const DESTINATIONS_INTERNATIONAL = [
  "USA 🇺🇸", "Canada 🇨🇦", "Australia 🇦🇺", "United Kingdom 🇬🇧",
  "Germany 🇩🇪", "France 🇫🇷", "Singapore 🇸🇬", "UAE 🇦🇪",
  "Qatar 🇶🇦", "Saudi Arabia 🇸🇦",
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
  <div className={`ot-action-buttons ${dark ? "ot-action-buttons--dark" : ""} ${className}`}>
    <a className="ot-btn ot-btn--primary" href={`tel:${siteConfig.phone}`}>
      <LocalPhoneIcon fontSize="small" />
      <span>{siteConfig.phone}</span>
    </a>
    <Link className="ot-btn ot-btn--outline" to="/contact-us">
      Get Free Quote <ArrowForwardIcon fontSize="small" />
    </Link>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const OurTeam: React.FC = () => {
  const [heroRef, heroInView] = useInView(0.05);
  const [statsRef, statsInView] = useInView(0.1);
  const [offersRef, offersInView] = useInView(0.05);
  const [deptRef, deptInView] = useInView(0.05);
  const [whyRef, whyInView] = useInView(0.05);
  const [valuesRef, valuesInView] = useInView(0.05);
  const [destRef, destInView] = useInView(0.05);
  const [ctaRef, ctaInView] = useInView(0.05);

const SLIDER_IMAGES = [
  { img: car, heading: "Trusted Movers & Packers", text: "As a trusted movers and packers company, we ensure protective wrapping, proper anchoring, and smooth doorstep pickup and delivery." },
  { img: house, heading: "Expert Team", text: "Our movers and packers team works with precision, ensuring protective wrapping, proper anchoring, and smooth doorstep delivery." },
  { img: bike, heading: "House Shifting", text: "Smooth and reliable house shifting with professional packing, loading, transport, and setup at your new home." },
  { img: petSlider, heading: "Bike Transport", text: "Bike relocation with protective wrapping, proper anchoring, and doorstep pickup and delivery." },
  { img: slide5, heading: "24/7 Available", text: "We provide reliable movers and packers services with 24/7 availability for your convenience." },
];
  return (
    <>
      <Helmet>
        <title>Our Team | Gati Shifting Packers – Trusted Relocation Experts</title>
        <meta
          name="description"
          content="Meet the dedicated team behind Gati Shifting Packers — 70,000+ trained professionals handling domestic and international relocations across India and 150+ countries worldwide."
        />
        <meta
          name="keywords"
          content="Gati Shifting Packers team, relocation experts, professional packers and movers, moving specialists India, international relocation team, domestic moving professionals"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Gati Shifting Packers" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Team | Gati Shifting Packers" />
        <meta
          property="og:description"
          content="Meet the 70,000+ professionals at Gati Shifting Packers committed to making every move safe, smooth, and stress-free."
        />
        <meta property="og:url" content="https://gatishiftingpackers.com/our-team" />
        <meta property="og:site_name" content="Gati Shifting Packers" />
        <link rel="canonical" href="https://gatishiftingpackers.com/our-team" />
      </Helmet>

      {/* ── Page Header ── */}
      <div className="ot-page-header">
        <div className="ot-page-header__overlay" aria-hidden="true" />
        <div className="ot-page-header__content">
          <p className="ot-page-header__breadcrumb">Home / Company</p>
          <h1 className="ot-page-header__title">Our Team</h1>
          <p className="ot-page-header__subtitle">
            {siteConfig.stats.totalVerifiedProfessionals} professionals. One shared mission — your perfect move.
          </p>
        </div>
      </div>

      {/* ── Hero / Intro Section ── */}
      <section
        className={`ot-hero ${heroInView ? "ot-anim--visible" : ""}`}
        ref={heroRef as React.RefObject<HTMLElement>}
      >
        <div className="ot-container ot-hero__inner">
          <div className="ot-hero__content ot-anim ot-anim--left">
            <img src={logo} alt="Gati Shifting Packers" className="ot-hero__logo" loading="lazy" />
            <span className="ot-label">Meet The Team</span>
            <h2 className="ot-section-title">
              The People Behind<br />
              <span className="ot-gradient-text">Every Perfect Move</span>
            </h2>
            <p className="ot-body-text">
              At Gati Shifting Packers, we believe that behind every successful move is a dedicated team. Our people are the true strength of our company — ensuring every relocation, whether local, national, or international, is smooth, safe, and completely stress-free.
            </p>
            <p className="ot-body-text">
              From Delhi to Mumbai, Bangalore to Hyderabad, or even an overseas move to the USA or UK — our professionals handle every step with care, expertise, and a genuine commitment to your satisfaction.
            </p>
            <ActionButtons />
          </div>
          <div className="ot-hero__visual ot-anim ot-anim--right">
            <div className="ot-hero__image-wrap">
              <img
                src={OurTeamImg}
                alt="Gati Shifting Packers team illustration"
                loading="lazy"
              />
            </div>
            <div className="ot-hero__floating-card">
              <GroupsIcon />
              <div>
                <strong>{siteConfig.stats.totalVerifiedProfessionals}</strong>
                <span>Verified Experts Nationwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ExpandableImagePanel items={SLIDER_IMAGES} />
      {/* ── Stats Strip ── */}
      <section
        className={`ot-stats ${statsInView ? "ot-anim--visible" : ""}`}
        ref={statsRef as React.RefObject<HTMLElement>}
      >
        <div className="ot-container ot-stats__grid">
          {STATS.map(({ value, label, icon }, i) => (
            <div
              className="ot-stat-card ot-anim ot-anim--up"
              key={label}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="ot-stat-card__icon">{icon}</div>
              <span className="ot-stat-card__value ot-gradient-text">{value}</span>
              <span className="ot-stat-card__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── What Our Team Offers ── */}
      <section
        className={`ot-offers ${offersInView ? "ot-anim--visible" : ""}`}
        ref={offersRef as React.RefObject<HTMLElement>}
      >
        <div className="ot-container">
          <div className="ot-section-header">
            <span className="ot-label">Our Capabilities</span>
            <h2 className="ot-section-title">
              What Our Team<br />
              <span className="ot-gradient-text">Brings to Every Move</span>
            </h2>
            <p className="ot-body-text ot-section-header__sub">
              From door-to-door packing to customs clearance — our specialists cover every aspect of your relocation.
            </p>
          </div>
          <div className="ot-offers__grid">
            {TEAM_OFFERS.map(({ Icon, title, description }, i) => (
              <div
                className="ot-offer-card ot-anim ot-anim--up"
                key={title}
                style={{ animationDelay: `${(i % 3) * 0.1}s` }}
              >
                <div className="ot-offer-card__icon">
                  <Icon />
                </div>
                <h3 className="ot-offer-card__title">{title}</h3>
                <p className="ot-offer-card__desc">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Domestic & International Expertise ── */}
      <section className="ot-expertise">
        <div className="ot-container ot-expertise__inner">
          <div className="ot-expertise__content">
            <span className="ot-label">Our Reach</span>
            <h2 className="ot-section-title">
              Skilled Experts for Domestic &amp;<br />
              <span className="ot-gradient-text">International Relocation</span>
            </h2>
            <p className="ot-body-text">
              Our team consists of highly trained professionals with expertise in both domestic and global shifting. Whether you're moving across India or relocating to an international destination, our specialists ensure your belongings are transported with the utmost care and professionalism.
            </p>
            <p className="ot-body-text">
              Each of our move coordinators undergoes 200+ hours of training covering packing science, logistics management, customs regulations, and customer communication — so you always have an expert in your corner.
            </p>
            <ActionButtons className="ot-expertise__btns" />
          </div>
          <div className="ot-expertise__image">
            <img
              src={OurTeamImg2}
              alt="International relocation specialists"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Departments / Teams ── */}
      <section
        className={`ot-departments ${deptInView ? "ot-anim--visible" : ""}`}
        ref={deptRef as React.RefObject<HTMLElement>}
      >
        <div className="ot-container">
          <div className="ot-section-header">
            <span className="ot-label">Our Departments</span>
            <h2 className="ot-section-title">
              Specialized Teams Working<br />
              <span className="ot-gradient-text">For You</span>
            </h2>
          </div>
          <div className="ot-departments__grid">
            {DEPARTMENTS.map((dept, i) => (
              <div
                className="ot-dept-card ot-anim ot-anim--up"
                key={dept.name}
                style={{ animationDelay: `${(i % 3) * 0.1}s` }}
              >
                <span className="ot-dept-card__icon">{dept.icon}</span>
                <div className="ot-dept-card__count">{dept.count}</div>
                <h3 className="ot-dept-card__name">{dept.name}</h3>
                <p className="ot-dept-card__desc">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Our Team ── */}
      <section
        className={`ot-why ${whyInView ? "ot-anim--visible" : ""}`}
        ref={whyRef as React.RefObject<HTMLElement>}
      >
        <div className="ot-container">
          <div className="ot-section-header">
            <span className="ot-label">Why Choose Us</span>
            <h2 className="ot-section-title">
              What Sets Our Team<br />
              <span className="ot-gradient-text">Apart</span>
            </h2>
          </div>
          <div className="ot-why__grid">
            {WHY_ITEMS.map(({ Icon, title, description }, i) => (
              <div
                className="ot-why-card ot-anim ot-anim--up"
                key={title}
                style={{ animationDelay: `${(i % 3) * 0.1}s` }}
              >
                <div className="ot-why-card__icon">
                  <Icon />
                </div>
                <h3 className="ot-why-card__title">{title}</h3>
                <p className="ot-why-card__desc">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section
        className={`ot-values ${valuesInView ? "ot-anim--visible" : ""}`}
        ref={valuesRef as React.RefObject<HTMLElement>}
      >
        <div className="ot-container">
          <div className="ot-section-header">
            <span className="ot-label">What We Stand For</span>
            <h2 className="ot-section-title">
              Our Core <span className="ot-gradient-text">Values</span>
            </h2>
          </div>
          <div className="ot-values__grid">
            {VALUES.map(({ icon, title, description }, i) => (
              <div
                className="ot-value-card ot-anim ot-anim--up"
                key={title}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="ot-value-card__icon">{icon}</span>
                <h3 className="ot-value-card__title">{title}</h3>
                <p className="ot-value-card__desc">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Destinations Coverage ── */}
      <section
        className={`ot-destinations ${destInView ? "ot-anim--visible" : ""}`}
        ref={destRef as React.RefObject<HTMLElement>}
      >
        <div className="ot-container">
          <div className="ot-section-header">
            <span className="ot-label">Where We Operate</span>
            <h2 className="ot-section-title">
              Our Team Serves<br />
              <span className="ot-gradient-text">Across India &amp; The World</span>
            </h2>
          </div>
          <div className="ot-destinations__cols">
            <div className="ot-destinations__col ot-anim ot-anim--left">
              <h3 className="ot-destinations__col-title">
                🇮🇳 Domestic Coverage
              </h3>
              <div className="ot-destinations__tags">
                {DESTINATIONS_DOMESTIC.map((city) => (
                  <span className="ot-dest-tag" key={city}>{city}</span>
                ))}
              </div>
            </div>
            <div className="ot-destinations__divider" aria-hidden="true" />
            <div className="ot-destinations__col ot-anim ot-anim--right">
              <h3 className="ot-destinations__col-title">
                🌍 International Reach
              </h3>
              <div className="ot-destinations__tags">
                {DESTINATIONS_INTERNATIONAL.map((dest) => (
                  <span className="ot-dest-tag ot-dest-tag--intl" key={dest}>{dest}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="ot-destinations__note">
            Not seeing your city or country? <Link to="/contact-us">Contact us</Link> — our team operates across 150+ countries and all major Indian cities.
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className={`ot-cta ${ctaInView ? "ot-anim--visible" : ""}`}
        ref={ctaRef as React.RefObject<HTMLElement>}
      >
        <div className="ot-cta__bg" aria-hidden="true" />
        <div className="ot-container ot-cta__inner ot-anim ot-anim--up">
          <span className="ot-label">Work With Us</span>
          <h2 className="ot-cta__title">
            Your Trusted Relocation<br />Partners Worldwide
          </h2>
          <p className="ot-cta__sub">
            When you choose Gati Shifting Packers, you're choosing more than a moving company — you're choosing a team that values your trust. Shifting within India or relocating abroad, our experts ensure a safe, efficient, and worry-free experience.
          </p>
          <ActionButtons dark className="ot-cta__btns" />
        </div>
      </section>

      {/* ── Shared Components ── */}
      <GetInTouch />
      <TrustUsSection />
      <BrandList />
      <FAQList />
    </>
  );
};

export default OurTeam;