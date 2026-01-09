import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";
import carPricingImg from "../assets/CarBikeTransport/carPricingImg.jpg"
import bikePricingImg from "../assets/CarBikeTransport/bikePricingImg.jpg"
import { Helmet } from "react-helmet-async";
import ReviewDialog from "../components/ReviewDialog";


const CarBikeTransport = () => {
    const keywords = [
        "gati packers and movers",
        "car transport services",
        "vehicle transport services",
        "auto transport companies",
        "car shipping companies",
        "car transport company",
        "car shipping services",
        "motorcycle transport services",
        "bike transport services",
        "door to door car transport",
        "enclosed auto transport",
        "vehicle relocation services",
        "car transport near me",
        "how to transport a car",
        "car transport cost India"
    ];

    return (
        <>
            <Helmet>
                <title>Car & Bike Transport Services | Gati Shifting Packers</title>

                <meta name="description" content="Get safe and affordable Car & Bike Transport Services across India with Gati Shifting Packers. We ensure secure vehicle relocation with expert handling and timely delivery." />
                <meta name="keywords" content="Gati Shifting Packers car transport, bike transport, vehicle relocation, car moving services, bike shifting India, car carrier services,car and bike shifting, vehicle transportation, car transport service, bike transport service, car movers and packers, bike movers and packers, vehicle relocation services, car and bike relocation by Gati Shifting Packers, affordable car transport, reliable bike shifting services, door-to-door vehicle transport, professional car movers near me, trusted bike transport company, safe car and bike relocation, car carrier services in India, bike courier services, Gati Shifting Packers vehicle shifting, interstate car and bike transport, best car transport company in India, two-wheeler relocation services, four-wheeler transport service, vehicle shifting experts, hassle-free car and bike moving, pan-India vehicle relocation, secure car and bike delivery" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Abhishek" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Car & Bike Transport Services | Gati Shifting Packers" />
                <meta property="og:description" content="Reliable and professional Car & Bike Transport Services by Gati Shifting Packers. Move your vehicles safely anywhere in India." />
                <meta property="og:url" content="https://gatishiftingpackers.com/car-bike-transport" />
                <meta property="og:site_name" content="Gati Shifting Packers" />
                <meta property="og:image" content="" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Car & Bike Transport Services | Gati Shifting Packers" />
                <meta name="twitter:description" content="Trust Gati Shifting Packers for secure and affordable Car & Bike Transport Services across India. Safe, fast, and hassle-free vehicle shifting." />
                <meta name="twitter:image" content="" />

                <meta http-equiv="Content-Language" content="en" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://gatishiftingpackers.com/car-bike-transport" />


            </Helmet>
            <div className="bg-attached">
                <h1>Car/Bike Transport</h1>
            </div>
            <section id="pet-relocation-sec">
                <div className="container">
                    <h1>Gati Shifting Packers – Reliable Car & Bike Transport Services in India</h1>
                    <p>Gati Shifting Packers is a trusted name in vehicle transportation services across India, offering safe, fast, and affordable solutions for moving cars and bikes anywhere in the country. Whether you’re relocating to a new city or moving vehicles for personal or commercial reasons, we ensure a smooth and hassle-free transport experience.
                        <br />
                        With a strong presence in major cities, Gati Shifting Packers is known for its secure handling, timely delivery, and transparent services. Our expert team ensures your vehicles are transported safely, with insurance support and real-time tracking for complete peace of mind.
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
                            </li>
                            <ReviewDialog></ReviewDialog>
                        </ul>
                    </div>
                    <div className="content types">
                        <h2>Vehicles We Transport</h2>
                        <p style={{ marginBottom: "10px" }}>Gati Shifting Packers provides secure and professional transport for a variety of vehicles:</p>
                        <ul>
                            <li>Cars: Sedans, SUVs, hatchbacks, luxury cars, and electric vehicles.</li>
                            <li>Bikes & Motorcycles: Scooters, motorcycles, sports bikes, and electric bikes.</li>
                            <li>Commercial Vehicles: Small trucks, vans, and delivery vehicles.</li>
                        </ul>

                        <h2>Affordable Car & Bike Transport Charges in India</h2>
                        <p>
                            We offer cost-effective vehicle transport solutions with transparent pricing. Whether it’s local transport, intercity relocation, or long-distance shipping, Gati Shifting Packers ensures safe delivery at the best rates, without hidden charges.
                        </p>


                        <img src={bikePricingImg} />
                        <img src={carPricingImg} />
                    </div>
                    <div className="content why-choose">
                        <h2>Why Choose Professional Vehicle Transport Services in India?</h2>
                        <ul>
                            <li>Safe & Secure Handling: Trained staff ensures your vehicle is protected during loading, transport, and unloading.</li>
                            <li>Time-Saving: Professional transport saves time and effort compared to driving yourself.</li>
                            <li>Insurance Coverage: Full insurance protection for your vehicles during transit.</li>
                            <li>Real-Time Tracking: Monitor your vehicle throughout the journey.</li>
                            <li>Stress-Free Transport: From pickup to delivery, everything is managed professionally.</li>
                        </ul>
                    </div>
                    <div className="content factors">
                        <h2>Factors Affecting the Cost of Vehicle Transport in India</h2>

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

export default CarBikeTransport;