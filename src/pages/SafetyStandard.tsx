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


            </Helmet>

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

                        <img src={safetystandardImg} />
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