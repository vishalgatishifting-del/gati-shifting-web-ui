
import { Link } from "react-router-dom";
import "./Footer.scss"
import logoImg from "../assets/logo/roundedLogo.png"


const Footer = () => {
    return (
        <>
            <section id="redirect-links">
                <h1>Search By Location</h1>
                <div className="container">
                    <ul>
                        <li><Link to="/">Packers & Movers Agra</Link></li>
                        <li><Link to="/">Packers & Movers Ankleshwar</Link></li>
                        <li><Link to="/">Packers & Movers Bhiwandi</Link></li>
                        <li><Link to="/">Packers & Movers Calicut</Link></li>
                        <li><Link to="/">Packers & Movers Cuttack</Link></li>
                        <li><Link to="/">Packers & Movers Gandhidham</Link></li>
                        <li><Link to="/">Packers & Movers Guwahati</Link></li>
                        <li><Link to="/">Packers & Movers Hyderabad</Link></li>
                        <li><Link to="/">Packers & Movers Jamshedpur</Link></li>
                        <li><Link to="/">Packers & Movers Kolhapur</Link></li>
                        <li><Link to="/">Packers & Movers Lucknow</Link></li>
                        <li><Link to="/">Packers & Movers Meerut</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/">Packers & Movers Ahmedabad</Link></li>
                        <li><Link to="/">Packers & Movers Aurangabad</Link></li>
                        <li><Link to="/">Packers & Movers Bhopal</Link></li>
                        <li><Link to="/">Packers & Movers Chandigarh</Link></li>
                        <li><Link to="/">Packers & Movers Dehradun</Link></li>
                        <li><Link to="/">Packers & Movers Ghaziabad</Link></li>
                        <li><Link to="/">Packers & Movers Gwalior</Link></li>
                        <li><Link to="/">Packers & Movers Indore</Link></li>
                        <li><Link to="/">Packers & Movers Jamnagar</Link></li>
                        <li><Link to="/">Packers & Movers Kolkata</Link></li>
                        <li><Link to="/">Packers & Movers Ludhiana</Link></li>
                        <li><Link to="/">Packers & Movers Mumbai</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/">Packers & Movers Allahabad</Link></li>
                        <li><Link to="/">Packers & Movers Alwar</Link></li>
                        <li><Link to="/">Packers & Movers Ambala</Link></li>
                        <li><Link to="/">Packers & Movers Vadodara</Link></li>
                        <li><Link to="/">Packers & Movers Bikaner</Link></li>
                        <li><Link to="/">Packers & Movers Bhubaneswar</Link></li>
                        <li><Link to="/">Packers & Movers Chennai</Link></li>
                        <li><Link to="/">Packers & Movers Kochi</Link></li>
                        <li><Link to="/">Packers & Movers Delhi</Link></li>
                        <li><Link to="/">Packers & Movers Dwarka</Link></li>
                        <li><Link to="/">Packers & Movers Faridabad</Link></li>
                        <li><Link to="/">Packers & Movers Goa</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/">Packers & Movers Greaternoida</Link></li>
                        <li><Link to="/">Packers & Movers Gurgaon</Link></li>
                        <li><Link to="/">Packers & Movers Hubli</Link></li>
                        <li><Link to="/">Packers & Movers Jammu</Link></li>
                        <li><Link to="/">Packers & Movers Kanpur</Link></li>
                        <li><Link to="/">Packers & Movers Kottayam</Link></li>
                        <li><Link to="/">Packers & Movers Mangalore</Link></li>
                        <li><Link to="/">Packers & Movers Nashik</Link></li>
                        <li><Link to="/">Packers & Movers Noida</Link></li>
                        <li><Link to="/">Packers & Movers Patna</Link></li>
                        <li><Link to="/">Packers & Movers Pune</Link></li>
                        <li><Link to="/">Packers & Movers Surat</Link></li>
                    </ul>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-top">
                    <div className="footer-col logo-col">
                        <img src={logoImg} alt="Gati Logo" className="footer-logo" />
                        <p>Gati Shifting Packers & Movers<br />
                            Ghansoli, Navi Mumbai, Maharashtra – 400701
                        </p>
                        <p>📞 +91 72900 08200</p>
                    </div>

                    <div className="footer-col">
                        <h4>About Gati</h4>
                        <ul>
                            <li><Link to="/who-we-are">Who We Are</Link></li>
                            <li><Link to="/why-gati">Why Gati</Link></li>
                            <li><Link to="/our-team">Our Team</Link></li>
                            <li><Link to="/vission-mission">Vision & Mission</Link></li>
                            <li><Link to="/video-gallery">Our Videos</Link></li>
                            <li><Link to="/photo-gallery">Photo Gallery</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Need Help?</h4>
                        <ul>
                            <li><Link to="/faqs">FAQs</Link></li>
                            <li><Link to="/contact-us">Get a Quote</Link></li>
                            <li><Link to="/customer-support">Customer Support</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                            <li><Link to="/moving-guide">Moving Guide</Link></li>
                            <li><Link to="/bill-claim">Bill Claim</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Our Services</h4>
                        <ul>
                            <li><Link to="/home-shifting">Home Shifting</Link></li>
                            <li><Link to="/office-relocation">Office Relocation</Link></li>
                            <li><Link to="/car-bike-transport">Car/Bike Transport</Link></li>
                            <li><Link to="/pet-relocation">Pet Relocation</Link></li>
                            <li><Link to="/commercial-shifting">Commercial Shifting</Link></li>
                            <li><Link to="/international-moves">International Moves</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Secure Storage</h4>
                        <ul>
                            <li><a href="#">Warehouse</a></li>
                            <li><a href="#">Home Storage</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Other Links</h4>
                        <ul>
                            <li><a href="#">Customer Testimonials</a></li>
                            <li><a href="#">Safety Standards</a></li>
                            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                            <li><Link to="/privacy-and-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 Gati Shifting Packers In  Collaboration with Gatisafe Express Private Limited. All Rights Reserved.</p>
                    <div className="footer-links">
                        <Link to="/terms-and-conditions">Terms</Link> | <Link to="/privacy-and-policy">Privacy</Link>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;