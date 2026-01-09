import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";
import petrelocationImg from "../assets/PetRelocation/petrelocation.jpg"
import { Helmet } from "react-helmet-async";

import "./PetRelocation.scss"
import ReviewDialog from "../components/ReviewDialog";

const PetRelocation = () => {

    const keywords = [
        "pet transport services",
        "pet relocation services",
        "pet shipping companies",
        "dog transport service",
        "pet transport",
        "animal transport services",
        "pet delivery service",
        "cat transport services",
        "dog relocation services",
        "pet relocation near me",
        "international pet relocation",
        "pet travel services",
        "safe pet transport",
        "pet relocation cost",
        "how to relocate a pet",
        "gati packers and movers"
    ];

    return (
        <>

            <Helmet>

                {/* Meta Tags for Pet Relocation Page */}
                <title>Pet Relocation Services | Gati Shifting Packers</title>

                <meta name="description" content="Safe and reliable Pet Relocation Services by Gati Shifting Packers. Expert care for transporting your pets across India with comfort and security." />
                <meta name="keywords" content="Gati Shifting Packers pet relocation, pet movers, pet transportation services, pet moving India, safe pet relocation, pet relocation, pet shifting, animal transportation, pet movers, pet travel services, pet relocation company, pet transport in India, international pet relocation, domestic pet transport, safe pet relocation, pet relocation by Gati Shifting Packers, dog and cat relocation services, affordable pet moving services, pet relocation experts near me, reliable pet shifting company, pet transport service providers, best pet movers in India, pet travel assistance, Gati Shifting Packers pet relocation reviews, door-to-door pet transport services, stress-free pet relocation solutions, professional pet transport company, animal relocation specialists, pet relocation packages India, pan-India pet shifting services" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Abhishek" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Pet Relocation Services | Gati Shifting Packers" />
                <meta property="og:description" content="Trust Gati Shifting Packers for safe and stress-free pet relocation across India. Expert handling for all types of pets." />
                <meta property="og:url" content="https://gatishiftingpackers.com/pet-relocation" />
                <meta property="og:site_name" content="Gati Shifting Packers" />
                <meta property="og:image" content="" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Pet Relocation Services | Gati Shifting Packers" />
                <meta name="twitter:description" content="Reliable pet relocation services by Gati Shifting Packers. Ensure the safe and comfortable transport of your pets anywhere in India." />
                <meta name="twitter:image" content="" />

                <meta http-equiv="Content-Language" content="en" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://gatishiftingpackers.com/pet-relocation" />

            </Helmet>
            <div className="bg-attached">
                <h1>Pet Relocation</h1>
            </div>
            <section id="pet-relocation-sec">
                <div className="container">
                    <h1>Gati Shifting Packers – Trusted Pet Relocation Services in India</h1>
                    <p>Gati Shifting Packers is a reliable name in pet relocation services across India, ensuring safe, comfortable, and stress-free travel for your beloved pets. Whether you’re moving to a new city or state, our professional team handles every aspect of your pet’s journey with care, making relocation hassle-free for both pets and owners.
                        <br />
                        With experience in relocating cats, dogs, and other domestic pets, Gati Shifting Packers is known for safe handling, timely updates, and compassionate care. We provide real-time tracking, health check coordination, and transportation arrangements that meet all safety standards for pet travel.

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
                        <h2>Types of Pets We Relocate</h2>
                        <ul>
                            <li>Dogs: All breeds, small to large.</li>
                            <li>Cats: Domestic cats of all sizes.</li>
                            <li>Other Pets: Rabbits, birds, and other small domestic animals.</li>
                        </ul>

                        <h2>Affordable Pet Relocation Charges in India</h2>
                        <p>
                            We provide cost-effective pet relocation services with transparent pricing. Whether it’s local transport or intercity relocation, Gati Shifting Packers ensures your pet travels safely and comfortably at competitive rates, with no hidden charges.
                        </p>


                        <img src={petrelocationImg} />
                    </div>
                    <div className="content why-choose">
                        <h2>Why Choose Professional Pet Relocation Services in India?</h2>
                        <ul>
                            <li>Safe & Comfortable Travel: Pets are transported in secure, climate-controlled carriers.</li>
                            <li>Experienced Handling: Trained professionals ensure minimal stress for your pets.</li>
                            <li>Health & Documentation Support: Assistance with vaccination certificates and travel permits.</li>
                            <li>Real-Time Tracking: Stay updated on your pet’s journey at all times.</li>
                            <li>Stress-Free Experience: Complete care from pickup to delivery, letting you relax while your pet is transported safely.</li>
                        </ul>
                    </div>
                    <div className="content factors">
                        <h2>Factors Affecting the Cost of Pet Relocation in India</h2>
                        <p>The cost of house shifting depends on several things. Here are the main factors that affect the price:</p>

                        <ol>
                            <li>Distance -
                                Longer distances increase cost due to more travel time and logistics.

                            </li>
                            <li>Pet Type & Size -
                                Larger pets or multiple animals require bigger carriers and extra care, raising the cost.

                            </li>
                            <li>
                                Travel Method -
                                Air transport, ground transport, or a combination affects pricing. Enclosed or specialized carriers add to the cost.

                            </li>
                            <li>
                                Health & Documentation Needs -
                                Vaccination certificates, permits, and veterinary checks may increase charges slightly.

                            </li>
                            <li>
                                Timing & Urgency -
                                Peak seasons or urgent relocations can cost more than planned, scheduled moves.

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

export default PetRelocation;