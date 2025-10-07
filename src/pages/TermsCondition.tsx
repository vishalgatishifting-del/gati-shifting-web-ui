import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";
import "./TermsCondition.scss"

const VisionandMision = () => {
    return (
        <>
            <section id="termsandconidtionsec">
                <div className="container">
                    <div className="content">
                        <h1>Terms and Conditions for Gati Shifting Packers</h1>
                        <p>Welcome to Gati Shifting Packers! We are glad that you have chosen to use our services. By accessing and using our website (gatishiftingpackers.com) and services, you agree to the following terms and conditions. Please read them carefully before using our services.</p>
                        <div className="card">
                            <h2>Service Availability</h2>
                            <p>We provide goods transport, packing, and moving services across India as well as international relocation services. However, we reserve the right to refuse service to anyone for any reason at any time.</p>
                        </div>
                        <div className="card">
                            <h2>Customer Responsibility</h2>
                            <p>It is the customer’s responsibility to ensure that all goods are properly packed, labelled, and ready for shipment.
                                For international relocation, customers must provide accurate documentation and ensure that all necessary permits, licences, or customs clearances are in place. Prohibited or restricted items must not be included in the shipment.
                            </p>
                        </div>
                        <div className="card">
                            <h2>Liability</h2>
                            <p>We take utmost care in handling goods during packing, moving, and transportation. However, we are not liable for any damage, delay, or loss that may occur. Our liability is limited to the terms mentioned in the service contract. Customers are strongly advised to purchase insurance coverage for their goods, particularly for international shipments.
                            </p>
                        </div>
                        <div className="card">
                            <h2>Intellectual Property</h2>
                            <p>All content on our website, including text, graphics, logos, images, and software, is the property of Gati Shifting Packers and is protected by Indian and international copyright laws.
                            </p>
                        </div>
                        <div className="card">
                            <h2>Governing Law</h2>
                            <p>These terms and conditions are governed by the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in India. For international services, customers must also comply with the laws and regulations of the destination country.
                            </p>
                        </div>
                        <div className="card">
                            <h2>Booking & Payment</h2>
                            <p>An advance payment of ₹1,000 to ₹5,000 is mandatory at the time of booking. If a separate vehicle is booked, the customer must pay 90% in advance, and the remaining 10% at the delivery point once the vehicle reaches its destination. In the case of sharing/part-load services, full payment in advance is required, whether the goods are in the warehouse or in transit.
                                Additional Charges: Taxes, tolls, parking, demurrage, customs/clearance charges, and any other applicable fees shall be charged separately and will be the sole responsibility of the customer.

                            </p>
                        </div>
                        <div className="card">
                            <h2>Cancellation & Refund Policy</h2>
                            <p>All advance payments made at the time of booking are non-refundable in case of cancellation by the customer. Once the booking is confirmed and advance payment is received, the amount will not be returned under any circumstances.
                            </p>
                        </div>
                        <div className="card">
                            <h2>Prohibited & Restricted Items</h2>
                            <p>Customers are strictly advised not to include the following items in their consignment:
                                <ul>
                                    <li>Explosives, fireworks, and inflammable items</li>
                                    <li>Hazardous or toxic chemicals, gases, and radioactive materials</li>
                                    <li>Perishable goods such as food, plants, or liquids (unless prior special arrangements have been made)</li>
                                    <li>Illegal goods, drugs, weapons, or items prohibited by law</li>
                                    <li>Currency, precious metals, jewellery, or valuable documents (unless declared in advance and insured separately)</li>
                                </ul>
                                ⚠️ Important: If any prohibited or restricted items are found in the shipment, Gati Shifting Packers will not be liable for loss, damage, or legal consequences arising from the same.

                            </p>
                        </div>
                        <div className="card">
                            <h2>Insurance & Liability</h2>
                            <p>Customers are strongly recommended to purchase transit insurance for their goods. Gati Shifting Packers can assist in providing suitable insurance options upon request.
                                The company’s liability shall be limited to the declared value of goods or as specified in the service contract. Liability will not exceed this limit under any circumstances.
                                <br />
                                <br />
                                Claims Process:
                                <br />
                                <ul>
                                    <li>Visible Damage – Must be reported in writing within 7 days of delivery.</li>
                                    <li>Concealed Damage – Must be reported within 30 days of unpacking.</li>
                                </ul>
                                Required Documents for Claim:
                                <ul>
                                    <li>Photographs of the damage</li>
                                    <li>Copy of delivery receipt (with remarks, if any)</li>
                                    <li>Supporting documents (invoice, insurance papers, etc.)</li>
                                </ul>
                                ⚠️ Claims submitted without complete documentation or beyond the specified timelines may not be accepted.

                            </p>
                        </div>
                        <div className="card">
                            <h2>Changes to Terms and Conditions</h2>
                            <p>We reserve the right to modify these terms and conditions at any time. Customers are encouraged to review them periodically. Continued use of our website and services after any updates will be considered as acceptance of the revised terms.
                                For any questions or concerns regarding our terms and conditions, please contact us at infogatishiftingpackers@gmail.com.
                                Thank you for choosing Gati Shifting Packers for your domestic and international relocation needs.

                            </p>
                        </div>
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

export default VisionandMision;