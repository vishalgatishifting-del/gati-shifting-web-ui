import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";
import officeRelocationImg from "../assets/OfficeRelocation/office-relocation-img.jpg"
import { Helmet } from "react-helmet-async";

const OfficeRelocation = () => {
    return (
        <>
            <Helmet>


            </Helmet>

            <section id="pet-relocation-sec">
                <div className="container">
                    <h1>Gati Shifting Packers – Reliable Office Shifting Services in India</h1>
                    <p>Gati Shifting Packers is one of the most trusted names in office relocation and commercial moving services in India. We provide smooth, professional, and affordable office shifting solutions that help businesses move without affecting productivity. Whether you’re relocating a small office or a large corporate setup, our expert team ensures a safe and organized move from start to finish.
                        <br />
                        With a strong presence across major Indian cities, Gati Shifting Packers is known for its efficient handling, careful packing, and timely delivery of office assets. From furniture and computers to confidential files and IT equipment, we manage everything with precision. We also provide insurance and live vehicle tracking, ensuring complete transparency and peace of mind throughout the move.


                    </p>
                    <div className="content 6-steps">
                        <h2>🏡 Simple 6-Step Booking Process with Gati Shifting Packers</h2>

                        <h3>Step 1: Share Your Moving Details & Get a Quote</h3>
                        <ul>
                            <li>📋 Provide your moving requirements — items, location, and distance.</li>
                            <li>💬 Get a fair, customized quote from our verified professionals.</li>
                        </ul>

                        <h3>Step 2: Confirm Booking with Advance Payment</h3>
                        <ul>
                            <li>📅 Choose your preferred pickup date and time.</li>
                            <li>💳 Secure your booking by paying a small advance (adjusted later).</li>
                        </ul>

                        <h3>Step 3: Safe Packing & Doorstep Pickup</h3>
                        <ul>
                            <li>🔧 Our trained team arrives with top-quality packing materials to pack your belongings carefully.</li>
                            <li>✔ Dismantling, labeling, and secure loading are done under expert supervision.</li>
                        </ul>

                        <h3>Step 4: Transparent Invoice & Payment Settlement</h3>
                        <ul>
                            <li>📄 Receive a detailed invoice based on your provided list.</li>
                            <li>💸 Pay the remaining amount after deducting your advance payment.</li>
                        </ul>

                        <h3>Step 5: Secure Transportation & Real-Time Updates</h3>
                        <ul>
                            <li>🚛 Your goods are dispatched safely to the destination.</li>
                            <li>📱 Track your shipment with live updates until delivery.</li>
                        </ul>


                        <h3>Step 6: Hassle-Free Delivery & Feedback</h3>
                        <ul>
                            <li>🏠 After delivery and reinstallation, share your valuable feedback to help us serve you better.
                                <br />
                                Insert Feedback form button
                            </li>
                        </ul>
                    </div>
                    <div className="content types">
                        <h2>Office Items We Shift</h2>
                        <p style={{marginBottom: "10px"}}>At Gati Shifting Packers, we provide complete office shifting solutions across India, covering all essential workplace items:</p>
                        <ul>
                            <li>Office Furniture: Desks, chairs, tables, cabinets, and workstations.</li>
                            <li>IT Equipment: Computers, servers, printers, scanners, and networking devices.</li>
                            <li>Files & Documents: Confidential papers and records packed securely.</li>
                            <li>Electrical Items: Projectors, AC units, lighting systems, and other devices.</li>
                            <li>Pantry & Miscellaneous: Kitchen equipment, décor items, and other accessories.</li>
                        </ul>

                        <h2>Affordable Office Shifting Charges in India</h2>
                        <p>
                            We offer cost-effective and reliable office shifting services to meet every business need. Our transparent pricing ensures there are no hidden costs, and you pay only for what you use. Whether it’s a local office move, intercity relocation, or corporate shifting, Gati Shifting Packers ensures a stress-free experience at the best possible price.
                        </p>


                        <img src={officeRelocationImg} />
                    </div>
                    <div className="content why-choose">
                        <h2>Why Choose Professional Office Shifting Services in India?</h2>
                        <ul>
                            <li>Safe & Secure Handling: Expert movers ensure delicate equipment and files are moved safely.</li>
                            <li>Minimal Downtime: Quick and well-planned relocation keeps your business running smoothly.</li>
                            <li>Professional Team: Skilled staff manage dismantling, packing, loading, and setup efficiently.</li>
                            <li>End-to-End Service: From packing to reinstallation, everything is handled by professionals.</li>
                            <li>Insurance Support: Get insurance coverage for your valuable office assets during transit.</li>
                        </ul>
                    </div>
                    <div className="content factors">
                        <h2>Factors Affecting the Cost of Office Shifting in India</h2>

                        <ol>
                            <li>Distance - 
                                The farther the move, the higher the cost. Longer distances require more fuel, time, and resources, whether you’re shifting a home, office, or other goods.

                            </li>
                            <li>Number of Items - 
                                If you have more or heavier items to move, you’ll need a bigger vehicle and more labor, which increases the cost.


                            </li>
                            <li>
                                Packing Quality - 
                                Using good packing materials like bubble wrap and boxes keeps your items safe but adds a little extra to the cost, especially for fragile items.


                            </li>
                            <li>
                                Type of Vehicle - 
                                The type of truck or container used depends on how many goods you have. Bigger or special vehicles cost more than small ones.


                            </li>
                            <li>
                                Time of Moving - 
                                Moving on weekends, month-end, or during busy seasons usually costs more. Choosing a weekday or off-season date can help you save money.


                            </li>
                        </ol>
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

export default OfficeRelocation;