import { useState } from "react";
import "./FAQList.scss"

interface FaqItem {
  question: string;
  answer: string;
}

const FAQList = () => {
  const faqData: FaqItem[] = [
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

  const moreFaq: FaqItem[] = [
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

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openMoreIndex, setOpenMoreIndex] = useState<number | null>(null);
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="faq-section">
      <div className="faq-container">
        <span className="faq-badge">Help Center</span>
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Everything you need to know about our packing & moving services
        </p>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "active" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {item.question}
              <span className="icon">{openIndex === index ? "−" : "+"}</span>
            </button>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}

        {showMore &&
          moreFaq.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${
                openMoreIndex === index ? "active" : ""
              }`}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setOpenMoreIndex(
                    openMoreIndex === index ? null : index
                  )
                }
              >
                {item.question}
                <span className="icon">
                  {openMoreIndex === index ? "−" : "+"}
                </span>
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}

        {!showMore && (
          <button className="show-more" onClick={() => setShowMore(true)}>
            Show More FAQs
          </button>
        )}

        {showMore && (
          <a href="/contact" className="contact-cta">
            Still have questions? Contact Us →
          </a>
        )}
      </div>
    </section>
  );
};

export default FAQList;
