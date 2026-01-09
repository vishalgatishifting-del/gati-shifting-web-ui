import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";
import { Helmet } from "react-helmet-async";
import ReviewDialog from "../components/ReviewDialog";

const HomeStorage = () => {
    const keywords = [
        "gati packers and movers",
        "home storage services",
        "household storage services",
        "storage services for home",
        "temporary home storage",
        "home storage solutions",
        "household goods storage",
        "short-term storage for home",
        "home storage near me",
        "storage and moving services",
        "secure home storage",
        "long-term home storage",
        "home storage cost",
        "climate controlled home storage",
        "home storage and warehousing",
        "how to store household items"
    ];

    return (
        <>
            <Helmet>


            </Helmet>
            <div className="bg-attached">
                <h1>Home Storage</h1>
            </div>
            <section id="pet-relocation-sec">
                <div className="container">
                    <h1>Gati Shifting Packers – Reliable Home Storage Services in India</h1>
                    <p>Gati Shifting Packers is a trusted provider of home storage and personal belongings storage solutions across India. We offer safe, flexible, and affordable storage options for individuals and families who need extra space or temporary storage during moves, renovations, or long-term storage needs.
                        <br />
                        Our strategically located storage facilities ensure that your household items are stored securely and handled with utmost care. From furniture and appliances to personal belongings and seasonal items, we manage everything with precision. Insurance coverage and real-time tracking provide complete peace of mind throughout the storage period.

                    </p>
                    <div className="content 6-steps">
                        <h2>🏡 Simple 6-Step Home Storage Process with Gati Shifting Packers</h2>

                        <h3>Step 1: Share Your Storage Details & Get a Quote</h3>
                        <ul>
                            <li>📋 Provide information about the items, quantity, and storage duration.</li>
                            <li>💬 Receive a fair, customized quote from our verified professionals.</li>
                        </ul>

                        <h3>Step 2: Confirm Booking with Advance Payment</h3>
                        <ul>
                            <li>📅 Choose your preferred storage start date.</li>
                            <li>💳 Secure your booking with a small advance (adjusted later).</li>
                        </ul>

                        <h3>Step 3: Safe Packing & Pickup</h3>
                        <ul>
                            <li>🔧 Our trained team arrives with high-quality packing materials to protect your belongings.</li>
                            <li>✔ Dismantling, labeling, and secure loading are done under expert supervision.</li>
                        </ul>

                        <h3>Step 4: Transparent Invoice & Payment Settlement</h3>
                        <ul>
                            <li>📄 Receive a detailed invoice based on your storage requirements.</li>
                            <li>💸 Pay the remaining amount after deducting your advance payment.</li>
                        </ul>

                        <h3>Step 5: Secure Storage & Real-Time Updates</h3>
                        <ul>
                            <li>🏠 Your items are stored safely in our secured warehouse.</li>
                            <li>📱 Track your belongings with live updates until retrieval.</li>
                        </ul>


                        <h3>Step 6: Hassle-Free Retrieval & Feedback</h3>
                        <ul>
                            <li>🏠 When you need your items, we deliver them safely to your doorstep.
                            </li>
                            <li>
                                📝 Share your feedback to help us serve you better.
                                <br />
                            </li>
                            <ReviewDialog></ReviewDialog>
                        </ul>
                    </div>
                    <div className="content types">
                        <h2>Household Items We Store</h2>
                        <p style={{ marginBottom: "10px" }}>Gati Shifting Packers provides comprehensive home storage solutions for a wide range of personal belongings:</p>
                        <ul>
                            <li>Furniture & Appliances: Sofas, beds, tables, chairs, refrigerators, washing machines, and more.</li>
                            <li>Seasonal Items: Clothing, decorations, and sports equipment stored safely until needed.</li>
                            <li>Electronics & Gadgets: TVs, computers, kitchen appliances, and home entertainment systems..</li>
                            <li>Documents & Personal Items: Important papers, files, and keepsakes stored securely.</li>
                            <li>Miscellaneous Goods: Décor items, books, utensils, and other household accessories.</li>
                        </ul>

                        <h2>Affordable Home Storage Charges in India</h2>
                        <p>
                            We offer cost-effective home storage services with transparent pricing, ensuring there are no hidden charges. Whether it’s short-term storage during relocation or long-term storage for household items, Gati Shifting Packers provides a safe, convenient, and reliable solution at the best rates.
                        </p>
                    </div>
                    <div className="content why-choose">
                        <h2>Why Choose Professional Home Storage Services in India?</h2>
                        <ul>
                            <li>Safe & Secure Handling: Experienced staff handle all household items carefully.</li>
                            <li>Flexible Storage Duration: Options for short-term or long-term storage to suit your needs.</li>
                            <li>Professional Team: Skilled personnel manage packing, loading, storage, and retrieval efficiently.</li>
                            <li>End-to-End Service: From packing to doorstep delivery, everything is professionally handled.</li>
                            <li>Insurance Support: Coverage available for valuable items during storage and transit.</li>
                        </ul>
                    </div>
                    <div className="content factors">
                        <h2>Factors Affecting Home Storage Costs in India</h2>

                        <ol>
                            <li>Volume & Weight of Items -
                                More items or heavier belongings require more space and labor, increasing costs.




                            </li>
                            <li>Storage Duration -
                                Long-term storage typically costs more than short-term storage.

                            </li>
                            <li>Packing Materials & Quality -
                                Using premium packing materials for fragile or high-value items may slightly increase charges.


                            </li>
                            <li>
                                Type of Goods -
                                Sensitive or bulky items may require special storage conditions.

                            </li>
                            <li>
                                Location of Storage Facility -
                                Storage in high-demand or metropolitan areas can be more expensive.


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

export default HomeStorage;