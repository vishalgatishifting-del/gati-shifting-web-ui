import React from "react";
import styles from "./Badges.module.scss";

// Replace these with your actual image imports

import isoBadge from "../assets/HomePage/isoicon.webp"
import googleRatingBadge from "../assets/HomePage/5star.webp"
import trustedBadge from "../assets/HomePage/trusted.webp"

interface BadgeCardProps {
  imgSrc: string;
  imgAlt: string;
  pill: string;
  pillClass: string;
  title: string;
  description: string;
  accentClass: string;
}

const BadgeCard: React.FC<BadgeCardProps> = ({
  imgSrc,
  imgAlt,
  pill,
  pillClass,
  title,
  description,
  accentClass,
}) => (
  <div className={`${styles.card} ${styles[accentClass]}`}>
    <div className={`${styles.imgWrap} ${styles[`imgWrap__${accentClass}`]}`}>
      <img src={imgSrc} alt={imgAlt} loading="lazy" />
    </div>
    <h3 className={styles.cardTitle}>{title}</h3>
    <span className={`${styles.pill} ${styles[`pill__${pillClass}`]}`}>
      {pill}
    </span>
    <p className={styles.cardDesc}>{description}</p>
  </div>
);

const BadgeSection: React.FC = () => {
  const badges = [
    {
      imgSrc: isoBadge, // replace with: isoBadge
      imgAlt: "ISO 9001:2015 Certification Badge",
      title: "ISO 9001:2015",
      pill: "Certified",
      pillClass: "iso",
      accentClass: "iso",
      description:
        "Certificate No: 2713SAFV2021 — Courier Services, Packers & Movers, Transportation and Storage of Goods.",
    },
    {
      imgSrc: googleRatingBadge, // replace with: googleRatingBadge
      imgAlt: "5 Star Google Rating Badge",
      title: "5 Star Ratings",
      pill: "Google · Facebook",
      pillClass: "rating",
      accentClass: "rating",
      description:
        "Rated 5 stars by our valued clients across multiple platforms for consistent, reliable service.",
    },
    {
      imgSrc: trustedBadge, // replace with: trustedBadge
      imgAlt: "15+ Years of Trust Badge",
      title: "15+ Years of Trust",
      pill: "Since 2007",
      pillClass: "trust",
      accentClass: "trust",
      description:
        "Serving customers since 2007, expanding nationwide to become one of India's best Packers & Movers.",
    },
  ];

  return (
    <section id="badge-section" className={styles.badgeSection}>
      <div className={styles.container}>
        {badges.map((badge) => (
          <BadgeCard key={badge.title} {...badge} />
        ))}
      </div>
    </section>
  );
};

export default BadgeSection;