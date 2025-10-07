import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";
import "./PrivacyPolicy.scss"

const PrivacyPolicy = () => {
    return (
        <>
            <section id="privacypolicysec">
                <div className="container">
                    <div className="content">
                        <h1>Privacy Policy for Gati Shifting Packers</h1>
                        <p>At Gati Shifting Packers, we respect your privacy and are committed to protecting your personal information. This Privacy Policy describes how we collect, use, and disclose information when you use our website (gatishiftingpackers.com) or avail of our goods transport and packers and movers services. By using our website or services, you agree to the terms of this Privacy Policy.</p>

                        <div className="card">
                            <h2>Information we collect for Gati Shifting Packers</h2>
                            <p>When you contact us directly, we may collect additional information about you, such as your name, email address, phone number, the contents of the message, and any other information you choose to provide.
                                <br />
                                When you register for an account, we may ask for your contact information, including your name, company name, address, email address, and telephone number. We may also share customer details with our verified vendors through our Android application. Before giving access to our vendors, we verify them by mobile, email, office address, and government licences like GST.
                            </p>
                        </div>

                        <div className="card">
                            <h2>How we use your information</h2>
                            <p>We use the information we collect for various purposes, including:</p>
                            <ul>
                                <li>Providing, operating, and maintaining our website and services</li>
                                <li>Improving and personalising our website and services</li>
                                <li>Understanding and analysing how you use our website and services</li>
                                <li>Developing new products, services, features, and functionality</li>
                                <li>Communicating with you for customer service, updates, and marketing and promotional purposes</li>
                                <li>Sending you emails</li>
                                <li>Finding and preventing fraud</li>
                            </ul>
                        </div>


                        <div className="card">
                            <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
                            <p>Under the California Consumer Privacy Act (CCPA), California residents have the right to request that a business that collects personal information disclose the categories and specific pieces of personal information that the business has collected about them. We do not sell personal information of our users.</p>
                        </div>

                        <div className="card">
                            <h2>GDPR Data Protection Rights</h2>
                            <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). These include the right to access, rectify, erase, restrict processing, and object to processing of your personal data. If you wish to exercise any of these rights, please contact us.</p>
                        </div>
                        <div className="card">
                            <h2>Children's information</h2>
                            <p>Our website and services are not intended for children under the age of 13. We do not knowingly collect personal identifiable information from children under the age of 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately, and we will do our best to remove such information from our records.</p>
                        </div>
                        <div className="card">
                            <h2>Data retention</h2>
                            <p>We retain personal information we collect for as long as necessary to provide our services and for other essential purposes, such as complying with our legal obligations, resolving disputes, and enforcing our agreements.</p>
                        </div>
                        <div className="card">
                            <h2>Security</h2>
                            <p>We take reasonable measures to protect your personal information from unauthorised access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure.</p>
                        </div>
                        <div className="card">
                            <h2>Changes to Privacy Policy</h2>
                            <p>We reserve the right to modify this Privacy Policy at any time. If we make material changes to this policy, we will notify you by email or by posting a notice on our website. Your continued use of our website or services after any modifications to this policy constitutes your acceptance of those modifications.</p>
                        </div>
                        <div className="card">
                            <h2>Contact us</h2>
                            <p>If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:gatishiftingpackers@gmail.com">infogatishiftingpackers@gmail.com</a>.
                            <br />
                            Thank you for choosing Gati Shifting Packers for your transportation and packing needs.
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

export default PrivacyPolicy;