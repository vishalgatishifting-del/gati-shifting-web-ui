import { memo, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { siteConfig } from "../config/Company";
import ContactForm from "../components/ContactForm";
import "./CustomerSupport.scss";

// ── Lazy-load heavy below-fold components ─────────────────────────────────────
const OfficeLocation     = lazy(() => import("../components/OfficeLocation"));
const AwardCertification = lazy(() => import("../components/AwardCertification"));
const BrandList          = lazy(() => import("../components/BrandsList"));
const FAQList            = lazy(() => import("../components/FAQList"));

// ── Static data outside component ─────────────────────────────────────────────

const CONTACT_CHANNELS = [
  { channel: "Phone",               details: siteConfig.phone },
  {
    channel: "E-mail",
    details: [siteConfig.email.sales, siteConfig.email.info, siteConfig.email.general],
  },
  {
    channel: "Live Chat / WhatsApp",
    details: "Use the chat widget (bottom-right corner) or WhatsApp at +91-72900 08200",
  },
] as const;

const QUICK_CARDS = [
  {
    icon: EmailIcon,
    title: "E-mail Us",
    desc: "Have a query? Get in touch via email and we'll respond within 24 hours.",
    href: `mailto:${siteConfig.email.sales}`,
    label: siteConfig.email.sales,
    color: "#2563eb",
    colorLight: "#eff6ff",
  },
  {
    icon: WhatsAppIcon,
    title: "Live WhatsApp Chat",
    desc: "Chat with us instantly on WhatsApp for real-time support.",
    href: siteConfig.socialLinks.whatsapp,
    label: "Start Chat →",
    color: "#16a34a",
    colorLight: "#f0fdf4",
  },
  {
    icon: PhoneIcon,
    title: "Call Us",
    desc: "Speak directly with our support team for urgent assistance.",
    href: `tel:${siteConfig.phone}`,
    label: siteConfig.phone,
    color: "#dc2626",
    colorLight: "#fef2f2",
  },
] as const;

const SUPPORT_STAGES = [
  {
    Icon: AssignmentTurnedInIcon,
    title: "Before You Book",
    color: "#2563eb",
    colorLight: "#eff6ff",
    items: [
      "Questions about household shifting, office relocation, packing & crating",
      "Estimation requests & customised quotations",
      "Insurance, valuation, and liability clarifications",
      "Moving date flexibility and scheduling",
    ],
  },
  {
    Icon: LocalShippingIcon,
    title: "During Transit",
    color: "#d97706",
    colorLight: "#fffbeb",
    items: [
      "Real-time tracking of your goods",
      "Updates on transit status and estimated delivery",
      "Managing special items — fragile goods, bulky furniture, electronics",
      "Packaging and handling clarifications",
    ],
  },
  {
    Icon: CheckCircleOutlineIcon,
    title: "After Delivery",
    color: "#16a34a",
    colorLight: "#f0fdf4",
    items: [
      "Inspection and report of any missing or damaged items",
      "Claims process and insurance settlement",
      "Feedback, testimonials, and suggestions",
      "Future service booking assistance",
    ],
  },
] as const;

// ── Props ────────────────────────────────────────────────────────────────────
interface Props {
  successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}

// ── Sub-components ────────────────────────────────────────────────────────────

const QuickCard = memo(({ card }: { card: (typeof QUICK_CARDS)[number] }) => {
  const IconComp = card.icon;
  return (
    <a
      className="cs-quick-card"
      href={card.href}
      target={card.href.startsWith("http") ? "_blank" : undefined}
      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
      style={
        {
          "--card-color": card.color,
          "--card-color-light": card.colorLight,
        } as React.CSSProperties
      }
      aria-label={card.title}
    >
      <div className="cs-quick-card__icon">
        <IconComp />
      </div>
      <strong>{card.title}</strong>
      <p>{card.desc}</p>
      <span className="cs-quick-card__cta">{card.label}</span>
    </a>
  );
});
QuickCard.displayName = "QuickCard";

const StageCard = memo(
  ({ stage, index }: { stage: (typeof SUPPORT_STAGES)[number]; index: number }) => {
    const IconComp = stage.Icon;
    return (
      <div
        className="cs-stage-card"
        style={
          {
            "--stage-color": stage.color,
            "--stage-color-light": stage.colorLight,
            animationDelay: `${index * 0.1}s`,
          } as React.CSSProperties
        }
      >
        <div className="cs-stage-card__header">
          <div className="cs-stage-card__icon">
            <IconComp />
          </div>
          <h3>{stage.title}</h3>
        </div>
        <ul>
          {stage.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
);
StageCard.displayName = "StageCard";

// ── Page component ────────────────────────────────────────────────────────────
const CustomerSupport = ({ successCondition }: Props) => (
  <>
    <Helmet>
      <title>Customer Support | Gati Shifting Packers</title>
      <meta
        name="description"
        content="Contact Gati Shifting Packers' 24/7 customer support team. Get help before booking, during transit, or after delivery — via phone, email, or WhatsApp."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://gatishiftingpackers.com/customer-support" />
    </Helmet>

    {/* ── Hero ──────────────────────────────────────────────────────────── */}
    <div className="cs-hero" role="banner">
      <div className="cs-hero__overlay" aria-hidden="true" />
      <div className="cs-hero__content">
        <span className="cs-hero__eyebrow">We're Here For You</span>
        <h1>Customer Support</h1>
        <p>24/7 dedicated assistance — before, during, and after every move.</p>
      </div>
    </div>

    {/* ── Main ─────────────────────────────────────────────────────────── */}
    <section className="cs-section" aria-label="Customer support details">
      <div className="cs-container">

        {/* ── Intro + Contact table ──────────────────────────────────── */}
        <div className="cs-intro">
          <span className="cs-label">Get In Touch</span>
          <h2>Customer Support | Gati Shifting Packers</h2>
          <p>
            Your satisfaction is our top priority. Moving can be stressful —
            our dedicated support team is here to make the entire experience
            smoother. Whether you have a query before booking, need help during
            transit, or want to share feedback after delivery, we're always
            available.
          </p>

          <div className="cs-table-wrap">
            <TableContainer component={Paper} elevation={0} className="cs-table">
              <Table aria-label="Support contact channels">
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Channel</strong></TableCell>
                    <TableCell><strong>Details</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {CONTACT_CHANNELS.map((row) => (
                    <TableRow key={row.channel}>
                      <TableCell>{row.channel}</TableCell>
                      <TableCell>
                        {Array.isArray(row.details) ? (
                          row.details.map((email) => (
                            <a key={email} className="cs-email-link" href={`mailto:${email}`}>
                              {email}
                            </a>
                          ))
                        ) : (
                          row.details
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <p className="cs-response-note">
            ⏱ We aim to respond to all messages within <strong>24 hours</strong> on working days.
          </p>
        </div>

        {/* ── Quick contact cards ────────────────────────────────────── */}
        <div className="cs-quick-grid" aria-label="Quick contact options">
          {QUICK_CARDS.map((card) => (
            <QuickCard key={card.title} card={card} />
          ))}
        </div>

        {/* ── Support stages ─────────────────────────────────────────── */}
        <div className="cs-stages">
          <span className="cs-label">How We Help</span>
          <h2>Support for Every Stage of Your Move</h2>
          <div className="cs-stages__grid">
            {SUPPORT_STAGES.map((stage, i) => (
              <StageCard key={stage.title} stage={stage} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>

    {/* ContactForm stays non-lazy — it's the primary CTA above the fold */}
    <ContactForm successCondition={successCondition} />

    <Suspense fallback={<div className="cs-loading" aria-hidden="true" />}>
      <OfficeLocation />
      <AwardCertification />
      <BrandList />
      <FAQList />
    </Suspense>
  </>
);

export default memo(CustomerSupport);