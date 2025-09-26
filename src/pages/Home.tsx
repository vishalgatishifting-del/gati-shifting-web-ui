import React, { useState } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import "./Home.scss"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FactoryIcon from '@mui/icons-material/Factory';
// import whyGatiImg from "../assets/why_gati_banner.jpg";
import stepsImg from "../assets/5-steps-banner.png";

import { Helmet } from "react-helmet-async";

import CountUp from "react-countup";

import moves from "../assets/transport.png";
import satisfaction from "../assets/satisfaction.png";
import city from "../assets/city.png";
import awards from "../assets/awards.png";

import DescriptionIcon from '@mui/icons-material/Description';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BalanceIcon from '@mui/icons-material/Balance';

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import WatchLaterIcon from '@mui/icons-material/WatchLater';

import StarRateIcon from '@mui/icons-material/StarRate';
import CollectionsIcon from '@mui/icons-material/Collections';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";



import { Link } from "react-router-dom";
import PinterestIcon from '@mui/icons-material/Pinterest';

import gatiSlider1 from "../assets/sliderImg/gatislider1.webp"
import gatiSlider2 from "../assets/sliderImg/gatislider2.webp"
import gatiSlider3 from "../assets/sliderImg/gatislider3.webp"
import getInTouchImg from "../assets/get-in-touch.png"
import FAQList from "../components/FAQList";
import OfficeLocation from "../components/OfficeLocation";


// import { IFaqItem } from "../models/App.model";
// import { AppConstant } from "../constants/app.constant";



const Home: React.FC = () => {


    const images = [gatiSlider2, gatiSlider1, gatiSlider3];


    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: false, threshold: 0.2 });


    const zoomIn: Variants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: (delay = 0) => ({
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, ease: "easeOut", delay },
        }),
    };


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


    return (
        <>

            <Helmet>
                <title>Gati Shifting Packers | Trusted Packers and Movers in India</title>
                <meta name="description" content="Gati Shifting Packers offers safe and affordable relocation services across India. Expert in home shifting, office relocation, car & bike transport, packing, unpacking, and warehousing with professional movers you can trust." />
                <meta name="keywords" content="gati house shifting service, Packers and Movers India, Home Shifting, Office Relocation, Car Transport, Bike Transport, Household Shifting, Packing and Moving Services, Affordable Packers, Trusted Movers" />
                <meta name="author" content="Rohan" />

                {/* Open Graph for Social Sharing */}
                <meta property="og:title" content="Gati Shifting Packers | Reliable Shifting Services" />
                <meta property="og:description" content="Gati Shifting Packers offers safe and affordable relocation services across India. Expert in home shifting, office relocation, car & bike transport, packing, unpacking, and warehousing with professional movers you can trust." />
                <meta property="og:image" content={gatiSlider2} />
                <meta property="og:url" content="https://gatishiftingpackers.com/" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Gati Shifting Packers" />
                <meta name="twitter:description" content="Gati Shifting Packers offers safe and affordable relocation services across India. Expert in home shifting, office relocation, car & bike transport, packing, unpacking, and warehousing with professional movers you can trust." />
                <meta name="twitter:image" content={gatiSlider2} />


                <meta name="robots" content="index, follow" />

                {/* language used in site */}
                <meta httpEquiv="content-language" content="en" /> 

                <link rel="canonical" href="https://gatishiftingpackers.com/" />


            </Helmet>

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
                        <form>
                            <input type="text" placeholder="Full Name*" />
                            <input type="text" placeholder="Mobile No*" />
                            <input type="text" placeholder="Email ID" />
                            <input type="text" placeholder={from} />
                            <input type="text" placeholder={to} />
                            <input type="text" placeholder={type} />
                        </form>
                        <button>Submit</button>

                    </div>
                </div>
            </motion.div>

            <section id="company-description">
                <div className="img-bx">
                    {/* <img src={whyGatiImg} /> */}
                </div>
                <div className="text-bx">
                    <h1>Moving Services by Gati Shifting Packers</h1>
                    <p>
                        Gati House Shifting Packers Movers are always ready to help make the moving and packing experience excellent, more efficient and easier for you and your family. Just sit back, chill out and know that you are in safe hands!

                        Relocating to a new place can be a tiring and difficult process. There are many things to arrange and pack, including heavy furniture, electrical appliances and fragile and valuable antique items.

                        Gati House Shifting's goal is to make your relocating experience as trouble-free as possible. Let us manage all of the difficult work. Our job is to be sure that your shifting is complete on time, every time.
                    </p>
                </div>
            </section>


            <section id="steps-section">
                <h1>4 Easy Steps to Hire Reliable Movers and Packers</h1>
                <div className="steps">
                    <motion.div
                        ref={ref2}
                        variants={zoomIn}
                        initial="hidden"
                        animate={inView2 ? "visible" : "hidden"}
                        custom={0.1}
                        className="p-10 bg-blue-200 rounded-xl shadow-lg w-80 mx-auto mt-20 text-center"
                    >
                        <div className="card">
                            <div>
                                <span className="icon"><DescriptionIcon></DescriptionIcon></span>
                                <h3>Fill Your Enquiry Form</h3>
                            </div>
                            <p>Tell us about your car or bike shifting needs. Our logistics team will connect you with trusted movers for competitive rates.</p>
                        </div>
                    </motion.div>



                    <motion.div
                        ref={ref2}
                        variants={zoomIn}
                        initial="hidden"
                        animate={inView2 ? "visible" : "hidden"}
                        custom={0.2}
                        className="p-10 bg-blue-200 rounded-xl shadow-lg w-80 mx-auto mt-20 text-center"
                    >
                        <div className="card">
                            <div>
                                <span className="icon"><HandshakeIcon></HandshakeIcon></span>
                                <h3>Get Quotes within 30 Minutes</h3>
                            </div>
                            <p>Receive fast quotes from verified car carriers with 5-star reviews. We ensure only trusted movers get through.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref2}
                        variants={zoomIn}
                        initial="hidden"
                        animate={inView2 ? "visible" : "hidden"}
                        custom={0.3}
                        className="p-10 bg-blue-200 rounded-xl shadow-lg w-80 mx-auto mt-20 text-center"
                    >
                        <div className="card">
                            <div>
                                <span className="icon"><BalanceIcon></BalanceIcon></span>
                                <h3>Select the Best Quote</h3>
                            </div>
                            <p>Make an informed choice based on business profiles, pricing, and reviews before selecting the best deal.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref2}
                        variants={zoomIn}
                        initial="hidden"
                        animate={inView2 ? "visible" : "hidden"}
                        custom={0.4}
                        className="p-10 bg-blue-200 rounded-xl shadow-lg w-80 mx-auto mt-20 text-center"
                    >
                        <div className="card">
                            <div>
                                <span className="icon"><LocalShippingIcon></LocalShippingIcon></span>
                                <h3>Get Safe & Secure Shifting</h3>
                            </div>
                            <p>Choose your mover and enjoy safe, secure relocation of your car or bike—stress-free and timely.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="customer-review">
                <h1>What Our Customers Say</h1>
                <h4>Real experiences from real people. Watch how we made their move stress-free.</h4>

                <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/MlgLNz2-wbo?si=CWB7OKc-LM9dVgoa" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </section>

            <section id="get-in-touch">
                <div className="content">
                    <div className="img-slider">
                        <img src={getInTouchImg} alt="Get In Touch Image" title="Get In Touch" loading="lazy" />
                    </div>
                    <div className="details">
                        <h1>Get In Touch</h1>
                        <p>For reliable shifting services across India, choose Gati House Shifting Packers & Movers. We provide door-to-door transport and affordable logistics solutions.</p>

                        <ul>
                            <li><CallIcon></CallIcon> <span>+91 72900 08200</span></li>
                            <li><EmailIcon></EmailIcon> <span>gatishiftingpackers@gmail.com</span></li>
                            <li><a href="https://wa.me/917290008200"><ChatBubbleIcon></ChatBubbleIcon><span>Chat Now</span></a></li>
                            <li><LocationOnIcon></LocationOnIcon><span>India</span></li>
                        </ul>
                        <div className="social-links">
                            <a href="https://www.instagram.com/gati_shifting_packers_pvt_ltd/profilecard/?igsh=eXYzY25mYXkyNG05"><InstagramIcon></InstagramIcon></a>
                            <a href="https://www.facebook.com/share/1CZTDwNPWw/"><FacebookIcon></FacebookIcon></a>
                            <a href="https://x.com/gati_shifting"><XIcon></XIcon></a>
                            <a href="https://www.linkedin.com/in/gati-shifting-6878bb377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LinkedInIcon></LinkedInIcon></a>
                            <a href="https://youtube.com/@gatishifting-moves?si=Lz283_yPnXuNCkQW"><YouTubeIcon></YouTubeIcon></a>
                            <a href="https://in.pinterest.com/infogatishiftingpackers"><PinterestIcon></PinterestIcon></a>
                        </div>
                    </div>
                </div>
            </section>

            <OfficeLocation />

            <section id="award-certifications">
                <h1>Awards & Certifications</h1>
                <div className="container">

                    <motion.div
                        ref={ref5}
                        variants={zoomIn}
                        initial="hidden"
                        animate={inView5 ? "visible" : "hidden"}
                        custom={0.4}
                        className="p-10 bg-blue-200 rounded-xl shadow-lg w-80 mx-auto mt-20 text-center"
                    >
                        <div className="card">
                            <div className="img-bx">
                                <img src={moves} alt="Gati has completed over 10,000 successful relocations across India" title="moves" loading="lazy" />

                            </div>
                            <div className="details">
                                <h3><CountUp start={0} end={10000} duration={2} suffix="+" /> Moves</h3>
                                <p>We’ve completed over 10,000 successful relocations nationwide.</p>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                        ref={ref5}
                        variants={zoomIn}
                        initial="hidden"
                        animate={inView5 ? "visible" : "hidden"}
                        custom={0.5}
                        className="p-10 bg-blue-200 rounded-xl shadow-lg w-80 mx-auto mt-20 text-center"
                    >
                        <div className="card">
                            <div className="img-bx">
                                <img src={satisfaction} alt="Customer Satisfaction" title="Customer Satisfaction" loading="lazy" />
                            </div>
                            <div className="details">
                                <h3><CountUp start={0} end={99} duration={2} suffix="%" /> Satisfaction</h3>
                                <p>Our customers rate us 4.9/5 for reliable, friendly service.</p>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                        ref={ref5}
                        variants={zoomIn}
                        initial="hidden"
                        animate={inView5 ? "visible" : "hidden"}
                        custom={0.6}
                        className="p-10 bg-blue-200 rounded-xl shadow-lg w-80 mx-auto mt-20 text-center"
                    >
                        <div className="card">
                            <div className="img-bx">
                                <img src={city} alt="Moving Services in 180+ cities" title="Cities" loading="lazy"/>
                            </div>
                            <div className="details">
                                <h3><CountUp start={0} end={180} duration={2} suffix="+" /> Cities</h3>
                                <p>We offer moving services in over 180 cities across India.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref5}
                        variants={zoomIn}
                        initial="hidden"
                        animate={inView5 ? "visible" : "hidden"}
                        custom={0.7}
                        className="p-10 bg-blue-200 rounded-xl shadow-lg w-80 mx-auto mt-20 text-center"
                    >
                        <div className="card">
                            <div className="img-bx">

                                <img src={awards} alt="Company Receiving best packers and movers award" title="Company's awards" loading="lazy" />
                            </div>
                            <div className="details">
                                <h3>
                                    <CountUp start={0} end={25} duration={2} suffix="+" />Awards

                                </h3>
                                <p>Recognized by leading industry bodies for excellence in service.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>


            <section id="trust-us-section">
                <h1>Trust Us With Confidence</h1>
                <p>Verify our reliability through real reviews, videos, images, or even a direct call:</p>
                <div className="cards">
                    <Link className="card" to="/review">
                        <StarRateIcon className="icon"></StarRateIcon>
                        <span>Customer Review</span>
                    </Link>
                    <Link className="card" to="/review">
                        <CollectionsIcon className="icon"></CollectionsIcon>
                        <span>Photo Gallery</span>
                    </Link>
                    <Link className="card" to="/review">
                        <PlayCircleIcon className="icon"></PlayCircleIcon>
                        <span>Video Gallery</span>
                    </Link>
                    <Link className="card" to="/review">
                        <WhatsAppIcon className="icon"></WhatsAppIcon>
                        <span>Chat With Us</span>
                    </Link>
                    <Link className="card" to="/review">
                        <CallIcon className="icon"></CallIcon>
                        <span>Call Now</span>
                    </Link>
                </div>
            </section>


            <section id="about-company">
                <div className="container">
                    <div className="img-bx">
                        <img src={stepsImg} alt="Gati relocation services including packing and unpacking, loading and unloading, secure transportation with GPS vehicles, car and bike relocation, transit insurance, storage, warehousing, and all-in-one transport solutions" title="Steps" loading="lazy"/>
                    </div>
                    <div className="detail">
                        <h2>About Us | Comprehensive Moving Solutions by Gati Packers and Movers in India</h2>
                        <p>At Gati Packers and Movers, we specialize in delivering seamless and stress-free relocation experiences across India. With years of expertise and a client-first approach, we offer customized moving solutions that cater to individual, commercial, and industrial relocation needs.</p>
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
        </>
    )
}

export default Home