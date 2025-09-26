import { useState } from "react";

const FAQList = () => {

    interface FaqItem {
        question: string;
        answer: string;
    }

    const faqData: FaqItem[] = [
        { question: "What services do you offer?", answer: "We provide a wide range of relocation services including home shifting, office relocation, vehicle transportation, packing & unpacking, loading & unloading, and secure storage facilities." },
        { question: "How do I book your services?", answer: "You can easily book through our website, call support, or fill the enquiry form for a callback & quotation." },
        { question: "Do you provide insurance for goods?", answer: "Yes, we offer full-value transit insurance for your belongings. Our team will guide you through available options." },
        { question: "Are your packing materials safe and secure?", answer: "Absolutely. We use bubble wrap, corrugated boxes, foam sheets, and stretch film to protect your items." },
        { question: "Can I track my shipment?", answer: "Yes, you can monitor your shipment in real time. Our team also provides 24/7 update support." },
    ];



    const faqData2: FaqItem[] = [
        {
            question: "How long does relocation take?",
            answer:
                "Local moves take 1 day. Intercity moves usually take 2–5 days depending on volume and distance.",
        },
        {
            question: "Do you handle vehicle shifting?",
            answer: "Yes. We offer enclosed and open carrier vehicle shifting services for both cars and bikes across India.",
        },
        {
            question: "Can I reschedule my move?",
            answer: "Yes, you can reschedule with advance notice. We recommend informing us at least 24 hours prior.",
        },
        {
            question: "Is unpacking included in the service?",
            answer: "Unpacking and reassembly services are available on request and can be added during your booking.",
        },
        {
            question: "Do you provide storage facilities?",
            answer:
                "Yes, we offer secure, short and long-term storage options with 24x7 surveillance across major cities.",
        },
    ];

    let i = -1;

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [openIndex2, setOpenIndex2] = useState<number | null>(null);
    const [showMoreFAQ, setShowMoreFAQ] = useState<boolean | null>(false);

    const toggleFAQ = (index: number) => {       // <-- yaha 'number' use karein
        setOpenIndex(openIndex === index ? null : index);
    };
    const toggleFAQ2 = (index: number) => {       // <-- yaha 'number' use karein
        setOpenIndex2(openIndex2 === index ? null : index);
    };



    const [moreFaqBtnText, setMoreFaqBtnText] = useState<String | null>("Show More FAQs");
    const moreFaqFunc = () => {
        setMoreFaqBtnText("Still have a question? Contact Us")
        setShowMoreFAQ(true)

    }

    return (
        <section id="faq-section">
            <div className="faq-container">
                <h2>Frequently Asked Questions</h2>
                {faqData.map((item, index) => {
                    i++;
                    console.log(i)
                    return (<div key={index} className="faq-item">
                        <button
                            className="faq-question"
                            onClick={() => toggleFAQ(index)}
                        >
                            {item.question}
                            <span className="icon">{openIndex === index ? "−" : "+"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="faq-answer">
                                {item.answer}
                            </div>
                        )}
                    </div>)

                })}
                {
                    (showMoreFAQ) ? faqData2.map((item, index) => {
                        return (<div key={index} className="faq-item">
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ2(index)}
                            >
                                {item.question}
                                <span className="icon">{openIndex2 === index ? "−" : "+"}</span>
                            </button>
                            {openIndex2 === index && (
                                <div className="faq-answer">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                        )
                    }) : ""
                }
                <button onClick={moreFaqFunc} className="show-more">{moreFaqBtnText}</button>
            </div>
        </section>
    )
}

export default FAQList;