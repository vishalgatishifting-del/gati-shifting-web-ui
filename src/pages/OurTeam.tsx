import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";

import "./OurTeam.scss"
import OurTeamImg from "../assets/ourTeam/outTeam.svg"
import OurTeamImg2 from "../assets/ourTeam/ourTeam2.svg"
import logo from "../assets/logo2.webp"
import TrustUsSection from "../components/TrustUsSection";


const OurTeam = () => {
    return (
        <> <div className="bg-attached-our-team">
                    <h1>Our Team</h1>
                </div>
            <section id="our-team-section">
                <div className="container">
                    <div className="content">
                        <img className="logo" src={logo} />
                        <h1>Meet Our Team at Gati Shifting Packers</h1>
                        <p>
                            At Gati Shifting Packers, we know that behind every successful move is a dedicated team. Our people are the strength of our company, ensuring every relocation—whether local, national, or international—is smooth, safe, and stress-free. From Delhi to Mumbai, Bangalore to Hyderabad, or even overseas moves, our professionals handle each step with care and precision.
                        </p>
                        <div className="card">
                            <div className="details">
                                <h2>Skilled Experts for Domestic & International Relocation</h2>
                                <p>Our team consists of highly trained professionals with expertise in both domestic and global shifting. Whether you’re moving across India—Chennai, Kolkata, Pune, Ahmedabad, Surat, Jaipur, Lucknow, Nagpur, Indore, Patna, Chandigarh, Noida, Faridabad, and more—or relocating to international destinations like the USA, Canada, Australia, United Kingdom (UK), Germany, France, Singapore, UAE, Qatar, or Saudi Arabia, our specialists ensure your belongings are transported with utmost care.</p>
                            </div>
                            <div className="imgBx">
                                <img src={OurTeamImg} />
                            </div>
                        </div>
                        <div className="card second">
                            <div className="details">

                                <h2>What Our Team Offers</h2>
                                <ul>
                                    <li>End-to-End Solutions – From packing and customs clearance to delivery at your new address.</li>
                                    <li>Global Network – Partnerships across Europe, North America, the Middle East, and Asia for seamless international moves.</li>
                                    <li>Customer-First Mindset – Every member of our team is trained to put your comfort and satisfaction first.</li>
                                    <li>Safe & Secure Handling – International-grade packing material and advanced techniques protect your valuables during transit.</li>
                                </ul>
                            </div>
                            <div className="imgBx">
                                <img src={OurTeamImg2} />
                            </div>

                        </div>

                        <h2>Why Choose Our Team?</h2>
                        <ul>
                            <li>Local Expertise, Global Reach – Whether you need Gati Shifting Packers in Delhi or relocation to Canada, our team makes it possible.</li>
                            <li>Transparency & Reliability – Clear communication at every stage of your move.</li>
                            <li>Cultural Sensitivity – Our international relocation specialists understand regional requirements and customs regulations.</li>
                            <li>Committed Professionals – From planning to unpacking, our people stay by your side.</li>
                        </ul>

                        <br></br>
                        <h2>
                            Your Trusted Relocation Partners Worldwide
                        </h2>
                        <p>When you choose Gati Shifting Packers, you’re choosing more than a moving company—you’re choosing a team that values your trust. Be it shifting within India or relocating abroad to USA, UK, Canada, Australia, UAE, Singapore, Germany, France, Qatar, or Saudi Arabia, our experts ensure a safe, efficient, and worry-free experience.</p>
                    </div>
                </div>
            </section>
            <GetInTouch></GetInTouch>
            <TrustUsSection></TrustUsSection>
            <BrandList></BrandList>
            <FAQList></FAQList>
        </>
    )
}

export default OurTeam;