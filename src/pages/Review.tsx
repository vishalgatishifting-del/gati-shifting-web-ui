import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";
import ReviewForm from "../components/ReviewForm";
import "./Review.scss";
import { siteConfig } from "../config/Company";

interface ReviewProps {
  successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ReviewItem {
  id: number;
  category: string;
  name: string;
  city: string;
  initial: string;
  avatarColor: string;
  stars: number;
  title: string;
  quote: string;
  featured?: boolean;
}

const REVIEWS: ReviewItem[] = [
  {
    id: 1,
    category: "domestic",
    name: "Arjun S.",
    city: "Delhi → Bangalore",
    initial: "A",
    avatarColor: "#C87941",
    stars: 4,
    title: "Smooth domestic move",
    quote:
      "Gati made our move from Delhi to Bangalore seamless. The team was punctual and professional throughout.",
    featured: true,
  },
  {
    id: 2,
    category: "international",
    name: "Pooja M.",
    city: "Mumbai → Dubai",
    initial: "P",
    avatarColor: "#4A90A4",
    stars: 5,
    title: "Excellent international support",
    quote:
      "Moved from Mumbai to Dubai. Excellent support at every step — documentation, packing, customs clearance, everything handled smoothly.",
  },
  {
    id: 3,
    category: "domestic",
    name: "Ravi K.",
    city: "Mumbai → Chennai",
    initial: "R",
    avatarColor: "#B94040",
    stars: 4,
    title: "Great packing quality",
    quote:
      "Boxes were well-labelled and nothing broke. Even my glass items arrived safely. Worth every rupee.",
  },
  {
    id: 4,
    category: "domestic",
    name: "Simran T.",
    city: "Pune → Hyderabad",
    initial: "S",
    avatarColor: "#6B6B6B",
    stars: 3,
    title: "Fast and reliable",
    quote:
      "They delivered from Pune to Hyderabad a day early. Crew was hardworking but carton pickup timing was a bit inconvenient.",
  },
  {
    id: 5,
    category: "bike",
    name: "Neeraj B.",
    city: "Mumbai → Chennai",
    initial: "N",
    avatarColor: "#C87941",
    stars: 5,
    title: "Bike arrived scratch-free",
    quote:
      "My bike arrived in Chennai in perfect condition — no scratches, no dents. The packaging was solid and they were on time.",
  },
  {
    id: 6,
    category: "office",
    name: "Megha R.",
    city: "Mumbai → Gurgaon",
    initial: "M",
    avatarColor: "#7B3080",
    stars: 4,
    title: "Weekend office relocation",
    quote:
      "Relocated our entire office to Gurgaon over the weekend with zero downtime. Impressive planning and execution.",
    featured: true,
  },
  {
    id: 7,
    category: "furniture",
    name: "Kavita D.",
    city: "Bhopal → Pune",
    initial: "K",
    avatarColor: "#A0409A",
    stars: 5,
    title: "No damage, no stress",
    quote:
      "Every piece of furniture arrived in perfect condition. The packing was meticulous and the team was courteous.",
  },
  {
    id: 8,
    category: "pet",
    name: "Suresh P.",
    city: "Kolkata → Bangalore",
    initial: "S",
    avatarColor: "#2A8A8A",
    stars: 4,
    title: "Dog handled with care",
    quote:
      "They handled my dog with so much care and kept me updated throughout the journey. Really thankful!",
  },
  {
    id: 9,
    category: "domestic",
    name: "Sk Shani",
    city: "Local move",
    initial: "S",
    avatarColor: "#C87941",
    stars: 4,
    title: "Best packers and movers",
    quote:
      "Moved a 3-BHK in just seven hours. Team was friendly, hardworking and really fast. Cost was reasonable and well worth it.",
  },
  {
    id: 10,
    category: "domestic",
    name: "Kumar",
    city: "House shift",
    initial: "K",
    avatarColor: "#4A90A4",
    stars: 5,
    title: "Zero breakage on glass items",
    quote:
      "Not a single item was broken or scratched — including all my glass products. Best movers I've used.",
  },
  {
    id: 11,
    category: "domestic",
    name: "Mayan Kumar",
    city: "Mumbai → Chennai",
    initial: "M",
    avatarColor: "#B94040",
    stars: 4,
    title: "Value for money",
    quote:
      "Everything was safe and delivered on time as promised. My friend recommended them and it was totally worth it.",
  },
  {
    id: 12,
    category: "bike",
    name: "Ilisha Raj",
    city: "Mumbai → Ahmedabad",
    initial: "I",
    avatarColor: "#3B7A3B",
    stars: 4,
    title: "Good pickup, room for improvement",
    quote:
      "Collection was great — on time and courteous. Packaging was solid. Last-mile delivery was a bit delayed, but overall satisfied.",
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="rv-stars" role="img" aria-label={`${count} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i} className={`rv-star ${i <= count ? "filled" : "empty"}`}>
        ★
      </span>
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: ReviewItem }) => (
  <div className={`rv-card ${review.featured ? "featured" : ""}`}>
    <div className="rv-card-top">
      <StarRating count={review.stars} />
      <span className={`rv-badge ${review.featured ? "featured" : ""}`}>
        {review.title}
      </span>
    </div>
    <p className="rv-quote">{review.quote}</p>
    <div className="rv-card-footer">
      <div
        className="rv-avatar"
        style={{
          backgroundColor: `${review.avatarColor}22`,
          color: review.avatarColor,
        }}
      >
        {review.initial}
      </div>
      <div className="rv-author-info">
        <span className="rv-author-name">{review.name}</span>
        {/* <span className="rv-author-city">{review.city}</span> */}
      </div>
    </div>
  </div>
);

const ReviewSlider = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const row1 = REVIEWS.slice(0, 6);
  const row2 = REVIEWS.slice(6, 12);

  // Duplicate for seamless infinite loop
  const row1Doubled = [...row1, ...row1];
  const row2Doubled = [...row2, ...row2];

  return (
    <div className="rv-slider-wrap">
      {/* Row 1 — scrolls left */}
      <div className="rv-track-wrap">
        <div className="rv-track row-1" ref={row1Ref}>
          {row1Doubled.map((review, i) => (
            <ReviewCard key={`r1-${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls left, slower */}
      <div className="rv-track-wrap">
        <div className="rv-track row-2" ref={row2Ref}>
          {row2Doubled.map((review, i) => (
            <ReviewCard key={`r2-${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Review = ({ successCondition }: ReviewProps) => {
  return (
    <>
      <Helmet>
        <title>Customer Reviews | Gati Shifting Packers</title>
        <meta
          name="description"
          content="Read genuine customer reviews about Gati Shifting Packers. From domestic moves to international relocation, office shifting, bike transport, and pet relocation – see what our customers say."
        />
        <meta
          name="keywords"
          content="Gati Shifting Packers reviews, customer feedback, relocation testimonials, packers and movers reviews, domestic shifting, international relocation"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Customer Reviews | Gati Shifting Packers"
        />
        <meta
          property="og:description"
          content="See what customers say about Gati Relocation – genuine reviews for home shifting, office relocation, bike transport, international moves & pet relocation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gatishiftingpackers.com" />
        <meta
          property="og:image"
          content="https://gatishiftingpackers.com/metaImg.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Customer Reviews | Gati Shifting Packers"
        />
        <meta
          name="twitter:description"
          content="Genuine customer feedback on Gati Shifting Packers services including domestic, international, office, bike and pet moves."
        />
        <meta httpEquiv="content-language" content="en" />
        <link rel="canonical" href="https://gatishiftingpackers.com/review" />
      </Helmet>

      <section id="review-page">
        {/* ── Hero ── */}
        <div className="rv-hero">
          <p className="rv-eyebrow">Verified customers</p>
          <h1 className="rv-headline">
            What our customers <span className="accent">say</span>
          </h1>
          <p className="rv-sub">
            Real feedback from people who've moved homes, offices, and even
            countries with us.
          </p>
          <div className="rv-stats">
            <div className="rv-stat">
              <span className="rv-stat-num">{siteConfig.stats.totalHappyCustomers}</span>
              <span className="rv-stat-label">Happy moves</span>
            </div>
            <div className="rv-stat-divider" />
            <div className="rv-stat">
              <span className="rv-stat-num">{siteConfig.stats.customerRating}★</span>
              <span className="rv-stat-label">Avg rating</span>
            </div>
            <div className="rv-stat-divider" />
            <div className="rv-stat">
              <span className="rv-stat-num">{siteConfig.stats.totalYearOfExperience}</span>
              <span className="rv-stat-label">Years active</span>
            </div>
          </div>
        </div>

        {/* ── Slider ── */}
        <ReviewSlider />
      </section>

      <ContactForm successCondition={successCondition} />
      <ReviewForm dialog={false} />
    </>
  );
};

export default Review;