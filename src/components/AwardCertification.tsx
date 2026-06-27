
import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import moves from "../assets/transport.png";
import satisfaction from "../assets/satisfaction.png";
import city from "../assets/city.png";
import awards from "../assets/awards.png";
import "./AwardCertification.scss";
import { siteConfig } from "../config/Company";

// ── Types ──────────────────────────────────────────────────────────────────
interface StatCard {
  img: string;
  imgAlt: string;
  icon: React.ReactNode;
  countEnd: number;
  countSuffix: string;
  label: string;
  description: string;
}

// ── Data ───────────────────────────────────────────────────────────────────
const STAT_CARDS: StatCard[] = [
  {
    img: moves,
    imgAlt: "Gati has completed over 10,000 successful relocations across India",
    icon: <LocalShippingIcon />,
    countEnd: parseInt(siteConfig.stats.totalHappyCustomers.replace(/,/g, "")),
    countSuffix: "K+",
    label: "Moves",
    description: "We've completed over 10,000 successful relocations nationwide.",
  },
  {
    img: satisfaction,
    imgAlt: "Customer satisfaction rating 4.9 out of 5",
    icon: <ThumbUpIcon />,
    countEnd: parseInt(siteConfig.stats.safeDelivery),
    countSuffix: "%",
    label: "Satisfaction",
    description: "Our customers rate us 4.9/5 for reliable, friendly service.",
  },
  {
    img: city,
    imgAlt: "Moving services available in 180+ cities across India",
    icon: <LocationCityIcon />,
    countEnd: parseInt(siteConfig.stats.totalCitiesCovered),
    countSuffix: "+",
    label: "Cities",
    description: "We offer moving services in over 180 cities across India.",
  },
  {
    img: awards,
    imgAlt: "Company receiving best packers and movers industry award",
    icon: <EmojiEventsIcon />,
    countEnd: 25,
    countSuffix: "+",
    label: "Awards",
    description: "Recognized by leading industry bodies for excellence in service.",
  },
];

// ── Animation variants ─────────────────────────────────────────────────────
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut", delay },
  }),
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ── Component ──────────────────────────────────────────────────────────────
const AwardCertification = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,   // fires once — avoids re-animating on scroll back
    threshold: 0.1,
  });

  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="award-certifications" ref={sectionRef} aria-labelledby="ac-heading">

      {/* ── Header ─────────────────────────────────────── */}
      <motion.div
        ref={headingRef}
        className="ac-header"
        variants={headingVariants}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
      >
        <p className="ac-eyebrow">Our Track Record</p>
        <h2 id="ac-heading" className="ac-title">Awards &amp; Certifications</h2>
      </motion.div>

      {/* ── Cards grid ─────────────────────────────────── */}
      <div className="ac-grid" role="list">
        {STAT_CARDS.map((card, i) => (
          <motion.article
            key={i}
            className="ac-card"
            role="listitem"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={i * 0.1}
          >
            {/* Image */}
            <img
              src={card.img}
              alt={card.imgAlt}
              loading="lazy"
              decoding="async"
              className="ac-card__img"
            />

            {/* Body */}
            <div className="ac-card__body">
              {/* Icon */}
              <span className="ac-card__icon" aria-hidden="true">
                {card.icon}
              </span>

              {/* CountUp number */}
              <p className="ac-card__num" aria-label={`${card.countEnd}${card.countSuffix} ${card.label}`}>
                {inView ? (
                  <CountUp
                    start={0}
                    end={card.countEnd}
                    duration={2.2}
                    suffix={card.countSuffix}
                    separator=","
                    useEasing
                  />
                ) : (
                  `0${card.countSuffix}`
                )}
              </p>

              <p className="ac-card__label">{card.label}</p>

              <hr className="ac-card__divider" aria-hidden="true" />

              <p className="ac-card__desc">{card.description}</p>
            </div>
          </motion.article>
        ))}
      </div>

    </section>
  );
};

export default AwardCertification;