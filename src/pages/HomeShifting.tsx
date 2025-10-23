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
    return (
        <>

            <Helmet>


            </Helmet>

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

        </>
    )
}

export default HomeShifting;