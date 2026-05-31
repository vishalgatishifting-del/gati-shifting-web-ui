import { useState } from "react";
import "./WhatWeCare.scss";
import householdShifting from "../assets/WhatWeCater/householdShifting.webp"
import car from "../assets/WhatWeCater/Car.webp"
import warehouse from "../assets/WhatWeCater/warehouse.webp"
import internatioanl from "../assets/WhatWeCater/international.webp"
import office from "../assets/WhatWeCater/office.webp"
import parcel from "../assets/WhatWeCater/parcel.webp"

import truck from "../assets/WhatWeCater/truck.webp"
import supplyChain from "../assets/WhatWeCater/supplychain.webp"
import infrastructure from "../assets/WhatWeCater/infrastructure.jpeg"
import pllogistics from "../assets/WhatWeCater/3pl.png"
import cargo from "../assets/WhatWeCater/cargo.webp"
import odc from "../assets/WhatWeCater/odc.webp"

import bulkCarrier from "../assets/WhatWeCater/bulkCarrier.webp"
import arts from "../assets/WhatWeCater/arts.webp"
import selfStorage from "../assets/WhatWeCater/selfStorage.jpeg"

interface ServiceItem {
  id: string;
  label: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  link?: string;
  icon: React.ReactNode;
}

interface TabData {
  key: string;
  label: string;
  intro: string;
  services: ServiceItem[];
}

// ── Inline SVG Icons (no external deps, no performance hit) ──────────────────

const IcoHousehold = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
    <path d="M9 21V12h6v9"/>
  </svg>
);

const IcoInternational = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <path d="M2 12h20M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9"/>
  </svg>
);

const IcoWarehouse = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="1"/>
    <path d="M2 10h20M6 10V7M12 10V7M18 10V7"/>
    <path d="M2 4l10-2 10 2"/>
    <rect x="9" y="14" width="6" height="7" rx="1"/>
  </svg>
);

const IcoCar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11"/>
    <rect x="2" y="11" width="20" height="6" rx="2"/>
    <circle cx="6.5" cy="17.5" r="1.5"/>
    <circle cx="17.5" cy="17.5" r="1.5"/>
    <path d="M2 14h1M21 14h1"/>
  </svg>
);

const IcoOffice = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="1"/>
    <path d="M3 9h18M9 21V9"/>
    <rect x="12" y="12" width="3" height="3"/>
    <rect x="16" y="12" width="3" height="3"/>
    <rect x="12" y="16" width="3" height="3"/>
    <rect x="16" y="16" width="3" height="3"/>
  </svg>
);

const IcoFineArt = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10"/>
    <path d="M14.5 2.5C14.5 2.5 15 6 12 8s-4 6-1.5 8.5"/>
    <path d="M17 3l4 4-8 8-4-1-1-4 9-7z"/>
  </svg>
);

const IcoSelfStorage = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 8V20a1 1 0 01-1 1H4a1 1 0 01-1-1V8"/>
    <path d="M23 3H1l2 5h18l2-5z"/>
    <path d="M10 12h4"/>
  </svg>
);

const IcoParcel = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10V6a1 1 0 00-.6-.9l-8-3.5a1 1 0 00-.8 0l-8 3.5A1 1 0 003 6v4"/>
    <path d="M12 2.5V13M3 10l9 4 9-4"/>
    <rect x="3" y="13" width="18" height="8" rx="1"/>
    <path d="M8 13v8"/>
  </svg>
);

const IcoBulk = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="11" rx="1"/>
    <path d="M16 8h4l3 5v3h-7V8z"/>
    <circle cx="5.5" cy="17.5" r="2.5"/>
    <circle cx="18.5" cy="17.5" r="2.5"/>
  </svg>
);

// Commercial icons
const IcoSupplyChain = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5" cy="6" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="19" cy="6" r="2"/>
    <circle cx="5" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="19" cy="18" r="2"/>
    <path d="M5 8v8M12 8v8M19 8v8M7 6h3M14 6h3M7 18h3M14 18h3"/>
  </svg>
);

const Ico3PL = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l8 4v6c0 5-3.5 9-8 10C7.5 21 4 17 4 12V6l8-4z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const IcoExim = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const IcoODC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="5" width="16" height="10" rx="1"/>
    <path d="M17 9h3l3 4v3h-6V9z"/>
    <circle cx="5" cy="18" r="2"/><circle cx="14" cy="18" r="2"/><circle cx="20" cy="18" r="2"/>
  </svg>
);

const IcoTransport = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3"/>
    <rect x="9" y="11" width="14" height="10" rx="1"/>
    <circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
  </svg>
);

const IcoInfra = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18M5 21V7l7-4 7 4v14"/>
    <path d="M9 21v-6h6v6"/>
    <path d="M9 10h.01M15 10h.01M9 14h.01M15 14h.01"/>
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────

const tabsData: TabData[] = [
  {
    key: "domestic",
    label: "Domestic",
    intro:
      "We offer unrivaled domestic relocation services as per your specific requirements. We make sure that your household shifting to and from any corner of India remains hassle-free by deploying our distinctive and brilliant moving techniques.",
    services: [
      {
        id: "household", label: "Household Shifting", icon: <IcoHousehold />,
        title: "Household Shifting",
        description: "We are the fore-runners in packing and moving, offering matchless household relocation services with zero-damage commitment.",
        highlights: ["On-time Delivery", "Comprehensive Support", "Wide Coverage", "Risk Coverage"],
        image: householdShifting,
        link: "#",
      },
      {
        id: "international", label: "International Moving", icon: <IcoInternational />,
        title: "International Moving",
        description: "Being the most trusted international removal & storage company, rendering expertise in overseas moving for 38+ years across 182 countries.",
        highlights: ["State-of-the-art Facilities", "Responsive Solutions", "Reasonable Prices", "182 Countries"],
        image: internatioanl,
        link: "#",
      },
      {
        id: "warehousing", label: "Warehousing Services", icon: <IcoWarehouse />,
        title: "Warehousing Services",
        description: "State-of-the-art warehousing ensures your goods are stored safely and efficiently with customized solutions and inventory management.",
        highlights: ["Secure Facilities", "Inventory Management", "Pick & Pack Services", "Flexible Storage"],
        image: warehouse,
        link: "#",
      },
      {
        id: "car", label: "Car Carrier Service", icon: <IcoCar />,
        title: "Car Carriers Service",
        description: "One of the most reputed brands offering reliable and secure car transportation services to every destination across India.",
        highlights: ["High-end Enclosed Carriers", "Skilled Drivers", "Compatible Rates", "Prompt Delivery"],
        image: car,
        link: "#",
      },
      {
        id: "office", label: "Office / Corporate", icon: <IcoOffice />,
        title: "Office / Corporate Shifting",
        description: "Leading movers offering corporate moving solutions, adhering to international quality standards with complete claim settlement.",
        highlights: ["Timely Delivery", "Risk Coverage", "Customer Support", "Instant Claim Settlement"],
        image: office,
        link: "#",
      },
      {
        id: "fineart", label: "Fine Arts & Sculptures", icon: <IcoFineArt />,
        title: "Fine Arts & Sculptures Relocation",
        description: "Proficiency in relocating your sculptures and fine art works in a hassle-free manner with professional crating and door-to-door service.",
        highlights: ["Professional Art Packing", "Smooth Installation", "Door to Door", "On-time Delivery"],
        image: arts,
        link: "#",
      },
      {
        id: "storage", label: "Self-Storage", icon: <IcoSelfStorage />,
        title: "Self-Storage",
        description: "Flexible, secure, and convenient self-storage solutions for both personal and business needs with 24/7 monitoring.",
        highlights: ["Uptime Accessibility", "Secure & Organized", "Flexible Plans", "24/7 Monitoring"],
        image: selfStorage,
        link: "#",
      },
      {
        id: "parcel", label: "Parcel Delivery", icon: <IcoParcel />,
        title: "Parcel Delivery",
        description: "Fast, reliable, and efficient parcel delivery across India with end-to-end tracking for small packages to large consignments.",
        highlights: ["Timely Delivery", "End-to-End Tracking", "Secure Packaging", "Nationwide Coverage"],
        image: parcel,
        link: "#",
      },
      {
        id: "bulk", label: "Bulk Carrier", icon: <IcoBulk />,
        title: "Bulk Carrier",
        description: "Cost-effective bulk transportation for industries requiring large-scale movement of goods — raw materials to finished products.",
        highlights: ["Efficient Transport", "Fleet-Managed", "Nationwide Reach", "On-Time Delivery"],
        image: bulkCarrier,
        link: "#",
      },
    ],
  },
  {
    key: "commercial",
    label: "Commercial",
    intro:
      "We are trusted by numerous organizations worldwide for offering unexpected commercial moving services. Our simplified approach includes thoughtful planning, expert moving assistance, clear communication, and punctuality.",
    services: [
      {
        id: "supplychain", label: "Supply Chain", icon: <IcoSupplyChain />,
        title: "Supply Chain",
        description: "Pioneers in third-party logistics and supply chain management solutions to maintain the profitability and efficiency of your business.",
        highlights: ["Integrated Solutions", "Digital Innovations", "National Presence", "Cost-Effective"],
        image: supplyChain,
        link: "#",
      },
      {
        id: "3pl", label: "3PL Logistics", icon: <Ico3PL />,
        title: "3PL (Third-Party Logistics)",
        description: "Comprehensive 3PL services streamlining your supply chain with warehousing, order fulfillment, and inventory management.",
        highlights: ["End-to-End Management", "Global Reach", "Scalable Solutions", "Cost-Effective"],
        image: pllogistics,
        link: "#",
      },
      {
        id: "exim", label: "Exim Cargo", icon: <IcoExim />,
        title: "Exim Cargo",
        description: "Comprehensive and high-tech export-import solutions using innovative technology — maximizing visibility and reducing cost.",
        highlights: ["Operational Efficiency", "Data Visibility", "Custom Process Upgrades", "Cost Reduction"],
        image: cargo,
        link: "#",
      },
      {
        id: "odc", label: "ODC Transportation", icon: <IcoODC />,
        title: "ODC Transportation",
        description: "Huge fleet of GPS-enabled vehicles providing progressive relocation services at budget-friendly prices with single-window service.",
        highlights: ["Single-Window Service", "Various Trailer Sizes", "Damage-Free Transport", "Route Survey"],
        image: odc,
        link: "#",
      },
      {
        id: "transport", label: "Transport & Logistics", icon: <IcoTransport />,
        title: "Transportation & Logistics",
        description: "One-stop solution for your business's day-to-day logistics and transportation requirements — integrated, safe, and sustainable.",
        highlights: ["Integrated Techniques", "Safe & Secured", "Value-Added Benefits", "Sustainable"],
        image: truck,
        link: "#",
      },
      {
        id: "infra", label: "Infrastructure", icon: <IcoInfra />,
        title: "Infrastructure",
        description: "Top-of-the-line infrastructure and roofing solutions that are advanced, seamless, and integrated — voluminous and corrosion resistant.",
        highlights: ["Voluminous", "Self-Supported", "Corrosion Resistant", "User Friendly"],
        image: infrastructure,
        link: "#",
      },
    ],
  },
];

const WhatWeCaterTo = () => {
  const [activeTab, setActiveTab] = useState("domestic");
  const [activeService, setActiveService] = useState("household");

  const currentTab = tabsData.find((t) => t.key === activeTab)!;
  const currentService =
    currentTab.services.find((s) => s.id === activeService) ?? currentTab.services[0];

  const handleTabChange = (key: string) => {
    setActiveTab(key);
    setActiveService(tabsData.find((t) => t.key === key)!.services[0].id);
  };

  return (
    <section id="cater-section">
      <div className="cater-container">

        <div className="cater-heading">
          <h2>What We Cater To</h2>
          <div className="cater-tabs">
            {tabsData.map((tab) => (
              <button
                key={tab.key}
                className={`cater-tab${activeTab === tab.key ? " active" : ""}`}
                onClick={() => handleTabChange(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="cater-main">

          <div className="cater-left">
            <p className="cater-intro">{currentTab.intro}</p>
            <div className="service-grid">
              {currentTab.services.map((svc) => (
                <button
                  key={svc.id}
                  className={`svc-pill${activeService === svc.id ? " active" : ""}`}
                  onClick={() => setActiveService(svc.id)}
                >
                  <span className="svc-pill__icon">{svc.icon}</span>
                  <span className="svc-pill__label">{svc.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="cater-right" key={activeService}>
            <div className="cater-image-wrap">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="cater-img"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="cater-info">
              <h3>{currentService.title}</h3>
              <p>{currentService.description}</p>
              <ul className="cater-highlights">
                {currentService.highlights.map((h, i) => (
                  <li key={i}>
                    <span className="bullet" />
                    {h}
                  </li>
                ))}
              </ul>
              {/* {currentService.link && (
                <a href={currentService.link} className="cater-link">
                  View More →
                </a>
              )} */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeCaterTo;