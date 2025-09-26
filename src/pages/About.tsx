import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Slider from "react-slick";

import "./About.scss";
import about_company_photo from "../assets/about_company_photo.png"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import houseShiftingImg from "../assets/house_shifting_img.jpg"
import storageImg from "../assets/storage_img.jpg"
import internationalImg from "../assets/international_img.jpg"
import carImg from "../assets/car_img.jpg"
import bikeImg from "../assets/bike_img.jpg"
import petImg from "../assets/pet_img.jpg"
import officeImg from "../assets/office_img.jpg"
import commercialImg from "../assets/commercial_img.jpg"
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';


// Partners Logo
import dtdc from "../assets/dtdc.png";
import dhl from "../assets/dhl.png";
import bluedart from "../assets/blue_dart.png";
import xpressbees from "../assets/xpressbee.png";
import delhivery from "../assets/delhivery.png";
import aramex from "../assets/partners/aramex-logo-english.webp";
import ecom from "../assets/partners/ecom-express.webp";
import icWhite from "../assets/partners/ic-white-logo.abea573f.webp";
import fedex from "../assets/partners/logo-fedex.webp";
import ups from "../assets/partners/ups-logo.webp";
import sb from "../assets/partners/logo-sb.webp";
import professional from "../assets/partners/Professional-ouriers.webp";
import rmg from "../assets/partners/rmg_logo.webp";
import shadowfax from "../assets/partners/Shadowfax.webp";
import trackon from "../assets/partners/trackon_logo.webp";




// Images for "Nationwide Presence" Section
import andhra_pradesh from "../assets/andhra-pradesh.jpeg"
import arunachal_pradesh from "../assets/arunachal-pradesh.jpeg"
import assam from "../assets/assam.jpeg"
import bihar from "../assets/bihar.jpeg"
import chhattisgarh from "../assets/chhattisgarh.jpeg"
import goa from "../assets/goa.jpeg"
import gujarat from "../assets/gujarat.jpeg"
import haryana from "../assets/haryana.jpeg"
import himachal_pradesh from "../assets/himachal-pradesh.jpeg"
import jharkhand from "../assets/jharkhand.jpeg"
import karnataka from "../assets/karnataka.jpeg"
import kerala from "../assets/kerala.jpeg"
import madhya_pradesh from "../assets/madhya-pradesh.jpeg"
import maharashtra from "../assets/maharashtra.jpeg"
import manipur from "../assets/manipur.jpeg"
import meghalaya from "../assets/meghalaya.jpeg"
import mizoram from "../assets/mizoram.jpeg"
import nagaland from "../assets/nagaland.jpeg"
import odisha from "../assets/odisha.jpeg"
import punjab from "../assets/punjab.jpeg"
import rajasthan from "../assets/rajasthan.jpeg"
import sikkim from "../assets/sikkim.jpeg"
import tamil_nadu from "../assets/tamil-nadu.jpeg"
import telangana from "../assets/telangana.jpeg"
import tripura from "../assets/tripura.jpeg"
import uttar_pradesh from "../assets/uttar-pradesh.jpeg"
import uttarakhand from "../assets/uttarakhand.jpeg"
import west_bengal from "../assets/west-bengal.jpeg"
import andaman_nicobar from "../assets/andaman-nicobar.jpeg"
import dadra_nagar_haveli from "../assets/dadra-nagar-haveli.jpeg"
import daman_diu from "../assets/daman-diu.jpeg"
import jammu_kashmir from "../assets/jammu-kashmir.jpeg"
import ladakh from "../assets/ladakh.jpeg"
import puducherry from "../assets/puducherry.jpeg"


// Images for International Presence

import bangladesh from "../assets/internationalPresence/bangladesh.webp";
import canada from "../assets/internationalPresence/canada.webp";
import india from "../assets/internationalPresence/india.webp";
import malaysia from "../assets/internationalPresence/malaysia.webp";
import nepal from "../assets/internationalPresence/nepal.webp";
import portBlair from "../assets/internationalPresence/port-blair.webp";
import russia from "../assets/internationalPresence/russia.webp";
import singapore from "../assets/internationalPresence/singapore.webp";
import uae from "../assets/internationalPresence/uae.webp";
import uk from "../assets/internationalPresence/uk.webp";
import usa from "../assets/internationalPresence/usa.webp";



// icons for "Why Gati Shiftin and Packers" Section
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import Groups3Icon from '@mui/icons-material/Groups3';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

// Images for Brand That Trusted Us

import ContactForm from "../components/ContactForm";

import { Helmet } from "react-helmet-async";

import gatiSlider2 from "../assets/sliderImg/gatislider2.webp"

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@mui/material";
import BrandList from "../components/BrandsList";
import { useState } from "react";


const About = () => {








    const rows = [
        { Service_Features: "Certified Vehicle", Typical_Local_Movers: <CheckIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Insurance Cover</> },
        { Service_Features: "Vetted Drivers", Typical_Local_Movers: <CloseIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Police Verified</> },
        { Service_Features: "Tracking System", Typical_Local_Movers: <CloseIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + App Updates</> },
        { Service_Features: "Packing Quality", Typical_Local_Movers: <CheckIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Recyclable Wraps</> },
        { Service_Features: "Furniture Handling", Typical_Local_Movers: <CheckIcon />, Rehousing_Packers_Movers: <><CloseIcon /> + Tools Included</> },
        { Service_Features: "Staff Support", Typical_Local_Movers: <CloseIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Coordinator</> },
        { Service_Features: "Cushioning", Typical_Local_Movers: <CloseIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Dust-Free</> },
        { Service_Features: "Storage", Typical_Local_Movers: <CloseIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Temp Regulated</> },
        { Service_Features: "Item Protection", Typical_Local_Movers: <CloseIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Full Coverage</> },
        { Service_Features: "Helpline", Typical_Local_Movers: <CloseIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Move Advisor</> },
        { Service_Features: "Pricing", Typical_Local_Movers: <CloseIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Transparent</> },
        { Service_Features: "Eco-Friendly", Typical_Local_Movers: <CloseIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Green Materials</> },
    ];


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        cssEase: "linear",
        pauseOnHover: false,
    };


    const images = [
        { src: andhra_pradesh, title: "Andhra Pradesh" },
        { src: arunachal_pradesh, title: "Arunachal Pradesh" },
        { src: assam, title: "Assam" },
        { src: bihar, title: "Bihar" },
        { src: chhattisgarh, title: "Chhattisgarh" },
        { src: goa, title: "Goa" },
        { src: gujarat, title: "Gujarat" },
        { src: haryana, title: "Haryana" },
        { src: himachal_pradesh, title: "Himachal Pradesh" },
        { src: jharkhand, title: "Jharkhand" },
        { src: karnataka, title: "Karnataka" },
        { src: kerala, title: "Kerala" },
        { src: madhya_pradesh, title: "Madhya Pradesh" },
        { src: maharashtra, title: "Maharashtra" },
        { src: manipur, title: "Manipur" },
        { src: meghalaya, title: "Meghalaya" },
        { src: mizoram, title: "Mizoram" },
        { src: nagaland, title: "Nagaland" },
        { src: odisha, title: "Odisha" },
        { src: punjab, title: "Punjab" },
        { src: rajasthan, title: "Rajasthan" },
        { src: sikkim, title: "Sikkim" },
        { src: tamil_nadu, title: "Tamil Nadu" },
        { src: telangana, title: "Telangana" },
        { src: tripura, title: "Tripura" },
        { src: uttar_pradesh, title: "Uttar Pradesh" },
        { src: uttarakhand, title: "Uttarakhand" },
        { src: west_bengal, title: "West Bengal" },
        { src: andaman_nicobar, title: "Andaman & Nicobar" },
        { src: dadra_nagar_haveli, title: "Dadra & Nagar Haveli" },
        { src: daman_diu, title: "Daman & Diu" },
        { src: jammu_kashmir, title: "Jammu & Kashmir" },
        { src: ladakh, title: "Ladakh" },
        { src: puducherry, title: "Puducherry" }
    ];

    const images2 = [
        { src: bangladesh, title: "Bangladesh" },
        { src: canada, title: "Canada" },
        { src: india, title: "India" },
        { src: malaysia, title: "Malaysia" },
        { src: nepal, title: "Nepal" },
        { src: portBlair, title: "Port Blair" },
        { src: russia, title: "Russia" },
        { src: singapore, title: "Singapore" },
        { src: uae, title: "Dubai (UAE)" },
        { src: uk, title: "United Kingdom" },
        { src: usa, title: "United State" },
    ];


    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const imagesForC: string[] = [
        "https://picsum.photos/id/1015/600/400",
        "https://picsum.photos/id/1016/600/400",
        "https://picsum.photos/id/1018/600/400",
        "https://picsum.photos/id/1020/600/400",
        "https://picsum.photos/id/1024/600/400",
    ];

    return (
        <>

            <Helmet>
                {/* all meta tags  */}
                <title>About Gati Shifting Packers</title>
                <meta name="description" content="Gati Shifting Packers is a trusted name for safe and affordable relocation services across India.
We provide expert solutions as Gati Shifting Packers in Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, and Surat.
With trained staff, quality packing, and timely delivery, we ensure a smooth and hassle-free moving experience."/>
                <meta name="keywords" content="Gati Shifting Packers in Delhi, Gati Shifting Packers in Mumbai, Gati Shifting Packers in Bangalore, Gati Shifting Packers in Hyderabad, Gati Shifting Packers in Chennai, Gati Shifting Packers in Kolkata, Gati Shifting Packers in Pune, Gati Shifting Packers in Ahmedabad, Gati Shifting Packers in Surat, Gati Shifting Packers in Jaipur, Gati Shifting Packers in Lucknow, Gati Shifting Packers in Kanpur, Gati Shifting Packers in Nagpur, Gati Shifting Packers in Indore" />
                <meta name="author" content="Rohan" />

                {/* Open Graph for social sharing */}
                <meta property="og:title" content="About Gati Shifting Packers – Trusted Packers and Movers in India" />
                <meta property="og:description" content="Gati Shifting Packers offers reliable relocation services in Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Surat and more." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://gatishiftingpackers.com/" />
                <meta property="og:image" content={gatiSlider2} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Gati Shifting Packers – Trusted Packers and Movers in India" />
                <meta name="twitter:description" content="Gati Shifting Packers offers reliable relocation services in Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Surat and more." />
                <meta name="twitter:image" content={gatiSlider2} />
                <meta name="robots" content="index, folllow" />
                <meta httpEquiv="content-language" content="en" />
            </Helmet>
            <section id="company-info">
                <div className="container">
                    <div className="img-bx">
                        <img src={about_company_photo} alt="About Gati Shifting Packers – Trusted packers and movers" title="about gati shifting packers" loading="lazy" />
                    </div>
                    <div className="details">
                        <h1>About Us</h1>
                        <p>
                            At Gati, we redefine the moving experience by offering end-to-end packers and movers solutions across India. Whether you're relocating locally or to another state, we make every transition seamless, stress-free, and efficient.

                            Our expert team handles everything—from careful packing with premium materials to timely transportation and safe delivery. With clear, upfront pricing and personalized moving plans, we’ve become the go-to choice for individuals, families, and professionals.
                        </p>

                        <ul>
                            <li><CheckCircleIcon className="icon"></CheckCircleIcon> 100% Safety Assurance</li>
                            <li><CheckCircleIcon className="icon"></CheckCircleIcon> Skilled & Trained Manpower</li>
                            <li><CheckCircleIcon className="icon"></CheckCircleIcon> 24/7 Real-Time Support</li>
                            <li><CheckCircleIcon className="icon"></CheckCircleIcon> On-Time Pickup & Delivery</li>
                            <li><CheckCircleIcon className="icon"></CheckCircleIcon> Premium Packing Supplies</li>
                        </ul>
                        <Link className="contact-btn" to="/contact">Enquiry Now</Link>
                    </div>
                </div>
            </section>

            <div className="image-box">
                {imagesForC.map((src, index) => (
                    <div
                        key={index}
                        className={`image-item ${activeIndex === index ? "active" : ""}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <img src={src} alt={`img-${index}`} />
                    </div>
                ))}
            </div>

            <section id="our-services">
                <h1>Our Services</h1>
                <div className="container">
                    <div className="card">
                        <div className="img-bx">
                            <img src={houseShiftingImg} alt="Professional house shifting services by Gati Shifting Packers in India" title="HouseShiftingservices" loading="lazy" />
                        </div>
                        <h4>House Shifting</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={storageImg} alt="Safe and reliable storage services by Gati Shifting Packers" title="Storageservice" loading="lazy" />
                        </div>
                        <h4>Storage</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={internationalImg} alt="Professional international movers and packers – Gati Shifting Packers" title="internationalservice" loading="lazy" />
                        </div>
                        <h4>International</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={carImg} alt="Gati Shifting Packers team handling secure vehicle transport" title="Carservice" loading="lazy" />
                        </div>
                        <h4>Car</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={bikeImg} alt="Gati Shifting Packers providing safe bike and motorcycle transportation services" title="biketransportation" loading="lazy" />
                        </div>
                        <h4>Bike</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={petImg} alt="Professional pet relocation services by Gati Shifting Packers" title="petTransportation" loading="lazy" />
                        </div>
                        <h4>Pet</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={officeImg} alt="Secure and efficient office shifting by Gati Shifting Packers" title="officeshifting" loading="lazy" />
                        </div>
                        <h4>Office</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={commercialImg} alt="Safe and reliable commercial shifting by Gati Shifting Packers" title="commercialshifting" loading="lazy" />
                        </div>
                        <h4>Commercial</h4>
                    </div>
                </div>
            </section>

            <section id="table-section">
                <h1>Service Comparison</h1>
                <div className="container">
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#2563eb' }}>
                                    <TableCell align="center" sx={{ color: '#fff' }}><b>Service Features</b></TableCell>
                                    <TableCell align="center" sx={{ color: '#fff' }}><b>Typical Local Movers</b></TableCell>
                                    <TableCell align="center" sx={{ color: '#fff' }}><b>Gati Shifting Packers</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow>
                                        <TableCell align="center">{row.Service_Features}</TableCell>
                                        <TableCell align="center">{row.Typical_Local_Movers}</TableCell>
                                        <TableCell align="center">{row.Rehousing_Packers_Movers}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </section>

            <section id="partners">
                <h1>Our Serivce Partners</h1>

                <div className="container">
                    <div className="row">
                        <div className="card">
                            <img src={aramex} alt="dtdc company logo" title="dtdclogo" loading="lazy" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="card">
                            <img src={dtdc} alt="dtdc company logo" title="dtdclogo" loading="lazy" />
                        </div>
                        <div className="card bg-dark">
                            <img src={fedex} alt="dtdc company logo" title="dtdclogo" loading="lazy" />
                        </div>
                        <div className="card">
                            <img src={professional} alt="dtdc company logo" title="dtdclogo" loading="lazy" />
                        </div>
                        <div className="card">
                            <img src={trackon} alt="dtdc company logo" title="dtdclogo" loading="lazy" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="card">
                            <img src={dhl} alt="dhl-company-logo" title="dhllogo" loading="lazy" />
                        </div>
                        <div className="card">
                            <img src={bluedart} alt="bluedart-company-logo" title="bluedartlogo" loading="lazy" />
                        </div>
                        <div className="card">
                            <img src={xpressbees} alt="xpressbeescompanylogo" title="xpressbeeslogo" loading="lazy" />
                        </div>
                        <div className="card  bg-dark">
                            <img src={ecom} alt="xpressbeescompanylogo" title="xpressbeeslogo" loading="lazy" />
                        </div>
                        <div className="card">
                            <img src={ups} alt="xpressbeescompanylogo" title="xpressbeeslogo" loading="lazy" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="card">
                            <img src={rmg} alt="xpressbeescompanylogo" title="xpressbeeslogo" loading="lazy" />
                        </div>
                        <div className="card">
                            <img src={delhivery} alt="delhivery-company-logo" title="delhiverylogo" loading="lazy" />
                        </div>
                        <div className="card  bg-dark">
                            <img src={icWhite} alt="delhivery-company-logo" title="delhiverylogo" loading="lazy" />
                        </div>
                        <div className="card">
                            <img src={sb} alt="delhivery-company-logo" title="delhiverylogo" loading="lazy" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="card">
                            <img src={shadowfax} alt="delhivery-company-logo" title="delhiverylogo" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="presence">
                <h1>National Presence</h1>

                <div className="slider-container">
                    <Slider {...settings}>
                        {images.map((item, index) => (
                            <Box key={index} sx={{ position: "relative", outline: "none" }}>
                                <div className="card-container">
                                    <div className="img-bx"><img src={item.src} alt={`Slide ${index + 1}`} className="state-img" /></div>
                                    <span>{item.title}</span>
                                </div>
                            </Box>
                        ))}
                    </Slider>
                </div>


                <h1>International Presence</h1>
                <div className="slider-container2">
                    <Slider {...settings}>
                        {images2.map((item, index) => (
                            <Box key={index} sx={{ position: "relative", outline: "none" }}>
                                <div className="card-container">
                                    <div className="img-bx"><img src={item.src} alt={`Slide ${index + 1}`} className="state-img" /></div>
                                    <span>{item.title}</span>
                                </div>
                            </Box>
                        ))}
                    </Slider>
                </div>
            </section>

            <section id="why-choose-sec">
                <h1>Why Choose Gati Packers & Movers</h1>
                <div className="container">
                    <div className="card">
                        <div className="icon">
                            <LocalPoliceIcon className="i"></LocalPoliceIcon>
                        </div>
                        <h4>10+ Years Experience</h4>
                        <div className="desc">
                            Proven expertise in safe and reliable relocations across India.
                        </div>
                    </div>


                    <div className="card">
                        <div className="icon">
                            <Groups3Icon className="i"></Groups3Icon>
                        </div>
                        <h4>Verified Teams</h4>
                        <div className="desc">
                            All staff are trained and background verified for professionalism.
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <LocalShippingIcon className="i"></LocalShippingIcon>
                        </div>
                        <h4>Door-to-Door Shifting</h4>
                        <div className="desc">
                            We pick up and deliver right from your doorstep nationwide.
                        </div>
                    </div>


                    <div className="card">
                        <div className="icon">
                            <CurrencyRupeeIcon className="i"></CurrencyRupeeIcon>
                        </div>
                        <h4>Transparent Pricing</h4>
                        <div className="desc">
                            Upfront pricing with no hidden charges.
                        </div>
                    </div>


                    <div className="card">
                        <div className="icon">
                            <SupportAgentIcon className="i"></SupportAgentIcon>
                        </div>
                        <h4>24/7 Support</h4>
                        <div className="desc">
                            Always available to assist you with tracking and help.
                        </div>
                    </div>
                </div>
            </section>
            <BrandList />

            <ContactForm></ContactForm>

        </>
    )
}

export default About;