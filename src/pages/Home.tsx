import React, { useState } from "react";
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
import gatislider7 from "../assets/Themes/NewYear/slider.png";



// Icons for shipping category
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FactoryIcon from '@mui/icons-material/Factory';


import ZohoForm from "../components/ZohoForm"   // Form Component



import justDialCertificateImg from "../assets/homePagePng/justDialCertificate.png"
import MSMECertificateImg from "../assets/homePagePng/MSMECertificate.png"
import incorporationCertificate from "../assets/homePagePng/incorporationCertificate.png"
import GSTIncorporation from "../assets/homePagePng/GSTCertificate.png"


// CountDown Section PNG
import truckPng from "../assets/homePagePng/Gemini_Generated_Image_2zntak2zntak2znt.png"
import cityPng from "../assets/homePagePng/Gemini_Generated_Image_lfceqflfceqflfce.png"
import verifiedBadgePng from "../assets/homePagePng/Gemini_Generated_Image_seeh1bseeh1bseeh.png"
import peoplesPng from "../assets/homePagePng/Gemini_Generated_Image_lrzvt4lrzvt4lrzv.png"


// Feature Slider Images
import feature1Img from "../assets/homePagePng/feature1.jpg"
import feature2Img from "../assets/homePagePng/feature2.jpg"
import feature3Img from "../assets/homePagePng/feature3.jpg"
import feature4Img from "../assets/homePagePng/feature4.jpg"
import feature5Img from "../assets/homePagePng/feature5.jpeg"
import feature6Img from "../assets/homePagePng/feature6.jpeg"
import feature7Img from "../assets/homePagePng/feature7.jpeg"
import feature8Img from "../assets/homePagePng/feature8.jpeg"
import feature9Img from "../assets/homePagePng/feature9.jpg"
import feature10Img from "../assets/homePagePng/feature10.jpg"
import feature11Img from "../assets/homePagePng/feature11.jpg"
import feature12Img from "../assets/homePagePng/feature12.jpg"
import feature13Img from "../assets/homePagePng/feature13.jpg"
import feature14Img from "../assets/homePagePng/feature14.jpg"
import feature15Img from "../assets/homePagePng/feature15.jpg"
import feature16Img from "../assets/homePagePng/feature16.jpg"
import feature17Img from "../assets/homePagePng/feature17.jpg"
import feature18Img from "../assets/homePagePng/feature18.jpg"
import feature19Img from "../assets/homePagePng/feature19.jpg"
import feature20Img from "../assets/homePagePng/feature20.jpg"
import feature21Img from "../assets/homePagePng/feature21.jpg"
import feature22Img from "../assets/homePagePng/feature22.jpg"
import feature23Img from "../assets/homePagePng/feature23.jpg"
import feature24Img from "../assets/homePagePng/feature24.jpg"
import feature25Img from "../assets/homePagePng/feature25.jpg"
import feature26Img from "../assets/homePagePng/feature26.jpeg"
import feature27Img from "../assets/homePagePng/feature27.png"


// Steps Section Icons
import DescriptionIcon from '@mui/icons-material/Description';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BalanceIcon from '@mui/icons-material/Balance';


// Components
import ReviewVideo from "../components/ReviewVideos";
import GetInTouch from "../components/GetInTouch";
import OfficeLocation from "../components/OfficeLocation";
import TrustUsSection from "../components/TrustUsSection";
import FAQList from "../components/FAQList";


import ProductImageSlider from "../components/PackingImageSlider"
import Counter from "../components/Counter";


import stepsImg from "../assets/5-steps-banner.png";


// import { IFaqItem } from "../models/App.model";
// import { AppConstant } from "../constants/app.constant";

interface props {
    successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}
const Home: React.FC<props> = ({ successCondition }) => {


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


    return (
        <>

            <Helmet>
                <title>Gati Shifting Packers | Trusted Packers and Movers - 15% off</title>
                <meta name="description" content="Gati Shifting Packers offers safe and affordable relocation services India & International moving services. Expert in Home shifting, Office, Car & Bike, & Warehouse Storage. Reliable service, trusted by thousands nationwide." />
                <meta name="keywords" content="gati house shifting service, Packers and Movers India, Home Shifting, Office Relocation, Car Transport, Bike Transport, Household Shifting, Packing and Moving Services, Affordable Packers, Trusted Movers" />
                <meta name="author" content="Rohan" />

                {/* Open Graph for Social Sharing */}
                <meta property="og:title" content="Gati Shifting Packers | Reliable Shifting Services" />
                <meta property="og:description" content="Gati Shifting Packers offers safe and affordable relocation services India & International moving services. Expert in Home shifting, Office, Car & Bike, & Warehouse Storage. Reliable service, trusted by thousands nationwide." />
                <meta property="og:image" content="https://gatishiftingpackers.com/metaImg.png" />
                <meta property="og:url" content="https://gatishiftingpackers.com/" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Gati Shifting Packers" />
                <meta name="twitter:description" content="Gati Shifting Packers offers safe and affordable relocation services India & International moving services. Expert in Home shifting, Office, Car & Bike, & Warehouse Storage. Reliable service, trusted by thousands nationwide." />
                <meta name="twitter:image" content="https://gatishiftingpackers.com/metaImg.png" />


                <meta name="robots" content="index, follow" />

                {/* language used in site */}
                <meta httpEquiv="content-language" content="en" />

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

            <section id="certificate-section">
                {/* <h1 className="trustLine">India’s Trusted Packers & Movers – 24x7 Support</h1> */}
                <div className="container">
                    <div className="card">
                        <a href={justDialCertificateImg} className="hidden" target="_blank">
                            Click To View
                        </a>
                        <img src={justDialCertificateImg} />
                        <h3>JustDial Certificate</h3>
                    </div>
                    <div className="card">
                        <a href={MSMECertificateImg} className="hidden" target="_blank">
                            Click To View
                        </a>
                        <img src={MSMECertificateImg} />
                        <h3>MSME Ceritificate</h3>
                    </div>
                    <div className="card">
                        <a href={incorporationCertificate} className="hidden" target="_blank">
                            Click To View
                        </a>
                        <img src={incorporationCertificate} />
                        <h3>Incorporation Certificate</h3>
                    </div>
                    <div className="card">
                        <a href={GSTIncorporation} className="hidden" target="_blank">
                            Click To View
                        </a>
                        <img src={GSTIncorporation} />
                        <h3>GST Certificate</h3>
                    </div>
                </div>
            </section>


            <section id="counter-section">
                <div className="container">
                    <div className="card">
                        <img src={truckPng} />
                        <Counter end={1032858} suffix="+" />
                        <p>Homes Moved</p>
                    </div>
                    <div className="card">
                        <img src={cityPng} />
                        <Counter end={600} suffix="+" />
                        <p>Cities Covered</p>
                    </div>
                    <div className="card">
                        <img src={verifiedBadgePng} />
                        <Counter end={3548} suffix="+" />
                        <p>Verified Professionals</p>
                    </div>
                    <div className="card">
                        <img src={peoplesPng} />
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

            <GetInTouch></GetInTouch>
            <OfficeLocation />
            <TrustUsSection />


            <section id="about-company">
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
            </section>

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