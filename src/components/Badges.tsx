import React from "react";
import styles from "./Badges.module.scss";

import isoBadge from "../assets/HomePage/isoicon.webp";
import googleRatingBadge from "../assets/HomePage/5star.webp";
import trustedBadge from "../assets/HomePage/trusted.webp";
import { siteConfig } from "../config/Company";

// ── Per-card SVG decorative icons (background watermark) ─────────────────────
const IsoWatermark = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 4L74 22V58L40 76L6 58V22L40 4Z" stroke="currentColor" strokeWidth="2" opacity="0.12"/>
    <path d="M40 14L66 28V56L40 70L14 56V28L40 14Z" stroke="currentColor" strokeWidth="1.5" opacity="0.08"/>
    <circle cx="40" cy="40" r="10" stroke="currentColor" strokeWidth="2" opacity="0.1"/>
  </svg>
);

const RatingWatermark = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 8l6.5 19.8H66L50 39.8l6.2 19.8L40 47l-16.2 12.6L30 39.8 14 27.8h19.5L40 8z"
      stroke="currentColor" strokeWidth="2" opacity="0.12"/>
    <path d="M40 22l3.5 10.5H54l-8.5 6.5 3.2 10.5L40 43.5l-8.7 6 3.2-10.5L26 32.5h10.5L40 22z"
      stroke="currentColor" strokeWidth="1.5" opacity="0.07"/>
  </svg>
);

const TrustWatermark = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 6L70 18V42C70 57 56 68 40 74C24 68 10 57 10 42V18L40 6Z"
      stroke="currentColor" strokeWidth="2" opacity="0.12"/>
    <path d="M40 16L62 25V42C62 53 52 62 40 67C28 62 18 53 18 42V25L40 16Z"
      stroke="currentColor" strokeWidth="1.5" opacity="0.08"/>
    <path d="M30 40l7 7 13-14" stroke="currentColor" strokeWidth="2.5" opacity="0.1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface BadgeConfig {
  imgSrc: string;
  imgAlt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  variant: "iso" | "rating" | "trust";
  Watermark: React.FC;
  stat: string;
  statLabel: string;
}

const BadgeSection: React.FC = () => {
  const badges: BadgeConfig[] = [
    {
      imgSrc: isoBadge,
      imgAlt: "ISO 9001:2015 Certification",
      eyebrow: "Quality Certified",
      title: "ISO 9001:2015",
      subtitle: "Cert No: 2713SAFV2021",
      description: "Internationally certified for Courier Services, Packers & Movers, Transportation and Storage.",
      variant: "iso",
      Watermark: IsoWatermark,
      stat: "2021",
      statLabel: "Certified Since",
    },
    {
      imgSrc: googleRatingBadge,
      imgAlt: "5 Star Google Rating",
      eyebrow: "Customer Rating",
      title: siteConfig.stats.customerRating + " Star Rating",
      subtitle: "Google · Facebook · Justdial",
      description: "Rated top across all major review platforms by thousands of satisfied customers.",
      variant: "rating",
      Watermark: RatingWatermark,
      stat: "1000+",
      statLabel: "Reviews",
    },
    {
      imgSrc: trustedBadge,
      imgAlt: `${siteConfig.stats.totalYearOfExperience} Years of Trust`,
      eyebrow: "Industry Experience",
      title: siteConfig.stats.totalYearOfExperience + " Years of Trust",
      subtitle: `Serving India since ${siteConfig.stats.since}`,
      description: "Expanding nationwide to become one of India's most trusted Packers & Movers.",
      variant: "trust",
      Watermark: TrustWatermark,
      stat: siteConfig.stats.totalYearOfExperience,
      statLabel: "Years",
    },
  ];

  return (
    <section className={styles.badgeSection} aria-label="Trust badges">
      <div className={styles.inner}>

        {/* Section eyebrow */}
        <div className={styles.sectionLabel}>
          <span className={styles.sectionLabel__line} />
          <span className={styles.sectionLabel__text}>Why trust us</span>
          <span className={styles.sectionLabel__line} />
        </div>

        {/* Cards grid */}
        <div className={styles.grid}>
          {badges.map((b, i) => (
            <article
              key={b.variant}
              className={`${styles.card} ${styles[`card--${b.variant}`]}`}
              style={{ "--delay": `${i * 0.1}s` } as React.CSSProperties}
            >
              {/* Decorative watermark */}
              <span className={styles.card__watermark} aria-hidden>
                <b.Watermark />
              </span>

              {/* Top row: image + stat */}
              <div className={styles.card__top}>
                <div className={styles.card__imgBox}>
                  <img
                    src={b.imgSrc}
                    alt={b.imgAlt}
                    loading="lazy"
                    decoding="async"
                    width={60}
                    height={60}
                  />
                </div>
                <div className={styles.card__stat}>
                  <span className={styles.card__statNum}>{b.stat}</span>
                  <span className={styles.card__statLabel}>{b.statLabel}</span>
                </div>
              </div>

              {/* Eyebrow */}
              <span className={styles.card__eyebrow}>{b.eyebrow}</span>

              {/* Title */}
              <h3 className={styles.card__title}>{b.title}</h3>

              {/* Subtitle */}
              <p className={styles.card__subtitle}>{b.subtitle}</p>

              {/* Divider */}
              <span className={styles.card__divider} aria-hidden />

              {/* Description */}
              <p className={styles.card__desc}>{b.description}</p>

              {/* Bottom accent bar */}
              <span className={styles.card__bar} aria-hidden />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BadgeSection;  