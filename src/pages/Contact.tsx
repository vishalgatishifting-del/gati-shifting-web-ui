import BrandList from "../components/BrandsList";
import ContactForm from "../components/ContactForm";
import FAQList from "../components/FAQList";
import OfficeLocation from "../components/OfficeLocation";
import { Helmet } from "react-helmet-async";
import "./Contact.scss";
import { siteConfig } from "../config/Company";


interface Props {
  successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Channel {
  icon: string;
  label: string;
  value: string;
  badge: string;
  href: string;
  colorClass: string;
}

interface Promise {
  icon: string;
  title: string;
  desc: string;
}

const channels: Channel[] = [
  {
    icon: "ti-phone",
    label: "Call us",
    value: `${siteConfig.phone}`,
    badge: "Mon–Sun, 8am–9pm",
    href: `tel:${siteConfig.phone}`,
    colorClass: "phone",
  },
  {
    icon: "ti-brand-whatsapp",
    label: "WhatsApp",
    value: "Chat for quick queries",
    badge: "Usually replies in 5 min",
    href: siteConfig.socialLinks.whatsapp,
    colorClass: "whatsapp",
  },
  {
    icon: "ti-mail",
    label: "Email us",
    value: "info@gatishiftingpackers.com",
    badge: "Reply within 2 hours",
    href: `mailto:${siteConfig.email.sales}`,
    colorClass: "email",
  },
];

const promises: Promise[] = [
  {
    icon: "🎯",
    title: "100% free estimate",
    desc: "No obligations. Get a detailed quote before committing to anything.",
  },
  {
    icon: "⚡",
    title: "Same-day response",
    desc: "We confirm your enquiry within 30 minutes, guaranteed.",
  },
  {
    icon: "🛡️",
    title: "Insured shipments",
    desc: "Every move is covered — your belongings are fully protected.",
  },
  {
    icon: "💰",
    title: "No hidden charges",
    desc: "The price we quote is the price you pay. Always.",
  },
];

const Contact = ({ successCondition }: Props) => {
  return (
    <>
      <Helmet>
        <title>Contact Gati Shifting Packers | Get a Free Quote</title>
        <meta
          name="description"
          content="Reach out to Gati Shifting Packers for quotes, assistance, or inquiries. Our team is ready to help with your relocation needs through calls, messages, or the contact form."
        />
        <meta
          name="keywords"
          content="Gati Shifting contact, Packers and Movers contact, relocation support, moving service inquiry, Gati Shifting Packers customer care"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Us | Gati Shifting Packers & Movers" />
        <meta
          property="og:description"
          content="Reach out to Gati Shifting Packers for quotes, bookings, and relocation support. Available for home, office, and pan-India moves."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gatishiftingpackers.com" />
        <meta property="og:image" content="https://gatishiftingpackers.com/metaImg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Gati Shifting Packers" />
        <meta
          name="twitter:description"
          content="Contact Gati Shifting Packers for relocation support, free cost estimates, and customer service across India."
        />
        <meta name="twitter:image" content="https://gatishiftingpackers.com/metaImg.png" />
      </Helmet>

      <div id="contact-page">

        {/* ── Hero ── */}
        <section className="contact-hero">
          <p className="contact-eyebrow">Get in touch</p>
          <h1 className="contact-hero-title">
            Your stress-free move starts<br />
            with a <span className="highlight">quick call</span>
          </h1>
          <p className="contact-hero-sub">
            We respond within 30 minutes. Get a free quote, schedule a home
            survey, or just ask a question — our team is available 7 days a week.
          </p>
          <div className="hero-stats">
            <div className="stat-box">
              <span className="stat-num">{siteConfig.stats.totalHomesRelocated}</span>
              <span className="stat-lbl">Families moved safely</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">4.9 ★</span>
              <span className="stat-lbl">Average customer rating</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">Pan-India</span>
              <span className="stat-lbl">Coverage across all states</span>
            </div>
          </div>
        </section>

        {/* ── Contact Channels ── */}
        <section className="channels-section">
          <div className="channels-grid">
            {channels.map((ch) => (
              <a key={ch.label} href={ch.href} className={`ch-card ch-${ch.colorClass}`}>
                <div className="ch-icon-wrap">
                  <i className={`ti ${ch.icon}`} aria-hidden="true" />
                </div>
                <span className="ch-label">{ch.label}</span>
                <span className="ch-value">{ch.value}</span>
                <span className="ch-badge">{ch.badge}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── Contact Form (your existing component) ── */}
        <section className="form-section">
          <div className="form-inner">
            {/* <p className="section-eyebrow">Free quote request</p>
            <h2 className="section-title">Tell us about your move</h2>
            <p className="section-sub">
              Fill in the details below and we'll send you a tailored estimate — no spam, no follow-up calls unless you ask.
            </p> */}
            <ContactForm successCondition={successCondition} />
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="promises-section">
          {/* <p className="section-eyebrow">Our promises</p> */}
          <h2 className="section-title">Why customers choose Gati</h2>
          <div className="promises-grid">
            {promises.map((p) => (
              <div className="promise-card" key={p.title}>
                <div className="promise-icon">{p.icon}</div>
                <div>
                  <p className="promise-title">{p.title}</p>
                  <p className="promise-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <BrandList />
        <OfficeLocation />
        <FAQList />
      </div>
    </>
  );
};

export default Contact;