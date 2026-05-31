import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FAQList.scss";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface FaqItem {
  question?: string;
  answer?: string;
  q?: string;
  a?: string;
}

export interface FAQListProps {
  /** Custom FAQ items — primary batch shown by default */
  faqData?: FaqItem[];
  /** Extra items revealed on "Show More" */
  moreFaq?: FaqItem[];
  /** Badge label above the heading */
  badge?: string;
  /** Section heading */
  heading?: string;
  /** Subtitle text */
  subtitle?: string;
  /** Link shown after expanding — leave empty to hide */
  contactLink?: string;
  /** Label for the contact CTA */
  contactLabel?: string;
  /** Label for the "show more" button */
  showMoreLabel?: string;
}

// ─── Default data (fallback) ──────────────────────────────────────────────────
const DEFAULT_FAQ: FaqItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We provide home shifting, office relocation, vehicle transportation, packing & unpacking, loading & unloading, and secure storage facilities.",
  },
  {
    question: "How do I book your services?",
    answer:
      "You can book through our website, call our support team, or submit the enquiry form to get a callback and quotation.",
  },
  {
    question: "Do you provide insurance for goods?",
    answer:
      "Yes, we provide full-value transit insurance. Our team will explain all available coverage options.",
  },
  {
    question: "Are your packing materials safe?",
    answer:
      "Yes, we use premium bubble wrap, corrugated boxes, foam sheets, and stretch film to ensure maximum safety.",
  },
  {
    question: "Can I track my shipment?",
    answer:
      "Yes, real-time shipment tracking is available along with 24/7 customer support updates.",
  },
];

const DEFAULT_MORE_FAQ: FaqItem[] = [
  {
    question: "How long does relocation take?",
    answer:
      "Local moves usually take 1 day. Intercity relocations take around 2–5 days depending on distance and volume.",
  },
  {
    question: "Do you handle vehicle shifting?",
    answer:
      "Yes, we provide open and enclosed carrier vehicle transportation services for cars and bikes.",
  },
  {
    question: "Can I reschedule my move?",
    answer:
      "Yes, rescheduling is allowed with prior notice. Inform us at least 24 hours in advance.",
  },
  {
    question: "Is unpacking included?",
    answer:
      "Unpacking and reassembly services are optional and can be added during booking.",
  },
  {
    question: "Do you offer storage facilities?",
    answer:
      "Yes, we provide secure short-term and long-term storage facilities with 24/7 surveillance.",
  },
];

// ─── Animated answer panel ────────────────────────────────────────────────────
const AccordionAnswer = ({
  answer,
  isOpen,
}: {
  answer: string | undefined;
  isOpen: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) setHeight(isOpen ? ref.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div
      style={{
        overflow: "hidden",
        height,
        transition: "height 0.38s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div ref={ref} className="faq-answer-inner">
        <p>{answer ?? ""}</p>
      </div>
    </div>
  );
};

// ─── Single accordion item ────────────────────────────────────────────────────
const FAQItem = ({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const question = item.question ?? item.q ?? "";
  const answer = item.answer ?? item.a ?? "";
  return (
  <div
    className={`faq-item${isOpen ? " active" : ""}`}
    style={{ "--i": index } as React.CSSProperties}
  >
    <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
      <span className="faq-num">{String(index + 1).padStart(2, "0")}</span>
      <span className="faq-q-text">{question}</span>
      <span className="faq-icon" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <polyline points={isOpen ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
        </svg>
      </span>
    </button>
    <AccordionAnswer answer={answer ?? ""} isOpen={isOpen} />
  </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const FAQList = ({
  faqData = DEFAULT_FAQ,
  moreFaq = DEFAULT_MORE_FAQ,
  badge = "Help Center",
  heading = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our packing & moving services",
  contactLink = "/contact-us",
  contactLabel = "Still have questions? Contact Us →",
  showMoreLabel = "Show More FAQs",
}: FAQListProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openMoreIndex, setOpenMoreIndex] = useState<number | null>(null);
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="faq-section">
      <div className="faq-container">
        <span className="faq-badge">{badge}</span>
        <h2>{heading}</h2>
        <p className="faq-subtitle">{subtitle}</p>

        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}

        {showMore && (
          <>
            <div className="faq-divider">More Questions</div>
            {moreFaq.map((item, index) => (
              <FAQItem
                key={`more-${index}`}
                item={item}
                index={index}
                isOpen={openMoreIndex === index}
                onToggle={() =>
                  setOpenMoreIndex(openMoreIndex === index ? null : index)
                }
              />
            ))}
          </>
        )}

        {!showMore && moreFaq.length > 0 && (
          <button className="show-more" onClick={() => setShowMore(true)}>
            {showMoreLabel}
          </button>
        )}

        {showMore && contactLink && (
          <Link to={contactLink} className="contact-cta">
            {contactLabel}
          </Link>
        )}
      </div>
    </section>
  );
};

export default FAQList;