import FAQList from "../components/FAQList";
import "./FAQ.scss";
import car5 from "../assets/FAQPageImg/hero-section-img.png"
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const FAQ = () => {
    return (
        <>
            <Helmet>
                <title>FAQs | Gati Shifting Packers</title>
                <meta name="description" content="Find answers to common questions about packing, moving, pricing, and delivery. Gati Shifting Packers provides clear guidance on services, processes, and timelines." />
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
                    <span className="badge">Trusted Movers Across India</span>

                    <h2>
                        Reliable Moving & Packing <br />
                        Solutions Across India
                    </h2>

                    <p>
                        At <strong>Gati Shifting Packers</strong>, relocating is more
                        than transport — it’s about trust, safety, and peace of mind. Our
                        expert team ensures secure packing, smooth transportation, and
                        timely delivery using modern equipment and high-quality materials.
                    </p>

                    <p>
                        From local household shifting to corporate and pan-India relocation,
                        we offer transparent pricing, zero hidden charges, and dedicated
                        customer support at every stage of your move.
                    </p>

                    <div className="cta-group">
                        <Link to="/services" className="primary-btn">
                            Explore Our Services
                        </Link>
                        <Link to="/contact-us" className="secondary-btn">
                            Get Free Quote
                        </Link>
                    </div>

                    <div className="trust-stats">
                        <div>
                            <h4>10K+</h4>
                            <span>Happy Customers</span>
                        </div>
                        <div>
                            <h4>100+</h4>
                            <span>Cities Covered</span>
                        </div>
                        <div>
                            <h4>5★</h4>
                            <span>Customer Rating</span>
                        </div>
                    </div>
                </div>

                <div className="info-right">
                    <div className="image-card">
                        <img src={car5} alt="Gati Shifting Packers Moving Vehicle" />

                        <div className="overlay">
                            <h4>Top Rated Packers & Movers</h4>
                            <p>
                                Safe packing, insured transport & on-time delivery trusted by
                                thousands of customers across India.
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