import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";
import commercialShiftingImg from "../assets/CommercialShifting/commercialShiftingPriceImg.jpg";
import { Helmet } from "react-helmet-async";
import ReviewDialog from "../components/ReviewDialog";
import "./CommercialShifting.scss";

const BOOKING_STEPS = [
  {
    number: "01",
    icon: "📋",
    title: "Share Details & Get Quote",
    points: [
      "Provide moving requirements — items, location, and distance.",
      "Get a fair, customized quote from our verified professionals.",
    ],
  },
  {
    number: "02",
    icon: "📅",
    title: "Confirm Booking",
    points: [
      "Choose your preferred pickup date and time.",
      "Secure your booking by paying a small advance (adjusted later).",
    ],
  },
  {
    number: "03",
    icon: "🔧",
    title: "Safe Packing & Pickup",
    points: [
      "Trained team arrives with top-quality packing materials.",
      "Dismantling, labeling, and secure loading under expert supervision.",
    ],
  },
  {
    number: "04",
    icon: "📄",
    title: "Invoice & Payment",
    points: [
      "Receive a detailed invoice based on your provided list.",
      "Pay the remaining amount after deducting your advance payment.",
    ],
  },
  {
    number: "05",
    icon: "🚛",
    title: "Transportation & Tracking",
    points: [
      "Your goods are dispatched safely to the destination.",
      "Track your shipment with live updates until delivery.",
    ],
  },
  {
    number: "06",
    icon: "🏠",
    title: "Delivery & Feedback",
    points: [
      "Safe delivery and reinstallation at your new location.",
      "Share your valuable feedback to help us serve you better.",
    ],
  },
];

const ITEMS_WE_SHIFT = [
  { icon: "⚙️", label: "Machinery & Equipment", desc: "Heavy machinery, production units, and industrial tools." },
  { icon: "🪑", label: "Furniture & Fixtures", desc: "Display racks, shelves, counters, tables, and chairs." },
  { icon: "💻", label: "Electronics & Appliances", desc: "Computers, POS systems, AC units, lighting, and other devices." },
  { icon: "📦", label: "Inventory & Stock", desc: "Products, materials, and goods packed securely for transport." },
  { icon: "🗂️", label: "Files & Documents", desc: "Important records and paperwork handled with confidentiality." },
];

const WHY_CHOOSE = [
  { icon: "🛡️", title: "Safe Handling", desc: "Specialized team for heavy and delicate commercial goods." },
  { icon: "⚡", title: "Minimal Downtime", desc: "Quick relocation with minimal impact on business operations." },
  { icon: "🔄", title: "End-to-End Management", desc: "From dismantling to reinstallation, we handle it all." },
  { icon: "👷", title: "Trained Staff", desc: "Experienced professionals using modern tools and equipment." },
  { icon: "📋", title: "Insurance Protection", desc: "Comprehensive coverage for goods in transit." },
];

const COST_FACTORS = [
  { number: "01", title: "Distance", desc: "Longer distances increase fuel, labor, and time requirements." },
  { number: "02", title: "Quantity & Weight", desc: "More items or heavy machinery require larger vehicles and more manpower." },
  { number: "03", title: "Type of Goods", desc: "Fragile or high-value items need special packing and careful handling." },
  { number: "04", title: "Vehicle Type", desc: "Depending on load capacity, open trucks or closed containers are used." },
  { number: "05", title: "Timing & Season", desc: "Shifting during weekends, month-ends, or peak seasons may cost more." },
];


const CommercialShifting = () => {
  return (
    <>
      <Helmet>
        <title>Commercial Shifting Services | Gati Shifting Packers</title>
        <meta name="description" content="Professional Commercial Shifting Services by Gati Shifting Packers. We offer secure and efficient office and business relocation solutions across India." />
        <meta name="keywords" content="gati shifting packers commercial shifting, office relocation, business moving services, corporate shifting India, warehouse relocation, commercial movers" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Abhishek" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Commercial Shifting Services | Gati Shifting Packers" />
        <meta property="og:description" content="Reliable and affordable Commercial Shifting Services by Gati Shifting Packers. Move your office or business setup safely anywhere in India." />
        <meta property="og:url" content="https://gatishiftingpackers.com/commercial-shifting" />
        <meta property="og:site_name" content="Gati Shifting Packers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Commercial Shifting Services | Gati Shifting Packers" />
        <meta name="twitter:description" content="Expert Commercial Shifting Services by Gati Shifting Packers. Safe, organized, and timely relocation of offices, shops, and warehouses across India." />
        <meta httpEquiv="Content-Language" content="en" />
        <link rel="canonical" href="https://gatishiftingpackers.com/commercial-shifting" />
      </Helmet>

      {/* ── Hero Banner ── */}
      <section className="cs-hero">
        <div className="cs-hero__overlay" />
        <div className="cs-hero__content">
          <span className="cs-hero__eyebrow">Pan-India Services</span>
          <h1 className="cs-hero__title">Commercial Shifting</h1>
          <p className="cs-hero__subtitle">Commercial Vehicle Transport Services in India</p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="cs-intro">
        <div className="cs-intro__container">
          <div className="cs-intro__badge">Trusted Partner</div>
          <h2 className="cs-intro__heading">
            Gati Shifting Packers –<br />
            <span>Trusted Commercial Vehicle Transport</span>
          </h2>
          <p className="cs-intro__body">
            Gati Shifting Packers is one of the leading and most reliable names in commercial vehicle
            transport services across India. We specialize in relocating large-scale commercial spaces,
            including warehouses, showrooms, retail outlets, manufacturing units, and corporate
            establishments. Our professional team ensures a seamless, secure, and timely relocation
            that minimizes downtime and business disruption.
          </p>
          <p className="cs-intro__body">
            With a strong nationwide network, Gati Shifting Packers is known for its strategic planning,
            efficient packing, and end-to-end coordination. Whether it's machinery, furniture, or
            sensitive equipment, we handle everything with the utmost care and precision. Our commercial
            moving solutions include insurance coverage, vehicle tracking, and trained professionals to
            ensure your valuable assets reach safely and on time.
          </p>
        </div>
      </section>

      {/* ── 6-Step Booking Process ── */}
      <section className="cs-steps">
        <div className="cs-steps__container">
          <div className="cs-steps__header">
            <span className="cs-steps__label">How It Works</span>
            <h2 className="cs-steps__title">Simple 6-Step Booking Process</h2>
          </div>
          <div className="cs-steps__grid">
            {BOOKING_STEPS.map((step, idx) => (
              <div key={idx} className="cs-step-card">
                <div className="cs-step-card__number">{step.number}</div>
                <div className="cs-step-card__icon">{step.icon}</div>
                <h3 className="cs-step-card__title">{step.title}</h3>
                <ul className="cs-step-card__list">
                  {step.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                {idx === 5 && (
                  <div className="cs-step-card__action">
                    <ReviewDialog />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Items We Shift ── */}
      <section className="cs-items">
        <div className="cs-items__container">
          <div className="cs-items__header">
            <span className="cs-items__label">Our Expertise</span>
            <h2 className="cs-items__title">Commercial Items We Shift</h2>
            <p className="cs-items__subtitle">
              At Gati Shifting Packers, we provide comprehensive commercial moving services covering
              all essential items and equipment.
            </p>
          </div>
          <div className="cs-items__grid">
            {ITEMS_WE_SHIFT.map((item, idx) => (
              <div key={idx} className="cs-item-card">
                <span className="cs-item-card__icon">{item.icon}</span>
                <h3 className="cs-item-card__title">{item.label}</h3>
                <p className="cs-item-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Section ── */}
      <section className="cs-pricing">
        <div className="cs-pricing__container">
          <div className="cs-pricing__text">
            <span className="cs-pricing__label">Transparent Pricing</span>
            <h2 className="cs-pricing__title">Affordable Commercial Shifting Charges in India</h2>
            <p className="cs-pricing__body">
              We offer cost-effective and transparent commercial vehicle transport services designed
              for all types of businesses — from small enterprises to large corporations. Our pricing
              depends on your specific requirements and ensures no hidden charges. Whether you're
              relocating locally or across cities, Gati Shifting Packers guarantees a smooth,
              hassle-free, and budget-friendly experience.
            </p>
            <ul className="cs-pricing__highlights">
              <li>✔ No Hidden Charges</li>
              <li>✔ Custom Quotes for Every Business</li>
              <li>✔ Local & Pan-India Coverage</li>
            </ul>
          </div>
          <div className="cs-pricing__image-wrap">
            <img
              src={commercialShiftingImg}
              alt="Commercial shifting pricing"
              loading="lazy"
              className="cs-pricing__image"
            />
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="cs-why">
        <div className="cs-why__container">
          <div className="cs-why__header">
            <span className="cs-why__label">Why Us</span>
            <h2 className="cs-why__title">Why Choose Professional Commercial Transport?</h2>
          </div>
          <div className="cs-why__grid">
            {WHY_CHOOSE.map((item, idx) => (
              <div key={idx} className="cs-why-card">
                <span className="cs-why-card__icon">{item.icon}</span>
                <h3 className="cs-why-card__title">{item.title}</h3>
                <p className="cs-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cost Factors ── */}
      <section className="cs-factors">
        <div className="cs-factors__container">
          <div className="cs-factors__header">
            <span className="cs-factors__label">Pricing Transparency</span>
            <h2 className="cs-factors__title">Factors Affecting the Cost of Commercial Shifting</h2>
          </div>
          <div className="cs-factors__list">
            {COST_FACTORS.map((factor, idx) => (
              <div key={idx} className="cs-factor-item">
                <span className="cs-factor-item__number">{factor.number}</span>
                <div className="cs-factor-item__content">
                  <h3 className="cs-factor-item__title">{factor.title}</h3>
                  <p className="cs-factor-item__desc">{factor.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shared Sections ── */}
      <ReviewVideo />
      <GetInTouch />
      <AwardCertification />
      <TrustUsSection />
      <BrandList />
      <FAQList />

    </>
  );
};

export default CommercialShifting;