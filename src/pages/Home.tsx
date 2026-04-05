import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "./Home.scss"
import Slider from "react-slick";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Box } from "@mui/material";

// Main Slider Images
// import gatiSlider1 from "../assets/Themes/Holi/sliderImg.webp"
import gatiSlider2 from "../assets/sliderImg/gatislider2.webp"
import gatiSlider3 from "../assets/sliderImg/gatislider3.webp"
// import gatiSlider4 from "../assets/sliderImg/gatislider4.webp"
import gatislider5 from "../assets/sliderImg/gatislider5.webp";
import gatislider6 from "../assets/sliderImg/gatislider6.webp";
import gatiSlider7 from "../assets/sliderImg/gatiSlider7.webp"
import gatislider8 from "../assets/sliderImg/gatiSlider8.webp"



// Icons for shipping category
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
// import WarehouseIcon from '@mui/icons-material/Warehouse';
// import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
// import LanguageIcon from '@mui/icons-material/Language';
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import FactoryIcon from '@mui/icons-material/Factory';


import ZohoForm from "../components/ZohoForm"   // Form Component



import justDialCertificateImg from "../assets/homePagePng/justdial_certificate.webp"
import MSMECertificateImg from "../assets/homePagePng/msme_certificate.webp"
import incorporationCertificate from "../assets/homePagePng/incorporation_certificate.webp"
import GSTIncorporation from "../assets/homePagePng/gst_certificate.webp"
import ISOcertificate from "../assets/homePagePng/award_certificate.webp"
import gatiCertificate from "../assets/homePagePng/gatishifting_certificate.webp"


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


import { Link } from "react-router-dom";


import isoBadge from "../assets/HomePage/isoicon.webp"
import googleRatingBadge from "../assets/HomePage/5star.webp"
import trustedBadge from "../assets/HomePage/trusted.webp"


import truckImg from "../assets/HomePage/truck.webp"
import carLoadingImg from "../assets/HomePage/carLoading.webp"
import shipImg from "../assets/HomePage/ship.webp"
import ship2 from "../assets/HomePage/ship2.webp"
import airplaneImg from "../assets/HomePage/airplane.webp"
import truck2 from "../assets/HomePage/truck2.webp"

import domesticPng from "../assets/HomePage/domestic.webp"
import carPng from "../assets/HomePage/car.webp"
import flightPng from "../assets/HomePage/flight.webp"
import internationalPng from "../assets/HomePage/international.webp"
// import officePng from "../assets/HomePage/office.png"
// import commercialPng from "../assets/HomePage/commercial.png"
import warehousePng from "../assets/homePage/warehouse.webp"
import bikePng from "../assets/HomePage/bike.webp"



interface props {
    successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}
const Home: React.FC<props> = ({ successCondition }) => {

    useEffect(() => {
        import("slick-carousel/slick/slick.css");
        import("slick-carousel/slick/slick-theme.css");
    }, []);


    const images = [gatiSlider2, gatislider8, gatiSlider7, gatislider6, gatislider5, gatiSlider3];


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

    const [activeBtn, setActiveBtn] = useState("Domestic Moving");


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

    const [showSlider, setShowSlider] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowSlider(true), 1500);
    }, []);



    return (
        <>

            <Helmet>
                <title>Gati Shifting Packers | Trusted Packers and Movers - 15% off</title>

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
            {showSlider ? <div className="sliderBox" style={{ marginTop: "96px", width: "95%", overflow: "hidden" }}>
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <div key={index} style={{ position: "relative", outline: "none" }}>
                            <img
                                src={img}
                                alt={`slide-${index}`}
                                title="Slider"
                                loading={index === 0 ? "eager" : "lazy"}
                                fetchPriority={index === 0 ? "high" : "auto"}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div> : ""}



            <div className="service-tab">
                <div className="tabs">
                    <button className={activeBtn === "Domestic Moving" ? "active" : ""}
                        onClick={() => {
                            setActiveBtn("Domestic Moving");
                        }}><img src={domesticPng} /></button>

                    <button className={activeBtn === "Car Moving" ? "active" : ""}
                        onClick={() => {
                            setActiveBtn("Car Moving");
                        }}><img src={carPng} /></button>
                    <button className={activeBtn === "Bike Moving" ? "active" : ""}
                        onClick={() => {
                            setActiveBtn("Bike Moving")
                        }} >
                        <img src={bikePng} />
                    </button>
                    <button className={activeBtn === "Flight Cargo" ? "active" : ""}
                        onClick={() => {
                            setActiveBtn("Flight Cargo");

                        }}><img src={flightPng} /></button>


                    <button className={activeBtn === "International Moving" ? "active" : ""}
                        onClick={() => {
                            setActiveBtn("International Moving");
                        }}><img src={internationalPng} /></button>

                    <button className={activeBtn === "Storage" ? "active" : ""}
                        onClick={() => {
                            setActiveBtn("Storage");

                        }}><img src={warehousePng} /></button>
                    {/* <button className={activeBtn === "Office Shifting" ? "active" : ""}
                            onClick={() => {
                                setActiveBtn("Office Shifting");

                            }}><img src={officePng} /></button>
                        <button className={activeBtn === "Commercial Shifting" ? "active" : ""}
                            onClick={() => {
                                setActiveBtn("Commercial Shifting");
                            }}><img src={commercialPng} /></button> */}
                </div>

                <div className="form-area">

                    <h3>Get a free <span>{activeBtn}</span> Quote</h3>
                    <i>We’ll call you within 15 minutes</i>
                    <ZohoForm successCondition={successCondition}></ZohoForm>
                </div>
            </div>




            <section id="badge-section">
                <div className="container">
                    <div className="card">
                        <img src={isoBadge} alt="Badge" loading="lazy" />
                        <h3>ISO 9001:2015</h3>
                        <p>Certificate No: 2713SAFV2021, for Courier Services, Packers & Movers, Transportation and Storage of Goods.</p>
                    </div>


                    <div className="card">
                        <img src={googleRatingBadge} alt="Badge" loading="lazy" />
                        <h3>5 Star Ratings</h3>
                        <p>We have been rated 5 stars by our valuable clients in multiple platforms like Google, Facebook etc.</p>
                    </div>
                    <div className="card">
                        <img src={trustedBadge} alt="Badge" loading="lazy" />
                        <h3>15+ Years of Trust</h3>
                        <p>Since 2007, we are at your service expanding all over the country to be one of the best Packers and Movers company.</p>
                    </div>
                </div>
            </section>




            <section id="counter-section">
                <div className="container">
                    <div className="card">
                        {/* <img src={truckPng} alt="truck" /> */}
                        <Counter end={1032858} suffix="+" />
                        <p>Successfully Homes Relocated</p>
                        <Link to="/contact-us">&gt;</Link>
                    </div>
                    <div className="card">
                        {/* <img src={cityPng} alt="city png" /> */}
                        <Counter end={600} suffix="+" />
                        <p>Service Available in Multiple Cities</p>
                        <Link to="/contact-us">&gt;</Link>
                    </div>
                    <div className="card">
                        {/* <img src={verifiedBadgePng} alt="badge png" /> */}
                        <Counter end={3548} suffix="+" />
                        <p>Verified Professionals</p>
                        <Link to="/contact-us">&gt;</Link>
                    </div>
                    <div className="card">
                        {/* <img src={peoplesPng} alt="people png" /> */}
                        <Counter end={99} suffix="%" />
                        <p>Satisfied Customers</p>
                        <Link to="/contact-us">&gt;</Link>
                    </div>
                </div>
            </section>

            <section id="company-description">

                <h1 className="heading">Moving Services by <span className="primary-color">Gati Shifting Packers</span></h1>
                <div className="img-bx">
                    {/* <img src={whyGatiImg} /> */}
                </div>
                <div className="card-container">
                    <div className="card">
                        <a href={justDialCertificateImg} className="hidden" target="_blank">
                            <img src={justDialCertificateImg} alt="certificate" loading="lazy" />
                            <h3>JustDial Certificate</h3>
                        </a>
                    </div>
                    <div className="card">
                        <a href={MSMECertificateImg} className="hidden" target="_blank">
                            <img src={MSMECertificateImg} alt="certificate" loading="lazy" />
                            <h3>MSME Ceritificate</h3>
                        </a>
                    </div>
                    <div className="card">
                        <a href={incorporationCertificate} className="hidden" target="_blank">
                            <img src={incorporationCertificate} alt="certificate" loading="lazy" />
                            <h3>Incorporation Certificate</h3>
                        </a>
                    </div>
                    <div className="card">
                        <a href={GSTIncorporation} className="hidden" target="_blank">
                            <img src={GSTIncorporation} alt="certificate" loading="lazy" />
                            <h3>GST Certificate</h3>
                        </a>
                    </div>


                    <div className="card">
                        <a href={ISOcertificate} className="hidden" target="_blank">
                            <img src={ISOcertificate} alt="certificate" loading="lazy" />
                            <h3>ISO Certificate</h3>
                        </a>
                    </div>


                    <div className="card">
                        <a href={gatiCertificate} className="hidden" target="_blank">
                            <img src={gatiCertificate} alt="certificate" loading="lazy" />
                            <h3>Achievement Certificate</h3>
                        </a>
                    </div>



                    <div className="card">
                        <a href={justDialCertificateImg} className="hidden" target="_blank">
                            <img src={justDialCertificateImg} alt="certificate" loading="lazy" />
                            <h3>JustDial Certificate</h3>
                        </a>
                    </div>
                    <div className="card">
                        <a href={MSMECertificateImg} className="hidden" target="_blank">
                            <img src={MSMECertificateImg} alt="certificate" loading="lazy" />
                            <h3>MSME Ceritificate</h3>
                        </a>
                    </div>
                    <div className="card">
                        <a href={incorporationCertificate} className="hidden" target="_blank">
                            <img src={incorporationCertificate} alt="certificate" loading="lazy" />
                            <h3>Incorporation Certificate</h3>
                        </a>
                    </div>
                    <div className="card">
                        <a href={GSTIncorporation} className="hidden" target="_blank">
                            <img src={GSTIncorporation} alt="certificate" loading="lazy" />
                            <h3>GST Certificate</h3>
                        </a>
                    </div>


                    <div className="card">
                        <a href={ISOcertificate} className="hidden" target="_blank">
                            <img src={ISOcertificate} alt="certificate" loading="lazy" />
                            <h3>ISO Certificate</h3>
                        </a>
                    </div>


                    <div className="card">
                        <a href={gatiCertificate} className="hidden" target="_blank">
                            <img src={gatiCertificate} alt="certificate" loading="lazy" />
                            <h3>Achievement Certificate</h3>
                        </a>
                    </div>
                </div>
                <div className="text-bx">
                    {/* <img src={vectorLogo} /> */}

                    <p>
                        "Gati Shifting Packers PVT LTD. are always ready to help make the moving and packing experience excellent, more efficient and easier for you and your family. Just sit back, chill out and know that you are in safe hands!"
                    </p>

                    <p>Relocating to a new place can be a tiring and difficult process. There are many things to arrange and pack, including heavy furniture, electrical appliances and fragile and valuable antique items.</p>

                    <p> Gati Shifting Packers's goal is to make your relocating experience as trouble-free as possible. Let us manage all of the difficult work. Our job is to be sure that your shifting is complete on time, every time.
                    </p>
                </div>
            </section>

            <ProductImageSlider images={sliderImages}></ProductImageSlider>


            <ReviewVideo></ReviewVideo>

            <section id="steps-section">

                <div className="container">

                    <div className="header">
                        <h2>4 Easy Steps to Hire Reliable Movers and Packers</h2>
                        <p>Simple, fast and secure process to book trusted relocation services</p>
                    </div>

                    <div className="steps">

                        <div className="card">
                            <div className="step-number">01</div>

                            <div className="icon">
                                <DescriptionIcon />
                            </div>

                            <h3>Fill Your Enquiry Form</h3>

                            <p>
                                Share your moving requirements and get connected with verified movers instantly.
                            </p>
                        </div>


                        <div className="card">
                            <div className="step-number">02</div>

                            <div className="icon">
                                <HandshakeIcon />
                            </div>

                            <h3>Get Quotes in Minutes</h3>

                            <p>
                                Receive competitive quotes from trusted and verified relocation partners.
                            </p>
                        </div>


                        <div className="card">
                            <div className="step-number">03</div>

                            <div className="icon">
                                <BalanceIcon />
                            </div>

                            <h3>Compare and Choose</h3>

                            <p>
                                Compare pricing, reviews, and profiles to select the best moving service.
                            </p>
                        </div>


                        <div className="card">
                            <div className="step-number">04</div>

                            <div className="icon">
                                <LocalShippingIcon />
                            </div>

                            <h3>Enjoy Safe Relocation</h3>

                            <p>
                                Sit back and relax while professionals handle your relocation safely.
                            </p>
                        </div>

                    </div>

                </div>

            </section>



            {/* <div className="image-box">
                {imagesForC.map((data, index) => (
                    <div
                        key={index}
                        className={`image-item ${activeIndex === index ? "active" : ""}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <h2>{data.heading}</h2>
                        <p>{data.text}</p>
                        <img src={data.img} alt={`img-${index}`} loading="lazy"  />
                    </div>
                ))}
            </div> */}

            {/* <GetInTouch></GetInTouch> */}
            <section id="google-review-sec">
                <div className="container">

                    <div className="text-box">
                        <h2>
                            Trusted by Thousands of <span>Happy Customers</span>
                        </h2>

                        <p>
                            Real experiences from customers who trusted Gati Shifting Packers
                            for safe, timely, and hassle-free relocation across India.
                        </p>

                        <Link to="/review" className="review-btn">
                            Leave Your Review →
                        </Link>
                    </div>


                    <div className="rating-card">

                        <img src={googleRatingImg} alt="Google Rating" loading="lazy" />

                        <div className="rating-info">

                            <h3>4.9 ★★★★★</h3>

                            <p className="review-count">
                                Based on 1000+ Verified Reviews
                            </p>

                            <p className="review-desc">
                                Customers love our fast, secure and professional moving services.
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            <TrustUsSection />


            <section id="about-company-cards">
                <div className="container">
                    <div className="card">
                        <img src={truckImg} alt="truck png" loading="lazy" />
                        <h2>PACKING AND MOVING</h2>
                        <p>We offer a range of packing and moving services from packing your entire household to packing selected items only or fragile item and any other furniture.</p>
                    </div>
                    <div className="card">
                        <img src={carLoadingImg} alt="car png" loading="lazy" />
                        <h2>CAR TRANSPORT SERVICES</h2>
                        <p>Movers Aryavarta Association, are one of India's finest car carrier service providers. Our car transport services have been satisfactorily used by clients from corporates.</p>
                    </div>
                    <div className="card">
                        <img src={shipImg} alt="ship png" loading="lazy" />
                        <h2>CORP. GOODS RELOCATION</h2>
                        <p>Reckoned across the country for our efficient and reliable cargo moving and packing services, we undertake corporate Goods Relocation Service as per the requirements.</p>
                    </div>
                    <div className="card">
                        <img src={ship2} alt="ship png" loading="lazy" />
                        <h2>FREIGHT FORWARDING</h2>
                        <p>We offer our customers the best Freight Forwarding services, which are provided by means of air as well as sea.With the help of an efficient team, we have emerged...</p>
                    </div>
                    <div className="card">
                        <img src={airplaneImg} alt="airplane png" loading="lazy" />
                        <h2>INTERNATIONAL LOGISTICS</h2>
                        <p>We offer our customers the best Freight Forwarding services, which are provided by means of air as well as sea.With the help of an efficient team, we have emerged...
                            (neeche thoda cut ho gaya hai image me)</p>
                    </div>
                    <div className="card">
                        <img src={truck2} alt="truck png" loading="lazy" />
                        <h2>LOADING & UNLOADING</h2>
                        <p>A crucial part of every relocation process, the loading and unloading is executed by highly skilled teams. The goods are loaded and unloaded with the use of pulleys,lifters etc...</p>
                    </div>
                </div>
            </section>


            <OfficeLocation />
            <FAQList></FAQList>

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