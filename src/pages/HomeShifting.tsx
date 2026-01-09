import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";
import HouseShiftingPriceImg from "../assets/HomeShifting/houseShiftingPrices.jpg"
import { Helmet } from "react-helmet-async";

import "./HomeShifting.scss"
import ReviewDialog from "../components/ReviewDialog";


const HomeShifting = () => {

    const keywords = [
        "home shifting services",
        "house shifting services",
        "home relocation services",
        "home shifting company near me",
        "local home shifting services",
        "affordable home shifting services",
        "professional home relocation",
        "home shifting and packing services",
        "house shifting services in delhi",
        "house shifting services in gurgaon",
        "house shifting services in noida",
        "house shifting services in ghaziabad",
        "house shifting services in bangalore",
        "home shifting quotes",
        "home relocation cost India",
        "gati packers and movers"
    ];

    return (
        <>

            <Helmet>

                {/* Meta Tags for Home Shifting Service Page */}
                <title>Home Shifting Services | Gati Shifting Packers</title>

                <meta name="description" content="Professional Home Shifting Services by Gati Shifting Packers. Safe and reliable packing, moving, and delivery of your household items across India." />
                <meta name="keywords" content="Gati Shifting Packers home shifting, Gati House Shifting Packers & Movers,household movers, residential relocation, packing and moving services, home shifting India, home shifting services in delhi,home shifting services in noida, home shifting services in ghaziabad,home shifting services in gurgaon, home shifting services, packers and movers, house relocation, home movers India, domestic shifting, local shifting services, household shifting, best home shifting services in India, affordable packers and movers for home relocation, trusted home shifting company near me, door to door house shifting services, reliable household goods shifting service, professional home packers and movers India, safe and secure house relocation services, top-rated home shifting service providers, budget-friendly home relocation company, expert movers for residential shifting, complete home packing and moving solutions, interstate home relocation with insurance, local home shifting within city, packers and movers for apartment relocation" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Abhishek" />


                {/* Open Graph  */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Home Shifting Services | Gati Shifting Packers" />
                <meta property="og:description" content="Experience safe and hassle-free home shifting with Gati Shifting Packers. Expert packing and moving services for all your residential needs." />
                <meta property="og:url" content="https://gatishiftingpackers.com/home-shifting" />
                <meta property="og:site_name" content="Gati Shifting Packers" />
                <meta property="og:image" content="" />



                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Home Shifting Services | Gati Shifting Packers" />
                <meta name="twitter:description" content="Reliable home shifting solutions by Gati Shifting Packers. Ensure safe and timely relocation of your household goods across India." />
                <meta name="twitter:image" content="" />


                <meta http-equiv="Content-Language" content="en" />


                {/* Canonical URL */}
                <link rel="canonical" href="https://gatishiftingpackers.com/home-shifting" />

            </Helmet>
            <div className="bg-attached">
                <h1>Home Shifting</h1>
            </div>
            <section id="home-shifting-sec">
                <div className="container">
                    <h1>Gati Shifting Packers – Affordable House Shifting Services in India</h1>
                    <p>Gati Shifting Packers is a trusted name in house shifting and relocation services across India, offering reliable, fast, and cost-effective moving solutions. Whether you're planning a local move or a domestic relocation, we ensure a seamless experience from start to finish. Our team specializes in door-to-door household shifting, taking care of everything — from packing and loading to safe delivery at your new home.
                        <br></br>
                        With a presence in major cities across India, Gati Shifting Packers has built a strong reputation for providing secure and transparent home shifting services. From furniture and appliances to fragile items, our expert team ensures every item is handled with utmost care. We also offer vehicle tracking and insurance support for added peace of mind, making us one of the most reliable packers and movers in India.
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
                    <div className="content household-items">
                        <h2>Household Items We Shift</h2>
                        <p>Gati Shifting Packers provides complete home relocation solutions for all types of household goods:</p>
                        <ul>
                            <li>Furniture: Sofas, tables, beds, wardrobes, chairs, and more.</li>
                            <li>Home Appliances: Refrigerators, washing machines, air conditioners, and microwaves.</li>
                            <li>Bedding & Clothing: From mattresses and quilts to personal wardrobe essentials.</li>
                            <li>Electronics & Devices: TVs, computers, sound systems, and other gadgets.</li>
                            <li>Kitchenware & Décor: Glassware, crockery, wall art, and other delicate items.</li>
                            <li>Miscellaneous Items: Books, toys, plants, and other small household belongings.</li>
                        </ul>
                    </div>
                    <div className="content house-shifting">
                        <h2>Affordable House Shifting Charges in India</h2>
                        <p>At Gati Shifting Packers, we aim to deliver quality relocation at low cost. Our transparent pricing ensures you get value for every rupee spent — without any hidden charges. Whether it’s local shifting, intercity relocation, or office moving, our team provides professional support at every stage to make your move stress-free and affordable.</p>

                        <img src={HouseShiftingPriceImg} />

                        <h3>Why Choose Professional House Shifting Services in India?</h3>
                        <ol>
                            <li>Safe & Secure Packing: Expert packers use high-quality materials to prevent damage.</li>
                            <li>Time-Efficient Process: Quick and organized shifting saves you time and effort.

                            </li>
                            <li>Professional Handling: Trained movers handle fragile and heavy items safely.</li>
                            <li>Stress-Free Relocation: We manage everything — packing, transport, and unpacking.</li>
                            <li>Insurance Protection: Comprehensive insurance coverage for your valuable belongings.</li>
                        </ol>
                    </div>
                    <div className="content factors">
                        <h2>Factors Affecting the Cost of House Shifting in India</h2>
                        <p>The cost of house shifting depends on several things. Here are the main factors that affect the price:</p>

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

export default HomeShifting;