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
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';


import houseImg from "../assets/Storage/house.jpg"
import documentImg from "../assets/Storage/document.jpg"
import businessImg from "../assets/Storage/business.jpg"
import boxImg from "../assets/Storage/boxes.jpg"
import bikeImg from "../assets/Storage/bikeStorage.png"
import carImg from "../assets/Storage/carStorage.png"


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";





import SecurityIcon from '@mui/icons-material/Security';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import PestControlIcon from '@mui/icons-material/PestControl';
import VideocamIcon from '@mui/icons-material/Videocam';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import sampleImg1 from "../assets/Storage/sample1.png"
import sampleImg2 from "../assets/Storage/sample2.png"
import sampleImg3 from "../assets/Storage/sample3.png"
import sampleImg4 from "../assets/Storage/sample4.png"
import sampleImg5 from "../assets/Storage/sample5.jpeg"
import sampleImg6 from "../assets/Storage/sample6.jpeg"
import sampleImg7 from "../assets/Storage/sample7.jpeg"
import sampleImg8 from "../assets/Storage/sample8.jpeg"
import { Helmet } from "react-helmet-async";

const Storage = () => {

    const imgArr = [sampleImg1, sampleImg2, sampleImg3, sampleImg4, sampleImg5, sampleImg6, sampleImg7, sampleImg8];
    return (
        <>
            <Helmet>
                {/* Meta Tags for Car Storage Service Page */}
                <title>Car Storage Services | Gati Shifting Packers</title>

                <meta name="description" content="Secure and affordable Car Storage Services by Gati Shifting Packers. Safe, monitored and reliable short-term and long-term vehicle storage solutions across India." />
                <meta name="keywords" content="Gati Shifting Packers car storage, car storage services India, vehicle storage services, secure car storage, long term car storage, short term car storage, car warehousing services, car parking storage, indoor car storage, outdoor car storage, safe car storage facility, affordable car storage services, car storage near me, vehicle storage during relocation, automobile storage services, car and bike storage services, professional car storage company India, reliable vehicle storage solutions, car storage facilities India, temporary car storage, monitored car storage facility, climate controlled car storage, door to door car storage services, best car storage services in India, trusted car storage company near me" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Abhishek" />


                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Car Storage Services | Gati Shifting Packers" />
                <meta property="og:description" content="Looking for secure car storage? Gati Shifting Packers offers safe, monitored and professional vehicle storage services for short-term and long-term needs." />
                <meta property="og:url" content="https://gatishiftingpackers.com/car-storage" />
                <meta property="og:site_name" content="Gati Shifting Packers" />
                <meta property="og:image" content="" />


                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Car Storage Services | Gati Shifting Packers" />
                <meta name="twitter:description" content="Safe, secure and affordable car storage solutions by Gati Shifting Packers. Protect your vehicle with trusted storage services." />
                <meta name="twitter:image" content="" />
                <meta http-equiv="Content-Language" content="en" />


                {/* Canonical URL */}
                <link rel="canonical" href="https://gatishiftingpackers.com/car-storage" />
            </Helmet>
            <div className="bg-attached">
                <h1>Storage</h1>
            </div>
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



            <section id="slider-section">
                <div className="heading">Everything You Need In One Place</div>
                <div className="container">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        navigation={true}
                        autoplay={{
                            delay: 2000,
                            pauseOnMouseEnter: true,
                        }}
                        spaceBetween={0}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                            900: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#546BFF" }}>💲</div>
                                <span>TRANSPARENT</span>
                                <h3>No Hidden Fees</h3>
                                <Link to="/contact-us">Only pay for what you use</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#FFF154" }}>🔓</div>
                                <span>Flexible</span>
                                <h3>No Deposit Required</h3>
                                <Link to="/contact-us">Start storing immediately</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#F954FF" }}>🛡️</div>
                                <span>Protected</span>
                                <h3>Free Insurance</h3>
                                <Link to="/contact-us">Complete protection included</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#FF546E" }}>🚚</div>
                                <span>Convenient</span>
                                <h3>Doorstep Pickup & Delivery</h3>
                                <Link to="/contact-us">We come to you</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#5DFF54" }}>📉</div>
                                <span>Affordable</span>
                                <h3>Long-Term Discounts</h3>
                                <Link to="/contact-us">Save with commitment</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#FFB854" }}>👥</div>
                                <span>Trusted</span>
                                <h3>1 Lakh+ Happy Customers</h3>
                                <Link to="/contact-us">Join the community</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#54FF98" }}>🎥</div>
                                <span>Secure</span>
                                <h3>24/7 Security Monitoring</h3>
                                <Link to="/contact-us">Peace of mind guaranteed</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#5476FF" }}>🧹</div>
                                <span>Hygienic</span>
                                <h3>Pest-Free Warehouses</h3>
                                <Link to="/contact-us">Clean storage environment</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#9B54FF" }}>🔥</div>
                                <span>Safety</span>
                                <h3>Fire Safety Enabled</h3>
                                <Link to="/contact-us">Safety first</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#FF54B5" }}>🌡️</div>
                                <span>Preserved</span>
                                <h3>Climate-Controlled Storage</h3>
                                <Link to="/contact-us">Protects sensitive items</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#40FF1F" }}>📦</div>
                                <span>Packed Right</span>
                                <h3>Custom Packing Services</h3>
                                <Link to="/contact-us">Handled with care</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#FF881F" }}>🤖</div>
                                <span>Smart</span>
                                <h3>AI-Powered Tracking</h3>
                                <Link to="/contact-us">Know what's stored</Link>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#FF1F2A" }}>🏆</div>
                                <span>Top Rated</span>
                                <h3>India's No. 1 Storage</h3>
                                <Link to="/contact-us">#1 in secure storage</Link>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#1FC3FF" }}>🌆</div>
                                <span>Pan India</span>
                                <h3>11 Cities Covered</h3>
                                <Link to="/contact-us">Nationwide reach</Link>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#67BF3B" }}>🔓</div>
                                <span>Flexible Terms</span>
                                <h3>No Lock-In Contracts</h3>
                                <Link to="/contact-us">Cancel anytime</Link>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#3BABBF" }}>🤝</div>
                                <span>Best Value</span>
                                <h3>Price Match Guarantee</h3>
                                <Link to="/contact-us">Better deal? We'll match it</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#BF3BB8" }}>📜</div>
                                <span>Certified</span>
                                <h3>ISO Certified Storage</h3>
                                <Link to="/contact-us">Global standards</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#007C8A" }}>⭐</div>
                                <span>Rated 4.9</span>
                                <h3>Customer Favorite</h3>
                                <Link to="/contact-us">4.9 Rating</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#3ED400" }}>⭐</div>
                                <span>Support</span>
                                <h3>Live Chat & Support</h3>
                                <Link to="/contact-us">We’re here for you</Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
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
                            <h2><span className="icon"><InventoryIcon></InventoryIcon></span> Box Storage</h2>
                            <p>Gati Shifting Packers provides corrugated boxes in different sizes to store your clothes, decor, utensils, and documents — available for all use cases. These sturdy boxes are perfect for safe packing and easy organization.</p>
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


                    <div className="card">
                        <div className="detail">
                            <h2><span className="icon"><TwoWheelerIcon></TwoWheelerIcon></span> Bike Storage</h2>
                            <p>Gati Shifting Packers offers safe and monitored bike storage services, ensuring your two-wheeler remains protected, clean, and ready to ride whenever needed.</p>
                            <div className="features-box">
                                <span>📦 Different Sizes</span>
                                <span>💼 Versatile Use</span>
                                <span>🎯 Quality Boxes</span>
                            </div>
                            <Link className="quote-btn" to="/contact-us">Get Free Quote</Link>
                        </div>
                        <div className="img-bx">
                            <img src={bikeImg} />
                        </div>
                    </div>
                    <div className="card">
                        <div className="detail">
                            <h2><span className="icon"><DirectionsCarIcon></DirectionsCarIcon></span> Car Storage</h2>
                            <p>Gati Shifting Packers provides secure car storage facilities to protect your vehicle from damage, theft, and weather conditions with complete peace of mind.</p>
                            <div className="features-box">
                                <span>📦 Different Sizes</span>
                                <span>💼 Versatile Use</span>
                                <span>🎯 Quality Boxes</span>
                            </div>
                            <Link className="quote-btn" to="/contact-us">Get Free Quote</Link>
                        </div>
                        <div className="img-bx">
                            <img src={carImg} />
                        </div>
                    </div>



                    <div className="card">
                        <div className="detail">
                            <h2><span className="icon"><DescriptionIcon></DescriptionIcon></span> Document Storage</h2>
                            <p>Gati Shifting Packers provides records management document storage services for professionals and small businesses for the safe and secure business storage space of official files and documents.</p>
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
                            <h2><span className="icon"><DirectionsCarFilledIcon></DirectionsCarFilledIcon></span> Commercial Storage</h2>
                            <p>Gati Shifting Packers offers reliable commercial storage solutions for businesses, providing secure and well-managed space for inventory, equipment, and operational assets.</p>
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

                </div>
            </section>


            <section id="safe-secure-section">
                <div className="container">
                    <h1>🔐 Safe • Secure • Reliable Storage Solutions</h1>
                    <p>Gati Shifting Packers offers trusted storage services all over India, ensuring your belongings remain safe, protected, and well-managed for both short-term and long-term needs.
                        Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Noida, Gurugram, Kolkata, Coimbatore, Jaipur 7 All Over India delivering secure and reliable storage solutions wherever you are.</p>

                    <div className="content">
                        <div className="card">
                            <SecurityIcon className="icon"></SecurityIcon>
                            <span>Insurance Coverage</span>
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
                    </div>
                </div>
            </section>

            <section id="sample-images">
                <div className="container">
                    {imgArr.map((img) => {
                        return (<img src={img} />)
                    })}
                </div>
            </section>
        </>
    )
}

export default Storage;