import { memo } from "react";
import { Link } from "react-router-dom";
import "./TrustUsSection.scss";

// ── Inline SVGs — MUI icons hata diye (bundle size kam) ──
const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const IconGallery = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5L5 21" />
  </svg>
);

const IconPlay = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" opacity="0.15" />
    <path d="M10 8l6 4-6 4V8z" />
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.886a.5.5 0 00.611.61l6.101-1.457A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.523-5.17-1.432l-.36-.214-3.736.892.918-3.645-.235-.374A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

const IconCall = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

// ── Card data ──
type CardItem =
  | { type: "link"; to: string; icon: React.ReactNode; label: string; theme: "default" | "whatsapp" | "call" }
  | { type: "anchor"; href: string; icon: React.ReactNode; label: string; theme: "default" | "whatsapp" | "call" };

const CARDS: CardItem[] = [
  { type: "link",   to: "/review",        icon: <IconStar />,     label: "Customer Reviews", theme: "default"   },
  { type: "link",   to: "/photo-gallery", icon: <IconGallery />,  label: "Photo Gallery",    theme: "default"   },
  { type: "link",   to: "/video-gallery", icon: <IconPlay />,     label: "Video Gallery",    theme: "default"   },
  { type: "anchor", href: "https://wa.me/917065994000", icon: <IconWhatsApp />, label: "WhatsApp Chat", theme: "whatsapp" },
  { type: "anchor", href: "tel:+919422799477",          icon: <IconCall />,     label: "Call Now",      theme: "call"     },
];

// ── Single Card ──
const TrustCard = memo((item: CardItem) => {
  const inner = (
    <>
      <div className={`tus-card__icon tus-card__icon--${item.theme}`}>
        {item.icon}
      </div>
      <span className="tus-card__label">{item.label}</span>
      <svg className="tus-card__arrow" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );

  if (item.type === "link") {
    return (
      <Link className={`tus-card tus-card--${item.theme}`} to={item.to} aria-label={item.label}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      className={`tus-card tus-card--${item.theme}`}
      href={item.href}
      target={item.theme === "whatsapp" ? "_blank" : undefined}
      rel={item.theme === "whatsapp" ? "noopener noreferrer" : undefined}
      aria-label={item.label}
    >
      {inner}
    </a>
  );
});
TrustCard.displayName = "TrustCard";

// ── Main ──
export default function TrustUsSection() {
  return (
    <section className="tus-section" aria-labelledby="tus-heading">

      {/* ── Header ── */}
      <div className="tus-header">
        <p className="tus-header__eyebrow">Why Choose Us</p>
        <h2 className="tus-header__title" id="tus-heading">
          Trust Us With{" "}
          <span className="tus-header__highlight">Confidence</span>
        </h2>
        <p className="tus-header__desc">
          Verify our reliability through genuine reviews, real photos, videos,
          or connect with us directly.
        </p>
      </div>

      {/* ── Cards ── */}
      <div className="tus-grid" role="list">
        {CARDS.map((card) => (
          <div role="listitem" key={card.label}>
            <TrustCard {...card} />
          </div>
        ))}
      </div>

    </section>
  );
}