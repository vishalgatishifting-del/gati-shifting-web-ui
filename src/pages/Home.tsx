import React, { useState, useRef } from "react";
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
import stepsImg from "../assets/5-steps-banner.png";
import { Helmet } from "react-helmet-async";
import DescriptionIcon from '@mui/icons-material/Description';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BalanceIcon from '@mui/icons-material/Balance';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gatiSlider1 from "../assets/sliderImg/gatislider1.webp"
import gatiSlider2 from "../assets/sliderImg/gatislider2.webp"
import gatiSlider3 from "../assets/sliderImg/gatislider3.webp"
import gatiSlider4 from "../assets/sliderImg/gatislider4.webp"
import FAQList from "../components/FAQList";
import OfficeLocation from "../components/OfficeLocation";
import axios from "axios";
import GetInTouch from "../components/GetInTouch";
import AwardCertification from "../components/AwardCertification";
import TrustUsSection from "../components/TrustUsSection";
import ReviewVideo from "../components/ReviewVideos";

// import emailjs from 'emailjs-com';
import { sendEmail } from "../utils/emailHelper";
import CircularProgress from '@mui/material/CircularProgress';
import ReCAPTCHA from "react-google-recaptcha"




// import { IFaqItem } from "../models/App.model";
// import { AppConstant } from "../constants/app.constant";


// declare global {
//     interface Window {
//         gtag: (...args: any[]) => void;
//     }
// }

const Home: React.FC = () => {


    const images = [gatiSlider2, gatiSlider1, gatiSlider3, gatiSlider4];


    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.1 });




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


    interface FormData {
        name: string;
        email1: string;
        phone_office: string;
        pickup_location_c: string;
        drop_location_c: string;
        service_detail_c: string;
        goods_type_c: string;
    }

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email1: "",
        phone_office: "",
        pickup_location_c: "",
        drop_location_c: "",
        service_detail_c: "",
        goods_type_c: text
    });



    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const recaptchaRef = useRef<any>(null); // 👈 Ref banaya


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaValue) {
            alert("Please verify that you're not a robot!");
            return;
        }
        setLoading(true);
        setSuccess("");

        // Yaha updated object banao
        const updatedData = { ...formData, goods_type_c: text };

        console.log("Final goods_type_c:", updatedData.goods_type_c);

        const jsonParam = JSON.stringify(updatedData);

        const body = new FormData();
        body.append("user", "admin_user");
        body.append("pass", "p8mju5dnk");
        body.append("url", "https://icrmondemand.com/wellnect");
        body.append("module_name", "Enqu1_Enquiry1");
        body.append("jsonParam", jsonParam);

        try {
            const apiUrl = "https://icrmondemand.com/wellnect/index.php?entryPoint=CreateEnquiryAPI";

            await axios.post(apiUrl, body);

            const templateParams = {
                name: formData.name,
                email: formData.email1,
                phone: formData.phone_office,
                pickup_location: formData.pickup_location_c,
                drop_location: formData.drop_location_c,
                service_detail: formData.service_detail_c,
                good_type: formData.goods_type_c,
            };
            sendEmail(templateParams)
            setSuccess("Form successfully submitted!");

            setFormData({
                name: "",
                email1: "",
                phone_office: "",
                pickup_location_c: "",
                drop_location_c: "",
                service_detail_c: "",
                goods_type_c: text, // reset with current tab
            });
            recaptchaRef.current?.reset();
            setCaptchaValue(null);

        } catch (error) {
            console.error("Error submitting form:", error);
            setSuccess("Error submitting form. Try again!");
        } finally {
            setLoading(false);
        }
    };



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

                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Full Name*" name="name" onChange={handleChange} value={formData.name} required />
                            <input type="text" placeholder="Mobile No*" name="phone_office" onChange={handleChange} value={formData.phone_office} required />
                            <input type="text" placeholder="Email ID" name="email1" onChange={handleChange} value={formData.email1} required />
                            <input type="text" placeholder={from} name="pickup_location_c" onChange={handleChange} value={formData.pickup_location_c} required />
                            <input type="text" placeholder={to} name="drop_location_c" onChange={handleChange} value={formData.drop_location_c} required />
                            <input type="text" placeholder={type} name="service_detail_c" onChange={handleChange} value={formData.service_detail_c} required />
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6LfaOf4rAAAAAGZBXvb01FTAtYQoh0UXm4ChBDHV"
                                onChange={(value: string | null) => setCaptchaValue(value)}
                            />
                            <button className="form-submit-btn" type="submit" disabled={loading}>
                                {loading ? <CircularProgress size="30px" /> : "Get Free Quote"}
                            </button>
                        </form>
                        <span className="success-msg">{success && <p>{success}</p>}</span>
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

            <ReviewVideo></ReviewVideo>
            <GetInTouch></GetInTouch>
            <OfficeLocation />
            <AwardCertification></AwardCertification>
            <TrustUsSection />


            <section id="about-company">
                <div className="container">
                    <div className="img-bx">
                        <img src={stepsImg} alt="Gati relocation services including packing and unpacking, loading and unloading, secure transportation with GPS vehicles, car and bike relocation, transit insurance, storage, warehousing, and all-in-one transport solutions" title="Steps" loading="lazy" />
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