import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import TrustUsSection from "../components/TrustUsSection";
import "./VissionMission.scss"


const VisionandMision = () => {
    return (
        <>
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

            <section id="customer-review">
                <h1>What Our Customers Say</h1>
                <h4>Real experiences from real people. Watch how we made their move stress-free.</h4>

                <div className="video">
                    <iframe width="400" height="255" src="https://www.youtube.com/embed/MlgLNz2-wbo?si=CWB7OKc-LM9dVgoa" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    <iframe width="400" height="255" src="https://youtube.com/embed/OMZEgiWrRfk?si=ImcWBYp5ve7AU-eJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    <iframe width="400" height="255" src="https://youtube.com/embed/1OkHdHUVhyY?si=F_-9Rte1auEfRJKA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </section>

            <GetInTouch></GetInTouch>
            <AwardCertification></AwardCertification>
            <TrustUsSection></TrustUsSection>
            <BrandList></BrandList>
            <FAQList></FAQList>
        </>
    )
}

export default VisionandMision;