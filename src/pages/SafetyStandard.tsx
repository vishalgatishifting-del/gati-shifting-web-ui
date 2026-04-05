import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";
import { Helmet } from "react-helmet-async";
import safetystandardImg from "../assets/SafetyStandard/safetystandardimg.jpg"
import "./SafetyStandard.scss"

const SafetyStandard = () => {
    return (
        <>
            <Helmet>

                {/* Meta Tags for Safety Standard Page */}
                <title>Safety Standards | Gati Shifting Packers</title>

                <meta name="description" content="Experience top-tier Safety Standards with Gati Shifting Packers. We ensure secure packing, handling, and transportation with trusted safety protocols and professional care." />
                <meta name="keywords" content="Gati Shifting Packers safety standards, safe relocation services, packing and moving safety, professional movers, goods protection, secure transportation, moving safety guidelines, safety measures for shifting, reliable packers and movers, trusted moving company, damage-free moving, quality packing materials, safety-focused relocation, professional handling, household goods safety, cargo safety standards, moving company with safety assurance" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Abhishek" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Safety Standards | Gati Shifting Packers" />
                <meta property="og:description" content="Gati Shifting Packers follows strict Safety Standards to ensure secure packing, loading, and delivery of your belongings with utmost care." />
                <meta property="og:url" content="https://gatishiftingpackers.com/safety-standard" />
                <meta property="og:site_name" content="Gati Shifting Packers" />
                <meta property="og:image" content="" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Safety Standards | Gati Shifting Packers" />
                <meta name="twitter:description" content="Ensure safe and damage-free relocation with Gati Shifting Packers’ professional Safety Standards and trusted moving practices." />
                <meta name="twitter:image" content="" />

                <meta http-equiv="Content-Language" content="en" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://gatishiftingpackers.com/safety-standard" />

            </Helmet>
            <div className="bg-attached">
                <h1>Safety Standard</h1>
            </div>
            <section id="pet-relocation-sec">
                <div className="container">
                    <h1>Our Safety Standards</h1>
                    <p>At Gati Shifting Packers, we place the utmost importance on the safety and security of your belongings. From packing to delivery, every step of our process follows strict safety protocols to ensure a smooth and damage-free relocation experience.
                    </p>
                    <div className="content factors">
                        <ol>
                            <li>
                                <h3>Expertly Trained Staff</h3>
                                All our staff members undergo extensive training in safe packing, lifting, and driving practices. Their hands-on expertise ensures your items are handled with maximum care and professionalism throughout the shifting process.

                            </li>
                            <li>
                                <h3>Premium Packing Materials</h3>
                                We use high-quality packing supplies such as bubble wrap, sturdy cartons, foam sheets, and heavy-duty tapes to protect delicate and valuable items. Each item is packed securely to withstand long-distance transit and handling.
                            </li>
                            <li>
                                <h3>GPS-Enabled Vehicles</h3>
                                Our fleet of well-maintained and GPS-enabled vehicles is operated by experienced and verified drivers. This ensures timely delivery, minimal handling, and complete protection against damage or delays.
                            </li>
                            <li>
                                <h3>Sealed and Labeled Shipments</h3>
                                Every box is properly sealed, labeled, and documented for easy identification and to prevent tampering or loss during transportation. This ensures total transparency and traceability at every step.
                            </li>
                            <li>
                                <h3>Real-Time Tracking</h3>
                                We offer live shipment tracking and timely updates, so you can stay informed about the current status and location of your goods throughout the journey.
                            </li>
                            <li>
                                <h3>Emergency Preparedness</h3>
                                Our team is trained to handle emergency situations such as fire, vehicle breakdown, or accidents efficiently. We follow pre-defined safety protocols to protect your assets and ensure smooth resolution under all circumstances.
                            </li>
                        </ol>
                    </div>
                    <div className="content types">

                        <img src={safetystandardImg}  alt="our commitment to safety" title="standardsafetyimage" loading="lazy" />
                    </div>
                </div>
            </section>


            <ReviewVideo></ReviewVideo>
            <GetInTouch></GetInTouch>
            <AwardCertification></AwardCertification>
            <TrustUsSection></TrustUsSection>
            <BrandList></BrandList>
            <FAQList></FAQList>
        </>
    )
}

export default SafetyStandard;