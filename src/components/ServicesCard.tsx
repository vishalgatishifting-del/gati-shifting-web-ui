import { memo } from "react";
import { Link } from "react-router-dom";
import "./ServicesCard.scss";

// ── Static data outside component (avoids re-creation on every render) ────
interface Service {
  icon: string;        // SVG path data
  title: string;
  desc: string;
  to: string;
  label: string;
}

// Inline SVG paths — zero icon-library imports, zero extra network requests
const ICONS = {
  box: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
  car: "M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-4h10l2 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2m-9 0h6m-7-6h8M7 11v.01M17 11v.01",
  building: "M3 21h18M9 8h1m-1 4h1m4-4h1m-1 4h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16",
  ship: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1M19.5 14c.3-1 .5-2.1.5-3.2A9 9 0 1 0 3 14m7-6v2h4V8m-2 2v5",
  plane: "M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z",
  forklift: "M3 17H2v-5l3-5h9v10H3zm14 0V9h4v8h-4zM7 17v-3h4v3H7zM5 9h7V7H8l-3 2z",
};

const SERVICES: Service[] = [
  {
    icon: ICONS.box,
    title: "Packing & Moving",
    desc: "Complete household packing, fragile item handling, and selective packing — tailored to your exact requirements.",
    to: "/home-shifting",
    label: "01",
  },
  {
    icon: ICONS.car,
    title: "Car Transport Services",
    desc: "India's finest car carrier network. Trusted by corporates and individuals for safe, timely vehicle delivery.",
    to: "/car-bike-transport",
    label: "02",
  },
  {
    icon: ICONS.building,
    title: "Corporate Goods Relocation",
    desc: "Reliable cargo moving for enterprises. We handle office and industrial goods relocation end-to-end.",
    to: "/commercial-shifting",
    label: "03",
  },
  {
    icon: ICONS.ship,
    title: "Freight Forwarding",
    desc: "Air and sea freight solutions backed by an efficient logistics team with nationwide reach.",
    to: "/freight-forwarding",
    label: "04",
  },
  {
    icon: ICONS.plane,
    title: "International Logistics",
    desc: "Global relocation services via air and sea. We handle customs, documentation, and last-mile delivery.",
    to: "/international-moves",
    label: "05",
  },
  {
    icon: ICONS.forklift,
    title: "Loading & Unloading",
    desc: "Skilled teams using pulleys, lifters, and safety equipment to handle goods at every stage of relocation.",
    to: "/loading-unloading",
    label: "06",
  },
];

// ── Sub-component — memoized so parent re-renders don't touch cards ───────
interface CardProps {
  service: Service;
  img: string;
  imgAlt: string;
}

const ServiceCard = memo(({ service, img, imgAlt }: CardProps) => (
  <article className="sc-card">
    <div className="sc-card__img-wrap">
      <img
        src={img}
        alt={imgAlt}
        loading="lazy"
        width={400}
        height={190}
        className="sc-card__img"
      />
      {/* Icon badge overlay */}
      <span className="sc-card__icon-badge" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
          <path d={service.icon} />
        </svg>
      </span>
      <span className="sc-card__number" aria-hidden="true">
        {service.label} / {String(SERVICES.length).padStart(2, "0")}
      </span>
    </div>

    <div className="sc-card__body">
      <h3 className="sc-card__title">{service.title}</h3>
      <div className="sc-card__divider" aria-hidden="true" />
      <p className="sc-card__desc">{service.desc}</p>
      <Link to={service.to} className="sc-card__link" aria-label={`Learn more about ${service.title}`}>
        Learn more
        {/* Inline arrow SVG — no import needed */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </article>
));

ServiceCard.displayName = "ServiceCard";

// ── Props — pass your imported images in order matching SERVICES array ────
interface Props {
  images: string[];          // [truckImg, carImg, shipImg, ship2, airplaneImg, truck2]
  imageAlts?: string[];      // optional alt overrides
}

const ServicesCards = ({ images, imageAlts }: Props) => (
  <section id="about-company-cards" aria-labelledby="sc-heading">
    {/* Accessible heading for screen readers */}
    <div className="sc-header">
      <span className="sc-eyebrow">What we offer</span>
      <h2 className="sc-heading" id="sc-heading">
        End-to-end relocation services
      </h2>
      <p className="sc-subheading">
        From packing to international logistics — we handle it all with care and precision.
      </p>
    </div>

    <div className="sc-grid">
      {SERVICES.map((service, i) => (
        <ServiceCard
          key={service.label}
          service={service}
          img={images[i]}
          imgAlt={imageAlts?.[i] ?? service.title}
        />
      ))}
    </div>
  </section>
);

export default memo(ServicesCards);