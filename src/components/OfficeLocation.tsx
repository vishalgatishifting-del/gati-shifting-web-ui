// import { motion, type Variants } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import BadgeIcon from '@mui/icons-material/Badge';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HotelClassIcon from '@mui/icons-material/HotelClass';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Link } from "react-router-dom";
import "./OfficeLocation.scss"

const OfficeLocation = () => {

    // const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: false, threshold: 0.2 });
    // const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: false, threshold: 0.2 });

    // const slideLeft: Variants = {
    //     hidden: { opacity: 0, x: -100 },
    //     visible: (delay = 0) => ({
    //         opacity: 1,
    //         x: 0,
    //         transition: { duration: 0.3, ease: "easeOut", delay },
    //     }),
    // };


    // const slideRight: Variants = {
    //     hidden: { opacity: 0, x: 100 },
    //     visible: (delay = 0) => ({
    //         opacity: 1,
    //         x: 0,
    //         transition: { duration: 0.3, ease: "easeOut", delay },
    //     }),
    // };
    return (
        <section id="office-location-section">
            <div className="buttons">
                <Link to="https://gatishiftingpackers.com/city/delhi">Delhi</Link>
                <Link to="https://gatishiftingpackers.com/city/Mumbai">Mumbai</Link>
                <Link to="https://gatishiftingpackers.com/city/Kolkata">Kolkata</Link>
                <Link to="https://gatishiftingpackers.com/city/Chennai">Chennai</Link>
                <Link to="https://gatishiftingpackers.com/city/Bengaluru">Bengaluru</Link>
                <Link to="https://gatishiftingpackers.com/city/Hyderabad">Hyderabad</Link>
                <Link to="https://gatishiftingpackers.com/city/Pune">Pune</Link>
                <Link to="https://gatishiftingpackers.com/city/Goa">Goa</Link>
                <Link to="https://gatishiftingpackers.com/city/Guwhati">Guwhati</Link>
                <Link to="https://gatishiftingpackers.com/city/Imphal">Imphal</Link>
            </div>
            <div className="container">
                {/* <motion.div
                    ref={ref3}
                    variants={slideLeft}
                    initial="hidden"
                    animate={inView3 ? "visible" : "hidden"}
                    custom={0.3} // delay
                    className="p-6 bg-yellow-200 rounded-xl shadow-lg text-center w-fit mx-auto"
                > */}
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3769.5225867720897!2d72.99421947520662!3d19.128588882086827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDA3JzQyLjkiTiA3MsKwNTknNDguNSJF!5e0!3m2!1sen!2sin!4v1758188918732!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                    />
                {/* </motion.div>
                <motion.div
                    ref={ref4}
                    variants={slideRight}
                    initial="hidden"
                    animate={inView4 ? "visible" : "hidden"}
                    custom={0.3} // delay
                    className="p-6 bg-blue-200 rounded-xl shadow-lg text-center w-fit mx-auto"
                > */}
                    <div className="details">
                        <h1>Our Office Location</h1>

                        <ul>

                            <li><LocationOnIcon></LocationOnIcon><span>Office No. 04 Shree Sadguru Niwas Opp MSEB OFFICE Sector 21 Ghansoli Navi Mumbai 400701, India</span></li>
                            <li><CallIcon></CallIcon> <span>+91 9422799477</span></li>
                            <li><EmailIcon></EmailIcon> <span>gatishiftingpackers@gmail.com</span></li>
                            <li><WatchLaterIcon></WatchLaterIcon><span>Mon - Sun: 8:00 AM - 8:00 PM</span></li>
                            <li><BadgeIcon></BadgeIcon><span>GST Number: 06AAMCG3191P1ZZ</span></li>
                            <li><BrandingWatermarkIcon></BrandingWatermarkIcon><span>MSME Number: UDYAM-MH-19-0373918</span></li>
                            <li><VerifiedUserIcon></VerifiedUserIcon><span>Corporate Identification Number: U52293HR2025PTC135734</span></li>
                            <li><HotelClassIcon></HotelClassIcon><span>TAN No: RTKG21417E</span></li>
                            <li><CreditCardIcon></CreditCardIcon><span>PAN Number: AAMCG3191P</span></li>
                        </ul>

                        <h1 className="hashTag">#GatiShiftingPackers</h1>
                    </div>
                {/* </motion.div> */}
            </div>
        </section>
    )
}

export default OfficeLocation;