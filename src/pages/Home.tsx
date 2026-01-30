import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "./Home.scss"


import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


import { Box } from "@mui/material";
import Avatar from '@mui/material/Avatar';


// Main Slider Images
import gatiSlider2 from "../assets/sliderImg/gatislider2.webp"
import gatiSlider3 from "../assets/sliderImg/gatislider3.webp"
import gatiSlider4 from "../assets/sliderImg/gatislider4.webp"
import gatislider5 from "../assets/sliderImg/gatislider5.webp";
import gatislider6 from "../assets/sliderImg/gatislider6.webp";



// Icons for shipping category
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FactoryIcon from '@mui/icons-material/Factory';


import ZohoForm from "../components/ZohoForm"   // Form Component



import justDialCertificateImg from "../assets/homePagePng/justDialCertificate.webp"
import MSMECertificateImg from "../assets/homePagePng/MSMECertificate.webp"
import incorporationCertificate from "../assets/homePagePng/incorporationCertificate.webp"
import GSTIncorporation from "../assets/homePagePng/GSTCertificate.webp"
import ISOcertificate from "../assets/homePagePng/isoCertificate.webp"
import gatiCertificate from "../assets/homePagePng/gatiCertificate.webp"


// CountDown Section PNG
import truckPng from "../assets/homePagePng/Gemini_Generated_Image_2zntak2zntak2znt.webp"
import cityPng from "../assets/homePagePng/Gemini_Generated_Image_lfceqflfceqflfce.webp"
import verifiedBadgePng from "../assets/homePagePng/Gemini_Generated_Image_seeh1bseeh1bseeh.webp"
import peoplesPng from "../assets/homePagePng/Gemini_Generated_Image_lrzvt4lrzvt4lrzv.webp"


// Feature Slider Images
import feature1Img from "../assets/homePagePng/feature1.webp"
import feature2Img from "../assets/homePagePng/feature2.webp"
import feature3Img from "../assets/homePagePng/feature3.webp"
import feature4Img from "../assets/homePagePng/feature4.webp"
import feature5Img from "../assets/homePagePng/feature5.webp"
import feature6Img from "../assets/homePagePng/feature6.webp"
import feature7Img from "../assets/homePagePng/feature7.webp"
import feature8Img from "../assets/homePagePng/feature8.webp"
import feature9Img from "../assets/homePagePng/feature9.webp"
import feature10Img from "../assets/homePagePng/feature10.webp"
import feature11Img from "../assets/homePagePng/feature11.webp"
import feature12Img from "../assets/homePagePng/feature12.webp"
import feature13Img from "../assets/homePagePng/feature13.webp"
import feature14Img from "../assets/homePagePng/feature14.webp"
import feature15Img from "../assets/homePagePng/feature15.webp"
import feature16Img from "../assets/homePagePng/feature16.webp"
import feature17Img from "../assets/homePagePng/feature17.webp"
import feature18Img from "../assets/homePagePng/feature18.webp"
import feature19Img from "../assets/homePagePng/feature19.webp"
import feature20Img from "../assets/homePagePng/feature20.webp"
import feature21Img from "../assets/homePagePng/feature21.webp"
import feature22Img from "../assets/homePagePng/feature22.webp"
import feature23Img from "../assets/homePagePng/feature23.webp"
import feature24Img from "../assets/homePagePng/feature24.webp"
import feature25Img from "../assets/homePagePng/feature25.webp"
import feature26Img from "../assets/homePagePng/feature26.webp"
import feature27Img from "../assets/homePagePng/feature27.webp"


// Steps Section Icons
import DescriptionIcon from '@mui/icons-material/Description';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BalanceIcon from '@mui/icons-material/Balance';


// Components
import ReviewVideo from "../components/ReviewVideos";
// import GetInTouch from "../components/GetInTouch";
import googleRatingImg from "../assets/HomePage/ghs-google-rating.png"
import OfficeLocation from "../components/OfficeLocation";
import TrustUsSection from "../components/TrustUsSection";
import FAQList from "../components/FAQList";


import ProductImageSlider from "../components/PackingImageSlider"
import Counter from "../components/Counter";


// import stepsImg from "../assets/5-steps-banner.png";



import petSlider from "../assets/HomePage/slide2.webp";
import bike from "../assets/HomePage/slide3.webp";
import house from "../assets/HomePage/slide4.webp";
import car from "../assets/HomePage/slide1.webp";
import slide5 from "../assets/HomePage/slide5.webp";

import { Link } from "react-router-dom";

// import { IFaqItem } from "../models/App.model";
// import { AppConstant } from "../constants/app.constant";

import isoBadge from "../assets/HomePage/isoicon.webp"
import googleRatingBadge from "../assets/HomePage/5star.webp"
import trustedBadge from "../assets/HomePage/trusted.webp"


import truckImg from "../assets/HomePage/truck.webp"
import carLoadingImg from "../assets/HomePage/carLoading.webp"
import shipImg from "../assets/HomePage/ship.webp"
import ship2 from "../assets/HomePage/ship2.webp"
import airplaneImg from "../assets/HomePage/airplane.webp"
import truck2 from "../assets/HomePage/truck2.webp"

// import republicDayImg from "../assets/Themes/RepublicDay/man-with-flag.webp"


interface props {
    successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}
const Home: React.FC<props> = ({ successCondition }) => {

    useEffect(() => {
        import("slick-carousel/slick/slick.css");
        import("slick-carousel/slick/slick-theme.css");
    }, []);


    const images = [gatiSlider2, gatiSlider3, gatiSlider4, gatislider5, gatislider6];


    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.1 });



    const sliderImages = [
        feature1Img,
        feature2Img,
        feature3Img,
        feature4Img,
        feature5Img,
        feature6Img,
        feature7Img,
        feature8Img,
        feature9Img,
        feature10Img,
        feature11Img,
        feature12Img,
        feature13Img,
        feature14Img,
        feature15Img,
        feature16Img,
        feature17Img,
        feature18Img,
        feature19Img,
        feature20Img,
        feature21Img,
        feature22Img,
        feature23Img,
        feature24Img,
        feature25Img,
        feature26Img,
        feature27Img,
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };


    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        swipeToSlide: true
    };



    const [text, setText] = useState("Domestic Moving");
    const [from, setFrom] = useState("From");
    const [to, setTo] = useState("To");
    const [type, setType] = useState("Goods Type (e.g., Household, Furniture)");
    const [activeBtn, setActiveBtn] = useState("Domestic Moving");
    console.log(from, to, type)


    const keywords = ["gati packers and movers",
        "movers near me",
        "moving company",
        "packers and movers near me",
        "local movers",
        "moving services",
        "moving companies near me",
        "home shifting services",
        "office shifting services",
        "interstate packers and movers",
        "vehicle transportation services",
        "packing and unpacking services",
        "best packers and movers",
        "cheap packers and movers",
        "packers and movers in delhi"]

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    interface ImageItem {
        img: string;
        heading: string;
        text: string;
    }

    const imagesForC: ImageItem[] = [
        { img: car, heading: "Trusted Movers & Packers", text: "As a trusted movers and packers company, we ensure protective wrapping, proper anchoring, and smooth doorstep pickup and delivery through our dedicated team." },
        { img: house, heading: "Expert Team", text: "Our movers and packers team works with precision, ensuring protective wrapping, proper anchoring, and smooth doorstep pickup and delivery." },
        { img: bike, heading: "House Shifting", text: "Smooth and reliable house shifting with professional packing, loading, transport, and setup at your new home." },
        { img: petSlider, heading: "Bike Transport", text: "Bike relocation with protective wrapping, proper anchoring, and doorstep pickup and delivery." },
        { img: slide5, heading: "24/7 Available", text: "We provide reliable movers and packers services with 24/7 availability for your convenience." },
    ];


    return (
        <>

            <Helmet>
                <title>Packers and Movers in India | Gati Shifting Packers – Trusted Relocation Experts</title>

                <meta name="description" content="Gati Shifting Packers is a trusted Packers and Movers company in India offering safe, affordable home shifting, office relocation, car & bike transport, and warehouse storage services nationwide." />

                <meta name="keywords" content="Packers and Movers India, Home Shifting Services, Office Relocation, Car Transport, Bike Transport, Warehouse Storage, Gati Shifting Packers" />

                <meta name="robots" content="index, follow" />
                <meta httpEquiv="content-language" content="en" />

                <meta property="og:title" content="Packers and Movers in India | Gati Shifting Packers" />
                <meta property="og:description" content="Trusted Packers and Movers in India for home shifting, office relocation, vehicle transport and storage services. Safe, affordable and reliable relocation solutions." />
                <meta property="og:image" content="https://gatishiftingpackers.com/metaImg.png" />
                <meta property="og:url" content="https://gatishiftingpackers.com/" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Packers and Movers in India | Gati Shifting Packers" />
                <meta name="twitter:description" content="Safe, affordable and professional Packers and Movers services across India by Gati Shifting Packers." />
                <meta name="twitter:image" content="https://gatishiftingpackers.com/metaImg.png" />

                <link rel="canonical" href="https://gatishiftingpackers.com/" />



            </Helmet>

            {/* marginTop: "107.01px" */}
            <Box className="sliderBox" sx={{ marginTop: "107.01px", width: "95%", overflow: "hidden" }}>
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <Box key={index} sx={{ position: "relative", outline: "none" }}>
                            <img
                                src={img}
                                alt={`slide-${index}`}
                                title="Slider"
                                loading="lazy"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    ))}
                </Slider>
            </Box>

            <motion.div
                ref={ref1}
                initial="hidden"
                animate={inView1 ? "visible" : "hidden"}
                className="p-6 bg-pink-200 rounded-lg shadow-lg"
            >
                <div className="service-tab">
                    <div className="tabs">
                        <button className={activeBtn === "Domestic Moving" ? "active" : ""}
                            onClick={() => {
                                setActiveBtn("Domestic Moving");
                                setText("Domestic Moving")
                                setFrom("From")
                                setTo("To")
                                setType("Goods Type (e.g., Household, Furniture)")
                            }}><LocalShippingIcon></LocalShippingIcon> <span>Domestic</span></button>
                        <button className={activeBtn === "Car Moving" ? "active" : ""}
                            onClick={() => {
                                setActiveBtn("Car Moving");
                                setText("Car Moving")
                                setFrom("Pickup City")
                                setTo("Drop City")
                                setType("Car Type (e.g., SUV, Sedan)")
                            }}><DirectionsCarFilledIcon></DirectionsCarFilledIcon><span>Car</span></button>
                        <button className={activeBtn === "Storage" ? "active" : ""}
                            onClick={() => {
                                setActiveBtn("Storage");
                                setText("Storage")
                                setFrom("City of Storage")
                                setTo("Duration of Other Details")
                                setType("Storage Tyep (e.g., Household)")

                            }}><WarehouseIcon></WarehouseIcon><span>Storage</span></button>
                        <button className={activeBtn === "Flight Cargo" ? "active" : ""}
                            onClick={() => {
                                setActiveBtn("Flight Cargo");
                                setText("Flight Cargo")
                                setFrom("From Airport")
                                setTo("To Airport")
                                setType("Approximate Weight (kg)")

                            }}><ConnectingAirportsIcon></ConnectingAirportsIcon><span>Flight</span></button>
                        <button className={activeBtn === "International Moving" ? "active" : ""}
                            onClick={() => {
                                setActiveBtn("International Moving");
                                setText("International Moving")
                                setFrom("From Country")
                                setTo("To Country")
                                setType("Moving Type (e.g., Household, Furniture)")
                            }}><LanguageIcon></LanguageIcon><span>International</span></button>
                        <button className={activeBtn === "Office Shifting" ? "active" : ""}
                            onClick={() => {
                                setActiveBtn("Office Shifting");
                                setText("Office Shifting")
                                setFrom("Current Office Location")
                                setTo("New Office Location")
                                setType("Approximate Office Size (e.g., 1000 sq ft)")

                            }}><BusinessCenterIcon></BusinessCenterIcon><span>Office</span></button>
                        <button className={activeBtn === "Commercial Shifting" ? "active" : ""}
                            onClick={() => {
                                setActiveBtn("Commercial Shifting");
                                setText("Commercial Shifting")
                                setFrom("From Location")
                                setTo("To Location")
                                setType("Business Type (e.g., Retail, Warehouse)")
                            }}><FactoryIcon></FactoryIcon><span>Commercial</span></button>
                    </div>

                    <div className="form-area">

                        <h3>Get a free <span>{text}</span> Quote</h3>
                        <i>We’ll call you within 15 minutes</i>
                        <ZohoForm successCondition={successCondition}></ZohoForm>
                    </div>
                </div>
            </motion.div>

            {/* <div className="republic-wrapper">
                <img src={republicDayImg} className="man-with-flag-img right" />
                <img src={republicDayImg} className="man-with-flag-img left" />

                <div className="chakra-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ashoka_Chakra.svg" />
                    <h1>Happy Republic Day</h1>
                    <p>26 January • Jai Hind 🇮🇳</p>
                </div>

            </div> */}


            <section id="certificate-section">
                {/* <h1 className="trustLine">India’s Trusted Packers & Movers – 24x7 Support</h1> */}
                <div className="container">
                    <div className="card">
                        <a href={justDialCertificateImg} className="hidden" target="_blank">
                            Click To View
                        </a>
                        <img src={justDialCertificateImg} alt="certificate" />
                        <h3>JustDial Certificate</h3>
                    </div>
                    <div className="card">
                        <a href={MSMECertificateImg} className="hidden" target="_blank">
                            Click To View
                        </a>
                        <img src={MSMECertificateImg} alt="certificate" />
                        <h3>MSME Ceritificate</h3>
                    </div>
                    <div className="card">
                        <a href={incorporationCertificate} className="hidden" target="_blank">
                            Click To View
                        </a>
                        <img src={incorporationCertificate} alt="certificate" />
                        <h3>Incorporation Certificate</h3>
                    </div>
                    <div className="card">
                        <a href={GSTIncorporation} className="hidden" target="_blank">
                            Click To View
                        </a>
                        <img src={GSTIncorporation} alt="certificate" />
                        <h3>GST Certificate</h3>
                    </div>


                    <div className="card">
                        <a href={ISOcertificate} className="hidden" target="_blank">
                            Click To View
                        </a>
                        <img src={ISOcertificate} alt="certificate" />
                        <h3>ISO Certificate</h3>
                    </div>


                    <div className="card">
                        <a href={gatiCertificate} className="hidden" target="_blank">
                            Click To View
                        </a>
                        <img src={gatiCertificate} alt="certificate" />
                        <h3>Achievement Certificate</h3>
                    </div>
                </div>
            </section>

            <section id="badge-section">
                <div className="container">
                    <div className="card">
                        <img src={isoBadge} alt="Badge" />
                        <h3>ISO 9001:2015</h3>
                        <p>Certificate No: 2713SAFV2021, for Courier Services, Packers & Movers, Transportation and Storage of Goods.</p>
                    </div>


                    <div className="card">
                        <img src={googleRatingBadge} alt="Badge" />
                        <h3>5 Star Ratings</h3>
                        <p>We have been rated 5 stars by our valuable clients in multiple platforms like Google, Facebook etc.</p>
                    </div>
                    <div className="card">
                        <img src={trustedBadge} alt="Badge" />
                        <h3>15+ Years of Trust</h3>
                        <p>Since 2007, we are at your service expanding all over the country to be one of the best Packers and Movers company.</p>
                    </div>
                </div>
            </section>


            <section id="counter-section">
                <div className="container">
                    <div className="card">
                        <img src={truckPng} alt="truck" />
                        <Counter end={1032858} suffix="+" />
                        <p>Homes Moved</p>
                    </div>
                    <div className="card">
                        <img src={cityPng} alt="city png"/>
                        <Counter end={600} suffix="+" />
                        <p>Cities Covered</p>
                    </div>
                    <div className="card">
                        <img src={verifiedBadgePng} alt="badge png" />
                        <Counter end={3548} suffix="+" />
                        <p>Verified Professionals</p>
                    </div>
                    <div className="card">
                        <img src={peoplesPng} alt="people png" />
                        <Counter end={99} suffix="%" />
                        <p>Satisfied Customers</p>
                    </div>
                </div>
            </section>

            <section id="company-description">
                <div className="img-bx">
                    {/* <img src={whyGatiImg} /> */}
                </div>
                <div className="text-bx">
                    <h1>Moving Services by <span className="primary-color">Gati Shifting Packers</span></h1>
                    <p>
                        Gati Shifting Packers PVT LTD. are always ready to help make the moving and packing experience excellent, more efficient and easier for you and your family. Just sit back, chill out and know that you are in safe hands!
                    </p>

                    <p>Relocating to a new place can be a tiring and difficult process. There are many things to arrange and pack, including heavy furniture, electrical appliances and fragile and valuable antique items.</p>

                    <p> Gati Shifting Packers's goal is to make your relocating experience as trouble-free as possible. Let us manage all of the difficult work. Our job is to be sure that your shifting is complete on time, every time.
                    </p>
                </div>
            </section>

            <ProductImageSlider images={sliderImages}></ProductImageSlider>


            <ReviewVideo></ReviewVideo>

            <section id="steps-section">
                <h1>4 Easy Steps to Hire Reliable Movers and Packers</h1>
                <div className="steps">
                    <div className="card">
                        <div>
                            <span className="icon"><DescriptionIcon></DescriptionIcon></span>
                            <h3>Fill Your Enquiry Form</h3>
                        </div>
                        <p>Tell us about your car or bike shifting needs. Our logistics team will connect you with trusted movers for competitive rates.</p>
                    </div>


                    <div className="card">
                        <div>
                            <span className="icon"><HandshakeIcon></HandshakeIcon></span>
                            <h3>Get Quotes within 30 Minutes</h3>
                        </div>
                        <p>Receive fast quotes from verified car carriers with 5-star reviews. We ensure only trusted movers get through.</p>
                    </div>
                    <div className="card">
                        <div>
                            <span className="icon"><BalanceIcon></BalanceIcon></span>
                            <h3>Select the Best Quote</h3>
                        </div>
                        <p>Make an informed choice based on business profiles, pricing, and reviews before selecting the best deal.</p>
                    </div>
                    <div className="card">
                        <div>
                            <span className="icon"><LocalShippingIcon></LocalShippingIcon></span>
                            <h3>Get Safe & Secure Shifting</h3>
                        </div>
                        <p>Choose your mover and enjoy safe, secure relocation of your car or bike—stress-free and timely.</p>
                    </div>
                </div>
            </section>


            <div className="image-box">
                {imagesForC.map((data, index) => (
                    <div
                        key={index}
                        className={`image-item ${activeIndex === index ? "active" : ""}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <h2>{data.heading}</h2>
                        <p>{data.text}</p>
                        <img src={data.img} alt={`img-${index}`} />
                    </div>
                ))}
            </div>

            {/* <GetInTouch></GetInTouch> */}
            <section id="google-review-sec">
                <div className="container">
                    <div className="text-box">
                        <h1>Trusted by Thousands of <span className="primary-color">Happy Customers</span></h1>
                        <p>Real experiences from customers who trusted Gati Shifting Packers for safe, timely, and stress-free relocation.</p>
                    </div>
                    <div className="img-rating-box">
                        <Link className="detail-link" to="/review">
                            <img src={googleRatingImg} alt="googt rating png" />
                            <span>4.9 ★★★★★</span>
                            <span>1000+ Reviews</span>
                            <span>Based on genuine customer reviews</span>
                        </Link>
                        <Link to="/review" className="review-btn">Leave a Review</Link>
                    </div>
                </div>
            </section>
            <TrustUsSection />


            {/* <section id="about-company">
                <div className="container">
                    <div className="img-bx">
                        <img src={stepsImg} alt="Gati relocation services including packing and unpacking, loading and unloading, secure transportation with GPS vehicles, car and bike relocation, transit insurance, storage, warehousing, and all-in-one transport solutions" title="Steps" loading="lazy" />
                    </div>
                    <div className="detail">
                        <h2>About Us | Comprehensive Moving Solutions by <span className="primary-color">Gati Shifting Packers</span> in India</h2>
                        <p>At Gati Shifting Packers, we specialize in delivering seamless and stress-free relocation experiences across India. With years of expertise and a client-first approach, we offer customized moving solutions that cater to individual, commercial, and industrial relocation needs.</p>
                        <ul>
                            <li>
                                <b>Packing & Unpacking:</b> Professional-grade packing using high-quality materials to ensure every item is protected. Unpacking is done with equal care at your new destination.
                            </li>
                            <li>
                                <b>Loading & Unloading:</b> Skilled handlers carefully load and unload your belongings to prevent damage and ensure a smooth relocation experience.
                            </li>
                            <li>
                                <b>Secure Transportation:</b> A fleet of GPS-enabled, well-maintained vehicles is used to safely transport your belongings across India.
                            </li>
                            <li>
                                <b>Car Relocation Services:</b> Reliable and hassle-free car transport solutions by Gati.
                            </li>
                            <li>
                                <b>Transit Insurance:</b> Comprehensive insurance coverage to safeguard your goods during transit.
                            </li>
                            <li>
                                <b>Bike Relocation Services:</b> On-time bike transport services using dedicated carriers.
                            </li>
                            <li>
                                <b>Storage & Warehousing:</b> Clean and secure storage for short or long-term needs.
                            </li>
                            <li>
                                <b>All-in-One Transport Solutions:</b> End-to-end logistics and moving services by Gati.
                            </li>
                        </ul>
                    </div>
                </div>
            </section> */}


            <section id="about-company-cards">
                <div className="container">
                    <div className="card">
                        <img src={truckImg} alt="truck png" />
                        <h2>PACKING AND MOVING</h2>
                        <p>We offer a range of packing and moving services from packing your entire household to packing selected items only or fragile item and any other furniture.</p>
                    </div>
                    <div className="card">
                        <img src={carLoadingImg} alt="car png" />
                        <h2>CAR TRANSPORT SERVICES</h2>
                        <p>Movers Aryavarta Association, are one of India's finest car carrier service providers. Our car transport services have been satisfactorily used by clients from corporates.</p>
                    </div>
                    <div className="card">
                        <img src={shipImg} alt="ship png" />
                        <h2>CORP. GOODS RELOCATION</h2>
                        <p>Reckoned across the country for our efficient and reliable cargo moving and packing services, we undertake corporate Goods Relocation Service as per the requirements.</p>
                    </div>
                    <div className="card">
                        <img src={ship2} alt="ship png" />
                        <h2>FREIGHT FORWARDING</h2>
                        <p>We offer our customers the best Freight Forwarding services, which are provided by means of air as well as sea.With the help of an efficient team, we have emerged...</p>
                    </div>
                    <div className="card">
                        <img src={airplaneImg} alt="airplane png"/>
                        <h2>INTERNATIONAL LOGISTICS</h2>
                        <p>We offer our customers the best Freight Forwarding services, which are provided by means of air as well as sea.With the help of an efficient team, we have emerged...
                            (neeche thoda cut ho gaya hai image me)</p>
                    </div>
                    <div className="card">
                        <img src={truck2} alt="truck png" />
                        <h2>LOADING & UNLOADING</h2>
                        <p>A crucial part of every relocation process, the loading and unloading is executed by highly skilled teams. The goods are loaded and unloaded with the use of pulleys,lifters etc...</p>
                    </div>
                </div>
            </section>


            <OfficeLocation />
            <FAQList></FAQList>

            <section id="customer-review-list">
                <h1>What Our Customers Say</h1>
                <p className="para">Genuine feedback from people who’ve moved homes, offices & even countries with us.</p>

                <div className="container">

                    <Slider {...settings2}>
                        <Box key="1" sx={{ position: "relative", outline: "none" }}>
                            <div className="card">
                                <div className="detail">
                                    <h4>Smooth Domestic Move</h4>
                                    <p>"Gati made our move from Delhi to Bangalore seamless."</p>
                                    <div className="rating">
                                        ★★★★☆
                                        {/* <span>4.5</span> */}
                                    </div>
                                </div>
                                <div className="customer-name">
                                    <Avatar
                                        sx={{ bgcolor: "orange", width: "25px", height: "25px", fontSize: "15px", marginRight: "7px" }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        A
                                    </Avatar>
                                    Arjun S.
                                </div>
                            </div>
                        </Box>
                        <Box key="2" sx={{ position: "relative", outline: "none" }}>
                            <div className="card">
                                <div className="detail">
                                    <h4>International Relocation</h4>
                                    <p>"Moved from Mumbai to Dubai. Excellent support."</p>
                                    <div className="rating">
                                        ★★★★★
                                        {/* <span>4.5</span> */}
                                    </div>
                                </div>
                                <div className="customer-name">
                                    <Avatar
                                        sx={{ bgcolor: "#a6a600", width: "25px", height: "25px", fontSize: "15px", marginRight: "7px" }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        P
                                    </Avatar>
                                    Pooja M.
                                </div>
                            </div>
                        </Box>
                        <Box key="3" sx={{ position: "relative", outline: "none" }}>
                            <div className="card">
                                <div className="detail">
                                    <h4>Packing Quality</h4>
                                    <p>"Boxes were well labeled and nothing broke."</p>
                                    <div className="rating">
                                        ★★★★☆
                                        {/* <span>4.5</span> */}
                                    </div>
                                </div>
                                <div className="customer-name">
                                    <Avatar
                                        sx={{ bgcolor: "red", width: "25px", height: "25px", fontSize: "15px", marginRight: "7px" }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        R
                                    </Avatar>
                                    Ravi K.
                                </div>
                            </div>
                        </Box>
                        <Box key="4" sx={{ position: "relative", outline: "none" }}>
                            <div className="card">
                                <div className="detail">
                                    <h4>Fast and Reliable</h4>
                                    <p>"They delivered from Pune to Hyderabad a day early."</p>
                                    <div className="rating">
                                        ★★★⯨☆
                                        {/* <span>4.5</span> */}
                                    </div>
                                </div>
                                <div className="customer-name">
                                    <Avatar
                                        sx={{ bgcolor: "Gray", width: "25px", height: "25px", fontSize: "15px", marginRight: "7px" }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        S
                                    </Avatar>
                                    Simran T.
                                </div>
                            </div>
                        </Box>
                        <Box key="5" sx={{ position: "relative", outline: "none" }}>
                            <div className="card">
                                <div className="detail">
                                    <h4>Bike Transport</h4>
                                    <p>"Bike arrived in Chennai scratch-free. Happy!"</p>
                                    <div className="rating">
                                        ★★★★★
                                        {/* <span>4.5</span> */}
                                    </div>
                                </div>
                                <div className="customer-name">
                                    <Avatar
                                        sx={{ bgcolor: "orange", width: "25px", height: "25px", fontSize: "15px", marginRight: "7px" }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        N
                                    </Avatar>
                                    Neeraj B.
                                </div>
                            </div>
                        </Box>
                        <Box key="6" sx={{ position: "relative", outline: "none" }}>
                            <div className="card">
                                <div className="detail">
                                    <h4>Office Shift</h4>
                                    <p>"Relocated office to Gurgaon over the weekend."</p>
                                    <div className="rating">
                                        ★★★★⯨
                                        {/* <span>4.5</span> */}
                                    </div>
                                </div>
                                <div className="customer-name">
                                    <Avatar
                                        sx={{ bgcolor: "#b80046", width: "25px", height: "25px", fontSize: "15px", marginRight: "7px" }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        M
                                    </Avatar>
                                    Megha R.
                                </div>
                            </div>
                        </Box>


                        <Box key="6" sx={{ position: "relative", outline: "none" }}>
                            <div className="card">
                                <div className="detail">
                                    <h4>Furniture Shifting</h4>
                                    <p>"No damage, no stress. Superb service."</p>
                                    <div className="rating">
                                        ★★★★★
                                        {/* <span>4.5</span> */}
                                    </div>
                                </div>
                                <div className="customer-name">
                                    <Avatar
                                        sx={{ bgcolor: "#ea00ff", width: "25px", height: "25px", fontSize: "15px", marginRight: "7px" }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        K
                                    </Avatar>
                                    Kavita D.
                                </div>
                            </div>
                        </Box>
                        <Box key="6" sx={{ position: "relative", outline: "none" }}>
                            <div className="card">
                                <div className="detail">
                                    <h4>Pet Relocation</h4>
                                    <p>"Handled my dog with care during the move. Thankful!"</p>
                                    <div className="rating">
                                        ★★★★☆
                                        {/* <span>4.5</span> */}
                                    </div>
                                </div>
                                <div className="customer-name">
                                    <Avatar
                                        sx={{ bgcolor: "#00fff5", width: "25px", height: "25px", fontSize: "15px", marginRight: "7px" }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        S
                                    </Avatar>
                                    Suresh P.
                                </div>
                            </div>
                        </Box>
                    </Slider>


                </div>
            </section>

            <section id="keywords-section">
                <h1>People also search for these Queries</h1>
                <div className="container">
                    {keywords.map((col) => {
                        return <h5 className="keyword">{col}</h5>
                    })}
                </div>
            </section>
        </>
    )
}

export default Home