import { useEffect, useRef, memo } from "react";
import "./CompanyDescription.scss";


import justDialCertificateImg from "../assets/homePagePng/justdial_certificate.webp"
import MSMECertificateImg from "../assets/homePagePng/msme_certificate.webp"
import incorporationCertificate from "../assets/homePagePng/incorporation_certificate.webp"
import GSTIncorporation from "../assets/homePagePng/gst_certificate.webp"
import ISOcertificate from "../assets/homePagePng/award_certificate.webp"
import gatiCertificate from "../assets/homePagePng/gatishifting_certificate.webp"
import { siteConfig } from "../config/Company";

const CERTIFICATES = [
  { src: justDialCertificateImg, title: "JustDial Certificate" },
  { src: MSMECertificateImg,     title: "MSME Certificate" },
  { src: incorporationCertificate, title: "Incorporation Certificate" },
  { src: GSTIncorporation,       title: "GST Certificate" },
  { src: ISOcertificate,         title: "ISO Certificate" },
  { src: gatiCertificate,        title: "Achievement Certificate" },
];

const STATS = [
  { value: siteConfig.stats.totalYearOfExperience,  label: "Years Experience" },
  { value: siteConfig.stats.totalHappyCustomers, label: "Happy Customers" },
  { value: siteConfig.stats.totalCitiesCovered, label: "Cities Covered" },
  { value: siteConfig.stats.safeDelivery,  label: "Safe Delivery" },
];

// ── CertCard ──
interface CertCardProps {
  src: string;
  title: string;
  index: number;
}

const CertCard = memo(({ src, title }: CertCardProps) => (
   <a
    className="cd-cert-card"
    href={src}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`View ${title}`}
  >
    <div className="cd-cert-card__img-wrap">
      <img
        src={src}
        alt={title}
        loading="lazy"
        decoding="async"
      />
      <div className="cd-cert-card__overlay">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
    <p className="cd-cert-card__title">{title}</p>
  </a>
));
CertCard.displayName = "CertCard";

// ── Main Component ──
export default function CompanyDescription() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef  = useRef<Animation | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Web Animations API — GPU-composited, no layout thrashing
    animRef.current = track.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-50%)" },
      ],
      {
        duration: 28000,
        iterations: Infinity,
        easing: "linear",
      }
    );

    const pause  = () => animRef.current?.pause();
    const resume = () => animRef.current?.play();

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    // pause when tab hidden
    const onVisibility = () =>
      document.hidden ? pause() : resume();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      animRef.current?.cancel();
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <section id="company-description" className="cd-section">

      {/* ── Heading ── */}
      <div className="cd-header">
        <p className="cd-header__eyebrow">Who We Are</p>
        <h2 className="cd-header__title">
          Moving Services by{" "}
          <span className="cd-header__brand">Gati Shifting Packers</span>
        </h2>
      </div>

      {/* ── Stats Bar ── */}
      <div className="cd-stats">
        {STATS.map(({ value, label }) => (
          <div className="cd-stat" key={label}>
            <span className="cd-stat__value">{value}</span>
            <span className="cd-stat__label">{label}</span>
          </div>
        ))}
      </div>

      {/* ── Certificates Marquee ── */}
      <div className="cd-marquee" aria-label="Our Certificates">
        {/* fade edges */}
        <div className="cd-marquee__fade cd-marquee__fade--left"  aria-hidden />
        <div className="cd-marquee__fade cd-marquee__fade--right" aria-hidden />

        <div className="cd-marquee__track" ref={trackRef}>
          {/* duplicate for seamless loop */}
          {[...CERTIFICATES, ...CERTIFICATES].map((cert, i) => (
            <CertCard key={i} src={cert.src} title={cert.title} index={i} />
          ))}
        </div>
      </div>

      {/* ── Text Block ── */}
      <div className="cd-text">
        <div className="cd-text__quote">
          <svg className="cd-text__quote-icon" viewBox="0 0 40 30" fill="currentColor">
            <path d="M0 30V18C0 8.4 5.6 2.4 16.8 0l2.4 3.6C13.6 5.2 10.4 8.4 9.6 13.2H16V30H0zm22 0V18C22 8.4 27.6 2.4 38.8 0l2.4 3.6C35.6 5.2 32.4 8.4 31.6 13.2H38V30H22z" />
          </svg>
          <p>
            Gati Shifting Packers PVT LTD. are always ready to help make the
            moving and packing experience excellent, more efficient and easier
            for you and your family. Just sit back, chill out and know that you
            are in safe hands!
          </p>
        </div>

        <div className="cd-text__body">
          <p>
            Relocating to a new place can be a tiring and difficult process.
            There are many things to arrange and pack, including heavy
            furniture, electrical appliances and fragile and valuable antique
            items.
          </p>
          <p>
            Gati Shifting Packers's goal is to make your relocating experience
            as trouble-free as possible. Let us manage all of the difficult
            work. Our job is to be sure that your shifting is complete on time,
            every time.
          </p>
        </div>
      </div>

    </section>
  );
}