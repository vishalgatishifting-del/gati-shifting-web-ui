import { useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./About.scss";
import about_company_photo from "../assets/about_company_photo.png";

import houseShiftingImg from "../assets/AboutPage/household.webp";
import storageImg from "../assets/storage_img.jpg";
import internationalImg from "../assets/AboutPage/international.webp";
import carImg from "../assets/AboutPage/Car.webp";
import bikeImg from "../assets/AboutPage/Bike.webp";
import petImg from "../assets/pet_img.jpg";
import officeImg from "../assets/AboutPage/office.webp";
import commercialImg from "../assets/AboutPage/commercial.webp";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

// Partners Logo
import dtdc from "../assets/dtdc.png";
import dhl from "../assets/dhl.png";
import bluedart from "../assets/blue_dart.png";
import xpressbees from "../assets/xpressbee.png";
import delhivery from "../assets/delhivery.png";
import aramex from "../assets/partners/aramex-logo-english.webp";
import ecom from "../assets/partners/ecom-express.webp";
import icWhite from "../assets/partners/ic-white-logo.abea573f.webp";
import fedex from "../assets/partners/logo-fedex.webp";
import ups from "../assets/partners/ups-logo.webp";
import sb from "../assets/partners/logo-sb.webp";
import professional from "../assets/partners/Professional-ouriers.webp";
import rmg from "../assets/partners/rmg_logo.webp";
import shadowfax from "../assets/partners/Shadowfax.webp";
import trackon from "../assets/partners/trackon_logo.webp";

// State Images
import andhra_pradesh from "../assets/andhra-pradesh.jpeg";
import arunachal_pradesh from "../assets/arunachal-pradesh.jpeg";
import assam from "../assets/assam.jpeg";
import bihar from "../assets/bihar.jpeg";
import chhattisgarh from "../assets/chhattisgarh.jpeg";
import goa from "../assets/goa.jpeg";
import gujarat from "../assets/gujarat.jpeg";
import haryana from "../assets/haryana.jpeg";
import himachal_pradesh from "../assets/himachal-pradesh.jpeg";
import jharkhand from "../assets/jharkhand.jpeg";
import karnataka from "../assets/karnataka.jpeg";
import kerala from "../assets/kerala.jpeg";
import madhya_pradesh from "../assets/madhya-pradesh.jpeg";
import maharashtra from "../assets/maharashtra.jpeg";
import manipur from "../assets/manipur.jpeg";
import meghalaya from "../assets/meghalaya.jpeg";
import mizoram from "../assets/mizoram.jpeg";
import nagaland from "../assets/nagaland.jpeg";
import odisha from "../assets/odisha.jpeg";
import punjab from "../assets/punjab.jpeg";
import rajasthan from "../assets/rajasthan.jpeg";
import sikkim from "../assets/sikkim.jpeg";
import tamil_nadu from "../assets/tamil-nadu.jpeg";
import telangana from "../assets/telangana.jpeg";
import tripura from "../assets/tripura.jpeg";
import uttar_pradesh from "../assets/uttar-pradesh.jpeg";
import uttarakhand from "../assets/uttarakhand.jpeg";
import west_bengal from "../assets/west-bengal.jpeg";
import andaman_nicobar from "../assets/andaman-nicobar.jpeg";
import dadra_nagar_haveli from "../assets/dadra-nagar-haveli.jpeg";
import daman_diu from "../assets/daman-diu.jpeg";
import jammu_kashmir from "../assets/jammu-kashmir.jpeg";
import ladakh from "../assets/ladakh.jpeg";
import puducherry from "../assets/puducherry.jpeg";

// International Images
import bangladesh from "../assets/internationalPresence/bangladesh.webp";
import canada from "../assets/internationalPresence/canada.webp";
import india from "../assets/internationalPresence/india.webp";
import malaysia from "../assets/internationalPresence/malaysia.webp";
import nepal from "../assets/internationalPresence/nepal.webp";
import portBlair from "../assets/internationalPresence/port-blair.webp";
import russia from "../assets/internationalPresence/russia.webp";
import singapore from "../assets/internationalPresence/singapore.webp";
import uae from "../assets/internationalPresence/uae.webp";
import uk from "../assets/internationalPresence/uk.webp";
import usa from "../assets/internationalPresence/usa.webp";

// MUI Icons
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import Groups3Icon from "@mui/icons-material/Groups3";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper,
} from "@mui/material";
import BrandList from "../components/BrandsList";
import { siteConfig } from "../config/Company";

// ─── Static Data ────────────────────────────────────────────────────────────

const FEATURES = [
  "100% Safety Assurance",
  "Skilled & Trained Team",
  "24/7 Real-Time Support",
  "On-Time Pickup & Delivery",
  "Premium Packing Supplies",
  "Pan-India Coverage",
] as const;

const SERVICES = [
  { src: houseShiftingImg, label: "Household",    alt: "Professional house shifting services by Gati Shifting Packers" },
  { src: commercialImg,    label: "Luggage",       alt: "Safe and reliable commercial shifting by Gati Shifting Packers" },
  { src: bikeImg,          label: "Bike",          alt: "Safe bike and motorcycle transportation services" },
  { src: carImg,           label: "Car",           alt: "Secure vehicle transport by Gati Shifting Packers" },
  { src: petImg,           label: "Pet",           alt: "Professional pet relocation services" },
  { src: internationalImg, label: "International", alt: "International movers and packers" },
  { src: officeImg,        label: "Office",        alt: "Secure and efficient office shifting" },
  { src: storageImg,       label: "Storage",       alt: "Safe and reliable storage services" },
] as const;

const WHY_CARDS = [
  { Icon: LocalPoliceIcon,  title: "10+ Years Experience",   desc: "Proven expertise in safe and reliable relocations across India." },
  { Icon: Groups3Icon,      title: "Verified Teams",          desc: "All staff are trained and background verified for professionalism." },
  { Icon: LocalShippingIcon,title: "Door-to-Door Shifting",   desc: "We pick up and deliver right from your doorstep nationwide." },
  { Icon: CurrencyRupeeIcon,title: "Transparent Pricing",     desc: "Upfront pricing with no hidden charges." },
  { Icon: SupportAgentIcon, title: "24/7 Support",            desc: "Always available to assist you with tracking and help." },
] as const;

const PARTNER_ROWS = [
  [{ src: aramex,      alt: "Aramex",       dark: false }],
  [
    { src: dtdc,        alt: "DTDC",        dark: false },
    { src: fedex,       alt: "FedEx",       dark: true  },
    { src: professional,alt: "Professional",dark: false },
    { src: trackon,     alt: "Trackon",     dark: false },
  ],
  [
    { src: dhl,         alt: "DHL",         dark: false },
    { src: bluedart,    alt: "Blue Dart",   dark: false },
    { src: xpressbees,  alt: "Xpressbees",  dark: false },
    { src: ecom,        alt: "Ecom Express",dark: true  },
    { src: ups,         alt: "UPS",         dark: false },
  ],
  [
    { src: rmg,         alt: "RMG",         dark: false },
    { src: delhivery,   alt: "Delhivery",   dark: false },
    { src: icWhite,     alt: "IC Courier",  dark: true  },
    { src: sb,          alt: "SB Courier",  dark: false },
  ],
  [{ src: shadowfax,   alt: "Shadowfax",   dark: false }],
];

const STATE_IMAGES = [
  { src: andhra_pradesh,     title: "Andhra Pradesh" },
  { src: arunachal_pradesh,  title: "Arunachal Pradesh" },
  { src: assam,              title: "Assam" },
  { src: bihar,              title: "Bihar" },
  { src: chhattisgarh,       title: "Chhattisgarh" },
  { src: goa,                title: "Goa" },
  { src: gujarat,            title: "Gujarat" },
  { src: haryana,            title: "Haryana" },
  { src: himachal_pradesh,   title: "Himachal Pradesh" },
  { src: jharkhand,          title: "Jharkhand" },
  { src: karnataka,          title: "Karnataka" },
  { src: kerala,             title: "Kerala" },
  { src: madhya_pradesh,     title: "Madhya Pradesh" },
  { src: maharashtra,        title: "Maharashtra" },
  { src: manipur,            title: "Manipur" },
  { src: meghalaya,          title: "Meghalaya" },
  { src: mizoram,            title: "Mizoram" },
  { src: nagaland,           title: "Nagaland" },
  { src: odisha,             title: "Odisha" },
  { src: punjab,             title: "Punjab" },
  { src: rajasthan,          title: "Rajasthan" },
  { src: sikkim,             title: "Sikkim" },
  { src: tamil_nadu,         title: "Tamil Nadu" },
  { src: telangana,          title: "Telangana" },
  { src: tripura,            title: "Tripura" },
  { src: uttar_pradesh,      title: "Uttar Pradesh" },
  { src: uttarakhand,        title: "Uttarakhand" },
  { src: west_bengal,        title: "West Bengal" },
  { src: andaman_nicobar,    title: "Andaman & Nicobar" },
  { src: dadra_nagar_haveli, title: "Dadra & Nagar Haveli" },
  { src: daman_diu,          title: "Daman & Diu" },
  { src: jammu_kashmir,      title: "Jammu & Kashmir" },
  { src: ladakh,             title: "Ladakh" },
  { src: puducherry,         title: "Puducherry" },
];

const INTL_IMAGES = [
  { src: bangladesh, title: "Bangladesh" },
  { src: canada,     title: "Canada" },
  { src: india,      title: "India" },
  { src: malaysia,   title: "Malaysia" },
  { src: nepal,      title: "Nepal" },
  { src: portBlair,  title: "Port Blair" },
  { src: russia,     title: "Russia" },
  { src: singapore,  title: "Singapore" },
  { src: uae,        title: "Dubai (UAE)" },
  { src: uk,         title: "United Kingdom" },
  { src: usa,        title: "United States" },
];

const COMPARISON_ROWS = [
  { feature: "Certified Vehicle",  local: true,  us: "+ Insurance Cover" },
  { feature: "Vetted Drivers",     local: false, us: "+ Police Verified" },
  { feature: "Tracking System",    local: false, us: "+ App Updates" },
  { feature: "Packing Quality",    local: true,  us: "+ Recyclable Wraps" },
  { feature: "Furniture Handling", local: true,  us: "+ Tools Included" },
  { feature: "Staff Support",      local: false, us: "+ Coordinator" },
  { feature: "Cushioning",         local: false, us: "+ Dust-Free" },
  { feature: "Storage",            local: false, us: "+ Temp Regulated" },
  { feature: "Item Protection",    local: false, us: "+ Full Coverage" },
  { feature: "Helpline",           local: false, us: "+ Move Advisor" },
  { feature: "Pricing",            local: false, us: "+ Transparent" },
  { feature: "Eco-Friendly",       local: false, us: "+ Green Materials" },
];

const SLIDER_SETTINGS = {
  dots: false,
  infinite: true,
  slidesToShow: 9,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 600,
  cssEase: "ease-in-out",
  pauseOnHover: true,
  swipe: true,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 7 } },
    { breakpoint: 1024, settings: { slidesToShow: 6 } },
    { breakpoint: 768,  settings: { slidesToShow: 4 } },
    { breakpoint: 480,  settings: { slidesToShow: 3 } },
  ],
};

// ─── Component ──────────────────────────────────────────────────────────────

interface AboutUsProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}

const About: React.FC<AboutUsProps> = ({ setOpen, successCondition }) => {
  const handleEnquiry = useCallback(() => setOpen(true), [setOpen]);

  return (
    <>
      <Helmet>
        <title>About Gati Shifting Packers</title>
        <meta
          name="description"
          content="Gati Shifting Packers is a trusted name for safe and affordable relocation services across India. We provide expert solutions in Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, and Surat."
        />
        <meta
          name="keywords"
          content="Gati Shifting Packers in Delhi, Gati Shifting Packers in Mumbai, Gati Shifting Packers in Bangalore, Gati Shifting Packers in Hyderabad, Gati Shifting Packers in Chennai, Gati Shifting Packers in Kolkata, Gati Shifting Packers in Pune, Gati Shifting Packers in Ahmedabad, Gati Shifting Packers in Surat"
        />
        <meta name="author" content="Rohan" />
        <meta property="og:title" content="About Gati Shifting Packers – Trusted Packers and Movers in India" />
        <meta property="og:description" content="Reliable relocation services in Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Surat and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gatishiftingpackers.com/about" />
        <meta property="og:image" content="https://gatishiftingpackers.com/newMetaImg.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Gati Shifting Packers – Trusted Packers and Movers in India" />
        <meta name="twitter:description" content="Reliable relocation services across India." />
        <meta name="twitter:image" content="https://gatishiftingpackers.com/newMetaImg.jpg" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content="en" />
        <link rel="canonical" href="https://gatishiftingpackers.com/about" />
      </Helmet>

      {/* ── 1. About Hero ─────────────────────────────────────── */}
      <section id="company-info" aria-label="About Gati Shifting Packers">
        <div className="about__inner">
          <div className="about__img-col">
            <div className="about__img-frame">
              <img
                src={about_company_photo}
                alt="Gati Shifting Packers – trusted packers and movers across India"
                title="About Gati Shifting Packers"
                width={560}
                height={420}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="about__img-accent" aria-hidden="true" />
            <div className="about__img-badge">
              <span className="badge__icon" aria-hidden="true">✦</span>
              <div className="badge__text">
                <strong>{siteConfig.stats.totalHappyCustomers}+ Moves Done</strong>
                <span>Trusted Across India</span>
              </div>
            </div>
          </div>

          <div className="about__text-col">
            <span className="section-eyebrow">Who We Are</span>
            <h1 className="about__heading">
              Relocation Made<br />
              <span className="about__heading--accent">Simple &amp; Stress-Free</span>
            </h1>
            <p className="about__desc">
              At Gati Shifting Packers, we redefine the moving experience with
              end-to-end solutions across India. Whether relocating locally or
              interstate, our expert team handles careful packing, timely
              transport, and safe delivery — with transparent pricing and
              personalized plans.
            </p>
            <hr className="about__divider" aria-hidden="true" />
            <ul className="about__features" aria-label="Key highlights">
              {FEATURES.map((label) => (
                <li key={label} className="about__feature-item">
                  <span className="feature__dot" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
            <div className="about__cta-row">
              <button
                className="btn btn--primary"
                onClick={handleEnquiry}
                type="button"
              >
                Enquiry Now
              </button>
              <a href="#our-services" className="btn btn--ghost">
                Our Services →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Our Services ───────────────────────────────────── */}
      <section id="our-services" aria-labelledby="services-heading">
        <div className="section-header">
          <span className="section-eyebrow">What We Offer</span>
          <h2 id="services-heading" className="section-title">Our Services</h2>
        </div>
        <div className="services__grid">
          {SERVICES.map(({ src, label, alt }) => (
            <div key={label} className="service-card">
              <div className="service-card__img-wrap">
                <img src={src} alt={alt} title={label} loading="lazy" decoding="async" />
              </div>
              <span className="service-card__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Comparison Table ───────────────────────────────── */}
      <section id="table-section" aria-labelledby="comparison-heading">
        <div className="section-header">
          <span className="section-eyebrow">How We Compare</span>
          <h2 id="comparison-heading" className="section-title">Service Comparison</h2>
        </div>
        <div className="table-wrap">
          <TableContainer component={Paper} elevation={0} className="comparison-table-container">
            <Table aria-label="Service comparison table">
              <TableHead>
                <TableRow className="table-head-row">
                  <TableCell align="left"><b>Service Feature</b></TableCell>
                  <TableCell align="center"><b>Typical Local Movers</b></TableCell>
                  <TableCell align="center"><b>Gati Shifting Packers</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {COMPARISON_ROWS.map(({ feature, local, us }) => (
                  <TableRow key={feature} className="table-body-row">
                    <TableCell align="left" className="feature-cell">{feature}</TableCell>
                    <TableCell align="center">
                      {local
                        ? <CheckIcon className="icon-check" />
                        : <CloseIcon className="icon-close" />}
                    </TableCell>
                    <TableCell align="center">
                      <span className="us-cell">
                        <CheckIcon className="icon-check" />
                        <span className="us-extra">{us}</span>
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </section>

      {/* ── 4. Partners ───────────────────────────────────────── */}
      <section id="partners" aria-labelledby="partners-heading">
        <div className="section-header">
          <span className="section-eyebrow">Logistics Network</span>
          <h2 id="partners-heading" className="section-title">Our Service Partners</h2>
        </div>
        <div className="partners__grid">
          {PARTNER_ROWS.map((row, ri) => (
            <div key={ri} className="partners__row">
              {row.map(({ src, alt, dark }) => (
                <div key={alt} className={`partner-card${dark ? " partner-card--dark" : ""}`}>
                  <img src={src} alt={alt} title={alt} loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Presence ───────────────────────────────────────── */}
      <section id="presence" aria-labelledby="presence-heading">
        <div className="section-header">
          <span className="section-eyebrow">Where We Operate</span>
          <h2 id="presence-heading" className="section-title">National Presence</h2>
        </div>
        <div className="slider-container">
          <Slider {...SLIDER_SETTINGS}>
            {STATE_IMAGES.map((item) => (
              <div key={item.title} className="presence-card">
                <div className="presence-card__img">
                  <img
                    src={item.src}
                    alt={`Gati Shifting Packers services in ${item.title}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span>{item.title}</span>
              </div>
            ))}
          </Slider>
        </div>

        <div className="section-header section-header--mt">
          <h2 className="section-title">International Presence</h2>
        </div>
        <div className="slider-container">
          <Slider {...SLIDER_SETTINGS}>
            {INTL_IMAGES.map((item) => (
              <div key={item.title} className="presence-card">
                <div className="presence-card__img">
                  <img
                    src={item.src}
                    alt={`Gati Shifting Packers services in ${item.title}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span>{item.title}</span>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* ── 6. Why Choose Us ──────────────────────────────────── */}
      <section id="why-choose-sec" aria-labelledby="why-heading">
        <div className="section-header">
          <span className="section-eyebrow">Our Edge</span>
          <h2 id="why-heading" className="section-title">Why Choose Gati Packers &amp; Movers</h2>
        </div>
        <div className="why__grid">
          {WHY_CARDS.map(({ Icon, title, desc }) => (
            <div key={title} className="why-card">
              <div className="why-card__icon" aria-hidden="true">
                <Icon />
              </div>
              <h3 className="why-card__title">{title}</h3>
              <p className="why-card__desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. Brands + Contact ───────────────────────────────── */}
      <BrandList />
      <ContactForm successCondition={successCondition} />

    </>
  );
};

export default About;