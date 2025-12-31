import "./Storage.scss"
import heroSectionImg from "../assets/Storage/hero-section-img.webp"
import { Link } from "react-router-dom";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


import abhibus_icon from "../assets/Storage/Abhibus-icon.webp"
import AIMMAF_icon from "../assets/Storage/AIMMAF-icon.webp"
import cartello_icon from "../assets/Storage/cartello-icon.webp"
import cmo_axis_icon from "../assets/Storage/cmo-axis-icon.webp"
import edgar_icon from "../assets/Storage/edgar-icon.webp"
import ezetap_icon from "../assets/Storage/ezetap-icon.webp"
import greencube_icon from "../assets/Storage/greencube-icon.webp"
import hubler_icon from "../assets/Storage/hubler-icon.webp"
import intelligentia_it_systems_icon from "../assets/Storage/intelligentia-it-systems-icon.webp"
import ixigo_icon from "../assets/Storage/ixigo-icon.webp"
import qwikcliver_icon from "../assets/Storage/qwikcliver-icon.webp"
import rapyder_icon from "../assets/Storage/rapyder-icon.webp"
import rotzler_icon from "../assets/Storage/rotzler-icon.webp"
import ToneTag_icon from "../assets/Storage/ToneTag-icon.webp"
import toyota_tsusho_icon from "../assets/Storage/toyota-tsusho-icon.webp"
import HDFC_icon from "../assets/Storage/HDFC-icon.webp"



import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import InventoryIcon from '@mui/icons-material/Inventory';


import houseImg from "../assets/Storage/house.jpg"
import documentImg from "../assets/Storage/document.jpg"
import businessImg from "../assets/Storage/business.jpg"
import boxImg from "../assets/Storage/boxes.jpg"




import FingerprintIcon from '@mui/icons-material/Fingerprint';
import SecurityIcon from '@mui/icons-material/Security';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import PestControlIcon from '@mui/icons-material/PestControl';
import VideocamIcon from '@mui/icons-material/Videocam';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HttpsIcon from '@mui/icons-material/Https';

const Storage = () => {
    return (
        <>
            <section id="hero-section">
                <div className="container">
                    <div className="content">
                        <h1>We Store Anything You Care...Best Storage Services</h1>
                        <p>🎉Book Today For 20% OFF!!!🎉</p>
                        <div className="links">
                            <a className="call-btn" href="tel:+919422799477"><LocalPhoneIcon></LocalPhoneIcon> +91 9422799477</a>
                            <Link className="quote-btn" to="/contact-us">Get a Free Quote </Link>
                        </div>
                    </div>
                    <div className="img-bx">
                        <img src={heroSectionImg} />
                    </div>
                </div>
            </section>

            <section id="brands-section">
                <div className="heading-container">
                    <h2>Leading Businesses Trust <span className="primary-color">Gati Shifting Packers</span></h2>
                    <p>Providing secure storage solutions to India's top companies and organizations</p>
                </div>
                <div className="container">
                    <div className="brand">
                        <img src={abhibus_icon} alt="Abhibus" />
                    </div>

                    <div className="brand">
                        <img src={AIMMAF_icon} alt="AIMMAF" />
                    </div>

                    <div className="brand">
                        <img src={cartello_icon} alt="Cartello" />
                    </div>

                    <div className="brand">
                        <img src={cmo_axis_icon} alt="CMO Axis" />
                    </div>

                    <div className="brand">
                        <img src={edgar_icon} alt="Edgar" />
                    </div>

                    <div className="brand">
                        <img src={ezetap_icon} alt="Ezetap" />
                    </div>

                    <div className="brand">
                        <img src={greencube_icon} alt="Greencube" />
                    </div>

                    <div className="brand">
                        <img src={hubler_icon} alt="Hubler" />
                    </div>

                    <div className="brand">
                        <img src={intelligentia_it_systems_icon} alt="Intelligentia IT Systems" />
                    </div>

                    <div className="brand">
                        <img src={ixigo_icon} alt="Ixigo" />
                    </div>

                    <div className="brand">
                        <img src={qwikcliver_icon} alt="Qwikcliver" />
                    </div>

                    <div className="brand">
                        <img src={rapyder_icon} alt="Rapyder" />
                    </div>

                    <div className="brand">
                        <img src={rotzler_icon} alt="Rotzler" />
                    </div>

                    <div className="brand">
                        <img src={ToneTag_icon} alt="ToneTag" />
                    </div>

                    <div className="brand">
                        <img src={toyota_tsusho_icon} alt="Toyota Tsusho" />
                    </div>

                    <div className="brand">
                        <img src={HDFC_icon} alt="HDFC" />
                    </div>

                </div>
            </section>

            <section id="numbers-section">
                <div className="numbers-container">
                    <div>
                        <h4>630+</h4>
                        <span>B2B Clients</span>
                    </div>
                    <div>
                        <h4>71K+</h4>
                        <span>Business Items Stored</span>
                    </div>
                    <div>
                        <h4>24/7</h4>
                        <span>Business Support</span>
                    </div>
                    <div>
                        <h4>99.9%</h4>
                        <span>Client Retention</span>
                    </div>
                </div>
                <div className="contact-container">
                    <span>Trusted by top Indian companies for secure and reliable storage solutions.</span>
                    <div className="links">
                        <Link className="quote-btn" to="/contact-us">Get Free Quote</Link>
                        <a className="call-btn" href="tel:+919422799477"><LocalPhoneIcon></LocalPhoneIcon> +91 9422799477</a>
                    </div>
                </div>
            </section>

            <section id="what-we-offer-section">
                <div className="heading">
                    <h1>What we offer</h1>
                    <p>Comprehensive storage solutions tailored to meet your specific needs</p>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="detail">
                            <h2><span className="icon"><HomeIcon></HomeIcon></span> Household Storage</h2>
                            <p>We pride ourselves on being the best when it comes to helping you with storing your furniture. Stow your household items safely with our storage services in Hyderabad, Chennai, Pune and Mumbai.</p>
                            <div className="features-box">
                                <span>🛋 Furniture Protection</span>
                                <span>📍 Multiple Cities</span>
                                <span>🔒 Safe & Secure</span>
                            </div>
                            <Link className="quote-btn" to="/contact-us">Get Free Quote</Link>
                        </div>
                        <div className="img-bx">
                            <img src={houseImg} />
                        </div>
                    </div>



                    <div className="card">
                        <div className="detail">
                            <h2><span className="icon"><DescriptionIcon></DescriptionIcon></span> Document Storage</h2>
                            <p>SafeStorage provides records management document storage services for professionals and small businesses for the safe and secure business storage space of official files and documents.</p>
                            <div className="features-box">
                                <span>👔 Professional Service</span>
                                <span>🏢 Business Storage</span>
                                <span>🔐 Secure Files</span>
                            </div>
                            <Link className="quote-btn" to="/contact-us">Get Free Quote</Link>
                        </div>
                        <div className="img-bx">
                            <img src={documentImg} />
                        </div>
                    </div>


                    <div className="card">
                        <div className="detail">
                            <h2><span className="icon"><DirectionsCarFilledIcon></DirectionsCarFilledIcon></span> Automobile Storage</h2>
                            <p>SafeStorage gives you the perfect solution for your vehicle and ensures it's monitored 24x7, rodent proof, and in a protected environment. Store your vehicles in major cities.</p>
                            <div className="features-box">
                                <span>🎥 24x7 Monitoring</span>
                                <span>🐭 Rodent Proof</span>
                                <span>🌐 Multiple Locations</span>
                            </div>
                            <Link className="quote-btn" to="/contact-us">Get Free Quote</Link>
                        </div>
                        <div className="img-bx">
                            <img src={businessImg} />
                        </div>
                    </div>

                    <div className="card">
                        <div className="detail">
                            <h2><span className="icon"><InventoryIcon></InventoryIcon></span> Box Storage</h2>
                            <p>SafeStorage provides corrugated boxes in different sizes to store your clothes, decor, utensils, and documents — available for all use cases. These sturdy boxes are perfect for safe packing and easy organization.</p>
                            <div className="features-box">
                                <span>📦 Different Sizes</span>
                                <span>💼 Versatile Use</span>
                                <span>🎯 Quality Boxes</span>
                            </div>
                            <Link className="quote-btn" to="/contact-us">Get Free Quote</Link>
                        </div>
                        <div className="img-bx">
                            <img src={boxImg} />
                        </div>
                    </div>
                </div>
            </section>


            <section id="safe-secure-section">
                <div className="container">
                    <h1>Safe, secure, reliable storage</h1>
                    <p>SafeStorage is operational in 11 major cities across India: Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Noida, Gurugram, Kolkata, Coimbatore, and Jaipur — delivering secure and reliable storage solutions wherever you are.</p>

                    <div className="content">
                        <div className="card">
                            <FingerprintIcon className="icon"></FingerprintIcon>
                            <span>Biometric Access</span>
                        </div>
                        <div className="card">
                            <SecurityIcon className="icon"></SecurityIcon>
                            <span>Insurance Coverage</span>
                        </div>
                        <div className="card">
                            <QrCode2Icon className="icon"></QrCode2Icon>
                            <span>Barcode Tracking</span>
                        </div>
                        <div className="card">
                            <FireExtinguisherIcon className="icon"></FireExtinguisherIcon>
                            <span>Fire Control</span>
                        </div>
                        <div className="card">
                            <PestControlIcon className="icon"></PestControlIcon>
                            <span>Pest Control</span>
                        </div>
                        <div className="card">
                            <VideocamIcon className="icon"></VideocamIcon>
                            <span>CCTV Monitoring</span>
                        </div>
                        <div className="card">
                            <LocalShippingIcon className="icon"></LocalShippingIcon>
                            <span>24/7 Security</span>
                        </div>
                        <div className="card">
                            <HttpsIcon className="icon"></HttpsIcon>
                            <span>Biometric Access</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Storage;