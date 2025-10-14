import FAQList from "../components/FAQList";
import "./FAQ.scss";
import car5 from "../assets/car5.jpg"
import { Helmet } from "react-helmet-async";


const FAQ = () => {
    return (
        <>
            <Helmet>
                <title>FAQ | Gati Shifting Packers</title>
                <meta name="description" content="Frequently Asked Questions about Gati Shifting Packers. Learn about our relocation services, packing solutions, cost estimates, and how we ensure a smooth move across India." />
                <meta name="keywords" content="Gati FAQ, Packers and Movers FAQ, relocation questions, moving tips, Gati Shifting Packers customer support" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph */}
                <meta property="og:title" content="FAQ | Gati Shifting Packers & Movers" />
                <meta property="og:description" content="Get answers to common questions about Gati Shifting Packers. From local to pan-India moves, understand our services, packing quality, and cost transparency." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://gatishiftingpackers.com/" />
                <meta property="og:image" content="https://gatishiftingpackers.com/metaImg.png" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="FAQ | Gati Shifting Packers" />
                <meta name="twitter:description" content="Find answers to FAQs about Gati Shifting Packers, including services, pricing, and relocation tips." />

                <meta property="og:image" content="https://gatishiftingpackers.com/metaImg.png" />
            </Helmet>
            <section className="info-section">
                <div className="info-left">
                    <h2>Reliable Moving & Packing Solutions Across India</h2>
                    <p>
                        At Gati Shifting Packers and Movers, we understand that relocating
                        your home or office is more than just moving belongings — it’s about
                        transitioning your life smoothly and securely. With years of
                        expertise in the logistics industry, we offer comprehensive,
                        end-to-end relocation services tailored to meet the unique needs of
                        every customer across India. Our dedicated team of trained
                        professionals ensures that every item, whether fragile or bulky, is
                        packed with utmost care using high-quality materials to prevent
                        damage during transit. We employ modern packing techniques and secure
                        loading processes so that your valuables reach their destination
                        intact and on time. From local moves within cities to interstate or
                        even pan-India relocations, we provide customized transport solutions
                        that combine efficiency, safety, and affordability. We leverage a
                        fleet of well-maintained vehicles equipped to handle a wide range of
                        goods — household items, office equipment, industrial machinery, and
                        more. Transparency is at the heart of our service. We offer accurate,
                        upfront cost estimates with no hidden charges, helping you plan your
                        move without surprises. Our customer support remains available at
                        every step — from initial consultation and packing to transport and
                        final unpacking at your new location. Experience a hassle-free
                        relocation with Gati Shifting Packers and Movers — your trusted
                        partner in moving. Let us handle the logistics while you focus on
                        starting fresh in your new place.
                    </p>
                    <a href="#services" className="explore-link">
                        Explore Services
                    </a>
                </div>

                <div className="info-right">
                    <div className="image-card">
                        <img
                            src={car5}
                            alt="Moving Vehicle"
                        />
                        <div className="card-text">
                            <h4>Top Rated by Thousands</h4>
                            <p>
                                From household to corporate relocations, our trained staff ensures
                                seamless service. Get accurate cost estimates and zero hidden
                                charges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <FAQList></FAQList>
        </>
    )
}

export default FAQ;