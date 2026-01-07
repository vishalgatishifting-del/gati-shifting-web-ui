import AwardCertification from "../components/AwardCertification";
import ContactForm from "../components/ContactForm";
import FAQList from "../components/FAQList";
import "./WhyGati.scss"



interface props {
    successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}
const WhyGati = ({ successCondition }: props) => {

    const keywords = [
        "why choose packers and movers",
        "why choose us packers and movers",
        "trusted packers and movers in India",
        "best packers and movers",
        "packers and movers benefits",
        "experienced relocation services India",
        "why hire professional packers and movers",
        "packers movers reliability and safety",
        "why Gati Shifting Packers",
        "gati packers and movers"
    ];

    return (
        <>
            <section id="why-gati-sec">
                <div className="bg-attached">
                    <h1>Why Gati?</h1>
                </div>
                <div className="container">
                    <div className="content">
                        <h1>Why Choose Gati Shifting Packers?</h1>
                        <p>Relocating can be stressful, but with Gati Shifting Packers, your move becomes smooth, reliable, and hassle-free. Whether you are shifting within the city or across India, our experienced team, modern equipment, and customer-first approach ensure your valuables are handled with the utmost care and delivered on time.</p>

                        <h3>Trusted Relocation Services Across India</h3>
                        <p>We provide professional packing and moving services in almost every major city. Whether you are looking for Gati Shifting Packers in Delhi, Gati Shifting Packers in Mumbai, or Gati Shifting Packers in Bangalore, our network ensures a seamless moving experience.
                            From north to south, we are your trusted relocation partner. Choose Gati Shifting Packers in Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Surat, Jaipur, Lucknow, Kanpur, Nagpur, Indore, Bhopal, Patna, Ranchi, Raipur, Chandigarh, Dehradun, Ludhiana, Amritsar, Jalandhar, Guwahati, Bhubaneswar, Cuttack, Coimbatore, Madurai, Kochi, Trivandrum, Mysore, Mangalore, Vadodara, Rajkot, Nashik, Aurangabad, Meerut, Ghaziabad, Noida, and Faridabad for stress-free shifting.
                        </p>

                        <h3>Why We Stand Out</h3>
                        <ul>
                            <li>Safe & Secure Packing – Premium quality packing materials to safeguard your belongings.</li>
                            <li>On-Time Delivery – Advanced tracking and reliable transport for punctual moves.</li>
                            <li>Pan-India Network – Availability of services in all major Indian cities.</li>
                            <li>Affordable & Transparent Pricing – No hidden charges, only fair quotes.</li>
                            <li>Expert Team – Trained professionals who treat your items with care.</li>
                        </ul>

                        <h3>Move Smart, Move with Gati Shifting Packers</h3>
                        <p>Whether you’re moving your household, office, or vehicle, Gati Shifting Packers makes relocation simple and worry-free. From Delhi to Mumbai, Hyderabad to Chennai, or Kolkata to Bangalore, our services are designed to meet all your shifting needs.
                            <br />
                            Choose Gati Shifting Packers today and experience a safe, fast, and reliable move anywhere in India!
                        </p>

                    </div>
                </div>
            </section>
            <ContactForm successCondition={successCondition}></ContactForm>
            <AwardCertification></AwardCertification>
            <FAQList></FAQList>
            <section id="keywords-section">
                <h1>People also search for these Queries</h1>
                <div className="container">
                    {keywords.map((col) => {
                        return <h5 className="keyword">{col}</h5>
                    })}
                </div>
            </section>
        </>
    )
}

export default WhyGati;