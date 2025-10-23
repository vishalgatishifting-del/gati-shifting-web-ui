import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";
import InternationalMovesImg from "../assets/InternationalMoves/internationalMovesImg.jpg"
import { Helmet } from "react-helmet-async";
import ReviewDialog from "../components/ReviewDialog";


const InternationalMovers = () => {
    return (
        <>
            <Helmet>


            </Helmet>

            <section id="pet-relocation-sec">
                <div className="container">
                    <h1>Gati Shifting Packers – Trusted International Moving Services</h1>
                    <p>Gati Shifting Packers is a reliable partner for international relocation services, providing safe, efficient, and hassle-free moving solutions worldwide. Whether you’re relocating your household, office, or personal belongings abroad, our expert team ensures a smooth transition to your new country with minimal stress.
                        <br />
                        With experience in handling international moves to and from India, we manage everything from packing, customs clearance, shipping, and delivery, ensuring your goods reach safely and on time. Our global network, insurance support, and professional handling make Gati Shifting Packers a trusted name in international relocations.

                    </p>
                    <div className="content 6-steps">
                        <h2>Simple 6-Step International Moving Process with Gati Shifting Packers</h2>

                        <h3>Step 1: Share Moving Details & Get a Quote</h3>
                        <ul>
                            <li>📋 Provide your inventory, origin, and destination country.</li>
                            <li>💬 Receive a customized international moving quote from our experts.</li>
                        </ul>

                        <h3>Step 2: Confirm Booking & Schedule Pickup</h3>
                        <ul>
                            <li>📅 Choose a preferred date for packing and pickup.</li>
                            <li>💳 Secure your booking with an advance payment.</li>
                        </ul>

                        <h3>Step 3: Professional Packing & Handling</h3>
                        <ul>
                            <li>🔧 Our trained staff packs all items using high-quality, international-standard materials.</li>
                            <li>✔ Fragile, valuable, and heavy items are packed for maximum protection during long-distance transit.</li>
                        </ul>

                        <h3>Step 4: Documentation & Customs Clearance</h3>
                        <ul>
                            <li>📄 We assist with all customs paperwork, permits, and documentation to ensure smooth clearance at the destination country.</li>
                        </ul>

                        <h3>Step 5: International Shipping & Real-Time Tracking</h3>
                        <ul>
                            <li>🚛 Goods are shipped via air or sea freight depending on your needs.</li>
                            <li>📱 Track your shipment in real-time until it reaches your new home or office.</li>
                        </ul>


                        <h3>Step 6: Delivery & Setup at Destination</h3>
                        <ul>
                            <li>🏠 Upon arrival, items are carefully delivered and unpacked.
                                <br />
                            </li>
                            <li>
                                ✍ Share your feedback to help us improve our services.
                            </li>
                            <ReviewDialog></ReviewDialog>
                        </ul>
                    </div>
                    <div className="content types">
                        <h2>Items We Relocate Internationally</h2>
                        <p style={{ marginBottom: "10px" }}>At Gati Shifting Packers, we provide comprehensive commercial moving services covering all essential items and equipment:</p>
                        <ul>
                            <li>Household Goods: Furniture, appliances, bedding, and décor.</li>
                            <li>Office Assets: Desks, computers, files, and equipment.</li>
                            <li>Vehicles: Cars, bikes, and other transport vehicles.</li>
                            <li>Fragile Items: Glassware, electronics, and antiques.</li>
                            <li>Special Cargo: Pets, plants, and other delicate items (with appropriate permits).</li>
                        </ul>

                        <h2>Affordable International Moving Charges</h2>
                        <p>
                            Gati Shifting Packers offers competitive and transparent pricing for international relocations. Charges depend on factors like distance, volume of goods, transport mode (air/sea), and customs requirements. We ensure your move is cost-effective, reliable, and stress-free.
                        </p>


                        <img src={InternationalMovesImg} />
                    </div>
                    <div className="content why-choose">
                        <h2>Why Choose Gati Shifting Packers for International Moves?</h2>
                        <ul>
                            <li>Global Expertise: Experienced in moving goods across countries with minimal risk.</li>
                            <li>Safe & Secure Packing: International-standard packing materials and methods.</li>
                            <li>Customs Support: Assistance with all documentation and clearance procedures.</li>
                            <li>Real-Time Tracking: Track your shipment anywhere in the world.</li>
                            <li>Stress-Free Relocation: Complete support from packing to delivery at your destination.</li>
                        </ul>
                    </div>
                    <div className="content factors">
                        <h2>Factors Affecting the Cost of International Moves</h2>

                        <ol>
                            <li>Distance & Destination -
                                Longer routes and overseas shipments increase transport costs.

                            </li>
                            <li>Volume & Weight of Items -
                                Heavier and bulkier shipments require larger containers or multiple shipments, affecting pricing.


                            </li>
                            <li>
                                Packing & Handling Requirements -
                                Specialized packing for fragile or high-value goods may add to the cost.

                            </li>
                            <li>
                                Mode of Transport -
                                Air freight is faster but more expensive; sea freight is economical but slower.

                            </li>
                            <li>
                                Customs & Documentation -
                                Customs duties, permits, and clearance processes can influence overall moving charges.
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

export default InternationalMovers;