import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";
import "./VissionMission.scss"
import { Helmet } from "react-helmet-async";



const VisionandMision = () => {
    return (
        <>

        <Helmet>

        <title>Vision & Mission | Gati Shifting Packers</title>
        <meta name="description" content="Discover the vision and mission of Gati Shifting Packers — our commitment to quality relocation services and customer satisfaction." />
        <meta name="keywords" content="vision, mission, Gati Shifting Packers, relocation services, customer satisfaction, company values"/>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="rohan" />

        {/* Open Graph */}
        <meta property="og:title" content="Vision & Mission | Gati Shifting Packers" />
        <meta property="og:description" content="Discover the vision and mission of Gati Shifting Packers — our commitment to quality relocation services and customer satisfaction." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gatishiftingpackers.com/vission-mission" />
        <meta property="og:site_name" content="Gati Shifting Packers" />
        <meta property="og:image" content="https://gatishiftingpackers.com/metaImg.png" />
        <meta property="og:image:alt" content="Vision & Mission - Gati Shifting Packers" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vision & Mission | Gati Shifting Packers" />
        <meta name="twitter:description" content="Discover the vision and mission of Gati Shifting Packers — our commitment to quality relocation services and customer satisfaction." />
        <meta name="twitter:image" content="https://gatishiftingpackers.com/metaImg.png" />

        <meta httpEquiv="content-language" content="en"/>     

     
        </Helmet>
            <section id="vissionandmissionsec">
                <div className="container">
                    <div className="content">
                        <div className="c1">
                            <h1>Our Vision & Mission – Gati Shifting Packers</h1>
                            <h2>Our Vision</h2>
                            <p>
                                At Gati Shifting Packers, our vision is to become the most trusted and customer-focused relocation partner in India and across the globe. We aim to set new standards in the packing and moving industry by combining advanced technology, professional expertise, and a strong commitment to customer satisfaction.
                                We aspire to be the first choice for relocation services—whether it’s shifting within Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Jaipur, Lucknow, or moving internationally to destinations such as the USA, Canada, UK, Australia, UAE, Germany, Singapore, France, Saudi Arabia, and Qatar.

                            </p>
                        </div>
                        <div className="c2">
                            <h2>Our Mission</h2>
                            <p>Our mission is to deliver safe, reliable, and stress-free relocation experiences to individuals, families, and businesses. We strive to achieve this by:</p>
                            <ul>
                                <li>Customer-First Approach – Placing customer satisfaction at the core of everything we do.</li>
                                <li>Nationwide & Global Presence – Offering services across all major Indian cities including Surat, Nagpur, Indore, Bhopal, Patna, Ranchi, Chandigarh, Noida, Faridabad, and extending our expertise to international destinations.</li>
                                <li>Quality & Safety – Using high-quality packing materials, modern logistics, and global standards to protect your belongings.</li>
                                <li>Innovation & Technology – Leveraging advanced tracking systems and efficient processes for timely delivery.</li>
                                <li>Dedicated Teamwork – Empowering our team of professionals to provide personalized solutions for every move.</li>
                            </ul>
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