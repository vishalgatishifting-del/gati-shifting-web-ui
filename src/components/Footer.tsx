
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
                            <li><a href="#">Why Gati</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Vision & Mission</a></li>
                            <li><a href="#">Our Videos</a></li>
                            <li><a href="#">Photo Gallery</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Need Help?</h4>
                        <ul>
                            <li><Link to="/faqs">FAQs</Link></li>
                            <li><a href="#">Get a Quote</a></li>
                            <li><a href="#">Customer Support</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Moving Guide</a></li>
                            <li><a href="#">Bill Claim</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#">Home Shifting</a></li>
                            <li><a href="#">Office Relocation</a></li>
                            <li><a href="#">Car/Bike Transport</a></li>
                            <li><a href="#">Pet Relocation</a></li>
                            <li><a href="#">AC Shifting</a></li>
                            <li><a href="#">International Moves</a></li>
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
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 Gati Shifting Packers. All Rights Reserved.</p>
                    <div className="footer-links">
                        <a href="#">Terms</a> | <a href="#">Privacy</a>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;