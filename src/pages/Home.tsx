import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "./Home.scss"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FactoryIcon from '@mui/icons-material/Factory';
import whyGatiImg from "../assets/why_gati_banner.jpg";

import DescriptionIcon from '@mui/icons-material/Description';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BalanceIcon from '@mui/icons-material/Balance';

const Home: React.FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        "src/assets/gatislider1.png",
        "src/assets/gatislider2.jpg",
        "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
    ];

    return (
        <>
            <Box sx={{ width: "100%", overflow: "hidden" }}>
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <Box key={index} sx={{ position: "relative", outline: "none" }}>
                            <img
                                src={img}
                                alt={`slide-${index}`}
                                style={{
                                    width: "100%",
                                    height: "450px",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    ))}
                </Slider>
            </Box>

            <div className="service-tab">
                <div className="tabs">
                    <button className="active"><LocalShippingIcon></LocalShippingIcon> <span>Domestic</span></button>
                    <button><DirectionsCarFilledIcon></DirectionsCarFilledIcon><span>Car</span></button>
                    <button><WarehouseIcon></WarehouseIcon><span>Storage</span></button>
                    <button><ConnectingAirportsIcon></ConnectingAirportsIcon><span>Flight</span></button>
                    <button><LanguageIcon></LanguageIcon><span>International</span></button>
                    <button><BusinessCenterIcon></BusinessCenterIcon><span>Office</span></button>
                    <button><FactoryIcon></FactoryIcon><span>Commercial</span></button>
                </div>

                <div className="form-area">
                    <h3>Get a free <span>Domestic Moving</span> Quote</h3>
                    <form>
                        <input type="text" placeholder="Full Name*" />
                        <input type="text" placeholder="Mobile No*" />
                        <input type="text" placeholder="Email ID" />
                        <input type="text" placeholder="From*" />
                        <input type="text" placeholder="To*" />
                        <input type="text" placeholder="Goods Type (e.g., Household, Furniture)" />
                    </form>
                    <button>Submit</button>

                </div>
            </div>

            <section id="company-description">
                <div className="img-bx">
                    <img src={whyGatiImg} />
                </div>
                <div className="text-bx">
                    <h1>Moving Services by Gati Shifting Packers Movers</h1>
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

            <section id="customer-review">
                <h1>What Our Customers Say</h1>
                <h4>Real experiences from real people. Watch how we made their move stress-free.</h4>

                <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/MlgLNz2-wbo?si=CWB7OKc-LM9dVgoa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section id="get-in-touch">
                <div className="content">
                    <div className="img-slider">
                        <img src={images[0]} />
                    </div>
                    <div className="details">
                        <h1>Get In Touch</h1>
                        <p>For reliable shifting services across India, choose Gati House Shifting Packers & Movers. We provide door-to-door transport and affordable logistics solutions.</p>

                        <ul>
                            <li>+91 72900 08200</li>
                            <li>gatishiftingpackers@gmail.com</li>
                            <li>Chat Now</li>
                            <li>India</li>
                        </ul>
                        <div className="social-links">
                            <a href="#">f</a>
                            <a href="#">i</a>
                            <a href="#">x</a>
                            <a href="#">li</a>
                            <a href="#">y</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home